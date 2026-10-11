# Dental Clinic Website

A responsive dental clinic website built with React, TypeScript, and Vite.

## Requirements
- Node.js 20 or newer
- npm

## Run locally
```bash
npm install
npm run dev
```

## Production build
```bash
npm run build
npm run preview
```

The production build converts local JPG/PNG images in `public/images` to WebP before running Vite. The page references the WebP versions for smaller image payloads. The source images and the clinic hero video are kept in the repository.

## Project structure
- `src/pages/` — Home, Services, Case Studies, Blog, and Pages overview
- `src/components/` — shared navigation, appointment modal, intro animation, footer, and WhatsApp widget
- `public/images/` — local clinic image assets
- `public/videos/` — local hero video
- `scripts/convert-images.mjs` — build-time WebP conversion
