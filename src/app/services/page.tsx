import ServicesHero from "@/components/services/ServicesHero";
import ServicesDigitalDesign from "@/components/services/ServicesDigitalDesign";
import ServicesGraphicDesign from "@/components/services/ServicesGraphicDesign";
import ServicesBranding from "@/components/services/ServicesBranding";
import ServicesWorkCTA from "@/components/services/ServicesWorkCTA";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web Design & Branding Services in Mumbai | TwentyPercent",
  description: "Expert web design, branding, SEO, and marketing in Mumbai. TwentyPercent Designs helps businesses maximize their online presence and reach more customers.",
};

export default function ServicesPage() {
  return (
    <main className="overflow-hidden">
      <ServicesHero />
      <ServicesDigitalDesign />
      <ServicesGraphicDesign />
      <ServicesBranding />
      <ServicesWorkCTA />
    </main>
  );
}
