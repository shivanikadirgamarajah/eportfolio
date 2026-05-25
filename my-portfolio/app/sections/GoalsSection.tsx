"use client";

import React from "react";
import { motion } from "framer-motion";
import TypedText from "../TypedText";

const GoalsSection = () => {
  

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

        
      </div>
    </section>
  );
};

export default GoalsSection;
