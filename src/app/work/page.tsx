import WorkHero from "@/components/work/WorkHero";
import WorkPortfolioGrid from "@/components/work/WorkPortfolioGrid";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Advertising & Web Design Portfolio | TwentyPercent Designs",
  description: "Browse our portfolio of successful advertising, web design, and branding projects in Mumbai. See how we help brands achieve 80% results with 20% effort.",
};

export default function WorkPage() {
  return (
    <main>
      <WorkHero />
      <WorkPortfolioGrid />
    </main>
  );
}
