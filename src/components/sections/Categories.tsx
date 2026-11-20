import type { CategoryItem, SiteDictionary } from "@/i18n/types";
import { enDictionary } from "@/i18n/dictionaries/en";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ArrowRightIcon } from "@/components/ui/Icons";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

interface CategoryCardProps {
  category: CategoryItem;
  exploreLabel: string;
}

function CategoryCard({ category, exploreLabel }: CategoryCardProps) {
  return (
    <a
      href={category.href}
      className="group flex h-full flex-col justify-between rounded-[16px] border border-border bg-white p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 lg:min-h-[265px] lg:p-7"
    >
      <div>
        <span className="inline-flex items-center justify-center rounded-[6px] bg-primary-soft px-2 py-1 text-[12px] leading-[16px] font-semibold tracking-[1.44px] text-primary uppercase">
          {category.number}
        </span>

        <h3 className="mt-5 font-display text-[20px] leading-[28px] font-bold text-ink lg:leading-[32px]">
          {category.title}
        </h3>

        <p className="mt-3 text-[14px] leading-[24px] text-muted-2">
          {category.description}
        </p>
      </div>

      <span className="mt-5 inline-flex items-center gap-2 text-[14px] leading-[24px] font-bold text-ink">
        {exploreLabel}
        <ArrowRightIcon className="h-5 w-5 transition-transform duration-150 group-hover:translate-x-1" />
      </span>
    </a>
  );
}

interface CategoriesProps {
  content?: SiteDictionary["categories"];
}

export function Categories({
  content = enDictionary.categories,
}: CategoriesProps) {
  const { eyebrow, heading, description, exploreLabel, items } = content;

  return (
    <section
      id="courses"
      aria-labelledby="categories-heading"
      className="scroll-mt-[70px] bg-white py-[60px] lg:py-[100px]"
    >
      <Container>
        <Reveal className="max-w-[560px]">
          <Eyebrow>{eyebrow}</Eyebrow>
          <SectionHeading id="categories-heading" className="mt-4">
            {heading}
          </SectionHeading>
          <p className="mt-4 text-[16px] leading-[26px] text-muted lg:text-[18px] lg:leading-[28px]">
            {description}
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-10 lg:grid-cols-4 lg:gap-5">
          {items.map((item, index) => (
            <Reveal key={item.number} delayMs={index * 80} className="h-full">
              <CategoryCard category={item} exploreLabel={exploreLabel} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
