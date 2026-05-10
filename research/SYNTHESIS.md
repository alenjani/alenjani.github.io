# Curation v2 — final draft for review before implementation

Distilled from `research/pillar-1.md`, `pillar-2.md`, `pillar-3.md`. This is what would actually go on the site.

For each pillar:
- **Open questions** — prose paragraph, 4-5 sentences. Written in your voice (dry, opinionated, technical). What's currently moving in the field.
- **Reading list** — categorized. Each item: brand mark + title + source/year + a one-line *why-it-matters*.
- **Notable visualizations** — 4-6 entries. Brand mark + 1-line tease + outbound link.

Conservative approach: when in doubt, fewer items + sharper why-lines. Quality > quantity.

---

# PILLAR I — Visual inspection in the wild

## Open questions in this lane

> **What's currently moving:** Foundation models are starting to displace bespoke detection pipelines in industrial inspection — SAM 2, DINOv3, and Florence-2 are showing up in production deployments where data was historically the blocker. Roboflow's 2025 trends report finds **43% of enterprise CV models train on under 1,000 images**, with most accepting ~80% accuracy in deployment as a deliberate trade-off. The CVPR 2025 anomaly-detection track shifted heavily toward zero-shot reasoning with multimodal LLMs (Anomaly-OneVision) and synthetic-defect generation via diffusion (DefectFill) — both targeting the rare-defect data problem that's been the historical blocker. End-to-end perception is the other inflection: late 2025 saw Waymo move from per-task heads to a single foundation model (EMMA), mirroring the trajectory of Tesla's HydraNet. The open question for production teams is no longer "which architecture" but how much of the stack is replaceable by a single foundation model with a calibration layer on top.

## Reading list

### Foundational
- **Stanford CS231n — Deep Learning for Computer Vision** · Stanford, Spring 2025
  *— The canonical entry point. Free notes, lectures on YouTube. Fei-Fei Li / Justin Johnson / Serena Yeung.*
- **Distill.pub — Feature Visualization** · Olah et al., 2017
  *— Still the cleanest explainer of what convnets actually see; the mental model that grounds everything downstream.*
- **A survey of deep learning for industrial visual anomaly detection** · Springer AI Review, 2025
  *— Comprehensive lit review; the document you'd send a new hire onboarding into AD.*
- **The Many Faces of Robustness** · Hendrycks et al., ICCV 2021
  *— Foundational analysis of why image classifiers fail under distribution shift. The "in the wild" problem named.*
- **DINOv3** · Meta AI, arXiv 2508.10104
  *— Self-supervised vision foundation model designed for label-scarce domains; explicitly targets industrial inspection.*

### Industry / production
- **Roboflow 2025 Vision AI Trends Report** · Roboflow, 2025
  *— Best public data on what enterprise CV deployment actually looks like; demolishes the "you need millions of labels" myth.*
- **Voxel51 — Computer Vision in Manufacturing: Real-World Lessons** · Voxel51 / FiftyOne blog
  *— Practitioner deep-dive on data-curation, edge-case mining, human-in-the-loop design from teams that ship.*
- **Tesla AI Day talks (Karpathy era + post-Karpathy)** · Tesla, ongoing
  *— HydraNet architecture, the "neural-net replaces 300K LoC" narrative; canonical reference for multi-task perception at scale.*
- **Waymo on EMMA / VLM perception** · Waymo, late 2025
  *— Public talks on the shift to end-to-end foundation-model-based perception; complements the Tesla writeup.*

### Tools & libraries
- **Ultralytics YOLO (YOLO11+)** — defacto detection baseline
- **segment-anything 2** (Meta) — promptable segmentation, video-aware
- **Grounded-SAM-2** (IDEA-Research) — DINO + Florence-2 + SAM 2 pipeline
- **FiftyOne** (Voxel51) — open-source dataset visualization & curation
- **Albumentations** — image augmentation
- **Roboflow Universe** — datasets in production conditions

### Awesome lists
- **awesome-industrial-anomaly-detection** (M-3LAB) — papers + datasets, regularly updated

## Notable visualizations

| Source | What you'll see | Link |
|---|---|---|
| **Meta — SAM 2 demo** | Interactive promptable segmentation across image *and* video — point, click, watch the mask track. | segment-anything-2.metademolab.com |
| **Distill.pub — Feature Visualization** | Interactive convnet activations; what the network is actually looking at, layer by layer. | distill.pub/2017/feature-visualization |
| **DINOv2 / v3 attention maps** | Self-supervised attention overlays — emergent object segmentation without any labels. | dinov2.metademolab.com |
| **Karpathy's CS231n convnet visualizations** | Multi-layer activation heatmaps from the canonical CV course. | cs231n.github.io |
| **Tesla AI Day perception visualization** | Multi-task HydraNet outputs in real time; depth, lanes, traffic, occupancy in one frame. | YouTube — Tesla AI Day |

---

# PILLAR II — Digital twins & decisions under uncertainty

## Open questions in this lane

> **What's currently moving:** The digital-twin market is in a consolidation phase that mirrors what happened to CAD twenty years ago — Synopsys / Ansys ($35B), Siemens / Altair ($10B), Cadence / Hexagon ($3.16B) all closed in 2025, and OpenUSD is becoming the interchange substrate the way glTF did for graphics. NVIDIA's Blackwell + Omniverse stack is letting CAE software run *orders of magnitude* faster, taking real-time twins from research demo into engineering practice. On the methods side, multi-fidelity Bayesian optimization is finally shipping in production trade studies, and DARPA's CyPhER Forge program is the public frontier for real-time twins with statistically-guaranteed AI test agents. The other inflection: sim-to-real for robotics learned policies — Boston Dynamics' Atlas now runs **150M+ simulation rollouts per maneuver** with zero-shot transfer to the physical robot, suggesting the simulator-fidelity ceiling has moved up sharply.

## Reading list

### Foundational
- **Sutton & Barto — Reinforcement Learning: An Introduction** · 2nd ed., free PDF
  *— Canonical RL textbook; the language any sim-to-real conversation eventually retreats to.*
- **Probabilistic Graphical Models** · Koller & Friedman, MIT Press
  *— The reference for Bayesian-network modeling that underlies most coupled-system digital twins.*
- **Survey of Multifidelity Methods in UQ, Inference, and Optimization** · Peherstorfer et al., SIAM Review
  *— The lit review you'd send a new hire onboarding into multi-fidelity / trade-space methods.*
- **Sim-to-Real Transfer in Deep RL for Robotics: a Survey** · Zhao & Queralta, arXiv 2009.13303
  *— Evergreen survey on closing the simulator-to-hardware gap; cited by every robotics paper since.*
- **NASA — Digital Twin Paradigm for Future NASA and U.S. Air Force Vehicles** · Glaessgen & Stargel, 2012
  *— The early canonical NASA framing of digital twins; still useful as terminological anchor.*

### Industry / production
- **NVIDIA Omniverse case studies** · BMW, Foxconn, TSMC, Pegatron
  *— The clearest public look at what industrial-scale digital twins ship like; Pegatron reports 67% defect-rate reduction post-deployment.*
- **Siemens — Digital Twin Composer launch** · CES 2026
  *— Siemens' unified design + simulation + operations product; the largest digital-twin vendor's read on where the platform goes next.*
- **DARPA CyPhER Forge program page** · DARPA, ongoing 2024-2026
  *— The public frontier for real-time twins with statistically-guaranteed AI test agents; the program plus its annual reports.*
- **Boston Dynamics + RAI Institute — Atlas RL partnership** · Feb 2025
  *— The new sim-to-real bar: 150M sim runs per maneuver, zero-shot deployment. Public talks + ICRA 2025 paper.*

### Tools & libraries
- **NVIDIA Omniverse + Isaac Sim** — physical-AI simulation platform
- **Modelica** — open-standard physical-systems modeling language
- **OpenUSD** (Pixar) — increasingly the industrial-asset interchange standard
- **NumPyro / PyMC / Stan** — Bayesian inference
- **GPyTorch / BoTorch** (Meta) — Gaussian processes + Bayesian optimization
- **Emukit** (Amazon) — multi-fidelity Gaussian processes
- **Mosaik** — co-simulation framework, esp. for power systems

### Awesome lists
- *No single dominant curated list yet. Vendor-specific docs (Omniverse, Modelica, BoTorch) remain the strongest entry points.*

## Notable visualizations

| Source | What you'll see | Link |
|---|---|---|
| **NVIDIA Omniverse — BMW factory twin** | Photorealistic real-time factory digital twin with AI-driven robot interaction. | nvidia.com/case-studies — BMW |
| **Boston Dynamics Atlas RL** | Humanoid agility (jogging, crawling, breakdancing) learned in sim, deployed zero-shot. | YouTube — Boston Dynamics Atlas |
| **Foxconn FODT** | Entire production lines virtually assembled in OpenUSD, replicated across global sites. | nvidia.com/case-studies — Foxconn |
| **Distill.pub — Bayesian methods** | Interactive explainers for prior, posterior, MCMC — the math behind UQ in twins. | distill.pub |
| **Pareto frontier interactive plots** | Trade-space visualization: dominant vs. dominated solutions across multiple objectives. | various, e.g. botorch.org tutorials |

---

# PILLAR III — Personalization & recommender systems

## Open questions in this lane

> **What's currently moving:** RecSys 2025 (Prague) made it official: LLMs and recommender systems are converging fast. The 2025 RecSys keynotes named **Relational Foundation Models** as the next frontier (Jure Leskovec — pre-trained models that do in-context learning over multi-table heterogeneous data, replacing per-task model retraining). ByteDance shipped **LONGER**, an end-to-end transformer that reads up to 10K tokens of user history directly. DoorDash showed LLMs as cross-vertical affinity features on production ranking. On the evaluation side, the field is moving away from "good vibes" LLM-as-judge: OpenAI's HealthBench introduced **instance-specific rubrics** with 260 physicians authoring 48,562 unique criteria, and the *Judging the Judges* benchmark (mid-2025) found style bias dominates LLM judges (0.76–0.92 correlation), much more than position bias. The practitioner counterpoint — Eugene Yan's *"An LLM-as-Judge Won't Save The Product"* — remains the sharpest reality-check. The vector-DB market is also in shake-out: Qdrant winning QPS-per-dollar at scale, Pinecone winning ease-of-use until you cross ~50M vectors and the bill explodes.

## Reading list

### Foundational
- **A Comprehensive Survey on Retrieval Methods in Recommender Systems** · ACM, December 2025
  *— The new lit-review covering classical, embedding, and generative retrieval.*
- **Aggarwal — Recommender Systems: The Textbook** · Springer, 2nd ed.
  *— Still the canonical textbook; your reference when the recsys conversation gets formal.*
- **Off-Policy Evaluation tutorial** · Joachims et al.
  *— The methodology behind doubly-robust counterfactual eval; what to read before claiming any A/B-test substitute.*
- **Awesome-LLM-for-RecSys** (CHIANGEL) — curated paper list, regularly updated.

### Industry / production — practitioners
- **Eugene Yan — An LLM-as-Judge Won't Save The Product** · April 2025
  *— The practitioner counterpoint to LLM-judge hype: process > tooling. The single best post on the topic.*
- **Eugene Yan — Improving RecSys & Search with LLM techniques** · AI Engineer 2025 keynote
  *— The clearest distillation of the recsys-LLM convergence so far.*
- **Hamel Husain — A Field Guide to Rapidly Improving AI Products** · March 2025
  *— Distilled from 30+ production implementations; the playbook for evals + error analysis as iteration drivers.*
- **Hamel Husain — LLM Evals: Everything You Need to Know** · updated July 2025
  *— Living FAQ on eval design; what the canonical reference looks like in 2025.*
- **Janu Verma — RecSys 2025 Recap** · Substack
  *— The conference digest if you didn't go.*

### Industry / production — engineering blogs
- **Netflix Tech Blog — Page Simulator for Better Offline Metrics** *(already cited on /recsys)*
- **DoorDash — Mind the Gap: LLMs Bridge Behavioral Silos** · RecSys 2025
  *— LLM-driven cross-vertical affinity features in production ranking.*
- **Spotify Engineering** — embedding-based retrieval at scale
- **Etsy — Code as Craft** — search ranking, ML observability
- **Pinterest Engineering** — GNN-based recommendation
- **Google Cloud — Implement Two-Tower Retrieval at Large Scale** — canonical infra writeup

### Tools & libraries
- **Vector DBs**: Qdrant · Weaviate · Pinecone · pgvector · Faiss · ScaNN · hnswlib
- **Eval frameworks**: LangSmith · Promptfoo · Inspect (UK AISI) · DeepEval · Ragas
- **Embedding models**: E5 · BGE · GTE · jina-embeddings (open-weight, displacing custom two-tower in many use cases)
- **Recsys research**: RecBole · Cornac · Implicit

### Awesome lists
- [CHIANGEL/Awesome-LLM-for-RecSys](https://github.com/CHIANGEL/Awesome-LLM-for-RecSys)
- [creyesp/Awesome-recsys](https://github.com/creyesp/Awesome-recsys)
- [alopatenko/LLMEvaluation](https://alopatenko.github.io/LLMEvaluation/)

## Notable visualizations

| Source | What you'll see | Link |
|---|---|---|
| **Netflix Tech Blog — Page Simulator architecture** | The reference industrial-scale offline-eval system; time-travel data + simulated pages compared to actual. | netflixtechblog.com — Page Simulator |
| **Google — Two-Tower retrieval architecture** | The canonical diagram of two-tower retrieval; user/item towers + ANN index. | cloud.google.com architecture center |
| **Spotify — embedding-space visualizations** | t-SNE projections of music embeddings; genre clusters emerging from interaction signal alone. | research.atspotify.com |
| **Pinterest GNN architecture** | How graph structure propagates user/item features for board-level recommendation. | medium.com/pinterest-engineering |
| **HNSW visualization** (Andrew Polar / various) | Hierarchical navigable small-world graphs; how ANN actually works under the hood. | github.com/nmslib/hnswlib + tutorials |

---

## Implementation note

Each pillar gets:
- 1 prose paragraph for *Open questions* (~120-180 words; written above)
- ~14 reading-list items split across Foundational / Industry / Tools / Awesome
- ~5 notable-visualization cards

Total content addition per pillar: roughly **400-600 words** + ~20 outbound-link entries. With brand marks via logo.dev, the visual texture is significant without being heavy. Pillar pages stay focused (header → overview → lists → topics → examples → field guide → nav).

Add a quiet **"Last reviewed: May 2026"** date stamp under the Open Questions paragraph per pillar — forces a quarterly review and signals freshness.

## Open decisions

After your review, lock these before I implement:

- [ ] **Open-questions copy** — keep as one-paragraph prose (my pick) vs. split into 5 numbered bullets
- [ ] **Reading-list categorization** — keep Foundational / Industry / Tools / Awesome (4 buckets) vs. simplify to 2 (Foundational+Industry vs. Tools)
- [ ] **Visualization treatment** — table format (above) vs. card grid with thumbnails. Tables ship fast; thumbnails take 1-2 hours of screenshot work
- [ ] **Anything to cut or add** — items I picked vs. ones you'd swap in/out

Once you sign off, I'll implement: build `<FieldGuide>` component + per-pillar content files, add brand-marks, push.
