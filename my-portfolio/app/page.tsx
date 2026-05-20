"use client";

import React from "react";
import HeroSection from "./sections/HeroSection";
import SkillsSection from "./sections/SkillsSection";
import AboutSection from "./sections/AboutSection";
import ExperienceSection from "./sections/ExperienceSection";
import GoalsSection from "./sections/GoalsSection";
import ResumeSection from "./sections/ResumeSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <SkillsSection />
      <AboutSection />
      <ExperienceSection />
      <GoalsSection />
      <ResumeSection />
    </>
  );
}
