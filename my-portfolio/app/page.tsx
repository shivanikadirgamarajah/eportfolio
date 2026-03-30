"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import MotionSection from "./MotionSection";
import AnimatedName from "./AnimatedName";
import UniversityPopup from "./UniversityPopup";
import LavaBlobs from "./LavaBlobs";

export default function Home() {
  const aboutRef = useRef<HTMLDivElement>(null);

  return (
    <>
      {/* Home Section */}
      <section id="home" className="pt-20">
        <MotionSection>
          <AnimatedName />
        </MotionSection>
      </section>

      {/* About Section */}
      <section
        ref={aboutRef}
        id="about"
        className="w-full py-24 px-8 bg-gradient-to-b from-[#0f172a] to-[#1a3a52]"
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Skills Icons */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-col gap-8 items-center justify-center"
            >
              {[
                { name: "JavaScript", img: "/skills/javascript.png" },
                { name: "React", img: "/skills/react.png" },
                { name: "Python", img: "/skills/python.jpg" },
                { name: "TypeScript", img: "/skills/typescript.png" },
                { name: "Java", img: "/skills/java.png" },
              ].map((skill, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.25, delay: idx * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.25, rotate: 10 }}
                  className="w-28 h-28 flex items-center justify-center"
                >
                  <img
                    src={skill.img}
                    alt={skill.name}
                    className="w-full h-full object-contain drop-shadow-2xl"
                  />
                </motion.div>
              ))}
            </motion.div>

            {/* Right - VS Code Editor */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="bg-[#1e1e1e] rounded-xl shadow-2xl overflow-hidden border border-[#3e3e42]">
                <div className="bg-[#2d2d30] border-b border-[#3e3e42] px-4 py-3 flex items-center gap-3">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                  </div>
                  <span className="text-[#888888] text-xs ml-2">about.tsx</span>
                </div>

                <div className="bg-[#252526] border-b border-[#3e3e42] px-4 py-2 flex items-center gap-2">
                  <span className="text-[#cccccc] text-xs font-mono">about.tsx</span>
                </div>

                <div className="bg-[#1e1e1e] p-8 font-mono text-sm leading-7 overflow-x-auto">
                  <div className="text-[#d4d4d4] space-y-1">
                    <div>
                      <span className="text-[#858585] mr-6 select-none">1</span>
                      <span className="text-[#569cd6]">const</span>
                      <span className="text-[#d4d4d4]"> name = </span>
                      <span className="text-[#ce9178]">"Shivani Kadirgamarajah"</span>
                      <span className="text-[#d4d4d4]">;</span>
                    </div>

                    <div>
                      <span className="text-[#858585] mr-6 select-none">2</span>
                      <span className="text-[#569cd6]">const</span>
                      <span className="text-[#d4d4d4]"> background = </span>
                      <span className="text-[#ce9178]">
                        "Computer Science B.A. Hons @ York University"
                      </span>
                      <span className="text-[#d4d4d4]">;</span>
                    </div>

                    <div className="my-3 opacity-50">
                      <span className="text-[#858585] mr-6 select-none">3</span>
                      <span className="text-[#6a9955]">
                        // Full-stack developer building real products
                      </span>
                    </div>

                    <div>
                      <span className="text-[#858585] mr-6 select-none">4</span>
                      <span className="text-[#569cd6]">const</span>
                      <span className="text-[#d4d4d4]"> skills = [</span>
                    </div>

                    <div>
                      <span className="text-[#858585] mr-6 select-none">5</span>
                      <span className="text-[#ce9178]">  "JavaScript"</span>
                      <span className="text-[#d4d4d4]">,</span>
                    </div>

                    <div>
                      <span className="text-[#858585] mr-6 select-none">6</span>
                      <span className="text-[#ce9178]">  "Python"</span>
                      <span className="text-[#d4d4d4]">,</span>
                    </div>

                    <div>
                      <span className="text-[#858585] mr-6 select-none">7</span>
                      <span className="text-[#ce9178]">  "React"</span>
                      <span className="text-[#d4d4d4]">,</span>
                    </div>

                    <div>
                      <span className="text-[#858585] mr-6 select-none">8</span>
                      <span className="text-[#ce9178]">  "Node.js"</span>
                      <span className="text-[#d4d4d4]">,</span>
                    </div>

                    <div>
                      <span className="text-[#858585] mr-6 select-none">9</span>
                      <span className="text-[#ce9178]">  "WordPress"</span>
                      <span className="text-[#d4d4d4]">,</span>
                    </div>

                    <div>
                      <span className="text-[#858585] mr-6 select-none">10</span>
                      <span className="text-[#ce9178]">  "Full-stack Development"</span>
                    </div>

                    <div>
                      <span className="text-[#858585] mr-6 select-none">11</span>
                      <span className="text-[#d4d4d4]">];</span>
                    </div>

                    <div className="my-3 opacity-50">
                      <span className="text-[#858585] mr-6 select-none">12</span>
                      <span className="text-[#6a9955]">
                        // Passionate about Software Engineering & Product Development
                      </span>
                    </div>

                    <div>
                      <span className="text-[#858585] mr-6 select-none">13</span>
                      <span className="text-[#569cd6]">export</span>
                      <span className="text-[#569cd6]"> default</span>
                      <span className="text-[#d4d4d4]">{` { name, background, skills };`}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="aboutme" className="w-full py-40 px-8 relative bg-gradient-to-b from-[#0a1628] via-[#1a3a52] to-[#0f172a] overflow-hidden">
        {/* Enhanced animated background orbs with multiple layers */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -left-40 w-80 h-80 bg-[#60a5fa] rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob"></div>
          <div className="absolute top-96 -right-20 w-96 h-96 bg-[#3b82f6] rounded-full mix-blend-multiply filter blur-3xl opacity-12 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-20 left-1/3 w-72 h-72 bg-[#0ea5e9] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Enhanced Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mb-24 text-center"
        >
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-6xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight"
            >
              <span className="bg-gradient-to-r from-[#ffffff] via-[#bfdbfe] to-[#60a5fa] bg-clip-text text-transparent drop-shadow-lg">
                About
              </span>
            </motion.h2>
            
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              whileInView={{ width: 120, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="h-1.5 bg-gradient-to-r from-[#60a5fa] via-[#3b82f6] to-[#60a5fa] rounded-full mx-auto shadow-lg shadow-[#60a5fa]/30"
            />
          </motion.div>

          {/* Main Content with enhanced cards */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* Left - Bio Card Enhanced */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
              whileHover={{ y: -8 }}
            >
              <div className="backdrop-blur-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-3xl p-8 h-full hover:border-[#60a5fa]/50 transition-all duration-500 group overflow-hidden relative"
              >
                {/* Hover gradient overlay */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#60a5fa]/0 to-[#3b82f6]/0 group-hover:from-[#60a5fa]/10 group-hover:to-[#3b82f6]/5 transition-all duration-500 pointer-events-none"></div>
                
                <div className="relative z-10 space-y-6">
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.15 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-white to-[#bfdbfe] bg-clip-text text-transparent mb-4">
                      Computer Science
                    </h3>
                    <p className="text-white/70 leading-relaxed mb-4 text-sm">
                      York University student passionate about turning bold ideas into products that matter.
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    viewport={{ once: true }}
                    className="space-y-3 pt-4 border-t border-white/10"
                  >
                    {[
                      "Full-stack expertise",
                      "Problem solver",
                      "Continuous learner"
                    ].map((item, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.25 + idx * 0.05 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-3"
                      >
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#60a5fa] to-[#3b82f6] flex-shrink-0 group-hover:scale-150 transition-transform"></div>
                        <span className="text-white/80 text-sm font-medium">{item}</span>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Center - Main Description Enhanced */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.15 }}
              viewport={{ once: true }}
              className="lg:col-span-1 flex flex-col justify-center"
            >
              <div className="space-y-8">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <p className="text-2xl md:text-3xl leading-relaxed font-light">
                    I craft <span className="text-[#60a5fa] font-bold">full-stack solutions</span> that blend <span className="text-[#60a5fa] font-bold">elegant design</span> with <span className="text-[#60a5fa] font-bold">robust engineering</span>.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.25 }}
                  viewport={{ once: true }}
                  className="space-y-4"
                >
                  <p className="text-white/70 leading-relaxed text-base">
                    From React frontends to Node.js backends, from cloud architecture to deployment pipelines — I navigate the entire stack with precision and creativity.
                  </p>
                </motion.div>
              </div>
            </motion.div>

            {/* Right - Highlights Enhanced */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              viewport={{ once: true }}
              className="lg:col-span-1 space-y-5"
            >
              {[
                { title: "Builder", desc: "React, Node.js, TypeScript" },
                { title: "Innovator", desc: "AI, E-commerce, Web3" },
                { title: "Creator", desc: "Hackathons, Community, Growth" }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.25 + idx * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 10 }}
                  className="group"
                >
                  <div className="backdrop-blur-2xl bg-gradient-to-br from-white/8 to-white/3 border border-white/15 rounded-2xl p-6 hover:border-[#60a5fa]/60 transition-all duration-500 cursor-pointer relative overflow-hidden"
                  >
                    {/* Animated gradient border on hover */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#60a5fa]/0 via-[#60a5fa]/0 to-[#3b82f6]/0 group-hover:from-[#60a5fa]/20 group-hover:via-[#60a5fa]/10 group-hover:to-transparent transition-all duration-500 pointer-events-none"></div>
                    
                    <div className="relative z-10 space-y-3">
                      <div className="flex items-center justify-between">
                        <h4 className="text-lg font-bold text-white group-hover:text-[#60a5fa] transition-colors">
                          {item.title}
                        </h4>
                        <motion.div
                          initial={{ x: 0, opacity: 0 }}
                          whileHover={{ x: 4, opacity: 1 }}
                          className="text-[#60a5fa] text-xl font-bold"
                        >
                          →
                        </motion.div>
                      </div>
                      <p className="text-white/70 text-sm leading-relaxed group-hover:text-white/80 transition-colors">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Enhanced Bottom CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="backdrop-blur-2xl bg-gradient-to-r from-[#60a5fa]/15 via-[#3b82f6]/15 to-[#60a5fa]/10 border border-[#60a5fa]/40 rounded-3xl p-12 md:p-16 relative overflow-hidden group hover:border-[#60a5fa]/60 transition-all duration-500"
            >
              {/* Animated gradient overlay */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#60a5fa]/0 via-[#60a5fa]/5 to-[#60a5fa]/0 opacity-0 group-hover:opacity-100 group-hover:via-[#60a5fa]/10 transition-all duration-500"></div>
              
              {/* Background glow */}
              <div className="absolute -inset-px rounded-3xl bg-gradient-to-r from-[#60a5fa]/20 to-[#3b82f6]/20 -z-10 blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

              <div className="relative z-10 text-center space-y-6">
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35 }}
                  viewport={{ once: true }}
                  className="text-4xl md:text-5xl font-black bg-gradient-to-r from-[#ffffff] via-[#e0f2fe] to-[#bfdbfe] bg-clip-text text-transparent"
                >
                  Let's Build Something Remarkable
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  viewport={{ once: true }}
                  className="text-white/70 max-w-2xl mx-auto text-lg leading-relaxed"
                >
                  I'm always excited to collaborate on innovative projects that push boundaries and create meaningful impact.
                </motion.p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      <section id="Experience" className="w-full py-40 px-8 relative bg-gradient-to-b from-[#0f172a] to-[#1a3a52]">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true, amount: 0.3 }}
            className="mb-20 relative text-center"
          >
            <h1 className="text-7xl md:text-8xl font-black bg-gradient-to-r from-[#ffffff] via-[#60a5fa] to-[#ffffff] bg-clip-text text-transparent mb-6">
              Experience
            </h1>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 200 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              viewport={{ once: true, amount: 0.3 }}
              className="h-1.5 bg-gradient-to-r from-transparent via-[#3b82f6] to-transparent rounded-full mx-auto"
            />
            <p className="text-lg md:text-xl text-white mt-6 max-w-2xl mx-auto">
              Crafting digital solutions through hands-on development and collaborative teamwork
            </p>
          </motion.div>

          {/* Timeline Container */}
          <div className="relative">
            {/* Animated Timeline Line */}
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              viewport={{ once: true, amount: 0.2 }}
              style={{ originY: 0 }}
              className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1.5 bg-gradient-to-b from-[#3b82f6] via-[#60a5fa] to-[#3b82f6]/30"
            />

            <div className="space-y-16 md:space-y-24">
              {/* Rebhatech Internship */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.35 }}
                viewport={{ once: true, amount: 0.3 }}
                className="relative lg:flex lg:gap-12 lg:items-stretch"
              >
                {/* Timeline Dot */}
                <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-0 w-6 h-6 bg-gradient-to-br from-[#3b82f6] to-[#60a5fa] rounded-full border-4 border-white shadow-xl z-10" />

                <div className="lg:w-1/2 lg:text-right lg:pr-8">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="bg-white rounded-3xl shadow-xl p-10 border-2 border-[#3b82f6]/20 hover:border-[#3b82f6]/40 transition-all duration-300 backdrop-blur-sm"
                  >
                    <div className="space-y-6">
                      {/* Header */}
                      <div>
                        <div className="inline-block mb-3 px-3 py-1 bg-gradient-to-r from-[#3b82f6]/20 to-[#60a5fa]/20 rounded-full border border-[#3b82f6]/30">
                          <span className="text-xs font-bold text-[#1e40af] uppercase tracking-wider">
                            May 2025 - Sep 2025
                          </span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-black bg-gradient-to-r from-[#0f172a] to-[#1e40af] bg-clip-text text-transparent">
                          Summer Intern
                        </h2>
                        <h3 className="text-xl font-bold text-[#3b82f6] mt-2">
                          Rebhatech Software Solutions
                        </h3>
                        <p className="text-gray-500 font-medium mt-1">India · Remote</p>
                      </div>

                      {/* Achievements */}
                      <div className="space-y-3 border-t-2 border-[#3b82f6]/10 pt-6">
                        {[
                          "Developed responsive websites using HTML, CSS, and JavaScript",
                          "Collaborated in Agile environment for efficient delivery",
                          "Mastered version control with Git",
                          "Worked with Angular, Node.js, Stripe & TypeScript"
                        ].map((achievement, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.25, delay: idx * 0.05 }}
                            viewport={{ once: true }}
                            className="flex gap-3 items-start justify-end lg:justify-end"
                          >
                            <span className="text-gray-700 text-sm leading-relaxed flex-1 text-right">{achievement}</span>
                            <div className="text-[#3b82f6] font-bold text-lg flex-shrink-0">•</div>
                          </motion.div>
                        ))}
                      </div>

                      {/* Skills */}
                      <div className="flex flex-wrap gap-2 justify-end border-t-2 border-[#3b82f6]/10 pt-6">
                        {["Angular", "Node.js", "TypeScript", "Git", "JavaScript"].map((skill, idx) => (
                          <motion.span
                            key={skill}
                            initial={{ opacity: 0, scale: 0.7 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: idx * 0.05 }}
                            viewport={{ once: true }}
                            className="px-3 py-1 bg-gradient-to-r from-[#3b82f6] to-[#60a5fa] text-white rounded-full text-xs font-bold shadow-md hover:shadow-lg transition-all"
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>

                <div className="hidden lg:block lg:w-1/2" />
              </motion.div>

              {/* MyRide901 Co-op */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.35, delay: 0.05 }}
                viewport={{ once: true, amount: 0.3 }}
                className="relative lg:flex lg:gap-12 lg:items-stretch lg:flex-row-reverse"
              >
                {/* Timeline Dot */}
                <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-0 w-6 h-6 bg-gradient-to-br from-[#60a5fa] to-[#3b82f6] rounded-full border-4 border-white shadow-xl z-10" />

                <div className="lg:w-1/2 lg:pl-8">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="bg-white rounded-3xl shadow-xl p-10 border-2 border-[#3b82f6]/20 hover:border-[#3b82f6]/40 transition-all duration-300 backdrop-blur-sm"
                  >
                    <div className="space-y-6">
                      {/* Header */}
                      <div>
                        <div className="inline-block mb-3 px-3 py-1 bg-gradient-to-r from-[#3b82f6]/20 to-[#60a5fa]/20 rounded-full border border-[#3b82f6]/30">
                          <span className="text-xs font-bold text-[#1e40af] uppercase tracking-wider">
                            January 2026 - April 2026
                          </span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-black bg-gradient-to-r from-[#0f172a] to-[#1e40af] bg-clip-text text-transparent">
                          Software Developer (Co-op)
                        </h2>
                        <h3 className="text-xl font-bold text-[#3b82f6] mt-2">
                          MyRide901
                        </h3>
                        <p className="text-gray-500 font-medium mt-1">Startup Environment</p>
                      </div>

                      {/* Achievements */}
                      <div className="space-y-3 border-t-2 border-[#3b82f6]/10 pt-6">
                        {[
                          "Deployed bug fixes to live product with 10K+ downloads",
                          "Built WordPress pages from Canva designs",
                          "Shipped user-impacting updates in Agile sprints",
                          "Collaborated with stakeholders in startup environment"
                        ].map((achievement, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.25, delay: idx * 0.05 }}
                            viewport={{ once: true }}
                            className="flex gap-3 items-start"
                          >
                            <div className="text-[#3b82f6] font-bold text-lg flex-shrink-0">•</div>
                            <span className="text-gray-700 text-sm leading-relaxed flex-1">{achievement}</span>
                          </motion.div>
                        ))}
                      </div>

                      {/* Skills */}
                      <div className="flex flex-wrap gap-2 border-t-2 border-[#3b82f6]/10 pt-6">
                        {["WordPress", "Canva", "Agile", "Bug Fixing", "Feature Dev"].map((skill, idx) => (
                          <motion.span
                            key={skill}
                            initial={{ opacity: 0, scale: 0.7 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: idx * 0.05 }}
                            viewport={{ once: true }}
                            className="px-3 py-1 bg-gradient-to-r from-[#3b82f6] to-[#60a5fa] text-white rounded-full text-xs font-bold shadow-md hover:shadow-lg transition-all"
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>

                <div className="hidden lg:block lg:w-1/2" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="w-full py-40 px-8 relative bg-gradient-to-b from-white via-white to-blue-50">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <LavaBlobs enableMouseTracking={false} />
        </div>
        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center space-y-12"
        >
            {/* Title Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.05 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <h2 className="text-7xl md:text-8xl font-black bg-gradient-to-r from-[#3b82f6] via-[#60a5fa] to-[#3b82f6] bg-clip-text text-transparent mb-6">
                Let's Work Together
              </h2>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 0.5, delay: 0.15 }}
                viewport={{ once: true, amount: 0.3 }}
                className="h-1 bg-gradient-to-r from-transparent via-[#3b82f6] to-transparent rounded-full"
              />
            </motion.div>
            
            {/* Copy Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
              className="space-y-6 py-4"
            >
              <p className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-[#1e3a8a] to-[#3b82f6] bg-clip-text text-transparent">
                Ready to bring your vision to life?
              </p>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-medium">
                I specialize in crafting beautiful, performant digital experiences that engage users and drive results. Let's collaborate on something amazing.
              </p>
            </motion.div>

            {/* Button Section */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
              className="pt-4"
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <a
                  href="/resume.pdf"
                  download
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-[#3b82f6] via-[#60a5fa] to-[#3b82f6] text-white px-12 py-6 rounded-full font-bold text-xl shadow-2xl hover:shadow-3xl transition-all duration-300 border-2 border-[#60a5fa]/50 hover:border-[#60a5fa] group relative overflow-hidden"
                >
                  <span className="relative z-10">Download My Resume</span>
                  <motion.svg
                    className="w-6 h-6 relative z-10"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    initial={{ x: 0 }}
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.3 }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </motion.svg>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-[#60a5fa] via-[#3b82f6] to-[#60a5fa] rounded-full"
                    initial={{ x: "100%" }}
                    whileHover={{ x: "-100%" }}
                    transition={{ duration: 0.5 }}
                  />
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* University Popup */}
      <UniversityPopup targetRef={aboutRef} />
    </>
  );
}