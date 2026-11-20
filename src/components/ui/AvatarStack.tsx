import Image from "next/image";
import type { AvatarItem } from "@/content/site";

interface AvatarStackProps {
  avatars: readonly AvatarItem[];
  size?: "sm" | "md";
  borderTone?: "cream" | "yellow";
  className?: string;
}

const SIZE_CONFIG = {
  sm: { px: 32, wrapper: "h-8 w-8", overlap: "-ml-2 first:ml-0" },
  md: { px: 40, wrapper: "h-10 w-10", overlap: "-ml-2 first:ml-0" },
} as const;

const BORDER_CLASSES = {
  cream: "border-cream",
  yellow: "border-yellow",
} as const;

export function AvatarStack({
  avatars,
  size = "sm",
  borderTone = "cream",
  className = "",
}: AvatarStackProps) {
  const cfg = SIZE_CONFIG[size];

  return (
    <div className={`flex items-center ${className}`}>
      {avatars.map((avatar, index) => (
        <div
          key={avatar.src}
          className={`relative ${cfg.wrapper} ${cfg.overlap} shrink-0 overflow-hidden rounded-full border-2 ${BORDER_CLASSES[borderTone]} bg-primary-soft`}
        >
          <Image
            src={avatar.src}
            alt={index === 0 ? avatar.alt : ""}
            aria-hidden={index > 0 || undefined}
            width={cfg.px}
            height={cfg.px}
            sizes={`${cfg.px}px`}
            className="h-full w-full object-cover"
          />
        </div>
      ))}
    </div>
  );
}
