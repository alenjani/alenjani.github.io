import type { PillarMeta } from "@/lib/pillars";

export function PillarHeader({ pillar }: { pillar: PillarMeta }) {
  return (
    <header className="grid md:grid-cols-[112px_1fr] gap-6 md:gap-12 items-start mb-8">
      <div className="font-mono text-[64px] md:text-[88px] leading-none font-medium text-accent tracking-tight pt-1">
        {pillar.num}
      </div>
      <div>
        <div className="eyebrow mb-3">Pillar {pillar.num}</div>
        <h1 className="display-h2 text-ink mb-4 max-w-3xl">{pillar.title}</h1>
        <p className="text-[17.5px] leading-snug text-muted max-w-2xl">{pillar.tag}</p>
      </div>
    </header>
  );
}
