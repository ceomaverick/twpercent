import { portfolioData } from "@/data/portfolio";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { Metadata } from "next";

const heroBackgrounds: Record<string, string> = {
  "brochure-bg": "/img/bg/spread.jpg",
  "collateral-bg": "/img/bg/rice.jpg",
  "exploits-bg": "/img/bg/exp-bg.jpg",
  "logo-bg": "/img/bg/rice.jpg",
  "print-bg": "/img/bg/reading.jpg",
  "web-bg": "/img/bg/laptop.jpg",
  "exploit-bg": "/img/bg/exp-bg.jpg",
  "social-bg": "/img/bg/contact-bg-optimised.jpg",
};

export async function generateStaticParams() {
  return Object.keys(portfolioData).map((category) => ({
    category,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category } = await params;
  const data = portfolioData[category];

  if (!data) return {};

  return {
    title: `${data.title} Portfolio | TwentyPercent Designs`,
    description: `Check out our ${data.title.toLowerCase()} portfolio. We have worked with some of the best brands in Mumbai and India.`,
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const data = portfolioData[category];

  if (!data) {
    notFound();
  }

  const heroBg = heroBackgrounds[data.heroClass] || "";

  return (
    <main>
      {/* Page Hero Image */}
      <section 
        className="min-h-[250px] md:min-h-[450px] w-full text-center flex items-center justify-center pt-[56px] md:pt-[77px] bg-no-repeat bg-center bg-cover"
        style={{ backgroundImage: heroBg ? `url(${heroBg})` : 'none' }}
      >
        <div className="container">
          <div className="flex flex-wrap -mx-[15px]">
            <div className="w-full px-[15px]">
              <div className="flex items-center justify-center w-full h-full">
                <Reveal direction="down" delay={0.2}>
                  <a className="link link--yaku text-white" href="#">
                    {data.title.split("").map((char, i) => (
                      <span key={i} className="text-white">
                        {char === " " ? "\u00A0" : char}
                      </span>
                    ))}
                  </a>
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sections */}
      {data.sections.map((section, index) => (
        <section
          key={index}
          className={`w-full h-auto py-[80px] pb-[60px] ${section.isOdd ? "bg-[#f9f9f9]" : "bg-white"}`}
        >
          <div className="container">
            <div className="flex flex-wrap -mx-[15px]">
              {/* Introduction Columns */}
              {section.introColumns.map((col, i) => {
                const isFirst = i === 0;
                const revealDir = isFirst ? "left" : "right";
                
                // Map col-sm-6 etc to Tailwind
                let colW = "md:w-1/2";
                if (col.className?.includes("col-sm-12")) colW = "w-full";
                else if (col.className?.includes("col-sm-4")) colW = "md:w-1/3";
                
                return (
                  <div key={i} className={`relative w-full px-[15px] ${colW}`}>
                    <Reveal direction={revealDir} delay={0.2 + i * 0.1}>
                      {col.type === "image" && col.image && (
                        <Image
                          src={col.image}
                          alt="Portfolio Image"
                          width={600}
                          height={400}
                          className="block max-w-full h-auto"
                        />
                      )}
                      {col.type === "text" && col.content && (
                        <div className="text-left">
                          {col.content.client && (
                            <>
                              <h5 className="font-bold text-[15px] pb-[10px] m-0 leading-[14px] uppercase">
                                <i className="ion-android-contact mr-[10px] text-[#aaa]" aria-hidden="true"></i>
                                CLIENT
                              </h5>
                              <p className="mb-6">{col.content.client}</p>
                            </>
                          )}
                          {col.content.project && (
                            <>
                              <h5 className="font-bold text-[15px] pb-[10px] m-0 leading-[14px] uppercase">
                                <i className="ion-trophy mr-[10px] text-[#aaa]" aria-hidden="true"></i>
                                PROJECT
                              </h5>
                              <p className="mb-6">{col.content.project}</p>
                            </>
                          )}
                          {col.content.details && (
                            <>
                              <h5 className="font-bold text-[15px] pb-[10px] m-0 leading-[14px] uppercase">
                                <i className="ion-unlocked mr-[10px] text-[#aaa]" aria-hidden="true"></i>
                                DETAILS
                              </h5>
                              <p>{col.content.details}</p>
                            </>
                          )}
                        </div>
                      )}
                    </Reveal>
                  </div>
                );
              })}

              {/* Clearfix simulation */}
              {!section.isOdd && section.introColumns.every(c => c.type === "text") && (
                <div className="w-full"></div>
              )}

              {/* Gallery */}
              {section.gallery.map((img, i) => {
                let colW = "md:w-1/2";
                if (img.className?.includes("col-sm-12")) colW = "w-full";
                else if (img.className?.includes("col-sm-4")) colW = "md:w-1/3";
                
                const mt = img.className?.includes("s-t30") ? "mt-[30px]" : "mt-[50px]";
                
                return (
                  <div
                    key={i}
                    className={`relative px-[15px] ${colW} ${mt}`}
                  >
                    <Reveal direction="up" delay={0.4 + i * 0.05}>
                      <Image
                        src={img.src}
                        alt="Portfolio Gallery Image"
                        width={1200}
                        height={800}
                        className="block max-w-full h-auto"
                      />
                    </Reveal>
                  </div>
                );
              })}

              {/* Icons Section */}
              {section.icons && (
                <div className="w-full px-[15px] mt-[50px]">
                  <div className="flex flex-wrap -mx-[15px]">
                    {section.icons.map((icon, i) => (
                      <div key={i} className="w-full md:w-1/3 px-[15px] text-center mb-10">
                        <Reveal direction="up" delay={0.2 + i * 0.1}>
                          <Image
                            src={icon.src}
                            alt={icon.label}
                            width={100}
                            height={100}
                            className="block max-w-full h-auto mx-auto mb-4"
                          />
                          <p className="uppercase tracking-wider">{icon.label}</p>
                        </Reveal>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      ))}

      <section className="w-full bg-white pb-[60px]">
        <div className="container">
          <div className="flex flex-wrap -mx-[15px]">
            <div className="w-full px-[15px] mt-[50px] text-center">
              <Reveal direction="up" delay={0.2}>
                <Link href="/work" className="button button--moema button--round-s">
                  Back to Portfolio
                </Link>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
