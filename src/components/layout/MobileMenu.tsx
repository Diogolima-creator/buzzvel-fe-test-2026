"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import type { NavLink } from "@/i18n/types";
import { Button } from "@/components/ui/Button";
import { CloseIcon, MenuIcon } from "@/components/ui/Icons";

interface MobileMenuProps {
  navLinks: readonly NavLink[];
  loginAction: NavLink;
  primaryAction: NavLink;
  mobileNavAriaLabel?: string;
  openMenuAriaLabel?: string;
  closeMenuAriaLabel?: string;
}

export function MobileMenu({
  navLinks,
  loginAction,
  primaryAction,
  mobileNavAriaLabel = "Mobile navigation",
  openMenuAriaLabel = "Open navigation menu",
  closeMenuAriaLabel = "Close navigation menu",
}: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const panelId = useId();
  const triggerRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

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

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const focusTimer = requestAnimationFrame(() => {
      firstLinkRef.current?.focus();
    });

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMenu(true);
      }
    };

    const mediaQuery =
      typeof window.matchMedia === "function"
        ? window.matchMedia("(min-width: 768px)")
        : null;
    const handleMediaChange = (event: MediaQueryListEvent) => {
      if (event.matches) {
        closeMenu(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    mediaQuery?.addEventListener("change", handleMediaChange);

    return () => {
      cancelAnimationFrame(focusTimer);
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
      mediaQuery?.removeEventListener("change", handleMediaChange);
    };
  }, [isOpen, closeMenu]);

  return (
    <div>
      <button
        ref={triggerRef}
        type="button"
        aria-expanded={isOpen}
        aria-controls={panelId}
        aria-label={isOpen ? closeMenuAriaLabel : openMenuAriaLabel}
        onClick={() => setIsOpen((open) => !open)}
        className="inline-flex h-9 w-9 items-center justify-center rounded-[8px] p-[6px] text-ink transition-colors hover:bg-border/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
      >
        {isOpen ? <CloseIcon /> : <MenuIcon />}
      </button>

      {isOpen ? (
        <>
          <div
            aria-hidden="true"
            onClick={() => closeMenu(false)}
            className="fixed inset-x-0 top-[69px] bottom-0 z-40 bg-ink/25 backdrop-blur-[1px]"
          />
          <nav
            id={panelId}
            aria-label={mobileNavAriaLabel}
            className="fixed inset-x-0 top-[69px] z-50 border-b border-border bg-cream px-5 py-6 shadow-card"
          >
            <ul className="flex flex-col gap-1">
              {navLinks.map((item, index) => (
                <li key={item.label}>
                  <a
                    ref={index === 0 ? firstLinkRef : undefined}
                    href={item.href}
                    onClick={() => closeMenu(false)}
                    className="block rounded-[8px] px-3 py-3 text-[16px] leading-[24px] font-medium text-ink transition-colors hover:bg-white hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-5 flex flex-col gap-3 border-t border-border pt-5">
              <Button
                href={loginAction.href}
                variant="secondary"
                onClick={() => closeMenu(false)}
                className="w-full"
              >
                {loginAction.label}
              </Button>
              <Button
                href={primaryAction.href}
                variant="primary"
                onClick={() => closeMenu(false)}
                className="w-full"
              >
                {primaryAction.label}
              </Button>
            </div>
          </nav>
        </>
      ) : null}
    </div>
  );
}
