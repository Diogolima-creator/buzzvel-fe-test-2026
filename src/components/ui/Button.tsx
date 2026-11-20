import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "yellow"
  | "ghost"
  | "ghost-light";

export type ButtonSize = "md" | "sm";

const BASE_CLASSES =
  "inline-flex items-center justify-center gap-2 rounded-[8px] text-[14px] leading-[24px] font-bold transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60";

const VARIANT_CLASSES: Record<ButtonVariant, string> = {
  primary: "bg-primary text-white hover:bg-primary-hover",
  secondary:
    "bg-white text-ink border border-border hover:border-ink/30 hover:bg-cream",
  yellow:
    "bg-yellow text-ink hover:bg-yellow-hover focus-visible:ring-white focus-visible:ring-offset-primary",
  ghost: "bg-transparent text-muted font-normal hover:text-ink",
  "ghost-light":
    "bg-transparent text-white hover:text-yellow focus-visible:ring-white focus-visible:ring-offset-primary",
};

const SIZE_CLASSES: Record<ButtonSize, string> = {
  md: "px-7 py-[14px]",
  sm: "px-5 py-[10px]",
};

type ButtonAsButtonProps = {
  href?: undefined;
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
  className?: string;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children">;

type ButtonAsLinkProps = {
  href: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
  className?: string;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "className" | "children">;

export type ButtonProps = ButtonAsButtonProps | ButtonAsLinkProps;

export function Button({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...rest
}: ButtonProps) {
  const classes = `${BASE_CLASSES} ${VARIANT_CLASSES[variant]} ${SIZE_CLASSES[size]} ${className}`;

  if ("href" in rest && rest.href !== undefined) {
    const { href, ...anchorProps } = rest;
    return (
      <a href={href} className={classes} {...anchorProps}>
        {children}
      </a>
    );
  }

  const buttonProps = rest as Omit<
    ButtonHTMLAttributes<HTMLButtonElement>,
    "className" | "children"
  >;
  return (
    <button type="button" className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
