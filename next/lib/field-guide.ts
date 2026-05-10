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
};
