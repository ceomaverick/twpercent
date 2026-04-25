/**
 * @component HomeParetoSection
 * @page Home (/app/page.tsx)
 * @description Explains the Pareto principle (80/20 rule) as applied to the agency's strategy.
 * @shared false
 * @props none
 */
"use client";

import { useState } from "react";
import Image from "next/image";
import SharedReveal from "@/components/shared/SharedReveal";
import { motion, AnimatePresence } from "framer-motion";

const HomeParetoSection = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="bg-white text-center py-[60px] md:py-[100px]">
      <div className="legacy-container">
        <div className="flex flex-col items-center">
          <div className="w-full">
            <SharedReveal direction="down" delay={0.2} className="flex flex-col items-center">
              <Image
                src="/img/svg/twenty-nav-logo.svg"
                alt="TwentyPercent Logo"
                width={200}
                height={50}
                className="inline-block w-[200px] h-auto"
                decoding="async"
              />
              <h2 className="text-black text-[24px] font-[500] uppercase leading-[1.3] mt-[3rem]">
                Not just a clever name. <br className="hidden md:block" />
                But a strategic operating principle.
              </h2>

              <div className="mt-[20px]">
                <svg width="40" height="4" className="mx-auto">
                  <rect width="40" height="4" style={{ fill: "#5d5d5d" }} />
                </svg>
              </div>
            </SharedReveal>
          </div>
          
          <div className="w-full max-w-[1000px] mx-auto px-[15px]">
            <SharedReveal direction="up" delay={0.4}>
              <p className="mt-[2.5rem] mb-[30px] text-[#222] max-w-[1000px] mx-auto text-[18px] leading-[1.6]">
                Stop fighting for the 80% that doesn't matter. Most businesses drown in 
                "creative clutter"—wasting budgets on vanity metrics and noise. We 
                specialize in identifying your high-velocity levers: the critical 20% of 
                strategy and design that generates 80% of your growth. We don't just 
                design; we engineer efficiency.
              </p>
              {!isExpanded && (
                <button 
                  className="px-[16px] py-[9px] bg-[#222] text-white border border-[#222] rounded-full text-[15px] font-normal tracking-[2px] hover:bg-transparent hover:text-[#222] transition-all duration-300 uppercase"
                  onClick={() => setIsExpanded(true)}
                >
                  DISCOVER YOUR LEVERAGE
                </button>
              )}
            </SharedReveal>

            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.5 }}
                  className="overflow-hidden"
                >
                  <div className="flex flex-wrap mt-[50px] -mx-[15px]">
                    {[
                      {
                        title: "Lead Density",
                        desc: "Volume is a vanity metric. We ignore the 'clicks' and focus on the 20% of high-intent visitors who actually convert. We optimize for lead density, not just traffic."
                      },
                      {
                        title: "Strategic SEO",
                        desc: "Stop chasing a thousand keywords. We dominate the 20% of search terms that own 80% of the market intent. We deliver dominance where it actually moves the needle."
                      },
                      {
                        title: "High-Octane Content",
                        desc: "Most content is noise. We engineer the 20% of messaging that resonates with your customer's core needs. Pure signal, zero clutter, maximum retention."
                      }
                    ].map((item, i) => (
                      <div key={i} className="w-full md:w-1/3 px-[15px] mb-[40px] md:mb-0">
                        <div className="text-left">
                          <h4 className="text-[16px] font-medium mb-[15px] uppercase tracking-[1px] text-black">{item.title}</h4>
                          <p className="text-[#666] leading-[1.5]">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeParetoSection;



