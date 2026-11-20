"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import {
  getLocalePath,
  LOCALE_META,
  LOCALES,
  type Locale,
} from "@/i18n/config";
import { markSkipNextIntro } from "@/components/layout/BrandIntro";

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
  const [isOpen, setIsOpen] = useState(false);
  const menuId = useId();
  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  const currentMeta = LOCALE_META[locale];

  const closeMenu = useCallback((restoreFocus = false) => {
    setIsOpen(false);
    if (restoreFocus) {
      requestAnimationFrame(() => {
        triggerRef.current?.focus();
      });
    }
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMenu(true);
      }
    };

    const handlePointerDown = (event: MouseEvent | TouchEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        closeMenu(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("touchstart", handlePointerDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("touchstart", handlePointerDown);
    };
  }, [isOpen, closeMenu]);

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      <button
        ref={triggerRef}
        type="button"
        aria-label={`${ariaLabel}: ${currentMeta.label}`}
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-controls={menuId}
        onClick={() => setIsOpen((open) => !open)}
        className="inline-flex h-[34px] items-center gap-1.5 rounded-[8px] border border-border bg-white/90 px-2.5 text-[12px] leading-none font-semibold tracking-[0.04em] text-ink transition-colors hover:border-ink/25 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1"
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 16 16"
          fill="none"
          aria-hidden="true"
          className="shrink-0 text-muted"
        >
          <circle
            cx="8"
            cy="8"
            r="6.25"
            stroke="currentColor"
            strokeWidth="1.3"
          />
          <path
            d="M2.2 8h11.6M8 1.75c1.7 1.7 2.6 3.9 2.6 6.25S9.7 12.55 8 14.25M8 1.75C6.3 3.45 5.4 5.65 5.4 8s.9 4.55 2.6 6.25"
            stroke="currentColor"
            strokeWidth="1.2"
          />
        </svg>
        <span>{currentMeta.code}</span>
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          aria-hidden="true"
          className={`shrink-0 text-muted transition-transform duration-150 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <path
            d="M3 4.5 6 7.5 9 4.5"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {isOpen ? (
        <ul
          id={menuId}
          aria-label={ariaLabel}
          className="absolute right-0 top-full z-50 mt-2 min-w-[168px] rounded-[12px] border border-border bg-white p-1.5 shadow-card"
        >
          {LOCALES.map((item) => {
            const isActive = item === locale;
            const meta = LOCALE_META[item];
            return (
              <li key={item}>
                <Link
                  href={getLocalePath(item)}
                  hrefLang={meta.htmlLang}
                  lang={meta.htmlLang}
                  aria-current={isActive ? "page" : undefined}
                  onClick={() => {
                    if (!isActive) {
                      markSkipNextIntro();
                    }
                    setIsOpen(false);
                  }}
                  className={`flex items-center justify-between gap-3 rounded-[8px] px-2.5 py-2 text-[13px] leading-[18px] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                    isActive
                      ? "bg-cream font-semibold text-ink"
                      : "text-muted hover:bg-cream/70 hover:text-ink"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <span
                      className={`inline-flex w-6 justify-center rounded-[4px] py-0.5 text-[11px] leading-none font-semibold tracking-[0.04em] ${
                        isActive
                          ? "bg-ink text-white"
                          : "bg-cream text-muted"
                      }`}
                    >
                      {meta.code}
                    </span>
                    <span>{meta.label}</span>
                  </span>
                  {isActive ? (
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      aria-hidden="true"
                      className="shrink-0 text-primary"
                    >
                      <path
                        d="M3 7.5 5.75 10.25 11 4.25"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  ) : null}
                </Link>
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
}
