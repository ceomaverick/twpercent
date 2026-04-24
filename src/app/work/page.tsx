import WorkHero from "@/components/work/WorkHero";
import PortfolioItem from "@/components/work/PortfolioItem";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Advertising & Web Design Portfolio | TwentyPercent Designs",
  description: "Browse our portfolio of successful advertising, web design, and branding projects in Mumbai. See how we help brands achieve 80% results with 20% effort.",
};

export default function WorkPage() {
  const portfolioItems = [
    {
      title: "CORPORATE IDENTITY",
      description: "GIZ Germany, AgriPro Industries, Emson and other clients.",
      imageSrc: "/img/folio/identity.jpg",
      href: "/work/logo",
      isReversed: false,
    },
    {
      title: "BROCHURES AND CATALOGUES",
      description: "Corporate Profile and Reports",
      imageSrc: "/img/folio/brochure.jpg",
      href: "/work/brochure",
      isReversed: true,
    },
    {
      title: "WEB DESIGN, SEO & SMM",
      description: "Websites, FB Campaign, Adwords and SEO",
      imageSrc: "/img/folio/web.jpg",
      href: "/work/websites",
      isReversed: false,
    },
    {
      title: "PRINT MAINSTREAM",
      description: "Corporate Profile and Reports",
      imageSrc: "/img/folio/print.jpg",
      href: "/work/print",
      isReversed: true,
    },
    {
      title: "MARKETING COLLATERAL",
      description: "Food Catalogue",
      imageSrc: "/img/folio/collateral.jpg",
      href: "/work/collateral",
      isReversed: false,
    },
    {
      title: "SOCIAL MEDIA",
      description: "Social Media Campaigns",
      imageSrc: "/img/folio/social-campaign.jpg",
      href: "/work/social",
      isReversed: true,
    },
    {
      title: "CREATIVE EXPLOITS",
      description: "Corporate Profile and Reports",
      imageSrc: "/img/folio/exploit.jpg",
      href: "/work/exploits",
      isReversed: false,
    },
  ];

  return (
    <main>
      <WorkHero />
      <section className="py-20 overflow-hidden">
        <div className="container mx-auto px-4 md:px-0">
          {portfolioItems.map((item, index) => (
            <PortfolioItem key={index} {...item} />
          ))}
        </div>
      </section>
    </main>
  );
}
