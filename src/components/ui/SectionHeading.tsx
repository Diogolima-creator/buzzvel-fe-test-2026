import type { ReactNode } from "react";

type HeadingSize = "default" | "large";
type HeadingTone = "ink" | "white";

interface SectionHeadingProps {
  children: ReactNode;
  id?: string;
  size?: HeadingSize;
  tone?: HeadingTone;
  className?: string;
}

const SIZE_CLASSES: Record<HeadingSize, string> = {
  default:
    "text-[32px] leading-[36px] tracking-[-0.8px] lg:text-[48px] lg:leading-[56px] lg:tracking-[-1.2px]",
  large:
    "text-[36px] leading-[40px] tracking-[-0.9px] lg:text-[56px] lg:leading-[64px] lg:tracking-[-1.4px]",
};

const TONE_CLASSES: Record<HeadingTone, string> = {
  ink: "text-ink",
  white: "text-white",
};

export function SectionHeading({
  children,
  id,
  size = "default",
  tone = "ink",
  className = "",
}: SectionHeadingProps) {
  return (
    <h2
      id={id}
      className={`font-display font-extrabold ${SIZE_CLASSES[size]} ${TONE_CLASSES[tone]} ${className}`}
    >
      {children}
    </h2>
  );
}
