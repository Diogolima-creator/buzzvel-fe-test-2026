import type { ReactNode } from "react";

type EyebrowTone = "primary" | "white" | "muted" | "ink";

interface EyebrowProps {
  children: ReactNode;
  tone?: EyebrowTone;
  className?: string;
}

const TONE_CLASSES: Record<EyebrowTone, string> = {
  primary: "text-primary",
  white: "text-white",
  muted: "text-muted-2",
  ink: "text-ink",
};

export function Eyebrow({
  children,
  tone = "primary",
  className = "",
}: EyebrowProps) {
  return (
    <p
      className={`text-[12px] leading-[16px] font-semibold tracking-[1.44px] uppercase ${TONE_CLASSES[tone]} ${className}`}
    >
      {children}
    </p>
  );
}
