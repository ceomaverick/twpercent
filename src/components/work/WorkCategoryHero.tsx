/**
 * @component WorkCategoryHero
 * @page WorkCategory (/app/work/[category]/page.tsx)
 * @description Hero section for a specific portfolio category showing its title with a rollover effect.
 * @shared false
 * @props title: string, heroBg: string
 */

import SharedReveal from "@/components/shared/SharedReveal";

interface WorkCategoryHeroProps {
  title: string;
  heroBg: string;
}

const WorkCategoryHero = ({ title, heroBg }: WorkCategoryHeroProps) => {
  return (
    <section 
      className="min-h-[200px] md:min-h-[400px] w-full text-center flex items-center justify-center pt-[56px] md:pt-[77px] bg-no-repeat bg-center bg-cover"
      style={{ backgroundImage: heroBg ? `url(${heroBg})` : 'none' }}
    >
      <div className="container">
        <div className="flex flex-wrap -mx-[15px]">
          <div className="w-full px-[15px]">
            <div className="flex items-center justify-center w-full h-full">
              <SharedReveal direction="down" delay={0.2}>
                <div className="link link--yaku text-white text-[35px] md:text-8xl font-[900] tracking-[2px] leading-tight">
                  {title.split("").map((char, i) => (
                    <span key={i} className="text-white">
                      {char === " " ? "\u00A0" : char}
                    </span>
                  ))}
                </div>
              </SharedReveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkCategoryHero;

