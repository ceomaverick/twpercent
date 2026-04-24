"use client";

import { Reveal } from "@/components/Reveal";

const PitchSection = () => {
  return (
    <section className="relative w-full text-center py-[80px] text-[#222] min-h-[570px] overflow-hidden">
      <div className="legacy-container relative z-10 max-w-[1000px]">
        <div className="flex flex-wrap -mx-[15px]">
          <div className="w-full px-[15px]">
            <Reveal direction="down" delay={0.2}>
              <h3 className="text-black text-[24px] font-[500] uppercase tracking-[2px] mb-[15px]">REQUEST A QUOTE</h3>
              <p>
                Want to reinvigorate your brand, develop a world-class retina-ready
                website or design a visually stunning brochure, we are the people to
                have on your speed dial. Let's grab a cup of coffee and talk
                business.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
      
      <Reveal direction="up" delay={0.4} className="w-full">
        {/* Adjusted to -300px as per user request */}
        <div className="w-full h-[570px] bg-[url('/img/bg/iphone-color.png')] bg-no-repeat bg-center bg-contain mt-[75px] mb-[-300px]"></div>
      </Reveal>
    </section>
  );
};

export default PitchSection;
