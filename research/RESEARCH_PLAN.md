# Research plan — content lift for the three pillars

Goal: collect best-in-class resources before writing curated content. Three audience lenses for each pillar:

- **Business / industrial** — what executives, hiring managers, analysts are reading
- **Engineering / production** — what teams shipping the work are actually using
- **Scientific / research** — what's open at the frontier (papers, conferences, surveys)

For each pillar I'll capture:
- Open questions in the field (what's currently moving)
- Reading list candidates (categorized by audience)
- Notable visualizations / interactive demos
- Tools & libraries
- Recent (2024-2026) noteworthy work

Output goes to `research/pillar-1.md`, `pillar-2.md`, `pillar-3.md`. After collection, I synthesize a final curated set for site implementation.

## Search axes per pillar

### Pillar I — Visual inspection in the wild

Search dimensions:
- "computer vision in production" engineering blogs (Tesla / Waymo / Roboflow / V7)
- "visual inspection" + manufacturing / infrastructure / agriculture
- Foundation models for vision (SAM 2, DINOv3, Florence-2)
- CVPR / ICCV / ECCV recent trends 2025
- Industrial CV market reports
- Open-source detection benchmarks 2025

### Pillar II — Digital twins & decisions under uncertainty

Search dimensions:
- Digital twin vendors (NVIDIA Omniverse, Siemens, Hexagon, Ansys, GE Digital)
- Sim-to-real research (DeepMind, OpenAI, Boston Dynamics)
- Multi-fidelity / Bayesian optimization
- Trade-space / Pareto / portfolio decisions
- DARPA / NASA twin programs
- Cyber-physical systems literature

### Pillar III — Personalization & recommender systems

Search dimensions:
- Engineering blogs (Netflix, Pinterest, Spotify, Etsy, Doordash, Instacart)
- LLM-as-judge research 2025
- Foundation models for retrieval (E5, BGE, etc.)
- Off-policy evaluation / counterfactual sim
- RecSys conference 2025 highlights
- Eugene Yan / Hamel Husain / etc. evergreen practitioner writing
- Vector DB landscape (Pinecone, Weaviate, Qdrant, etc.)

## Method

Per pillar, run 5-8 parallel web searches across the dimensions, then fetch 8-15 top-result URLs for actual content. Capture into per-pillar markdown files with URL + title + source + date + 2-3 sentence summary + audience tag.

## Output format (per pillar)

```markdown
# Pillar [N] research

## Open questions (what's moving 2024-2026)
- ...

## Foundational references
- [Title](URL) · Source, Year · audience-tag
  - 2 sentence why-it-matters

## Industry / production references
- ...

## Tools & libraries
- ...

## Notable visualizations
- ...

## Recent papers (2024-2026)
- ...
```

After all three pillars are researched, I write the final v2 curation list, then implement.
