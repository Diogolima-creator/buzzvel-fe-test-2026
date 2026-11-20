"use client";

import { useId, useState, type ChangeEvent, type FormEvent } from "react";
import type { ContactSectionContent } from "@/i18n/types";
import type { Locale } from "@/i18n/config";
import { enDictionary } from "@/i18n/dictionaries/en";
import {
  hasValidationErrors,
  validateContactForm,
  type ContactFormErrors,
  type ContactFormValues,
} from "@/lib/validation";
import { Button } from "@/components/ui/Button";

const INITIAL_VALUES: ContactFormValues = {
  name: "",
  email: "",
  question: "",
};

interface ContactFormProps {
  locale?: Locale;
  content?: ContactSectionContent;
}

export function ContactForm({
  locale = "en",
  content = enDictionary.contact,
}: ContactFormProps) {
  const {
    formTitle,
    formDescription,
    fields,
    submitLabel,
    submittingLabel,
    successMessage,
    errorMessage,
    validation,
  } = content;

  const [values, setValues] = useState<ContactFormValues>(INITIAL_VALUES);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const nameId = useId();
  const emailId = useId();
  const questionId = useId();

  const handleChange =
    (field: keyof ContactFormValues) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const nextValue = event.target.value;
      setValues((prev) => ({ ...prev, [field]: nextValue }));
      if (errors[field]) {
        setErrors((prev) => {
          const next = { ...prev };
          delete next[field];
          return next;
        });
      }
      if (submitted) {
        setSubmitted(false);
      }
      if (submitError) {
        setSubmitError(null);
      }
    };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validationErrors = validateContactForm(values, validation);

    if (hasValidationErrors(validationErrors)) {
      setErrors(validationErrors);
      setSubmitted(false);
      setSubmitError(null);
      return;
    }

    setErrors({});
    setSubmitError(null);
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: values.name.trim(),
          email: values.email.trim(),
          question: values.question.trim(),
          locale,
        }),
      });

      const data = (await response.json().catch(() => null)) as {
        ok?: boolean;
      } | null;

      if (!response.ok || !data?.ok) {
        setSubmitted(false);
        setSubmitError(errorMessage);
        return;
      }

      setSubmitted(true);
      setValues(INITIAL_VALUES);
    } catch {
      setSubmitted(false);
      setSubmitError(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputBaseClass =
    "w-full rounded-[8px] border bg-cream px-4 text-[14px] leading-[24px] text-ink placeholder:text-muted-2 transition-colors focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/25";

  return (
    <div className="w-full rounded-[16px] border border-border bg-white px-5 py-6 shadow-form lg:w-[540px] lg:shrink-0 lg:p-10">
      <div>
        <h3 className="font-display text-[20px] leading-[32px] font-bold text-ink">
          {formTitle}
        </h3>
        <p className="mt-2 text-[14px] leading-[24px] text-muted">
          {formDescription}
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        noValidate
        className="mt-6 flex flex-col gap-6"
      >
        <div className="flex flex-col gap-5">
          {/* Full name */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor={nameId}
              className="text-[14px] leading-[24px] font-bold text-ink"
            >
              {fields.name.label}
            </label>
            <input
              id={nameId}
              name="name"
              type="text"
              autoComplete="name"
              placeholder={fields.name.placeholder}
              value={values.name}
              onChange={handleChange("name")}
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? `${nameId}-error` : undefined}
              className={`${inputBaseClass} h-12 ${
                errors.name
                  ? "border-error focus:border-error"
                  : "border-border focus:border-primary"
              }`}
            />
            {errors.name ? (
              <p
                id={`${nameId}-error`}
                role="alert"
                className="text-[13px] leading-[20px] text-error"
              >
                {errors.name}
              </p>
            ) : null}
          </div>

          {/* Email */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor={emailId}
              className="text-[14px] leading-[24px] font-bold text-ink"
            >
              {fields.email.label}
            </label>
            <input
              id={emailId}
              name="email"
              type="email"
              autoComplete="email"
              placeholder={fields.email.placeholder}
              value={values.email}
              onChange={handleChange("email")}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? `${emailId}-error` : undefined}
              className={`${inputBaseClass} h-12 ${
                errors.email
                  ? "border-error focus:border-error"
                  : "border-border focus:border-primary"
              }`}
            />
            {errors.email ? (
              <p
                id={`${emailId}-error`}
                role="alert"
                className="text-[13px] leading-[20px] text-error"
              >
                {errors.email}
              </p>
            ) : null}
          </div>

          {/* Question */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor={questionId}
              className="text-[14px] leading-[24px] font-bold text-ink"
            >
              {fields.question.label}
            </label>
            <textarea
              id={questionId}
              name="question"
              placeholder={fields.question.placeholder}
              value={values.question}
              onChange={handleChange("question")}
              aria-invalid={Boolean(errors.question)}
              aria-describedby={
                errors.question ? `${questionId}-error` : undefined
              }
              className={`${inputBaseClass} h-[100px] resize-y py-[14px] lg:h-[120px] ${
                errors.question
                  ? "border-error focus:border-error"
                  : "border-border focus:border-primary"
              }`}
            />
            {errors.question ? (
              <p
                id={`${questionId}-error`}
                role="alert"
                className="text-[13px] leading-[20px] text-error"
              >
                {errors.question}
              </p>
            ) : null}
          </div>
        </div>

        <Button
          type="submit"
          variant="primary"
          disabled={isSubmitting}
          className="h-[52px] w-full"
        >
          {isSubmitting ? submittingLabel : submitLabel}
        </Button>

        {submitted ? (
          <div
            role="status"
            aria-live="polite"
            className="rounded-[8px] border border-success-border bg-success-bg px-4 py-3 text-[14px] leading-[22px] text-success-text"
          >
            {successMessage}
          </div>
        ) : null}

        {submitError ? (
          <div
            role="alert"
            className="rounded-[8px] border border-error/30 bg-error/5 px-4 py-3 text-[14px] leading-[22px] text-error"
          >
            {submitError}
          </div>
        ) : null}
      </form>
    </div>
  );
}
