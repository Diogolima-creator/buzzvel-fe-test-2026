import Image from "next/image";
import type { MosaicPhoto, SiteDictionary } from "@/i18n/types";
import { enDictionary } from "@/i18n/dictionaries/en";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

function MosaicTile({
  photo,
  className = "",
}: {
  photo: MosaicPhoto;
  className?: string;
}) {
  return (
    <div
      className={`group relative overflow-hidden rounded-[5px] bg-primary-soft shadow-mosaic lg:rounded-[4px] ${className}`}
    >
      <Image
        src={photo.src}
        alt={photo.alt}
        fill
        sizes="256px"
        className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.05]"
      />
    </div>
  );
}

function PhotoMosaic({
  mosaicColumns,
}: {
  mosaicColumns: readonly (readonly MosaicPhoto[])[];
}) {
  const [col1, col2, col3, col4] = mosaicColumns;

  return (
    <div className="relative mx-auto w-full max-w-[362px] sm:max-w-[440px] lg:mx-0 lg:max-w-[530px]">
      {/* Soft-blue circular backdrop */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 aspect-square w-[91%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-soft lg:w-[94.3%]"
      />

      {/* 4-column staggered photo grid matching Figma proportions */}
      <div className="relative z-10 flex items-center gap-3 lg:gap-4">
        {/* Column 1 */}
        <Reveal
          variant="zoom"
          delayMs={0}
          className="flex flex-[94] flex-col items-end gap-2 pt-12 lg:flex-[138] lg:gap-[13px] lg:pt-16"
        >
          <MosaicTile
            photo={col1[0]}
            className="w-[76.6%] aspect-[72/96] lg:w-[74.6%] lg:aspect-[103/154]"
          />
          <MosaicTile
            photo={col1[1]}
            className="w-full aspect-[94/129] lg:aspect-[138/207]"
          />
        </Reveal>

        {/* Column 2 */}
        <Reveal
          variant="zoom"
          delayMs={90}
          className="flex flex-[72] flex-col gap-2 lg:flex-[103] lg:gap-[13px] lg:pt-[26px]"
        >
          <MosaicTile
            photo={col2[0]}
            className="w-full aspect-[72/106] lg:aspect-[103/170]"
          />
          <MosaicTile
            photo={col2[1]}
            className="w-full aspect-[72/108] lg:aspect-[103/173]"
          />
          <MosaicTile
            photo={col2[2]}
            className="w-full aspect-[72/80] lg:aspect-[103/128]"
          />
        </Reveal>

        {/* Column 3 */}
        <Reveal
          variant="zoom"
          delayMs={180}
          className="flex flex-[72] flex-col gap-2 lg:flex-[103] lg:gap-[13px]"
        >
          <MosaicTile
            photo={col3[0]}
            className="w-full aspect-[72/86] lg:aspect-[103/137]"
          />
          <MosaicTile
            photo={col3[1]}
            className="w-full aspect-[72/86] lg:aspect-[103/138]"
          />
          <MosaicTile
            photo={col3[2]}
            className="w-full aspect-[72/96] lg:aspect-[103/154]"
          />
        </Reveal>

        {/* Column 4 */}
        <Reveal
          variant="zoom"
          delayMs={270}
          className="flex flex-[88] flex-col items-start gap-2 lg:flex-[128] lg:gap-[13px]"
        >
          <MosaicTile
            photo={col4[0]}
            className="w-full aspect-[88/128] lg:aspect-[128/205]"
          />
          <MosaicTile
            photo={col4[1]}
            className="w-[81.8%] aspect-[72/83] lg:w-[80.5%] lg:aspect-[103/132]"
          />
        </Reveal>
      </div>
    </div>
  );
}

interface PeopleProps {
  content?: SiteDictionary["people"];
}

export function People({ content = enDictionary.people }: PeopleProps) {
  const { eyebrow, heading, description, cta, mosaicColumns } = content;

  return (
    <section
      id="people"
      aria-labelledby="people-heading"
      className="scroll-mt-[70px] overflow-x-clip bg-cream py-[60px] lg:py-[100px]"
    >
      <Container>
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-[60px]">
          <Reveal
            variant="slide-right"
            className="flex flex-col items-start gap-6 lg:gap-8"
          >
            <div className="flex flex-col gap-2">
              <Eyebrow>{eyebrow}</Eyebrow>
              <SectionHeading id="people-heading">{heading}</SectionHeading>
            </div>

            <p className="text-[16px] leading-[26px] text-ink lg:text-[18px] lg:leading-[28px] lg:text-muted">
              {description}
            </p>

            <Button href={cta.href} variant="secondary">
              {cta.label}
            </Button>
          </Reveal>

          <div>
            <PhotoMosaic mosaicColumns={mosaicColumns} />
          </div>
        </div>
      </Container>
    </section>
  );
}
