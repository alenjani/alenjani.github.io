# Next.js Migration Plan — alenjani.github.io

Working doc. Review and lock the open decisions before Phase 0 starts.

---

## Goals

1. **Move from static HTML+CSS+vanilla-JS** (4 hand-written HTML files, 1 CSS file, 1 JS file) **to Next.js** so we can:
   - Reuse components (topnav, footer, pillar header, topic accordion, card)
   - Type-check everything (TypeScript)
   - Optimize images (next/image)
   - Optionally use server-side features later (Brand Search API with `sk_` key, MCP integrations, dynamic OG images)
   - Lean on the UI/UX Pro Max skill's Next.js + shadcn guidance

2. **Preserve the locked positioning and content.** No re-litigation of pillar names, hero copy, topic explainers, or examples. Migration is structural, not a re-write.

3. **Preserve URLs.** `/` → home, `/detection` → Pillar I, `/twins` → Pillar II, `/recsys` → Pillar III. Existing deep-link patterns continue working (`#about`, `#contact`).

## Non-goals

- New content pillars or new topic explainers (separate work)
- Server-side rendering of database-backed content (we're a static portfolio)
- Authentication / accounts / dashboards
- E-commerce / payments
- Marketing automation / analytics beyond the lightest possible

## Locked design intent (do not drift)

From `POSITIONING.md` (already locked):
- **Tone:** quiet authority. Identity-forward. Dry, technical, precise. *"The page IS the marketing precisely because it doesn't look like marketing."*
- **Three pillars:** I. Detection · II. Twins · III. Personalization
- **Per-pillar shape:** overview → dilemmas → approach → topic explainers → examples-from-my-work
- **Visuals:** single accent color, real artifacts not stock illustrations, large editorial typography, no marketing-funnel widgets

UI/UX Pro Max style families that match this intent: **Swiss Modernism 2.0**, **Exaggerated Minimalism**, **Editorial Grid / Magazine** — all reinforce the editorial-research register.

---

## Tech stack (proposal)

| Concern | Choice | Why |
|---|---|---|
| Framework | **Next.js 15 (App Router)** | Skill recommends App Router; matches modern best practice |
| Language | **TypeScript** | Type-checks the content schema (pillar metadata, topic IDs, etc.) |
| Styling | **Tailwind CSS** + CSS variables for design tokens | Skill recommends; tokens map cleanly from current `style.css` `:root` vars |
| Component library | **shadcn/ui** | Skill recommends; ships unstyled-default Radix primitives we copy into the repo. Use `Accordion` for topic explainers, `Button`, `Separator`, `Card` |
| Content for topic explainers | **MDX** via `@next/mdx` | Topic bodies are 100–200 word chunks of prose; MDX lets you write them as Markdown with embedded JSX (e.g. for `<TopicRef>` callouts and `<code>` snippets) |
| Images | **next/image** + `figures/` moved to `public/figures/` | Auto-optimized, lazy-loaded |
| Dark mode | **next-themes** | Wraps `prefers-color-scheme`; enables system + manual toggle |
| Fonts | **next/font** with Inter + JetBrains Mono | Self-hosted, no FOUT, no external request to fonts.googleapis |
| Brand marks | small `<BrandMark>` component wrapping `img.logo.dev` | Replaces current `data-logo-domain` hydration; reads `NEXT_PUBLIC_LOGO_DEV_TOKEN` at build time |
| Analytics | **None initially**; if later, Plausible or Vercel Analytics (privacy-friendly) | Quiet-authority site doesn't need tracking |

## Why this stack and not something simpler

- **Vite + React** would also work and is lighter, but you'd reinvent Next's image optimization, font handling, MDX integration, file-based routing, and (later) API routes. Next is the right call given the explicit goal "best practices like Next.js and React."
- **Astro** is excellent for content-heavy sites and arguably *better* than Next for this exact use case (pillar pages with mostly static content, minimal client JS). It's a real alternative — see *Open Decision A* below.
- **Pure shadcn + Tailwind without MDX** keeps content in JSX files. Faster to migrate, harder to edit. MDX is the right call for the long-form topic explainers; everything else stays in TSX.

---

## Hosting decision matrix (Open Decision B)

| Option | Pros | Cons |
|---|---|---|
| **Vercel (recommended)** | Native Next.js host. Free tier covers this site easily. Server-side features available later (sk_ key, Brand Search, dynamic OG). Branch previews. Edge functions. Custom domain free. | New URL (`alenjani.vercel.app` until DNS); requires Vercel account |
| **GitHub Pages with `output: 'export'`** | URL stays `alenjani.github.io`; current Pages config keeps working | No server-side features. `next/image` requires custom loader (or you skip it). Slightly clunkier. |
| **Cloudflare Pages** | Generous free tier; fast edge | Less Next.js-specific tooling than Vercel |

My recommendation: **Vercel.** The future Brand Search / sk_ key / API route work is much easier with Vercel; preview deployments per PR will be useful for the inevitable copy iteration. Domain can be customized later (you have `nropy.com` and `leansupplai.com` already in your logo.dev allowed list — could one of them become the canonical home, or do we want to pick up something like `alilenjani.com`?).

If we go Vercel, we can keep `alenjani.github.io` as a redirect (the old static files keep serving; we add a `<meta http-equiv="refresh">` or DNS-level redirect). Or we can just leave it dormant.

---

## Open decisions (lock these before I start coding)

- [ ] **A. Framework** — *Next.js* (default, what you asked for) vs. *Astro* (arguably better for this content type, less JS shipped to client). My recommendation: **Next.js** since you said it explicitly. Astro is the smarter answer if minimum-bundle-size matters more than ecosystem familiarity.
- [ ] **B. Hosting** — *Vercel* (recommended), *GitHub Pages static export*, or *Cloudflare Pages*.
- [ ] **C. Domain** — keep `alenjani.github.io`, or move to `nropy.com` / `leansupplai.com` / a new `.com`? (DNS work is yours; I just need to know the canonical domain for OG tags, sitemap, robots.txt.)
- [ ] **D. shadcn/ui** — yes (recommended) or build primitives from scratch?
- [ ] **E. MDX for topic explainers** — yes (recommended; easier to edit later) or keep them inline in TSX?
- [ ] **F. Component library color tokens** — keep current accent purple `#4f46e5` or switch to a different accent (tie-in with new positioning, e.g., a more editorial blue/charcoal)?
- [ ] **G. Migration approach** — *in-place* (replace current files in main; one big PR) vs. *parallel-then-cutover* (build under `next/` subdirectory or `feature/nextjs` branch, cut over when done). My recommendation: **branch + cutover** so the live site stays untouched until we're ready.
- [ ] **H. Dark mode** — system-only (`prefers-color-scheme`) or manual toggle in topnav too?

---

## Proposed file structure (post-migration)

```
alenjani.github.io/
├── app/
│   ├── layout.tsx              # Root layout: <html>, <body>, fonts, theme provider
│   ├── page.tsx                # Home (hero · proof bar · pillar cards · about · contact)
│   ├── detection/page.tsx      # Pillar I deep-dive
│   ├── twins/page.tsx          # Pillar II deep-dive
│   ├── recsys/page.tsx         # Pillar III deep-dive
│   ├── globals.css             # Tailwind directives + design-token CSS variables
│   ├── opengraph-image.tsx     # Auto-generated OG image for all pages (file convention)
│   └── icon.svg                # favicon
│
├── components/
│   ├── topnav.tsx
│   ├── footer.tsx
│   ├── hero.tsx
│   ├── proofbar.tsx
│   ├── pillar-card-preview.tsx     # Home tile linking to a pillar page
│   ├── pillar-page.tsx             # Full-pillar layout: header+frame+examples+nav
│   ├── pillar-header.tsx
│   ├── pillar-overview.tsx
│   ├── pillar-lists.tsx            # Two-column "what's hard" / "how I approach"
│   ├── pillar-topics.tsx           # Wraps the Accordion of topic explainers
│   ├── topic.tsx                   # AccordionItem with topic-num, title, body
│   ├── topic-ref.tsx               # The styled "See also" callout
│   ├── examples-section.tsx
│   ├── work-card.tsx               # Expandable card (paper or shipped)
│   ├── pillar-page-nav.tsx         # Prev / next / home strip at bottom of pillars
│   ├── email-copy.tsx              # Click-to-copy email
│   └── brand-mark.tsx              # logo.dev wrapper
│
├── content/
│   ├── pillars.ts                  # Pillar metadata: id, num, title, tag, slug
│   ├── detection/
│   │   ├── overview.mdx
│   │   ├── topics/
│   │   │   ├── 01-change-vs-anomaly.mdx
│   │   │   ├── 02-prepost-alignment.mdx
│   │   │   └── ...
│   │   └── examples/
│   │       ├── prepost-fusion.mdx
│   │       ├── panorama-extraction.mdx
│   │       └── ...
│   ├── twins/...                   # same shape
│   └── recsys/...
│
├── lib/
│   ├── content.ts                  # Read MDX content from filesystem
│   ├── logodev.ts                  # Build img.logo.dev URLs
│   └── pillars.ts                  # Helper to load pillar metadata
│
├── public/
│   ├── figures/                    # Existing figures, moved
│   ├── logos/                      # Stanford / NASA / Purdue SVGs
│   ├── headshot.jpg
│   └── favicon.ico
│
├── styles/
│   └── tokens.css                  # Design tokens (CSS vars; mirrored in tailwind.config.ts)
│
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
├── package.json
├── .env.local                      # NEXT_PUBLIC_LOGO_DEV_TOKEN (gitignored)
├── .env.example                    # Documents what env vars to set
├── README.md
└── (legacy)
    ├── index.html, detection.html, twins.html, recsys.html  # Kept until cutover, then deleted
    ├── style.css
    ├── assets/js/logodev.js
    └── .claude/, figures/, etc. — all preserved
```

---

## Phased plan

### Phase 0 — Plan approval & scaffold (0.5 day)

**Wait for the open decisions above to be locked.** Then:

1. Create branch `feature/nextjs-migration`
2. `npx create-next-app@latest .` with TypeScript, Tailwind, App Router, src dir disabled
3. Install: `next-themes`, `@next/mdx`, `clsx`, `lucide-react` (for icons), shadcn CLI
4. Configure Tailwind to mirror current design tokens (read `style.css` `:root` vars; map to `tailwind.config.ts` theme.extend.colors)
5. Add fonts via `next/font` (Inter + JetBrains Mono, locally hosted)
6. Set up `.env.local` and `.env.example`

**Outcome:** clean Next 15 + Tailwind + shadcn project, dark/light tokens working, no content yet.

### Phase 1 — Layout, components, home page (1 day)

1. Build `app/layout.tsx` with topnav + footer
2. Build `<Topnav>`, `<Footer>` components
3. Build `<Hero>`, `<Proofbar>`, `<EmailCopy>` components
4. Build home page (`app/page.tsx`) end-to-end with the locked copy
5. Build `<PillarCardPreview>` component for the 3-card grid
6. Verify visual parity with current `index.html`

**Outcome:** `/` is migrated and pixel-close to current.

### Phase 2 — Pillar page shell (1 day)

1. Build `<PillarPage>`, `<PillarHeader>`, `<PillarFrame>`, `<PillarLists>`, `<PillarTopics>`, `<Topic>`, `<TopicRef>`, `<ExamplesSection>`, `<WorkCard>`, `<PillarPageNav>` components
2. Use shadcn `<Accordion>` for `<PillarTopics>`
3. Wire pillar metadata (`content/pillars.ts`)

**Outcome:** Component library complete; ready to wire content.

### Phase 3 — Content migration (1 day)

1. Extract topic explainers from `detection.html` / `twins.html` / `recsys.html` into MDX files (one per topic, ~6–8 per pillar)
2. Extract example cards into MDX files (one per example, 3–5 per pillar)
3. Build `lib/content.ts` to read MDX from filesystem at build time
4. Wire each pillar page to its content directory
5. Verify visual parity with current `detection.html` / `twins.html` / `recsys.html`

**Outcome:** All three pillar pages rebuilt as Next.js pages; content lives in MDX.

### Phase 4 — Integrations & polish (0.5 day)

1. `<BrandMark>` component wrapping `img.logo.dev` with the publishable token from env
2. Dark-mode polish (test all components)
3. `next/image` migration for figures
4. Open Graph image (auto-generated via `app/opengraph-image.tsx`)
5. Lighthouse pass (perf, a11y); fix issues

**Outcome:** Production-ready Next.js site, faster than current.

### Phase 5 — Deploy & cutover (0.5 day)

1. Deploy preview to Vercel (or chosen host) from feature branch
2. Verify all pages, all anchors, all logos render
3. Merge to main
4. Update DNS / GitHub Pages settings
5. Delete legacy HTML/CSS/JS files in a follow-up commit
6. Update `README.md` with the new build/dev workflow

**Outcome:** New site is live; old static files removed from main.

**Total: ~3.5 working days of focused work.**

---

## Risks & mitigations

| Risk | Mitigation |
|---|---|
| MDX rendering breaks on a topic body that has weird HTML | Test each MDX file against its expected output; keep a small `<RawHtml>` escape hatch |
| Tailwind CSS-vars setup feels over-engineered | Stick to a single `tokens.css` + matching `tailwind.config.ts` and don't add a third source of truth |
| shadcn primitives don't match the editorial register | Customize the copied primitive (it's just code, you own it) |
| logo.dev domain restriction blocks the new domain when we switch | Update the dashboard *before* DNS cutover |
| Migration takes longer than 3.5 days | Branch is isolated; live site keeps working; ship Phase 1+2 together as a "preview", finish Phase 3+ at any pace |
| Visual regression vs current site | Take screenshots of every page on current production before starting; diff after each phase |

---

## Open questions for you (in addition to the lock-in checkboxes above)

1. **Anything you want to *change* in content during this migration?** I'll preserve the locked positioning by default — but if there's anything you want to revise (Stanford card content, employer-specific details, current employer line, headshot), now is the time. Otherwise it's pure 1:1 content migration.
2. **Anything to *add*?** Industry references for Etsy/Pinterest/Spotify/etc, additional cards, a "Now" section, a blog? Or strictly migrate-then-evolve?
3. **Sitemap & robots.txt** — auto-generate (recommended) or do you want explicit control?
4. **Want a /blog or /writing route?** Trivial to add now, harder retro-fitted.

---

## What happens to the existing files

Current static files are **untouched** during Phases 0–4 (work happens on a branch). At Phase 5 cutover, the legacy HTML/CSS/JS are moved to a `legacy/` folder for one commit, then deleted in the next. Git history preserves them forever; rolling back is `git revert`.

---

## Ready to start when

You answer the locks (A–H) above. The minimum I need is **B (hosting)**, **G (migration approach)**, and explicit **yes** to A, D, E. The rest I can default per my recommendations and you can override later.
