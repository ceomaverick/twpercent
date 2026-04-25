import { portfolioData } from "@/data/portfolio";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import WorkCategoryHero from "@/components/work/WorkCategoryHero";
import WorkCategoryGallery from "@/components/work/WorkCategoryGallery";
import WorkCategoryBackButton from "@/components/work/WorkCategoryBackButton";

const heroBackgrounds: Record<string, string> = {
  "brochure-bg": "/img/bg/spread.jpg",
  "collateral-bg": "/img/bg/rice.jpg",
  "exploits-bg": "/img/bg/exp-bg.jpg",
  "logo-bg": "/img/bg/rice.jpg",
  "print-bg": "/img/bg/reading.jpg",
  "web-bg": "/img/bg/laptop.jpg",
  "exploit-bg": "/img/bg/exp-bg.jpg",
  "social-bg": "/img/bg/contact-bg-optimised.jpg",
};

export async function generateStaticParams() {
  return Object.keys(portfolioData).map((category) => ({
    category,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category } = await params;
  const data = portfolioData[category];

  if (!data) return {};

  return {
    title: `${data.title} Portfolio | TwentyPercent Designs`,
    description: `Check out our ${data.title.toLowerCase()} portfolio. We have worked with some of the best brands in Mumbai and India.`,
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const data = portfolioData[category];

  if (!data) {
    notFound();
  }

  const heroBg = heroBackgrounds[data.heroClass] || "";

  return (
    <main>
      <WorkCategoryHero title={data.title} heroBg={heroBg} />
      <WorkCategoryGallery sections={data.sections} />
      <WorkCategoryBackButton />
    </main>
  );
}
