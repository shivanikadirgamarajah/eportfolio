"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Projects() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [expandedIdx, setExpandedIdx] = useState<number | null>(null);
  
  const projects = [
    {
      title: "Outfit Recommender",
      event: "HackSocial Hackathon",
      date: "Aug 2025",
      description: "Developed a responsive web application that recommends outfits based on real-time weather data using a machine learning model. Built with Flask for the backend, TailwindCSS for the frontend, and scikit-learn for model training, the app uses the Open-Meteo API and HTML5 Geolocation to fetch weather conditions such as temperature, humidity, wind speed, and precipitation. These inputs are sent to a Flask server (backend written entirely in Python using libraries such as Pandas), where a Random Forest Classifier predicts the most suitable outfit. The prediction is then returned and displayed to the user through a clean, interactive interface.",
      github: "https://github.com/shivanikadirgamarajah/outfit-recommender/tree/master"
    },
    {
      title: "My Journal App",
      event: "Personal Project",
      date: "May 2025 – Jul 2025",
      description: "Developed and published a secure and user-friendly mobile application called 'My Journal', now available on the Google Play Store under the publisher name Shivilo. Built using Flutter and Android Studio, the app allows users to easily record and organize their daily thoughts. Key features include password protection for enhanced privacy, automatic timestamps, and the ability to edit or delete entries with helpful confirmation prompts. I also designed a clean and intuitive user interface, ensuring a smooth and accessible experience. This project showcases my skills in mobile app development, UI/UX design, and deploying production-ready software through my own Google developer account.",
      github: "https://github.com/shivanikadirgamarajah/My_Journal"
    },
    {
      title: "Gym Connect",
      event: "Full-Stack Web App",
      date: "Personal Project",
      description: "A full-stack web app that helps York University students find workout partners for drop-in sports sessions. The platform automatically syncs live recreation schedules from York's registration portal and uses a smart time-overlap matching algorithm to pair students based on shared sports interests and availability. Features include intelligent buddy matching with real-time time-range intersection detection, automated web scraping of York's drop-in schedule using Cheerio with deduplication and session lifecycle management, real-time in-app messaging between matched partners, secure OTP authentication restricted to York University email domains, and a responsive UI with sport-specific card designs, glassmorphism effects, and smooth animations. Supports 10+ sports including basketball, badminton, volleyball, futsal, soccer, and pickleball. Built to solve the real problem of finding someone to play with on campus.",
      github: "https://gym-connect-three.vercel.app/"
    },
    {
      title: "Your Journal Companion",
      event: "UofT Hackathon",
      date: "Personal Project",
      description: "A privacy-first, AI-powered journaling web application that analyzes user journal entries to generate personalized insights, activity recommendations, and guided prompts for future entries. Built with Next.js, TypeScript, and TailwindCSS, the application uses a multi-agent AI architecture to adapt recommendations based on user behavior over time. The system includes an Extractor Agent that derives mood and theme signals from journal entries, a Risk Agent that evaluates safety in a non-diagnostic and responsible manner, and a Coach Agent that generates personalized activities and next-day writing prompts. User interactions are tracked as analytics-style events and stored locally, enabling a self-improving experience while keeping all sensitive data on-device. Designed with ethical AI principles in mind, the app avoids diagnostic language, includes crisis resources, supports data export for sharing with mental health professionals, and prioritizes user privacy by minimizing external data transmission.",
      github: "https://lnkd.in/evk7p5es"
    },
    {
      title: "Hangman Web Game",
      event: "EECS 1012",
      date: "Apr 2024",
      description: "Built a full-stack Hangman game using HTML, CSS, JavaScript, jQuery, Node.js, and Express.js. Implemented DOM manipulation, AJAX communication, and server-side game logic. Used JSON for data exchange and tested locally with a responsive interface. This project showcases proficiency in front-end interactivity, asynchronous client-server communication, and backend game state management.",
      github: null
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

                {/* Hover Indicator */}
                <motion.div 
                  className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-1"
                  animate={{ opacity: hoveredIdx === idx ? 1 : 0.5 }}
                >
                  <motion.span 
                    animate={{ scale: hoveredIdx === idx ? 1.2 : 1 }}
                    className="w-1.5 h-1.5 bg-[#60a5fa] rounded-full"
                  />
                  <motion.span 
                    animate={{ scale: hoveredIdx === idx ? 1 : 0.8 }}
                    className="w-1.5 h-1.5 bg-[#60a5fa] rounded-full opacity-50"
                  />
                </motion.div>
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
                pointerEvents={hoveredIdx === idx ? "auto" : "none"}
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
                      {expandedIdx === idx 
                        ? project.description 
                        : project.description.substring(0, 200) + "..."}
                    </p>
                  </motion.div>

                  {/* Read More Button */}
                  <motion.button
                    onClick={() => setExpandedIdx(expandedIdx === idx ? null : idx)}
                    className="text-xs font-semibold text-[#60a5fa] hover:text-[#93c5fd] transition-colors mb-4 underline cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                  >
                    {expandedIdx === idx ? "Read Less" : "Read More"}
                  </motion.button>

                  {/* CTA */}
                  {project.github ? (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[#60a5fa] font-semibold text-sm px-4 py-2 rounded-lg hover:bg-[#60a5fa]/10 transition-colors duration-300 group/cta"
                      whileHover={{ gap: 8 }}
                    >
                      View Project
                      <motion.span
                        animate={{ x: [0, 4, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="group-hover/cta:text-[#93c5fd]"
                      >
                        →
                      </motion.span>
                    </motion.a>
                  ) : (
                    <div className="text-xs text-[#d4d4d4]/50 font-light">
                      Course project • No public repository
                    </div>
                  )}

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