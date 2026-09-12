# trtrx wordmark

Approved direction: the modern sans option with navy text and a yellow inset behind the oblique `rx`, selected on 2026-09-13.

The refined production artwork uses outlined Manrope at weight 650 with optical spacing and a gentle oblique `rx`. The softer yellow tile gives the letters more interior space. All paths are self-contained. There is no font download at runtime. `src/lib/brand/wordmark.ts` supplies both outlines and tile geometry to the shared `Wordmark` component in the navigation, footer and dynamic OG images. The standalone SVGs are matching exports. The centered yellow `rx` icon supplies the favicon family and stays inside the maskable safe circle.

- Light: `wordmark.svg`
- Dark: `wordmark-on-dark.svg`
- Font source: https://github.com/google/fonts/tree/main/ofl/manrope
- Font license: `Manrope-OFL.txt`
- Approved Higgsfield concept job: `4ad22402-6ea3-4a70-ba7e-321bb0f5ed55`
- Higgsfield refinement job: `ec476635-1aac-4283-bc0b-964f5d83402f` (13 September 2026, 1 credit). The generated direction softened the tile but retained heavy lettering; production vectors implement the intended lighter weight precisely.

Rebuild with the reviewed Manrope variable TTF (the script checks its SHA-256), Python with fontTools, and Node with Sharp available:

```bash
python3 scripts/brand/generate-wordmark.py /path/to/Manrope.ttf
node scripts/brand/render-icons.mjs
```

The first command updates the shared paths and SVG exports. The second updates the PNG family and the ICO with 16, 32, 48, 64, 128 and 256px entries. The existing `Manrope-OFL.txt` license applies to these outlines.

Existing generated product photographs and videos have their original wordmarks baked into the pixels. Refresh those assets separately when the packaging design is finalized.
