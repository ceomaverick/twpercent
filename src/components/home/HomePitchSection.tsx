/**
 * @component HomePitchSection
 * @page Home (/app/page.tsx)
 * @description Final pitch section with contact information and mobile mockup.
 * @shared false
 * @props none
 */
"use client";

import SharedReveal from "@/components/shared/SharedReveal";

const HomePitchSection = () => {
  return (
    <section className="relative w-full text-center py-[80px] text-[#222] min-h-[570px] overflow-hidden">
      <div className="legacy-container relative z-10 max-w-[1000px]">
        <div className="flex flex-wrap -mx-[15px]">
          <div className="w-full px-[15px]">
            <SharedReveal direction="down" delay={0.2}>
              <h2 className="text-black text-[24px] font-[500] uppercase tracking-[2px] mb-[15px]">REQUEST A QUOTE</h2>
              <p>
                Want to reinvigorate your brand, develop a world-class retina-ready
                website or design a visually stunning brochure, we are the people to
                have on your speed dial. Let's grab a cup of coffee and talk
                business.
              </p>
            </SharedReveal>
          </div>
        </div>
      </div>
      
      <SharedReveal direction="up" delay={0.4} className="w-full relative">
        {/* Sophisticated Branding Background */}
        <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] -z-10 pointer-events-none overflow-hidden">
          {/* Large faint 20 */}
          <div className="absolute inset-0 flex items-center justify-center select-none opacity-[0.03]">
            <span className="text-[400px] md:text-[600px] font-black tracking-tighter">20</span>
          </div>
          
          {/* Soft color splash */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-blue-500/5 to-purple-500/5 blur-[120px] rounded-full"></div>
        </div>
        
        {/* Adjusted to -300px as per user request */}
        <div className="w-full h-[570px] bg-[url('/img/bg/iphone-color.png')] bg-no-repeat bg-center bg-contain mt-[75px] mb-[-300px] relative z-10"></div>
      </SharedReveal>
    </section>
  );
};

export default HomePitchSection;



