import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { SITE_CONTENT } from "@/content/site";

describe("MobileMenu", () => {
  it("toggles navigation panel, locks body scroll, and closes on Escape", async () => {
    const user = userEvent.setup();
    const { navLinks, loginAction, primaryAction } = SITE_CONTENT.header;

    render(
      <MobileMenu
        navLinks={navLinks}
        loginAction={loginAction}
        primaryAction={primaryAction}
      />,
    );

    const toggle = screen.getByRole("button", { name: /open navigation menu/i });
    expect(toggle).toHaveAttribute("aria-expanded", "false");
    expect(screen.queryByRole("navigation", { name: /mobile navigation/i })).not.toBeInTheDocument();

    await user.click(toggle);
    expect(toggle).toHaveAttribute("aria-expanded", "true");
    expect(screen.getByRole("navigation", { name: /mobile navigation/i })).toBeInTheDocument();
    expect(document.body.style.overflow).toBe("hidden");

    await user.keyboard("{Escape}");
    expect(toggle).toHaveAttribute("aria-expanded", "false");
    expect(screen.queryByRole("navigation", { name: /mobile navigation/i })).not.toBeInTheDocument();
    expect(document.body.style.overflow).toBe("");
  });

  it("closes when clicking a navigation link", async () => {
    const user = userEvent.setup();
    const { navLinks, loginAction, primaryAction } = SITE_CONTENT.header;

    render(
      <MobileMenu
        navLinks={navLinks}
        loginAction={loginAction}
        primaryAction={primaryAction}
      />,
    );

    await user.click(screen.getByRole("button", { name: /open navigation menu/i }));
    await user.click(screen.getByRole("link", { name: "Courses" }));

    expect(screen.queryByRole("navigation", { name: /mobile navigation/i })).not.toBeInTheDocument();
  });
});
