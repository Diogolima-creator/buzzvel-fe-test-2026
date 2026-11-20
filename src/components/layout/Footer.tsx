import type { SiteDictionary } from "@/i18n/types";
import { enDictionary } from "@/i18n/dictionaries/en";
import { Container } from "@/components/ui/Container";
import { LumaLogo } from "@/components/ui/Icons";

interface FooterProps {
  content?: SiteDictionary["footer"];
}

export function Footer({ content = enDictionary.footer }: FooterProps) {
  const { homeAriaLabel, tagline, columns, copyright } = content;

  return (
    <footer
      id="footer"
      className="bg-ink pt-[60px] pb-5 text-white lg:pt-20 lg:pb-10"
    >
      <Container>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,416px)_repeat(3,minmax(0,1fr))] lg:gap-8">
          <div>
            <a
              href="#"
              aria-label={homeAriaLabel}
              className="block h-[17px] w-fit rounded-[4px] text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
            >
              <LumaLogo />
            </a>
            <p className="mt-3 text-[14px] leading-[24px] text-subtle lg:max-w-[240px]">
              {tagline}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-10 gap-y-10 sm:grid-cols-3 lg:contents">
            {columns.map((column) => (
              <div key={column.heading}>
                <h3 className="text-[12px] leading-[16px] font-semibold tracking-[1.44px] text-line uppercase">
                  {column.heading}
                </h3>
                <ul className="mt-4 flex flex-col gap-3">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="block w-fit rounded-[4px] text-[14px] leading-[24px] text-subtle transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 border-t border-muted pt-6 lg:mt-16">
          <p className="text-center text-[13px] leading-[19.5px] text-white lg:text-left lg:text-line">
            {copyright}
          </p>
        </div>
      </Container>
    </footer>
  );
}
