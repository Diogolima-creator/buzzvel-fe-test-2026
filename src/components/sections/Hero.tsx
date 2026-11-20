import Image from "next/image";
import type { SiteDictionary } from "@/i18n/types";
import { enDictionary } from "@/i18n/dictionaries/en";
import { AvatarStack } from "@/components/ui/AvatarStack";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { StarIcon } from "@/components/ui/Icons";

interface HeroProps {
  content?: SiteDictionary["hero"];
}

export function Hero({ content = enDictionary.hero }: HeroProps) {
  const {
    eyebrow,
    heading,
    description,
    primaryCta,
    secondaryCta,
    socialProofBold,
    socialProofRegular,
    avatars,
    heroImage,
    coursesBadge,
    ratingBadge,
  } = content;

  return (
    <section
      aria-labelledby="hero-heading"
      className="overflow-x-clip bg-cream py-[60px] lg:py-[100px]"
    >
      <Container>
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[minmax(0,560px)_500px] lg:justify-between lg:gap-[60px]">
          {/* Text column (second on mobile/tablet, first on desktop) */}
          <div className="order-2 lg:order-1">
            <Eyebrow>{eyebrow}</Eyebrow>

            <h1
              id="hero-heading"
              className="mt-4 font-display text-[40px] leading-[44px] font-extrabold tracking-[-1px] text-ink lg:text-[64px] lg:leading-[70px] lg:tracking-[-1.6px]"
            >
              {heading}
            </h1>

            <p className="mt-6 max-w-[480px] text-[16px] leading-[26px] text-muted lg:text-[18px] lg:leading-[28px]">
              {description}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href={primaryCta.href} variant="primary">
                {primaryCta.label}
              </Button>
              <Button href={secondaryCta.href} variant="secondary">
                {secondaryCta.label}
              </Button>
            </div>

            <div className="mt-8 flex items-center justify-center gap-3 lg:justify-start">
              <AvatarStack avatars={avatars} size="sm" borderTone="cream" />
              <p className="text-[14px] leading-[24px]">
                <strong className="font-bold text-ink">{socialProofBold}</strong>{" "}
                <span className="text-muted">{socialProofRegular}</span>
              </p>
            </div>
          </div>

          {/* Visual column (first on mobile/tablet, second on desktop) */}
          <div className="order-1 mx-auto w-full max-w-[362px] lg:order-2 lg:mx-0 lg:max-w-[500px]">
            <div className="relative h-[380px] w-full lg:h-[520px]">
              {/* Decorative peach rounded rectangle */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute top-6 left-[101px] h-[342px] w-[272px] rounded-[16px] bg-peach lg:left-[450px] lg:h-[468px] lg:w-[89px]"
              />

              {/* Decorative soft-blue circle */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute top-[304px] -left-[10px] h-16 w-16 rounded-full bg-primary-soft lg:top-[403px] lg:-left-[45px] lg:h-[106px] lg:w-[106px]"
              />

              {/* Main hero photograph */}
              <div className="relative z-10 mx-2 h-[380px] overflow-hidden rounded-[16px] bg-primary-soft lg:mx-0 lg:h-[520px] lg:w-[500px] lg:rounded-[24px]">
                <Image
                  src={heroImage.src}
                  alt={heroImage.alt}
                  fill
                  priority
                  sizes="(min-width: 1024px) 500px, 346px"
                  className="object-cover"
                />
              </div>

              {/* Top-left floating badge */}
              <div className="animate-badge-in [animation-delay:180ms] absolute top-[6px] left-0 z-20 flex items-center gap-3 rounded-[12px] bg-white px-4 py-3 shadow-badge lg:top-4 lg:-left-[22px]">
                <span className="inline-flex h-8 min-w-[43px] items-center justify-center rounded-[8px] bg-primary-soft px-1 text-[14px] leading-[24px] font-bold text-primary">
                  {coursesBadge.count}
                </span>
                <span className="text-[14px] leading-[24px] whitespace-nowrap text-ink">
                  {coursesBadge.label}
                </span>
              </div>

              {/* Bottom-right floating rating badge */}
              <div className="animate-badge-in [animation-delay:320ms] absolute top-[297px] right-[-11px] z-20 flex items-center gap-2 rounded-[12px] bg-white px-4 py-3 shadow-badge lg:top-[437px] lg:right-auto lg:left-[348px]">
                <div aria-hidden="true" className="flex items-center gap-[2px]">
                  {Array.from({ length: ratingBadge.stars }).map((_, index) => (
                    <StarIcon key={index} />
                  ))}
                </div>
                <span className="text-[14px] leading-[24px] whitespace-nowrap text-ink">
                  {ratingBadge.label}
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
