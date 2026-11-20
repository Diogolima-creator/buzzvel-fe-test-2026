import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";

describe("LanguageSwitcher", () => {
  it("opens the locale menu, renders all 5 languages, and closes on Escape", () => {
    render(<LanguageSwitcher locale="en" ariaLabel="Language selector" />);

    const trigger = screen.getByRole("button", {
      name: /Language selector: English/i,
    });
    expect(trigger).toHaveAttribute("aria-expanded", "false");
    expect(screen.queryByRole("list")).not.toBeInTheDocument();

    fireEvent.click(trigger);
    expect(trigger).toHaveAttribute("aria-expanded", "true");

    const links = screen.getAllByRole("link");
    expect(links).toHaveLength(5);
    expect(links.map((link) => link.getAttribute("href"))).toEqual([
      "/",
      "/pt",
      "/es",
      "/fr",
      "/de",
    ]);

    const activeLink = screen.getByRole("link", { name: /English/i });
    expect(activeLink).toHaveAttribute("aria-current", "page");

    fireEvent.keyDown(document, { key: "Escape" });
    expect(trigger).toHaveAttribute("aria-expanded", "false");
    expect(screen.queryByRole("list")).not.toBeInTheDocument();
  });

  it("closes when clicking outside the switcher", () => {
    render(
      <div>
        <LanguageSwitcher locale="de" ariaLabel="Sprache auswählen" />
        <button type="button">Outside</button>
      </div>,
    );

    const trigger = screen.getByRole("button", {
      name: /Sprache auswählen: Deutsch/i,
    });
    fireEvent.click(trigger);
    expect(screen.getByRole("list")).toBeInTheDocument();

    fireEvent.mouseDown(screen.getByRole("button", { name: "Outside" }));
    expect(screen.queryByRole("list")).not.toBeInTheDocument();
  });
});
