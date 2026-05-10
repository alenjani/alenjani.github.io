import Link from "next/link";
import { PILLARS, PILLAR_ORDER } from "@/lib/pillars";

export const metadata = {
  title: "Not found",
  description: "The page you're looking for doesn't exist.",
};

export default function NotFound() {
  return (
    <section className="border-b border-line">
      <div className="mx-auto max-w-[760px] px-8 py-24 md:py-32">
        <div className="eyebrow eyebrow-accent mb-5">404 · Not found</div>
        <h1 className="display-h2 mb-5">This page doesn&apos;t exist.</h1>
        <p className="text-[17.5px] text-muted leading-relaxed mb-9 max-w-[640px]">
          The link you followed may be broken, or the page may have moved. The three pillars
          are still here, though:
        </p>
        <ul className="space-y-3 mb-10">
          {PILLAR_ORDER.map((id) => (
            <li key={id}>
              <Link
                href={PILLARS[id].href}
                className="group inline-flex items-baseline gap-3 text-[17px] hover:text-accent transition-colors"
              >
                <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-muted group-hover:text-accent">
                  Pillar {PILLARS[id].num}
                </span>
                <span className="font-semibold text-ink group-hover:text-accent">
                  {PILLARS[id].title}
                </span>
                <span className="text-accent">→</span>
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href="/"
          className="font-mono text-[12px] uppercase tracking-[0.1em] text-muted hover:text-ink transition-colors"
        >
          ← Back to home
        </Link>
      </div>
    </section>
  );
}
