"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Projects() {
  const router = useRouter();
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  
  const projects = [
    {
      id: "outfit-recommender",
      title: "Outfit Recommender",
      event: "HackSocial Hackathon",
      date: "Aug 2025",
      description: "Built and published “My Journal” on the Google Play Store — a secure, intuitive journaling app developed with Flutter that combines privacy-focused features with a seamless user experience, showcasing my full-stack mobile development and UI/UX skills.",
      github: "https://github.com/shivanikadirgamarajah/outfit-recommender/tree/master",
      images: ["/profile.jpg"]
    },
    {
      id: "my-journal-app",
      title: "My Journal App",
      event: "Google Play Store App",
      date: "May 2025 – Jul 2025",
      description: "Built and published “My Journal” on the Google Play Store — a secure, intuitive journaling app developed with Flutter that combines privacy-focused features with a seamless user experience, showcasing my full-stack mobile development and UI/UX skills.",
      github: "https://github.com/shivanikadirgamarajah/My_Journal",
      images: ["/profile.jpg"]
    },
    {
      id: "gym-connect",
      title: "Gym Connect",
      event: "Full-Stack Web App",
      date: "Personal Project",
      description: "An AI-powered campus sports matching platform that automatically syncs York University drop-in schedules and instantly connects students with compatible workout partners based on shared sports interests and overlapping availability.",
      github: "https://gym-connect-three.vercel.app/",
      images: ["/profile.jpg"]
    },
    {
      id: "your-journal-companion",
      title: "Your Journal Companion",
      event: "UofT Hackathon",
      date: "Personal Project",
      description: "An AI-powered, privacy-first journaling app that turns your thoughts into personalized insights, mood-aware recommendations, and guided prompts — all while keeping your data securely on-device.",
      github: "https://lnkd.in/evk7p5es",
      images: ["/profile.jpg"]
    },
    {
      id: "hangman-web-game",
      title: "Hangman Web Game",
      event: "EECS 1012",
      date: "Apr 2024",
      description: "Built a full-stack Hangman game with real-time client-server interaction, dynamic gameplay, and responsive UI using JavaScript, Node.js, Express, and AJAX.",
      github: null,
      images: ["/profile.jpg"]
    },
    {
      id: "focusic",
      title: "Focusic",
      event: "Conhacks Hackathon",
      date: "Apr 2026",
      description: "Focusic is an AI-powered focus music platform that personalizes the perfect soundtrack for deep work, helping you stay productive, focused, and in flow.",
      github: "https://github.com/shivanikadirgamarajah/focusic",
    }
    
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        easeInOut: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <motion.section 
      className="w-full py-32 md:py-40 px-6 md:px-8 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Animated Background - Fizzy Bubble Screensaver */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a] via-[#1a3a52] to-[#0f172a]" />
        
        {/* Fizzy Bubbles - Predefined to avoid hydration mismatch */}
        {[
          { x: 5, delay: 0, duration: 8, size: 60, opacity: 0.7 },
          { x: 15, delay: 0.5, duration: 9, size: 80, opacity: 0.65 },
          { x: 25, delay: 1, duration: 10, size: 70, opacity: 0.75 },
          { x: 35, delay: 1.5, duration: 11, size: 90, opacity: 0.6 },
          { x: 45, delay: 2, duration: 9, size: 65, opacity: 0.72 },
          { x: 55, delay: 0.8, duration: 10.5, size: 85, opacity: 0.68 },
          { x: 65, delay: 1.3, duration: 11, size: 75, opacity: 0.7 },
          { x: 75, delay: 1.8, duration: 9.5, size: 95, opacity: 0.62 },
          { x: 85, delay: 2.3, duration: 10, size: 70, opacity: 0.74 },
          { x: 95, delay: 0.3, duration: 11.5, size: 88, opacity: 0.66 },
          { x: 10, delay: 2.5, duration: 10, size: 76, opacity: 0.71 },
          { x: 30, delay: 0.2, duration: 9.5, size: 82, opacity: 0.69 },
          { x: 50, delay: 1.7, duration: 11, size: 72, opacity: 0.73 },
          { x: 70, delay: 1.2, duration: 10.5, size: 86, opacity: 0.67 },
          { x: 90, delay: 2.1, duration: 9, size: 68, opacity: 0.75 },
        ].map((bubble, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full mix-blend-screen pointer-events-none"
            style={{
              left: `${bubble.x}%`,
              bottom: "-100px",
              width: `${bubble.size}px`,
              height: `${bubble.size}px`,
              backgroundColor: `rgba(96, 165, 250, ${bubble.opacity})`,
              filter: `blur(${bubble.size / 5}px)`,
              boxShadow: `0 0 ${bubble.size}px rgba(96, 165, 250, ${bubble.opacity * 0.8})`,
            }}
            animate={{
              y: [-100, -3000],
              x: [0, Math.sin(bubble.x) * 50 - 25],
            }}
            transition={{
              duration: bubble.duration,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
              delay: bubble.delay,
            }}
          />
        ))}

        {/* Subtle pulsing glow overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-[#3b82f6]/5 via-transparent to-[#1e40af]/5"
          animate={{
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16 md:mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            style={{ originX: 0 }}
            className="h-1.5 bg-gradient-to-r from-[#3b82f6] via-[#60a5fa] to-transparent rounded-full mb-8 max-w-xs"
          />
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 md:mb-6 leading-tight tracking-tight"
          >
            Projects
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="text-[#d4d4d4]/70 text-base md:text-lg font-light leading-relaxed max-w-2xl"
          >
            Building thoughtful solutions to interesting problems. Each project showcases real-world applications of modern technology.
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="relative h-full"
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
            >
              {/* Project Title Card */}
              <motion.div
                className="relative bg-gradient-to-br from-[#1a2943]/50 via-[#1a2943]/30 to-[#0f172a]/20 backdrop-blur-sm border border-[#3b82f6]/20 rounded-2xl p-6 md:p-8 transition-all duration-300 h-full flex flex-col items-center justify-center text-center cursor-pointer group"
                whileHover={{ y: -4, borderColor: "#60a5fa", backgroundColor: "#1a2943" }}
                animate={{
                  borderColor: hoveredIdx === idx ? "#60a5fa" : "#3b82f6",
                  backgroundColor: hoveredIdx === idx ? "rgba(26, 41, 67, 0.7)" : "rgba(26, 41, 67, 0.3)",
                }}
                onClick={() => router.push(`/projects/${project.id}`)}
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#60a5fa]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-2xl" />
                
                <div>
                  <motion.span 
                    className="text-xs font-bold text-[#60a5fa] tracking-widest uppercase px-2.5 py-1 bg-[#60a5fa]/10 rounded-md border border-[#60a5fa]/30 inline-block mb-3"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                  >
                    {project.event}
                  </motion.span>
                  <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-[#60a5fa] transition-colors duration-300 mt-3">
                    {project.title}
                  </h3>
                </div>

              </motion.div>

              {/* Detail Popover */}
              <motion.div
                className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 max-w-[calc(100vw-2rem)] z-50 max-h-[80vh] overflow-hidden"
                initial={{ opacity: 0, y: -10, scale: 0.9 }}
                animate={
                  hoveredIdx === idx
                    ? { opacity: 1, y: -120, scale: 1 }
                    : { opacity: 0, y: -10, scale: 0.9 }
                }
                transition={{ duration: 0.3 }}
                style={{ pointerEvents: "none" }}
              >
                <div className="bg-gradient-to-br from-[#1a2943] via-[#1a2943]/95 to-[#0f172a]/80 backdrop-blur-lg border border-[#60a5fa]/50 rounded-xl p-6 shadow-2xl shadow-[#3b82f6]/20 max-h-[80vh] overflow-y-auto">
                  {/* Detail Header */}
                  <div className="mb-4">
                    <span className="text-xs font-bold text-[#60a5fa] tracking-widest uppercase px-2 py-1 bg-[#60a5fa]/20 rounded-md inline-block mb-2">
                      {project.event}
                    </span>
                    <h4 className="text-xl font-bold text-white mb-1">{project.title}</h4>
                    <p className="text-sm text-[#a0aec0] font-medium">{project.date}</p>
                  </div>

                  {/* Detail Description */}
                  <motion.div
                    animate={{ height: "auto" }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="text-sm text-[#d4d4d4]/90 leading-relaxed mb-4">
                      {project.description}
                    </p>
                  </motion.div>

                  {/* CTA */}
                  <motion.button
                    type="button"
                    onClick={() => router.push(`/projects/${project.id}`)}
                    className="inline-flex items-center gap-2 text-[#60a5fa] font-semibold text-sm px-4 py-2 rounded-lg hover:bg-[#60a5fa]/10 transition-colors duration-300 group/cta"
                    whileHover={{ gap: 8 }}
                    style={{ pointerEvents: "auto" }}
                  >
                    Click me
                    <motion.span
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="group-hover/cta:text-[#93c5fd]"
                    >
                      →
                    </motion.span>
                  </motion.button>

                  {/* Arrow indicator pointing down to card */}
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full">
                    <div className="w-3 h-3 bg-gradient-to-br from-[#1a2943] via-[#1a2943]/95 to-[#0f172a]/80 border-b border-r border-[#60a5fa]/50 transform rotate-45 -mb-1.5" />
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="mt-16 md:mt-20 pt-12 md:pt-16 border-t border-[#3b82f6]/20"
        >
          <p className="text-[#d4d4d4]/50 text-xs md:text-sm font-light">
            More projects coming soon...
          </p>
        </motion.div>

        

      </div>
    </motion.section>
  );
}
