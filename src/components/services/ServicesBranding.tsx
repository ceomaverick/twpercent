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
              <p className="mb-[20px]">
                TwentyPercent helps you in shaping and developing powerful brands.
                We create positive stories for your brand and communicate it to
                your customer in a meaningful way.
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
              <h4 className="text-[18px] font-[500] mb-[15px] uppercase text-[#222]">BRANDING & LOGO DESIGN</h4>
              <p>
                Whether you want to build a new brand identity or extend the one
                you already have, we can create a brand new look or creatively
                build on your style.
              </p>
            </SharedReveal>
          </div>
          <div className="w-full md:w-5/12 md:ml-[16.666%] px-[15px] mb-[40px] mt-[40px]">
            <SharedReveal direction="down" delay={0.5}>
              <h4 className="text-[18px] font-[500] mb-[15px] uppercase text-[#222]">BRAND ANALYSIS & STRATEGY</h4>
              <p>
                Developing a brand strategy is vital in understanding how
                effective you are as a brand. It breaks down the elements of your
                brand to give it a personality.
              </p>
            </SharedReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesBranding;

