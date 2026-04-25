/**
 * @component AboutTeamList
 * @page About (/app/about/page.tsx)
 * @description Renders a list of core team members with their roles, bios, and skills.
 * @shared false
 * @props none
 */

import AboutTeamMember from "@/components/about/AboutTeamMember";

const AboutTeamList = () => {
  return (
    <section className="bg-[#f7f7f7] py-20 overflow-hidden">
      <div className="container mx-auto px-4 md:px-0">
        <AboutTeamMember
          name="Priyanka Jadhav"
          role="Art Director"
          bio="Emotional Engineering. Priyanka is our definitive 'Plan A' for brand resonance. She bridges the gap between pure art and commercial leverage—translating complex brand DNA into high-density visual systems that speak directly to audience intent."
          imageClass="member-one"
          isReversed={true}
          skills={[
            {
              name: "ART DIRECTION",
              value: 90,
              color: "blue",
              magic1: "magic-1",
              magic2: "magic-2",
            },
            {
              name: "BRAND LOGIC",
              value: 75,
              color: "yellow",
              magic1: "magic-11",
              magic2: "magic-22",
            },
            {
              name: "USER JOURNEY",
              value: 75,
              color: "pink",
              magic1: "magic-11",
              magic2: "magic-22",
            },
            {
              name: "VISUAL SYSTEMS",
              value: 90,
              color: "green",
              magic1: "magic-1",
              magic2: "magic-2",
            },
          ]}
        />

        <AboutTeamMember
          name="Snehal Thorat"
          role="Web Developer"
          bio="Interface Logic. Snehal views code as a high-velocity design asset. He builds digital infrastructure that isn't just stable, but strategically aesthetic—synchronizing backend precision with world-class, retina-ready UI to ensure zero friction in the user journey."
          imageClass="member-two"
          isReversed={false}
          skills={[
            {
              name: "DIGITAL ARCHITECTURE",
              value: 95,
              color: "blue",
              magic1: "magic-1",
              magic2: "magic-2",
            },
            {
              name: "RETINA UI",
              value: 90,
              color: "yellow",
              magic1: "magic-11",
              magic2: "magic-22",
            },
            {
              name: "CODE EFFICIENCY",
              value: 75,
              color: "pink",
              magic1: "magic-111",
              magic2: "magic-222",
            },
            {
              name: "SYSTEM LOGIC",
              value: 90,
              color: "green",
              magic1: "magic-1111",
              magic2: "magic-2222",
            },
          ]}
        />

        <AboutTeamMember
          name="Raghu Thomas"
          role="Fashion Photographer"
          bio="Visual Speculation. Raghu captures the 'European Fresh' perspective that defines TwentyPercent’s boutique status. His lens acts as a strategic filter—isolating high-impact perspectives that elevate standard commercial photography into high-art brand assets."
          imageClass="member-four"
          isReversed={true}
          skills={[
            {
              name: "EUROPEAN FRESH",
              value: 90,
              color: "blue",
              magic1: "magic-1",
              magic2: "magic-2",
            },
            {
              name: "ATMOSPHERIC",
              value: 85,
              color: "yellow",
              magic1: "magic-11",
              magic2: "magic-22",
            },
            {
              name: "MINIMALIST FRAME",
              value: 75,
              color: "pink",
              magic1: "magic-111",
              magic2: "magic-222",
            },
            {
              name: "EDITORIAL",
              value: 80,
              color: "green",
              magic1: "magic-1111",
              magic2: "magic-2222",
            },
          ]}
        />
      </div>
    </section>
  );
};

export default AboutTeamList;

