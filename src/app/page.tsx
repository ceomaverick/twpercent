import Hero from "@/components/home/Hero";
import AgencyIntroduction from "@/components/home/AgencyIntroduction";
import ParetoSection from "@/components/home/ParetoSection";
import ApplicationSection from "@/components/home/ApplicationSection";
import SubscribeSection from "@/components/home/SubscribeSection";
import PitchSection from "@/components/home/PitchSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Effective Advertising Agency in Mumbai | TwentyPercent",
  description: "Boost your business with TwentyPercent Designs, Mumbai's leading agency for web design, branding, and creative marketing. Achieve maximum results with ease.",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <AgencyIntroduction />
      <ParetoSection />
      <ApplicationSection />
      <SubscribeSection />
      <PitchSection />
    </main>
  );
}
