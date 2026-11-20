import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { ContactForm } from "@/components/sections/ContactForm";
import { getDictionary } from "@/i18n";

describe("ContactForm", () => {
  it("shows accessible validation errors when submitted empty", async () => {
    const user = userEvent.setup();
    render(<ContactForm />);

    await user.click(screen.getByRole("button", { name: /send message/i }));

    expect(screen.getAllByRole("alert")).toHaveLength(3);
    expect(screen.getByLabelText(/full name/i)).toHaveAttribute("aria-invalid", "true");
    expect(screen.getByLabelText(/email/i)).toHaveAttribute("aria-invalid", "true");
    expect(screen.getByLabelText(/your question/i)).toHaveAttribute("aria-invalid", "true");
  });

  it("submits valid input, displays status confirmation, and resets fields", async () => {
    const user = userEvent.setup();
    render(<ContactForm />);

    await user.type(screen.getByLabelText(/full name/i), "Alex Morgan");
    await user.type(screen.getByLabelText(/email/i), "alex@example.com");
    await user.type(
      screen.getByLabelText(/your question/i),
      "Do you offer team seats for product designers?",
    );
    await user.click(screen.getByRole("button", { name: /send message/i }));

    await waitFor(() => {
      expect(screen.getByRole("status")).toHaveTextContent(/thanks for reaching out/i);
    });
    expect(screen.getByLabelText(/full name/i)).toHaveValue("");
    expect(screen.getByLabelText(/email/i)).toHaveValue("");
    expect(screen.getByLabelText(/your question/i)).toHaveValue("");
  });

  it("renders Portuguese labels and validation messages when localized", async () => {
    const user = userEvent.setup();
    const pt = getDictionary("pt");
    render(<ContactForm content={pt.contact} />);

    await user.click(screen.getByRole("button", { name: /enviar mensagem/i }));

    const alerts = screen.getAllByRole("alert");
    expect(alerts).toHaveLength(3);
    expect(alerts[0]).toHaveTextContent(pt.contact.validation.nameRequired);
    expect(alerts[1]).toHaveTextContent(pt.contact.validation.emailRequired);
    expect(alerts[2]).toHaveTextContent(pt.contact.validation.questionRequired);
  });
});
