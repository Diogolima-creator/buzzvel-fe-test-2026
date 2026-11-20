"use client";

import { useEffect, useRef, useState } from "react";
import type { IntroContent } from "@/i18n/types";
import { enDictionary } from "@/i18n/dictionaries/en";
import { LumaLogo } from "@/components/ui/Icons";

export const INTRO_SKIP_STORAGE_KEY = "luma:skip-next-intro";
export const INTRO_OPENING_EVENT = "luma:intro-opening";

const MIN_VISIBLE_MS = 420;
const MAX_VISIBLE_MS = 1200;
const CURTAIN_DURATION_MS = 480;

declare global {
  interface Window {
    __lumaOpenIntro?: () => void;
  }
}

let consumedSkipHref: string | null = null;

export function markSkipNextIntro(): void {
  try {
    window.sessionStorage.setItem(INTRO_SKIP_STORAGE_KEY, "1");
  } catch {
    // Ignore storage failures in restricted contexts.
  }
}

export function shouldShowIntro(): boolean {
  if (typeof window === "undefined") return false;
  if (window.location.hash) return false;
  if (
    typeof window.matchMedia === "function" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  ) {
    return false;
  }
  return true;
}

function consumeSkipNextIntro(): boolean {
  if (typeof window === "undefined") return false;
  const href = window.location.href;
  if (consumedSkipHref === href) return true;
  try {
    if (window.sessionStorage.getItem(INTRO_SKIP_STORAGE_KEY) === "1") {
      window.sessionStorage.removeItem(INTRO_SKIP_STORAGE_KEY);
      consumedSkipHref = href;
      return true;
    }
  } catch {
    // Ignore storage failures.
  }
  return false;
}

interface BrandIntroProps {
  content?: IntroContent;
}

export function BrandIntro({ content = enDictionary.intro }: BrandIntroProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const triggerOpenRef = useRef<(() => void) | null>(null);
  const [phase, setPhase] = useState<"active" | "opening" | "done">("active");

  useEffect(() => {
    const root = document.documentElement;
    let cancelled = false;

    if (
      root.dataset.intro === "done" ||
      !shouldShowIntro() ||
      consumeSkipNextIntro()
    ) {
      if (root.dataset.intro !== "done") {
        delete root.dataset.intro;
      }
      queueMicrotask(() => {
        if (!cancelled) {
          setPhase("done");
        }
      });
      return () => {
        cancelled = true;
      };
    }

    let exitTimer: ReturnType<typeof setTimeout> | undefined;
    const previousOverflow = root.style.overflow;

    const reducedMotionQuery =
      typeof window.matchMedia === "function"
        ? window.matchMedia("(prefers-reduced-motion: reduce)")
        : null;

    const finishAfterCurtain = (restoreFocus: boolean) => {
      const waitMs = reducedMotionQuery?.matches ? 0 : CURTAIN_DURATION_MS;
      exitTimer = setTimeout(() => {
        if (cancelled) return;
        root.dataset.intro = "done";
        root.style.overflow = previousOverflow;
        setPhase("done");
        if (restoreFocus) {
          requestAnimationFrame(() => {
            document
              .querySelector<HTMLElement>('header a[href="#"]')
              ?.focus({ preventScroll: true });
          });
        }
      }, waitMs);
    };

    // If the pre-hydration bootstrap already started opening the curtains,
    // sync React state and unmount once the curtain split finishes.
    if (root.dataset.intro === "opening") {
      queueMicrotask(() => {
        if (!cancelled) {
          setPhase("opening");
        }
      });
      finishAfterCurtain(false);
      return () => {
        cancelled = true;
        if (exitTimer) clearTimeout(exitTimer);
        root.style.overflow = previousOverflow;
      };
    }

    root.dataset.intro = "active";
    root.style.overflow = "hidden";

    let opening = false;
    let minTimer: ReturnType<typeof setTimeout> | undefined;
    let maxTimer: ReturnType<typeof setTimeout> | undefined;

    const syncOpening = () => {
      if (cancelled || opening) return;
      opening = true;

      const restoreFocus = Boolean(
        panelRef.current?.contains(document.activeElement),
      );

      root.dataset.intro = "opening";
      setPhase("opening");
      finishAfterCurtain(restoreFocus);
    };

    const open = () => {
      if (cancelled || opening) return;
      if (typeof window.__lumaOpenIntro === "function") {
        window.__lumaOpenIntro();
        syncOpening();
        return;
      }
      syncOpening();
      window.dispatchEvent(new CustomEvent(INTRO_OPENING_EVENT));
    };

    triggerOpenRef.current = open;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        open();
      }
    };

    const handlePreferenceChange = () => {
      if (reducedMotionQuery?.matches) {
        open();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener(INTRO_OPENING_EVENT, syncOpening, { once: true });
    reducedMotionQuery?.addEventListener?.("change", handlePreferenceChange);

    // When the inline pre-hydration bootstrap script is present, it owns the
    // reveal schedule so LCP/Speed Index never wait on JS hydration.
    if (typeof window.__lumaOpenIntro !== "function") {
      const startedAt = performance.now();
      maxTimer = setTimeout(open, MAX_VISIBLE_MS);

      const heroImg = document.querySelector<HTMLImageElement>(
        "[data-hero-image] img",
      );
      const heroReady =
        typeof heroImg?.decode === "function"
          ? heroImg.decode().catch(() => undefined)
          : Promise.resolve();
      const fontsReady =
        document.fonts?.ready?.catch(() => undefined) ?? Promise.resolve();

      Promise.allSettled([heroReady, fontsReady]).then(() => {
        if (cancelled || opening) return;
        const elapsed = performance.now() - startedAt;
        const remaining = Math.max(0, MIN_VISIBLE_MS - elapsed);
        minTimer = setTimeout(open, remaining);
      });
    }

    return () => {
      cancelled = true;
      if (maxTimer) clearTimeout(maxTimer);
      if (minTimer) clearTimeout(minTimer);
      if (exitTimer) clearTimeout(exitTimer);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener(INTRO_OPENING_EVENT, syncOpening);
      reducedMotionQuery?.removeEventListener?.(
        "change",
        handlePreferenceChange,
      );
      root.style.overflow = previousOverflow;
    };
  }, []);

  if (phase === "done") {
    return null;
  }

  return (
    <div
      ref={panelRef}
      className="luma-intro"
      data-intro-phase={phase}
      role="dialog"
      aria-modal="true"
      aria-label={content.ariaLabel}
    >
      <div
        aria-hidden="true"
        className="luma-intro-curtain luma-intro-curtain-left"
      />
      <div
        aria-hidden="true"
        className="luma-intro-curtain luma-intro-curtain-right"
      />

      <div className="luma-intro-content">
        <div className="luma-intro-logo">
          <LumaLogo
            accentDot
            dotClassName="luma-intro-dot"
            className="h-[38px] w-auto text-ink sm:h-[46px]"
          />
        </div>
        <span aria-hidden="true" className="luma-intro-rule" />
        <p className="luma-intro-tagline">{content.tagline}</p>
      </div>

      <button
        type="button"
        className="luma-intro-skip"
        onClick={() => triggerOpenRef.current?.()}
      >
        <span>{content.skipLabel}</span>
        <span aria-hidden="true" className="luma-intro-skip-arrow">
          ↗
        </span>
      </button>
    </div>
  );
}
