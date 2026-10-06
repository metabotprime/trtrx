# trtrx wordmark

Approved direction: **Option 1, Crisp literary**, selected on October 6, 2026. Uppercase navy `TRT`, italic lowercase navy `rx` inside the yellow tile.

The production artwork preserves the approved Higgsfield glyph silhouettes as simplified, self-contained vector outlines. It does not substitute an installed font. `src/lib/brand/wordmark.ts` supplies the navigation, footer and dynamic social images. The standalone SVGs match that geometry. The centered yellow `rx` supplies the favicon family, within the maskable safe circle. Letter colors use the established palette without the generated texture.

- Light: `wordmark.svg`
- Dark: `wordmark-on-dark.svg`
- Approved Higgsfield job: `37fa8e3b-de6a-4f8b-877e-29a767edcaf7`
- Model: GPT Image 2.5 Flare, quality max, requested resolution 4K, actual 3504 × 2336.
- Source SHA-256: `769cf672ff5c87f76a3f2b94b4426020e4c6c3f0c10ed21a6cb4182d68c674f9`
- Source: https://d8j0ntlcm91z4.cloudfront.net/user_3EmhjwFcq1NsfVMmKt8hd5kvdxT/hf_20261005_030313_37fa8e3b-de6a-4f8b-877e-29a767edcaf7.png
- The retained Manrope license and old generator describe the superseded September logo, not these custom outlines.

Rebuild with the approved PNG (the script checks its SHA-256), Python with Pillow/NumPy, and Node with Sharp:

```bash
python3 scripts/brand/trace-approved-wordmark.py /path/to/approved.png
node scripts/brand/render-icons.mjs
```

The first command updates shared paths, SVG exports and the SVG icon. The second updates PNG icons and the ICO with 16, 32, 48, 64, 128 and 256px entries. The website ships no raster wordmark or font dependency.

Existing generated product photographs and videos have their original wordmarks baked into the pixels. Refresh those assets separately when the packaging design is finalized.
