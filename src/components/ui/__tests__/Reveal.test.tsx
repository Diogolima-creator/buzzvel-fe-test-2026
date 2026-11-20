import { render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { Reveal } from "@/components/ui/Reveal";

describe("Reveal", () => {
  afterEach(() => {
    vi.restoreAllMocks();
    vi.unstubAllGlobals();
  });

  it("hides elements below the viewport and reveals them on intersection", () => {
    let observerCallback: IntersectionObserverCallback | undefined;
    const disconnect = vi.fn();
    const observe = vi.fn();

    class MockIntersectionObserver {
      constructor(cb: IntersectionObserverCallback) {
        observerCallback = cb;
      }
      observe = observe;
      disconnect = disconnect;
      unobserve = vi.fn();
    }

    vi.stubGlobal("IntersectionObserver", MockIntersectionObserver);
    vi.spyOn(HTMLElement.prototype, "getBoundingClientRect").mockReturnValue({
      top: 1500,
      bottom: 1700,
      left: 0,
      right: 500,
      width: 500,
      height: 200,
      x: 0,
      y: 1500,
      toJSON: () => ({}),
    });

    const { container } = render(
      <Reveal variant="card" delayMs={120}>
        <p>Animated section</p>
      </Reveal>,
    );

    const wrapper = container.firstElementChild as HTMLElement;
    expect(screen.getByText("Animated section")).toBeInTheDocument();
    expect(wrapper.dataset.reveal).toBe("hidden");
    expect(wrapper.dataset.revealVariant).toBe("card");
    expect(wrapper.style.getPropertyValue("--reveal-delay")).toBe("120ms");
    expect(observe).toHaveBeenCalledWith(wrapper);

    observerCallback?.(
      [
        {
          isIntersecting: true,
          boundingClientRect: { top: 200 } as DOMRectReadOnly,
        } as IntersectionObserverEntry,
      ],
      {} as IntersectionObserver,
    );

    expect(wrapper.dataset.reveal).toBe("visible");
    expect(disconnect).toHaveBeenCalled();
  });

  it("stays visible immediately when element is already inside the viewport", () => {
    const observe = vi.fn();
    class MockIntersectionObserver {
      observe = observe;
      disconnect = vi.fn();
      unobserve = vi.fn();
    }

    vi.stubGlobal("IntersectionObserver", MockIntersectionObserver);
    vi.spyOn(HTMLElement.prototype, "getBoundingClientRect").mockReturnValue({
      top: 100,
      bottom: 300,
      left: 0,
      right: 500,
      width: 500,
      height: 200,
      x: 0,
      y: 100,
      toJSON: () => ({}),
    });

    const { container } = render(
      <Reveal>
        <p>Above the fold</p>
      </Reveal>,
    );

    const wrapper = container.firstElementChild as HTMLElement;
    expect(wrapper.dataset.reveal).toBeUndefined();
    expect(observe).not.toHaveBeenCalled();
  });
});
