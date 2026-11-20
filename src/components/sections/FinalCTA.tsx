import type { SiteDictionary } from "@/i18n/types";
import { enDictionary } from "@/i18n/dictionaries/en";
import { AvatarStack } from "@/components/ui/AvatarStack";
import { Button } from "@/components/ui/Button";
import {
  DecorBoldBIcon,
  DecorBookIcon,
  DecorChatIcon,
  DecorLayersIcon,
  DecorSparkIcon,
} from "@/components/ui/Icons";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

interface FinalCTAProps {
  content?: SiteDictionary["finalCta"];
}

export function FinalCTA({ content = enDictionary.finalCta }: FinalCTAProps) {
  const { avatars, heading, description, primaryCta, secondaryCta } = content;

  return (
    <section
      id="join"
      aria-labelledby="final-cta-heading"
      className="relative overflow-hidden bg-yellow-soft py-[60px] lg:py-[100px]"
    >
      {/* Desktop decorative geometric shapes and icons from Figma */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 mx-auto hidden max-w-[1280px] select-none lg:block"
      >
        <div className="absolute top-[16px] left-[22px] h-[108px] w-[108px] rounded-full border-2 border-peach" />
        <div className="absolute top-[373px] left-[56px] h-[120px] w-[120px] rounded-full bg-peach" />
        <div className="absolute top-[468px] left-[1064px] h-10 w-10 rounded-full bg-peach" />
        <div className="absolute -top-[24px] left-[1168px] h-[115px] w-[115px] -rotate-12 rounded-[8px] bg-peach" />
        <div className="absolute top-[230px] -left-[21px] h-14 w-14 -rotate-12 rounded-[8px] bg-peach" />
        <div className="absolute top-[429px] left-[1208px] h-8 w-8 rounded-full border-2 border-peach" />
        <div className="absolute top-[43px] left-[877px] h-8 w-8 rounded-full border-2 border-peach" />
        <div className="absolute top-[42px] left-[329px] h-14 w-14 -rotate-12 rounded-[8px] border border-peach" />

        <DecorChatIcon className="absolute top-[214px] left-[141px] h-8 w-8" />
        <DecorBoldBIcon className="absolute top-[350px] left-[283px] h-[102px] w-[102px]" />
        <DecorSparkIcon className="absolute top-[82px] left-[1016px] h-[61px] w-[61px]" />
        <DecorLayersIcon className="absolute top-[220px] left-[1120px] h-20 w-20" />
        <DecorBookIcon className="absolute top-[381px] left-[963px] h-12 w-12" />
      </div>

      {/* Centered content */}
      <Reveal className="relative z-10 mx-auto flex max-w-[720px] flex-col items-center px-5 text-center lg:px-8">
        <AvatarStack avatars={avatars} size="md" borderTone="yellow" />

        <SectionHeading id="final-cta-heading" size="large" className="mt-8">
          {heading}
        </SectionHeading>

        <p className="mt-4 text-[16px] leading-[26px] text-muted lg:text-[18px] lg:leading-[28px]">
          {description}
        </p>

        <div className="mt-10 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:justify-center">
          <Button href={primaryCta.href} variant="primary">
            {primaryCta.label}
          </Button>
          <Button href={secondaryCta.href} variant="secondary">
            {secondaryCta.label}
          </Button>
        </div>
      </Reveal>
    </section>
  );
}
