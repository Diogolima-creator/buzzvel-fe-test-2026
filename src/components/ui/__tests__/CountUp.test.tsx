import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import {
  CountUp,
  formatCountToken,
  parseCountToken,
} from "@/components/ui/CountUp";

describe("CountUp", () => {
  it("parses and formats integers, suffixes, decimals, and locale-grouped numbers", () => {
    const kToken = parseCountToken("24K+");
    expect(kToken).not.toBeNull();
    expect(formatCountToken(kToken!, 0)).toBe("0K+");
    expect(formatCountToken(kToken!, 24)).toBe("24K+");

    const pctToken = parseCountToken("92%");
    expect(formatCountToken(pctToken!, 46)).toBe("46%");

    const enRating = parseCountToken("4.9 avg rating");
    expect(formatCountToken(enRating!, 0)).toBe("0.0 avg rating");
    expect(formatCountToken(enRating!, 4.9)).toBe("4.9 avg rating");

    const deRating = parseCountToken("4,9 Ø Bewertung");
    expect(formatCountToken(deRating!, 0)).toBe("0,0 Ø Bewertung");
    expect(formatCountToken(deRating!, 4.9)).toBe("4,9 Ø Bewertung");

    const enGrouped = parseCountToken("Trusted by 24,000+");
    expect(formatCountToken(enGrouped!, 12500)).toBe("Trusted by 12,500+");

    const ptGrouped = parseCountToken("Mais de 24.000");
    expect(formatCountToken(ptGrouped!, 24000)).toBe("Mais de 24.000");

    const frGrouped = parseCountToken("Plus de 24 000");
    expect(formatCountToken(frGrouped!, 24000)).toBe("Plus de 24 000");
  });

  it("renders accessible final text for screen readers", () => {
    render(<CountUp text="120+" />);
    expect(screen.getAllByText("120+").length).toBeGreaterThanOrEqual(1);
  });
});
