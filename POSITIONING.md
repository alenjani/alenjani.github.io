# Positioning — Ali Lenjani

Working doc for shaping how the site presents you. Not deployed.

## Tooling installed for the Next.js migration

`.claude/skills/ui-ux-pro-max/` carries the [UI/UX Pro Max](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) skill (auto-invokes on UI/UX work). When we migrate to Next.js / React / shadcn, Claude Code will pull design recommendations from this skill's databases — 161 product types, 67 styles, 161 color palettes, 57 font pairings, 99 UX rules, plus stack-specific guidelines for `react`, `nextjs`, `shadcn`. Generate a tailored design system anytime with:

```bash
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "<query>" --design-system -p "Project Name" [--persist]
```

The `--persist` flag writes a `design-system/MASTER.md` (single source of truth) plus per-page override files under `design-system/pages/` — the migration target should adopt that pattern.

---

## Goal & tone

**Real goal (kept implicit):** generate inbound for consulting, advisory, and expert-network work — a side-hustle income channel — and stay attractive to senior/staff full-time roles.

**Surface goal (what the page looks like):** a senior practitioner's personal site. Quiet authority. Identity-forward, not pitch-forward.

**The strategy in one line:** *The page IS the marketing precisely because it doesn't look like marketing.* Demonstrate depth → buyer concludes "this person is who I need" → buyer reaches out themselves. You never sell; the work and the credibility do.

**Tone:** precise, slightly dry, technical. *"I work on X"* — never *"I'm passionate about X"* or *"I help companies achieve X"*. The dry voice itself signals leverage and seriousness.

**The leverage signal:** a page that *clearly could* be selling but *visibly isn't*. Unspoken message — *"I don't need this to work — but if the right project finds me, sure."* That posture gets premium rates and serious inbound. Pages that look like they're hunting cap you at lower rates regardless of credentials.

### Rules in
- Technique-led pillars with real figures, real papers, real depth
- Proof bar (Stanford / NASA / Purdue·RETHi) — credibility carried silently, no "I'm credentialed" copy
- Email front-and-center as click-to-copy (frictionless reach, no funnel, no "open for hire" copy)

### Rules out
- "Services" / "How I help companies" / "What I offer" sections
- "Book a call" or Calendly buttons in hero
- Testimonials wall, client-logo "trusted by" strip
- Inflated metrics (already scrubbed)
- "Available for hire" badges, banners, or pop-ups
- Hero copy that addresses the buyer — keep it identity-forward
- Anything that smells like a landing-page funnel

---

## The unifying thread (one line for the hero)

> **Production ML for ranking, detection, and simulation-driven decisions under real-world constraints.**

Alt phrasings to try:

- *"ML systems that rank candidates and detect change under noisy data and real operational constraints."*
- *"I build ML systems that decide what gets attention — items, parts, components, design choices — under noisy data and real operational constraints."*

The point: every pillar shares the same DNA — **prioritize / detect / decide under uncertainty**. That's why three apparently unrelated specialties read as one expert.

---

## Pillar 1 — Multimodal detection, classification & change detection

**Tagline:** Deep-learning systems that fuse imagery and other evidence streams to produce reliable detections, classifications, or risk scores — pre/post comparison, anomaly/defect detection, multimodal fusion — built to survive real-world data: occlusion, sensor variance, custom collection pipelines, long-tail corner cases, low-resource settings.

**Why it's expert-level:**
Multiple peer-reviewed papers + real field deployments + custom data-collection pipelines + multimodal fusion across very different domains (built environment, manufacturing, global health). Application-agnostic technique stack.

**Evidence on the site:**
- Multimodal ML for global health (Stanford postdoc) — *fusion across heterogeneous evidence streams in low-resource settings*
- Pre/post-event imagery fusion (Eng Structures '20)
- 360° panorama → rectilinear building extraction (CACAIE '19)
- Information fusion for damage classification
- Indoor visual localization for inspectors
- Inspection triage Pareto (the detection side of it)
- Industrial / plant-floor CV with threshold tuning

**Generalizes naturally to:**
Bridge / pipeline / road inspection · retail-shelf compliance · agriculture · insurance damage assessment · satellite imagery · security · construction progress monitoring · asset condition monitoring · QA on production lines · clinical decision support · multimodal medical imaging.

**Hiring markets:**
Industrial CV vendors · inspection-as-a-service startups · insurance · infrastructure operators · defense / dual-use · geospatial · digital health · multimodal-AI platforms.

**Naming candidates (pick one):**
- [ ] Multimodal detection, classification & change detection ← *current pick*
- [ ] Automated visual inspection & multimodal fusion
- [ ] Production ML for detection & classification under real-world constraints

---

## Pillar 2 — Digital twins & risk-informed decision-making for complex systems

**Tagline:** Multi-objective optimization, trade-space analysis, and digital-twin modeling for complex coupled systems — ranking candidates and architectures when resources are limited, uncertainty is real, and the cost of being wrong matters.

**Why it's expert-level:**
PhD + Stanford + NASA / Purdue postdocs all in this lane. Rare combination of (a) ML/optimization fluency and (b) engineering complex-systems modeling that almost no pure ML person has.

**Evidence on the site:**
- CDCM computational platform for habitat trade studies (ASME '22)
- Pareto inspection triage (Natural Hazards '20)
- Resilience-oriented design with passive/active capacity & recovery curves
- Cyber-physical resilience testing (RETHi)
- Information fusion for state classification (decision-side)

**Generalizes naturally to:**
Capital allocation · A/B-test prioritization · infrastructure investment · claims triage · ML experiment scheduling · supply-chain resilience · industrial digital twins · architectural trade studies.

**Hiring markets:**
Digital-twin / industrial-simulation (Siemens, Ansys, Hexagon, GE, defense, aerospace) · decision-science consulting · infra & energy · OR / portfolio-optimization roles.

**Naming candidates (pick one):**
- [ ] Digital twins & risk-informed decision-making for complex systems ← *current pick*
- [ ] Simulation-driven trade-space analysis & portfolio optimization
- [ ] Complex-system modeling for risk-informed decisions

---

## Pillar 3 — Personalization & ranking systems in production

**Tagline:** Large-scale ranking and retrieval systems and the evaluation discipline that comes with them: offline/online metric alignment, LLM-as-judge, counterfactual simulation, retraining cadence.

**Why it's expert-level:**
The income-priority pillar. Production patterns (two-tower retrieval, ANN/HNSW serving, ONNX, distributed training, LLM-judge eval) are the highest-paying ML market right now. Counterfactual simulator = digital-twin thinking applied to recsys → cross-pillar reinforcement.

**Evidence on the site:**
- Two-tower retrieval, served live (HNSW, ONNX)
- LLM-as-judge for recsys quality gates
- Offline counterfactual simulator
- Industrial CV evaluation patterns also fit here (threshold tuning is a ranking-eval problem in disguise)

**Generalizes naturally to:**
Search · ads · content ranking · agent evaluation · personalization platforms · any ranked-output system that needs offline/online alignment.

**Hiring markets:**
Big-tech recsys / search / ads · personalization-platform startups · LLM-eval and agent-eval companies · ranking-as-a-service.

**Naming candidates (pick one):**
- [ ] Personalization & ranking systems in production ← *current pick*
- [ ] Production ML for ranking & retrieval
- [ ] Recommender systems & ML evaluation

---

## Cross-pillar capabilities (the methods toolbox)

These show up across multiple pillars and are worth listing somewhere on the page (e.g., a "How I work" capabilities strip):

- **Multimodal / multi-stream fusion** — central to pillar 1, also shows up in pillar 2 (state classification from heterogeneous sensor data)
- **Digital-twin / simulation-based evaluation** — pillars 2 & 3 (counterfactual sim is a recsys twin)
- **Multi-objective optimization & Pareto-front analysis** — pillars 1 & 2
- **Custom data-collection pipelines** under field / low-resource constraints — pillar 1
- **Production serving / latency budgets / retraining cadence** — pillar 3
- **Risk-informed prioritization under uncertainty** — pillars 1 & 2

---

## Page-reshape implications

Once pillars are locked, the page restructure looks like:

1. **Hero** — name, headshot, unifying-thread tagline, two CTAs (See work, Contact)
2. **Proof bar** — Stanford / NASA / Purdue·RETHi *(already done)*
3. **Three pillar tiles** (replaces current "Featured" + "What I work on" + split Things/Papers)
   - Each tile: pillar name, 1-line tagline, 1 hero figure, "see work →" link
4. **Per-pillar deep section** (replaces current Things vs Papers split)
   - Pillar intro paragraph
   - Mixed grid of *both* shipped work *and* publications relevant to that pillar
   - Some papers/work appear under multiple pillars if they genuinely span them (e.g., inspection triage Pareto = pillars 1 *and* 2)
5. **About** — short bio with the "from PhD to production ML" arc (no explicit availability line — let the page itself signal)
6. **Contact** — click-to-copy email, plus Scholar / GitHub / LinkedIn footer (no "book a call", no Calendly, no contact form)

The current architecture splits "academic things" from "shipped things" which forces visitors to re-merge them mentally. Grouping by pillar (technique) instead of by source (paper vs product) tells one coherent story.

---

## Open questions to resolve before reshaping

- [ ] Lock the three pillar names (current picks above)
- [ ] Pick the one-line unifying-thread tagline for the hero
- [ ] Decide which pillar leads (order of the three tiles) — recommend Pillar 3 first if income-priority, Pillar 1 first if research-heavy buyers, Pillar 2 first if differentiation-priority
- [ ] Decide whether to keep a tiny "Recent papers" link list at the bottom for academic visitors, or rely entirely on the Scholar link
- [ ] Pick which figures lead each pillar tile (hero image per pillar)
- [ ] Add a "Currently available for" line? (consulting / FT roles / advisory / expert-network calls)

---

## What this is *not*

- Not a CV. Don't list every paper.
- Not a portfolio dump. Pick the strongest 2-3 items per pillar.
- Not application-domain branded. Never lead with "disaster" or "habitats" — those are case studies of the technique, not the technique itself.

---

# Design proposal

What follows is a thinking-out-loud draft of the redesign, before any code changes. The goal is to make the page *embody* the goal/tone/pillars we just locked, without slipping into marketing tropes.

## What's wrong with the current layout

1. **Three "work" surfaces fight each other.** *Featured* (4 cards, mixed) + *Things I've built* (4 cards) + *Papers* (8 cards) = a visitor has to do their own merging across three sections to figure out what you actually do. The current architecture splits *academic* from *commercial* by source, when the right split is *technique* (the three pillars).

2. **No narrative through-line.** Each section reads as a list. Nothing signals *"here's how the pieces add up to one expert."* That's the whole reason we did the pillars exercise.

3. **"What I work on" tag soup.** Twenty-some monospace pills. Generic, no order, no story. Tags don't qualify you — context does.

4. **The current Featured strip isn't featuring anything coherent.** Four cards across three different framings (recsys, evaluation, two papers). It looks like a teaser of everything rather than a deliberate cut.

5. **Hero copy still leans recsys-only.** Eyebrow + lede both treat recsys as the identity, which contradicts the three-pillar repositioning.

6. **Visual asymmetry across pillars.** Pillar 1 and Pillar 2 are figure-rich (we just fixed those). Pillar 3 still uses inline SVG icons. Until that's fixed, Pillar 3 reads as the weakest pillar even though it's the income pillar.

## The shape of the redesign

The core move: **collapse Featured + Things + Papers into a single Work spine, organized by pillar, with each pillar getting equal billing.** Stop splitting by source (academic vs shipped); start grouping by technique (pillars 1, 2, 3).

### Proposed section order

```
1. Top nav            (unchanged)
2. Hero               (rewrite: 3-pillar tagline, keep headshot)
3. Proof bar          (unchanged — already good)
4. Three pillar tiles (replaces "Featured" + tag soup)
5. Pillar 1 deep-dive (mixes shipped work + papers under pillar 1)
6. Pillar 2 deep-dive (mixes shipped work + papers under pillar 2)
7. Pillar 3 deep-dive (mixes shipped work + papers under pillar 3)
8. About              (small rewrite — match new framing)
9. Contact            (unchanged — click-to-copy already done)
```

Top nav anchors update: `Work` → `Work` (now scrolls to pillar tiles). `Papers` link → either drop entirely or repoint to a hidden `#papers-full` list at the very bottom for academic visitors who want a flat publication list with Scholar link. *Open question.*

### Why this beats the current layout

- **Single linear story.** Visitor scrolls hero → proof → pillars → deep-dives → about → contact. No re-merging required.
- **Each pillar gets equal weight.** No one pillar is "the academic part" or "the side gig". All three live at the same hierarchy.
- **Cross-domain evidence becomes the asset.** When Pillar 1's evidence list shows *"Stanford global health · post-event imagery · plant-floor CV"* in a row, the buyer concludes: *"this is a technique, not a domain."* That's exactly the qualifier we want.
- **The depth lives in disclosures.** Each deep-dive uses the existing `<details>` expandable cards; a casual visitor sees pillar headers and 2-3 strongest items, a serious visitor opens cards and reads figures + figcaptions.

## Section-by-section design

### 2. Hero — what to change

Three drafting directions, in increasing dryness:

**Draft A — punchy, eyebrow-led**
```
Eyebrow:  Detection · Digital twins · Personalization
H1:       Ali Lenjani
Lede:     Production ML systems for ranking, detection, and
          simulation-driven decisions — built to survive
          real-world data and real operational constraints.
Cred:     San Francisco Bay Area
CTAs:     See the work →   |   Get in touch
```

**Draft B — professorial, lede-led**
```
Eyebrow:  ML · San Francisco Bay Area
H1:       Ali Lenjani
Lede:     I build production ML systems where ranking, detection,
          and decisions have to work under real-world constraints —
          recommender systems and ranking evaluation at scale,
          multimodal detection and change-detection in vision,
          digital-twin and trade-space modeling for complex systems.
CTAs:     See the work →   |   Get in touch
```

**Draft C — minimal, identity-only**
```
H1:       Ali Lenjani
Lede:     Production ML — ranking, detection, and decisions under
          real-world constraints.
Sub:      Recsys eval · Multimodal vision · Digital twins for
          complex systems · Stanford & NASA/Purdue postdocs
CTAs:     See the work →   |   Get in touch
```

Trade-off: A is most discoverable (pillar names visible in eyebrow), B is most credible (a paragraph reads as a senior person speaking, not a brand), C is most spare (matches the "quiet authority" tone furthest).

My recommendation: **B**. It reads like a senior practitioner introducing themselves; it doesn't try to be a slogan. Scrubbing power-words ("expert", "leading", "passionate") keeps it on-tone.

### 3. Proof bar — keep as is

Already does its job. Maybe trim sub-labels to single words later if the row feels busy on mobile. *Open question, low priority.*

### 4. Three pillar tiles

Replaces the current `Featured` + the `What I work on` tag section. Each tile is a clickable card that scrolls down to the pillar's deep-dive section.

Each tile needs:

- **One representative figure** (the visual hook — must be distinctive at thumbnail size)
- **Pillar name** (locked from POSITIONING.md)
- **One-line description** (technique-led; what is it, not who is it for)
- **A row of 3–4 sub-capability tags** (e.g., for Pillar 1: *fusion · change detection · custom data collection · low-resource settings*)

Suggested figure picks:

- **Pillar 1**: `fusion-pipeline.jpg` (the dual-stream CNN) — most technically dense, signals "I do real architecture, not toy demos"
- **Pillar 2**: `habitat-architecture.png` (color-coded CDCM diagram) — already chosen for Featured strip, works well at thumbnail size
- **Pillar 3**: needs creation. Best option = a custom inline SVG showing two-tower → HNSW similar to the one already in the recsys deep-dive. Alternative = a small offline-online correlation chart (mock).

Tile order — *open question*. Three orderings, three different selling stories:

| Order | First impression | Best for |
|---|---|---|
| 3 → 1 → 2 (Personalization · Detection · Twins) | "Production ML lead" | Income / FT recsys roles |
| 1 → 2 → 3 (Detection · Twins · Personalization) | "Methods generalist with depth" | Consulting / advisory |
| 2 → 1 → 3 (Twins · Detection · Personalization) | "Decision-science engineer" | Differentiated, fewer competitors |

My recommendation: **1 → 2 → 3**. Reasons:
- It maps to the volume of evidence you have (Pillar 1 has the most papers + Stanford + NASA work)
- It builds a credibility ramp — vision → simulation → ranking — that mirrors your career arc
- It puts the income-pillar last, which is on-brand for "indirect not desperate" — buyers who care about recsys will scroll there themselves
- It avoids the trap of leading with the domain (recsys) where competition is most crowded

### 5–7. Pillar deep-dive sections — pattern

Each pillar's deep-dive is laid out the same way:

```
[Pillar name]                       [Sub: 1-line technique description]

[Pillar narrative — 2-3 sentences. What ties these projects together
 as one technique stack. End with the cross-domain breadth statement.]

[Card grid — 2-3 cards by default, all expandable]
  - Each card: 96px thumb, role tag (FIRST AUTHOR / CO-AUTHOR / SHIPPED),
    title, teaser, expandable body with full figures + figcaptions
  - Cards mix papers and shipped work without visual distinction —
    the role tag carries the source signal, not the layout

[Optional: "More from this pillar →" disclosure with the rest]
```

The existing `<details>` card pattern already supports this. We just regroup the cards under pillar headers.

#### Card-to-pillar assignment (proposed)

**Pillar 1 — Multimodal detection, classification & change detection**
- *Pre/post-event imagery fusion* (Eng Structures '20)  ← lead
- *Stanford multimodal global health* (postdoc — needs a card written)
- *Industrial / plant-floor CV with threshold tuning* (shipped)
- *More:* panorama building extraction, info fusion damage classification, indoor localization

**Pillar 2 — Digital twins & risk-informed decision-making for complex systems**
- *CDCM computational platform* (ASME '22)  ← lead
- *Pareto inspection triage* (Natural Hazards '20)
- *Cyber-physical resilience testing* (RETHi)
- *More:* resilience-oriented design

**Pillar 3 — Personalization & ranking systems in production**
- *Two-tower retrieval, served live*  ← lead
- *LLM-as-judge for recsys quality gates*
- *Counterfactual offline simulator*
- *More:* (none in current site — eventually a small "hard-won lessons" type post)

This produces a clean **3 + 3 + 3** layout per pillar (lead + 2 supporting + the rest tucked behind a disclosure), instead of the current 4 + 8 split.

### 8. About — slight rewrite

Current opening: *"Mechanical engineer who took a left turn into ML and never went back."*  Keep the voice (it's good — dry, self-effacing, not a brag), but adjust the pillar listing to match the new framing.

Current closing: *"Lately the work is mostly recommender systems and the evaluation problem around them..."* — that's recsys-only. Either rotate it, or replace with something that nods at all three.

Don't add the explicit availability line (per locked decision).

### 9. Contact — already done

Click-to-copy email + footer trio. Nothing to change.

## What new content this requires

- **One paragraph** for each pillar's narrative intro (3 paragraphs)
- **One Pillar-1 card** for the Stanford multimodal global-health work (currently mentioned only in the about section — needs a real card with figcaption-level detail of what was built and on what data)
- **Three sentence updates** to existing card teasers if they're currently framed application-first (e.g., "An LLM judge for the question offline metrics can't answer" is fine; the inspection-triage paper teaser may need adjustment to read technique-first)
- **One Pillar-3 hero figure** — either a custom SVG or a clean two-tower + HNSW diagram extracted from the existing recsys card

The Stanford card is the only piece that needs new prose from you. The rest is reshuffling and rewriting on existing material.

## Phased rollout — proposed

Splitting the redesign across phases keeps the live site coherent at every step (and lets us pause if something doesn't land).

**Phase 1 — Hero rewrite + pillar tiles + section reorganization**
- Rewrite hero copy (Draft B or C, your call)
- Build 3 pillar tiles, replace Featured + tag-soup sections with them
- Regroup existing card grids into pillar deep-dive sections
- Update topnav anchors

Outcome: site reads as one coherent three-pillar story instead of fragmented academic/commercial split. Most of the lift happens here.

**Phase 2 — Pillar 3 visual upgrade**
- Build the Pillar-3 hero figure (custom SVG or extracted diagram)
- Tighten the recsys / LLM-judge / counterfactual cards' copy if needed

Outcome: the income-pillar visually matches the depth of pillars 1 and 2.

**Phase 3 — Stanford Pillar-1 card + pillar narratives**
- Write the Stanford global-health card
- Write the 3 pillar-narrative intros (2-3 sentences each)
- Clean up About paragraph 2

Outcome: Pillar 1 evidence becomes truly cross-domain; the page reads top-to-bottom with no missing pieces.

**Phase 4 — Polish**
- Mobile review, dark-mode review (if applicable), performance audit
- Consider folding sources/PDFs into `figures/_source/` so deployed site is leaner
- Final pass on tone consistency

## Decisions locked (Phase 1 ships against these)

- **Pillar names** — *I. Multimodal detection & change detection · II. Digital twins & risk-informed decisions for complex systems · III. Personalization & ranking in production*
- **Hero** — single condensed paragraph that names all three pillars; eyebrow simplified to `Senior ML · San Francisco Bay Area`
- **Pillar order** — I → II → III. Builds a credibility ramp by evidence volume; puts income pillar last so it reads as punchline rather than pitch (on-brand with "indirect not desperate")
- **Topnav** — `Work · About · Contact` (drop Papers; it's now folded into pillar deep-dives, with a Scholar link in footer for academic visitors)
- **Architecture** — replace four separate work surfaces (`Featured` + `What I work on` + `Things` + `Papers`) with one Work spine: small TOC strip → three stacked pillar sections. Each pillar = lead card + 2 supporting cards visible, plus a `<details>` disclosure for the rest.
- **Pillar 3 visuals** — keep existing detailed two-tower SVG inside its deep-dive card; pillar TOC strip uses numerals (I/II/III) + titles, no thumbnails (they'd be cosmetic at that scale)
- **About** — keep paragraph 1 voice; rewrite paragraph 2 to reference all three pillars instead of recsys-only
- **Meta tags** (title, description, og) — rewritten to reflect three-pillar positioning, drops the recsys-only framing

## What I still need from you (genuinely personal info — can't infer)

These are blockers for Phase 3, not Phase 1. Phase 1 ships with placeholders / existing-content where these are missing. Send when convenient:

1. **Stanford multimodal global-health work** — what was actually built? 3–5 sentences covering: what modalities (imaging? clinical? sensor? text?), what was the dataset / cohort (low-resource region? specific condition?), what was the output (classification, risk score, triage rank?), is there a paper or preprint I can link, is there a figure I can use. This becomes a real Pillar-1 card.

2. **Industrial / plant-floor CV** — currently a card on the page but anonymous. Was this at a specific company (named? un-named under NDA?). What was the part / line / object? What shipped (a model? a service? both?). Any figures or numbers that are public-shareable? If under NDA, what *generic* framing is allowed.

3. **Current employer / role** — site has no current affiliation. Is there one? If yes, do you want it visible (e.g., proof bar gets a `Currently` row) or kept off entirely.

4. **Recsys cards (two-tower / LLM-judge / counterfactual sim)** — are these from a current job? A past job? A side project? Public or NDA? The cards currently read as portfolio-style; pinning them to a context (even if only "previously at X") would strengthen them.

5. **Postdoc dates / PhD year** — for the bio paragraph. Approximate is fine.

## Card-to-pillar assignment (locked for Phase 1)

**Pillar I — Multimodal detection & change detection** (5 cards)
- *Lead:* Pre/post-event imagery fusion (Eng Structures '20)
- *Visible:* Panorama building extraction (CACAIE '19) · Plant-floor industrial CV (shipped)
- *More:* Information fusion for damage state (Eng Structures '22) · Indoor localization (MDPI Sensors '20)
- *Phase 3 add:* Stanford multimodal global-health card (when content arrives)

**Pillar II — Digital twins & risk-informed decisions** (4 cards)
- *Lead:* CDCM computational platform (ASME IDETC '22)
- *Visible:* Pareto inspection triage (Natural Hazards '20) · Cyber-physical testing (ASCE Earth & Space '21)
- *More:* Resilience-oriented design (AIAA '19)

**Pillar III — Personalization & ranking in production** (3 cards)
- *Lead:* Two-tower retrieval, served live
- *Visible:* LLM-as-judge for recsys quality gates · Counterfactual offline simulator
- *More:* (none yet — eventually a "hard-won lessons" type card from current production work)
