import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const imageDir = path.resolve('public/images');
const files = await fs.readdir(imageDir);
const supported = /\\.(?:jpe?g|png)$/i;
let converted = 0;

for (const file of files) {
  if (!supported.test(file)) continue;
  const source = path.join(imageDir, file);
  const destination = path.join(imageDir, file.replace(/\\.(?:jpe?g|png)$/i, '.webp'));
  await sharp(source)
    .rotate()
    .webp({ quality: 80, effort: 4, alphaQuality: 90 })
    .toFile(destination);
  converted++;
}
console.log(`Converted ${converted} image assets to WebP.`);
