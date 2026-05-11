import Link from "next/link";
import { BrandMark } from "./brand-mark";
import { HOME_EVENTS, HOME_EVENTS_REVIEWED } from "@/content/events";

export function HomeEvents() {
  if (HOME_EVENTS.length === 0) return null;
  return (
    <section className="border-b border-line py-16 md:py-20">
      <div className="mx-auto max-w-[1100px] px-8">
        <div className="flex flex-wrap items-baseline gap-x-6 gap-y-2 mb-8">
          <div className="eyebrow">Upcoming events</div>
          <p className="text-[14.5px] text-muted max-w-[640px] flex-1">
            Where the field gathers next — international flagships plus the Bay Area meet-ups
            most likely to matter for any of the three pillars.
          </p>
          <span className="font-mono text-[11px] text-muted-2 md:ml-auto">
            Reviewed {HOME_EVENTS_REVIEWED}
          </span>
        </div>
        <ul className="border-t border-line">
          {HOME_EVENTS.map((it, i) => (
            <li key={i} className="border-b border-line">
              <a
                href={it.url}
                target="_blank"
                rel="noopener"
                className="grid grid-cols-[22px_minmax(0,1fr)_auto] gap-4 items-center py-3.5 hover:pl-1 transition-[padding] group"
              >
                <span className="shrink-0">
                  {it.domain ? (
                    <BrandMark domain={it.domain} size={18} className="rounded-[3px]" />
                  ) : (
                    <span className="inline-block w-[18px] h-[18px] rounded-[3px] bg-surface-2" />
                  )}
                </span>
                <div className="min-w-0">
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-0.5">
                    <span className="text-[15px] font-semibold text-ink leading-snug group-hover:text-accent transition-colors">
                      {it.name}
                    </span>
                    {it.tag && (
                      <span className="font-mono text-[10px] uppercase tracking-[0.08em] text-accent shrink-0">
                        {it.tag}
                      </span>
                    )}
                  </div>
                  <div className="text-[13px] text-muted font-mono mt-0.5">
                    {it.date} · {it.location}
                  </div>
                </div>
                <span className="font-mono text-[11px] text-muted-2 shrink-0 group-hover:text-accent transition-colors hidden sm:inline">
                  Visit →
                </span>
              </a>
            </li>
          ))}
        </ul>
        <p className="text-[13px] text-muted mt-5">
          Each pillar deep-dive has its own focused event list —{" "}
          <Link href="/detection#field-guide" className="underline underline-offset-[3px] hover:text-accent">
            Inspection
          </Link>
          {" · "}
          <Link href="/twins#field-guide" className="underline underline-offset-[3px] hover:text-accent">
            Digital twins
          </Link>
          {" · "}
          <Link href="/recsys#field-guide" className="underline underline-offset-[3px] hover:text-accent">
            Recsys
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
