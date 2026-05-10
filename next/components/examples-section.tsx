import type { Example } from "@/lib/pillars";
import { WorkCard } from "./work-card";
import { Plus } from "lucide-react";

export function ExamplesSection({ examples }: { examples: Example[] }) {
  const visible = examples.filter((e) => !e.hidden);
  const hidden = examples.filter((e) => e.hidden);
  return (
    <section className="mt-14 pt-9 border-t border-line">
      <div className="eyebrow mb-5 flex items-center gap-3.5">
        <span>Examples from my work</span>
        <span className="flex-1 h-px bg-line" />
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        {visible.map((e) => (
          <WorkCard key={e.id} example={e} />
        ))}
      </div>
      {hidden.length > 0 && (
        <details className="mt-6 group">
          <summary className="list-none [&::-webkit-details-marker]:hidden cursor-pointer font-mono text-[12px] uppercase tracking-[0.1em] text-muted py-3.5 border-t border-line flex items-center gap-2 hover:text-ink transition-colors group-open:text-ink group-open:border-b group-open:border-line group-open:mb-4">
            <span>More from this pillar ({hidden.length})</span>
            <Plus size={16} strokeWidth={1.5} className="ml-auto transition-transform duration-150 group-open:rotate-45" />
          </summary>
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            {hidden.map((e) => (
              <WorkCard key={e.id} example={e} />
            ))}
          </div>
        </details>
      )}
    </section>
  );
}
