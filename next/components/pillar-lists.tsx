import type { ReactNode } from "react";

export type ListItem = {
  bold: string;
  rest: string;
};

export function PillarLists({
  hard,
  approach,
}: {
  hard: ListItem[];
  approach: ListItem[];
}) {
  return (
    <div className="md:ml-[160px] max-w-[820px] mt-9 pt-7 border-t border-line grid md:grid-cols-2 gap-8">
      <PillarList title="What's hard" items={hard} />
      <PillarList title="What I focus on" items={approach} />
    </div>
  );
}

function PillarList({ title, items }: { title: string; items: ListItem[] }) {
  return (
    <div>
      <h4 className="eyebrow eyebrow-accent mb-4">{title}</h4>
      <ol className="list-none p-0 [counter-reset:pl]">
        {items.map((it, i) => (
          <li
            key={i}
            className="relative pl-8 py-2.5 text-[15px] leading-[1.55] text-muted border-b border-line last:border-b-0 [counter-increment:pl] before:content-[counter(pl,decimal-leading-zero)] before:absolute before:left-0 before:top-3 before:font-mono before:text-[11px] before:text-accent before:font-semibold"
          >
            <strong className="text-ink font-semibold">{it.bold}</strong> {it.rest}
          </li>
        ))}
      </ol>
    </div>
  );
}
