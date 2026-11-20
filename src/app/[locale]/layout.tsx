import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { buildMetadata, isLocale, LOCALES } from "@/i18n";
import {
  DocumentShell,
  sharedViewport,
} from "@/components/layout/DocumentShell";

export const viewport = sharedViewport;

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: LayoutProps<"/[locale]">): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) {
    return buildMetadata("en");
  }
  return buildMetadata(locale);
}

export default async function LocaleLayout({
  children,
  params,
}: LayoutProps<"/[locale]">) {
  const { locale } = await params;
  if (!isLocale(locale)) {
    notFound();
  }

  return <DocumentShell locale={locale}>{children}</DocumentShell>;
}
