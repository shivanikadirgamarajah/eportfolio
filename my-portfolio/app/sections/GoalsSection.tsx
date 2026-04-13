"use client";

import React from "react";
import { motion } from "framer-motion";
import TypedText from "../TypedText";

const GoalsSection = () => {
  const goals = [
    {
      title: "Build Smart & Efficient Systems",
      description: "Develop software that optimizes performance, reduces resource consumption, and minimizes digital waste.",
    },
    {
      title: "Design for Sustainability",
      description: "Create applications and technologies that support environmentally conscious practices and energy efficiency.",
    },
    {
      title: "Leverage Technology for Impact",
      description: "Use AI, data, and software solutions to solve real-world problems in meaningful ways.",
    },
    {
      title: "Enhance Accessibility",
      description: "Design inclusive technologies that are accessible and beneficial to diverse communities.",
    },
    {
      title: "Think Long-Term",
      description: "Build scalable and adaptable systems that remain effective as technology and societal needs evolve.",
    },
    {
      title: "Create Lasting Value",
      description: "Contribute to digital innovations that continue to benefit users, organizations, and the environment over time.",
    },
  ];

  return (
    <section className="w-full py-32 px-8 bg-gradient-to-b from-[#1a3a52] to-[#0f172a] relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-[#a78bfa] via-[#818cf8] to-[#6366f1] bg-clip-text text-transparent">
            <TypedText
              strings={[
                "My <span class='text-[#a78bfa]'>Passion</span>",
                "My <span class='text-[#818cf8]'>Vision</span>",
              ]}
              typeSpeed={60}
              backSpeed={40}
              backDelay={2000}
              loop={true}
              showCursor={true}
            />
          </h2>

          {/* Main passion statement */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto mb-12"
          >
            <p className="text-lg text-[#d4d4d4] leading-relaxed mb-8 opacity-90">
              I am passionate about computer science because it empowers me to build innovative digital solutions that 
              <span className="text-[#a78bfa] font-semibold"> improve everyday life </span>
              while promoting 
              <span className="text-[#818cf8] font-semibold"> sustainability</span>. My goal is to create technology that bridges efficiency, intelligence, and environmental responsibility—ensuring that digital progress supports a better future for all.
            </p>

            {/* Vision statement */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4, ease: "easeInOut" }}
              viewport={{ once: true }}
              className="p-6 bg-gradient-to-r from-[#a78bfa]/10 via-[#818cf8]/10 to-[#6366f1]/10 rounded-2xl border border-[#3e3e42] backdrop-blur"
            >
              <p className="text-[#d4d4d4] italic font-medium">
                <span className="text-[#a78bfa]">My vision:</span> A world where digital progress and environmental responsibility go hand in hand, where technology not only advances innovation but also supports responsible growth and a sustainable future.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Goals Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {goals.map((goal, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.12, ease: "easeInOut" }}
              viewport={{ once: true }}
              whileHover={{ y: -16, scale: 1.04 }}
              className="relative group"
            >
              {/* Animated background gradient */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-[#a78bfa]/20 via-[#818cf8]/10 to-transparent rounded-2xl blur-2xl"
                animate={{ opacity: [0.4, 0.6, 0.8, 0.6, 0.4] }}
                transition={{ duration: 4, repeat: Infinity, delay: idx * 0.3, ease: "easeInOut" }}
              />

              {/* Border glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#a78bfa]/0 via-[#818cf8]/10 to-[#6366f1]/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg" />

              {/* Card content */}
              <div className="relative bg-gradient-to-br from-[#1e1e1e]/80 to-[#252526]/60 backdrop-blur-xl border border-[#3e3e42] group-hover:border-[#818cf8] rounded-2xl p-8 h-full flex flex-col gap-5 transition-all duration-300">
                
                {/* Number indicator */}
                <motion.div
                  className="flex items-center justify-between"
                >
                  <motion.div
                    className="w-12 h-12 rounded-full bg-gradient-to-br from-[#a78bfa] to-[#818cf8] flex items-center justify-center"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.7, ease: "easeInOut" }}
                  >
                    <span className="text-white font-bold text-lg">{idx + 1}</span>
                  </motion.div>
                  
                  {/* Decorative element */}
                
                </motion.div>

                {/* Title */}
                <div>
                  <h3 className="text-lg font-bold text-white leading-tight group-hover:text-[#a78bfa] transition-colors duration-300">
                    {goal.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-[#d4d4d4] text-sm opacity-85 flex-grow leading-relaxed">
                  {goal.description}
                </p>

                {/* Bottom accent line */}
                <motion.div
                  className="h-0.5 bg-gradient-to-r from-[#a78bfa] via-[#818cf8] to-transparent rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 1, delay: idx * 0.12, ease: "easeInOut" }}
                  viewport={{ once: true }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GoalsSection;
