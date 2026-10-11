import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const imageDir = path.resolve('public/images');
const files = await fs.readdir(imageDir);
const supportedExtensions = new Set(['.jpg', '.jpeg', '.png']);
let converted = 0;

for (const file of files) {
  const extension = path.extname(file).toLowerCase();
  if (!supportedExtensions.has(extension)) continue;

  const source = path.join(imageDir, file);
  const destination = path.join(imageDir, path.basename(file, extension) + '.webp');

  await sharp(source)
    .rotate()
    .webp({ quality: 80, effort: 4, alphaQuality: 90 })
    .toFile(destination);

  converted++;
}

console.log(`Converted ${converted} image assets to WebP.`);
