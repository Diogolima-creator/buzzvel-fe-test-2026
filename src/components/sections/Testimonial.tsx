import Image from "next/image";
import type { SiteDictionary } from "@/i18n/types";
import { enDictionary } from "@/i18n/dictionaries/en";
import { Container } from "@/components/ui/Container";
import { QuoteIcon } from "@/components/ui/Icons";
import { Reveal } from "@/components/ui/Reveal";

interface TestimonialProps {
  content?: SiteDictionary["testimonial"];
}

export function Testimonial({
  content = enDictionary.testimonial,
}: TestimonialProps) {
  const { sectionAriaLabel, quote, author, stats } = content;

  return (
    <section
      id="testimonial"
      aria-label={sectionAriaLabel}
      className="scroll-mt-[70px] bg-white py-[60px] lg:py-[100px]"
    >
      <Container>
        <div className="flex flex-col gap-[60px] lg:flex-row lg:items-center lg:justify-between">
          {/* Quote column */}
          <Reveal className="lg:max-w-[600px]">
            <figure>
              <QuoteIcon className="h-[22px] w-[24px] text-primary" />

              <blockquote className="mt-4 font-display text-[20px] leading-[32px] font-semibold text-ink lg:text-[30px] lg:leading-[44px] lg:tracking-[-0.75px]">
                {quote}
              </blockquote>

              <figcaption className="mt-8 flex items-center gap-4">
                <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full bg-primary-soft">
                  <Image
                    src={author.avatarSrc}
                    alt={author.avatarAlt}
                    width={48}
                    height={48}
                    sizes="48px"
                    className="h-full w-full object-cover"
                  />
                </div>

                <div>
                  <p className="text-[16px] leading-[26px] font-bold text-ink lg:leading-[28px]">
                    {author.name}
                  </p>
                  <p className="text-[14px] leading-[24px] text-muted">
                    {author.role}
                  </p>
                </div>
              </figcaption>
            </figure>
          </Reveal>

          {/* Metrics column */}
          <Reveal delayMs={140} className="lg:w-[401px] lg:shrink-0">
            <dl className="grid grid-cols-3 gap-4 lg:flex lg:flex-col lg:gap-5 lg:border-l lg:border-border lg:pl-12">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="font-display text-[40px] leading-[44px] font-extrabold tracking-[-1px] text-primary lg:text-[64px] lg:leading-[70px] lg:tracking-[-1.6px]">
                    {stat.value}
                  </dd>
                  <p
                    aria-hidden="true"
                    className="mt-1 text-[14px] leading-[24px] text-muted-2"
                  >
                    {stat.label}
                  </p>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
