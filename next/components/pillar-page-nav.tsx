import Link from "next/link";
import type { PillarMeta } from "@/lib/pillars";

export function PillarPageNav({ prev, next }: { prev: PillarMeta; next: PillarMeta }) {
  return (
    <section className="border-t border-line bg-surface mt-12">
      <div className="mx-auto max-w-[1100px] px-8 py-8 grid md:grid-cols-2 gap-4">
        <Link
          href={prev.href}
          className="px-5 py-4 border border-line rounded-[12px] bg-bg flex flex-col gap-1 transition-[border-color,transform] duration-150 hover:border-accent hover:-translate-y-px"
        >
          <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-muted">
            ← Pillar {prev.num}
          </span>
          <span className="text-[15.5px] font-semibold text-ink leading-snug tracking-tight">
            {prev.title}
          </span>
        </Link>
        <Link
          href={next.href}
          className="px-5 py-4 border border-line rounded-[12px] bg-bg flex flex-col gap-1 md:text-right transition-[border-color,transform] duration-150 hover:border-accent hover:-translate-y-px"
        >
          <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-muted">
            Pillar {next.num} →
          </span>
          <span className="text-[15.5px] font-semibold text-ink leading-snug tracking-tight">
            {next.title}
          </span>
        </Link>
        <Link
          href="/"
          className="md:col-span-2 px-5 py-3 border border-line rounded-[12px] bg-surface-2 text-center font-mono text-[11px] uppercase tracking-[0.1em] text-muted hover:text-ink transition-colors"
        >
          ← Back to home
        </Link>
      </div>
    </section>
  );
}
