#!/usr/bin/env python3
"""Rebuild the outlined logo using the licensed Manrope variable font.

Usage: python3 scripts/brand/generate-wordmark.py /path/to/Manrope.ttf
Requires fontTools. Raster icons are generated with render-icons.mjs.
"""

from pathlib import Path
import argparse
import hashlib
import json

from fontTools.pens.boundsPen import BoundsPen
from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.pens.transformPen import TransformPen
from fontTools.ttLib import TTFont
from fontTools.varLib.instancer import instantiateVariableFont


def number(value):
    return f'{value:.3f}'.rstrip('0').rstrip('.') or '0'


parser = argparse.ArgumentParser(description=__doc__)
parser.add_argument('font', type=Path)
args = parser.parse_args()
expected_hash = 'd0639be45d0af36e798172419d7bd173c4bd4f29e2b76cbb69db1d11bf8b0a40'
if hashlib.sha256(args.font.read_bytes()).hexdigest() != expected_hash:
    raise SystemExit('Font source differs from the reviewed Manrope file. Verify it before rebuilding.')

root = Path(__file__).resolve().parents[2]
font = instantiateVariableFont(TTFont(args.font), {'wght': 650}, inplace=False)
glyphs = font.getGlyphSet()
cmap = font.getBestCmap()


def outline(text, x=0, oblique=False, positions=None):
    path = SVGPathPen(glyphs, ntos=number)
    bounds = BoundsPen(glyphs)
    for index, char in enumerate(text):
        name = cmap[ord(char)]
        offset = positions[index] if positions is not None else x
        transform = (.02, 0, .003 if oblique else 0, -.02, offset, 28.4)
        for pen in (path, bounds):
            glyphs[name].draw(TransformPen(pen, transform))
        x += (font['hmtx'][name][0] - 40) * .02
    return path.getCommands(), bounds.bounds


# Match visible gaps optically, keeping the r arm clear of the following t.
trt, _ = outline('trt', positions=[0, 15.8, 33.0])
rx, rx_bounds = outline('rx', 56.4, True)
tile = {'x': 51.4, 'y': 0, 'width': 52.2, 'height': 34, 'radius': 5.5}
data = {'width': 103.6, 'height': 34, 'tile': tile, 'trt': trt, 'rx': rx}
source = '// Outlined Manrope 650 (SIL OFL), with an optical oblique for rx.\n'
source += '// Geometry shared by the site, SVG exports and social images.\n'
source += 'export const WORDMARK = ' + json.dumps(data, indent=2) + ' as const;\n'
(root / 'src/lib/brand/wordmark.ts').write_text(source)


def svg(color):
    return (
        f'<svg xmlns="http://www.w3.org/2000/svg" width="{number(data["width"] * 10)}" '
        f'height="{number(data["height"] * 10)}" viewBox="0 0 {data["width"]} {data["height"]}">'
        f'<path fill="{color}" d="{trt}"/>'
        f'<rect x="{tile["x"]}" y="{tile["y"]}" width="{tile["width"]}" '
        f'height="{tile["height"]}" rx="{tile["radius"]}" fill="#F9C31F"/>'
        f'<path fill="#1D4173" d="{rx}"/></svg>'
    )


for name, color in [('wordmark', '#1D4173'), ('wordmark-on-dark', '#FBFCFD')]:
    (root / f'public/brand/{name}.svg').write_text(svg(color) + '\n')

# Center the same rx paths in the icon. The glyphs fit the maskable safe circle.
x0, y0, x1, y1 = rx_bounds
scale = 9.2
dx = 256 - (x0 + x1) / 2 * scale
dy = 256 - (y0 + y1) / 2 * scale
icon = (
    '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">'
    '<rect width="512" height="512" rx="104" fill="#F9C31F"/>'
    f'<g transform="translate({number(dx)} {number(dy)}) scale({scale})">'
    f'<path fill="#1D4173" d="{rx}"/></g></svg>\n'
)
(root / 'public/favicon.svg').write_text(icon)
print('Updated shared logo paths, SVG exports and favicon SVG.')
