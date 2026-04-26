/**
 * @component HomeAgencyIntroduction
 * @page Home (/app/page.tsx)
 * @description Introduction section with office background and agency philosophy text.
 * @shared false
 * @props none
 */
"use client";

import SharedReveal from "@/components/shared/SharedReveal";

const HomeAgencyIntroduction = () => {
  return (
    <section className="relative min-h-[500px] bg-[#f7f7f7] border-b border-[#eee] overflow-hidden">
      <div className="absolute top-0 left-0 w-full md:w-1/2 h-[600px] md:h-full bg-[url('/img/bg/office-bg-optimised.jpg')] bg-cover bg-top z-0"></div>
      
      <div className="legacy-container relative z-10">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 h-[600px] md:h-auto hidden md:block"> &nbsp;</div>
          
          <div className="w-full md:w-1/2 hidden md:block">
            <SharedReveal direction="up" delay={0.3} className="px-[15px] py-[6rem] md:pl-[6rem] md:pr-0">
              <h2 className="text-black text-[24px] font-[500] uppercase leading-[1.3] mb-[2rem] mt-[3rem]">
                TWENTYPERCENT<sup className="text-[0.4em] align-top">™</sup> <br className="hidden md:block" /> A highly effective branding and
                digital marketing agency.
              </h2>
              <p className="text-[17px] leading-[1.7] text-[#444]">
                Most agencies sell creativity. We sell effectiveness. Our proprietary 
                methodology isolates the core levers of your brand’s performance, 
                stripping away the noise that standard advertising creates. The 
                result is a streamlined, high-velocity operation that captures 
                maximum market share with significantly less waste.
              </p>
            </SharedReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeAgencyIntroduction;



