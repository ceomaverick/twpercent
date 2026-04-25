/**
 * @component ServicesGraphicDesign
 * @page Services (/app/services/page.tsx)
 * @description Section detailing graphic design and marketing support services.
 * @shared false
 * @props none
 */

import Image from "next/image";
import SharedReveal from "@/components/shared/SharedReveal";

const ServicesGraphicDesign = () => {
  return (
    <section className="bg-[#eee] py-[60px] md:py-[100px]">
      <div className="legacy-container">
        <div className="flex flex-wrap -mx-[15px] items-center">
          <div className="w-full md:w-7/12 px-[15px] text-center order-last md:order-first mt-[40px] md:mt-0">
            <SharedReveal direction="down" delay={0.2}>
              <Image
                src="/img/serv/page.png"
                alt="Graphic Design Hero"
                width={800}
                height={600}
                className="mx-auto h-auto max-w-full md:mt-[-40px]"
                sizes="(max-width: 768px) 100vw, 800px"
              />
            </SharedReveal>
          </div>
          <div className="w-full md:w-5/12 px-[15px] order-first md:order-last">
            <SharedReveal direction="up" delay={0.3}>
              <h2 className="text-black text-[24px] font-[500] mb-[20px] leading-[1.3] uppercase tracking-wide">GRAPHIC DESIGN AND MARKETING SUPPORT</h2>
              <div className="mb-[20px]">
                <svg width="40" height="4">
                  <rect width="40" height="4" style={{ fill: "#5d5d5d" }} />
                </svg>
              </div>
              <p className="mb-[20px]">
                We specialize in communicating your brand consistently through
                effective graphic design. We ensure your brand conveys a clear
                message to your customers.
              </p>
            </SharedReveal>
          </div>
          
          <div className="w-full md:w-5/12 px-[15px] mb-[40px]">
            <SharedReveal direction="down" delay={0.4}>
              <h4 className="text-[18px] font-[500] mb-[15px] uppercase text-[#222]">CREATIVE DESIGN</h4>
              <p>
                Whether you want to build a new brand identity or extend the one
                you already have, we can create a brand new look or creatively
                build on your style and extend it through to your printed
                materials.
              </p>
            </SharedReveal>
          </div>
          <div className="w-full md:w-5/12 md:ml-[16.666%] px-[15px] mb-[40px]">
            <SharedReveal direction="down" delay={0.5}>
              <h4 className="text-[18px] font-[500] mb-[15px] uppercase text-[#222]">MARKETING COLLATERAL</h4>
              <p>
                We have vast experience in creating fresh and new marketing
                collateral for a wide variety of clients and industries. Whether
                you require a design for your stationery or signage.
              </p>
            </SharedReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesGraphicDesign;

