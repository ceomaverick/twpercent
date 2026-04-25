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
              <p className="text-[17px] leading-[1.7] text-[#444] mb-[20px]">
                Visual noise is the enemy of effectiveness. We strip away the clutter 
                to deliver a singular, potent brand message that resonates instantly 
                across every physical and digital touchpoint.
              </p>
            </SharedReveal>
          </div>
          
          <div className="w-full md:w-5/12 px-[15px] mb-[40px]">
            <SharedReveal direction="down" delay={0.4}>
              <h4 className="text-[18px] font-medium mb-[15px] uppercase text-[#222]">CREATIVE DESIGN</h4>
              <p>
                We don't just 'make it look good.' We engineer visual systems that 
                build immediate authority, whether creating a new identity or 
                evolving an established brand for a high-velocity market.
              </p>
            </SharedReveal>
          </div>
          <div className="w-full md:w-5/12 md:ml-[16.666%] px-[15px] mb-[40px]">
            <SharedReveal direction="down" delay={0.5}>
              <h4 className="text-[18px] font-medium mb-[15px] uppercase text-[#222]">MARKETING COLLATERAL</h4>
              <p>
                Every piece of collateral is a leverage point. From stationery to 
                signage, we ensure your printed materials work harder—capturing 
                attention and reinforcing your market position with precision.
              </p>
            </SharedReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesGraphicDesign;

