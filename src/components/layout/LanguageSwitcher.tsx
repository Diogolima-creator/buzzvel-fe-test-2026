import Link from "next/link";
import {
  getLocalePath,
  LOCALE_META,
  LOCALES,
  type Locale,
} from "@/i18n/config";

interface LanguageSwitcherProps {
  locale: Locale;
  ariaLabel: string;
  className?: string;
}

export function LanguageSwitcher({
  locale,
  ariaLabel,
  className = "",
}: LanguageSwitcherProps) {
  return (
    <div
      role="group"
      aria-label={ariaLabel}
      className={`inline-flex items-center rounded-[8px] border border-border bg-white/85 p-[3px] ${className}`}
    >
      {LOCALES.map((item) => {
        const isActive = item === locale;
        const meta = LOCALE_META[item];
        return (
          <Link
            key={item}
            href={getLocalePath(item)}
            hrefLang={meta.htmlLang}
            lang={meta.htmlLang}
            aria-current={isActive ? "page" : undefined}
            aria-label={meta.label}
            className={`inline-flex h-7 min-w-[30px] items-center justify-center rounded-[5px] px-2 text-[12px] leading-none font-semibold tracking-[0.04em] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1 ${
              isActive
                ? "bg-ink text-white"
                : "text-muted hover:text-ink"
            }`}
          >
            {meta.code}
          </Link>
        );
      })}
    </div>
  );
}
