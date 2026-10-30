import sharp from 'sharp';
import { readdir, readFile, writeFile, stat } from 'node:fs/promises';
import { join } from 'node:path';

const root = 'public/assets';
const MIN_BYTES = 300 * 1024; // leave files already under 300 KB alone

for (const name of await readdir(root)) {
  if (!/\.(jpe?g|jfif|png)$/i.test(name)) continue;

  const file = join(root, name);
  const before = (await stat(file)).size;
  if (before < MIN_BYTES) continue;

  const input = await readFile(file);
  const { format } = await sharp(input).metadata();
  const img = sharp(input).rotate().resize({ width: 1920, withoutEnlargement: true });

  const out =
    format === 'png'
      ? await img.png({ palette: true, quality: 85, compressionLevel: 9 }).toBuffer()
      : await img.jpeg({ quality: 80, mozjpeg: true }).toBuffer();

  if (out.length < before) {
    await writeFile(file, out);
    console.log(name, Math.round(before / 1024), 'KB →', Math.round(out.length / 1024), 'KB');
  }
}