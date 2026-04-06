"use client";

import React from "react";
import MotionSection from "../MotionSection";
import AnimatedName from "../AnimatedName";

export default function HeroSection() {
  return (
    <section id="home" className="pt-20">
      <MotionSection>
        <AnimatedName />
      </MotionSection>
    </section>
  );
}
