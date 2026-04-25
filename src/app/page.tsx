import HomeHero from "@/components/home/HomeHero";
import HomeAgencyIntroduction from "@/components/home/HomeAgencyIntroduction";
import HomeParetoSection from "@/components/home/HomeParetoSection";
import HomeApplicationSection from "@/components/home/HomeApplicationSection";
import HomeSubscribeSection from "@/components/home/HomeSubscribeSection";
import HomePitchSection from "@/components/home/HomePitchSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Effective Advertising Agency in Mumbai | TwentyPercent",
  description: "Boost your business with TwentyPercent Designs, Mumbai's leading agency for web design, branding, and creative marketing. Achieve maximum results with ease.",
};

export default function Home() {
  return (
    <main>
      <HomeHero />
      <HomeAgencyIntroduction />
      <HomeParetoSection />
      <HomeApplicationSection />
      <HomeSubscribeSection />
      <HomePitchSection />
    </main>
  );
}
