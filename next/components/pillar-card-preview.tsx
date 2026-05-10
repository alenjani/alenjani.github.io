import Link from "next/link";
import Image from "next/image";
import type { PillarMeta } from "@/lib/pillars";

export function PillarCardPreview({ pillar }: { pillar: PillarMeta }) {
  return (
    <Link
      href={pillar.href}
      className="group flex flex-col bg-surface border border-line rounded-[14px] overflow-hidden transition-[transform,box-shadow,border-color] duration-150 hover:-translate-y-1 hover:shadow-[var(--shadow-md)] hover:border-accent"
    >
      <div className="aspect-[16/10] bg-surface-2 border-b border-line overflow-hidden flex items-center justify-center">
        {pillar.thumb.src.endsWith(".svg") ? (
          <object data={pillar.thumb.src} type="image/svg+xml" className="w-full h-full" aria-label={pillar.thumb.alt}>
            <Image src={pillar.thumb.src} alt={pillar.thumb.alt} width={480} height={300} className="w-full h-full object-cover" />
          </object>
        ) : (
          <Image src={pillar.thumb.src} alt={pillar.thumb.alt} width={480} height={300} className="w-full h-full object-cover" />
        )}
      </div>
      <div className="p-6 flex flex-col gap-2.5 flex-1">
        <div className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent font-semibold">
          Pillar {pillar.num}
        </div>
        <div className="display-h3 text-ink">{pillar.title}</div>
        <p className="text-[14px] text-muted leading-[1.55]">{pillar.tag}</p>
        <span className="mt-auto pt-3 font-mono text-[12px] tracking-[0.05em] text-accent font-medium inline-flex items-center gap-1.5 group-hover:gap-2 transition-[gap]">
          Read deep-dive <span className="transition-transform group-hover:translate-x-0.5">→</span>
        </span>
      </div>
    </Link>
  );
}
