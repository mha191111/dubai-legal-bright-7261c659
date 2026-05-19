## Project: Mohammad Moslem — Tennis & Fitness Coach (Dubai)

A single-page, mobile-first, bilingual (EN default, AR with RTL) site built to convert visitors into Call or WhatsApp leads. Glassmorphism UI, smooth scroll animations, dark/light mode, PWA-installable (manifest only, no service worker — avoids preview issues).

---

### Identity & contact

- **Name**: Mohammad Moslem
- **Specialty**: Tennis & Fitness coaching
- **Phone / WhatsApp**: +98 912 579 6803
- **Email**: [mha1911111@gmail.com](mailto:mha1911111@gmail.com)
- **Location**: Dubai

### Tennis-inspired palette (custom)

Two themes share semantic tokens defined in `src/styles.css` (oklch):

- **Clay Court** (primary accent) — warm terracotta `oklch(0.62 0.16 38)`
- **Tennis Ball** (action/CTA) — neon yellow-green `oklch(0.88 0.21 118)`
- **Grass Court** (secondary) — deep court green `oklch(0.42 0.11 155)`
- **Light bg**: warm off-white `oklch(0.98 0.01 90)` / **Dark bg**: court-night `oklch(0.16 0.02 150)`
- Glass surfaces: `backdrop-blur` + 8% white/black tint + soft border

### Typography

- Headings: **Sora** (sporty, geometric)
- Body: **Manrope**
- Arabic: **Tajawal** (auto-applied when `lang="ar"` / `dir="rtl"`)

---

### Page sections (in order)

1. **Sticky top nav** — logo mark, section links, EN/AR toggle, dark/light toggle, "Book Now" pill.
2. **Hero** — full-viewport, court-line background pattern + hero photo of coach. Headline ("Train with Dubai's tennis & fitness coach"), 1-line persuasive sub. Two primary CTAs: **Call Now** (tel:) and **WhatsApp** (wa.me with pre-filled message). Animated stats strip (years coached, players trained, sessions/week).
3. **Marquee** — infinite-scroll strip of credentials/keywords (ATP drills, Strength, Mobility, Junior Development, Private Court, Dubai Marina…).
4. **Why Me** — 4 glass cards with icons: Personalized plans, On-court + gym, Bilingual coaching (EN/AR), All levels.
5. **Services / Practice areas** — 3 featured cards: Private Tennis Lessons, Fitness & Conditioning, Junior Academy. Hover tilt + soft glow.
6. **About** — split layout: portrait + short bio, certifications badges, "years of experience" counter (animates on scroll).
7. **Pricing — 3 tiers** with glass cards, popular badge on Pro:
  - **Standard** — 4 sessions/month
  - **Pro** ⭐ — 8 sessions/month + fitness plan
  - **Premium** — 12 sessions + nutrition + match prep
   Each card has its own WhatsApp CTA pre-filled with the package name.
8. **Testimonials** — auto-rotating carousel of client quotes with star ratings and player avatars.
9. **Blog teaser** — 3 placeholder article cards (Tennis tips, Fitness drills, Mindset) linking to `#` for now; structured so real posts can drop in later.
10. **FAQ** — accordion: pricing, location, equipment, junior age range, cancellation.
11. **Contact form + map** — validated form (zod): name, phone, preferred package, message. Submits via WhatsApp deep link (no backend needed). Embedded Dubai map iframe + direct call/WhatsApp/email buttons.
12. **Footer** — mini sitemap, socials, copyright, language toggle.

### Mobile-specific

- **Sticky bottom action bar** (mobile only): two big buttons — 📞 Call · 💬 WhatsApp. Always visible while scrolling.
- Hamburger sheet menu with large tap targets.
- Optimized hero (shorter, no parallax) on small screens.

### Bilingual (EN ⇄ AR)

- `LanguageProvider` (React context) stores choice in `localStorage`, sets `<html lang dir>`.
- Single translations file `src/i18n/strings.ts` with `en` / `ar` keys; components consume via `useT()`.
- Full RTL support via Tailwind logical properties (`ms-*`, `me-*`, `ps-*`, `pe-*`) and `dir="rtl"` flipping.
- Toggle button in header + footer.

### Theming (dark / light)

- `ThemeProvider` with class on `<html>`; persists to `localStorage`; respects `prefers-color-scheme` on first visit.
- All colors via semantic tokens — no hard-coded hex in components.

### Animations & polish

- Scroll-reveal via `framer-motion` (fade + slide on enter).
- Hover micro-interactions: scale, glow, magnetic CTA.
- Animated counters (years, players).
- Marquee via pure CSS keyframes.
- Smooth scroll between sections; sticky-nav active-section highlight.
- Court-line SVG patterns as subtle backgrounds.

### PWA / install

- Manifest-only approach (per platform guidance): `public/manifest.webmanifest` + icons. App is installable on mobile but no service worker — keeps Lovable preview working.

### SEO

- Route `head()` with EN title/description, OG tags, Twitter card, canonical, JSON-LD `LocalBusiness` schema (name, phone, address: Dubai, sport: Tennis).
- Single H1 in hero, semantic landmarks, alt text on all images.

---

### Technical breakdown

**New files**

```
src/routes/index.tsx                 (replace placeholder, compose all sections)
src/components/site/Nav.tsx
src/components/site/MobileStickyBar.tsx
src/components/site/Hero.tsx
src/components/site/Marquee.tsx
src/components/site/WhyMe.tsx
src/components/site/Services.tsx
src/components/site/About.tsx
src/components/site/Pricing.tsx
src/components/site/Testimonials.tsx
src/components/site/Blog.tsx
src/components/site/Faq.tsx
src/components/site/Contact.tsx
src/components/site/Footer.tsx
src/components/site/LanguageToggle.tsx
src/components/site/ThemeToggle.tsx
src/components/site/CallButton.tsx        (tel: link, tracked)
src/components/site/WhatsAppButton.tsx    (wa.me with prefilled message)
src/providers/LanguageProvider.tsx
src/providers/ThemeProvider.tsx
src/i18n/strings.ts                       (en + ar translations)
src/lib/contact.ts                        (phone, whatsapp helpers + zod schema)
src/assets/hero-coach.jpg                 (generated image)
src/assets/about-coach.jpg                (generated image)
src/assets/court-pattern.svg
public/manifest.webmanifest
public/icon-192.png, icon-512.png         (generated)
```

**Updates**

- `src/styles.css`: add tennis palette tokens (light + dark), Sora/Manrope/Tajawal `@font-face` via Google Fonts `<link>` in root head, glass utility classes, marquee keyframes.
- `src/routes/__root.tsx`: wrap `Outlet` with `ThemeProvider` + `LanguageProvider`; add Google Fonts + manifest link; default SEO meta.
- `package.json`: add `framer-motion`, `zod` (already present likely), `lucide-react` (present).

**Dependencies to install**: `framer-motion`.

**Validation**: contact form uses zod schema with trim, length caps, regex for phone; WhatsApp message is `encodeURIComponent`-encoded.

**Out of scope (can add later if you want)**: backend storage of leads (would need Lovable Cloud), real blog CMS, online booking/payments, multi-page expansion.

---

### Build sequence

1. Install `framer-motion`; add fonts & tokens to `styles.css`.
2. Build providers (Theme, Language) + i18n strings.
3. Generate hero/about images + PWA icons.
4. Build shared atoms (CallButton, WhatsAppButton, toggles, Nav, MobileStickyBar, Footer).
5. Build sections top-to-bottom; compose in `src/routes/index.tsx`.
6. Add manifest, SEO meta, JSON-LD.
7. Polish: animations, RTL pass, dark-mode pass, mobile pass.

&nbsp;

make it seo friendly and from technical seo and ux writing 