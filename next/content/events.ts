import type { EventItem } from "@/lib/field-guide";

// Cross-pillar curated events visible on the home page.
// Edit this list to keep it fresh. Per-pillar event lists live in
// content/<pillar>/field-guide.tsx and stay independent.
export const HOME_EVENTS: EventItem[] = [
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
    name: "ICRA 2026 — robotics + sim-to-real",
    domain: "ieee.org",
    url: "https://2026.ieee-icra.org/",
    date: "Jun 1–5, 2026",
    location: "Vienna, Austria",
    tag: "International",
  },
  {
    name: "CVPR 2026 — computer vision flagship",
    domain: "thecvf.com",
    url: "https://cvpr.thecvf.com/Conferences/2026/Dates",
    date: "Jun 3–7, 2026",
    location: "Denver, CO",
    tag: "International",
  },
  {
    name: "AI Engineer World's Fair",
    domain: "ai.engineer",
    url: "https://www.ai.engineer/worldsfair",
    date: "Jun 29 – Jul 2, 2026",
    location: "San Francisco, CA",
    tag: "Bay Area",
  },
  {
    name: "RecSys 2026 — recommender systems flagship",
    domain: "acm.org",
    url: "https://recsys.acm.org/recsys26/",
    date: "Sep 28 – Oct 2, 2026",
    location: "Minneapolis, MN",
    tag: "International",
  },
];

export const HOME_EVENTS_REVIEWED = "May 2026";
