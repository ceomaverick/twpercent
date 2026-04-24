import ServiceHero from "@/components/services/ServiceHero";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web Design & Branding Services in Mumbai | TwentyPercent Designs",
  description: "Explore our expert services in web design, branding, SEO, and social media marketing. TwentyPercent Designs helps Mumbai businesses maximize their online presence.",
};

export default function ServicesPage() {
  return (
    <main className="overflow-hidden">
      <ServiceHero />

      {/* Digital Marketing */}
      <section className="bg-white py-[60px] md:py-[100px]">
        <div className="legacy-container">
          <div className="flex flex-wrap -mx-[15px] items-center">
            <div className="w-full md:w-4/12 px-[15px] mb-[60px] md:mb-0">
              <Reveal direction="up" delay={0.2}>
                <h3 className="text-black text-[24px] font-[500] mb-[20px] leading-[1.3] uppercase tracking-wide">DIGITAL DESIGN AND MARKETING</h3>
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
              </Reveal>
            </div>
            <div className="w-full md:w-8/12 px-[15px] text-center">
              <Reveal direction="down" delay={0.3}>
                <Image
                  src="/img/serv/hero.png"
                  alt="Digital Marketing Hero"
                  width={750}
                  height={500}
                  className="mx-auto h-auto max-w-full"
                />
              </Reveal>
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
                <Reveal direction={i < 2 ? "down" : "up"} delay={0.4 + i * 0.1}>
                  <h4 className="text-[18px] font-[500] mb-[15px] uppercase text-[#222]">{card.title}</h4>
                  <p>
                    {card.desc}
                  </p>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Graphic Design */}
      <section className="bg-[#eee] py-[60px] md:py-[100px]">
        <div className="legacy-container">
          <div className="flex flex-wrap -mx-[15px] items-center">
            <div className="w-full md:w-7/12 px-[15px] text-center order-last md:order-first mt-[40px] md:mt-0">
              <Reveal direction="down" delay={0.2}>
                <Image
                  src="/img/serv/page.png"
                  alt="Graphic Design Hero"
                  width={650}
                  height={400}
                  className="mx-auto h-auto max-w-full md:mt-[-40px]"
                />
              </Reveal>
            </div>
            <div className="w-full md:w-5/12 px-[15px] order-first md:order-last">
              <Reveal direction="up" delay={0.3}>
                <h3 className="text-black text-[24px] font-[500] mb-[20px] leading-[1.3] uppercase tracking-wide">GRAPHIC DESIGN AND MARKETING SUPPORT</h3>
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
              </Reveal>
            </div>
            
            <div className="w-full md:w-5/12 px-[15px] mb-[40px]">
              <Reveal direction="down" delay={0.4}>
                <h4 className="text-[18px] font-[500] mb-[15px] uppercase text-[#222]">CREATIVE DESIGN</h4>
                <p>
                  Whether you want to build a new brand identity or extend the one
                  you already have, we can create a brand new look or creatively
                  build on your style and extend it through to your printed
                  materials.
                </p>
              </Reveal>
            </div>
            <div className="w-full md:w-5/12 md:ml-[16.666%] px-[15px] mb-[40px]">
              <Reveal direction="down" delay={0.5}>
                <h4 className="text-[18px] font-[500] mb-[15px] uppercase text-[#222]">MARKETING COLLATERAL</h4>
                <p>
                  We have vast experience in creating fresh and new marketing
                  collateral for a wide variety of clients and industries. Whether
                  you require a design for your stationery or signage.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Branding */}
      <section className="bg-white py-[60px] md:py-[100px]">
        <div className="legacy-container">
          <div className="flex flex-wrap -mx-[15px] items-center">
            <div className="w-full md:w-4/12 px-[15px]">
              <Reveal direction="down" delay={0.2}>
                <h3 className="text-black text-[24px] font-[500] mb-[20px] leading-[1.3] uppercase tracking-wide">BRANDING DESIGN, ANALYSIS AND STRATEGY.</h3>
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
              </Reveal>
            </div>
            <div className="w-full md:w-8/12 px-[15px] text-center">
              <Reveal direction="up" delay={0.3}>
                <Image
                  src="/img/serv/vb.png"
                  alt="Branding Analysis Hero"
                  width={750}
                  height={500}
                  className="mx-auto h-auto max-w-full"
                />
              </Reveal>
            </div>
            
            <div className="w-full md:w-5/12 px-[15px] mb-[40px] mt-[40px]">
              <Reveal direction="down" delay={0.4}>
                <h4 className="text-[18px] font-[500] mb-[15px] uppercase text-[#222]">BRANDING & LOGO DESIGN</h4>
                <p>
                  Whether you want to build a new brand identity or extend the one
                  you already have, we can create a brand new look or creatively
                  build on your style.
                </p>
              </Reveal>
            </div>
            <div className="w-full md:w-5/12 md:ml-[16.666%] px-[15px] mb-[40px] mt-[40px]">
              <Reveal direction="down" delay={0.5}>
                <h4 className="text-[18px] font-[500] mb-[15px] uppercase text-[#222]">BRAND ANALYSIS & STRATEGY</h4>
                <p>
                  Developing a brand strategy is vital in understanding how
                  effective you are as a brand. It breaks down the elements of your
                  brand to give it a personality.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Work Interlink*/}
      <section className="bg-[#333] text-white py-[60px] md:py-[80px]">
        <div className="legacy-container">
          <div className="flex flex-wrap -mx-[15px] items-center">
            <div className="w-full md:w-7/12 px-[15px] mb-[40px] md:mb-0">
              <Reveal direction="down" delay={0.2}>
                <h3 className="text-white text-[20px] md:text-[24px] font-[300] uppercase tracking-wide leading-[1.3]">
                  As they always say the work should speak for itself. Check out
                  what our work has to say.{" "}
                </h3>
              </Reveal>
            </div>
            <div className="w-full md:w-3/12 md:ml-[16.666%] px-[15px] text-center md:text-right">
              <Reveal direction="up" delay={0.4}>
                <Link href="/work" className="inline-block px-[25px] py-[12px] border border-white text-white rounded-full text-[14px] font-normal tracking-[2px] hover:bg-white hover:text-black transition-all duration-300 uppercase">
                  OUR PORTFOLIO
                </Link>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
