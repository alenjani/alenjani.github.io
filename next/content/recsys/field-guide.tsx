import type { FieldGuideContent } from "@/lib/field-guide";

export const recsysFieldGuide: FieldGuideContent = {
  lastReviewed: "May 2026",

  openQuestions: (
    <>
      <p>
        RecSys 2025 (Prague) made it official: <em>LLMs and recommender systems are converging
        fast</em>. The 2025 RecSys keynotes named <strong>Relational Foundation Models</strong>{" "}
        as the next frontier (Jure Leskovec — pre-trained models that do in-context learning
        over multi-table heterogeneous data, replacing per-task model retraining). ByteDance
        shipped <em>LONGER</em>, an end-to-end transformer that reads up to{" "}
        <strong>10K tokens</strong> of user history directly. DoorDash showed LLMs as
        cross-vertical affinity features on production ranking.
      </p>
      <p>
        On the evaluation side, the field is moving away from &ldquo;good vibes&rdquo;
        LLM-as-judge: OpenAI&apos;s HealthBench introduced instance-specific rubrics with{" "}
        <strong>260 physicians authoring 48,562 unique criteria</strong>, and the{" "}
        <em>Judging the Judges</em> benchmark found style bias dominates LLM judges
        (0.76–0.92 correlation), much more than position bias. The practitioner counterpoint —
        Eugene Yan&apos;s <em>&ldquo;An LLM-as-Judge Won&apos;t Save The Product&rdquo;</em> —
        remains the sharpest reality-check. The vector-DB market is also in shake-out: Qdrant
        winning QPS-per-dollar at scale, Pinecone winning ease-of-use until you cross ~50M
        vectors and the bill explodes.
      </p>
    </>
  ),

  reading: {
    foundational: [
      {
        domain: "acm.org",
        title: "A Comprehensive Survey on Retrieval Methods in Recommender Systems",
        source: "ACM, December 2025",
        url: "https://dl.acm.org/doi/pdf/10.1145/3771925",
        why:
          "The new lit review covering classical, embedding, and generative retrieval — start here for a methods overview.",
      },
      {
        domain: "springer.com",
        title: "Recommender Systems: The Textbook (2nd ed.)",
        source: "Aggarwal, Springer",
        url: "https://link.springer.com/book/10.1007/978-3-031-72167-8",
        why:
          "Still the canonical textbook; the reference when the recsys conversation gets formal.",
      },
      {
        domain: "cornell.edu",
        title: "Off-Policy Evaluation tutorial",
        source: "Joachims et al.",
        url: "https://www.cs.cornell.edu/people/tj/publications/joachims_etal_18a.pdf",
        why:
          "The methodology behind doubly-robust counterfactual eval — read before claiming any A/B-test substitute.",
      },
      {
        domain: "arxiv.org",
        title: "Awesome-LLM-for-RecSys (paper list)",
        source: "CHIANGEL, GitHub",
        url: "https://github.com/CHIANGEL/Awesome-LLM-for-RecSys",
        why:
          "Curated paper collection at the LLM × recsys intersection, regularly updated — the field's fastest-moving frontier.",
      },
    ],

    industry: [
      {
        domain: "eugeneyan.com",
        title: "An LLM-as-Judge Won't Save The Product",
        source: "Eugene Yan, April 2025",
        url: "https://eugeneyan.com/writing/llm-judge-wont-save-product/",
        why:
          "The single best post on the topic: process matters more than tooling. The practitioner counterpoint to LLM-judge hype.",
      },
      {
        domain: "eugeneyan.com",
        title: "Improving RecSys & Search with LLM techniques",
        source: "Eugene Yan, AI Engineer 2025 keynote",
        url: "https://eugeneyan.com/writing/recsys-llm/",
        why:
          "The clearest distillation of the recsys-LLM convergence so far — semantic IDs, generative retrieval, hybrid eval.",
      },
      {
        domain: "hamel.dev",
        title: "A Field Guide to Rapidly Improving AI Products",
        source: "Hamel Husain, March 2025",
        url: "https://hamel.dev/blog/posts/field-guide/",
        why:
          "Distilled from 30+ production implementations; the playbook for evals + error analysis as iteration drivers.",
      },
      {
        domain: "hamel.dev",
        title: "LLM Evals: Everything You Need to Know",
        source: "Hamel Husain, updated July 2025",
        url: "https://hamel.dev/blog/posts/evals-faq/",
        why:
          "Living FAQ on eval design; what the canonical reference looks like in 2025.",
      },
      {
        domain: "netflix.com",
        title: "Page Simulator for Better Offline Metrics",
        source: "Netflix Tech Blog",
        url: "https://netflixtechblog.com/page-simulator-fa02069fb269",
        why:
          "The reference industrial-scale offline-eval system: time-travel data, simulated homepages compared to actual.",
      },
      {
        domain: "doordash.com",
        title: "Mind the Gap — LLMs bridge behavioral silos in multi-vertical recs",
        source: "DoorDash, RecSys 2025",
        url: "https://careersatdoordash.com/blog/doordash-llms-bridge-behavioral-silos-in-multi-vertical-recommendations/",
        why:
          "LLM-derived cross-vertical affinity as features for production ranking — recent, concrete, production-grade.",
      },
      {
        domain: "spotify.com",
        title: "Spotify Engineering — embeddings, content personalization",
        source: "engineering.atspotify.com",
        url: "https://engineering.atspotify.com/",
        why:
          "Long-running engineering blog with deep posts on embedding-based retrieval, experimentation, contextual recs.",
      },
    ],

    tools: [
      { name: "Qdrant", url: "https://qdrant.tech/", domain: "qdrant.tech", note: "vector DB · highest QPS at scale" },
      { name: "Weaviate", url: "https://weaviate.io/", domain: "weaviate.io", note: "vector DB · hybrid + multi-tenancy" },
      { name: "Pinecone", url: "https://www.pinecone.io/", domain: "pinecone.io", note: "vector DB · managed, easy ops" },
      { name: "pgvector", url: "https://github.com/pgvector/pgvector", domain: "postgresql.org", note: "Postgres extension, cheap" },
      { name: "Faiss / ScaNN / hnswlib", url: "https://github.com/facebookresearch/faiss", note: "ANN libraries" },
      { name: "LangSmith", url: "https://smith.langchain.com/", domain: "langchain.com", note: "LLM tracing + eval" },
      { name: "Promptfoo", url: "https://www.promptfoo.dev/", domain: "promptfoo.dev", note: "eval CLI for prompts/RAG" },
      { name: "Inspect (UK AISI)", url: "https://inspect.aisi.org.uk/", domain: "gov.uk", note: "framework for safety + capability evals" },
      { name: "Ragas", url: "https://docs.ragas.io/", domain: "github.com", note: "RAG eval (faithfulness, relevance, context)" },
    ],

    awesome: [
      {
        name: "Awesome-LLM-for-RecSys (CHIANGEL)",
        url: "https://github.com/CHIANGEL/Awesome-LLM-for-RecSys",
        note: "LLM × recsys, regularly updated",
      },
      {
        name: "Awesome-recsys (creyesp)",
        url: "https://github.com/creyesp/Awesome-recsys",
        note: "broader recsys list",
      },
      {
        name: "LLMEvaluation (alopatenko)",
        url: "https://alopatenko.github.io/LLMEvaluation/",
        note: "curated LLM eval resources",
      },
    ],
  },

  visualizations: [
    {
      source: "Netflix Tech Blog — Page Simulator architecture",
      domain: "netflix.com",
      what: "The reference industrial-scale offline-eval system; time-travel data + simulated pages compared to actual.",
      url: "https://netflixtechblog.com/page-simulator-fa02069fb269",
      thumb: "/figures/refs/rcs-netflix.jpg",
    },
    {
      source: "Google Cloud — Two-Tower retrieval architecture",
      domain: "google.com",
      what: "The canonical diagram: user/item towers + ANN index for large-scale candidate generation.",
      url: "https://docs.cloud.google.com/architecture/implement-two-tower-retrieval-large-scale-candidate-generation",
    },
    {
      source: "Spotify Research — embedding-space visualizations",
      domain: "spotify.com",
      what: "t-SNE projections of music embeddings; genre clusters emerging from interaction signal alone.",
      url: "https://research.atspotify.com/blog/",
    },
    {
      source: "Pinterest Engineering — GNN recommendation",
      domain: "pinterest.com",
      what: "How graph structure propagates user/item signal for board-level recommendation at Pinterest's scale.",
      url: "https://medium.com/pinterest-engineering/",
    },
    {
      source: "HNSW visualization & tutorial",
      domain: "github.com",
      what: "How graph-based ANN actually works under the hood — hierarchical layers and the descent from coarse to fine.",
      url: "https://github.com/nmslib/hnswlib",
      thumb: "/figures/refs/rcs-hnsw.jpg",
    },
    {
      source: "Eugene Yan — RecSys-LLM convergence diagrams",
      domain: "eugeneyan.com",
      what: "Hand-drawn architecture diagrams for hybrid LLM-recsys patterns; semantic IDs, generative retrieval.",
      url: "https://eugeneyan.com/writing/recsys-llm/",
      thumb: "/figures/refs/rcs-eugene.jpg",
    },
  ],

  events: [
    {
      name: "RecSys 2026",
      domain: "acm.org",
      url: "https://recsys.acm.org/recsys26/",
      date: "Sep 28 – Oct 2, 2026",
      location: "Minneapolis, MN",
      tag: "Flagship · International",
    },
    {
      name: "KDD 2026",
      domain: "kdd.org",
      url: "https://kdd2026.kdd.org/",
      date: "Jul 6–12, 2026",
      location: "Seoul, South Korea",
      tag: "International",
    },
    {
      name: "SIGIR 2026",
      domain: "sigir.org",
      url: "https://sigir2026.dei.unipd.it/",
      date: "Jul 20–24, 2026",
      location: "Melbourne, Australia",
      tag: "International",
    },
    {
      name: "AI Engineer World's Fair — recsys + eval tracks",
      domain: "ai.engineer",
      url: "https://www.ai.engineer/worldsfair",
      date: "Jun 29 – Jul 2, 2026",
      location: "San Francisco, CA",
      tag: "Bay Area",
    },
    {
      name: "Databricks Data + AI Summit",
      domain: "databricks.com",
      url: "https://www.databricks.com/dataaisummit",
      date: "Jun 15–18, 2026",
      location: "San Francisco, CA (Moscone)",
      tag: "Bay Area",
    },
    {
      name: "LangChain Conference — LLM apps + eval",
      domain: "langchain.com",
      url: "https://www.langchain.com/interrupt",
      date: "May 13–14, 2026",
      location: "San Francisco, CA",
      tag: "Bay Area",
    },
    {
      name: "AI DevSummit",
      domain: "aidevsummit.co",
      url: "https://aidevsummit.co/",
      date: "May 27–28, 2026",
      location: "South San Francisco, CA",
      tag: "Bay Area",
    },
    {
      name: "The AI Conference",
      domain: "aiconference.com",
      url: "https://aiconference.com/",
      date: "Sep 29 – Oct 1, 2026",
      location: "San Francisco, CA (Pier 48)",
      tag: "Bay Area",
    },
    {
      name: "NeurIPS 2026",
      domain: "neurips.cc",
      url: "https://neurips.cc/",
      date: "Dec 6–12, 2026",
      location: "Sydney, Australia",
      tag: "International",
    },
  ],
};
