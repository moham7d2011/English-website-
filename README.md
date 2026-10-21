# English app (Phase 1 foundation)

Next.js (App Router) + TypeScript + Tailwind CSS foundation for an English-learning app for Egyptian Arabic speakers.
Interface text is Egyptian colloquial Arabic (RTL); English learning content renders LTR via the `Ltr` component.

## Verification status (read this first)

This code was written in a sandbox **without network access**, so dependencies were never installed and
**the app has not been built, linted, or run**. What was actually checked:

| Check | Result |
| --- | --- |
| All 69 `@/...` and relative imports resolve to real files | passed (custom script) |
| Loose TypeScript check of `src/` against stubbed `react`/`next` types | passed (stubs are not the real types) |
| Negative control (bad icon name is caught by that check) | caught, as expected |
| No physical `left/right` Tailwind utilities (RTL safety) | passed (grep) |
| No raw quotes/apostrophes in JSX text | passed (grep) |
| `npm install`, `next build`, `next lint`, real `tsc`, running in a browser | **NOT RUN** |

## Run it (on a machine with internet)

Requires Node 18.18+ (Node 20 or 22 recommended).

```bash
cd english-app
npm install
cp .env.example .env.local
npm run typecheck     # tsc --noEmit
npm run lint          # next lint
npm run build         # production build (downloads the Cairo font from Google Fonts at build time)
npm run dev           # http://localhost:3000
```

Or run all three checks in one go: `npm run check`.

Test on an Android phone on the same Wi-Fi: `npm run dev -- -H 0.0.0.0`, then open `http://<your-computer-LAN-IP>:3000`.
Also run Lighthouse (mobile profile) on the production build: `npm run build && npm run start`.

If a command fails, send me the exact error output and I will fix it.

## Structure

```
src/
  app/
    layout.tsx            root: lang="ar-EG" dir="rtl", Cairo font, metadata, skip link
    not-found.tsx, global-error.tsx
    (marketing)/          landing page + header/footer layout + error boundary
    (app)/                signed-in app area: header + bottom tab bar, loading + error boundary
      placement/page.tsx  honest "not ready yet" placeholder (no fake quiz)
  components/
    ui/                   Button/ButtonLink, Container, Icon, Ltr, Skeleton, EmptyState, ErrorState, PageHeader
    layout/               SiteHeader, SiteFooter, BottomNav, LogoMark
    feedback/             RouteError (shared by every error.tsx)
    landing/              Hero, ChatExample, Examples, Features, HowItWorks, FinalCta, content.tsx (editable copy)
  config/                 site.ts (name = PLACEHOLDER), nav.ts (items marked "soon" are not links)
  lib/cn.ts
```

## Conventions

- **RTL:** use logical Tailwind utilities (`ms-*`, `pe-*`, `start-*`, `text-start`, `rounded-ss-*`), never `left/right`.
- **English inside Arabic:** wrap in `<Ltr>` (`dir="ltr"`, `lang="en"`, `unicode-bidi: isolate`). Use `as="p"` for standalone English lines.
- **Touch targets:** 44px minimum (`min-h-11`); primary buttons 48-56px.
- **Performance:** one variable font, no icon/animation/UI libraries, no `backdrop-filter`, `motion-reduce` respected.
- **Secrets:** never use the `NEXT_PUBLIC_` prefix for secrets. AI/database keys will be server-only (see `.env.example`).
- **Honesty:** nothing fake. Auth, quiz, scoring, AI, and database features are absent until built for real.

## Notes and known limits

- The product name "يلا إنجليزي" is a placeholder: change it in `src/config/site.ts` (and `public/icon.svg`).
- Landing example content is static, labelled as an example, and not AI output.
- Baseline security headers are set in `next.config.mjs`; a Content-Security-Policy is deferred to a later phase.
- No PWA manifest or PNG icons yet.

## Phase 2 (not started)

1. Authentication (real provider) and database schema/migrations.
2. CEFR placement test: authored question bank (A1-B2), scoring logic, persisted results.
3. Interest selection and personalization data model.
4. Server-side API routes for AI writing correction (server-only keys, rate limiting, input validation).
5. Tests (unit + Playwright mobile viewport), CI, error reporting, CSP, PWA manifest and icons.
