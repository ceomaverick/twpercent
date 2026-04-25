/**
 * @component AboutFreelancerCTA
 * @page About (/app/about/page.tsx)
 * @description CTA section for freelancers to join the agency.
 * @shared false
 * @props none
 */
"use client";

import SharedReveal from "@/components/shared/SharedReveal";

const AboutFreelancerCTA = () => {
  return (
    <section className="relative bg-[#333] bg-[url('/img/bg/freelancer.jpg')] bg-cover bg-center text-white py-[100px] text-center overflow-hidden">
      <div className="absolute inset-0 bg-black/50 z-0"></div>
      
      <div className="legacy-container relative z-10">
        <div className="flex flex-wrap -mx-[15px] justify-center">
          <div className="w-full max-w-[900px] px-[15px]">
            <SharedReveal direction="up" delay={0.2}>
              <div className="mb-[15px]">
                <i className="ion-coffee text-[60px] opacity-80"></i>
              </div>
            </SharedReveal>
            <SharedReveal direction="down" delay={0.4}>
              <h1 className="text-[26px] md:text-[45px] font-[100] uppercase mb-[30px] leading-[1.2] tracking-[2px]">
                Hiring freelancers.
                <br /> Eighty percent of the time.
              </h1>
            </SharedReveal>
            <SharedReveal direction="up" delay={0.6}>
              <p>
                While our core team focuses on important functions that immediately
                affect the bottom line of our clients, it is still important to have
                talented professionals to execute the remaining eighty percent. Which
                is why, we hire talented freelancers.
              </p>
            </SharedReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutFreelancerCTA;


