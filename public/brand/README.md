# trtrx wordmark

Approved direction: **A3, Compact Monolith**, selected on November 15, 2026. Christian chose “3” from the three close Monolith refinements and requested the website update. Uppercase heavy upright `TRT` and lowercase gold `rx` form one wordmark. This supersedes the October 6, 2026 Crisp literary artwork and its gold tile.

The production artwork preserves the approved Higgsfield glyph silhouettes as simplified, self-contained vector outlines. It does not substitute an installed font. `src/lib/brand/wordmark.ts` supplies the navigation, footer and dynamic social images. The standalone SVGs match that geometry. On light backgrounds, TRT is navy; on dark backgrounds, TRT is white. The rx is gold in both versions. The icon family uses navy rx on gold within the maskable safe circle. Flat fills replace the generated image texture.

The header plays one short entrance per document load, with a static reduced-motion version. The footer, mobile drawer, standalone exports and dynamic share images use the settled artwork.

- Light: `wordmark.svg`
- Dark: `wordmark-on-dark.svg`
- Approved Higgsfield job: `32175833-1288-4e3a-be13-b4af2d8faefa`
- Model: GPT Image 2.6 Flare, quality max, 4K, actual 3840 × 2160.
- Source SHA-256: `5f5cd83723f0f0bd56d39a3773df63cc7e430b2ca6709fc1a744eeab70952059`
- Source: https://d8j0ntlcm91z4.cloudfront.net/user_3EmhjwFcq1NsfVMmKt8hd5kvdxT/hf_20261116_002934_32175833-1288-4e3a-be13-b4af2d8faefa.png
- The retained Manrope license and old `generate-wordmark.py` describe the superseded September logo. Use the hash-pinned tracing script below for the current artwork.

Rebuild with the approved PNG (the script checks its SHA-256), Python with Pillow/NumPy, and Node with Sharp:

```bash
python3 scripts/brand/trace-approved-wordmark.py /path/to/approved.png
node scripts/brand/render-icons.mjs
```

The first command updates shared paths, SVG exports and the SVG icon. The second updates PNG icons and the ICO with 16, 32, 48, 64, 128 and 256px entries. The website ships no raster wordmark or font dependency.

Existing generated product photographs and videos have their original wordmarks baked into the pixels. Refresh those assets separately when the packaging design is finalized.
