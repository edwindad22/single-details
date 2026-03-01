# Single Details

Personal brand site for **Jesula** — author of _Single Details_, a faith-based book for single women walking a season of preparation, healing, and purpose.

**Live pages**
| Route | Description |
|---|---|
| `/` | Home — hero, author story, pillars, free gift sign-up |
| `/book` | Book details — cover, features, Amazon CTA, free gift CTA |
| `/merch` | Merch & Resources — journal, apparel, lifestyle items |
| `/subscribe` | Community — free welcome gift, email capture |

---

## Stack

| Tool             | Version |
| ---------------- | ------- |
| React            | 19      |
| TypeScript       | 5       |
| Vite             | 7       |
| Tailwind CSS     | 3       |
| React Router DOM | 7       |
| Lucide React     | icons   |

No external animation library — all animations are pure CSS keyframes (`src/index.css`) with a lightweight `useInView` hook for scroll-triggered reveals.

---

## Getting started

```bash
npm install
npm run dev        # dev server → http://localhost:5173
npm run build      # production build → dist/
npm run preview    # preview the production build locally
```

---

## Project structure

```
src/
├── assets/                   # Cover images (book + journal)
├── components/
│   ├── Navbar.tsx            # Sticky nav with animated mobile menu
│   ├── Footer.tsx
│   ├── EmailCapture.tsx      # Reusable email sign-up form
│   └── SiteNotification.tsx  # Dismissible launch banner
├── data/
│   └── announcements.ts      # ← toggle banners here (active: true/false)
├── hooks/
│   └── useInView.ts          # Intersection Observer scroll hook
└── pages/
    ├── Home.tsx
    ├── Book.tsx
    ├── Merch.tsx
    └── Subscribe.tsx
```

---

## Common content edits

### Show / hide the launch notification banner

Edit `src/data/announcements.ts` — set `active: true` to show, `false` to hide:

```ts
{ id: 'single-details-launch', message: '...', active: true }
```

### Add the Amazon book URL when it goes live

In `src/pages/Book.tsx`, replace the `onClick` alert with a real `href`:

```tsx
// Before launch
<a href="#" onClick={(e) => { e.preventDefault(); alert('Coming soon') }}>

// After launch — replace with:
<a href="https://amazon.com/dp/YOUR_ASIN" target="_blank" rel="noopener noreferrer">
```

### Add the Amazon journal URL

In `src/pages/Merch.tsx`, find the journal item and replace `amazonComingSoon: true` with the real URL:

```ts
// Before
{ id: 1, ..., amazonComingSoon: true }

// After
{ id: 1, ..., amazonUrl: 'https://amazon.com/dp/YOUR_ASIN' }
```

### Add a new merch item

Append to the `merch` array in `src/pages/Merch.tsx`. Items with an `image` field get the flip-card treatment; items without get the standard gradient card.

---

## Deployment

The site is a static SPA — deploy the `dist/` folder to any static host.

**Recommended:** Netlify (drag-and-drop `dist/`, or connect the GitHub repo for automatic deploys on push to `main`).

If using client-side routing on Netlify, add a `public/_redirects` file:

```
/*  /index.html  200
```

---

## Book launch checklist

- [ ] Replace Amazon `href="#"` in `Book.tsx` with real ASIN link
- [ ] Replace `amazonComingSoon: true` with `amazonUrl` in `Merch.tsx` for each live product
- [ ] Set `active: false` on the pre-launch notification in `announcements.ts`
- [ ] Add a new announcement: `{ id: 'launch-day', message: 'Single Details is live on Amazon!', active: true }`
- [ ] Replace the author photo placeholder in `Home.tsx` and `Book.tsx` with the real photo

---

_"God is in the Single Details."_
