/**
 * @component WorkCategoryGallery
 * @page WorkCategory (/app/work/[category]/page.tsx)
 * @description Renders the gallery sections for a portfolio category, including text intros and image grids.
 * @shared false
 * @props sections: PortfolioSection[]
 */

import Image from "next/image";
import SharedReveal from "@/components/shared/SharedReveal";
import { PortfolioSection } from "@/data/portfolio";

interface WorkCategoryGalleryProps {
  sections: PortfolioSection[];
}

const WorkCategoryGallery = ({ sections }: WorkCategoryGalleryProps) => {
  return (
    <>
      {sections.map((section, index) => (
        <section
          key={index}
          className={`w-full h-auto py-[80px] pb-[60px] ${index % 2 !== 0 ? "bg-[#f9f9f9]" : "bg-white"}`}
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
                    <SharedReveal direction={revealDir} delay={0.2 + i * 0.1}>
                      {col.type === "image" && col.image && (
                        <Image
                          src={col.image}
                          alt="Portfolio Image"
                          width={800}
                          height={600}
                          className="block max-w-full h-auto"
                          style={{ height: 'auto' }}
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
                        />
                      )}
                      {col.type === "text" && col.content && (
                        <div className="text-left">
                          {col.content.client && (
                            <>
                              <h5 className="font-[500] text-[15px] pb-[10px] m-0 leading-[14px] uppercase text-[#111]">
                                <i className="ion-android-contact mr-[10px] text-[#aaa]" aria-hidden="true"></i>
                                CLIENT
                              </h5>
                              <p className="mb-6 font-[300] text-[16px] text-[#444]">{col.content.client}</p>
                            </>
                          )}
                          {col.content.project && (
                            <>
                              <h5 className="font-[500] text-[15px] pb-[10px] m-0 leading-[14px] uppercase text-[#111]">
                                <i className="ion-trophy mr-[10px] text-[#aaa]" aria-hidden="true"></i>
                                PROJECT
                              </h5>
                              <p className="mb-6 font-[300] text-[16px] text-[#444]">{col.content.project}</p>
                            </>
                          )}
                          {col.content.details && (
                            <>
                              <h5 className="font-[500] text-[15px] pb-[10px] m-0 leading-[14px] uppercase text-[#111]">
                                <i className="ion-unlocked mr-[10px] text-[#aaa]" aria-hidden="true"></i>
                                DETAILS
                              </h5>
                              <p className="font-[300] text-[16px] text-[#444]">{col.content.details}</p>
                            </>
                          )}
                        </div>
                      )}
                    </SharedReveal>
                  </div>
                );
              })}

              {/* Clearfix simulation */}
              {!section.isOdd && section.introColumns.every(c => c.type === "text") && (
                <div className="w-full"></div>
              )}

              {/* Gallery */}
              {section.gallery.map((img, i) => {
                const isSingleImage = section.gallery.length === 1;
                
                let colW = "md:w-1/2";
                if (isSingleImage || img.className?.includes("col-sm-12")) {
                  colW = "w-full";
                } else if (img.className?.includes("col-sm-4")) {
                  colW = "md:w-1/3";
                }
                
                const mt = img.className?.includes("s-t30") ? "mt-[30px]" : "mt-[50px]";
                
                return (
                  <div
                    key={i}
                    className={`relative px-[15px] ${colW} ${mt}`}
                  >
                    <SharedReveal direction="up" delay={0.4 + i * 0.05}>
                      <Image
                        src={img.src}
                        alt="Portfolio Gallery Image"
                        width={1200}
                        height={800}
                        className="block max-w-full h-auto"
                        style={{ height: 'auto' }}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                      />
                    </SharedReveal>
                  </div>
                );
              })}

              {/* Icons Section */}
              {section.icons && (
                <div className="w-full px-[15px] mt-[50px]">
                  <div className="flex flex-wrap -mx-[15px]">
                    {section.icons.map((icon, i) => (
                      <div key={i} className="w-full md:w-1/3 px-[15px] text-center mb-10">
                        <SharedReveal direction="up" delay={0.2 + i * 0.1}>
                          <Image
                            src={icon.src}
                            alt={icon.label}
                            width={100}
                            height={100}
                            className="block max-w-full h-auto mx-auto mb-4"
                            style={{ height: 'auto' }}
                            loading="lazy"
                            decoding="async"
                            sizes="100px"
                          />
                          <p className="uppercase tracking-wider">{icon.label}</p>
                        </SharedReveal>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      ))}
    </>
  );
};

export default WorkCategoryGallery;

