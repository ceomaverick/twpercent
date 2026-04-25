import AboutHero from "@/components/about/AboutHero";
import AboutTeamLeader from "@/components/about/AboutTeamLeader";
import AboutTeamList from "@/components/about/AboutTeamList";
import AboutFreelancerCTA from "@/components/about/AboutFreelancerCTA";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Meet the Team | Advertising Experts in Navi Mumbai",
  description: "Get to know the creative minds at TwentyPercent Designs. Our team of experts in Mumbai specializes in storytelling, design, and digital strategy.",
};

export default function AboutPage() {
  const authorSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Avinash Deshmukh",
    "jobTitle": "Creative Lead",
    "worksFor": {
      "@type": "Organization",
      "name": "TwentyPercent Designs"
    },
    "url": "http://avinashdeshmukh.com/"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(authorSchema) }}
      />
      <AboutHero />
      <AboutTeamLeader />
      <AboutTeamList />
      <AboutFreelancerCTA />
    </main>
  );
}
