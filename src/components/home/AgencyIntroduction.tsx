"use client";

import { Reveal } from "@/components/Reveal";

const AgencyIntroduction = () => {
  return (
    <section className="relative min-h-[500px] bg-[#f7f7f7] border-b border-[#eee] overflow-hidden">
      <div className="absolute top-0 left-0 w-full md:w-1/2 h-[600px] md:h-full bg-[url('/img/bg/office-bg-optimised.jpg')] bg-cover bg-top z-0"></div>
      
      <div className="legacy-container relative z-10">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 h-[600px] md:h-auto hidden md:block"> &nbsp;</div>
          
          <div className="w-full md:w-1/2">
            <Reveal direction="up" delay={0.3} className="px-[15px] py-[6rem] md:pl-[6rem] md:pr-0">
              <h3 className="text-black text-[24px] font-[500] uppercase leading-[1.3] mb-[2rem] mt-[3rem]">
                TWENTYPERCENT<sup className="text-[0.4em] align-top">™</sup> <br className="hidden md:block" /> A highly effective branding and
                digital marketing agency.
              </h3>
              <p>
                Meet a professional agency that believes in delivering effective
                results. We have developed a methodology to help businesses
                identify, understand and apply the core principle of effectiveness
                in their design and advertising. As a result, they're able to
                streamline their design and advertising activities and save a lot
                of money and effort in the process.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgencyIntroduction;
