"use client";

import React from "react";
import { motion } from "framer-motion";

export default function ExperienceSection() {
  return (
    <section id="Experience" className="w-full py-40 px-8 relative overflow-hidden bg-[#07111f]">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(96,165,250,0.24),transparent_34%),linear-gradient(180deg,#07111f_0%,#0f2d45_48%,#07111f_100%)]" />
        <motion.div
          className="absolute left-[-12%] top-[12%] h-96 w-96 rounded-full bg-[#60a5fa]/20 blur-3xl"
          animate={{ x: [0, 40, 0], y: [0, -24, 0], opacity: [0.45, 0.75, 0.45] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute right-[-10%] bottom-[16%] h-[28rem] w-[28rem] rounded-full bg-[#22d3ee]/14 blur-3xl"
          animate={{ x: [0, -36, 0], y: [0, 28, 0], opacity: [0.35, 0.65, 0.35] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        />
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage: "linear-gradient(to bottom, transparent, black 18%, black 82%, transparent)",
          }}
        />
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#0f172a] to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0f172a] to-transparent" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
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

        {/* View Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="mt-24 flex justify-center"
        >
          <motion.a
            href="/projects"
            whileHover={{ y: -12, scale: 1.08 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="relative inline-block px-14 py-7 font-bold text-white text-lg rounded-3xl overflow-hidden group"
          >
            {/* Continuous pulsing glow background (always visible) */}
            <motion.div
              className="absolute -inset-2 rounded-3xl blur-3xl opacity-40 group-hover:opacity-100 transition-opacity duration-500"
              animate={{ 
                boxShadow: [
                  "0 0 30px rgba(59, 130, 246, 0.3)",
                  "0 0 50px rgba(96, 165, 250, 0.5)",
                  "0 0 30px rgba(59, 130, 246, 0.3)"
                ]
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
            
            {/* Animated gradient background */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-[#0284c7] via-[#3b82f6] via-[#60a5fa] to-[#0284c7]"
              animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              style={{ backgroundSize: "200% 200%" }}
            />

            {/* Secondary gradient overlay with stronger pulsing */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-[#60a5fa]/40 to-transparent"
              animate={{ opacity: [0.2, 0.5, 0.2] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            />
            
            {/* Premium shimmer effect */}
            <motion.div 
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                background: "linear-gradient(135deg, transparent 0%, rgba(255,255,255,0.5) 25%, transparent 50%, rgba(255,255,255,0.3) 75%, transparent 100%)",
                backgroundSize: "200% 200%",
              }}
              animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
              transition={{ duration: 0.6, repeat: Infinity, ease: "linear" }}
            />
            
            {/* Inner glow effect - enhanced */}
            <motion.div
              className="absolute inset-0"
              style={{
                background: "radial-gradient(circle at center, rgba(255, 255, 255, 0.25) 0%, transparent 70%)",
                filter: "blur(20px)",
              }}
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
            
            {/* Top edge light */}
            <div className="absolute top-0 left-1/4 right-1/4 h-1.5 bg-gradient-to-r from-transparent via-white to-transparent opacity-50 blur-sm rounded-full" />
            
            {/* Bottom accent glow */}
            <div className="absolute bottom-1 left-1/3 right-1/3 h-1 bg-gradient-to-r from-transparent via-[#93c5fd] to-transparent opacity-40 blur-md rounded-full" />
            
            {/* Multi-layer border glow - enhanced */}
            <motion.div
              className="absolute inset-0 rounded-3xl border-2 border-[#bfdbfe]"
              animate={{ 
                boxShadow: [
                  "0 0 20px rgba(59, 130, 246, 0.5), inset 0 0 20px rgba(96, 165, 250, 0.25)",
                  "0 0 40px rgba(96, 165, 250, 0.8), inset 0 0 25px rgba(147, 197, 253, 0.4)",
                  "0 0 20px rgba(59, 130, 246, 0.5), inset 0 0 20px rgba(96, 165, 250, 0.25)"
                ]
              }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Particle effects on hover - enhanced */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1.5 h-1.5 bg-white rounded-full"
                  style={{
                    left: `${15 + i * 11}%`,
                    top: `${(i * 13 + 20) % 100}%`,
                  }}
                  animate={{
                    y: [-25, 25],
                    opacity: [0, 1, 0.5, 0],
                    scale: [0.5, 1, 0.8],
                  }}
                  transition={{
                    duration: 1.8,
                    delay: i * 0.08,
                    repeat: Infinity,
                  }}
                />
              ))}
            </div>
            
            {/* Content */}
            <div className="relative flex items-center justify-center gap-3 z-10">
              <span className="font-bold tracking-tight text-base sm:text-lg">View my projects</span>
              <motion.span 
                className="text-2xl font-light" 
                whileHover={{ x: 10, scale: 1.3 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                →
              </motion.span>
            </div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
