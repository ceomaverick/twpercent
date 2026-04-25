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
              <p className="mt-[2.5rem] mb-[30px] text-[#222] max-w-[1000px] mx-auto">
                Ever wondered why 20% of the world population holds 80% of its
                wealth? Why 20% of your customers bring you 80% of the profits?
                Or, why 20% of your time leads to 80% of your happiness? The
                answer is hidden in Pareto's Principle. 20% represents the amount
                of time, skill and effort required to make a business tick. It is
                fundamental to business efficiency and success.{" "}
              </p>
              {!isExpanded && (
                <button 
                  className="px-[16px] py-[9px] bg-[#222] text-white border border-[#222] rounded-full text-[15px] font-normal tracking-[2px] hover:bg-transparent hover:text-[#222] transition-all duration-300 uppercase"
                  onClick={() => setIsExpanded(true)}
                >
                  KNOW MORE
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
                        title: "Increase Website Traffic",
                        desc: "The ultimate goal of any business is to attract more eyeballs and generate more leads. Our team will analyze your website data and determine the most valuable leads using the 80/20 principle. We help you improve your traffic and generate quality leads."
                      },
                      {
                        title: "Search Engine Optimization",
                        desc: "If you are a small business, hiring an SEO expert is a waste of money. You need quick and effective steps to get your SEO strategy working. We can suggest your company just enough SEO strategy to give you 80% results."
                      },
                      {
                        title: "Content Marketing",
                        desc: "Most companies follow a schedule mentioned on various websites. They think that posting content regularly will help them get more leads. No. You need to understand whether the content is working or not. We will help you determine the most effective content strategy."
                      }
                    ].map((item, i) => (
                      <div key={i} className="w-full md:w-1/3 px-[15px] mb-[40px] md:mb-0">
                        <div className="text-left">
                          <h4 className="text-[16px] font-[500] mb-[15px] uppercase tracking-[1px]">{item.title}</h4>
                          <p className="text-[#666]">
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



