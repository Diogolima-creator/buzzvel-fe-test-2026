import type { SiteDictionary, StepItem } from "@/i18n/types";
import { enDictionary } from "@/i18n/dictionaries/en";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

function StepBadge({ id }: { id: StepItem["id"] }) {
  if (id === "focus") {
    return (
      <div
        aria-hidden="true"
        className="relative h-14 w-14 rounded-full bg-primary-soft transition-transform duration-300 ease-out hover:scale-105"
      >
        <div className="absolute top-2 left-2 h-6 w-6 rounded-[6px] bg-primary" />
      </div>
    );
  }

  if (id === "experience") {
    return (
      <div
        aria-hidden="true"
        className="relative h-14 w-14 transition-transform duration-300 ease-out hover:scale-105"
      >
        <div className="absolute inset-0 -rotate-12 rounded-[8px] bg-coral/15 md:bg-peach" />
        <div className="absolute top-6 left-6 h-7 w-7 rounded-full bg-coral" />
      </div>
    );
  }

  return (
    <div
      aria-hidden="true"
      className="relative h-14 w-14 rounded-[12px] bg-yellow-soft transition-transform duration-300 ease-out hover:scale-105"
    >
      <div className="absolute top-7 left-2 h-5 w-5 rounded-full bg-yellow-accent" />
    </div>
  );
}

interface HowItWorksProps {
  content?: SiteDictionary["howItWorks"];
}

export function HowItWorks({
  content = enDictionary.howItWorks,
}: HowItWorksProps) {
  const { eyebrow, heading, steps } = content;

  return (
    <section
      id="how-it-works"
      aria-labelledby="how-it-works-heading"
      className="scroll-mt-[70px] bg-cream py-[60px] lg:py-[100px]"
    >
      <Container>
        <Reveal className="text-center">
          <Eyebrow>{eyebrow}</Eyebrow>
          <SectionHeading id="how-it-works-heading" className="mt-4">
            {heading}
          </SectionHeading>
        </Reveal>

        <div className="relative mt-10 lg:mt-20 lg:py-7">
          {/* Horizontal connector line on desktop/tablet — draws left to right */}
          <Reveal
            variant="line-x"
            delayMs={120}
            className="pointer-events-none hidden h-px bg-border md:absolute md:top-[28px] md:left-[52px] md:block md:w-[calc(66.666%+16px)] lg:top-[56px] lg:w-[761px]"
          />

          <ol className="grid grid-cols-1 md:grid-cols-3 md:gap-10 lg:gap-20">
            {steps.map((item, index) => (
              <li
                key={item.id}
                className={`relative ${
                  index < steps.length - 1 ? "pb-[76px] md:pb-0" : ""
                }`}
              >
                <Reveal
                  variant="badge"
                  delayMs={index * 130}
                  className="relative z-10 w-fit"
                >
                  <StepBadge id={item.id} />
                </Reveal>

                <Reveal variant="fade-up" delayMs={index * 130 + 70}>
                  <Eyebrow tone="muted" className="mt-6">
                    {item.step}
                  </Eyebrow>

                  <h3 className="mt-2 font-display text-[20px] leading-[28px] font-bold text-ink lg:leading-[32px]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-[14px] leading-[24px] text-muted lg:text-[16px] lg:leading-[28px]">
                    {item.description}
                  </p>
                </Reveal>

                {/* Mobile vertical connector line between steps */}
                {index < steps.length - 1 ? (
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute bottom-0 left-[28px] h-12 w-px bg-border md:hidden"
                  />
                ) : null}
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
