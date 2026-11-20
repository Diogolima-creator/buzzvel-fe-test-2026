import type { ContactValidationMessages } from "@/i18n/types";

export interface ContactFormValues {
  name: string;
  email: string;
  question: string;
}

export interface ContactFormErrors {
  name?: string;
  email?: string;
  question?: string;
}

export const DEFAULT_VALIDATION_MESSAGES: ContactValidationMessages = {
  nameRequired: "Please enter your full name.",
  nameMinLength: "Name must be at least 2 characters.",
  emailRequired: "Please enter your email address.",
  emailInvalid: "Please enter a valid email address.",
  questionRequired: "Please tell us how we can help.",
  questionMinLength:
    "Please write at least 10 characters so we can assist you.",
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateContactForm(
  values: ContactFormValues,
  messages: ContactValidationMessages = DEFAULT_VALIDATION_MESSAGES,
): ContactFormErrors {
  const errors: ContactFormErrors = {};

  const trimmedName = values.name.trim();
  if (!trimmedName) {
    errors.name = messages.nameRequired;
  } else if (trimmedName.length < 2) {
    errors.name = messages.nameMinLength;
  }

  const trimmedEmail = values.email.trim();
  if (!trimmedEmail) {
    errors.email = messages.emailRequired;
  } else if (!EMAIL_PATTERN.test(trimmedEmail)) {
    errors.email = messages.emailInvalid;
  }

  const trimmedQuestion = values.question.trim();
  if (!trimmedQuestion) {
    errors.question = messages.questionRequired;
  } else if (trimmedQuestion.length < 10) {
    errors.question = messages.questionMinLength;
  }

  return errors;
}

export function hasValidationErrors(errors: ContactFormErrors): boolean {
  return Object.keys(errors).length > 0;
}
