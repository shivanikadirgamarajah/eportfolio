"use client";

import React from "react";
import { motion } from "framer-motion";
import LavaBlobs from "../LavaBlobs";

export default function ResumeSection() {
  return (
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

          {/* Social Icons Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            viewport={{ once: true, amount: 0.3 }}
            className="flex justify-center gap-8 pt-12"
          >
            {/* GitHub Icon */}
            <motion.a
              href="https://github.com/shivanikadirgamarajah"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#3b82f6] to-[#60a5fa] rounded-full blur opacity-0 group-hover:opacity-75 transition-opacity duration-300" />
              <div className="relative bg-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300">
                <svg className="w-6 h-6 text-[#333]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </div>
            </motion.a>

            {/* LinkedIn Icon */}
            <motion.a
              href="https://www.linkedin.com/in/shivani-kadirgamrajah-b55881250/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#3b82f6] to-[#60a5fa] rounded-full blur opacity-0 group-hover:opacity-75 transition-opacity duration-300" />
              <div className="relative bg-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300">
                <svg className="w-6 h-6 text-[#0A66C2]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                </svg>
              </div>
            </motion.a>

            {/* Google Icon */}
            <motion.a
              href="https://google.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#3b82f6] to-[#60a5fa] rounded-full blur opacity-0 group-hover:opacity-75 transition-opacity duration-300" />
              <div className="relative bg-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300">
                <svg className="w-6 h-6" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
              </div>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
