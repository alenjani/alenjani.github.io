// Edit `content/now.ts` to update what shows here.
import { NOW } from "@/content/now";

export function NowBlock() {
  if (!NOW.line) return null;
  return (
    <section className="border-y border-line bg-surface">
      <div className="mx-auto max-w-[1100px] px-8 py-7 flex flex-col md:flex-row md:flex-wrap md:items-baseline gap-x-6 gap-y-2">
        <div className="eyebrow eyebrow-accent shrink-0">Now</div>
        <p className="text-[15.5px] text-ink leading-snug max-w-[820px] flex-1">
          {NOW.line}
        </p>
        <span className="font-mono text-[11px] text-muted-2 md:ml-auto">
          updated {NOW.updated}
        </span>
      </div>
    </section>
  );
}
