/**
 * @component ServicesDigitalDesign
 * @page Services (/app/services/page.tsx)
 * @description Section detailing digital design and marketing services.
 * @shared false
 * @props none
 */

import Image from "next/image";
import SharedReveal from "@/components/shared/SharedReveal";

const ServicesDigitalDesign = () => {
  return (
    <section className="bg-white py-[60px] md:py-[100px]">
      <div className="legacy-container">
        <div className="flex flex-wrap -mx-[15px] items-center">
          <div className="w-full md:w-4/12 px-[15px] mb-[60px] md:mb-0">
            <SharedReveal direction="up" delay={0.2}>
              <h2 className="text-black text-[24px] font-[500] mb-[20px] leading-[1.3] uppercase tracking-wide">DIGITAL DESIGN AND MARKETING</h2>
              <div className="mb-[20px]">
                <svg width="40" height="4">
                  <rect width="40" height="4" style={{ fill: "#5d5d5d" }} />
                </svg>
              </div>
              <p className="text-[17px] leading-[1.7] text-[#444]">
                Accessibility is the baseline; conversion is the goal. We engineer 
                high-velocity digital interfaces that transform passive browsers 
                into active brand advocates across every device.
              </p>
            </SharedReveal>
          </div>
          <div className="w-full md:w-8/12 px-[15px] text-center">
            <SharedReveal direction="down" delay={0.3}>
              <Image
                src="/img/serv/hero.png"
                alt="Digital Marketing Hero"
                width={800}
                height={600}
                className="mx-auto h-auto max-w-full"
                sizes="(max-width: 768px) 100vw, 800px"
              />
            </SharedReveal>
          </div>
        </div>
        
        <div className="flex flex-wrap -mx-[15px] mt-[40px] md:mt-[60px]">
          {[
            { title: "SOCIAL MEDIA MARKETING", desc: "We move beyond 'likes' to build high-velocity engagement. We identify the 20% of content formats that drive 80% of your audience interaction and brand loyalty." },
            { title: "WEBSITE DESIGN", desc: "We don't just build sites; we architect digital sales engines. Our designs focus on the high-intent user journey to maximize conversion with minimal friction." },
            { title: "SEARCH ENGINE OPTIMIZATION", desc: "Dominance over Visibility. We focus on the 20% of high-intent search terms that own 80% of your market's conversion potential, ensuring you move the needle." },
            { title: "PERFORMANCE ADVERTISING", desc: "Stop wasting budget on broad reach. We engineer surgical Google and Facebook campaigns that target the 20% of high-value prospects responsible for your growth." }
          ].map((card, i) => (
            <div key={i} className={`w-full md:w-5/12 px-[15px] mb-[40px] ${i % 2 !== 0 ? "md:ml-[16.666%]" : ""}`}>
              <SharedReveal direction={i < 2 ? "down" : "up"} delay={0.4 + i * 0.1}>
                <h4 className="text-[18px] font-[500] mb-[15px] uppercase text-[#222]">{card.title}</h4>
                <p>
                  {card.desc}
                </p>
              </SharedReveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesDigitalDesign;

