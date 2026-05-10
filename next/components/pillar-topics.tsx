import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "./ui/accordion";
import type { Topic } from "@/lib/pillars";

export function PillarTopics({ topics }: { topics: Topic[] }) {
  return (
    <section className="md:ml-[160px] max-w-[820px] mt-14 pt-9 border-t border-line">
      <div className="eyebrow mb-5">Topics worth understanding</div>
      <Accordion type="multiple" className="border-t border-line">
        {topics.map((t) => (
          <AccordionItem key={t.id} value={t.id}>
            <AccordionTrigger>
              <span className="font-mono text-[11px] text-muted shrink-0 w-8 group-data-[state=open]:text-accent">
                {t.num}
              </span>
              <span className="text-[17px] font-semibold tracking-tight text-ink flex-1 group-data-[state=open]:text-accent">
                {t.title}
              </span>
            </AccordionTrigger>
            <AccordionContent>
              <div className="pl-12 max-w-[760px] text-[15.5px] text-muted leading-[1.65] space-y-3 [&_em]:text-ink [&_em]:not-italic [&_em]:font-medium [&_code]:font-mono [&_code]:text-[0.875em] [&_code]:bg-surface-2 [&_code]:px-[5px] [&_code]:rounded-[3px]">
                {t.body}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
