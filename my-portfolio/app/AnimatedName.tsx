"use client";
import { motion } from "framer-motion";
import React from "react";
import LavaLampSVG from "./LavaLampSVG";




const AnimatedName: React.FC = () => (
  <div className="w-full flex flex-col items-center justify-center mt-25 mb-48">
    <LavaLampSVG />
    <div className="flex flex-col items-center gap-15 -mt-38">
      
      <motion.div
        animate={{ y: [0, 50, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut"}}
        className="text-6xl font-bold leading-none"
        style={{ color: "#ffffff" }}
      >
        ↓
      </motion.div>
      <motion.div
        animate={{ y: [0, 50, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut"}}
        className="text-6xl font-bold leading-none"
        style={{ color: "#ffffff" }}
      >
        ↓
      </motion.div>
      <motion.div
        animate={{ y: [0, 50, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="text-6xl font-bold leading-none"
        style={{ color: "#ffffff" }}
      >
        ↓
      </motion.div>
    </div>
  </div>
);

export default AnimatedName;