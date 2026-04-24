import AboutHero from "@/components/about/AboutHero";
import TeamLeader from "@/components/about/TeamLeader";
import TeamMember from "@/components/about/TeamMember";
import Freelancer from "@/components/about/Freelancer";
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
      <TeamLeader />

      <section className="bg-[#f7f7f7] py-20 overflow-hidden">
        <div className="container mx-auto px-4 md:px-0">
          <TeamMember
            name="Priyanka Jadhav"
            role="Art Director"
            bio="Want your designs to emotionally connect with your audience? She is the plan A. Armed with a degree from Raheja Art School and 6+ years of experience in art, she makes designs talk and dance, if you may."
            imageClass="member-one"
            isReversed={true}
            skills={[
              {
                name: "Graphic Design",
                value: 90,
                color: "blue",
                magic1: "magic-1",
                magic2: "magic-2",
              },
              {
                name: "Web Design",
                value: 75,
                color: "yellow",
                magic1: "magic-11",
                magic2: "magic-22",
              },
              {
                name: "Project Development",
                value: 75,
                color: "pink",
                magic1: "magic-11",
                magic2: "magic-22",
              },
              {
                name: "Multimedia",
                value: 90,
                color: "green",
                magic1: "magic-1",
                magic2: "magic-2",
              },
            ]}
          />

          <TeamMember
            name="Snehal Thorat"
            role="Web Developer"
            bio="Programming may be his second nature, but he is equally good at web design. Even the code he writes looks beautiful. He excels in JavaScript, ASP.net, PHP, and other web technologies."
            imageClass="member-two"
            isReversed={false}
            skills={[
              {
                name: "HTML / CSS",
                value: 95,
                color: "blue",
                magic1: "magic-1",
                magic2: "magic-2",
              },
              {
                name: "WordPress",
                value: 90,
                color: "yellow",
                magic1: "magic-11",
                magic2: "magic-22",
              },
              {
                name: "PHP",
                value: 75,
                color: "pink",
                magic1: "magic-111",
                magic2: "magic-222",
              },
              {
                name: "Photoshop",
                value: 90,
                color: "green",
                magic1: "magic-1111",
                magic2: "magic-2222",
              },
            ]}
          />

          <TeamMember
            name="Raghu Thomas"
            role="Fashion Photographer"
            bio="He can shoot a photograph you’ve never seen before – a skill cultivated with powerful imagination and enduring practice. When he is not teaching at NIFT, he helps us breathe life into designs."
            imageClass="member-four"
            isReversed={true}
            skills={[
              {
                name: "Fashion",
                value: 90,
                color: "blue",
                magic1: "magic-1",
                magic2: "magic-2",
              },
              {
                name: "Food",
                value: 85,
                color: "yellow",
                magic1: "magic-11",
                magic2: "magic-22",
              },
              {
                name: "Product",
                value: 75,
                color: "pink",
                magic1: "magic-111",
                magic2: "magic-222",
              },
              {
                name: "Event",
                value: 80,
                color: "green",
                magic1: "magic-1111",
                magic2: "magic-2222",
              },
            ]}
          />
        </div>
      </section>

      <Freelancer />
    </main>
  );
}
