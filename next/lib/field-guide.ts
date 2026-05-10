import type { ReactNode } from "react";

export type ReadingItem = {
  /** Domain for logo.dev brand mark — e.g. "stanford.edu" */
  domain?: string;
  title: string;
  /** Source/year text, e.g. "Stanford, Spring 2025" */
  source: string;
  url: string;
  /** Why-it-matters line, 12-18 words */
  why: string;
};

export type ToolItem = {
  name: string;
  url?: string;
  domain?: string;
  /** Short descriptor, e.g. "defacto detection baseline" */
  note?: string;
};

export type AwesomeItem = {
  name: string;
  url: string;
  note?: string;
};

export type VizItem = {
  /** Display label, e.g. "Meta — SAM 2 demo" */
  source: string;
  domain?: string;
  /** One-line tease of what you'll see */
  what: string;
  url: string;
  /** Optional path to a local thumbnail under /public, e.g. "/figures/refs/det-sam2.jpg" */
  thumb?: string;
};

export type EventItem = {
  name: string;
  url?: string;
  domain?: string;
  /** Display date string, e.g. "Jun 3-7, 2026" */
  date: string;
  /** City + region, e.g. "Denver, CO" or "Bay Area" */
  location: string;
  /** Optional tag: "International" | "Bay Area" | "Online" */
  tag?: string;
};

export type FieldGuideContent = {
  /** Open Questions prose — JSX so we can embed <a>, <em>, <strong> */
  openQuestions: ReactNode;
  /** Date stamp like "May 2026" */
  lastReviewed: string;
  reading: {
    foundational: ReadingItem[];
    industry: ReadingItem[];
    tools: ToolItem[];
    awesome?: AwesomeItem[];
  };
  visualizations: VizItem[];
  /** Upcoming conferences / meetups in the field */
  events?: EventItem[];
};
