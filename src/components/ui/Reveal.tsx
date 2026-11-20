"use client";

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";
import { INTRO_OPENING_EVENT } from "@/components/layout/BrandIntro";

export type RevealVariant =
  | "fade-up"
  | "card"
  | "badge"
  | "slide-left"
  | "slide-right"
  | "zoom"
  | "line-x";

interface RevealProps {
  children?: ReactNode;
  variant?: RevealVariant;
  delayMs?: number;
  className?: string;
}

export function Reveal({
  children,
  variant = "fade-up",
  delayMs = 0,
  className,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const prefersReducedMotion =
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion || typeof IntersectionObserver === "undefined") {
      return;
    }

    const rect = element.getBoundingClientRect();
    // Only skip animating if the element is already clearly inside the upper fold
    // (e.g., opened via a #hash anchor or scrolled mid-page).
    if (rect.top < window.innerHeight * 0.55 && rect.bottom > 0) {
      return;
    }

    element.dataset.reveal = "hidden";

    let observer: IntersectionObserver | null = null;
    let waitingForIntro = false;

    const startObserving = () => {
      observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (
              entry.isIntersecting ||
              entry.boundingClientRect.top < window.innerHeight * 0.85
            ) {
              element.dataset.reveal = "visible";
              observer?.disconnect();
              break;
            }
          }
        },
        {
          threshold: 0.12,
          rootMargin: "0px 0px -64px 0px",
        },
      );

      observer.observe(element);
    };

    const handleIntroOpening = () => {
      waitingForIntro = false;
      startObserving();
    };

    if (document.documentElement.dataset.intro === "active") {
      waitingForIntro = true;
      window.addEventListener(INTRO_OPENING_EVENT, handleIntroOpening, {
        once: true,
      });
    } else {
      startObserving();
    }

    return () => {
      observer?.disconnect();
      if (waitingForIntro) {
        window.removeEventListener(INTRO_OPENING_EVENT, handleIntroOpening);
      }
    };
  }, []);

  const style =
    delayMs > 0
      ? ({ "--reveal-delay": `${delayMs}ms` } as CSSProperties)
      : undefined;

  return (
    <div
      ref={ref}
      data-reveal-variant={variant}
      style={style}
      className={className}
    >
      {children}
    </div>
  );
}
