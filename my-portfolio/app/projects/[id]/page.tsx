"use client";

import { motion } from "framer-motion";
import { useRouter, useParams } from "next/navigation";
import { useState } from "react";
import Image from "next/image";

const projectsData = [
  {
    id: "outfit-recommender",
    title: "Outfit Recommender",
    event: "HackSocial Hackathon",
    date: "Aug 2025",
    fullDescription: "Developed a responsive web application that recommends outfits based on real-time weather data using a machine learning model. Built with Flask for the backend, TailwindCSS for the frontend, and scikit-learn for model training, the app uses the Open-Meteo API and HTML5 Geolocation to fetch weather conditions such as temperature, humidity, wind speed, and precipitation. These inputs are sent to a Flask server (backend written entirely in Python using libraries such as Pandas), where a Random Forest Classifier predicts the most suitable outfit. The prediction is then returned and displayed to the user through a clean, interactive interface.",
    images: ["/projects/outfit/screenshot.png", "/projects/outfit/screenshottwo.png"],
    github: "https://github.com/shivanikadirgamarajah/outfit-recommender/tree/master",
    technologies: ["Flask", "React", "TailwindCSS", "scikit-learn", "Python", "Machine Learning"]
  },
  {
    id: "my-journal-app",
    title: "My Journal App",
    event: "Personal Project",
    date: "May 2025 – Jul 2025",
    fullDescription: "Developed and published a secure and user-friendly mobile application called 'My Journal', now available on the Google Play Store under the publisher name Shivilo. Built using Flutter and Android Studio, the app allows users to easily record and organize their daily thoughts. Key features include password protection for enhanced privacy, automatic timestamps, and the ability to edit or delete entries with helpful confirmation prompts. I also designed a clean and intuitive user interface, ensuring a smooth and accessible experience. This project showcases my skills in mobile app development, UI/UX design, and deploying production-ready software through my own Google developer account.",
    images: ["/projects/playstore/journalplay.png"],
    github: "https://github.com/shivanikadirgamarajah/My_Journal",
    technologies: ["Flutter", "Android Studio", "Dart", "Mobile Development", "UI/UX Design"]
  },
  {
    id: "gym-connect",
    title: "Gym Connect",
    event: "Full-Stack Web App",
    date: "Personal Project",
    fullDescription: "A full-stack web app that helps York University students find workout partners for drop-in sports sessions. The platform automatically syncs live recreation schedules from York's registration portal and uses a smart time-overlap matching algorithm to pair students based on shared sports interests and availability. Features include intelligent buddy matching with real-time time-range intersection detection, automated web scraping of York's drop-in schedule using Cheerio with deduplication and session lifecycle management, real-time in-app messaging between matched partners, secure OTP authentication restricted to York University email domains, and a responsive UI with sport-specific card designs, glassmorphism effects, and smooth animations. Supports 10+ sports including basketball, badminton, volleyball, futsal, soccer, and pickleball. Built to solve the real problem of finding someone to play with on campus.",
    images: ["/projects/gym/1773930364069.jpeg", "/projects/gym/1773930520321.jpeg", "/projects/gym/1773930530611.jpeg", "/projects/gym/1773930570730.jpeg"],
    github: "https://gym-connect-three.vercel.app/",
    technologies: ["Next.js", "TypeScript", "TailwindCSS", "Node.js", "Web Scraping", "Authentication"]
  },
  {
    id: "your-journal-companion",
    title: "Your Journal Companion",
    event: "UofT Hackathon",
    date: "Personal Project",
    fullDescription: "A privacy-first, AI-powered journaling web application that analyzes user journal entries to generate personalized insights, activity recommendations, and guided prompts for future entries. Built with Next.js, TypeScript, and TailwindCSS, the application uses a multi-agent AI architecture to adapt recommendations based on user behavior over time. The system includes an Extractor Agent that derives mood and theme signals from journal entries, a Risk Agent that evaluates safety in a non-diagnostic and responsible manner, and a Coach Agent that generates personalized activities and next-day writing prompts. User interactions are tracked as analytics-style events and stored locally, enabling a self-improving experience while keeping all sensitive data on-device. Designed with ethical AI principles in mind, the app avoids diagnostic language, includes crisis resources, supports data export for sharing with mental health professionals, and prioritizes user privacy by minimizing external data transmission.",
    images: ["/projects/journalhackathon/journal.png"],
    github: "https://lnkd.in/evk7p5es",
    technologies: ["Next.js", "TypeScript", "TailwindCSS", "AI/ML", "Multi-agent Architecture", "Privacy-First Design"]
  },
  {
    id: "hangman-web-game",
    title: "Hangman Web Game",
    event: "EECS 1012",
    date: "Apr 2024",
    fullDescription: "Built a full-stack Hangman game using HTML, CSS, JavaScript, jQuery, Node.js, and Express.js. Implemented DOM manipulation, AJAX communication, and server-side game logic. Used JSON for data exchange and tested locally with a responsive interface. This project showcases proficiency in front-end interactivity, asynchronous client-server communication, and backend game state management.",
    images: ["/projects/hangman/hangman.png"],
    github: null,
    technologies: ["HTML/CSS", "JavaScript", "jQuery", "Node.js", "Express.js", "Game Development"]
  },
  {
      id: "focusic",
      title: "Focusic",
      event: "Conhacks Hackathon",
      date: "Apr 2026",
      images: ["/projects/focusic/focusic.png"],
      github: "https://github.com/shivanikadirgamarajah/focusic",
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "YouTube Data API", "Groq AI"],
      fullDescription: "Focusic is an AI-powered productivity music web app built with Next.js, React, TypeScript, and Tailwind CSS that delivers personalized focus music based on user mood, work type, listening behavior, and preferences. The app integrates the YouTube Data API to search, stream, and manage track metadata through a persistent in-app music player, while Groq-powered AI routes classify and rank tracks by genre, focus score, and use case. It features global playback with full controls, a customizable Pomodoro timer with session tracking, onboarding and profile-based personalization, and an activity calendar that visualizes focus sessions across the year. The application is structured with reusable TypeScript models and components and uses client-side localStorage to persist user preferences, listening history, timer state, and productivity data for a seamless, personalized experience.",
  }
];

export default function ProjectDetail() {
  const router = useRouter();
  const params = useParams();
  const projectId = params.id as string;
  const [currentImageIdx, setCurrentImageIdx] = useState(0);
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);

  const project = projectsData.find(p => p.id === projectId);

  if (!project) {
    return (
      <div className="w-full py-32 px-6 md:px-8 relative overflow-hidden">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a] via-[#1a3a52] to-[#0f172a]" />
        </div>
        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Project not found</h1>
          <motion.button
            onClick={() => router.push("/projects")}
            whileHover={{ scale: 1.05 }}
            className="text-[#60a5fa] font-semibold px-6 py-3 rounded-lg hover:bg-[#60a5fa]/10 transition-colors"
          >
            ← Back to Projects
          </motion.button>
        </div>
      </div>
    );
  }

  return (
    <motion.section
      className="w-full py-32 md:py-40 px-6 md:px-8 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a] via-[#1a3a52] to-[#0f172a]" />
        
        {[
          { x: 5, delay: 0, duration: 8, size: 60, opacity: 0.7 },
          { x: 15, delay: 0.5, duration: 9, size: 80, opacity: 0.65 },
          { x: 25, delay: 1, duration: 10, size: 70, opacity: 0.75 },
          { x: 35, delay: 1.5, duration: 11, size: 90, opacity: 0.6 },
          { x: 45, delay: 2, duration: 9, size: 65, opacity: 0.72 },
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

      <div className="max-w-7xl mx-auto relative z-10 px-4 md:px-8 lg:px-12">
        {/* Back Button */}
        <motion.button
          onClick={() => router.push("/projects")}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-[#3b82f6] to-[#60a5fa] text-white font-bold text-lg md:text-xl mb-12 md:mb-16 hover:shadow-lg hover:shadow-[#3b82f6]/50 transition-all rounded-lg"
          whileHover={{ scale: 1.05, gap: 12 }}
        >
          <span>←</span> Back to Projects
        </motion.button>

        {/* Project Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-12 md:mb-16"
        >
          <span className="text-xs font-bold text-[#60a5fa] tracking-widest uppercase px-3 py-1.5 bg-[#60a5fa]/10 rounded-md border border-[#60a5fa]/30 inline-block mb-4">
            {project.event}
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">
            {project.title}
          </h1>
          <p className="text-[#a0aec0] text-lg font-medium">{project.date}</p>
        </motion.div>

        {/* Main Content - 2 Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-start">
          {/* Left Column - Description */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col"
          >
            <div className="bg-gradient-to-br from-[#1a2943]/40 via-[#1a2943]/20 to-[#0f172a]/10 backdrop-blur-sm rounded-2xl p-8 md:p-10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Overview</h2>
              <p className="text-[#d4d4d4]/90 leading-relaxed text-base md:text-lg mb-4 whitespace-pre-wrap">
                {isDescriptionExpanded
                  ? project.fullDescription
                  : project.fullDescription.length > 400
                  ? project.fullDescription.substring(0, 400) + "..."
                  : project.fullDescription}
              </p>
              {project.fullDescription.length > 400 && (
                <motion.button
                  onClick={() => setIsDescriptionExpanded(!isDescriptionExpanded)}
                  className="text-xs font-semibold text-[#60a5fa] hover:text-[#93c5fd] transition-colors mb-8 underline cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                >
                  {isDescriptionExpanded ? "Read Less" : "Read More"}
                </motion.button>
              )}

              {/* Technologies */}
              <div className="mb-8">
                <div className="mb-4 flex items-center justify-between gap-4">
                  <h3 className="text-sm font-bold text-[#60a5fa] tracking-widest uppercase">
                    Technologies & Skills
                  </h3>
                  {project.github && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open ${project.title} project link`}
                      title="Open project link"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.3 }}
                      className="group relative inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#60a5fa]/40 bg-white/10 text-white backdrop-blur-sm transition-all duration-300 hover:border-[#93c5fd]/80 hover:bg-[#60a5fa]/15 hover:shadow-lg hover:shadow-[#3b82f6]/30"
                      whileHover={{ scale: 1.08, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[#3b82f6] to-[#60a5fa] opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-50" />
                      <svg
                        className="relative h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.49 1 .11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23.96-.27 1.98-.4 3-.4s2.05.14 3 .4c2.29-1.55 3.3-1.23 3.3-1.23.65 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.62-5.48 5.92.43.37.82 1.1.82 2.22v3.29c0 .32.22.7.82.58C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
                      </svg>
                    </motion.a>
                  )}
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <motion.span
                      key={idx}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: idx * 0.05 }}
                      className="px-3 py-1.5 bg-[#60a5fa]/10 border border-[#60a5fa]/30 rounded-lg text-xs font-medium text-[#60a5fa] hover:bg-[#60a5fa]/20 transition-colors"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Images */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            {project.images.length > 2 ? (
              // Carousel for multiple images
              <motion.div
                key={currentImageIdx}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="relative rounded-2xl overflow-hidden group pt-6 md:pt-15"
              >
                <div className="relative w-full h-80 md:h-96 rounded-xl overflow-hidden">
                  <Image
                    src={project.images[currentImageIdx]}
                    alt={`${project.title} screenshot ${currentImageIdx + 1}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/40 to-transparent" />
                </div>

                {/* Navigation Arrows */}
                <motion.button
                  onClick={() =>
                    setCurrentImageIdx(
                      currentImageIdx === 0
                        ? project.images.length - 1
                        : currentImageIdx - 1
                    )
                  }
                  whileHover={{ scale: 1.1 }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-[#60a5fa]/20 hover:bg-[#60a5fa]/40 p-2 rounded-full transition-colors z-10"
                >
                  <span className="text-white text-xl">←</span>
                </motion.button>

                <motion.button
                  onClick={() =>
                    setCurrentImageIdx(
                      currentImageIdx === project.images.length - 1
                        ? 0
                        : currentImageIdx + 1
                    )
                  }
                  whileHover={{ scale: 1.1 }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-[#60a5fa]/20 hover:bg-[#60a5fa]/40 p-2 rounded-full transition-colors z-10"
                >
                  <span className="text-white text-xl">→</span>
                </motion.button>

                {/* Image Indicators */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                  {project.images.map((_, idx) => (
                    <motion.button
                      key={idx}
                      onClick={() => setCurrentImageIdx(idx)}
                      animate={{
                        scale: currentImageIdx === idx ? 1.2 : 1,
                        opacity: currentImageIdx === idx ? 1 : 0.6,
                      }}
                      className={`w-2.5 h-2.5 rounded-full transition-colors ${
                        currentImageIdx === idx
                          ? "bg-[#60a5fa]"
                          : "bg-[#60a5fa]/40 hover:bg-[#60a5fa]/60"
                      }`}
                    />
                  ))}
                </div>

                {/* Image Counter */}
                <div className="absolute top-4 right-4 text-xs font-semibold text-white bg-[#0f172a]/60 px-3 py-1.5 rounded-full backdrop-blur-sm">
                  {currentImageIdx + 1} / {project.images.length}
                </div>
              </motion.div>
            ) : (
              // Standard grid for single or dual images
              project.images.map((image, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 + idx * 0.1 }}
                  className="relative rounded-2xl overflow-hidden group"
                >
                  <div className="relative w-full h-80 md:h-96 rounded-xl overflow-hidden">
                    <Image
                      src={image}
                      alt={`${project.title} screenshot ${idx + 1}`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/40 to-transparent" />
                  </div>
                </motion.div>
              ))
            )}
          </motion.div>
        </div>


      </div>
    </motion.section>
  );
}
