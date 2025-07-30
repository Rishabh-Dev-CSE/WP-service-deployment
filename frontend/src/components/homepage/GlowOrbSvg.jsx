import React from "react";
import { motion } from "framer-motion";

const GlowOrbSvg = () => {
  return (
    <motion.svg
      viewBox="0 0 200 200"
      width="220"
      height="220"
      xmlns="http://www.w3.org/2000/svg"
      className="drop-shadow-[0_0_20px_cyan]"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2, ease: "easeInOut" }}
    >
      <defs>
        <radialGradient id="grad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="cyan" stopOpacity="0.5" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
      </defs>

      {/* Glowing ambient gradient behind */}
      <circle
        cx="100"
        cy="100"
        r="90"
        fill="url(#grad)"
        opacity="0.5"
      />

      {/* Main rotating dashed ring */}
      <motion.circle
        cx="100"
        cy="100"
        r="70"
        stroke="cyan"
        strokeWidth="1.5"
        fill="none"
        strokeDasharray="8 8"
        strokeOpacity="0.8"
        animate={{ rotate: [0, 360] }}
        transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
      />

      {/* Inner subtle solid ring */}
      <circle
        cx="100"
        cy="100"
        r="40"
        stroke="cyan"
        strokeWidth="1"
        fill="none"
        opacity="0.3"
      />

      {/* Orbiting glowing node 1 */}
      <motion.circle
        cx="100"
        cy="30"
        r="4"
        fill="cyan"
        animate={{
          rotate: 360,
          transformOrigin: "100px 100px",
        }}
        transition={{
          repeat: Infinity,
          duration: 12,
          ease: "linear",
        }}
        opacity="0.8"
      />

      {/* Orbiting glowing node 2 (opposite) */}
      <motion.circle
        cx="170"
        cy="100"
        r="3"
        fill="cyan"
        animate={{
          rotate: -360,
          transformOrigin: "100px 100px",
        }}
        transition={{
          repeat: Infinity,
          duration: 16,
          ease: "linear",
        }}
        opacity="0.7"
      />
    </motion.svg>
  );
};

export default GlowOrbSvg;
