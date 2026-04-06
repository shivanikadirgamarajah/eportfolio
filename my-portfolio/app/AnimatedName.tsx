"use client";
import { motion } from "framer-motion";
import React from "react";
import LavaLampSVG from "./LavaLampSVG";

const arrowTransition = (delay = 0) => ({
  duration: 3,
  repeat: Infinity,
  repeatType: "mirror" as const,
  ease: "easeInOut" as const,
  delay,
});

const AnimatedName: React.FC = () => (
  <div className="w-full flex flex-col items-center justify-center mt-25 mb-48">
    <LavaLampSVG />

    <div className="flex flex-col items-center gap-15 -mt-38">
      {[0].map((delay, i) => (
        <motion.div
          key={i}
          animate={{ y: [0, 20], opacity: [0.7, 1] }}
          transition={arrowTransition(delay)}
          className="text-6xl font-bold leading-none will-change-transform"
          style={{ color: "#ffffff" }}
        >
          ↓
        </motion.div>
      ))}
    </div>
  </div>
);

export default AnimatedName;