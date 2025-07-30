// src/animatedwaves/AnimatedWaves.jsx
import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiFramer,
} from "react-icons/si";

const W = 3000;
const H = 500;
const wavesCount = 7;

const AnimatedWaves = () => {
  const [time, setTime] = useState(0);
  const requestRef = useRef();

  // Continuously update wave phase
  const animate = () => {
    setTime((prev) => prev + 0.02); // Adjust speed here
    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, []);

  // Build path at each frame with animated wave shift
  const buildPath = (amp = 60, yShift = 0, phase = 0) => {
    const waves = 20;
    const step = W / waves;
    let d = `M0 ${H / 2 + yShift}`;
    for (let i = 0; i <= waves; i++) {
      const x = i * step;
      const y =
        H / 2 +
        yShift +
        Math.sin((i / waves) * Math.PI * 2 + time + phase) * amp;
      d += ` L${x} ${y}`;
    }
    return d;
  };

  const techIcons = [
    { Icon: SiReact, color: "#61DAFB", delay: 0 },
    { Icon: SiNextdotjs, color: "#FFFFFF", delay: 1.5 },
    { Icon: SiTailwindcss, color: "#38BDF8", delay: 3 },
    { Icon: SiTypescript, color: "#3178c6", delay: 4.5 },
    { Icon: SiFramer, color: "#e100ff", delay: 6 },
  ];

  return (
    <div className="absolute inset-0 h-[140%] overflow-hidden pointer-events-none select-none z-0">
      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="w-full h-full"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="waveGradA" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00E9FF" />
            <stop offset="100%" stopColor="#006CFF" />
          </linearGradient>
          <linearGradient id="waveGradB" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#6D6CFF" />
            <stop offset="100%" stopColor="#00E9FF" />
          </linearGradient>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {[...Array(wavesCount)].map((_, i) => (
          <path
            key={i}
            d={buildPath(60 + i * 15, (i - 3) * 45, i * 0.4)}
            fill="none"
            stroke={i % 2 === 0 ? "url(#waveGradA)" : "url(#waveGradB)"}
            strokeWidth={2.5}
            strokeLinecap="round"
            opacity={0.8 - i * 0.1}
            filter="url(#glow)"
          />
        ))}
      </svg>

      {/* Floating Tech Icons */}
      {techIcons.map(({ Icon, color, delay }, i) => (
        <motion.div
          key={i}
          className="absolute p-3 rounded-full shadow-2xl backdrop-blur-lg"
          style={{
            background: `radial-gradient(circle, ${color}33 0%, transparent 70%)`,
            boxShadow: `0 0 15px ${color}`,
            left: `${10 + i * 18}%`,
            top: `${20 + (i % 2) * 30}%`,
          }}
          animate={{
            y: [0, -10, 0],
            rotate: [0, 10, -10, 0],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 6 + i,
            ease: "easeInOut",
            delay,
            repeat: Infinity,
          }}
        >
          <Icon size={28} className="text-white drop-shadow-sm" />
        </motion.div>
      ))}
    </div>
  );
};

export default AnimatedWaves;
