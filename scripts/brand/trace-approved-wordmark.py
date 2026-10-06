#!/usr/bin/env python3
"""Export approved Crisp literary artwork, preserving its glyph silhouettes.

python3 scripts/brand/trace-approved-wordmark.py /path/to/approved.png
Requires Pillow and NumPy; never substitutes a font or ships raster artwork.
"""
from collections import defaultdict
from pathlib import Path
import argparse
import hashlib
import json
import numpy as np
from PIL import Image

SOURCE_HASH = '769cf672ff5c87f76a3f2b94b4426020e4c6c3f0c10ed21a6cb4182d68c674f9'

def number(value):
    return f'{value:.3f}'.rstrip('0').rstrip('.') or '0'

def simplify(points, tolerance=1.2):
    if len(points) < 3:
        return points
    a, b = np.array(points[0]), np.array(points[-1])
    delta, relative = b-a, np.array(points)-a
    distances = (np.abs(delta[0]*relative[:, 1]-delta[1]*relative[:, 0])/np.linalg.norm(delta)
                 if np.any(delta) else np.linalg.norm(relative, axis=1))
    index = int(np.argmax(distances))
    if distances[index] <= tolerance:
        return [points[0], points[-1]]
    return simplify(points[:index+1], tolerance)[:-1]+simplify(points[index:], tolerance)

def contours(mask):
    padded, edges = np.pad(mask, 1), defaultdict(list)
    neighbors = [padded[:-2, 1:-1], padded[1:-1, 2:], padded[2:, 1:-1], padded[1:-1, :-2]]
    for side, neighbor in enumerate(neighbors):
        ys, xs = np.where(mask & ~neighbor)
        for x, y in zip(xs.tolist(), ys.tolist()):
            corners = [(x, y), (x+1, y), (x+1, y+1), (x, y+1)]
            edges[corners[side]].append(corners[(side+1) % 4])
    result, directions = [], [(1, 0), (0, 1), (-1, 0), (0, -1)]
    while edges:
        start = next(iter(edges))
        points, current = [start], start
        while True:
            options = edges[current]
            if len(options) > 1 and len(points) > 1:
                direction = directions.index((current[0]-points[-2][0], current[1]-points[-2][1]))
                options.sort(key=lambda end: {1: 0, 0: 1, 3: 2, 2: 3}[(directions.index((end[0]-current[0], end[1]-current[1]))-direction) % 4])
            end = options.pop(0)
            if not options:
                del edges[current]
            points.append(end)
            current = end
            if current == start:
                break
        area = sum(a[0]*b[1]-b[0]*a[1] for a, b in zip(points, points[1:]))/2
        if abs(area) > 30:
            result.append(simplify(points))
    return result

parser = argparse.ArgumentParser(description=__doc__)
parser.add_argument('source', type=Path)
args = parser.parse_args()
if hashlib.sha256(args.source.read_bytes()).hexdigest() != SOURCE_HASH:
    raise SystemExit('Source differs from selected Higgsfield image. Verify before rebuilding.')
pixels = np.array(Image.open(args.source).convert('RGB')).astype(np.int16)
red, green, blue = pixels[:, :, 0], pixels[:, :, 1], pixels[:, :, 2]
letters = (red < 150) & (green < 165) & (blue > red+20) & (blue > 60)
yellow = (red > 200) & (green > 130) & (blue < 110)
ys, xs = np.where(yellow)
tx, ty, tw, th = int(xs.min()), int(ys.min()), int(xs.max()-xs.min()+1), int(ys.max()-ys.min()+1)
ly, lx = np.where(letters)
x0, y0 = min(int(lx.min()), tx)-2, min(int(ly.min()), ty)-2
x1, y1 = max(int(lx.max())+1, tx+tw)+2, max(int(ly.max())+1, ty+th)+2
scale, split = 34/(y1-y0), tx-x0
crop = letters[y0:y1, x0:x1]
left, right = crop.copy(), crop.copy()
left[:, split:], right[:, :split] = False, False
left_contours, right_contours = contours(left), contours(right)
if len(left_contours) != 4 or len(right_contours) != 2:
    raise SystemExit(f'Unexpected glyph topology: {len(left_contours)} TRT, {len(right_contours)} rx.')

def path(outlines):
    return ''.join('M'+' '.join(f'{number(x*scale)},{number(y*scale)}' for x, y in outline[:-1])+'Z' for outline in outlines)

tile = {'x': round((tx-x0)*scale, 3), 'y': round((ty-y0)*scale, 3), 'width': round(tw*scale, 3), 'height': round(th*scale, 3), 'radius': round(th*.16*scale, 3)}
data = {'width': round((x1-x0)*scale, 3), 'height': 34, 'tile': tile, 'trt': path(left_contours), 'rx': path(right_contours)}
root = Path(__file__).resolve().parents[2]
source = '// Approved Crisp literary, custom outlines from Higgsfield job 37fa8e3b-de6a-4f8b-877e-29a767edcaf7.\n'
source += '// Geometry shared by the site, SVG exports and social images. No runtime font dependency.\n'
source += 'export const WORDMARK = '+json.dumps(data, indent=2)+' as const;\n'
(root/'src/lib/brand/wordmark.ts').write_text(source)

def svg(color):
    return (f'<svg xmlns="http://www.w3.org/2000/svg" width="{number(data["width"]*10)}" height="340" viewBox="0 0 {data["width"]} 34">'
            f'<path fill="{color}" d="{data["trt"]}"/>'
            f'<rect x="{tile["x"]}" y="{tile["y"]}" width="{tile["width"]}" height="{tile["height"]}" rx="{tile["radius"]}" fill="#F9C31F"/>'
            f'<path fill="#1D4173" d="{data["rx"]}"/></svg>\n')
for name, color in [('wordmark', '#1D4173'), ('wordmark-on-dark', '#FBFCFD')]:
    (root/f'public/brand/{name}.svg').write_text(svg(color))
points = np.array([point for outline in right_contours for point in outline])*scale
low, high = points.min(axis=0), points.max(axis=0)
icon_scale = 340/max(high-low)
dx, dy = 256-(low+high)/2*icon_scale
icon = ('<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">'
        '<rect width="512" height="512" rx="104" fill="#F9C31F"/>'
        f'<g transform="translate({number(dx)} {number(dy)}) scale({number(icon_scale)})">'
        f'<path fill="#1D4173" d="{data["rx"]}"/></g></svg>\n')
(root/'public/favicon.svg').write_text(icon)
print(json.dumps({'width': data['width'], 'height': data['height'], 'contours': [len(left_contours), len(right_contours)], 'vertices': sum(len(c) for c in left_contours+right_contours)}))
