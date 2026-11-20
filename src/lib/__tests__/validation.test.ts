import { describe, expect, it } from "vitest";
import { hasValidationErrors, validateContactForm } from "@/lib/validation";

describe("validateContactForm", () => {
  it("returns errors for empty fields", () => {
    const errors = validateContactForm({ name: "", email: "", question: "" });
    expect(hasValidationErrors(errors)).toBe(true);
    expect(errors.name).toBeDefined();
    expect(errors.email).toBeDefined();
    expect(errors.question).toBeDefined();
  });

  it("rejects invalid email and short question", () => {
    const errors = validateContactForm({
      name: "A",
      email: "not-an-email",
      question: "Too short",
    });
    expect(errors.name).toMatch(/at least 2/i);
    expect(errors.email).toMatch(/valid email/i);
    expect(errors.question).toMatch(/at least 10/i);
  });

  it("passes with valid trimmed input", () => {
    const errors = validateContactForm({
      name: "  Alex Morgan ",
      email: "alex@example.com ",
      question: "Interested in team pricing for 15 learners.",
    });
    expect(hasValidationErrors(errors)).toBe(false);
    expect(errors).toEqual({});
  });
});
