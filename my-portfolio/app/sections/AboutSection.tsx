"use client";

import React from "react";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
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
            <div className="backdrop-blur-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-3xl p-8 h-full hover:border-[#60a5fa]/50 transition-all duration-500 group overflow-hidden relative">
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
                    I am a Computer Science student at York University, passionate about turning bold ideas into impactful products.
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
                  I craft <span className="text-[#60a5fa] font-bold">full-stack solutions</span> that blend <span className="text-[#60a5fa] font-bold">elegant design</span> with <span className="text-[#60a5fa] font-bold">robust engineering</span>, reflecting my commitment to building impactful and user-centered digital products.
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
                  From React frontends to Node.js backends, from cloud architecture to deployment pipelines — I navigate the entire stack with precision and creativity to transform ideas into scalable, production-ready solutions.
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
                <div className="backdrop-blur-2xl bg-gradient-to-br from-white/8 to-white/3 border border-white/15 rounded-2xl p-6 hover:border-[#60a5fa]/60 transition-all duration-500 cursor-pointer relative overflow-hidden">
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
          <div className="backdrop-blur-2xl bg-gradient-to-r from-[#60a5fa]/15 via-[#3b82f6]/15 to-[#60a5fa]/10 border border-[#60a5fa]/40 rounded-3xl p-12 md:p-16 relative overflow-hidden group hover:border-[#60a5fa]/60 transition-all duration-500">
            {/* Animated gradient overlay */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#60a5fa]/0 via-[#60a5fa]/5 to-[#60a5fa]/0 opacity-0 group-hover:opacity-100 group-hover:via-[#60a5fa]/10 transition-all duration-500"></div>

            {/* Background glow */}
            <div className="absolute -inset-px rounded-3xl bg-gradient-to-r from-[#60a5fa]/20 to-[#3b82f6]/20 -z-10 blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

            {/* Fireworks */}
            {[
              { left: "18%", top: "30%", delay: 0, color: "#ffb3ec" },
              { left: "80%", top: "28%", delay: 0.6, color: "#b8f7ff" },
              { left: "5%", top: "80%", delay: 1.2, color: "#d9c2ff" },
              { left: "95%", top: "80%", delay: 1.8, color: "#fff0a6" },
              { left: "5%", top: "10%", delay: 2.4, color: "#a6ffcf" },
              { left: "95%", top: "10%", delay: 3, color: "#ffd6a5" },
            ].map((firework, fireworkIdx) => (
              <motion.div
                key={fireworkIdx}
                className="absolute pointer-events-none z-0"
                style={{ left: firework.left, top: firework.top }}
              >
                {/* center glow */}
                <motion.span
                  className="absolute -left-3 -top-3 rounded-full"
                  style={{
                    width: 24,
                    height: 24,
                    background: `radial-gradient(circle, ${firework.color} 0%, transparent 70%)`,
                    filter: "blur(4px)",
                  }}
                  animate={{
                    scale: [0, 1.8, 0],
                    opacity: [0, 0.9, 0],
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    repeatDelay: 5,
                    delay: firework.delay,
                    ease: "easeOut",
                  }}
                />

                {/* Main spark ring */}
                {Array.from({ length: 18 }).map((_, sparkIdx) => {
                  const angle = (sparkIdx / 18) * Math.PI * 2;
                  const radius = 80;

                  return (
                    <motion.span
                      key={sparkIdx}
                      className="absolute left-0 top-0 rounded-full"
                      style={{
                        width: 6,
                        height: 6,
                        backgroundColor: firework.color,
                        boxShadow: `
                          0 0 10px ${firework.color},
                          0 0 24px ${firework.color},
                          0 0 48px ${firework.color}
                        `,
                      }}
                      animate={{
                        x: [0, Math.cos(angle) * radius],
                        y: [0, Math.sin(angle) * radius],
                        scale: [0, 1.2, 0],
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: 2.4,
                        repeat: Infinity,
                        repeatDelay: 5,
                        delay: firework.delay + sparkIdx * 0.015,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    />
                  );
                })}

                {/* Tiny glitter particles */}
                {Array.from({ length: 12 }).map((_, sparkleIdx) => {
                  const angle = (sparkleIdx / 12) * Math.PI * 2;
                  const radius = 120;

                  return (
                    <motion.span
                      key={`sparkle-${sparkleIdx}`}
                      className="absolute left-0 top-0 rounded-full"
                      style={{
                        width: 3,
                        height: 3,
                        backgroundColor: "#ffffff",
                        boxShadow: `
                          0 0 6px white,
                          0 0 14px ${firework.color}
                        `,
                      }}
                      animate={{
                        x: [0, Math.cos(angle) * radius],
                        y: [0, Math.sin(angle) * radius + 10],
                        opacity: [0, 0.9, 0],
                        scale: [0, 1, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        repeatDelay: 5,
                        delay: firework.delay + 0.2,
                        ease: "easeOut",
                      }}
                    />
                  );
                })}
              </motion.div>
            ))}

            <div className="relative z-10 text-center space-y-6">
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-black bg-gradient-to-r from-[#ffffff] via-[#e0f2fe] to-[#bfdbfe] bg-clip-text text-transparent"
              >
                Let&apos;s Build Something Remarkable
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
                className="text-white/70 max-w-2xl mx-auto text-lg leading-relaxed"
              >
                I&apos;m always excited to collaborate with visionary teams and bring ambitious ideas to life through thoughtful design and powerful technology.
              </motion.p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
