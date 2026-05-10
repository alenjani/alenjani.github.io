import type { Metadata } from "next";
import { PillarHeader } from "@/components/pillar-header";
import { PillarOverview } from "@/components/pillar-overview";
import { PillarLists } from "@/components/pillar-lists";
import { PillarTopics } from "@/components/pillar-topics";
import { ExamplesSection } from "@/components/examples-section";
import { FieldGuide } from "@/components/field-guide";
import { PillarPageNav } from "@/components/pillar-page-nav";
import { TopicRef } from "@/components/topic-ref";
import { ArticleJsonLd } from "@/components/json-ld";
import { PILLARS, neighbors, type Topic, type Example } from "@/lib/pillars";
import { twinsFieldGuide } from "@/content/twins/field-guide";

const pillar = PILLARS.twins;
const { prev, next } = neighbors("twins");

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
  { bold: "Picking the right level of abstraction.", rest: "Too detailed and the simulation is too slow to use for trade studies; too coarse and the decisions are wrong. Choosing the abstraction is half the work." },
  { bold: "Sim-to-real gap.", rest: "All twins lie a little. The question is by how much, where, and whether that affects the decision you'd make. Cyber-physical testing is the bridge." },
  { bold: "Combinatorial trade space.", rest: "Even modest architectures yield thousands of candidate configurations. Brute force isn't always feasible; surrogate models and Pareto-aware sampling are." },
  { bold: "Conflicting objectives.", rest: "Most real decisions trade performance, cost, risk, recovery time. Collapsing them to a scalar discards information; keeping them produces a Pareto frontier." },
  { bold: "Uncertainty quantification.", rest: "A point estimate is dangerous. The interesting questions are about distributions: tails, conditionals, dependences across subsystems." },
  { bold: "Communicating trade-offs to non-modelers.", rest: "A risk-return scatter that an engineer or operator can read is the deliverable. The simulation log is not." },
];

const APPROACH = [
  { bold: "Start with a coarse twin.", rest: "Markov or Bayesian-network nodes for subsystems, wired with interactions. Refinement comes after the trade space is understood, not before." },
  { bold: "Make trade-space exploration a first-class workflow.", rest: "Sweep architectures and parameters, rank by Pareto efficiency, drill into the frontier." },
  { bold: "Decompose resilience.", rest: "Passive capacity (margin, redundancy, robust design) and active capacity (repair, reconfigure, mitigate) measure different things and trade off differently." },
  { bold: "Use cyber-physical loops where stakes warrant.", rest: "Hardware-in-the-loop with the rest of the system simulated buys credibility that pure simulation can't." },
  { bold: "Present results as risk-return.", rest: "Mean of value vs. std of value — every candidate is a point, the frontier is what gets chosen from. Hide the simulation; show the decision." },
  { bold: "Build twins that are testable.", rest: "A twin that can't be wrong is a twin that can't be useful. Validate predictions against operational data; quantify residual error." },
];

const TOPICS: Topic[] = [
  {
    id: "what-is-twin",
    num: "a",
    title: "What is a digital twin (and what isn't)?",
    body: (
      <>
        <p>A simulator of a real system, updated with operational data, used to predict the system&apos;s behavior under conditions you can&apos;t directly test. The phrase covers everything from a thermodynamic ODE solver to a deep-network surrogate.</p>
        <p>The useful question is never &ldquo;is this a digital twin?&rdquo; but: <em>what fidelity, what update cadence, what decision is it supporting, and what&apos;s its sim-to-real error?</em> Without those answers the term is marketing.</p>
        <TopicRef domain="purdue.edu">
          See also: the <a href="https://www.purdue.edu/rethi/" target="_blank" rel="noopener">RETHi project at Purdue</a> — NASA STRI work on resilient extraterrestrial habitats. The cyber-physical testbed grounds the abstract definition in a real validation regime.
        </TopicRef>
      </>
    ),
  },
  {
    id: "markov-bayesian",
    num: "b",
    title: "Markov / Bayesian models for system behavior",
    body: (
      <>
        <p>Discrete states + transition probabilities + observations gets you most of the way for many engineering systems. The art is in the state definition and which transitions are worth modeling.</p>
        <p>Higher fidelity — continuous-time SDEs, hybrid automata, full physics simulators — buys precision at the cost of tractability and interpretability. For decision support the Markov abstraction is often the sweet spot: fast enough to sweep, faithful enough to rank candidates correctly.</p>
      </>
    ),
  },
  {
    id: "pareto-frontiers",
    num: "c",
    title: "Pareto frontiers and how to use them for decisions",
    body: (
      <>
        <p>When two or more objectives conflict, the Pareto frontier is the set of non-dominated trade-offs. Anything off the frontier is strictly worse on at least one axis — those candidates can be eliminated.</p>
        <p>The decision-maker&apos;s job is choosing <em>along</em> the frontier — that&apos;s a values question, not a math one. The modeler&apos;s job is producing the frontier and characterizing the cost of each move along it.</p>
      </>
    ),
  },
  {
    id: "passive-active",
    num: "d",
    title: "Resilience: passive vs. active capacity",
    body: (
      <>
        <p>Most systems engineers conflate &ldquo;resilience&rdquo; with &ldquo;robustness&rdquo;. The decomposition that matters: <em>passive capacity</em> is how much insult the system absorbs without operator action — margins, redundancy, robust design. <em>Active capacity</em> is what operators can do once it&apos;s hit — repair, reconfigure, mitigate.</p>
        <p>They cost differently and fail differently. A system over-invested in passive capacity is heavy and expensive; one over-invested in active capacity needs a sharp operator at all times. The trade is real and worth modeling explicitly.</p>
      </>
    ),
  },
  {
    id: "cyber-physical",
    num: "e",
    title: "Cyber-physical testing",
    body: (
      <>
        <p>Pure simulation is cheap but lies. Pure physical testing is expensive and slow. Cyber-physical splits the difference: real hardware sits in a test cell, the rest of the system is simulated, coupled through sensor and actuator interfaces in real time.</p>
        <p>The control law sees the hardware&apos;s actual response; the simulated environment reacts accordingly. You buy credibility on the parts that matter most without paying the cost of full physical replication.</p>
      </>
    ),
  },
  {
    id: "sim-to-real",
    num: "f",
    title: "Sim-to-real and twin validation",
    body: (
      <>
        <p>If the twin can&apos;t be wrong, it can&apos;t be useful. Validation means making predictions that can be checked against later operational data, then quantifying the residual error and where it lives.</p>
        <p>A twin without a validation regime is a hypothesis dressed up as a tool. The validation pattern that works: predict an outcome before observing it, log the prediction, compare after, attribute residuals to specific subsystems, refine.</p>
      </>
    ),
  },
];

const EXAMPLES: Example[] = [
  {
    id: "cdcm",
    meta: "ASME IDETC · 2022",
    role: "co-author",
    title: "Computational platform for trade studies in deep space habitat systems (CDCM)",
    teaser: "Markov subsystem nodes, value metric, risk-return trade studies the way a portfolio manager runs them.",
    thumb: { src: "/figures/habitat-architecture.png", alt: "Habitat architecture" },
    body: (
      <>
        <p>Each subsystem is a coarse input/output Markov node — power, structural, life support, environment, agent, intelligent health management — wired together into configurations. Disturbances drive state transitions; a reflexive health-management subsystem prioritizes recovery actions given limited robotic-agent availability. The output is a value metric decomposing system performance into mission-value and crew-value over the design lifecycle. Then trade studies run as risk-return scatter for every candidate configuration.</p>
        <figure>
          <img src="/figures/habitat-architecture.png" alt="" loading="lazy" />
          <figcaption><span className="figref">Fig. 4</span> &nbsp; The example habitat as wired Markov nodes. Disturbances (meteorite impact, solar radiation, dust) feed in; agent + IHM (dashed) close the loop with repair and cleaning actions.</figcaption>
        </figure>
        <figure>
          <img src="/figures/cdcm-trade-study.png" alt="" loading="lazy" />
          <figcaption><span className="figref">Figs. 7–8</span> &nbsp; Trade study outputs as risk-return plots. Mean-of-value vs. std-of-value, colored by candidate parameter. Pareto-efficient designs are the lower-right points.</figcaption>
        </figure>
      </>
    ),
  },
  {
    id: "pareto",
    meta: "Natural Hazards · 2020",
    role: "first",
    title: "A resilience-based method for prioritizing post-event building inspections",
    teaser: "Constrained optimization, simulated annealing, and a Pareto frontier that turns triage into a decision rule.",
    thumb: { src: "/figures/inspection-pareto-full.png", alt: "Pareto frontier" },
    body: (
      <>
        <p>A resilience-based method for prioritizing post-event building inspections. The method allocates limited inspection resources by ordering buildings to maximize recovery of community function per inspector-hour, with damage-state uncertainty propagated through the prioritization.</p>
        <figure>
          <img src="/figures/holiday-beach-field-site.jpg" alt="" loading="lazy" />
          <figcaption><span className="figref">Field testbed</span> &nbsp; Holiday Beach, Texas — the case-study site after Hurricane Harvey.</figcaption>
        </figure>
        <figure>
          <img src="/figures/inspection-pareto-full.png" alt="" loading="lazy" />
          <figcaption><span className="figref">Fig. 6</span> &nbsp; Decision space framed as a portfolio problem. Each point is an inspection plan; the Pareto frontier is what you&apos;d actually consider.</figcaption>
        </figure>
        <figure>
          <img src="/figures/inspection-pareto-zoom.png" alt="" loading="lazy" />
          <figcaption><span className="figref">Fig. 6 (detail)</span> &nbsp; Zoom on the lower-left of the decision space — where the actual Pareto trade-off lives.</figcaption>
        </figure>
      </>
    ),
  },
  {
    id: "cyber-physical",
    meta: "ASCE Earth & Space · 2021",
    role: "co-author",
    title: "Role of cyber-physical testing in developing resilient extraterrestrial habitats",
    teaser: "Real hardware-in-the-loop coupled to a simulated habitat through sensor/actuator interfaces.",
    thumb: { src: "/figures/cyber-physical-architecture.png", alt: "Cyber-physical architecture" },
    body: (
      <>
        <p>Pure simulation is cheap but lies. Pure physical testing is expensive and slow. Cyber-physical testing splits the difference: real hardware sits in a test cell while the rest of the habitat is simulated in real time, coupled through sensor and actuator interfaces.</p>
        <figure>
          <img src="/figures/cyber-physical-architecture.png" alt="" loading="lazy" />
          <figcaption><span className="figref">Fig. 3</span> &nbsp; The hybrid loop. Real hardware-in-the-loop on the left, simulated habitat on the right, sensor/actuator interface coupling them in real time.</figcaption>
        </figure>
      </>
    ),
  },
  {
    id: "resilience-design",
    meta: "AIAA · 2019",
    role: "co-author",
    title: "Resilience-oriented design of extraterrestrial habitat systems",
    teaser: "Decompose resilience into what the system absorbs and what operators can do once it's hit.",
    thumb: { src: "/figures/resilience-design-element.png", alt: "Resilience curves" },
    hidden: true,
    body: (
      <>
        <p>How do you design for resilience without it being a vibes-based adjective? This paper splits the concept into two components: <em>passive capacity</em> (redundancy, margin, robust design) and <em>active capacity</em> (repair, reconfigure, mitigate). Then the case study runs at 90%, 63%, and 40% passive capacity to see how the trade space behaves.</p>
        <figure>
          <img src="/figures/resilience-design-element.png" alt="" loading="lazy" />
          <figcaption><span className="figref">Figs. 8–9</span> &nbsp; System performance recovery curves under 90% (left) and 63% (right) passive capacity. Different shapes, different stories.</figcaption>
        </figure>
      </>
    ),
  },
];

export default function TwinsPage() {
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
              Build a model of a coupled system. Drive it with realistic disturbances. Watch how
              its configurations behave under uncertainty. Use the resulting risk-return surface
              to make a decision — <strong>which architecture, which inspection plan, which
              design margin, which capital allocation</strong>.
            </p>
            <p>
              The same loop applies whether the &ldquo;system&rdquo; is an extraterrestrial
              habitat, a portfolio of inspections after a hurricane, or a hardware-in-the-loop
              testbed. What unifies them: many subsystems with stochastic interactions, finite
              resources to act, and a decision under uncertainty. What separates a good answer
              from a bad one is rarely the math — it&apos;s how faithful the twin is, how much
              of the trade space you can actually search, and how clearly the trade-offs are
              presented to the people who decide.
            </p>
            <p>
              This work sits at the intersection of two skill stacks that rarely overlap:{" "}
              <em>ML/optimization fluency</em> and <em>engineering complex-systems modeling</em>.
              That intersection is what makes it transferable — capital allocation, infrastructure
              investment, claims triage, A/B-test scheduling all reduce to the same loop with
              different inputs.
            </p>
          </PillarOverview>
          <PillarLists hard={HARD} approach={APPROACH} />
          <PillarTopics topics={TOPICS} />
          <ExamplesSection examples={EXAMPLES} />
          <FieldGuide content={twinsFieldGuide} />
        </div>
      </section>
      <PillarPageNav prev={prev} next={next} />
    </>
  );
}
