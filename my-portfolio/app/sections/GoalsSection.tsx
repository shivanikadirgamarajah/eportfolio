"use client";

import React from "react";
import { motion } from "framer-motion";
import TypedText from "../TypedText";

const GoalsSection = () => {
  

  return (
    <section className="w-full py-32 px-8 bg-[#07111f] relative isolate overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#1a3a52_0%,#0b1828_28%,#08111f_62%,#0f172a_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_12%,rgba(167,139,250,0.18),transparent_34%),radial-gradient(ellipse_at_18%_74%,rgba(45,212,191,0.14),transparent_34%),radial-gradient(ellipse_at_86%_76%,rgba(129,140,248,0.14),transparent_36%)]" />
        <motion.div
          className="absolute left-[-20%] top-[28%] h-40 w-[140%] -rotate-3 bg-[linear-gradient(90deg,transparent,rgba(167,139,250,0.14),rgba(45,212,191,0.12),rgba(129,140,248,0.12),transparent)] blur-3xl"
          animate={{ x: ["-4%", "4%", "-4%"], opacity: [0.28, 0.56, 0.28] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute left-[8%] bottom-[18%] h-px w-[84%] bg-gradient-to-r from-transparent via-[#5eead4]/35 to-transparent"
          animate={{ opacity: [0.16, 0.5, 0.16], scaleX: [0.82, 1, 0.82] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.72) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.72) 1px, transparent 1px)",
            backgroundSize: "62px 62px",
            maskImage: "linear-gradient(to bottom, transparent, black 18%, black 82%, transparent)",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage:
              "radial-gradient(rgba(196,181,253,0.7) 1px, transparent 1.5px)",
            backgroundSize: "32px 32px",
            maskImage: "linear-gradient(to bottom, transparent, black 24%, black 72%, transparent)",
          }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(115deg,transparent_0%,rgba(255,255,255,0.05)_44%,transparent_56%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(7,17,31,0.18)_48%,rgba(7,17,31,0.82)_100%)]" />
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#1a3a52] to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#0f172a] to-transparent" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
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
