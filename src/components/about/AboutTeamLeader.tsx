/**
 * @component AboutTeamLeader
 * @page About (/app/about/page.tsx)
 * @description Profile section for the agency's creative lead.
 * @shared false
 * @props none
 */
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SharedReveal from "@/components/shared/SharedReveal";

const AboutTeamLeader = () => {
  const skills = [
    { name: "STORY TELLING", value: 90, color: "bg-[#3b3b3b]" },
    { name: "DESIGN", value: 85, color: "bg-[#222]" },
    { name: "WEB DEVELOPMENT", value: 75, color: "bg-[#414141]" },
    { name: "STRATEGY", value: 95, color: "bg-[#222]" },
  ];

  return (
    <section className="py-[100px] bg-white overflow-hidden">
      <div className="legacy-container">
        <SharedReveal direction="up" delay={0.2} className="flex flex-wrap -mx-[15px] items-center">
          <div className="w-full md:w-5/12 px-[15px] mb-[60px] md:mb-0">
            <div className="relative min-h-[420px] md:mr-[25px] shadow-sm bg-[#f7f7f7]">
              <Image
                src="/img/team/avi.jpg"
                alt="Avinash Deshmukh"
                fill
                sizes="(max-width: 768px) 100vw, 400px"
                className="object-cover object-top"
                priority
                loading="eager"
                decoding="async"
              />
            </div>
          </div>
          <div className="w-full md:w-7/12 px-[15px]">
            <div className="md:ml-[25px]">
              <h2 className="text-black text-[20px] md:text-[24px] font-[500] pb-[20px] leading-[1.3] text-[#111] uppercase tracking-wide">
                Avinash Deshmukh | <span className="text-[#999] font-[300] normal-case text-[0.75em]">Creative Lead and Tech Nerd</span>
              </h2>
              <p className="pb-[20px]">
                A creative nerd with 10+ years’ of experience in advertising. He
                majors in ideation and creative writing, but also likes to tinker in
                design once in a while. Currently, he leads the team at
                TwentyPercent. <br />
                <br /> Check his complete profile at{" "}
                <a
                  href="http://avinashdeshmukh.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black font-medium hover:underline transition-all"
                >
                  www.avinashdeshmukh.com
                </a>
              </p>

              <div className="space-y-[10px] mt-[30px]">
                {skills.map((skill, index) => (
                  <div key={index} className="h-[35px] bg-[#eee] w-full relative">
                    <motion.div
                      className={`h-full ${skill.color} absolute left-0 top-0 flex items-center`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.value}%` }}
                      viewport={{ once: false }}
                      transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 + index * 0.1 }}
                      aria-valuenow={skill.value}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    >
                      <span className="w-full px-[20px] text-white text-[12px] tracking-[2px] uppercase whitespace-nowrap flex justify-between items-center">
                        <span className="font-medium">{skill.name}</span>
                        <i className="not-italic font-medium opacity-80">{skill.value}%</i>
                      </span>
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </SharedReveal>
      </div>
    </section>
  );
};

export default AboutTeamLeader;


