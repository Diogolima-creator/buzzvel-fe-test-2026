"use client";

import { useEffect, useRef, useState } from "react";
import { INTRO_OPENING_EVENT } from "@/components/layout/BrandIntro";

export interface ParsedCountToken {
  prefix: string;
  target: number;
  decimals: number;
  decimalSep: string;
  groupSep: string;
  suffix: string;
}

const NUMBER_TOKEN_RE = /(\d{1,3}(?:[.,\s]\d{3})+|\d+(?:[.,]\d+)?)/;

export function parseCountToken(text: string): ParsedCountToken | null {
  const match = NUMBER_TOKEN_RE.exec(text);
  if (!match || match.index === undefined) return null;

  const raw = match[1];
  const prefix = text.slice(0, match.index);
  const suffix = text.slice(match.index + raw.length);

  // Grouped integer like "24,000", "24.000", "24 000"
  const groupedMatch = /^\d{1,3}([.,\s])\d{3}(?:\1\d{3})*$/.exec(raw);
  if (groupedMatch) {
    const groupSep = groupedMatch[1];
    const target = Number(raw.replace(/[.,\s]/g, ""));
    if (!Number.isFinite(target)) return null;
    return {
      prefix,
      target,
      decimals: 0,
      decimalSep: ".",
      groupSep,
      suffix,
    };
  }

  // Decimal number like "4.9" or "4,9"
  const decimalMatch = /^(\d+)([.,])(\d+)$/.exec(raw);
  if (decimalMatch) {
    const decimalSep = decimalMatch[2];
    const decimals = decimalMatch[3].length;
    const target = Number(`${decimalMatch[1]}.${decimalMatch[3]}`);
    if (!Number.isFinite(target)) return null;
    return {
      prefix,
      target,
      decimals,
      decimalSep,
      groupSep: "",
      suffix,
    };
  }

  // Plain integer like "24", "120", "92"
  const target = Number(raw);
  if (!Number.isFinite(target)) return null;
  return {
    prefix,
    target,
    decimals: 0,
    decimalSep: ".",
    groupSep: "",
    suffix,
  };
}

export function formatCountToken(
  token: ParsedCountToken,
  value: number,
): string {
  let formatted: string;
  if (token.decimals > 0) {
    formatted = value.toFixed(token.decimals).replace(".", token.decimalSep);
  } else {
    const rounded = Math.round(value).toString();
    formatted = token.groupSep
      ? rounded.replace(/\B(?=(\d{3})+(?!\d))/g, token.groupSep)
      : rounded;
  }

  return `${token.prefix}${formatted}${token.suffix}`;
}

interface CountUpProps {
  text: string;
  durationMs?: number;
  delayMs?: number;
  className?: string;
}

export function CountUp({
  text,
  durationMs = 1150,
  delayMs = 0,
  className = "",
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(text);

  useEffect(() => {
    const element = ref.current;
    const parsed = parseCountToken(text);
    if (!element || !parsed) return;

    const prefersReducedMotion =
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (
      prefersReducedMotion ||
      typeof requestAnimationFrame === "undefined"
    ) {
      return;
    }

    let rafId = 0;
    let timeoutId: ReturnType<typeof setTimeout> | undefined;
    let started = false;
    let waitingForIntro = false;

    const runAnimation = () => {
      if (started) return;
      started = true;

      setDisplay(formatCountToken(parsed, 0));

      const begin = () => {
        const startTime = performance.now();

        const tick = (now: number) => {
          const elapsed = now - startTime;
          const progress = Math.min(elapsed / durationMs, 1);
          // Smooth easeOutExpo curve
          const eased =
            progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
          const current = parsed.target * eased;

          setDisplay(
            progress === 1 ? text : formatCountToken(parsed, current),
          );

          if (progress < 1) {
            rafId = requestAnimationFrame(tick);
          }
        };

        rafId = requestAnimationFrame(tick);
      };

      if (delayMs > 0) {
        timeoutId = setTimeout(begin, delayMs);
      } else {
        begin();
      }
    };

    const handleIntroOpening = () => {
      waitingForIntro = false;
      runAnimation();
    };

    const rect = element.getBoundingClientRect();
    if (rect.top <= window.innerHeight * 0.96 && rect.bottom >= 0) {
      if (document.documentElement.dataset.intro === "active") {
        waitingForIntro = true;
        window.addEventListener(INTRO_OPENING_EVENT, handleIntroOpening, {
          once: true,
        });
      } else {
        runAnimation();
      }
      return () => {
        if (waitingForIntro) {
          window.removeEventListener(INTRO_OPENING_EVENT, handleIntroOpening);
        }
        if (timeoutId) clearTimeout(timeoutId);
        if (rafId) cancelAnimationFrame(rafId);
      };
    }

    if (typeof IntersectionObserver === "undefined") {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            runAnimation();
            observer.disconnect();
            break;
          }
        }
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -24px 0px",
      },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
      if (waitingForIntro) {
        window.removeEventListener(INTRO_OPENING_EVENT, handleIntroOpening);
      }
      if (timeoutId) clearTimeout(timeoutId);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [text, durationMs, delayMs]);

  return (
    <span ref={ref} className={`tabular-nums ${className}`}>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">{display}</span>
    </span>
  );
}
