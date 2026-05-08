# Positioning — Ali Lenjani

Working doc for shaping how the site presents you. Not deployed.

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
