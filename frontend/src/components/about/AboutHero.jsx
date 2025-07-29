import React from "react";
import { motion } from "framer-motion";

const AboutHero = () => {
  return (
    <section className="relative bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white py-28 px-6 flex items-center justify-center min-h-[70vh] overflow-hidden">

      {/* Animated Background Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-400/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-ping"></div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(transparent,rgba(255,255,255,0.02))] pointer-events-none"></div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative z-10 text-center max-w-3xl"
      >
        <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight mb-6">
          <span className="text-cyan-400">WP</span> Service
          <br />
          <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Code Meets Velocity 🚀
          </span>
        </h1>
        <p className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto">
          Engineering modular systems, APIs & dev tools — so you can ship faster, scale smoother, and innovate without limits.
        </p>

        {/* Tech tags */}
        <div className="mt-6 flex flex-wrap justify-center gap-3 text-sm text-cyan-200 font-mono tracking-wide">
          <span className="bg-white/10 px-3 py-1 rounded-full border border-white/10">#TypeSafe</span>
          <span className="bg-white/10 px-3 py-1 rounded-full border border-white/10">#InfraFirst</span>
          <span className="bg-white/10 px-3 py-1 rounded-full border border-white/10">#DevExperience</span>
          <span className="bg-white/10 px-3 py-1 rounded-full border border-white/10">#KanpurBorn</span>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutHero;
