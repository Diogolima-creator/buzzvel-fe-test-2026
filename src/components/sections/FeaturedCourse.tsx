import Image from "next/image";
import type { SiteDictionary } from "@/i18n/types";
import { enDictionary } from "@/i18n/dictionaries/en";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ArrowRightIcon } from "@/components/ui/Icons";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

interface FeaturedCourseProps {
  content?: SiteDictionary["featuredCourse"];
}

export function FeaturedCourse({
  content = enDictionary.featuredCourse,
}: FeaturedCourseProps) {
  const {
    badge,
    eyebrow,
    heading,
    description,
    instructor,
    detailsAriaLabel,
    metadata,
    primaryCta,
    secondaryCta,
    image,
  } = content;

  return (
    <section
      id="featured-course"
      aria-labelledby="featured-course-heading"
      className="scroll-mt-[70px] bg-primary py-[60px] lg:py-[100px]"
    >
      <Container>
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-[60px]">
          {/* Course photograph with overlapping yellow badge */}
          <Reveal className="relative">
            <div className="relative h-[280px] w-full overflow-hidden rounded-[16px] sm:h-[360px] lg:h-[408px]">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(min-width: 1024px) 538px, (min-width: 640px) 600px, 362px"
                className="object-cover"
              />
            </div>

            <span className="absolute -top-3 -left-3 z-10 inline-block rounded-[6px] bg-yellow px-3 py-[6px] text-[12px] leading-[16px] font-semibold tracking-[1.44px] text-ink uppercase">
              {badge}
            </span>
          </Reveal>

          {/* Course details */}
          <Reveal delayMs={120}>
            <Eyebrow tone="white">{eyebrow}</Eyebrow>

            <SectionHeading
              id="featured-course-heading"
              tone="white"
              className="mt-4"
            >
              {heading}
            </SectionHeading>

            <p className="mt-5 text-[14px] leading-[24px] text-white lg:text-[16px] lg:leading-[28px]">
              {description}
            </p>

            <p className="mt-6 text-[14px] leading-[24px] text-white lg:text-[16px] lg:leading-[28px]">
              {instructor}
            </p>

            <ul
              aria-label={detailsAriaLabel}
              className="mt-6 flex flex-wrap gap-3"
            >
              {metadata.map((item) => (
                <li
                  key={item}
                  className="rounded-[8px] border border-border px-[14px] py-[6px] text-[14px] leading-[24px] text-white"
                >
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button href={primaryCta.href} variant="yellow">
                {primaryCta.label}
              </Button>
              <Button
                href={secondaryCta.href}
                variant="ghost-light"
                className="group px-4"
              >
                {secondaryCta.label}
                <ArrowRightIcon className="h-5 w-5 text-current transition-transform duration-150 group-hover:translate-x-1" />
              </Button>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
