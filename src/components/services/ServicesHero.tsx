/**
 * @component ServicesHero
 * @page Services (/app/services/page.tsx)
 * @description Hero section for the Services page with background image and particle effects.
 * @shared false
 * @props none
 */
"use client";

import { useEffect, useState, useMemo } from "react";
import { motion } from "framer-motion";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { ISourceOptions } from "@tsparticles/engine";

import Image from "next/image";

const ServicesHero = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesOptions: ISourceOptions = useMemo(
    () => ({
      fpsLimit: 120,
      particles: {
        number: { value: 180, density: { enable: true, area: 800 } },
        color: { value: "#222" },
        shape: { type: "circle" },
        opacity: { value: 0.3 },
        size: { value: { min: 1, max: 8 } },
        move: { enable: true, speed: 4, direction: "bottom", random: false, straight: false, outModes: { default: "out" } },
      },
      detectRetina: true,
      fullScreen: { enable: false },
    }),
    []
  );

  return (
    <motion.section
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.8 }}
      className="relative text-center w-full overflow-hidden pt-[56px] md:pt-[77px]"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src="/img/bg/services-dark-bg-optimised.jpg"
          alt="Services - TwentyPercent Designs"
          fill
          priority
          loading="eager"
          sizes="100vw"
          fetchPriority="high"
          className="object-cover"
        />
      </div>
      
      <div className="legacy-container relative z-10 min-h-[350px] md:min-h-[480px] flex items-center justify-center">
        {init && (
          <div className="absolute inset-0 z-[-1]">
            <Particles id="tsparticles" options={particlesOptions} className="w-full h-full" />
          </div>
        )}
        
        <div className="w-full">
          <div className="flex flex-col items-center justify-center py-12 md:py-0">
            <motion.h1
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-[25px] md:text-[45px] text-white font-[100] mb-[30px] uppercase leading-[1.2]"
            >
              <span className="eyebrow block mb-[10px]">Web Design & Branding Services</span>
              digital. graphic design. branding. <br className="hidden md:block" />
              effective immediately.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, delay: 1 }}
              className="text-white uppercase tracking-[2px] text-[14px] md:text-[18px] font-[300]"
            >
              Serving results. saving money and efforts.
            </motion.p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default ServicesHero;


