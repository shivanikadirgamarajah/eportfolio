"use client";

import React, { forwardRef } from "react";
import { motion } from "framer-motion";

const SkillsSection = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <section
      ref={ref}
      id="about"
      className="w-full py-32 px-8 bg-gradient-to-b from-[#0f172a] to-[#1a3a52] relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Skills Icons */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col gap-10 items-center justify-center relative"
          >
            {/* Modern purple/blue trail with glow */}
            <motion.div
              className="absolute left-1/2 -translate-x-1/2 w-1 bg-gradient-to-b from-[#a78bfa] via-[#818cf8] to-transparent"
              initial={{ height: 0 }}
              whileInView={{ height: "calc(100% - 140px)" }}
              viewport={{ once: true }}
              animate={{ 
                boxShadow: [
                  "0 0 15px rgba(167, 139, 250, 0.7), inset 0 0 10px rgba(167, 139, 250, 0.3)",
                  "0 0 35px rgba(167, 139, 250, 1), inset 0 0 15px rgba(167, 139, 250, 0.5)",
                  "0 0 15px rgba(129, 140, 248, 0.7), inset 0 0 10px rgba(129, 140, 248, 0.3)",
                  "0 0 35px rgba(129, 140, 248, 1), inset 0 0 15px rgba(129, 140, 248, 0.5)",
                  "0 0 15px rgba(167, 139, 250, 0.7), inset 0 0 10px rgba(167, 139, 250, 0.3)",
                ]
              }}
              transition={{
                height: {
                  duration: 3,
                  ease: "linear",
                },
                boxShadow: {
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }
              }}
              style={{ 
                pointerEvents: "none",
              }}
            />

            {[
              { name: "JavaScript", img: "/skills/javascript.png" },
              { name: "React", img: "/skills/react.png" },
              { name: "Python", img: "/skills/python.jpg" },
              { name: "TypeScript", img: "/skills/typescript.png" },
              { name: "Java", img: "/skills/java.png" },
            ].map((skill, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.6 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: idx * 0.08 }}
                viewport={{ once: true }}
                className="flex flex-col items-center gap-4 group"
              >
                <motion.div
                  whileHover={{ scale: 1.3, rotate: 12 }}
                  animate={{ 
                    scale: [1, 1, 1, 1.2, 1, 1, 1, 1, 1, 1],
                    rotate: [0, 0, 0, 10, 0, 0, 0, 0, 0, 0]
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    repeatDelay: idx * 0.5,
                    ease: "easeInOut"
                  }}
                  className="w-28 h-28 flex items-center justify-center relative group/icon"
                >
                  {/* Animated background card */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#a78bfa]/15 to-[#818cf8]/10 border border-[#3e3e42] opacity-0 group-hover/icon:opacity-100 transition-opacity duration-300"
                  />

                  {/* Glow background on hover */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#a78bfa] to-[#818cf8] opacity-0 group-hover:opacity-100 blur-lg"
                    animate={{ opacity: [0, 0, 0, 0.6, 0] }}
                    transition={{ 
                      duration: 4,
                      repeat: Infinity,
                      repeatDelay: idx * 0.5
                    }}
                  />
                  
                  <img
                    src={skill.img}
                    alt={skill.name}
                    className="w-full h-full object-contain drop-shadow-2xl relative z-10 p-2"
                  />
                </motion.div>
                <motion.p
                  className="text-sm font-medium text-[#d4d4d4] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  {skill.name}
                </motion.p>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-16"
            >
              <motion.a
                href="/skills"
                whileHover={{ y: -8, scale: 1.04 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative inline-block px-10 py-5 font-bold text-white text-lg rounded-2xl overflow-hidden group"
              >
                {/* Animated gradient background */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-[#a78bfa] via-[#818cf8] to-[#6366f1]"
                  animate={{ 
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{ duration: 5, repeat: Infinity }}
                  style={{ backgroundSize: "200% 200%" }}
                />

                {/* Shimmer overlay */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-40 transition-opacity duration-300"
                  style={{
                    background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
                  }}
                />

                {/* Inner glow effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-70 transition-opacity duration-300"
                  style={{
                    background: "radial-gradient(circle at center, rgba(212, 197, 249, 0.4) 0%, transparent 70%)",
                    filter: "blur(12px)",
                  }}
                />

                {/* Border glow */}
                <motion.div
                  className="absolute inset-0 rounded-2xl border-2 border-[#d4c5f9] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  animate={{
                    boxShadow: [
                      "0 0 20px rgba(167, 139, 250, 0.5)",
                      "0 0 40px rgba(167, 139, 250, 0.9)",
                      "0 0 20px rgba(129, 140, 248, 0.5)",
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />

                {/* Content */}
                <div className="relative flex items-center justify-center gap-3 z-10">
                  <span className="font-semibold tracking-wide">View my full skills</span>
                  <motion.span
                    initial={{ x: 0 }}
                    whileHover={{ x: 6 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="text-xl"
                  >
                    →
                  </motion.span>
                </div>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right - VS Code Editor */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative z-[18]"
          >
            <motion.div
              className="relative"
              whileHover={{ y: -12, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Animated glow background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#a78bfa]/30 via-[#818cf8]/20 to-[#6366f1]/30 blur-2xl rounded-2xl"
                animate={{ opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              
              <div className="relative bg-gradient-to-br from-[#1e1e1e] to-[#252526] rounded-2xl shadow-2xl overflow-hidden border border-[#3e3e42] group hover:border-[#818cf8] transition-colors duration-300">
                <div className="bg-gradient-to-r from-[#2d2d30] to-[#252526] border-b border-[#3e3e42] px-4 py-3 flex items-center gap-3">
                  <div className="flex gap-2">
                    <motion.div 
                      className="w-3 h-3 rounded-full bg-[#ff5f56]"
                      whileHover={{ scale: 1.2 }}
                      transition={{ duration: 0.2 }}
                    />
                    <motion.div 
                      className="w-3 h-3 rounded-full bg-[#ffbd2e]"
                      whileHover={{ scale: 1.2 }}
                      transition={{ duration: 0.2 }}
                    />
                    <motion.div 
                      className="w-3 h-3 rounded-full bg-[#27c93f]"
                      whileHover={{ scale: 1.2 }}
                      transition={{ duration: 0.2 }}
                    />
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
          </motion.div>
        </div>
      </div>
    </section>
  );
});

SkillsSection.displayName = "SkillsSection";
export default SkillsSection;
