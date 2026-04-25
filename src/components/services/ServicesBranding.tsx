/**
 * @component ServicesBranding
 * @page Services (/app/services/page.tsx)
 * @description Section detailing branding design, analysis, and strategy services.
 * @shared false
 * @props none
 */

import Image from "next/image";
import SharedReveal from "@/components/shared/SharedReveal";

const ServicesBranding = () => {
  return (
    <section className="bg-white py-[60px] md:py-[100px]">
      <div className="legacy-container">
        <div className="flex flex-wrap -mx-[15px] items-center">
          <div className="w-full md:w-4/12 px-[15px]">
            <SharedReveal direction="down" delay={0.2}>
              <h2 className="text-black text-[24px] font-[500] mb-[20px] leading-[1.3] uppercase tracking-wide">BRANDING DESIGN, ANALYSIS AND STRATEGY.</h2>
              <div className="mb-[20px]">
                <svg width="40" height="4">
                  <rect width="40" height="4" style={{ fill: "#5d5d5d" }} />
                </svg>
              </div>
              <p className="text-[17px] leading-[1.7] text-[#444] mb-[20px]">
                We don't just shape brands; we architect market authority. Our strategy 
                isolates the unique 20% of your brand’s DNA that creates 80% of your 
                competitive advantage and communicates it with absolute clarity.
              </p>
            </SharedReveal>
          </div>
          <div className="w-full md:w-8/12 px-[15px] text-center">
            <SharedReveal direction="up" delay={0.3}>
              <Image
                src="/img/serv/vb.png"
                alt="Branding Analysis Hero"
                width={750}
                height={500}
                className="mx-auto h-auto max-w-full"
              />
            </SharedReveal>
          </div>
          
          <div className="w-full md:w-5/12 px-[15px] mb-[40px] mt-[40px]">
            <SharedReveal direction="down" delay={0.4}>
              <h4 className="text-[18px] font-medium mb-[15px] uppercase text-[#222]">BRANDING & LOGO DESIGN</h4>
              <p>
                Identity is your first lever. We create potent visual monograms and 
                marks that are built to disrupt, ensuring your brand stands out in 
                saturated markets with zero ambiguity.
              </p>
            </SharedReveal>
          </div>
          <div className="w-full md:w-5/12 md:ml-[16.666%] px-[15px] mb-[40px] mt-[40px]">
            <SharedReveal direction="down" delay={0.5}>
              <h4 className="text-[18px] font-medium mb-[15px] uppercase text-[#222]">BRAND ANALYSIS & STRATEGY</h4>
              <p>
                Most strategies are static. Ours is high-velocity. We break down your 
                market position to identify exactly where your brand can exert the 
                most influence for the highest return on effort.
              </p>
            </SharedReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesBranding;

