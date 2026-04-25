/**
 * @component HomeHero
 * @page Home (/app/page.tsx)
 * @description Hero section with background image, animated text, and particle effects.
 * @shared false
 * @props none
 */
"use client";

import { useEffect, useState, useMemo } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { ISourceOptions } from "@tsparticles/engine";

import Image from "next/image";

const HomeHero = () => {
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
      interactivity: {
        events: {
          onClick: { enable: true, mode: "push" },
          onHover: { enable: true, mode: "repulse" },
        },
        modes: {
          push: { quantity: 4 },
          repulse: { distance: 100, duration: 0.4 },
        },
      },
      particles: {
        color: { value: "#666" },
        links: {
          color: "#666",
          distance: 150,
          enable: true,
          opacity: 0.4,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: { default: "out" },
          random: false,
          speed: 2,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 800,
          },
          value: 120,
        },
        opacity: {
          value: 0.2,
        },
        shape: {
          type: "polygon",
          options: {
            polygon: { sides: 5 },
          },
        },
        size: {
          value: { min: 1, max: 3 },
        },
      },
      detectRetina: true,
      fullScreen: { enable: false },
    }),
    []
  );

  return (
    <motion.section 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative text-center w-full overflow-hidden pt-[56px] md:pt-[77px]"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src="/img/bg/home-bg-dark-optimised.jpg"
          alt="Effective Advertising Agency in Mumbai"
          fill
          priority
          loading="eager"
          sizes="100vw"
          fetchPriority="high"
          className="object-cover"
        />
      </div>

      <div className="legacy-container relative z-10 min-h-[450px] md:min-h-[480px] flex items-center justify-center">
        {init && (
          <div className="absolute inset-0 z-[-1]">
            <Particles
              id="tsparticles"
              options={particlesOptions}
              className="w-full h-full"
            />
          </div>
        )}
        
        <div className="w-full">
          <div className="flex flex-col items-center justify-center py-12 md:py-0">
            <motion.h1
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-[25px] md:text-[45px] text-white font-[100] mb-[30px] uppercase leading-[1.2] tracking-normal"
            >
              <span className="eyebrow block mb-[10px]">Advertising Agency in Mumbai</span>
              Minimize efforts. Maximize results. <br className="hidden md:block" /> Do more with
              TwentyPercent <sup className="text-[0.4em] align-top">™</sup>
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <Link
                href="/about"
                className="inline-block px-[16px] py-[9px] border border-white text-white rounded-full text-[15px] font-normal tracking-wide hover:bg-white hover:text-black transition-all duration-300 uppercase"
              >
                LEARN MORE
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default HomeHero;
