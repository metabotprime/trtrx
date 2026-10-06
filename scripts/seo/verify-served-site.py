#!/usr/bin/env python3
"""Check the served site before release, without submitting any URLs."""
import argparse
import concurrent.futures
from datetime import datetime, timezone
from html.parser import HTMLParser
import json
from pathlib import Path
from urllib.error import HTTPError
from urllib.parse import urljoin, urlsplit
from urllib.request import Request, urlopen
import xml.etree.ElementTree as ET


class Page(HTMLParser):
    def __init__(self):
        super().__init__()
        self.h1 = 0
        self.title = ""
        self.in_title = False
        self.meta = {}
        self.canonicals = []
        self.links = []
        self.ids = set()
        self.ld = []
        self.in_ld = False
        self.buffer = ""

    def handle_starttag(self, tag, attributes):
        attrs = dict(attributes)
        if attrs.get("id"):
            self.ids.add(attrs["id"])
        if tag == "h1":
            self.h1 += 1
        if tag == "title":
            self.in_title = True
        if tag == "meta":
            self.meta[attrs.get("name", attrs.get("property"))] = attrs.get("content", "")
        if tag == "link" and attrs.get("rel") == "canonical":
            self.canonicals.append(attrs.get("href", ""))
        if tag == "a" and attrs.get("href"):
            self.links.append(attrs["href"])
        if tag == "script" and attrs.get("type") == "application/ld+json":
            self.in_ld, self.buffer = True, ""

    def handle_endtag(self, tag):
        if tag == "title":
            self.in_title = False
        if tag == "script" and self.in_ld:
            self.ld.append(json.loads(self.buffer))
            self.in_ld = False

    def handle_data(self, data):
        if self.in_title:
            self.title += data
        if self.in_ld:
            self.buffer += data


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("base", help="Served origin, such as http://localhost:3108")
    parser.add_argument("--canonical", default="https://trtrx.com")
    parser.add_argument("--public", action="store_true", help="Expect indexable canonical pages")
    parser.add_argument("--output", type=Path)
    args = parser.parse_args()
    base = args.base.rstrip("/")
    errors = []

    def fetch(path):
        try:
            with urlopen(Request(base + path, headers={"User-Agent": "TRTrx-release-check/1.0"}), timeout=30) as response:
                return response.status, dict(response.headers), response.read()
        except HTTPError as error:
            return error.code, dict(error.headers), error.read()

    status, _, xml = fetch("/sitemap.xml")
    assert status == 200, f"sitemap HTTP {status}"
    locs = [node.text for node in ET.fromstring(xml).findall("{*}url/{*}loc")]
    assert len(locs) == len(set(locs)), "Duplicate sitemap URLs"
    assert all(urlsplit(url).netloc == urlsplit(args.canonical).netloc for url in locs), "Mixed sitemap hosts"
    paths = sorted({urlsplit(url).path or "/" for url in locs} | {"/launch", "/sign-in"})
    pages = {}

    def inspect(path):
        status, headers, body = fetch(path)
        page = Page()
        page.feed(body.decode("utf-8"))
        return path, status, {key.lower(): value for key, value in headers.items()}, page, len(body)

    with concurrent.futures.ThreadPoolExecutor(max_workers=6) as pool:
        for path, status, headers, page, size in pool.map(inspect, paths):
            pages[path] = page
            if status != 200:
                errors.append(f"{path}: HTTP {status}")
            if page.h1 != 1:
                errors.append(f"{path}: {page.h1} H1 tags")
            if not page.title or not page.meta.get("description"):
                errors.append(f"{path}: missing title/description")
            if page.canonicals != [args.canonical.rstrip("/") + path]:
                errors.append(f"{path}: unexpected canonical {page.canonicals}")
            held = not args.public or path in {"/launch", "/sign-in"}
            has_noindex = "noindex" in page.meta.get("robots", "") or "noindex" in headers.get("x-robots-tag", "")
            if held != has_noindex:
                errors.append(f"{path}: indexing state does not match release")
            if not args.public and "noindex" not in page.meta.get("robots", ""):
                errors.append(f"{path}: noindex missing from HTML")

    for path, page in pages.items():
        for href in page.links:
            target = urlsplit(urljoin(args.canonical + path, href))
            if target.netloc != urlsplit(args.canonical).netloc:
                continue
            destination = target.path or "/"
            if destination not in pages:
                errors.append(f"{path}: unverified internal link {href}")
            elif target.fragment and target.fragment not in pages[destination].ids:
                errors.append(f"{path}: missing anchor {href}")

    for path in ("/blog/not-a-real-article", "/blog/category/not-a-real-category", "/blog/category/science"):
        status, _, _ = fetch(path)
        if status != 404:
            errors.append(f"{path}: expected 404, got {status}")
    for path in ("/robots.txt", "/llms.txt", "/llms-full.txt", "/pricing.md", "/favicon.svg", "/favicon.ico", "/api/og?variant=logo"):
        status, _, body = fetch(path)
        if status != 200 or not body:
            errors.append(f"{path}: missing/empty, HTTP {status}")

    result = {"observedAt": datetime.now(timezone.utc).isoformat(), "base": base, "expectedPublic": args.public, "sitemapURLs": len(locs), "pagesChecked": len(pages), "jsonLdParsed": sum(len(page.ld) for page in pages.values()), "errors": sorted(set(errors))}
    if args.output:
        args.output.write_text(json.dumps(result, indent=2) + "\n")
    print(json.dumps(result, indent=2))
    raise SystemExit(1 if errors else 0)


if __name__ == "__main__":
    main()
