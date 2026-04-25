/**
 * @component HomeApplicationSection
 * @page Home (/app/page.tsx)
 * @description Grid of services/applications offered by the agency with icons.
 * @shared false
 * @props none
 */
"use client";

import Link from "next/link";
import Image from "next/image";
import SharedReveal from "@/components/shared/SharedReveal";

const HomeApplicationSection = () => {
  const services = [
    {
      title: "SOCIAL MEDIA MARKETING",
      icon: "/img/svg/bubble-optimised.png",
      width: 30,
      height: 32,
      href: "/services",
    },
    {
      title: "WEB DESIGN & DEVELOPMENT",
      icon: "/img/svg/coding-optimised.png",
      width: 32,
      height: 32,
      href: "/services",
    },
    {
      title: "BROCHURES & CATALOGUES",
      icon: "/img/svg/pic-optimised.png",
      width: 32,
      height: 32,
      href: "/services",
    },
    {
      title: "STRATEGIC ADVERTISING",
      icon: "/img/svg/graph-optimised.png",
      width: 32,
      height: 32,
      href: "/services",
    },
    {
      title: "CORPORATE IDENTITY & LOGO DESIGN",
      icon: "/img/svg/anchor-optimised.png",
      width: 26,
      height: 32,
      href: "/services",
    },
    {
      title: "FLOOR PLAN DRAWINGS",
      icon: "/img/svg/crop-optimised.png",
      width: 32,
      height: 32,
      href: "/services",
    },
  ];

  return (
    <section className="bg-[#f7f7f7] border-y border-[#eee] py-[100px] overflow-hidden">
      <div className="legacy-container">
        <div className="flex flex-wrap -mx-[15px] items-center">
          {/* Text Content */}
          <div className="w-full md:w-5/12 px-[15px] text-left mb-[60px] md:mb-0">
            <SharedReveal direction="up" delay={0.2}>
              <h2 className="text-black text-[24px] font-[500] uppercase pb-[15px] leading-[1.3]">
                We determine that <br className="hidden md:block" />
                20% in everything we do.
              </h2>
              <p>
                We help our clients determine the critically influential factors that
                contribute to the success of their marketing campaign. Based on
                marketing data and insights, the TwentyPercent's methodology figures
                out a way to maximize results and put a strategy in the place to
                achieve them with minimal efforts.
              </p>
            </SharedReveal>
          </div>

          {/* Icon Grid */}
          <div className="w-full md:w-6/12 md:ml-[8.333%] px-[15px] text-center">
            <SharedReveal direction="down" delay={0.4}>
              <div className="grid grid-cols-3 gap-y-[60px]">
                {services.map((service, index) => (
                  <div key={index} className="text-center group">
                    <Link href={service.href} className="block">
                      <div className="mx-auto transition-transform duration-300 group-hover:scale-110 flex items-center justify-center h-[32px]">
                        <Image
                          src={service.icon}
                          alt={service.title}
                          width={service.width}
                          height={service.height}
                          className="object-contain"
                          style={{ height: 'auto' }}
                          decoding="async"
                        />
                      </div>
                      <h5 className="text-[11px] md:text-[12px] font-[500] mt-[30px] mb-[10px] leading-[1.3] text-[#333] tracking-[2px] uppercase whitespace-pre-line">
                        {service.title}
                      </h5>
                    </Link>
                  </div>
                ))}
              </div>
            </SharedReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeApplicationSection;



