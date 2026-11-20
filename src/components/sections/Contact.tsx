import type { SiteDictionary } from "@/i18n/types";
import { enDictionary } from "@/i18n/dictionaries/en";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ChatIcon, ClockIcon } from "@/components/ui/Icons";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactForm } from "@/components/sections/ContactForm";

interface ContactProps {
  content?: SiteDictionary["contact"];
}

export function Contact({ content = enDictionary.contact }: ContactProps) {
  const {
    eyebrow,
    heading,
    description,
    emailLabel,
    emailAddress,
    responseLabel,
    responseDetail,
  } = content;

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="scroll-mt-[70px] overflow-x-clip bg-white py-[60px] lg:py-[100px]"
    >
      <Container>
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
          {/* Info column */}
          <div className="flex flex-col gap-8 lg:w-[480px] lg:gap-10">
            <Reveal variant="slide-right" className="flex flex-col gap-4">
              <Eyebrow>{eyebrow}</Eyebrow>
              <SectionHeading id="contact-heading">{heading}</SectionHeading>
              <p className="text-[14px] leading-[24px] text-muted lg:text-[18px] lg:leading-[28px]">
                {description}
              </p>
            </Reveal>

            <div className="flex flex-col gap-4">
              <Reveal variant="card" delayMs={110}>
                <div className="flex items-center gap-4 rounded-[12px] bg-cream p-4 lg:p-5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[8px] bg-primary-soft text-primary">
                    <ChatIcon className="h-6 w-6" />
                  </div>
                  <div className="flex flex-col gap-[2px] lg:gap-1">
                    <p className="text-[14px] leading-[24px] text-ink">
                      {emailLabel}
                    </p>
                    <a
                      href={`mailto:${emailAddress}`}
                      className="w-fit rounded-[4px] text-[14px] leading-[24px] text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                    >
                      {emailAddress}
                    </a>
                  </div>
                </div>
              </Reveal>

              <Reveal variant="card" delayMs={200}>
                <div className="flex items-center gap-4 rounded-[12px] bg-cream p-4 lg:p-5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[8px] bg-primary-soft text-primary">
                    <ClockIcon className="h-5 w-5" />
                  </div>
                  <div className="flex flex-col gap-[2px] lg:gap-1">
                    <p className="text-[14px] leading-[24px] text-ink">
                      {responseLabel}
                    </p>
                    <p className="text-[14px] leading-[24px] text-muted-2">
                      {responseDetail}
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>

          {/* Interactive form card */}
          <Reveal
            variant="card"
            delayMs={150}
            className="w-full lg:w-[540px] lg:shrink-0"
          >
            <ContactForm content={content} />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
