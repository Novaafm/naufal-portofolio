# Naufal Fawwaz Munarto — Portfolio

A single-page portfolio built with React + Vite + Tailwind CSS, showcasing
both network/telecom engineering work and fullstack software development.

## Running locally

```bash
npm install
npm run dev
```

## Editing your content

All text content lives in **`src/data.js`** — edit names, project descriptions,
skills, and experience there without touching any component code.

## Adding your own images

This project supports **multiple photos per project**, shown as a swipeable
carousel (with arrows and dot indicators) when there's more than one.

1. Drop your image files into **`public/images/`** (create the folder if it
   doesn't exist). Don't use `src/assets/` — files there only work in
   `npm run dev` and will silently break once you build for production.
2. In `src/data.js`, set the `images` array of a project, e.g.:
   ```js
   images: ["/images/madiun-rack-1.jpg", "/images/madiun-rack-2.jpg"]
   ```
   - One image → shows as a static photo.
   - Multiple images → shows as a carousel automatically.
   - Empty array `[]` → shows the placeholder box.
3. Recommended size: **1200×750px (16:10 ratio)**, JPG for photos / PNG for
   screenshots, ideally under 300–500KB each so the page stays fast.

## Deploying to Vercel

This is a static site — no backend needed.

1. Push this folder to a GitHub repository.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo.
3. Vercel auto-detects Vite — just click **Deploy**.

Or deploy directly from your machine with the Vercel CLI:

```bash
npm install -g vercel
vercel
```

## Tech stack

- React 18
- Vite
- Tailwind CSS
- Framer Motion (springs, scroll reveals, carousel drag)
- Fonts: the system font on Apple devices, Inter elsewhere

## About the animations

- Hero: no entrance animation, so the headline is visible immediately.
- Sections: each block of content fades and rises once as it enters the viewport.
- Carousels: photos follow your finger or mouse, and a flick carries its momentum
  into the next photo.
- Buttons and links: a quick press response on pointer-down.

Shared spring values live in `src/motion.js`.

All animations respect `prefers-reduced-motion` and only play once per element
(they won't replay every time you scroll past them again).
