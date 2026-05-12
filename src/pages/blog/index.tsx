import type { GetStaticProps } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { PageShell } from '@/components/layout/PageShell';
import { SEOHead } from '@/components/seo/SEOHead';
import { EntityGraphSchema } from '@/components/seo/schemas/EntityGraphSchema';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { FooterCTABand } from '@/components/sections/FooterCTABand';
import {
  BLOG_POSTS,
  CATEGORY_LABELS,
  getFeaturedBlogPosts,
} from '@/content/blog';

type Props = {
  /** Pre-formatted on server so SSR/CSR don't diverge and hydrate-mismatch. */
  publishedAtDisplay: Record<string, string>;
};

export default function BlogIndexPage({ publishedAtDisplay }: Props) {
  const totalPosts = BLOG_POSTS.length;
  const featured = getFeaturedBlogPosts().slice(0, 3);
  const sorted = [...BLOG_POSTS].sort((a, b) =>
    b.publishedAt.localeCompare(a.publishedAt),
  );

  return (
    <>
      <SEOHead
        title="The trtrx Blog"
        description={`${totalPosts} plain-English articles on testosterone replacement therapy, written and reviewed by physicians who specialize in men's hormone health.`}
        path="/blog"
        ogImage="/og/blog.png"
      />
      <EntityGraphSchema
        title="The trtrx Blog"
        description={`${totalPosts} plain-English articles on testosterone replacement therapy, written and reviewed by physicians who specialize in men's hormone health.`}
        url="/blog"
        pageType="CollectionPage"
      />

      <PageShell>
        <Breadcrumbs
          items={[
            { name: 'Home', href: '/' },
            { name: 'Blog', href: '/blog' },
          ]}
        />

        {/* Hero */}
        <section className="bg-surface">
          <div className="container max-w-hero px-5 pb-12 pt-12 text-center md:pb-16 md:pt-20">
            <p className="eyebrow mb-7 inline-flex flex-wrap justify-center gap-x-3 gap-y-1">
              <span>Resources</span>
              <span aria-hidden className="text-muted/60">
                ·
              </span>
              <span>Reviewed By Physicians</span>
            </p>
            <h1
              className="font-serif text-display-xl font-medium text-primary"
              style={{ fontVariationSettings: "'opsz' 144" }}
            >
              The trtrx <span className="display-italic text-primary">Blog.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-[1.55] text-muted md:text-xl">
              {totalPosts} plain-English articles on testosterone replacement
              therapy. Written by clinicians, reviewed by physicians.
            </p>
          </div>
        </section>

        {/* Featured strip */}
        {featured.length > 0 && (
          <section className="bg-surface">
            <div className="container py-8 md:py-12">
              <p className="eyebrow mb-6">Featured</p>
              <ul className="grid grid-cols-1 gap-6 md:grid-cols-3">
                {featured.map((post) => (
                  <li key={post.slug}>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="group flex h-full flex-col rounded-2xl border border-border bg-surface-alt p-7 transition-all duration-200 hover:-translate-y-px hover:border-accent/40 md:p-8"
                    >
                      <p className="font-mono text-[11px] uppercase tracking-tracked text-accent-strong">
                        {CATEGORY_LABELS[post.category]}
                      </p>
                      <h2
                        className="mt-4 font-serif text-2xl font-medium leading-tight text-primary md:text-[26px]"
                        style={{ fontVariationSettings: "'opsz' 144" }}
                      >
                        {post.title}
                      </h2>
                      <p className="mt-4 flex-1 text-[15px] leading-relaxed text-muted">
                        {post.excerpt}
                      </p>
                      <div className="mt-6 flex items-baseline justify-between">
                        <span className="font-mono text-[11px] uppercase tracking-tracked text-muted">
                          {post.readMinutes} min read
                        </span>
                        <ArrowRight
                          size={14}
                          className="text-primary transition-all duration-150 group-hover:translate-x-0.5 group-hover:text-accent-strong"
                          aria-hidden
                        />
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {/* Main grid (all posts chronological) */}
        <section className="bg-surface-alt">
          <div className="container py-12 md:py-16">
            <p className="eyebrow mb-6">All Articles</p>
            <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {sorted.map((post) => (
                <li key={post.slug}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group flex h-full flex-col rounded-2xl border border-border bg-surface p-6 transition-all duration-200 hover:-translate-y-px hover:border-accent/40 hover:shadow-md"
                  >
                    <div className="mb-4 flex items-baseline justify-between">
                      <p className="font-mono text-[11px] uppercase tracking-tracked text-accent-strong">
                        {CATEGORY_LABELS[post.category]}
                      </p>
                      <p className="font-mono text-[10px] uppercase tracking-tracked text-muted">
                        {publishedAtDisplay[post.slug]}
                      </p>
                    </div>
                    <h3
                      className="font-serif text-xl font-medium leading-tight text-primary"
                      style={{ fontVariationSettings: "'opsz' 144" }}
                    >
                      {post.title}
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                      {post.excerpt}
                    </p>
                    <div className="mt-5 flex items-baseline justify-between">
                      <span className="font-mono text-[11px] uppercase tracking-tracked text-muted">
                        {post.readMinutes} min read
                      </span>
                      <ArrowRight
                        size={14}
                        className="text-primary transition-all duration-150 group-hover:translate-x-0.5 group-hover:text-accent-strong"
                        aria-hidden
                      />
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <FooterCTABand
          headline="The standard"
          italic="for TRT."
          caption="Free shipping · 60-day guarantee · Cancel anytime"
        />
      </PageShell>
    </>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const publishedAtDisplay: Record<string, string> = {};
  for (const post of BLOG_POSTS) {
    publishedAtDisplay[post.slug] = new Date(post.publishedAt).toLocaleDateString(
      'en-US',
      { month: 'short', day: 'numeric', year: 'numeric', timeZone: 'UTC' },
    );
  }
  return { props: { publishedAtDisplay }, revalidate: 3600 };
};
