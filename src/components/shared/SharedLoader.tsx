/**
 * @component SharedLoader
 * @page Shared
 * @description Initial page loader with a CSS-animated square and fade-out transition.
 * @shared true
 * @props none
 */
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { useLoading } from "@/context/LoadingContext";

const SharedLoader = () => {
  const { isLoaded } = useLoading();
  const [displayPercent, setDisplayPercent] = useState(0);
  const [shouldExit, setShouldExit] = useState(false);

  useEffect(() => {
    // Safety fallback: signal loaded after 5 seconds regardless
    const safetyTimeout = setTimeout(() => {
      if (!isLoaded) {
        // We don't call setIsLoaded here because we don't want to trigger 
        // logic in other components, just clear the loader
        setShouldExit(true); 
      }
    }, 5000);

    const handleWindowLoad = () => {
      // If we aren't on the homepage (where HomeHero handles it),
      // clear the loader when window is ready.
      if (window.location.pathname !== "/") {
        setTimeout(() => setShouldExit(true), 500);
      }
    };

    if (document.readyState === "complete") {
      handleWindowLoad();
    } else {
      window.addEventListener("load", handleWindowLoad);
    }

    return () => {
      clearTimeout(safetyTimeout);
      window.removeEventListener("load", handleWindowLoad);
    };
  }, [isLoaded]);

  useEffect(() => {
    if (isLoaded) {
      // Fast track to 100 when components report ready
      const interval = setInterval(() => {
        setDisplayPercent((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setTimeout(() => setShouldExit(true), 200);
            return 100;
          }
          return prev + 5;
        });
      }, 20);
      return () => clearInterval(interval);
    } else {
      // Slower natural progress while waiting
      const interval = setInterval(() => {
        setDisplayPercent((prev) => {
          if (prev >= 90) return 90; // Stall at 90 until isLoaded is true
          return prev + 1;
        });
      }, 100);
      return () => clearInterval(interval);
    }
  }, [isLoaded]);

  return (
    <AnimatePresence>
      {!shouldExit && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 w-full h-full z-[2000] overflow-hidden bg-[#111] flex flex-col justify-center items-center"
        >
          <div className="relative mb-8">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: `${displayPercent}%` }}
              className="h-[1px] bg-white absolute bottom-[-10px] left-0"
            />
            <span className="text-white text-6xl md:text-8xl font-thin tracking-tighter tabular-nums">
              {displayPercent}<span className="text-2xl md:text-3xl ml-1">%</span>
            </span>
          </div>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-[#666] text-xs uppercase tracking-[0.3em] font-light"
          >
            TwentyPercent Designs
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SharedLoader;


