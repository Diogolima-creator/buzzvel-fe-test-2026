import { notFound } from "next/navigation";
import { isLocale, LOCALES } from "@/i18n";
import { LandingPage } from "@/components/LandingPage";

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export default async function LocalePage({ params }: PageProps<"/[locale]">) {
  const { locale } = await params;
  if (!isLocale(locale)) {
    notFound();
  }

  return <LandingPage locale={locale} />;
}
