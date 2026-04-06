"use client";

import React, { useRef } from "react";
import HeroSection from "./sections/HeroSection";
import SkillsSection from "./sections/SkillsSection";
import AboutSection from "./sections/AboutSection";
import ExperienceSection from "./sections/ExperienceSection";
import GoalsSection from "./sections/GoalsSection";
import ResumeSection from "./sections/ResumeSection";
import UniversityPopup from "./UniversityPopup";

export default function Home() {
  const aboutRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <HeroSection />
      <SkillsSection ref={aboutRef} />
      <AboutSection />
      <ExperienceSection />
      <GoalsSection />
      <ResumeSection />
      <UniversityPopup targetRef={aboutRef} />
    </>
  );
}