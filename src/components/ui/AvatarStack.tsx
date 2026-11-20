import Image from "next/image";
import type { AvatarItem } from "@/content/site";

interface AvatarStackProps {
  avatars: readonly AvatarItem[];
  size?: "sm" | "md";
  borderTone?: "cream" | "yellow";
  className?: string;
}

const SIZE_CONFIG = {
  sm: {
    px: 32,
    wrapper: "h-8 w-8",
    overlap:
      "-ml-2 first:ml-0 hover:ml-1 first:hover:ml-0 hover:mr-2.5 last:hover:mr-0",
  },
  md: {
    px: 40,
    wrapper: "h-10 w-10",
    overlap:
      "-ml-2 first:ml-0 hover:ml-1.5 first:hover:ml-0 hover:mr-3.5 last:hover:mr-0",
  },
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
          className={`group/avatar relative z-0 ${cfg.wrapper} ${cfg.overlap} shrink-0 cursor-pointer overflow-hidden rounded-full border-2 ${BORDER_CLASSES[borderTone]} bg-primary-soft transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:z-20 hover:-translate-y-0.5 hover:scale-[1.22] hover:shadow-md`}
        >
          <Image
            src={avatar.src}
            alt={index === 0 ? avatar.alt : ""}
            aria-hidden={index > 0 || undefined}
            width={cfg.px}
            height={cfg.px}
            sizes={`${cfg.px * 2}px`}
            className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover/avatar:scale-110"
          />
        </div>
      ))}
    </div>
  );
}
