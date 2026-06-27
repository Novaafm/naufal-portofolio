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
- Framer Motion (scroll-driven animations, stagger reveals, parallax)
- Fonts: Space Grotesk (display), Inter (body), JetBrains Mono (code/labels)

## About the animations

- Hero: the network diagram draws itself in (line-by-line, then nodes pop in),
  and the terminal block "types" its text live the first time it scrolls into view.
- Navbar: a thin progress bar tracks how far down the page you've scrolled.
- Projects: cards slide up with a staggered delay as they enter the viewport.
- Experience: the timeline's vertical line fills in as you scroll through it.
- Skills: badges pop in one by one per group.
- Contact: a subtle parallax drift on scroll.

All animations respect `prefers-reduced-motion` and only play once per element
(they won't replay every time you scroll past them again).
