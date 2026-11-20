import { getDictionary, type Locale } from "@/i18n";
import { BrandIntro } from "@/components/layout/BrandIntro";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Categories } from "@/components/sections/Categories";
import { Contact } from "@/components/sections/Contact";
import { FeaturedCourse } from "@/components/sections/FeaturedCourse";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { People } from "@/components/sections/People";
import { Testimonial } from "@/components/sections/Testimonial";

interface LandingPageProps {
  locale: Locale;
}

export function LandingPage({ locale }: LandingPageProps) {
  const dictionary = getDictionary(locale);

  return (
    <>
      <BrandIntro content={dictionary.intro} />
      <Header locale={locale} content={dictionary.header} />
      <main id="main-content" className="flex-1">
        <Hero content={dictionary.hero} />
        <Categories content={dictionary.categories} />
        <FeaturedCourse content={dictionary.featuredCourse} />
        <HowItWorks content={dictionary.howItWorks} />
        <Testimonial content={dictionary.testimonial} />
        <People content={dictionary.people} />
        <Contact content={dictionary.contact} />
        <FinalCTA content={dictionary.finalCta} />
      </main>
      <Footer content={dictionary.footer} />
    </>
  );
}
