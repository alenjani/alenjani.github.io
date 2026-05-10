export function PersonJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Ali Lenjani",
    url: "https://alenjani.github.io",
    image: "https://alenjani.github.io/headshot.jpg",
    sameAs: [
      "https://www.linkedin.com/in/ali-lenjani-34791410a/",
      "https://scholar.google.com/citations?user=vVPC7g0AAAAJ&hl=en",
      "https://github.com/alenjani",
    ],
    jobTitle: "Senior ML Engineer",
    knowsAbout: [
      "Recommender systems",
      "Production machine learning",
      "Computer vision",
      "Visual inspection",
      "Multimodal detection",
      "Change detection",
      "Computer vision in the wild",
      "Digital twins",
      "Risk-informed decision-making",
      "Decisions under uncertainty",
      "Trade-space analysis",
      "Counterfactual evaluation",
      "LLM-as-judge evaluation",
    ],
    alumniOf: [
      { "@type": "CollegeOrUniversity", name: "Purdue University" },
      { "@type": "CollegeOrUniversity", name: "Stanford University" },
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function ArticleJsonLd({
  title,
  description,
  url,
}: {
  title: string;
  description: string;
  url: string;
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    author: { "@type": "Person", name: "Ali Lenjani", url: "https://alenjani.github.io" },
    publisher: { "@type": "Person", name: "Ali Lenjani" },
    mainEntityOfPage: url,
    url,
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
