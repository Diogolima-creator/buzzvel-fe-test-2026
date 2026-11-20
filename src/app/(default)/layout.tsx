import type { Metadata } from "next";
import { buildMetadata, DEFAULT_LOCALE } from "@/i18n";
import {
  DocumentShell,
  sharedViewport,
} from "@/components/layout/DocumentShell";

export const metadata: Metadata = buildMetadata(DEFAULT_LOCALE);
export const viewport = sharedViewport;

export default function DefaultLayout({ children }: LayoutProps<"/">) {
  return <DocumentShell locale={DEFAULT_LOCALE}>{children}</DocumentShell>;
}
