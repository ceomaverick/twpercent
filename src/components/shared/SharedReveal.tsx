/**
 * @component SharedReveal
 * @page Shared
 * @description Framer Motion wrapper component for scroll-triggered reveal animations.
 * @shared true
 * @props children, direction, delay, duration
 */
"use client";

import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";

interface RevealProps {
  children?: ReactNode;
  direction?: "up" | "down" | "left" | "right";
  delay?: number;
  duration?: number;
  className?: string;
}

export const SharedReveal = ({
  children,
  direction = "up",
  delay = 0,
  duration = 0.6,
  className = "",
}: RevealProps) => {
  const variants: Variants = {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
      x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
      transition: {
        duration: 0.3,
        ease: "easeIn"
      }
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration,
        delay,
        ease: "easeOut"
      }
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default SharedReveal;


