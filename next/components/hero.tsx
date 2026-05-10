import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="border-b border-line">
      <div className="mx-auto max-w-[1100px] px-8 py-20 md:py-28 grid md:grid-cols-[1fr_280px] gap-12 items-end">
        <div>
          <div className="eyebrow eyebrow-accent mb-5">
            Senior ML · San Francisco Bay Area
          </div>
          <h1 className="display-h1 text-ink mb-6">Ali Lenjani</h1>
          <p className="text-[20px] md:text-[22px] leading-[1.45] text-muted max-w-[640px] mb-8 [&_strong]:text-ink [&_strong]:font-semibold">
            Production ML where ranking, detection, and decisions have to
            survive real-world data. Three lanes: <strong>visual inspection
            in the wild</strong> across noisy collection pipelines,{" "}
            <strong>digital twins and trade-space modeling</strong> for
            complex coupled systems, and <strong>personalization and
            ranking systems</strong> in production.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="#work"
              className="inline-flex items-center gap-1.5 px-5 h-11 rounded-[8px] bg-ink text-bg font-semibold text-[14.5px] hover:opacity-90 transition-opacity active:translate-y-px"
            >
              See the work →
            </Link>
            <Link
              href="#contact"
              className="inline-flex items-center px-5 h-11 rounded-[8px] border border-line bg-surface text-ink font-semibold text-[14.5px] hover:border-line-strong transition-colors active:translate-y-px"
            >
              Get in touch
            </Link>
          </div>
        </div>
        <div className="relative aspect-square rounded-[18px] overflow-hidden border border-line bg-surface-2 shadow-[var(--shadow-md)] max-w-[280px] order-first md:order-none">
          <Image
            src="/figures/headshot.jpg"
            alt="Ali Lenjani"
            fill
            sizes="(max-width: 768px) 220px, 280px"
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
