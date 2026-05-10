# Next.js Migration & Site Upgrade Plan

This is the moment to do it right — not a 1:1 port. Migration = framework upgrade **+** design refresh **+** content revisit, executed together so we don't re-litigate later.

Lock the open decisions before Phase 0 starts.

---

## Goals

1. **Migrate the framework** to Next.js 15 (App Router) + TypeScript + Tailwind + shadcn/ui — modern, idiomatic, future-proof, ready for the eventual Brand Search / sk_-key / API-route work.
2. **Refresh the design** to a more distinctive editorial-research register. The current site is already coherent but uses generic indigo + Inter-only — we can push it to a register that visually says "senior research practitioner" the moment a buyer lands.
3. **Revisit the content** while we're in the file anyway: sharpen pillar tags, write the Stanford card, add the first 2–3 industry references (Etsy / Pinterest / Spotify / OpenAI / Anthropic on relevant topics), tighten any prose that drifted long.
4. **Production hygiene** — Lighthouse 100s where possible, WCAG AA across all components, JSON-LD structured data, sitemap.xml, robots.txt, OG images, View Transitions API.

## Non-goals

- New pillars. The three are locked.
- New features beyond what's clearly useful (e.g., no contact form, no calendar booking, no testimonials wall — see locked tone in `POSITIONING.md`).
- Auth, accounts, payments, e-commerce.
- A blog / writing route in Phase 1. (Could be added in Phase 6 if you want — see Open Decision N.)

## Locked from `POSITIONING.md` (do not drift)

- Three pillars: I. Detection · II. Twins · III. Personalization (names final).
- Tone: quiet authority. Identity-forward. Dry, technical, precise. *"The page IS the marketing precisely because it doesn't look like marketing."*
- Per-pillar shape: `overview → dilemmas → approach → topic explainers → examples-from-my-work`.
- No marketing-funnel widgets, no testimonials, no booking links, no inflated metrics.
- Email is the contact channel; click-to-copy widget stays.
- Proof bar (Stanford / NASA / Purdue·RETHi) — earned credibility, official wordmarks stay.

---

## Tech stack (locked unless you say otherwise)

| Concern | Choice | Why |
|---|---|---|
| Framework | **Next.js 15 App Router** | Skill recommends; future-proof |
| Language | **TypeScript** | Type-checks pillar metadata, content schema, brand-mark props |
| Styling | **Tailwind CSS** + design-token CSS variables | Tokens map cleanly from current `style.css` `:root` vars |
| UI primitives | **shadcn/ui** | Skill recommends; copy-into-repo (we own + customize) |
| Long-form content | **MDX** via `@next/mdx` | Topic explainers as Markdown with embedded JSX (`<TopicRef>`, `<code>`) |
| Images | **next/image** + `public/figures/` | Auto-optimized, lazy-loaded |
| Fonts | **next/font** (locally hosted, no FOUT) | Fonts: see Open Decision E |
| Theme | **next-themes** for system + manual light/dark toggle | Editorial sites benefit from dark-mode option |
| Brand marks | `<BrandMark>` component wrapping `img.logo.dev` (publishable token from `NEXT_PUBLIC_LOGO_DEV_TOKEN`) | Already wired in static; same pattern in Next |
| Page transitions | **View Transitions API** + `next-view-transitions` | Smooth pillar→pillar nav; reduced-motion-respectful |
| Structured data | **JSON-LD** (`Person` schema, `Article` for pillar pages) | SEO + LinkedIn/Google rich results |
| OG images | **`opengraph-image.tsx`** (file convention) | Auto-generated per-route social cards |
| Analytics | **None initially**; later Plausible if needed | Quiet-authority site doesn't need tracking |
| Hosting | **Vercel** (recommended; see Open Decision A) | Native Next host, server-side later |

---

## Design refresh — proposed direction (skill-grounded)

The UI/UX Pro Max skill, queried with `"senior research practitioner consulting editorial swiss minimalism quiet authority technical writing"`, returns:

- **Pattern:** *Trust & Authority + Minimal* — exactly the register we want.
- **Suggested palette:** Authority Navy `#0F172A` primary, slate `#334155` secondary, warm gold `#CA8A04` accent, off-white `#F8FAFC` background.
- **Style avoid-list:** AI purple/pink gradients (your current `#4f46e5` accent leans that way), generic content, decorative animation.

### What I propose to change visually

| Element | Current | Proposed | Why |
|---|---|---|---|
| **Accent color** | Indigo `#4f46e5` (generic SaaS) | Authority Navy `#0F172A` for primary + warm Gold `#CA8A04` accent | Distinct from every recsys/SaaS template; signals editorial seriousness |
| **Typography pairing** | Inter (UI) + Inter (display) + JetBrains Mono | **Newsreader** (display, editorial serif) + **Inter** (body/UI) + **JetBrains Mono** (eyebrows, code, numerals) — or *Söhne / Untitled Sans* if we go subscription | Adds editorial weight to headings without crowding UI |
| **Display sizes** | H1 clamp(48–92px) | H1 clamp(56–120px) with tighter `letter-spacing: -0.04em` | Real editorial scale, not safe-default |
| **Eyebrows** | Mono uppercase, accent-colored | Same, but smaller and gold-accented | Refined, not loud |
| **Hero layout** | 1fr + 320px portrait, side-by-side | More editorial: very large name, lede flows below, portrait floats inline at smaller scale (or moves to footer-of-hero) | Lets the *name* be the visual anchor; current hero feels "card-shaped" |
| **Pillar cards (home)** | Image + num + title + tag + CTA, 3-up | Same 3-up but with a serif numeral, more typography, less padding around image | More editorial chrome |
| **Pillar deep-dive header** | Roman num + title + tag, 88px num column | Larger Roman num as decorative element, title in serif | Hero of the pillar page |
| **Topic accordion** | HTML `<details>` with custom CSS | shadcn Accordion with refined chrome (no rounded-lg, more typographic) | Better keyboard a11y, animation-aware |
| **Cards** | Same | Slightly tighter; show role tag in mono accent | Editorial polish |
| **Page transitions** | None | View Transitions API for pillar→pillar nav | Modern best practice; respects reduced-motion |
| **Dark mode** | System-only (one accent doesn't quite work in dark) | System + manual toggle, tokens designed for both modes | Critical for editorial sites; many readers prefer dark |
| **Spacing scale** | Mixed (lots of `28px`, `36px`) | 4/8 system: `4 8 12 16 24 32 48 64 96 128` exclusively | Consistency = perceived quality |
| **Borders & shadows** | Generic | Per-token (e.g. `--border-subtle`, `--border-strong`) | Token-driven theming |

### What stays the same

- Information architecture (4 pages: home + 3 pillars)
- The three-pillar narrative shape (overview → dilemmas → approach → topics → examples)
- Click-to-copy email pattern
- Real institutional logos in proof bar
- Industry-reference callout pattern (Netflix Page Simulator + future ones)

---

## Content revisits — proposed scope

### Sharpen

- **Hero lede.** Current: 60-word run-on naming all three pillars inline. Proposed: 2 short sentences. Sentence 1 = identity. Sentence 2 = the three pillars as a parallel list. Still preserves *"production ML where ranking, detection, and decisions have to survive real-world data."*
- **About paragraph 2.** Current restates the three pillars with the same words as the hero. Proposed: drop the listing (the hero + pillar pages already do that) and replace with one paragraph about the *posture* — what makes the way you work distinctive across all three.
- **Pillar tags** (the `pillar-tag` 1-liner under each title). Current ones are good but could be tighter — each should be one strong sentence, not a list.

### Add

- **Stanford global-health card** in Pillar I (currently a placeholder; you flagged this in the original positioning round). I'll need 3–5 sentences from you on *what was actually built*. See Open Decision F.
- **Industry references** in 2–3 topic explainers per pillar. Concrete starting set:
  - Pillar I: *industrial CV* topic → Roboflow / Lambda Labs case studies. *Multi-stream fusion* topic → Tesla/Waymo / DJI / Wing perception stack pieces.
  - Pillar II: *cyber-physical testing* topic → DARPA / NASA RETHi public docs. *Pareto* topic → operations-research classics or Goldman / BlackRock public quant pieces.
  - Pillar III: *counterfactual sim* already has Netflix. Add *LLM-as-judge* → Anthropic / OpenAI evals papers; *Two-tower* → Pinterest/Etsy retrieval engineering posts; *Hard-negative mining* → Spotify / YouTube engineering blog.
- **`Now` block** at the bottom of the home page (an [nownownow.com](https://nownownow.com/about)-style "what I'm working on right now" line, dated). Tiny but high-signal for buyers checking if you're active.
- **CV / Resume PDF** download in the contact section (`/cv.pdf`).
- **JSON-LD structured data** (`Person`, `Article`) — invisible content, but real SEO value.

### Don't add (unless you push back)

- A `/writing` or `/blog` route. Real writing makes a real difference, but maintaining a blog is a commitment. If you want one, see Open Decision N.
- A `/projects` route separate from pillars. Pillars are projects.
- Testimonials, case studies (in the marketing sense), client logos beyond the earned proof bar.

---

## Proposed file structure

```
alenjani.github.io/
├── app/
│   ├── layout.tsx                  # Root layout: <html>, <body>, fonts, theme + transitions provider
│   ├── page.tsx                    # Home (hero · proof bar · pillar cards · now · about · contact)
│   ├── detection/page.tsx          # Pillar I deep-dive
│   ├── twins/page.tsx              # Pillar II deep-dive
│   ├── recsys/page.tsx             # Pillar III deep-dive
│   ├── globals.css                 # Tailwind directives + design-token CSS variables
│   ├── opengraph-image.tsx         # Default OG (used as fallback)
│   ├── detection/opengraph-image.tsx  # per-pillar OG variants
│   ├── twins/opengraph-image.tsx
│   ├── recsys/opengraph-image.tsx
│   ├── icon.svg
│   ├── apple-icon.png
│   ├── robots.ts                   # robots.txt at build time
│   └── sitemap.ts                  # sitemap.xml at build time
│
├── components/
│   ├── topnav.tsx
│   ├── footer.tsx
│   ├── hero.tsx
│   ├── proofbar.tsx
│   ├── now-block.tsx               # New: "currently working on" 2-liner
│   ├── pillar-card-preview.tsx
│   ├── pillar-page.tsx             # Wraps a pillar page's full layout
│   ├── pillar-header.tsx
│   ├── pillar-overview.tsx
│   ├── pillar-lists.tsx
│   ├── pillar-topics.tsx
│   ├── topic.tsx                   # Single AccordionItem
│   ├── topic-ref.tsx
│   ├── examples-section.tsx
│   ├── work-card.tsx               # Renamed from "card"
│   ├── pillar-page-nav.tsx
│   ├── email-copy.tsx
│   ├── brand-mark.tsx              # logo.dev wrapper
│   ├── theme-toggle.tsx            # Sun/moon button in topnav
│   └── ui/                         # shadcn primitives go here
│       ├── accordion.tsx
│       ├── button.tsx
│       ├── separator.tsx
│       └── ...
│
├── content/
│   ├── pillars.ts                  # Pillar metadata: id, num, title, tag, slug, route
│   ├── now.ts                      # The current "now" line (one place to edit)
│   ├── detection/
│   │   ├── overview.mdx
│   │   ├── topics/
│   │   │   ├── 01-change-vs-anomaly.mdx
│   │   │   ├── 02-prepost-alignment.mdx
│   │   │   ├── ...
│   │   └── examples/
│   │       ├── prepost-fusion.mdx
│   │       ├── panorama-extraction.mdx
│   │       ├── industrial-cv.mdx
│   │       └── stanford-global-health.mdx   # NEW — needs your input
│   ├── twins/...                   # same shape
│   └── recsys/...                  # same shape, plus refs/ for industry citations
│
├── lib/
│   ├── content.ts                  # Read MDX content from filesystem
│   ├── logodev.ts                  # Build img.logo.dev URLs (typed)
│   ├── pillars.ts                  # Pillar metadata helpers
│   └── jsonld.ts                   # JSON-LD generators for Person / Article
│
├── public/
│   ├── figures/                    # Existing figures, moved
│   ├── logos/                      # Stanford / NASA / Purdue SVGs
│   ├── headshot.jpg
│   ├── cv.pdf                      # NEW — drop your CV here
│   └── favicon.ico
│
├── styles/
│   └── tokens.css                  # CSS custom properties; mirrored in tailwind.config.ts
│
├── next.config.ts                  # Includes @next/mdx + view transitions
├── tailwind.config.ts
├── tsconfig.json
├── package.json
├── .env.local                      # NEXT_PUBLIC_LOGO_DEV_TOKEN (gitignored)
├── .env.example                    # Documents env vars
├── README.md
├── POSITIONING.md                  # Existing positioning doc, kept
├── MIGRATION.md                    # This file
└── (legacy)                        # Static files, deleted at cutover
```

---

## Phased plan

Estimates assume focused work, not calendar days.

### Phase 0 — Decisions & scaffold (0.5 day)

**Wait for the open decisions to be locked.** Then:

1. Create branch `feature/nextjs-migration`
2. `npx create-next-app@latest` with TypeScript, Tailwind, App Router
3. Install: `next-themes`, `@next/mdx`, `next-view-transitions`, `clsx`, `lucide-react`
4. Init shadcn (`npx shadcn@latest init`); add Accordion, Button, Separator, ThemeToggle primitives
5. Configure design tokens in `styles/tokens.css` + `tailwind.config.ts` (Authority Navy / Gold / Newsreader / Inter)
6. Set up `.env.local` and `.env.example`

**Outcome:** clean scaffold with new tokens, dark/light working, no content yet.

### Phase 1 — Layout + home (1 day)

1. Build `<Topnav>`, `<Footer>`, `<ThemeToggle>` components
2. Build `<Hero>` (revised editorial layout)
3. Build `<Proofbar>` (existing logos, refined chrome)
4. Build home page (`app/page.tsx`)
5. Build `<PillarCardPreview>` for the 3-card grid
6. Add `<NowBlock>` and `<EmailCopy>`

**Outcome:** `/` migrated, refreshed visually, ready to demo.

### Phase 2 — Pillar shell (1 day)

1. Build `<PillarPage>` and all pillar sub-components
2. Use shadcn `<Accordion>` for `<PillarTopics>`
3. Wire `content/pillars.ts` metadata
4. Stub all three pillar pages with placeholder content

**Outcome:** Component library complete; pillar pages render with placeholders.

### Phase 3 — Content migration + sharpening (1.5 days)

1. Extract topic explainers to MDX (one per topic, ~6–8 per pillar)
2. Extract example cards to MDX (one per example, 3–5 per pillar)
3. **Sharpen:** rewrite hero lede, About paragraph 2, all pillar tags
4. **Add:** Stanford global-health card (requires your input — see Open Decision F)
5. **Add:** first round of industry references (2–3 per pillar; I'll draft, you approve)

**Outcome:** All three pillar pages rebuilt as Next.js pages; content lives in MDX; refreshed copy.

### Phase 4 — Polish, perf, a11y (0.5 day)

1. `<BrandMark>` component using `NEXT_PUBLIC_LOGO_DEV_TOKEN`
2. View Transitions API wired to pillar nav
3. JSON-LD `Person` + per-page `Article` data
4. `app/sitemap.ts` and `app/robots.ts`
5. Per-page OG image generation (`opengraph-image.tsx`)
6. Lighthouse pass — target 100s for Performance, A11y, Best Practices, SEO

**Outcome:** Production-ready, all green.

### Phase 5 — Deploy & cutover (0.5 day)

1. Deploy preview to Vercel from the feature branch
2. Verify all pages, anchors, logos, transitions
3. Update logo.dev allowed domains for the chosen production domain
4. Merge to main
5. Move legacy static files to `legacy/` (one commit), then delete (next commit)
6. Update `README.md` with new dev workflow

**Outcome:** New site live; old artifacts removed.

### Phase 6 (optional, later) — `/writing` or `/now-page`

If you want a writing/notes route, add it after cutover. Trivial to add later (one new MDX directory + one new route).

**Total: ~5 working days of focused work** (was 3.5 before; the design refresh + content sharpening adds ~1.5 days).

---

## Open decisions — lock these before I start

### Critical (block Phase 0)

- [ ] **A. Hosting** — *Vercel* (my pick), GitHub Pages static export, or Cloudflare Pages?
- [ ] **B. Domain** — keep `alenjani.github.io`, or move to `nropy.com` / `leansupplai.com` / something new (`alilenjani.com`)? I need this for OG / sitemap / canonical URLs and to update logo.dev allowed-domains.
- [ ] **C. Migration approach** — *branch + cutover* (my pick) vs in-place. Branch keeps the live site untouched until ready.

### Design direction (block Phase 1)

- [ ] **D. Accent palette** — go with the skill-recommended *Authority Navy + Gold* (my pick), keep current indigo, or pick something else (deep editorial blue, burgundy, forest green)?
- [ ] **E. Typography pairing** — *Newsreader (display) + Inter (body) + JetBrains Mono (mono)* (my pick, free Google Fonts), keep all-Inter, or invest in subscription fonts (Söhne / Untitled / Editorial New)?
- [ ] **F. Hero shape** — keep current side-by-side portrait, or move to *editorial layout with the name as the visual anchor and portrait inline* (my pick)?
- [ ] **G. Dark mode** — system-only, or system **+ manual toggle** in topnav (my pick)?

### Content (block Phase 3)

- [ ] **H. Stanford global-health card** — write a 3–5 sentence description *now* so I can draft a card. Required: what was built, modalities, dataset/cohort character, output type (classification, risk score, triage rank), is there a paper/preprint URL.
- [ ] **I. Industry-references first batch** — ok to add 2–3 references per pillar (Netflix already in, plus draft Etsy / Pinterest / Spotify / OpenAI / Anthropic / NASA RETHi)? I'll draft each, you approve before they ship.
- [ ] **J. Hero copy revision** — ok to tighten the current 60-word lede into 2 short sentences? I'll draft for review.
- [ ] **K. About copy revision** — ok to drop the listing in paragraph 2 and replace with a *posture* paragraph?
- [ ] **L. `Now` block** — yes/no, and if yes, one short line for what you're currently working on (1 sentence).
- [ ] **M. CV PDF** — drop one in `public/cv.pdf` and add a download link in contact section?
- [ ] **N. `/writing` route** — yes/no for Phase 6. (Yes commits to occasional writing; no keeps the site static.)

### Hygiene

- [ ] **O. Sitemap & robots** — auto-generate (my pick) or hand-controlled?
- [ ] **P. Analytics** — none initially (my pick), Plausible (privacy-friendly paid), or Vercel Analytics (free with Vercel)?

---

## Risks & mitigations

| Risk | Mitigation |
|---|---|
| Visual regression — new design doesn't land | Branch + preview deploys; iterate before merge. Take screenshots of every current page first |
| MDX parsing breaks on existing prose with weird HTML | Each MDX file tested; small `<RawHtml>` escape hatch ready |
| Tailwind CSS-vars setup gets over-engineered | Single `tokens.css` + matching `tailwind.config.ts`; no third source of truth |
| shadcn primitives feel too generic | Customize copies (you own them; that's the point of shadcn) |
| logo.dev domain restriction blocks new domain | Update dashboard *before* DNS cutover |
| Migration takes longer than estimate | Phases are independent; ship Phase 1+2 as preview, finish at any pace |
| The new accent (gold) reads cheap if implemented wrong | Use it sparingly — only on eyebrow, accent strokes, and one CTA. Never as primary surface or large fill |
| Editorial typography (Newsreader) feels too formal for your dry voice | We can dial it down: smaller display sizes, lighter weights, or fall back to a sans-serif display like Inter Display weight 800 |

---

## Ready to start when

You answer the **Critical** locks (A, B, C) and the **Design direction** locks (D, E, F, G). Content and hygiene decisions can be answered during Phase 1–2 if you want to think on them.

Minimum to greenlight Phase 0: **A, B, C** answered + explicit **yes** to D, E, F, G with whatever picks.
