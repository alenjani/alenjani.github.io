# Content lift plan — three pillars as living field guides

Goal: each pillar page should make a knowledgeable visitor think *"I'd save this and come back to it"* — not just *"I'd hire this person."* The two goals reinforce each other.

Lock the open decisions before I start writing.

---

## What we're adding to each pillar page

Three new sections, slotted **after Examples and before the pillar page-nav strip**:

```
PILLAR PAGE STRUCTURE (after this lift)
├── Header (Pillar I/II/III · title · tag)
├── Overview (3 paragraphs)
├── What's hard | What I focus on  (two-column lists)
├── Topics worth understanding (existing accordion)
├── Examples from my work (existing cards)
├── ★ NEW: Open questions in this lane    (3–5 bullets, ~150 words)
├── ★ NEW: Reading list                    (curated, categorized)
├── ★ NEW: Notable visualizations          (external explainers w/ thumbs)
└── Pillar page-nav (prev / next / home)
```

Why these three:

1. **Open questions** — signals you read the literature *currently*, not just at PhD time. Single biggest lever to make the page feel alive.
2. **Reading list** — establishes you as a node in the field. Visitors *bookmark* sites that have a curated list they trust.
3. **Notable visualizations** — short list of external explainer pages worth a click (Distill.pub-style content, interactive demos, well-known engineering blog posts). Visual hooks for visitors who scroll past prose.

---

## Per-section design

### Open questions in this lane

A short prose-driven block, not a list. Reads like a senior practitioner saying *"these are the things I'm watching."*

Format proposal:

```tsx
<section>
  <h3 className="eyebrow">Open questions in this lane</h3>
  <p className="prose-editorial">
    Where the field is still moving and where I'm watching:
  </p>
  <ul>
    <li><strong>Foundation models for [domain]</strong> — short take (2 sentences)
        with 1 link to the canonical reference</li>
    <li><strong>...</strong> — ...</li>
  </ul>
</section>
```

3–5 items per pillar. ~30–50 words per item. Refreshable: I'll write the v1; you update over time as the field shifts.

### Reading list

Categorized list, not a flat dump. Each item: title, source, 1-line WHY (this is the value-add — saying *what* the visitor will learn / take away).

Categories per pillar:

- **Foundational** (3–5 items) — evergreen technical references
- **Industry / production** (3–5 items) — engineering blog posts, technical case studies
- **Tools & libraries** (3–5 items) — what to actually pick up

Format proposal:

```tsx
<section>
  <h3 className="eyebrow">Reading list</h3>
  <h4>Foundational</h4>
  <ul className="reading-list">
    <li>
      <BrandMark domain="distill.pub" size={14} />
      <a href="...">Title</a>
      <span className="reading-source">Distill, 2020</span>
      <p className="reading-why">Why it matters in one line.</p>
    </li>
  </ul>
  <h4>Industry / production</h4>
  <ul>...</ul>
  <h4>Tools & libraries</h4>
  <ul>...</ul>
</section>
```

The brand-mark from logo.dev gives visual texture without being heavy. The 1-line "why" is what separates a useful list from a link dump.

### Notable visualizations

A short grid (3–6 cards) of external explainer pages. Each card: thumbnail (screenshot or graphic), source, what to expect when you click.

Format proposal:

```tsx
<section>
  <h3 className="eyebrow">Notable visualizations</h3>
  <p>External explainers worth a click — the best work in the field doing the
     explaining better than I could.</p>
  <div className="viz-grid">
    <a href="..." className="viz-card">
      <img src="..." alt="..." />
      <span>Title · Source</span>
      <span>1-line description</span>
    </a>
  </div>
</section>
```

Visuals come from screenshots of the linked page. **For licensing**, we use small thumbnails (a fragment of the visual) with attribution + outbound link — same pattern Wikipedia / Hacker News use, generally fair use for non-commercial reference. We don't host high-res copies, never claim authorship, and link prominently.

---

## Curation drafts (v1 — you edit/approve before publishing)

### Pillar I — Visual inspection in the wild

**Open questions**
1. **Foundation models for vision** — Where are SAM 2 / DINOv3 / Florence-2 actually closing the inspection-data gap, and where do they still fail on long-tail conditions?
2. **Self-supervised pretraining for inspection** — Whether the gains transfer to plant-floor / field domains, or only to web-scale natural images.
3. **Calibration under distribution shift** — The literature on temperature scaling / conformal prediction post-deployment is still thin in production CV.
4. **Multimodal fusion at the foundation-model level** — CLIP / SigLIP / vision-language models reframing what "fusion" even means.
5. **Synthetic data for hard negatives** — Diffusion-generated training negatives are getting good enough to consider seriously.

**Reading list — foundational**
- *A Comprehensive Study on Cross-View Gait* / classic vision-in-the-wild references — TBD
- *Deep Learning for Computer Vision* (Stanford CS231n notes) — Karpathy's notes, still the cleanest intro
- Distill.pub's *Feature Visualization* — Olah, 2017

**Reading list — industry / production**
- *Tesla AI Day* full transcript (perception stack)
- *Roboflow* engineering blog — production training pipelines
- *V7 Labs* on annotation at scale

**Reading list — tools & libraries**
- Ultralytics YOLO (defacto detection baseline)
- Albumentations (data augmentation)
- Roboflow Universe (datasets in production conditions)
- segment-anything (Meta's SAM)

**Notable visualizations**
- Karpathy's *Multilayer convnet visualization* (CS231n)
- Distill.pub on *Feature Visualization*
- The *DINOv2* attention maps page
- *SAM 2* interactive demo

---

### Pillar II — Digital twins & decisions under uncertainty

**Open questions**
1. **Neural surrogates as digital twins** — When do learned surrogates beat physics-based twins, and when do they leak in dangerous ways?
2. **Sim-to-real for control** — The reward / grounding problem in transferring policies from simulator to deployed hardware.
3. **Uncertainty quantification under model misspecification** — Bayesian methods are the textbook answer; the engineering practice is messier.
4. **Multi-fidelity modeling** — Combining cheap-but-coarse and slow-but-precise simulators to make trade studies tractable.
5. **Causal inference vs. predictive modeling** in twins — Which trade decisions actually need a causal model, and which are fine with regression.

**Reading list — foundational**
- Sutton & Barto, *Reinforcement Learning: An Introduction* (free PDF)
- *Probabilistic Graphical Models* — Koller & Friedman
- *Bayesian Optimization* — Frazier 2018 tutorial

**Reading list — industry / production**
- NVIDIA Omniverse documentation & case studies
- DARPA digital twin programs (public reports)
- NASA RETHi project pages
- Siemens / Hexagon digital-twin engineering blogs

**Reading list — tools & libraries**
- Modelica (open standard)
- Mosaik (smart-grid co-simulation)
- Bayesian inference: NumPyro, Stan
- Multi-fidelity GP: emukit

**Notable visualizations**
- NVIDIA Omniverse demo videos
- NASA RETHi cyber-physical testbed footage
- Distill.pub on *Bayesian Inference*
- *Pareto frontier* interactive visualizations

---

### Pillar III — Personalization & recommender systems

**Open questions**
1. **LLM-as-judge calibration** — Where it agrees with humans, where it doesn't, and how to know which.
2. **Counterfactual eval at scale** — Doubly-robust estimators are the textbook; the production practice is mostly heuristic.
3. **Foundation-model retrieval** — Pretrained embeddings displacing two-tower architectures in some domains.
4. **Long-context personalization** — Putting the user's entire history in the prompt vs. retrieving relevant snippets.
5. **Agent evaluation as a ranking problem** — Recsys-style eval methodology adapted for tool-using agents.

**Reading list — foundational**
- Aggarwal, *Recommender Systems: The Textbook*
- *Off-Policy Evaluation* tutorial (Joachims)
- *RAG vs. fine-tuning* literature — TBD curation

**Reading list — industry / production**
- Eugene Yan's writing — specifically the *applied-ml* and *evals* sequences
- Netflix Tech Blog — Page Simulator (already linked)
- Etsy engineering — search & ranking
- Pinterest engineering — embedding-based retrieval
- Spotify research / engineering — embedding-spaces work
- Hamel Husain — LLM evaluation
- DeepLearning.AI / Coursera *Recommender Systems* specialization

**Reading list — tools & libraries**
- Implicit (matrix-factorization, fast)
- Cornac / RecBole (research libraries)
- HNSW (hnswlib), Faiss, ScaNN (ANN serving)
- LiteLLM / Promptfoo / Inspect (eval scaffolds)

**Notable visualizations**
- *Two-tower retrieval* explainer pages
- Netflix Tech Blog *Page Simulator* figures
- Spotify *embedding-space* visualizations
- Pinterest *vector retrieval* engineering diagrams

---

## Visual treatment

For the *Notable visualizations* section, three options:

**A. Thumbnail screenshots** (most engaging, more setup)
- Take a clean screenshot of each linked page
- Save to `public/figures/refs/<source>-<topic>.jpg`, ~480×300, ~50KB each
- Display in a 3-up grid

**B. Brand-mark cards** (lighter, no asset management)
- BrandMark + title + source + 1-line tease
- Visual texture from the brand mark, no thumbnails
- Easier to maintain

**C. Hybrid** (my pick)
- Thumbnails for 1–2 anchor visualizations per pillar
- Brand-mark cards for the rest

Screenshot legality: small reference thumbnails with prominent attribution + outbound link are standard practice (Wikipedia, Hacker News, every link-aggregator on the web). Doing it cleanly with attribution + non-commercial intent + small thumbnail size is fine.

---

## Implementation phases

**Phase A — components** (0.5 day)
1. Create `<OpenQuestions>` component
2. Create `<ReadingList>` component (categorized; uses `<BrandMark>`)
3. Create `<NotableVisualizations>` component
4. Wire all three into a generic `<FieldGuide>` that pillar pages render after their Examples section

**Phase B — content drafts** (1–2 days, mostly writing)
1. Write Open Questions for each pillar (you review)
2. Curate Reading Lists (start from drafts above; you add/remove)
3. Curate Notable Visualizations (5 per pillar)

**Phase C — visual capture** (0.5 day)
4. Screenshot the visualizations
5. Optimize to ~480×300 ~50KB each
6. Drop into `public/figures/refs/`

**Phase D — copy refinement + ship** (0.5 day)
7. Tighten the WHY-line on each link (most important; one-sentence pitch each)
8. Ensure the open-questions copy reads like *yours*, not Wikipedia
9. Build, push, verify

**Total: ~3 working days**, mostly content writing. The components are small.

---

## Maintenance plan

The whole point is for this to stay fresh. Two patterns to make that easy:

1. **Each section's content lives in `content/<pillar>/field-guide.ts`** — typed objects for OpenQuestions / ReadingList / NotableVisualizations. Editing one of these doesn't touch React code.
2. **Add a `lastReviewed` date field per pillar field-guide**, displayed quietly. *"Last reviewed: May 2026"* under the section. Forces a quarterly review and signals freshness to readers.

---

## Open decisions to lock before I start

- [ ] **A. Section names** — I'm using "Open questions in this lane" / "Reading list" / "Notable visualizations". OK or change? Alt names: "What I'm watching" · "Reading" · "Visualizations worth your time"
- [ ] **B. Visual treatment** — Hybrid (my pick) vs. brand-marks-only vs. all-screenshots
- [ ] **C. Curation depth** — Start with my v1 drafts above (you edit) vs. you provide your own initial picks
- [ ] **D. `lastReviewed` field** — Yes (recommended) or skip
- [ ] **E. Screenshot capture** — I generate them locally (faster, you review) vs. you provide them
- [ ] **F. Should the same content also live at a `/library` or `/reading` route?** — Cross-pillar landing for visitors who want the curated reading independent of pillar context. Probably yes for SEO and shareability — but adds a route.

## Ready to start when

You answer A and B, and tell me whether to proceed from my v1 drafts (C). Everything else has a sensible default.
