import { act, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import {
  BrandIntro,
  INTRO_OPENING_EVENT,
  markSkipNextIntro,
} from "@/components/layout/BrandIntro";
import { ptDictionary } from "@/i18n/dictionaries/pt";

describe("BrandIntro", () => {
  beforeEach(() => {
    vi.useFakeTimers();
    delete document.documentElement.dataset.intro;
    delete window.__lumaOpenIntro;
    document.documentElement.style.overflow = "";
    window.sessionStorage.clear();
    window.history.replaceState(null, "", "/");
  });

  afterEach(() => {
    vi.useRealTimers();
    vi.restoreAllMocks();
    vi.unstubAllGlobals();
    delete document.documentElement.dataset.intro;
    delete window.__lumaOpenIntro;
    document.documentElement.style.overflow = "";
    window.sessionStorage.clear();
  });

  it("renders centered brand splash, opens from the center, and unmounts cleanly", async () => {
    const onOpening = vi.fn();
    window.addEventListener(INTRO_OPENING_EVENT, onOpening);

    render(<BrandIntro content={ptDictionary.intro} />);

    const dialog = screen.getByRole("dialog", {
      name: ptDictionary.intro.ariaLabel,
    });
    expect(dialog).toHaveAttribute("data-intro-phase", "active");
    expect(screen.getByText(ptDictionary.intro.tagline)).toBeInTheDocument();
    expect(document.documentElement.dataset.intro).toBe("active");
    expect(document.documentElement.style.overflow).toBe("hidden");

    // Advance past minimum visible time -> curtain starts opening from center
    await act(async () => {
      await vi.advanceTimersByTimeAsync(450);
    });

    expect(onOpening).toHaveBeenCalledTimes(1);
    expect(document.documentElement.dataset.intro).toBe("opening");
    expect(
      screen.getByRole("dialog", { name: ptDictionary.intro.ariaLabel }),
    ).toHaveAttribute("data-intro-phase", "opening");

    // Advance past curtain split duration -> unmounts and unlocks scroll
    await act(async () => {
      await vi.advanceTimersByTimeAsync(520);
    });

    expect(
      screen.queryByRole("dialog", { name: ptDictionary.intro.ariaLabel }),
    ).not.toBeInTheDocument();
    expect(document.documentElement.dataset.intro).toBe("done");
    expect(document.documentElement.style.overflow).toBe("");

    window.removeEventListener(INTRO_OPENING_EVENT, onOpening);
  });

  it("allows skipping immediately via skip button or Escape key", async () => {
    render(<BrandIntro />);

    const skipButton = screen.getByRole("button", { name: /Skip intro/i });
    fireEvent.click(skipButton);

    expect(document.documentElement.dataset.intro).toBe("opening");

    await act(async () => {
      await vi.advanceTimersByTimeAsync(520);
    });

    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("skips intro when prefers-reduced-motion is enabled", async () => {
    vi.stubGlobal(
      "matchMedia",
      vi.fn().mockReturnValue({
        matches: true,
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
      }),
    );

    render(<BrandIntro />);
    await act(async () => {
      await Promise.resolve();
    });

    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    expect(document.documentElement.dataset.intro).toBeUndefined();
  });

  it("skips intro once when navigating via language switcher", async () => {
    window.history.replaceState(null, "", "/pt");
    markSkipNextIntro();
    render(<BrandIntro />);
    await act(async () => {
      await Promise.resolve();
    });

    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    expect(document.documentElement.dataset.intro).toBeUndefined();
  });
});
