# alenjani.github.io — Next.js source

Multi-page personal site, three-pillar architecture. Static export → GitHub Pages.

## Run locally

```bash
cd next
npm install
npm run dev    # http://localhost:3000
npm run build  # produces out/
```

`.env.local` carries `NEXT_PUBLIC_LOGO_DEV_TOKEN` (already set; gitignored).

## Editing content

| What | Where |
|---|---|
| Hero copy | `components/hero.tsx` |
| About paragraphs | `app/page.tsx` |
| Now block (one line) | `content/now.ts` |
| Pillar metadata (titles, tags, thumbs) | `lib/pillars.ts` |
| Pillar topics + examples | inline in `app/<pillar>/page.tsx` |
| Footer / topnav | `components/footer.tsx`, `components/topnav.tsx` |
| Design tokens | `app/globals.css` (`:root` + `.dark`) |
| Email | `components/email-copy.tsx` (constant `EMAIL`) |

## Deploy (cutover from legacy static site to Next.js)

The legacy static site (root-level `index.html`, `detection.html`, `twins.html`,
`recsys.html`) currently serves at `alenjani.github.io` from the `main` branch.
This `next/` Next.js project will replace it. Three cutover steps:

1. **Merge `feature/nextjs-migration` into `main`** (squash or merge). The
   `.github/workflows/nextjs.yml` workflow gets pushed alongside.
2. **Flip GitHub Pages source** in repo settings:
   - Settings → Pages → **Source: GitHub Actions** (currently "Deploy from a
     branch / main / root")
   - Add `NEXT_PUBLIC_LOGO_DEV_TOKEN` as a repo secret (Settings → Secrets and
     variables → Actions → New repository secret) so the build can pick it up.
3. **Optional cleanup**: remove the legacy root files (`index.html`,
   `detection.html`, `twins.html`, `recsys.html`, `style.css`, `assets/`) on
   main once the Next.js deploy is verified.

## File map

```
next/
├── app/              # routes (App Router)
│   ├── layout.tsx
│   ├── page.tsx
│   ├── detection/page.tsx
│   ├── twins/page.tsx
│   ├── recsys/page.tsx
│   ├── opengraph-image.tsx
│   ├── sitemap.ts
│   └── robots.ts
├── components/       # React components
│   └── ui/           # primitives (accordion, button)
├── content/          # editable copy (now.ts)
├── lib/              # helpers (cn, logodev, pillars)
├── public/           # static assets (figures, logos, headshot)
└── next.config.ts    # output: 'export', MDX wired
```

## Stack

- Next.js 16.2.6 (App Router) — static export
- TypeScript
- Tailwind v4 (CSS-first @theme)
- Radix-backed primitives (Accordion, Button), shadcn-style — copied in-repo
- next-themes (system + manual dark/light)
- next-view-transitions (smooth pillar→pillar nav)
- next/font (Inter + Newsreader + JetBrains Mono, self-hosted)
- @next/mdx (wired, not used yet — content lives in TSX for now)

## Design tokens

Authority Navy + warm Gold. See `app/globals.css`:

| Token | Light | Dark |
|---|---|---|
| `--bg` | `#f8fafc` | `#020617` |
| `--ink` | `#020617` | `#f8fafc` |
| `--accent` | `#b45309` | `#fbbf24` |
| `--line` | `#e2e8f0` | `#1e293b` |

Typography: `--font-display` (Newsreader serif) for H1/H2/H3,
`--font-sans` (Inter) for body, `--font-mono` (JetBrains Mono) for eyebrows
and code.

## Things you can do once back

- Edit `content/now.ts` — that's the freshest signal of activity to a buyer
- Add more topic-ref callouts (one-liner: `<TopicRef domain="company.com">…</TopicRef>`)
- Drop a CV PDF into `public/cv.pdf` and add a download link in `email-copy` or contact card
- Move topic explainers from inline TSX into MDX under `content/<pillar>/topics/*.mdx`
  (the @next/mdx wiring is already in place)
- Run `npm run build && open out/index.html` to preview before pushing
