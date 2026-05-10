import type { Metadata } from "next";
import { PillarHeader } from "@/components/pillar-header";
import { PillarOverview } from "@/components/pillar-overview";
import { PillarLists } from "@/components/pillar-lists";
import { PillarTopics } from "@/components/pillar-topics";
import { ExamplesSection } from "@/components/examples-section";
import { PillarPageNav } from "@/components/pillar-page-nav";
import { TopicRef } from "@/components/topic-ref";
import { ArticleJsonLd } from "@/components/json-ld";
import { PILLARS, neighbors, type Topic, type Example } from "@/lib/pillars";

const pillar = PILLARS.recsys;
const { prev, next } = neighbors("recsys");

export const metadata: Metadata = {
  title: pillar.title,
  description: pillar.tag,
  openGraph: {
    title: `${pillar.title} — Ali Lenjani`,
    description: pillar.tag,
    url: `https://alenjani.github.io${pillar.href}`,
    type: "article",
  },
};

const HARD = [
  { bold: "Retrieval at low latency over millions of items.", rest: "Brute-force scoring doesn't scale. Approximate nearest-neighbor indexing (HNSW, IVF, etc.) is the standard answer; choosing index parameters is its own discipline." },
  { bold: "The offline-online gap.", rest: "Offline metrics that don't predict online behavior. Logged-policy bias, distribution shift, the metric you optimized isn't the one users care about." },
  { bold: "Cold start.", rest: "New users with no history, new items with no interactions, new intents with no precedent. Each gets its own treatment." },
  { bold: "Exposure bias and feedback loops.", rest: "The model learns from items it surfaces; rare-but-good items never get the chance. Without correction the system narrows over time." },
  { bold: "Defining \"good\".", rest: "Relevance is product-specific. Pointwise metrics miss complementarity, novelty, taste, list quality. Most teams ship the wrong objective and discover it months later." },
  { bold: "Counterfactual evaluation.", rest: "When you can't run a clean A/B test (regulated domains, small populations, expensive interventions), how do you know if a change helps?" },
];

const APPROACH = [
  { bold: "Negatives over architecture.", rest: "Hard-negative mining inside the same taxonomy node is where the real lift lives — random negatives only teach coarse discrimination." },
  { bold: "ANN-based serving as default.", rest: "HNSW or equivalent, indexed over the item-tower output, behind a thin user-tower service. Fast retrieval first; ranking on top." },
  { bold: "LLM-as-judge for what metrics miss.", rest: "Multi-dimensional CoT judging schemas for taste, complementarity, novelty — the dimensions pointwise offline metrics can't see." },
  { bold: "Counterfactual offline simulators.", rest: "Time-travel sampling, LLM user agents, sim-to-real adaptive metrics. Build the twin; close the offline-online gap." },
  { bold: "Cadence-aware retrains.", rest: "Warm-start from yesterday's model rather than cold-starting; iteration cost matters as much as model quality." },
  { bold: "Treat retrieval, ranking, and eval as one system.", rest: "Each component's choices propagate. Optimizing them in isolation is how teams ship plausible regressions." },
];

const TOPICS: Topic[] = [
  {
    id: "what-is-recsys",
    num: "a",
    title: "What is a recommender system, really?",
    body: (
      <>
        <p>A system that, given a user and a context, produces a ranked list of items the user is likely to want. Almost every concrete decision after that — collaborative vs. content-based, retrieval vs. ranking, sequential vs. session-based — is a choice about <em>what signal you have</em> and <em>what objective you&apos;re optimizing</em>.</p>
        <p>The interesting work isn&apos;t in the model class; it&apos;s in defining the user, the context, the item space, and the objective so that the resulting system actually serves the product. Most &ldquo;recsys&rdquo; failures are objective-definition failures dressed up as modeling failures.</p>
      </>
    ),
  },
  {
    id: "two-tower",
    num: "b",
    title: "Two-tower retrieval, explained",
    body: (
      <>
        <p>The standard pattern for cold-retrieval at scale: a user tower and an item tower, each producing an embedding. Similarity (typically dot product or cosine) between them retrieves top-K items from an ANN index over all item embeddings. Trained with contrastive losses (InfoNCE, sampled-softmax) using user-item interactions as supervision.</p>
        <p>The architecture itself is rarely the differentiator — what matters is the negatives the towers train against, the serving stack you build around them, and how you handle drift between training and serving distributions. The pattern works because user-item interaction <em>is</em> the supervised signal; the towers are just learned hash functions for that signal.</p>
        <TopicRef domain="pinterest.com">
          See also: Pinterest&apos;s engineering blog on retrieval — multiple deep posts on two-tower architectures, embedding-based retrieval, and the production realities of serving at their scale.
        </TopicRef>
      </>
    ),
  },
  {
    id: "ann-serving",
    num: "c",
    title: "ANN serving (HNSW, IVF) and why it matters",
    body: (
      <>
        <p>Once item embeddings are dense vectors, retrieval becomes &ldquo;find the K nearest neighbors of the query embedding&rdquo;. Brute-force is <code>O(N·d)</code> per query — fine for thousands of items, infeasible for millions.</p>
        <p>Approximate nearest-neighbor structures (HNSW for graph-based, IVF for inverted-file, ScaNN for product-quantization) trade a little recall for orders of magnitude in latency. The tuning game: <code>efSearch</code>, <code>M</code>, the number of probes — each parameter pushes you along a recall/latency frontier. Production teams that ignore this tuning ship slow systems and blame the model.</p>
      </>
    ),
  },
  {
    id: "offline-online-gap",
    num: "d",
    title: "The offline-online gap",
    body: (
      <>
        <p>You evaluate a candidate model on logged data and the metric goes up. You ship it; the online metric goes down or sideways. Why?</p>
        <p>Logged-policy bias (the data was generated by an old policy that won&apos;t see the new policy&apos;s distribution), label leakage (the offline label encoded information the online model can&apos;t get), reward misspecification (you optimized clicks; users wanted something else), and Goodhart&apos;s law (any metric optimized hard enough stops measuring what it measured). Closing this gap is the central problem of production recsys, not architecture.</p>
        <TopicRef domain="etsy.com">
          See also: Etsy&apos;s engineering blog on search & recsys — strong, candid writeups on causal/offline-online gap problems and how a real product team handles them.
        </TopicRef>
      </>
    ),
  },
  {
    id: "llm-judge",
    num: "e",
    title: "LLM-as-judge: what it does well, what it doesn't",
    body: (
      <>
        <p>For dimensions that pointwise metrics can&apos;t see — complementarity, novelty, taste alignment, list quality — an LLM scoring CoT-style across multiple latent dimensions is often closer to ground truth than any classical offline metric. Especially when human judging is the gold standard but expensive.</p>
        <p>What LLM judges do badly: they&apos;re sensitive to prompt phrasing, they have their own biases (length, position, model-of-the-author), and they&apos;re surprisingly bad at detecting their own confidence calibration. The right pattern: structured multi-dimensional schemas, several model votes, audit against human ratings periodically.</p>
        <TopicRef domain="anthropic.com">
          See also: Anthropic&apos;s evaluation guidance — their writing on Constitutional AI, model-graded eval, and the limits of LLM judges is the closest thing to canonical literature on this.
        </TopicRef>
      </>
    ),
  },
  {
    id: "counterfactual-sim",
    num: "f",
    title: "Counterfactual offline simulation",
    body: (
      <>
        <p>Build a simulator of how users would have responded to recommendations the system <em>didn&apos;t</em> show — the candidate model&apos;s outputs replayed against historical context, with a user-behavior model standing in for the real user.</p>
        <p>The user-behavior model can be anything from a logged-data IPS estimator to an LLM agent that &ldquo;browses&rdquo; the catalog. The point is to break the chicken-and-egg dependency between deploying the model to learn its effect and learning its effect to decide whether to deploy. Properly built, counterfactual sim is a digital twin of your recsys — same loop as Pillar II, different domain.</p>
        <TopicRef domain="netflix.com">
          See also: Netflix&apos;s <a href="https://netflixtechblog.com/page-simulator-fa02069fb269" target="_blank" rel="noopener">Page Simulator for Better Offline Metrics</a> — the same pattern at industrial scale: time-travel data reconstruction, system-level (not model-level) offline evaluation, simulated homepages compared against what members actually saw. Their setup and the principles it surfaces map almost directly onto the work I do in this lane.
        </TopicRef>
      </>
    ),
  },
  {
    id: "hard-negatives",
    num: "g",
    title: "Hard-negative mining",
    body: (
      <>
        <p>A two-tower model trained on random negatives learns to distinguish &ldquo;the good item&rdquo; from &ldquo;any random item&rdquo; — that&apos;s a coarse discrimination. The model never learns the fine-grained attributes that matter, because it never has to.</p>
        <p>Hard negatives — items the model currently thinks are similar to the positive but aren&apos;t — force fine-grained discrimination. Same-taxonomy negatives (sample within the same category as the positive) are the standard move; in-batch hard mining works in many setups too. The lift from this is often larger than any architecture change.</p>
        <TopicRef domain="spotify.com">
          See also: Spotify&apos;s engineering blog — long-running thread on embedding-based retrieval and contrastive learning at scale; their work on hard-negative strategies for music recsys is well-written.
        </TopicRef>
      </>
    ),
  },
  {
    id: "cold-start-exposure",
    num: "h",
    title: "Cold start & exposure bias",
    body: (
      <>
        <p><em>Cold start</em>: a new user, item, or intent with no interaction history. Treatments range from content-based fallbacks to bandits with a deliberate exploration budget.</p>
        <p><em>Exposure bias</em>: the model trains on items it has shown; items it never showed never get a chance. Without correction the system narrows over time, and &ldquo;popular&rdquo; items dominate. Inverse-propensity weighting, off-policy correction, or explicit exploration arms are the standard mitigations. Both problems are easy to ignore in benchmarks and painful to ignore in production.</p>
      </>
    ),
  },
];

const EXAMPLES: Example[] = [
  {
    id: "two-tower",
    meta: "Production recsys",
    role: "shipped",
    title: "A two-tower recommender, served live",
    teaser: "InfoNCE + same-taxonomy hard negatives, ONNX serving, HNSW retrieval. The lift came from the negatives, not the architecture.",
    thumb: { src: "/figures/two-tower-thumb.svg", alt: "Two-tower diagram" },
    body: (
      <>
        <p>One tower for users, one for items, both trained with InfoNCE plus same-taxonomy hard-negative mining — random negatives only push the model to learn coarse categories, so the negatives have to come from inside the same taxonomy node to force fine-grained attribute discrimination.</p>
        <p>Serving: ONNX Runtime for the user tower and an HNSW index over the item embeddings for low-latency retrieval at production scale.</p>
        <p>Training: MosaicML Streaming for sharded reads across multiple GPUs, plus a bi-weekly warm-start strategy that meaningfully cut training compute compared to cold-start runs.</p>
      </>
    ),
  },
  {
    id: "llm-judge",
    meta: "Evaluation · LLM",
    role: "shipped",
    title: "An LLM judge for the question offline metrics can't answer",
    teaser: "A multi-dimensional CoT judging pipeline scoring 7 orthogonal latent dimensions to automate quality gating before release.",
    body: (
      <>
        <p>A multi-dimensional evaluation platform that quantifies semantic complementarity for recommender outputs — the kind of judgment that&apos;s hard to capture with point-wise offline metrics. The pipeline scores 7 orthogonal latent dimensions per candidate using Chain-of-Thought reasoning, structured as a declarative &ldquo;human-proxy&rdquo; judging schema so that individual dimensions can be audited, swapped, or retired without reshipping the evaluator.</p>
      </>
    ),
  },
  {
    id: "counterfactual-sim",
    meta: "Simulation · counterfactual",
    role: "shipped",
    title: "An offline simulator that's honest about online behavior",
    teaser: "Time-travel sampling, LLM user agents, and metrics that adapt when sim disagrees with online.",
    body: (
      <>
        <p>A high-fidelity counterfactual offline simulation platform integrated with LLM agents. Features include &ldquo;time-travel&rdquo; historical sampling and self-adaptive metric tuning, built to minimize the sim-to-real gap before production deployment decisions.</p>
      </>
    ),
  },
];

export default function RecsysPage() {
  return (
    <>
      <ArticleJsonLd
        title={pillar.title}
        description={pillar.tag}
        url={`https://alenjani.github.io${pillar.href}`}
      />
      <section className="py-16 md:py-20 border-b border-line">
        <div className="mx-auto max-w-[1100px] px-8">
          <PillarHeader pillar={pillar} />
          <PillarOverview>
            <p>
              Serve a useful set of items to a user, under a tight latency budget, with a finite
              retraining cadence, while telling true offline wins from spurious ones.{" "}
              <strong>The full pipeline is rarely the model itself</strong> — it&apos;s everything
              around it.
            </p>
            <p>
              Two-tower retrieval is a pattern, not a magic answer; the work is in the negatives,
              the serving stack, the eval, and the retrain cadence. The deeper move — and the one
              that ties this pillar to the digital-twin work in Pillar II — is building an offline
              simulator faithful enough that the decisions made there hold up online.
              Counterfactual sim plus LLM-based judging is the closest a recsys ever gets to a
              digital twin.
            </p>
            <p>
              The patterns generalize past consumer recsys: search, ads, content ranking, agent
              evaluation — anywhere a model produces ranked output that has to be evaluated and
              tuned without breaking what&apos;s already working in production.
            </p>
          </PillarOverview>
          <PillarLists hard={HARD} approach={APPROACH} />
          <PillarTopics topics={TOPICS} />
          <ExamplesSection examples={EXAMPLES} />
        </div>
      </section>
      <PillarPageNav prev={prev} next={next} />
    </>
  );
}
