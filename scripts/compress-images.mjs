import sharp from 'sharp';
import { readdir, readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

const root = 'public/images/products';

for (const dir of await readdir(root)) {
  const file = join(root, dir, 'image.jpg');
  try {
    const out = await sharp(await readFile(file))
      .rotate()
      .resize({ width: 1200, height: 1200, fit: 'inside', withoutEnlargement: true })
      .jpeg({ quality: 80, mozjpeg: true })
      .toBuffer();
    await writeFile(file, out);
    console.log(dir, '→', Math.round(out.length / 1024), 'KB');
  } catch {
    console.log('skipped', dir);
  }
}