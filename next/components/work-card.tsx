"use client";

import { useState, type ReactNode } from "react";
import { Plus } from "lucide-react";
import { cn } from "@/lib/cn";
import type { Example } from "@/lib/pillars";

const ROLE_LABEL: Record<Example["role"], string> = {
  first: "First author",
  "co-author": "Co-author",
  shipped: "Shipped",
};

export function WorkCard({ example }: { example: Example }) {
  const [open, setOpen] = useState(false);
  return (
    <details
      className={cn(
        "bg-surface border border-line rounded-[14px] overflow-hidden transition-[border-color,box-shadow] duration-150",
        open && "shadow-[var(--shadow-md)] border-accent col-span-full",
      )}
      open={open}
      onToggle={(e) => setOpen((e.currentTarget as HTMLDetailsElement).open)}
    >
      <summary className="cursor-pointer p-4 flex gap-4 items-start list-none [&::-webkit-details-marker]:hidden">
        {example.thumb ? (
          <div className="shrink-0 w-24 aspect-square rounded-[8px] bg-surface-2 overflow-hidden">
            <img
              src={example.thumb.src}
              alt={example.thumb.alt}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        ) : null}
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2 font-mono text-[11px] uppercase tracking-[0.05em] text-accent mb-1.5">
            <span>{example.meta}</span>
            <span
              className={cn(
                "text-[10px] px-2 py-0.5 rounded-full",
                example.role === "first"
                  ? "bg-accent-soft text-accent-strong"
                  : "bg-surface-2 text-muted",
              )}
            >
              {ROLE_LABEL[example.role]}
            </span>
          </div>
          <div className="text-[17px] font-semibold tracking-tight leading-tight mb-2 text-ink">
            {example.title}
          </div>
          <p className="text-[14.5px] text-muted leading-snug">{example.teaser}</p>
        </div>
        <Plus
          size={16}
          strokeWidth={1.5}
          className={cn(
            "shrink-0 w-7 h-7 p-1.5 rounded-full bg-surface-2 text-muted transition-transform duration-150",
            open && "rotate-45 text-accent",
          )}
        />
      </summary>
      {open && (
        <div className="px-6 pb-6 pt-0 [&_p]:text-[15.5px] [&_p]:leading-[1.65] [&_p]:max-w-[720px] [&_p]:text-muted [&_p+p]:mt-3 [&_em]:text-ink [&_em]:not-italic [&_em]:font-medium [&_figure]:mt-5 [&_figure]:max-w-[760px] [&_figure_img]:w-full [&_figure_img]:border [&_figure_img]:border-line [&_figure_img]:rounded-[10px] [&_figure_img]:bg-surface-2 [&_figcaption]:mt-2.5 [&_figcaption]:text-[12.5px] [&_figcaption]:text-muted [&_figcaption]:leading-snug [&_figcaption]:font-mono [&_.figref]:text-accent">
          {example.body}
        </div>
      )}
    </details>
  );
}
