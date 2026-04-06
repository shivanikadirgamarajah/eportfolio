"use client";

import React, { RefObject } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface UniversityPopupProps {
  targetRef: RefObject<HTMLDivElement | null>;
}

export default function UniversityPopup({ targetRef }: UniversityPopupProps) {
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  // Gradually slide in from the right
  const x = useTransform(scrollYProgress, [0, 0.5, 1], [300, 0, 300]);

  // Fade in gradually, then fade out
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

  // Optional slight rotation that settles into place
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 0]);

  return (
    <motion.div
      style={{ x, opacity, rotate }}
      className="fixed -right-6 top-30 z-[1] pointer-events-none max-w-xs w-56 bg-[#1e1e1e] rounded-lg shadow-2xl border-2 border-[#3b82f6] overflow-hidden"
    >
      <img
        src="/university.png"
        alt="York University"
        className="w-full h-auto cursor-pointer"
      />
    </motion.div>
  );
}
