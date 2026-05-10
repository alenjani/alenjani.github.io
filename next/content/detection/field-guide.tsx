import type { FieldGuideContent } from "@/lib/field-guide";

export const detectionFieldGuide: FieldGuideContent = {
  lastReviewed: "May 2026",

  openQuestions: (
    <>
      <p>
        Foundation models are starting to displace bespoke detection pipelines in industrial
        inspection — <em>SAM 2</em>, <em>DINOv3</em>, and <em>Florence-2</em> are showing up in
        production deployments where data was historically the blocker. Roboflow&apos;s 2025 trends
        report finds <strong>43% of enterprise CV models train on under 1,000 images</strong>, with
        most accepting ~80% accuracy in deployment as a deliberate trade-off. The CVPR 2025
        anomaly-detection track shifted heavily toward zero-shot reasoning with multimodal LLMs
        and synthetic-defect generation via diffusion — both targeting the rare-defect data problem
        that&apos;s been the historical blocker.
      </p>
      <p>
        End-to-end perception is the other inflection: late 2025 saw Waymo move from per-task
        heads to a single foundation model (<em>EMMA</em>), mirroring the trajectory of
        Tesla&apos;s HydraNet. The open question for production teams is no longer
        &ldquo;which architecture&rdquo; but how much of the stack is replaceable by a single
        foundation model with a calibration layer on top.
      </p>
    </>
  ),

  reading: {
    foundational: [
      {
        domain: "stanford.edu",
        title: "Stanford CS231n — Deep Learning for Computer Vision",
        source: "Stanford, Spring 2025",
        url: "https://cs231n.github.io/",
        why:
          "The canonical entry point. Free notes, lectures on YouTube. Fei-Fei Li / Justin Johnson / Serena Yeung.",
      },
      {
        domain: "distill.pub",
        title: "Feature Visualization",
        source: "Distill.pub · Olah et al., 2017",
        url: "https://distill.pub/2017/feature-visualization/",
        why:
          "Still the cleanest explainer of what convnets actually see. The mental model that grounds everything downstream.",
      },
      {
        domain: "springer.com",
        title: "A survey of deep learning for industrial visual anomaly detection",
        source: "Springer AI Review, 2025",
        url: "https://link.springer.com/article/10.1007/s10462-025-11287-7",
        why:
          "Comprehensive lit review for industrial AD — the document you'd send a new hire onboarding.",
      },
      {
        domain: "arxiv.org",
        title: "The Many Faces of Robustness",
        source: "Hendrycks et al., ICCV 2021",
        url: "https://arxiv.org/abs/2006.16241",
        why:
          "Foundational analysis of why image classifiers fail under distribution shift. The 'in the wild' problem named.",
      },
      {
        domain: "arxiv.org",
        title: "DINOv3 — self-supervised vision for label-scarce domains",
        source: "Meta AI, arXiv 2508.10104",
        url: "https://arxiv.org/abs/2508.10104",
        why:
          "Vision foundation model designed for the long tail; explicitly targets industrial inspection and satellite/medical imagery.",
      },
    ],

    industry: [
      {
        domain: "roboflow.com",
        title: "2025 Vision AI Trends Report",
        source: "Roboflow",
        url: "https://blog.roboflow.com/vision-ai-trends/",
        why:
          "The best public data on what enterprise CV deployment actually looks like; demolishes the 'you need millions of labels' myth.",
      },
      {
        domain: "voxel51.com",
        title: "Deploying Computer Vision in Manufacturing — real-world lessons",
        source: "Voxel51 (FiftyOne) blog",
        url: "https://voxel51.com/blog/deploy-computer-vision-in-manufacturing",
        why:
          "Practitioner deep-dive on data curation, edge-case mining, and human-in-the-loop design from teams that ship.",
      },
      {
        domain: "tesla.com",
        title: "Computer Vision at Tesla — HydraNet & beyond",
        source: "Comet blog summary of Tesla AI Day",
        url: "https://www.comet.com/site/blog/computer-vision-at-tesla/",
        why:
          "The canonical reference for multi-task perception at production scale; the 'neural-net replaces 300K LoC' story.",
      },
      {
        domain: "waymo.com",
        title: "Waymo on EMMA and VLM-based perception",
        source: "Late 2025 talks + Understanding AI analysis",
        url: "https://www.understandingai.org/p/waymo-and-teslas-self-driving-systems",
        why:
          "Public discussion of Waymo's late-2025 shift to end-to-end foundation models for perception; complements the Tesla writeup.",
      },
    ],

    tools: [
      { name: "Ultralytics YOLO", url: "https://github.com/ultralytics/ultralytics", domain: "ultralytics.com", note: "defacto detection baseline" },
      { name: "Segment Anything 2", url: "https://github.com/facebookresearch/sam2", domain: "meta.com", note: "promptable, video-aware" },
      { name: "Grounded-SAM-2", url: "https://github.com/IDEA-Research/Grounded-SAM-2", domain: "github.com", note: "DINO + Florence-2 + SAM 2 pipeline" },
      { name: "FiftyOne", url: "https://github.com/voxel51/fiftyone", domain: "voxel51.com", note: "dataset visualization & curation" },
      { name: "Albumentations", url: "https://albumentations.ai/", domain: "albumentations.ai", note: "image augmentation" },
      { name: "Roboflow Universe", url: "https://universe.roboflow.com/", domain: "roboflow.com", note: "datasets in production conditions" },
    ],

    awesome: [
      {
        name: "awesome-industrial-anomaly-detection",
        url: "https://github.com/M-3LAB/awesome-industrial-anomaly-detection",
        note: "papers + datasets, regularly updated",
      },
      {
        name: "awesome-vision-models",
        url: "https://github.com/umitkacar/awesome-vision-models",
        note: "SAM, ViT, CLIP, DINOv2 and friends",
      },
    ],
  },

  visualizations: [
    {
      source: "Meta — SAM 2 interactive demo",
      domain: "meta.com",
      what: "Promptable segmentation across image and video — point, click, watch the mask track.",
      url: "https://sam2.metademolab.com/",
    },
    {
      source: "Distill.pub — Feature Visualization",
      domain: "distill.pub",
      what: "Interactive convnet activations; what the network is actually looking at, layer by layer.",
      url: "https://distill.pub/2017/feature-visualization/",
    },
    {
      source: "DINOv2 attention maps",
      domain: "meta.com",
      what: "Self-supervised attention overlays — emergent object segmentation without any labels.",
      url: "https://dinov2.metademolab.com/",
    },
    {
      source: "Karpathy — CS231n convnet visualizations",
      domain: "stanford.edu",
      what: "Multi-layer activation heatmaps from the canonical CV course.",
      url: "https://cs231n.github.io/understanding-cnn/",
    },
    {
      source: "Tesla AI Day — HydraNet perception",
      domain: "tesla.com",
      what: "Multi-task perception: depth, lanes, traffic, occupancy emerging in one frame, real-time.",
      url: "https://www.youtube.com/watch?v=j0z4FweCy4M",
    },
  ],
};
