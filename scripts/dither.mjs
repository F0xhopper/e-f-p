/* 1-bit dither pipeline: assets/screenshots/* -> public/projects/*.png
 *
 * Grayscale -> contrast-stretch -> downscale -> Floyd-Steinberg dither.
 * Output pixels are exactly the site's two tones (#000000 / #e6e6e6),
 * so images read as part of the terminal palette, not photographs.
 *
 * Usage: npm run dither
 */

import { mkdir, readdir } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const SRC_DIR = "assets/screenshots";
const OUT_DIR = "public/projects";

/* Dither resolution. Rendered larger with image-rendering: pixelated,
   so this sets how chunky the dither grain looks on the page. */
const WIDTH = 320;

const FG = 230; // #e6e6e6, matches --fg in globals.css
const THRESHOLD = 128;

async function dither(file) {
  const { data, info } = await sharp(path.join(SRC_DIR, file))
    .grayscale()
    .normalise() // stretch contrast so dark UIs don't dither to solid black
    .resize({ width: WIDTH })
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { width, height } = info;
  const px = Float32Array.from(data);
  const out = Buffer.alloc(width * height);

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const i = y * width + x;
      const on = px[i] >= THRESHOLD;
      out[i] = on ? FG : 0;

      // diffuse the quantization error to unvisited neighbours
      const err = px[i] - (on ? 255 : 0);
      if (x + 1 < width) px[i + 1] += (err * 7) / 16;
      if (y + 1 < height) {
        if (x > 0) px[i + width - 1] += (err * 3) / 16;
        px[i + width] += (err * 5) / 16;
        if (x + 1 < width) px[i + width + 1] += (err * 1) / 16;
      }
    }
  }

  const name = `${path.parse(file).name}.png`;
  await sharp(out, { raw: { width, height, channels: 1 } })
    .png({ palette: true, colours: 2 })
    .toFile(path.join(OUT_DIR, name));

  console.log(`${SRC_DIR}/${file} -> ${OUT_DIR}/${name} (${width}x${height})`);
}

const files = (await readdir(SRC_DIR)).filter((f) =>
  /\.(png|jpe?g|webp|gif|tiff?)$/i.test(f)
);
if (files.length === 0) {
  console.error(`no images found in ${SRC_DIR}/`);
  process.exit(1);
}

await mkdir(OUT_DIR, { recursive: true });
for (const f of files) await dither(f);
