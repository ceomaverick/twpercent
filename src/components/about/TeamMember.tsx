"use client";

import { Reveal } from "@/components/Reveal";
import { motion } from "framer-motion";

interface Skill {
  name: string;
  value: number;
  color: string;
  magic1: string;
  magic2: string;
}

interface TeamMemberProps {
  name: string;
  role: string;
  bio: string;
  imageClass: string;
  isReversed?: boolean;
  skills: Skill[];
}

const TeamMember = ({
  name,
  role,
  bio,
  imageClass,
  isReversed,
  skills,
}: TeamMemberProps) => {
  const colorMap: Record<string, string> = {
    blue: "#3b3b3b",
    yellow: "#222",
    pink: "#444",
    green: "#121212",
  };

  return (
    <div className="flex flex-wrap -mx-[15px] mb-[60px] items-stretch">
      {/* Image Column */}
      <div className={`w-full md:w-5/12 px-[15px] ${isReversed ? "md:order-last" : "md:order-first"}`}>
        <Reveal direction="up" delay={0.2} className="h-full">
          <div className={`${imageClass} w-full h-[400px] md:h-full min-h-[400px] bg-cover bg-center shadow-sm`}></div>
        </Reveal>
      </div>

      {/* Content Column */}
      <div className={`w-full md:w-7/12 px-[15px] ${isReversed ? "md:order-first" : "md:order-last"}`}>
        <Reveal direction="up" delay={0.3} className="bg-white p-[30px] md:p-[60px] h-full flex flex-col justify-center shadow-sm">
          <h3 className="text-black text-[24px] font-[500] pb-[20px] leading-[1.3] uppercase tracking-wide">
            {name} | <span className="text-[#999] font-[300] normal-case">{role}</span>
          </h3>
          <p className="pb-[40px] text-[#444]">{bio}</p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-[20px]">
            {skills.map((skill, index) => {
              const percentage = skill.value;
              const rightSideRotation = percentage <= 50 ? (percentage / 50) * 180 : 180;
              const leftSideRotation = percentage > 50 ? ((percentage - 50) / 50) * 180 : 0;
              const borderColor = colorMap[skill.color] || "#222";

              return (
                <div key={index} className="flex flex-col items-center">
                  <Reveal direction="up" delay={0.4 + index * 0.1}>
                    <div className="relative w-[80px] h-[80px] flex items-center justify-center bg-white rounded-full mb-[15px]">
                      <div className="absolute inset-0 border-[8px] border-[#ddd] rounded-full"></div>
                      
                      <div className="absolute top-0 right-0 w-1/2 h-full overflow-hidden">
                        <motion.div 
                          className="absolute top-0 left-[-100%] w-[200%] h-full border-[8px] rounded-full border-t-transparent border-r-transparent"
                          style={{ borderColor: `transparent transparent ${borderColor} ${borderColor}`, rotate: '-45deg' }}
                          initial={{ rotate: -45 }}
                          whileInView={{ rotate: -45 + rightSideRotation }}
                          viewport={{ once: false }}
                          transition={{ duration: 1, delay: 0.4 + index * 0.1, ease: "linear" }}
                        ></motion.div>
                      </div>

                      <div className="absolute top-0 left-0 w-1/2 h-full overflow-hidden">
                        <motion.div 
                          className="absolute top-0 right-[-100%] w-[200%] h-full border-[8px] rounded-full border-b-transparent border-l-transparent"
                          style={{ borderColor: `${borderColor} ${borderColor} transparent transparent`, rotate: '-45deg' }}
                          initial={{ rotate: -45 }}
                          whileInView={{ rotate: -45 + leftSideRotation }}
                          viewport={{ once: false }}
                          transition={{ duration: 1, delay: 0.8 + index * 0.1, ease: "linear" }}
                        ></motion.div>
                      </div>

                      <div className="relative z-20 text-[14px] font-bold">{skill.value}%</div>
                    </div>
                    <h5 className="text-[11px] font-bold uppercase tracking-wider text-center">{skill.name}</h5>
                  </Reveal>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </div>
  );
};

export default TeamMember;
