# Pillar III research — Personalization & recommender systems

Last collected: May 2026.

## Open questions / what's moving (2024-2026)

1. **Convergence of LLMs and recsys.** RecSys 2025 (Prague) keynote framing: *"LLMs and recommender systems are converging, signaling a new era for personalization."* Hybrid fine-tuning + RAG strategies, generative retrieval (GenSAR), heterogeneous user modeling with LLMs. The two fields stop being separate. ([Taboola — RecSys 2025 recap](https://www.taboola.com/engineering/recsys-2025-ai-recommendation-trends/))

2. **Relational Foundation Models (RFMs).** Jure Leskovec's RecSys 2025 keynote — pre-trained models that unlock in-context learning over relational, multi-table, heterogeneous graph-structured data. Predicts engagement / churn / fraud / recommendations from relational data without retraining per task. The "GPT moment" for tabular data.

3. **Ultra-long sequence modeling.** ByteDance's **LONGER** — end-to-end transformer reads up to **10K tokens** of user history directly using global tokens + token compression. Long-context personalization replacing RNN/sequential summary tricks. ([RecSys 2025 papers](https://recsys.acm.org/recsys25/accepted-contributions/))

4. **LLM-as-judge calibration & bias.** *"Judging the Judges"* (April-June 2025 experiments, 5 judges × 4 providers × 4 bias types) finds **style bias is dominant (0.76–0.92 correlation)**, far exceeding position bias. **Conciseness preference** universal. New methodology: instance-specific rubrics. ([Empirical Study of LLM-as-a-Judge — arXiv 2506.13639](https://arxiv.org/html/2506.13639v1), [Judging the Judges — arXiv 2604.23178](https://arxiv.org/html/2604.23178))

5. **OpenAI HealthBench → eval as measurement science.** May 2025 release: **260 physicians × 48,562 unique criteria × thousands of medical conversations.** Each conversation gets its own *bespoke rubric* with 10–40 criteria. Move from generic scoring → instance-specific rubrics. The methodology is generalizable to *any* high-stakes domain.

6. **Generative retrieval & semantic IDs.** Encoding items as semantic ID tokens lets LLMs *generate* recommendations instead of retrieving them. Eugene Yan's writeup on the LLM-RecSys hybrid for steerable recs is the practitioner deep-dive.

7. **Vector DB market shake-out.** Qdrant winning QPS-per-dollar at scale (2-5x Weaviate at equivalent recall); Pinecone winning ease-of-use but expensive past 50-100M vectors. Migration pattern: Pinecone → self-hosted Qdrant/Weaviate at scale. Hybrid search (BM25 + vector) becoming default.

## Reading list candidates

### Foundational / academic

- **A Comprehensive Survey on Retrieval Methods in Recommender Systems** — ACM, December 2025. The new lit-review. ([ACM DL](https://dl.acm.org/doi/pdf/10.1145/3771925))
- **Aggarwal — Recommender Systems: The Textbook** (Springer, 2nd ed). Still the canonical textbook.
- **Off-Policy Evaluation tutorial** — Joachims et al. The methodology behind doubly-robust counterfactual eval.
- **Awesome-LLM-for-RecSys** — curated paper list, regularly updated. ([CHIANGEL/Awesome-LLM-for-RecSys](https://github.com/CHIANGEL/Awesome-LLM-for-RecSys))
- **Awesome-recsys** — broader curated list. ([creyesp/Awesome-recsys](https://github.com/creyesp/Awesome-recsys))

### Industry / production — practitioners worth following

- **Eugene Yan** ([eugeneyan.com](https://eugeneyan.com/)) — the most rigorous practitioner writing on recsys + LLM evaluation. **11,800+ newsletter subscribers.** Notable 2024-25 posts:
  - *Improving RecSys & Search with LLM techniques* (AI Engineer 2025 keynote)
  - *An LLM-as-Judge Won't Save The Product* (April 2025)
  - *Improving Recommendation Systems & Search in the Age of LLMs*
  - *Finetuning an LLM-RecSys Hybrid for Steerable Recs with Semantic IDs*
  - *Evaluating the Effectiveness of LLM-Evaluators* (Aug 2024)
- **Hamel Husain** ([hamel.dev](https://hamel.dev/)) — LLM evals, error analysis, production rubrics. Key posts:
  - *A Field Guide to Rapidly Improving AI Products* (March 2025) — distilled from 30+ production implementations
  - *LLM Evals: Everything You Need to Know* (FAQ, updated July 2025)
  - *Your AI Product Needs Evals*
  - *Using LLM-as-a-Judge For Evaluation: A Complete Guide*
  - O'Reilly book *Evals for AI Engineers* (co-authored, 2025)
  - Maven course (2,000+ engineers, including teams at OpenAI/Anthropic)
- **Janu Verma — RecSys 2025 Recap** ([Substack](https://januverma.substack.com/p/recsys-2025-recap)) — solid digest of the conference for those who didn't attend.

### Industry / production — engineering blogs

- **Netflix Tech Blog** — *Page Simulator for Better Offline Metrics* (already cited in our /recsys page).
- **Spotify Engineering** ([engineering.atspotify.com](https://engineering.atspotify.com/)) — and **Research** ([research.atspotify.com](https://research.atspotify.com/blog)). Embeddings, content personalization, experimentation.
- **Etsy "Code as Craft"** — search ranking, ML observability, personalized recommendations.
- **DoorDash Engineering** ([careersatdoordash.com/blog](https://careersatdoordash.com/blog/)) — 60+ ML posts. RecSys 2025 paper *"Mind the Gap: Using LLMs to Bridge Behavioral Silos in Multi-Vertical Recommendations"* worth citing.
- **Pinterest Engineering** — GNN recommendations, embedding-based retrieval.
- **Snap Engineering** — *Embedding-Based Retrieval with Two-Tower Models in Spotlight* (Snap's product). ([eng.snap.com](https://eng.snap.com/embedding-based-retrieval))
- **Google Cloud — Implement Two-Tower Retrieval for Large-Scale Candidate Generation** — the canonical infra writeup.

### Tools & libraries

- **Vector DBs**: Qdrant (highest QPS, payload-aware filtering) · Weaviate (hybrid + multi-tenancy) · Pinecone (managed, easy) · pgvector (Postgres extension, cheap) · ScaNN / Faiss / hnswlib (libraries)
- **Eval frameworks**: LangSmith · Promptfoo · Inspect (UK AISI) · LiteLLM · DeepEval · Ragas (RAG-specific)
- **Recsys research libraries**: RecBole · Cornac · Implicit (matrix factorization, fast)
- **Embedding models**: E5, BGE, GTE, jina-embeddings — open-weight foundation embeddings displacing custom-trained two-tower in many use cases

### Conferences / venues

- **ACM RecSys** — September annual. The conference for recsys research.
- **KDD / SIGIR / WSDM / WebConf** — broader IR/recsys/data-mining
- **NeurIPS / ICML / ICLR** — foundation models, eval, RL-for-recsys
- **AI Engineer Summit / Conference** — practitioner-focused, where Eugene Yan keynoted in 2025

## Notable visualizations / interactive demos

1. **Netflix Page Simulator architecture diagram** (already cited in /recsys topic-f).
2. **Spotify embedding-space visualizations** — t-SNE projections of music embeddings, showing genre clusters emerge.
3. **Two-tower retrieval architecture** — the canonical diagram from Google Cloud / TensorFlow Recommenders.
4. **Pinterest GNN architecture** — visualization of how graph structure propagates user/item features.
5. **HNSW visualization** — graph-based ANN; shows hierarchical layers and the descent from coarse to fine.

## Specific 2025 papers / posts worth citing

- **"Judging the Judges: A Systematic Evaluation of Bias Mitigation Strategies in LLM-as-a-Judge Pipelines"** — arXiv 2604.23178. The bias-mitigation playbook.
- **"An Empirical Study of LLM-as-a-Judge: How Design Choices Impact Evaluation Reliability"** — arXiv 2506.13639. Methodology paper.
- **"Balancing Fine-tuning and RAG: A Hybrid Strategy for Dynamic LLM Recommendation Updates"** — RecSys 2025.
- **"GenSAR"** — RecSys 2025, generative retrieval for unified search and recommendation.
- **"LONGER"** (ByteDance) — RecSys 2025, 10K-token transformer for ultra-long user histories.
- **"Mind the Gap"** (DoorDash) — RecSys 2025, LLM-based cross-vertical affinity features for production ranking.
- **OpenAI HealthBench** (May 2025) — instance-specific rubrics methodology.
- **Eugene Yan — "An LLM-as-Judge Won't Save The Product"** (April 2025) — the practitioner counterpoint to the hype.
- **A Survey on LLM-as-a-Judge** — ScienceDirect, 2025. ([sciencedirect.com](https://www.sciencedirect.com/science/article/pii/S2666675825004564))

## Awesome lists / curated meta-resources

- [CHIANGEL/Awesome-LLM-for-RecSys](https://github.com/CHIANGEL/Awesome-LLM-for-RecSys)
- [creyesp/Awesome-recsys](https://github.com/creyesp/Awesome-recsys)
- [alopatenko/LLMEvaluation](https://alopatenko.github.io/LLMEvaluation/)
- *"50 best ML blogs from engineering teams"* — Evidently AI's curation. ([evidentlyai.com](https://www.evidentlyai.com/blog/best-machine-learning-blogs))
