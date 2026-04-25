/**
 * @component ServicesWorkCTA
 * @page Services (/app/services/page.tsx)
 * @description Call-to-action section interlinking to the portfolio/work page.
 * @shared false
 * @props none
 */

import Link from "next/link";
import SharedReveal from "@/components/shared/SharedReveal";

const ServicesWorkCTA = () => {
  return (
    <section className="bg-[#333] text-white py-[60px] md:py-[80px]">
      <div className="legacy-container">
        <div className="flex flex-wrap -mx-[15px] items-center">
          <div className="w-full md:w-7/12 px-[15px] mb-[40px] md:mb-0">
            <SharedReveal direction="down" delay={0.2}>
              <h3 className="text-white text-[20px] md:text-[24px] font-[300] uppercase tracking-wide leading-[1.3]">
                As they always say the work should speak for itself. Check out
                what our work has to say.{" "}
              </h3>
            </SharedReveal>
          </div>
          <div className="w-full md:w-3/12 md:ml-[16.666%] px-[15px] text-center md:text-right">
            <SharedReveal direction="up" delay={0.4}>
              <Link href="/work" className="inline-block px-[25px] py-[12px] border border-white text-white rounded-full text-[14px] font-normal tracking-[2px] hover:bg-white hover:text-black transition-all duration-300 uppercase">
                OUR PORTFOLIO
              </Link>
            </SharedReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesWorkCTA;

