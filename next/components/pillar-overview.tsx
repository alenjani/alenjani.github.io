import type { ReactNode } from "react";

export function PillarOverview({ children }: { children: ReactNode }) {
  return (
    <div className="md:ml-[160px] max-w-[820px] space-y-4 [&>p]:text-[18px] [&>p]:text-ink [&>p]:leading-[1.6] [&_em]:text-accent [&_em]:not-italic [&_em]:font-medium [&_strong]:text-ink [&_strong]:font-semibold">
      {children}
    </div>
  );
}
