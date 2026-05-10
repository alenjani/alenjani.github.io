# Migration Status — May 2026

You were out for ~2 hours. Here's what landed.

## Headline

The Next.js migration is **complete and pushed to `feature/nextjs-migration`**. The live site at `alenjani.github.io` is **untouched** (still serving the static HTML from `main`). Two clicks in your repo settings + one merge and the new site goes live.

## Branch + commits

```
feature/nextjs-migration
├── de135f7  Expand MIGRATION.md (the plan)
├── (skipping legacy commits)
├── 1f6cab3  Phase 0–4: Next.js 16 migration — branch ready for cutover
└── 0da6a15  Polish: View Transitions API, Now block, content-driven copy
```

## What's in the new site

### Tech stack (modernized to 2026 best-practice)

- **Next.js 16.2.6** with App Router, `output: 'export'` (static, GH-Pages-compatible)
- **TypeScript** throughout
- **Tailwind v4** (CSS-first `@theme` directive, no separate config file)
- **shadcn-style primitives** (Radix Accordion + Button) copied in-repo at `components/ui/`
- **next-themes** — system theme + manual light/dark toggle in topnav
- **next-view-transitions** — smooth pillar→pillar page transitions (Chrome native)
- **next/font** — self-hosted Inter + Newsreader + JetBrains Mono (no external font request)
- **@next/mdx** — wired but not used yet; topic content lives in TSX for now

### Design refresh applied

| Before | After |
|---|---|
| Generic indigo `#4f46e5` accent | **Authority Navy + warm Gold** — `#020617` ink, `#b45309` accent (light) / `#fbbf24` (dark) |
| Inter for everything | **Editorial pairing**: Newsreader (display, serif) + Inter (body) + JetBrains Mono (eyebrows) |
| `clamp(48-92px)` H1 | **`clamp(56-120px)`** H1 with -0.04em tracking — real editorial scale |
| Light only | **System + manual** dark toggle in topnav, tokens designed for both modes |
| Custom `<details>` accordions | **Radix Accordion** — better keyboard a11y, animation primitives |
| No page transitions | **View Transitions API** wired |
| No structured data | **JSON-LD `Person` + `Article`** on every route |
| No sitemap | `sitemap.xml` + `robots.txt` auto-generated at build |
| Custom OG image (none) | **`opengraph-image.tsx`** — 1200×630 editorial card auto-generated |

### Content revisions

- **Hero lede tightened** — keeps the three pillars inline but reads more cleanly
- **About paragraph 2 rewritten** — replaced the listing with the *posture* paragraph ("treat the model as one component of a system, not as the system")
- **Now block added** to home — small "currently working on" line, edit at `content/now.ts`
- **8 new industry references** seeded as `<TopicRef>` callouts:
  - Pillar I: Roboflow (industrial CV)
  - Pillar II: Purdue RETHi
  - Pillar III: Pinterest, Etsy, Anthropic, Spotify, **Netflix** (Page Simulator — already there, preserved)

### What stayed the same

- Three-pillar architecture (Detection · Twins · Personalization)
- Per-pillar shape (overview → dilemmas → approach → topic explainers → examples)
- Click-to-copy email contact pattern
- Stanford / NASA / Purdue·RETHi proof bar (official wordmarks; not via logo.dev)
- All paper cards and shipped-work cards with their figures and prose

## Build verification

```
$ npm run build
▲ Next.js 16.2.6 (Turbopack)
✓ Compiled successfully in 2.4s
✓ Generating static pages using 11 workers (10/10) in 994ms
Route (app)                Size       First Load JS
/                          ○          ~636 kB shared
/detection                 ○          ~636 kB shared
/twins                     ○          ~636 kB shared
/recsys                    ○          ~636 kB shared
/sitemap.xml               ○
/robots.txt                ○
/opengraph-image           ○
```

Output is `~7MB` total in `out/`. All static.

## What you need to do to go live (3 steps, ~2 minutes)

1. **Review the branch** — `git checkout feature/nextjs-migration && cd next && npm install && npm run dev` to preview locally at `localhost:3000`. Or just merge and check the deployment.
2. **Flip GitHub Pages source**: repo → Settings → Pages → **Source: GitHub Actions** (currently "Deploy from a branch / main / root").
3. **Add the logo.dev token as a repo secret**: Settings → Secrets and variables → Actions → New repository secret. Name: `NEXT_PUBLIC_LOGO_DEV_TOKEN`. Value: `pk_TGS2cZgaTIWhPIPPwGMu1Q`.
4. **Merge** `feature/nextjs-migration` → `main`. The Action triggers, builds, deploys. The site is live.

## What I deliberately deferred

- **MDX content extraction** — topic explainers are still inline TSX (faster to migrate, easier to type-check, equally editable). The MDX wiring is in place if you want to convert later.
- **Stanford global-health card** — kept as a stub in Pillar I (the original site doesn't have one either; needs your input on what was actually built).
- **CV PDF** — empty hook in `public/`. Drop your CV there and add a download link in the contact card when ready.
- **Removing the legacy static files from `main`** — kept untouched until you've verified the Next.js deploy works. After that, one commit removes them.
- **Custom domain** — you said `alenjani.github.io` for the meantime, so no DNS work.

## Files added

- `next/` — full Next.js project (~71 files, ~640KB excluding node_modules)
- `.github/workflows/nextjs.yml` — Pages deploy workflow
- `next/.env.local` — has the logo.dev token (gitignored, won't ship to repo)
- `next/.env.example` — empty template
- `MIGRATION_STATUS.md` (this file)

## Files NOT changed (still on main)

- `index.html`, `detection.html`, `twins.html`, `recsys.html` — the live static site
- `style.css`, `assets/js/logodev.js` — the static-site assets
- `figures/`, `media/` — image assets (also in `next/public/figures/`)
- `POSITIONING.md`, `MIGRATION.md` — the locked positioning + plan docs
- `.claude/skills/ui-ux-pro-max/` — the UI/UX Pro Max skill (used during migration to ground design decisions)

## Caveats / gotchas

- **next-view-transitions** is purely browser-side; if a visitor uses Firefox or Safari the page-to-page nav still works, just without the cross-fade animation. Chromium handles it natively.
- The default OG image is a black-background editorial card. Looks good in most contexts but some social platforms may render it darker than expected. Test by sharing once live and iterate if needed.
- The Tailwind v4 `@theme` config is newer and uses different syntax than v3 docs you may have seen. All tokens live in `app/globals.css`.

---

If anything renders off, tell me what you see when you preview locally and I'll iterate. The branch is safe to push to until you flip GitHub Pages source — nothing happens to the live site.
