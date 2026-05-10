import { BrandMark } from "./brand-mark";
import type { FieldGuideContent, ReadingItem, ToolItem, AwesomeItem, VizItem } from "@/lib/field-guide";

export function FieldGuide({ content }: { content: FieldGuideContent }) {
  return (
    <section className="mt-16 pt-12 border-t-2 border-line">
      <div className="eyebrow eyebrow-accent mb-2">Field guide</div>
      <p className="text-[15.5px] text-muted leading-snug max-w-[680px] mb-9">
        Open questions in this lane, the strongest reading for going deeper, and external
        visualizations worth a click. Last reviewed {content.lastReviewed}.
      </p>

      <OpenQuestionsBlock>{content.openQuestions}</OpenQuestionsBlock>

      <ReadingListBlock reading={content.reading} />

      <NotableVisualizationsBlock items={content.visualizations} />
    </section>
  );
}

/* ============================================================
   Open questions — prose paragraph in the editorial register
   ============================================================ */
function OpenQuestionsBlock({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-14">
      <h3 className="display-h3 mb-4">Open questions in this lane</h3>
      <div className="max-w-[820px] text-[17px] leading-[1.7] text-ink [&_em]:text-accent [&_em]:not-italic [&_em]:font-medium [&_strong]:font-semibold [&_a]:text-accent [&_a]:underline [&_a]:underline-offset-[3px] [&_a]:decoration-from-font hover:[&_a]:text-accent-strong [&_p+p]:mt-4">
        {children}
      </div>
    </div>
  );
}

/* ============================================================
   Reading list — categorized
   ============================================================ */
function ReadingListBlock({
  reading,
}: {
  reading: FieldGuideContent["reading"];
}) {
  return (
    <div className="mb-14">
      <h3 className="display-h3 mb-6">Reading list</h3>
      <ReadingCategory title="Foundational" items={reading.foundational} />
      <ReadingCategory title="Industry & production" items={reading.industry} />
      <ToolsCategory title="Tools & libraries" items={reading.tools} />
      {reading.awesome && reading.awesome.length > 0 && (
        <AwesomeCategory title="Awesome lists" items={reading.awesome} />
      )}
    </div>
  );
}

function ReadingCategory({ title, items }: { title: string; items: ReadingItem[] }) {
  return (
    <div className="mb-8">
      <h4 className="eyebrow mb-4">{title}</h4>
      <ul className="space-y-4 max-w-[820px]">
        {items.map((it, i) => (
          <li key={i} className="grid grid-cols-[28px_1fr] gap-3 items-baseline">
            <span className="shrink-0 pt-[3px]">
              {it.domain ? (
                <BrandMark domain={it.domain} size={20} className="rounded-[3px]" />
              ) : (
                <span className="inline-block w-5 h-5 rounded-[3px] bg-surface-2" />
              )}
            </span>
            <div className="min-w-0">
              <a
                href={it.url}
                target="_blank"
                rel="noopener"
                className="text-ink font-semibold text-[16px] hover:text-accent transition-colors"
              >
                {it.title}
              </a>{" "}
              <span className="text-muted-2 text-[13.5px] font-mono whitespace-nowrap">· {it.source}</span>
              <p className="text-[14.5px] text-muted leading-snug mt-1">— {it.why}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ToolsCategory({ title, items }: { title: string; items: ToolItem[] }) {
  return (
    <div className="mb-8">
      <h4 className="eyebrow mb-4">{title}</h4>
      <ul className="flex flex-wrap gap-2 max-w-[820px]">
        {items.map((it, i) => (
          <li key={i}>
            {it.url ? (
              <a
                href={it.url}
                target="_blank"
                rel="noopener"
                className="group inline-flex items-center gap-2 px-3 py-2 rounded-[8px] bg-surface border border-line text-[13.5px] hover:border-accent transition-colors"
              >
                {it.domain && <BrandMark domain={it.domain} size={14} className="rounded-[2px]" />}
                <span className="font-semibold text-ink">{it.name}</span>
                {it.note && <span className="text-muted">— {it.note}</span>}
              </a>
            ) : (
              <span className="inline-flex items-center gap-2 px-3 py-2 rounded-[8px] bg-surface border border-line text-[13.5px]">
                {it.domain && <BrandMark domain={it.domain} size={14} className="rounded-[2px]" />}
                <span className="font-semibold text-ink">{it.name}</span>
                {it.note && <span className="text-muted">— {it.note}</span>}
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

function AwesomeCategory({ title, items }: { title: string; items: AwesomeItem[] }) {
  return (
    <div className="mb-2">
      <h4 className="eyebrow mb-4">{title}</h4>
      <ul className="space-y-2 max-w-[820px]">
        {items.map((it, i) => (
          <li key={i} className="text-[14.5px]">
            <a
              href={it.url}
              target="_blank"
              rel="noopener"
              className="text-ink font-semibold hover:text-accent transition-colors"
            >
              {it.name}
            </a>
            {it.note && <span className="text-muted ml-2">— {it.note}</span>}
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ============================================================
   Notable visualizations — list of external explainers
   ============================================================ */
function NotableVisualizationsBlock({ items }: { items: VizItem[] }) {
  return (
    <div className="mb-2">
      <h3 className="display-h3 mb-2">Notable visualizations</h3>
      <p className="text-[15px] text-muted max-w-[680px] mb-6">
        External explainers worth a click — the strongest work in the field doing the explaining
        better than prose could.
      </p>
      <ul className="grid sm:grid-cols-2 gap-4 max-w-[820px]">
        {items.map((it, i) => (
          <li key={i}>
            <a
              href={it.url}
              target="_blank"
              rel="noopener"
              className="group block bg-surface border border-line rounded-[12px] overflow-hidden transition-[border-color,transform] duration-150 hover:border-accent hover:-translate-y-px"
            >
              <div className="aspect-[16/9] bg-surface-2 overflow-hidden">
                {it.thumb ? (
                  /* eslint-disable-next-line @next/next/no-img-element */
                  <img
                    src={it.thumb}
                    alt={it.source}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    {it.domain ? (
                      <BrandMark domain={it.domain} size={48} className="rounded-[6px]" />
                    ) : (
                      <span className="font-mono text-[12px] text-muted-2">no preview</span>
                    )}
                  </div>
                )}
              </div>
              <div className="p-4">
                <div className="flex items-center gap-2 mb-1.5">
                  {it.domain && (
                    <BrandMark domain={it.domain} size={16} className="rounded-[3px]" />
                  )}
                  <span className="text-[13px] font-mono text-muted">
                    {it.domain || "external"}
                  </span>
                  <span className="ml-auto font-mono text-[11px] text-muted-2 group-hover:text-accent transition-colors">
                    Visit →
                  </span>
                </div>
                <div className="text-[15px] font-semibold text-ink group-hover:text-accent transition-colors mb-1.5 leading-snug">
                  {it.source}
                </div>
                <p className="text-[13.5px] text-muted leading-snug">{it.what}</p>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
