import { Hero } from "@/components/hero";
import { Proofbar } from "@/components/proofbar";
import { NowBlock } from "@/components/now-block";
import { PillarCardPreview } from "@/components/pillar-card-preview";
import { HomeEvents } from "@/components/home-events";
import { EmailCopy } from "@/components/email-copy";
import { PILLARS, PILLAR_ORDER } from "@/lib/pillars";

export default function Home() {
  return (
    <>
      <Hero />
      <Proofbar />
      <NowBlock />

      <section id="work" className="border-b border-line">
        <div className="mx-auto max-w-[1100px] px-8 py-20">
          <div className="eyebrow mb-7">Work — three pillars</div>
          <div className="grid md:grid-cols-3 gap-5">
            {PILLAR_ORDER.map((id) => (
              <PillarCardPreview key={id} pillar={PILLARS[id]} />
            ))}
          </div>
        </div>
      </section>

      <HomeEvents />

      <section className="py-6">
        <div className="mx-auto max-w-[1100px] px-8">
          <p className="text-[14px] text-muted">
            Complete publication list on{" "}
            <a
              href="https://scholar.google.com/citations?user=vVPC7g0AAAAJ&hl=en"
              target="_blank"
              rel="noopener"
              className="text-accent underline underline-offset-[3px] hover:text-accent-strong"
            >
              Google Scholar
            </a>
            .
          </p>
        </div>
      </section>

      <section id="about" className="border-t border-line py-20">
        <div className="mx-auto max-w-[760px] px-8">
          <h2 className="font-mono text-[14px] font-bold uppercase tracking-[0.14em] text-ink mb-8">About</h2>
          <div className="space-y-5 text-[17.5px] leading-[1.7] text-muted [&_strong]:text-ink [&_strong]:font-semibold">
            <p>
              Mechanical engineer who took a left turn into ML and never went back. PhD at Purdue
              on decision-making under uncertainty in physical systems, then postdocs at{" "}
              <strong>Stanford</strong> on multimodal ML for global health, and{" "}
              <strong>NASA STRI / Purdue (RETHi)</strong> on a space-habitat digital twin.
              Different domains, same job: build something that has to make a fast decision on
              real data without any of the inputs being clean.
            </p>
            <p>
              The unifying posture across the three lanes: treat the model as one component of a
              system, not as the system. The data pipeline, the decision logic, the calibration
              of operating points, the gap between offline metrics and online behavior — that&apos;s
              where production ML lives or dies. Based in the SF Bay Area.
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="border-t border-line py-20">
        <div className="mx-auto max-w-[760px] px-8">
          <div className="bg-surface border border-line rounded-[16px] p-12 text-center">
            <h2 className="display-h3 text-ink mb-2.5">Get in touch</h2>
            <p className="text-[16px] text-muted max-w-[540px] mx-auto mb-6">
              Happy to talk recsys, evaluation, simulation — or anything in this neighborhood.
            </p>
            <EmailCopy />
          </div>
        </div>
      </section>
    </>
  );
}
