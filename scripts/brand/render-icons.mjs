/** Run with Node and Sharp available: node scripts/brand/render-icons.mjs */
import { createRequire } from 'node:module';
import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const require = createRequire(import.meta.url);
const sharp = require('sharp');
const root = new URL('../../', import.meta.url);
const svg = await readFile(new URL('public/favicon.svg', root));
const sizes = [
  ['favicon-16x16.png', 16],
  ['favicon-32x32.png', 32],
  ['apple-touch-icon.png', 180],
  ['android-chrome-192x192.png', 192],
  ['android-chrome-512x512.png', 512],
];

for (const [file, size] of sizes) {
  await sharp(svg).resize(size, size).png().toFile(fileURLToPath(new URL(`public/${file}`, root)));
}

// PNG-compressed ICO entries are supported by modern browsers and Windows.
const icoSizes = [16, 32, 48, 64, 128, 256];
const images = await Promise.all(icoSizes.map((size) => sharp(svg).resize(size, size).png().toBuffer()));
const header = Buffer.alloc(6 + images.length * 16);
header.writeUInt16LE(1, 2);
header.writeUInt16LE(images.length, 4);
let offset = header.length;
images.forEach((image, index) => {
  const entry = 6 + index * 16;
  header[entry] = icoSizes[index] === 256 ? 0 : icoSizes[index];
  header[entry + 1] = header[entry];
  header.writeUInt16LE(1, entry + 4);
  header.writeUInt16LE(32, entry + 6);
  header.writeUInt32LE(image.length, entry + 8);
  header.writeUInt32LE(offset, entry + 12);
  offset += image.length;
});
await writeFile(new URL('public/favicon.ico', root), Buffer.concat([header, ...images]));
console.log('Updated PNG icon sizes and the multi-size favicon.');
