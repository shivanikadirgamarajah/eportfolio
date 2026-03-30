"use client";
import { motion } from "framer-motion";
import React from "react";

interface MotionSectionProps {
  children: React.ReactNode;
}

const MotionSection: React.FC<MotionSectionProps> = ({ children }) => (
  <section className="relative flex flex-col items-center justify-center min-h-[90vh]">
    <div className="absolute inset-0 pointer-events-none select-none opacity-50 bg-[radial-gradient(circle_at_50%_50%,_rgba(0,0,0,0.2)_0%,_transparent_100%)]" />
    <motion.div
      className="relative z-10 flex flex-col items-center gap-14"
      initial={{ opacity: 0, scale: 0.92, filter: "blur(8px)" }}
      animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  </section>
);

export default MotionSection;
