import type { ReactNode } from "react";

export type PillarId = "detection" | "twins" | "recsys";

export type PillarMeta = {
  id: PillarId;
  num: "I" | "II" | "III";
  title: string;
  tag: string;
  slug: string;
  href: string;
  thumb: { src: string; alt: string };
};

export const PILLARS: Record<PillarId, PillarMeta> = {
  detection: {
    id: "detection",
    num: "I",
    title: "Multimodal detection & change detection",
    tag: "Deep-learning systems that fuse imagery and other evidence streams to produce reliable detections, classifications, and risk scores under real-world data constraints.",
    slug: "detection",
    href: "/detection",
    thumb: { src: "/figures/fusion-pipeline.jpg", alt: "Pre/post imagery fusion pipeline" },
  },
  twins: {
    id: "twins",
    num: "II",
    title: "Digital twins & risk-informed decisions",
    tag: "Multi-objective optimization, trade-space analysis, and digital-twin modeling for coupled systems — ranking architectures and design candidates under uncertainty.",
    slug: "twins",
    href: "/twins",
    thumb: { src: "/figures/habitat-architecture.png", alt: "Coupled-system architecture diagram" },
  },
  recsys: {
    id: "recsys",
    num: "III",
    title: "Personalization & ranking in production",
    tag: "Large-scale ranking and retrieval systems plus the evaluation discipline that comes with them — offline/online metric alignment, LLM-based judging, counterfactual simulation.",
    slug: "recsys",
    href: "/recsys",
    thumb: { src: "/figures/two-tower-thumb.svg", alt: "Two-tower retrieval diagram" },
  },
};

export const PILLAR_ORDER: PillarId[] = ["detection", "twins", "recsys"];

export function neighbors(id: PillarId): { prev: PillarMeta; next: PillarMeta } {
  const idx = PILLAR_ORDER.indexOf(id);
  const prev = PILLARS[PILLAR_ORDER[(idx - 1 + PILLAR_ORDER.length) % PILLAR_ORDER.length]];
  const next = PILLARS[PILLAR_ORDER[(idx + 1) % PILLAR_ORDER.length]];
  return { prev, next };
}

export type Topic = {
  id: string;
  num: string;
  title: string;
  body: ReactNode;
};

export type Example = {
  id: string;
  meta: string;
  role: "first" | "co-author" | "shipped";
  title: string;
  teaser: string;
  body: ReactNode;
  thumb?: { src: string; alt: string };
  hidden?: boolean;
};
