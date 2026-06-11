"use client";

import React from "react";
import MotionSection from "../MotionSection";
import AnimatedName from "../AnimatedName";

export default function HeroSection() {
  return (
    <section id="home" className="pt-20 bg-[linear-gradient(180deg,#070443_0%,#0b1230_58%,#0f172a_100%)] relative overflow-hidden">
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0f172a] to-transparent pointer-events-none" />
      <MotionSection>
        <AnimatedName />
      </MotionSection>
    </section>
  );
}
