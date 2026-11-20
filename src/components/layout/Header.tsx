import type { Locale, SiteDictionary } from "@/i18n";
import { enDictionary } from "@/i18n/dictionaries/en";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { LumaLogo } from "@/components/ui/Icons";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import { MobileMenu } from "@/components/layout/MobileMenu";

interface HeaderProps {
  locale?: Locale;
  content?: SiteDictionary["header"];
}

export function Header({
  locale = "en",
  content = enDictionary.header,
}: HeaderProps) {
  const {
    homeAriaLabel,
    primaryNavAriaLabel,
    mobileNavAriaLabel,
    openMenuAriaLabel,
    closeMenuAriaLabel,
    languageSwitcherAriaLabel,
    navLinks,
    loginAction,
    primaryAction,
  } = content;

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-cream/95 backdrop-blur-sm">
      <Container className="flex h-[68px] items-center justify-between lg:grid lg:h-[69px] lg:grid-cols-[1fr_auto_1fr]">
        <a
          href="#"
          aria-label={homeAriaLabel}
          className="inline-flex w-fit shrink-0 items-center rounded-[4px] text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
        >
          <LumaLogo />
        </a>

        <nav aria-label={primaryNavAriaLabel} className="hidden md:block">
          <ul className="flex items-center gap-5 lg:gap-8">
            {navLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="whitespace-nowrap rounded-[4px] text-[14px] leading-[24px] text-muted transition-colors hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden shrink-0 items-center justify-end gap-2 md:flex">
          <LanguageSwitcher
            locale={locale}
            ariaLabel={languageSwitcherAriaLabel}
          />
          <a
            href={loginAction.href}
            className="whitespace-nowrap rounded-[8px] px-3 py-[10px] text-[14px] leading-[24px] text-muted transition-colors hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 lg:px-4"
          >
            {loginAction.label}
          </a>
          <Button
            href={primaryAction.href}
            variant="primary"
            size="sm"
            className="whitespace-nowrap"
          >
            {primaryAction.label}
          </Button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <LanguageSwitcher
            locale={locale}
            ariaLabel={languageSwitcherAriaLabel}
          />
          <MobileMenu
            navLinks={navLinks}
            loginAction={loginAction}
            primaryAction={primaryAction}
            mobileNavAriaLabel={mobileNavAriaLabel}
            openMenuAriaLabel={openMenuAriaLabel}
            closeMenuAriaLabel={closeMenuAriaLabel}
          />
        </div>
      </Container>
    </header>
  );
}
