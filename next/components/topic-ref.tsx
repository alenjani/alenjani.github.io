import type { ReactNode } from "react";
import { BrandMark } from "./brand-mark";

export function TopicRef({
  domain,
  children,
}: {
  domain?: string;
  children: ReactNode;
}) {
  return (
    <p className="mt-4 px-4 py-3 border-l-2 border-accent bg-accent-soft text-[14.5px] leading-[1.55] text-ink rounded-r-md flex items-start gap-2.5 [&_a]:text-accent-strong [&_a]:underline [&_a]:underline-offset-[3px] [&_a]:font-medium">
      {domain && (
        <span className="shrink-0 mt-0.5">
          <BrandMark domain={domain} size={18} className="rounded-[3px]" />
        </span>
      )}
      <span>{children}</span>
    </p>
  );
}
