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
import { detectionFieldGuide } from "@/content/detection/field-guide";

const pillar = PILLARS.detection;
const { prev, next } = neighbors("detection");

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
  { bold: "Drift between training and deployment.", rest: "Lighting, viewpoint, sensor, scene composition all change. Most systems fail not because the architecture is wrong but because the training distribution stopped matching reality." },
  { bold: "Class imbalance with asymmetric costs.", rest: "A 99%-accurate defect detector is useless if the 1% it misses are the ones that cost a million dollars." },
  { bold: "Pre/post or multi-view alignment.", rest: "Two views of the same object don't trivially register. Depth-aware homography matters when the scene is 3D — a naive affine transform fails." },
  { bold: "Decision logic vs. raw model output.", rest: "A class probability is not a decision. Threshold choice, hysteresis, multi-shot consensus — that's what turns a model into a system." },
  { bold: "Custom data collection.", rest: "No public dataset matches your deployment surface. You design the collection, including the hard-negative search." },
  { bold: "Calibration and uncertainty.", rest: "Hard labels are easy to ship and easy to misuse. Calibrated probabilities buy you the option to defer ambiguous cases to a human." },
];

const APPROACH = [
  { bold: "Design the data pipeline before the model.", rest: "Pose, lighting, occlusion, label quality — solving the data problem buys more performance than any architecture switch." },
  { bold: "Lean on multi-stream / multi-modal fusion.", rest: "A single noisy stream rarely closes the gap; combining noisy streams often does." },
  { bold: "Treat thresholds as first-class artifacts.", rest: "One global threshold leaves signal on the table — per-class, per-condition thresholds are normal in practice." },
  { bold: "Calibrate, then evaluate at the operating point.", rest: "AUC is the wrong number when the deployed threshold is fixed." },
  { bold: "Build evaluation that mirrors deployment.", rest: "Train/val splits that look like the deployment surface predict actual lift; splits that don't, don't." },
  { bold: "Treat the model as part of a system.", rest: "The decision logic, the data pipeline, the monitoring — that's the system; the model is one component." },
];

const TOPICS: Topic[] = [
  {
    id: "change-vs-anomaly",
    num: "a",
    title: "Change detection vs. anomaly detection vs. classification",
    body: (
      <>
        <p>Three problems people often conflate. <em>Change detection</em> compares two states (pre/post). <em>Anomaly detection</em> asks &ldquo;is this unusual relative to a background distribution?&rdquo; <em>Classification</em> asks &ldquo;which of these N labels?&rdquo;</p>
        <p>The same image can answer different questions; how you frame the task determines the data you collect, the labels you produce, and the evaluation that&apos;s meaningful. Most production failures come from picking the wrong frame for the problem.</p>
      </>
    ),
  },
  {
    id: "prepost-alignment",
    num: "b",
    title: "Why pre/post alignment is harder than it looks",
    body: (
      <>
        <p>Two photos of the same building from different angles, different times, different sensors. An obvious affine transform fails — the geometry of the scene is 3D, not 2D.</p>
        <p>The work is in the registration: feature matching across viewpoints, depth-aware homography, sometimes triangulation across multiple frames. The classifier downstream is the easy part once the pixels actually correspond. Skipping registration and hoping the network &ldquo;figures it out&rdquo; is a recipe for a model that memorizes spurious correlations.</p>
      </>
    ),
  },
  {
    id: "threshold-tuning",
    num: "c",
    title: "Threshold tuning matters more than architecture",
    body: (
      <>
        <p>Switching from <code>ResNet-50</code> to <code>ResNet-152</code> typically buys a fraction of a percent. Moving the operating threshold from <code>0.5</code> to whatever the precision-recall curve actually elbows at <em>for your cost asymmetry</em> — that buys a working system.</p>
        <p>Most teams spend their effort on architecture and forget the threshold; the leverage is reversed. Threshold tuning is a per-class, per-condition exercise, ideally re-run as data drifts.</p>
      </>
    ),
  },
  {
    id: "fusion-patterns",
    num: "d",
    title: "Multi-stream / multi-modal fusion patterns",
    body: (
      <>
        <p><em>Late fusion</em> (combine class probabilities from each stream) is robust and easy to debug. <em>Early fusion</em> (combine features) is more powerful but easier to break. <em>Probabilistic / Bayesian fusion</em> across heterogeneous evidence is the right move when streams have very different reliability profiles or fail in different ways.</p>
        <p>The choice depends on how correlated the failure modes of your streams are: if they fail together, fusion buys you nothing; if they fail independently, fusion can lift accuracy substantially.</p>
        <TopicRef domain="roboflow.com">
          See also: Roboflow&apos;s ongoing engineering writeups on production CV — strong reference for what production data pipelines actually look like across CV domains.
        </TopicRef>
      </>
    ),
  },
  {
    id: "data-collection",
    num: "e",
    title: "What good data collection looks like",
    body: (
      <>
        <p>Cover the deployment surface, not the convenience surface. Label policy that matches the decision boundary you&apos;ll actually use at deployment, not whatever&apos;s natural to annotate. Hard-negative discovery as part of collection, not an afterthought.</p>
        <p>The collection plan is half the engineering. A team that spends two months on collection design and one month on modeling almost always beats a team that does the reverse.</p>
      </>
    ),
  },
  {
    id: "calibration",
    num: "f",
    title: "Calibration in deployed CV",
    body: (
      <>
        <p>Sigmoid outputs aren&apos;t calibrated probabilities — they&apos;re scores that happen to live in <code>[0,1]</code>. Temperature scaling, isotonic regression, or Platt scaling: pick one and use it.</p>
        <p>A calibrated <code>0.3</code> means something — about 30% of the time, the positive class is true. An uncalibrated <code>0.3</code> means almost nothing, and any decision built on it (e.g., &ldquo;send to human review if score &gt; 0.3&rdquo;) is a guess dressed up as a rule.</p>
      </>
    ),
  },
];

const EXAMPLES: Example[] = [
  {
    id: "prepost-fusion",
    meta: "Eng. Structures · 2020",
    role: "first",
    title: "Pre-event and post-event imagery fusion",
    teaser: "Faster R-CNN + depth-aware homography. Fuse Street View pre-event with drone post-event.",
    thumb: { src: "/figures/fusion-pipeline.jpg", alt: "Fusion pipeline" },
    body: (
      <>
        <p>End-to-end pipeline. Input: a building&apos;s address. Output: a damage state. Google Street View for pre-event imagery, drone or satellite for post-event, Faster R-CNN to find the building in each frame, a depth model to disambiguate which of several visible buildings is <em>the</em> building, and a homography step to align them. The fusion is the part everyone underestimates — pre-event Street View is sharp but oblique; post-event drone is overhead and noisy; matching them requires a depth-aware registration that the obvious affine transform fails at.</p>
        <figure>
          <img src="/figures/harvey-irma-coverage.jpg" alt="" loading="lazy" />
          <figcaption><span className="figref">Coverage</span> &nbsp; Reconnaissance across Hurricanes Harvey (Texas Gulf Coast) and Irma (Florida) — the field data this pipeline was built and validated against.</figcaption>
        </figure>
        <figure>
          <img src="/figures/fusion-pipeline.jpg" alt="" loading="lazy" />
          <figcaption><span className="figref">Fig. 1</span> &nbsp; Two parallel streams. Red extracts pre-event imagery from Street View and infers attributes (story count, material, elevation). Blue detects the same building in post-event reconnaissance and infers damage state. They meet at the output.</figcaption>
        </figure>
        <figure>
          <img src="/figures/pre-post-streetview-pairs.jpg" alt="" loading="lazy" />
          <figcaption><span className="figref">Pre/post pairs</span> &nbsp; Same buildings, before and after. Left: post-disaster reconnaissance frames. Right: the pre-disaster Google Street View imagery retrieved automatically by the pipeline.</figcaption>
        </figure>
        <figure>
          <img src="/figures/fusion-pre-stream.png" alt="" loading="lazy" />
          <figcaption><span className="figref">Fig. 6</span> &nbsp; The pre-event stream in detail. Multi-view fusion across n panoramas: per-image attribute classifier outputs are fused into a single posterior. The move that makes it robust to occlusion / glare / wrong-building frames.</figcaption>
        </figure>
        <figure>
          <img src="/figures/fusion-post-stream.jpg" alt="" loading="lazy" />
          <figcaption><span className="figref">Fig. 7</span> &nbsp; The post-event stream in detail. Overview classifier filters out close-ups; per-image damage classifier emits a probability; information fusion produces a final decision: ND / MD / NMD.</figcaption>
        </figure>
      </>
    ),
  },
  {
    id: "panorama",
    meta: "CACAIE · 2019",
    role: "first",
    title: "Automated building image extraction from 360° panoramas",
    teaser: "Panorama-aware detection plus geometric reasoning. The piece that makes pre-event extraction work.",
    thumb: { src: "/figures/panorama-pipeline.jpg", alt: "Panorama pipeline" },
    body: (
      <>
        <p>Panoramas are messy: multiple buildings per frame, occlusions, perspective distortion at the seams. The detector is panorama-aware — it reasons about which face of the sphere corresponds to which side of the street, so the same building doesn&apos;t get detected twice across the seam, and the geometry of the camera position constrains which detections are even plausible.</p>
        <figure>
          <img src="/figures/streetview-data-collection.jpg" alt="" loading="lazy" />
          <figcaption><span className="figref">Data source</span> &nbsp; Street View capture vehicle and a representative spherical panorama, plus an aerial of Belaire Dr after Harvey: each red dot is a 360° image GPS location, the red box is the target building.</figcaption>
        </figure>
        <figure>
          <img src="/figures/panorama-pipeline.jpg" alt="" loading="lazy" />
          <figcaption><span className="figref">Fig. 1</span> &nbsp; Twelve-step pipeline. Steps 5–8 are the interesting ones: match 2D features across panoramas, estimate projection matrices, triangulate the building&apos;s 3D location, transform from camera frame to GPS frame.</figcaption>
        </figure>
        <figure>
          <img src="/figures/house-detector-rectilinear.jpg" alt="" loading="lazy" />
          <figcaption><span className="figref">Detector output</span> &nbsp; Once the panorama is reprojected to optimal-angle rectilinear images, a building detector trained on these views localizes the target across all available frames.</figcaption>
        </figure>
      </>
    ),
  },
  {
    id: "industrial-cv",
    meta: "Computer vision · industrial",
    role: "shipped",
    title: "CV on a plant floor that wouldn't stop lying to us",
    teaser: "The model trained beautifully and collapsed in prod. The fix was decision logic, not architecture.",
    body: (
      <>
        <p>An end-to-end computer vision inspection framework across multiple CTQ checkpoints — automated defect detection and station health monitoring. Multi-class object detection models in PyTorch, with operational decision logic and inference thresholds tuned to minimize false positives in high-throughput environments.</p>
        <p>On the data side: a leakage-safe workflow on GCP/GCS + Label Studio, with targeted hard-negative mining to handle the physical-environment constraints (lighting drift, misalignment, class imbalance).</p>
      </>
    ),
  },
  {
    id: "info-fusion-damage",
    meta: "Eng. Structures · 2022",
    role: "co-author",
    title: "Information fusion to classify post-event building damage state",
    teaser: "Per-image probabilities → RC and M lists → iterative thresholding → final damage state.",
    thumb: { src: "/figures/info-fusion-workflow.png", alt: "Info fusion workflow" },
    hidden: true,
    body: (
      <>
        <p>Same problem as the 2020 fusion paper, harder data: the Subject of Interest arrives as <em>a set of images, not one</em>. Per-image classifiers produce class-conditional probabilities for two materials (RC and masonry), then a probability-list filter and an iterative thresholding scheme combine those into a single overall damage state.</p>
        <figure>
          <img src="/figures/info-fusion-workflow.png" alt="" loading="lazy" />
          <figcaption><span className="figref">Fig. 2</span> &nbsp; Three stages: per-image classifier outputs → RC and M probability lists → iterative thresholding criterion (error history converging at K = 0.01).</figcaption>
        </figure>
      </>
    ),
  },
  {
    id: "indoor-localization",
    meta: "MDPI Sensors · 2020",
    role: "co-author",
    title: "Automated indoor image localization for post-event assessment",
    teaser: "Structure-from-Motion plus a 2D projective transform onto the structural drawing.",
    thumb: { src: "/figures/indoor-localization-overview.png", alt: "Indoor localization" },
    hidden: true,
    body: (
      <>
        <p>Indoor images don&apos;t get clean GPS. The pipeline runs Structure-from-Motion across a stream of &ldquo;PathImgs&rdquo; walked through the building to reconstruct a 3D point cloud and recover camera poses, then aligns the SfM frame onto the structural drawing via a 2D projective transform. Once that map exists, every &ldquo;InspImg&rdquo; — the targeted close-up engineers care about — is grounded against a drawing location.</p>
        <figure>
          <img src="/figures/indoor-localization-overview.png" alt="" loading="lazy" />
          <figcaption><span className="figref">Fig. 1</span> &nbsp; Three stages: (a) collect PathImgs and InspImgs, (b) SfM to build a 3D point cloud + camera poses, (c) align onto the drawing via 2D projective transform.</figcaption>
        </figure>
      </>
    ),
  },
];

export default function DetectionPage() {
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
              Detection, classification, and change-detection from imagery — usually with multiple
              modalities or multiple frames — under the constraint that <strong>the data is yours
              to collect</strong> and <strong>the deployment is somewhere the model has never
              seen</strong>.
            </p>
            <p>
              The model is rarely the hard part. What&apos;s hard is everything around it: the
              data pipeline, the alignment of pre/post or multi-view evidence, the calibration of
              class boundaries with asymmetric costs, the operating threshold the system actually
              runs at, and the drift you&apos;ll see in week three of production that wasn&apos;t
              visible in evaluation.
            </p>
            <p>
              A useful way to read the work below: each example is an answer to <em>&ldquo;what
              makes this kind of detection hard in this domain?&rdquo;</em> — hurricane
              reconnaissance answers it differently than plant-floor inspection, but the answers
              fit on the same shelf.
            </p>
          </PillarOverview>
          <PillarLists hard={HARD} approach={APPROACH} />
          <PillarTopics topics={TOPICS} />
          <ExamplesSection examples={EXAMPLES} />
          <FieldGuide content={detectionFieldGuide} />
        </div>
      </section>
      <PillarPageNav prev={prev} next={next} />
    </>
  );
}
