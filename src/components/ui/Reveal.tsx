"use client";

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  delayMs?: number;
  className?: string;
}

export function Reveal({ children, delayMs = 0, className }: RevealProps) {
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
    if (rect.top <= window.innerHeight * 0.94) {
      return;
    }

    element.dataset.reveal = "hidden";

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (
            entry.isIntersecting ||
            entry.boundingClientRect.top < window.innerHeight
          ) {
            element.dataset.reveal = "visible";
            observer.disconnect();
            break;
          }
        }
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -36px 0px",
      },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  const style =
    delayMs > 0
      ? ({ "--reveal-delay": `${delayMs}ms` } as CSSProperties)
      : undefined;

  return (
    <div ref={ref} style={style} className={className}>
      {children}
    </div>
  );
}
