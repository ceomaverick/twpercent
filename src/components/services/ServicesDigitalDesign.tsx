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
              <p>
                Websites ensure that your brand is accessible by anyone, anywhere.
                No longer confined to a desktop computer, your website is an
                important digital marketing tool.{" "}
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
            { title: "SOCIAL MEDIA MARKETING", desc: "If you want to build and develop relationships with customers, increase brand loyalty and drive traffic to your website then social media marketing is a key marketing tool for you." },
            { title: "WEBSITE DESIGN", desc: "Websites ensure that your brand is accessible by anyone, anywhere. No longer confined to a desktop computer, your website is an important digital marketing tool." },
            { title: "SEARCH ENGINE OPTIMIZATION", desc: "What is the point of having a website if you cannot be found? TwentyPercent offers a Search Engine Optimization (SEO) service, that aims to improve your organic search engine rankings." },
            { title: "GOOGLE/ FACEBOOK ADVERTISING", desc: "TwentyPercent has the in-depth knowledge and tools to help you make the most of your website. We can help drive more traffic to your website and grow your business online." }
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

