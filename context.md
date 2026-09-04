# MedEdd Landing Page — Project Context

## What This Repo Is

This is a **Next.js 16** project (App Router, React 19, TypeScript, Tailwind CSS v4, shadcn/ui) used as the base for building two landing pages:

1. **Docshield clone** — a pixel-accurate clone of [docshield.com](https://docshield.com), a medical malpractice insurance platform.
2. **MedEdd hero page** — a premium, art-directed hero section for MedEdd, an education/med-tech platform for GCC healthcare professionals preparing for licensing exams.

---

## Pages

| Route | File | Description |
|---|---|---|
| `/` | `src/app/page.tsx` | Docshield.com clone |
| `/mededd` | `src/app/mededd/page.tsx` | MedEdd hero section |

---

## MedEdd Page — Agenda & Details

### Product
**MedEdd** is an exam-prep platform for healthcare professionals in the GCC (Gulf Cooperation Council) region preparing for their licensing exams.

**Target audience:** Physicians · Nurses · Dentists · Pharmacists · Allied Healthcare professionals

### Design Direction
The hero was art-directed using a premium medical/tech editorial style inspired by a SalvaMedic reference design. The composition uses:

- **Asymmetric split layout** — white/light-blue left (~59%) + strong blue right panel (~41%)
- **Full-screen, no card** — hero spans 100vh edge-to-edge, no rounded container
- **Layered z-index composition** — background → content → central image overlapping both sections → navbar floating on top
- **Clash Display variable font** — loaded from local `/public/fonts/` for the headline and all UI text
- **Geometric SVG background pattern** on the blue panel (grid lines + connected nodes at very low opacity)

### Content (exact, preserved)

| Element | Text |
|---|---|
| Eyebrow | "For GCC Healthcare Professionals" |
| H1 | "Study what actually matters." |
| Subheading | "Build your custom study path for your licensing exam." |
| Primary CTA | "Join Early Access" |
| Secondary CTA | "See How It Works" |
| Microcopy | "Be the first to try MEDEDD when we launch." |
| Audience | "Physicians · Nurses · Dentists · Pharmacists · Allied Healthcare" |
| Blue panel headline | "Built around what matters." |

### Navigation (left → center → right — matches reference design)
- **Left:** MedEdd logo (M icon + MedEdd wordmark)
- **Center:** Separate inner pill — `Features | Who it's for | Why we built this | FAQ`
- **Right:** Person icon circle + Sign In text + "Join Early Access" filled button

### Color Tokens
| Name | Value |
|---|---|
| Primary blue | `#1B4FD8` |
| Blue gradient | `#1B4FD8 → #1540BC → #1035A0` |
| Left background | `#F5F8FF → #EBF0FF → #E3ECFF` |
| Page background | `#ECF0FB` |

### Typography
- **Font:** Clash Display (variable font, loaded locally from `/public/fonts/`)
- **H1 weight:** 480 (via variable font axis)
- **Blue panel headline weight:** 700 (extrabold)
- All UI elements use Clash Display via `--font-clash` CSS variable

### Animations (on mount)
- Eyebrow, headline, copy, CTAs → fade up with staggered delays (100ms → 500ms)
- Central image → enters from bottom (delay 600ms)
- Bottom info card → fades in (delay 750ms)
- Progress bar in info card → animates width to 68% (delay 1300ms)

### Components
- `MedEddLogo` — M icon + wordmark
- `MedEddLogoWhite` — white variant for dark backgrounds
- `Navbar` — floating pill nav (logo | center links pill | right actions)
- `GeometricPattern` — SVG decorative grid for blue panel
- `FloatingLabel` — (removed per design decision)
- Bottom info card — white card with thumbnail, tags, animated progress bar
- Audience cluster — circular overlapping profile images + text

---

## Docshield Clone Page — Details

A full landing page clone of docshield.com with:

- Floating pill navbar
- Hero with `#A5BDE5 → #D9E7FF → #ECF3FF` gradient + doctor image + CTA buttons
- Testimonials horizontal scroll (5 cards)
- Stats section (19% savings, 50 states, 80% specialties, 7 lines of coverage)
- State coverage selector (NY example with Standard Limits, Affordability Rank, Claim Payout)
- Coverage types interactive tab bar
- Features 3-card grid
- FAQ accordion (5 questions, all real content)
- Bottom CTA cards (blue "15 min to apply" + dark "co-pilot" banner)
- Footer with contact info, links, copyright

---

## Font Setup

Clash Display is loaded via `@font-face` in `src/app/globals.css`:

```css
@font-face {
  font-family: "ClashDisplay";
  src: url("/fonts/ClashDisplay-Variable.woff2") format("woff2");
  font-weight: 200 700;
  font-display: swap;
}
```

Font files are in `/public/fonts/`:
- `ClashDisplay-Variable.woff2` (variable, covers weight 200–700)
- `ClashDisplay-Bold.woff2`
- `ClashDisplay-Semibold.woff2`
- `ClashDisplay-Medium.woff2`
- `ClashDisplay-Regular.woff2`

---

## Tech Stack

| Tool | Version |
|---|---|
| Next.js | 16.3.0 (Turbopack) |
| React | 19 |
| TypeScript | Strict |
| Tailwind CSS | v4 |
| shadcn/ui | Latest |
| Lucide React | Icons |

## Dev Server

```bash
npm run dev
# runs on http://localhost:3002 (3000 may be occupied)
```
