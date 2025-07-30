// TechGlowSVG.jsx
import { motion } from "framer-motion";
import React from "react";

const TechGlowSVG = () => {
  return (
    <motion.svg
      width="150"
      height="150"
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.5, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
    >
      <circle
        cx="100"
        cy="100"
        r="80"
        stroke="cyan"
        strokeWidth="2"
        fill="none"
        strokeDasharray="5 5"
      />
      <path
        d="M 40 100 L 100 40 L 160 100 L 100 160 Z"
        stroke="cyan"
        strokeWidth="2"
        fill="none"
      />
      <motion.circle
        cx="100"
        cy="100"
        r="10"
        fill="cyan"
        animate={{
          scale: [1, 1.4, 1],
          opacity: [1, 0.5, 1]
        }}
        transition={{
          duration: 2,
          repeat: Infinity
        }}
      />
    </motion.svg>
  );
};

export default TechGlowSVG;
