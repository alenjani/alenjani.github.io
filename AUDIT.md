# Content + design audit — what's filler, what's weak, what to keep

Honest review of every surface. Three columns of recommendations: **CUT** (filler — remove), **SHARPEN** (weak prose — tighten), **POLISH** (visual / chrome).

Nothing here is mandatory. Pick what you agree with; I execute only what you greenlight.

---

## CUT (filler to remove)

### C1 — Now block: drop the funnel-y last sentence
*`content/now.ts`*

Currently: *"Working on production recsys evaluation — counterfactual simulation and LLM-as-judge for offline-online metric alignment. Open to advisory and consulting conversations."*

The first sentence is fine — it's a specific, current-work signal. The second sentence (*"Open to advisory and consulting conversations"*) violates the locked positioning rules from `POSITIONING.md` — that's exactly the explicit availability framing we agreed to skip. The page should be implicit, not pitching.

**Action:** delete the second sentence. Keep just the first.

### C2 — Hero lede: drop the dangling "at scale"
*`components/hero.tsx`*

Currently the lede ends: *"... and personalization and recommender systems at scale."*

The "at scale" was added late as filler when we tightened other surfaces. It doesn't add information — *"recommender systems"* in this context already implies scale. The other two lanes don't have a parallel suffix; the asymmetry calls attention to the filler.

**Action:** end the sentence at *"personalization and recommender systems."* (period).

### C3 — Pareto example card: cut the title-repeat opener
*`app/twins/page.tsx`, Pillar II "pareto" example body*

Currently opens: *"A resilience-based method for prioritizing post-event building inspections. The method allocates limited inspection resources by ordering buildings to maximize recovery of community function per inspector-hour..."*

First sentence is verbatim the card title — pure filler. Jump straight to *"The method allocates..."*

**Action:** delete the first sentence.

### C4 — Industrial CV card paragraph 2 is heavier than needed
*`app/detection/page.tsx`, "industrial-cv" example body*

The second paragraph (*"On the data side: a leakage-safe workflow on GCP/GCS + Label Studio, with targeted hard-negative mining..."*) leads with infra-stack name-dropping (*GCP/GCS + Label Studio*) which feels resume-y in the body of a card. The substance — leakage-safe workflows, hard-negative mining for physical constraints — is the value.

**Action:** rewrite to lead with the *what* not the *vendor stack*: *"On the data side: a leakage-safe label/train/eval split, plus targeted hard-negative mining for the physical-environment constraints — lighting drift, misalignment, class imbalance."* Drop "GCP/GCS + Label Studio" (or move them to a tiny `<code>` line if you want to keep them).

### C5 — Pillar I "More" has two near-duplicate cards
*`app/detection/page.tsx`, "info-fusion-damage" + "indoor-localization"*

Both are co-authored second-tier reuses of fusion machinery in different sub-problems. After the pre/post-fusion lead card already covers the core methodology, the marginal payoff of showing two more very similar cards in the disclosure is low. They lengthen the page without adding new arguments.

**Action options:**
- *(a) drop indoor-localization* — its core idea (SfM + projective transform) is mechanically interesting but adjacent to the rest of Pillar I. Removing it tightens.
- *(b) keep both, but tighten each card's body to 2-3 sentences max* (currently 5).

My pick: **(a)** drop indoor-localization. It's the most domain-specific (post-event indoor inspection), the least transferable signal of the Pillar I narrative.

---

## SHARPEN (weak prose to tighten)

### S1 — Pillar II overview ¶3 has a self-congratulatory note
*`app/twins/page.tsx`*

Currently: *"This work sits at the intersection of two skill stacks that rarely overlap: ML/optimization fluency and engineering complex-systems modeling. That intersection is what makes it transferable..."*

"Two skill stacks that rarely overlap" is a thin disguise for *"I'm rare."* The locked positioning rules say we make the leverage signal *implicit* — let the reader infer it from the work. Drop the self-claim, keep the transferability point.

**Proposed:** *"The same loop generalizes — capital allocation, infrastructure investment, claims triage, A/B-test scheduling all reduce to the same trade-space exercise with different inputs."*

### S2 — Pillar III overview ¶3 is good but underused
The current ¶3 (*"The patterns generalize past consumer recsys: search, ads, content ranking, agent evaluation..."*) is one of the strongest closing arguments on the site. Currently buried at the end of the overview. Worth keeping in place — but worth knowing it's the single most useful sentence for the recsys-buyer scanning the page. Keep as-is.

### S3 — Hero lede is still too long for a hero
*`components/hero.tsx`*

Currently 60 words. After C2 it's 58. Could go further:

**Proposed:** *"Production ML where ranking, detection, and decisions have to survive real-world data. Three lanes: **visual inspection in the wild**, **digital twins for complex coupled systems**, **personalization and recommender systems**."*

Drops the descriptive phrases ("across noisy collection pipelines," "and trade-space modeling for") — those repeat content the pillar pages cover. Three pillar names, three em-bolds, period. ~32 words.

### S4 — Topic explainer (a) is descriptive, not opinionated
*Pillar I, "Change detection vs anomaly detection vs classification"*

Currently reads like a glossary. The senior-practitioner play is to add an opinion — *which* of the three you find most production teams pick wrong.

**Proposed addition (paragraph 3):** *"In my experience the most common mistake is framing a problem as classification when it's actually change detection — production teams reach for a labeled classifier when the real signal is in the delta between two states. The data, the labels, and the eval all have to be designed differently."*

(This restores one carefully-placed *"I"* — but it's an *experience* citation, not a self-catalog. Different register from "What I focus on".)

### S5 — Several bullet items are 2 sentences when 1 will do
*PillarLists across all three pages*

Tighter rewrites:

- **Pre/post or multi-view alignment.** *Current:* "Two views of the same object don't trivially register. Depth-aware homography matters when the scene is 3D — a naive affine transform fails." → *Proposed:* "Two views of the same object don't trivially register — depth-aware homography matters when the scene is 3D, and naive affine fails."
- **Decision logic vs. raw model output.** *Current:* "A class probability is not a decision. Threshold choice, hysteresis, multi-shot consensus — that's what turns a model into a system." → *Proposed:* "A class probability is not a decision; threshold choice, hysteresis, and multi-shot consensus are what turn a model into a system."

These are taste choices, not big lifts. Skip if you prefer the existing rhythm.

### S6 — Some Field Guide why-lines could be sharper
*`content/*/field-guide.tsx`*

Examples worth tightening:

- Stanford CS231n why-line: *"The canonical entry point. Free notes, lectures on YouTube. Fei-Fei Li / Justin Johnson / Serena Yeung."* — three short fragments, reads like a card. Could become: *"The canonical CV course — free notes, lectures on YouTube, taught by the people who built the field."*
- Distill.pub Feature Visualization: *"Still the cleanest explainer of what convnets actually see. The mental model that grounds everything downstream."* — second sentence is filler. Cut to first sentence.

Many why-lines are already strong; only ~5 need polishing.

---

## POLISH (visual / chrome / mobile)

### P1 — Per-pillar Open Graph images
Currently `app/opengraph-image.tsx` renders one dark editorial card used for *every* route. When you share `/detection` on LinkedIn vs `/recsys`, the preview looks identical.

**Fix:** add `app/detection/opengraph-image.tsx`, `app/twins/opengraph-image.tsx`, `app/recsys/opengraph-image.tsx`. Each uses its pillar's hero figure as backdrop with a dark gradient overlay + the pillar name + the tag.

### P2 — Real thumbnails in the Notable Visualizations list
Currently the visualizations are rows of: brand-mark + text + "Visit →". The user explicitly asked for *"really relevant images"*. Two options:

- **Option A (clean, fast):** keep the row format but make the brand-mark column 48-64px instead of 22px so it reads more like a card.
- **Option B (rich, more work):** fetch a real screenshot of each linked page, optimize to ~300×180 thumbnails, embed inline. Real visual texture; ~30 min per pillar to capture + optimize.

My pick: **B** for the visualizations section (visual hook is the whole point), **A** for the reading-list brand marks (they're labels, not previews).

### P3 — Mobile audit
Concerns to verify by walking 375 / 414 / 768:

- **Reading list rows** — `grid-cols-[28px_1fr]` brand-mark column may be tight; on small phones the brand mark wraps oddly.
- **Topic-ref callout** — inline brand mark + paragraph + link may stack ugly on narrow.
- **Pillar header numeral** — 64px on mobile (down from 88px) might still be too big over a 1-col stack.
- **Pillar-page-nav strip** — prev/next cards in 2-col on tablet, 1-col on mobile; the `text-right` alignment on the next-card looks off when stacked.

These need eyes-on review (running `npm run dev` and using device toolbar) — not something a code-only review can confirm.

### P4 — Dark mode gold could be too bright
Current dark accent: `#fbbf24` (Tailwind amber-400). Pairs OK against the navy `#020617` background but feels a touch *vivid* — reads more "alert" than "editorial." Could try `#facc15` (yellow-400, very similar) or `#eab308` (yellow-500, dimmer). A side-by-side toggle test would settle it.

### P5 — Branded 404 page
Currently default Next.js 404 ("This page could not be found.") with no chrome. Add `app/not-found.tsx` matching the site's editorial register — same topnav/footer, an apology + a link to the three pillars.

### P6 — Tab-bar branding (`theme-color`, favicon)
Currently the default Next.js favicon. Add a small custom `icon.svg` (just a stylized **AL** monogram) so the browser tab shows brand. Plus `theme-color` meta to control mobile-browser-bar tint.

### P7 — Reading-list density on mobile
Right now reading items are stacked with brand-mark on the left at 20px. On 375px screens, the why-line wraps tightly. Could either (a) drop the brand mark on mobile or (b) reduce text size on mobile.

### P8 — Code blocks in topic bodies could have subtle highlighting
Currently `<code>` is mono + light grey background. For longer code lines (HNSW parameters, ResNet-50, [0,1]) it works. If we ever ship code *blocks*, would need proper syntax highlighting.

---

## What NOT to touch

Things that read well and shouldn't be re-litigated:

- **Pillar II "Cyber-physical testing" opener** — *"Pure simulation is cheap but lies. Pure physical testing is expensive and slow."* — strong, opinionated, memorable.
- **Pillar II "Resilience-oriented design" opener** — *"How do you design for resilience without it being a vibes-based adjective?"* — earns its keep.
- **Pillar III hero (recsys card body)** — current InfoNCE + hard-negatives + warm-start prose is technically dense and right at the editorial register.
- **About paragraph 1** — *"Mechanical engineer who took a left turn into ML and never went back."* — best opening sentence on the site.
- **Field Guide Open Questions paragraphs** — fresh, well-sourced from the research dossier, properly opinionated.
- **All three example-cards "Pre/post fusion"** (the lead Pillar I card) — figure-rich, technically substantive, doesn't repeat itself.

---

## Recommended action sequence

If you want this whole audit executed:

1. **All CUTs** — C1, C2, C3, C4, C5. ~15 minutes, no judgment calls beyond your sign-off.
2. **S3 hero rewrite** — single highest-leverage prose tightening. ~5 minutes.
3. **S1 Pillar II overview fix** — removes the only resume-tone sentence in the overviews. ~5 minutes.
4. **S4 Topic (a) opinion add** — ~10 minutes (worth doing one pillar as a model before doing all six).
5. **P1 per-pillar OG images** — ~30 minutes.
6. **P2 option B (real visualization thumbnails)** — 30-45 min per pillar; can defer or batch.
7. **P3 mobile pass** — needs running `npm run dev` and walking breakpoints. 30-60 min depending on findings.
8. **P4 dark-mode gold** — quick tweak; possibly no change needed.
9. **P5 branded 404 + P6 favicon** — 30 min combined.

**Total: roughly half a day** to execute everything, more if visualization thumbnails go deep.

## Open questions for you

- [ ] Accept all CUTs? Any to keep?
- [ ] Accept S1 (Pillar II overview) and S3 (hero)? S4 (topic opinion) is more invasive — yes/no?
- [ ] P2 — option A (clean) or option B (real thumbnails)?
- [ ] P3 mobile — do this audit live (I run dev + walk breakpoints + commit fixes) or code-only?
- [ ] Anything else you see as filler that I missed?

Say *"go on everything"* to execute the full sequence, or pick subsets.
