import Image from "next/image";

const ITEMS = [
  {
    href: "https://www.stanford.edu/",
    label: "Stanford University",
    logo: "/logos/stanford.svg",
    sub: "Postdoc",
    height: 22,
  },
  {
    href: "https://www.nasa.gov/",
    label: "NASA",
    logo: "/logos/nasa.svg",
    sub: "Postdoc",
    height: 36,
  },
  {
    href: "https://www.purdue.edu/rethi/",
    label: "Purdue University · RETHi",
    logo: "/logos/purdue.svg",
    sub: "PhD · RETHi",
    height: 30,
  },
];

export function Proofbar() {
  return (
    <section className="border-b border-line bg-surface">
      <div className="mx-auto max-w-[1100px] px-8 py-7 flex flex-wrap items-center gap-x-9 gap-y-4">
        <div className="eyebrow">Previously</div>
        {ITEMS.map((it) => (
          <a
            key={it.href}
            href={it.href}
            target="_blank"
            rel="noopener"
            aria-label={it.label}
            className="inline-flex items-center gap-3 opacity-85 hover:opacity-100 hover:-translate-y-px transition-all"
          >
            <Image
              src={it.logo}
              alt={it.label}
              width={120}
              height={it.height}
              style={{ height: it.height, width: "auto" }}
            />
            <span className="font-mono text-[11px] uppercase tracking-[0.06em] text-muted">
              {it.sub}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
