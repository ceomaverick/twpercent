"use client";

import Link from "next/link";
import Image from "next/image";
import { Reveal } from "@/components/Reveal";

interface PortfolioItemProps {
  title: string;
  description: string;
  imageSrc: string;
  href: string;
  isReversed?: boolean;
}

const PortfolioItem = ({
  title,
  description,
  imageSrc,
  href,
  isReversed,
}: PortfolioItemProps) => {
  return (
    <Reveal direction="up" delay={0.2} className="flex flex-wrap -mx-[15px] mb-[30px] md:mb-[50px] items-stretch">
      {/* Image Column */}
      <div className={`w-full md:w-8/12 px-[15px] mb-[20px] md:mb-0 ${isReversed ? "md:order-first" : "md:order-last"}`}>
        <div className="relative h-[300px] md:h-[500px] overflow-hidden group cursor-pointer bg-black">
          <Image
            src={imageSrc}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
            className="object-cover transition-opacity duration-500 group-hover:opacity-30"
            loading="lazy"
            decoding="async"
          />
          <Link 
            href={href}
            className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          >
            <div className="relative w-20 h-20 md:w-24 md:h-24">
              <Image
                src="/img/svg/circle.svg"
                alt="View Project"
                fill
                sizes="(max-width: 768px) 80px, 96px"
                className="object-contain"
                loading="lazy"
                decoding="async"
              />
            </div>
          </Link>
        </div>
      </div>

      {/* Text Content Column */}
      <div className={`w-full md:w-4/12 px-[15px] ${isReversed ? "md:order-last" : "md:order-first"}`}>
        <div className="h-full min-h-[300px] md:min-h-[500px] bg-[#f1f1f1] p-[40px] md:p-[60px] flex flex-col items-center justify-center text-center shadow-sm">
          <h3 className="text-black text-[24px] font-[500] mb-[15px] uppercase tracking-wide flex items-center gap-3">
            {!isReversed && (
              <>
                {title}
                <i className="ion-android-arrow-forward text-2xl" aria-hidden="true"></i>
              </>
            )}
            {isReversed && (
              <>
                <i className="ion-android-arrow-back text-2xl" aria-hidden="true"></i>
                {title}
              </>
            )}
          </h3>
          <p>{description}</p>
        </div>
      </div>
    </Reveal>
  );
};

export default PortfolioItem;
