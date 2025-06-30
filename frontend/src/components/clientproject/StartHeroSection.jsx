// src/components/StartProjectHero.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaRocket, FaHandshake, FaCheckCircle } from "react-icons/fa";

const StartProjectHero = () => {
  return (
    <section className="w-full py-24 bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold leading-tight mb-6"
        >
          Let’s <span className="text-cyan-400">Launch Your Vision</span><br />
          Into a Powerful Digital Reality
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-lg text-gray-300 max-w-2xl mx-auto mb-10"
        >
          We don’t just design websites or apps. We build meaningful digital products that solve real-world problems and create lasting impact.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex justify-center gap-6 flex-wrap"
        >
          <a
            href="#contact"
            className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-md hover:from-blue-500 hover:to-cyan-400 transition"
          >
            Book Free Consultation
          </a>
          <a
            href="#services"
            className="border border-cyan-400 text-cyan-400 px-6 py-3 rounded-full text-lg font-semibold hover:bg-cyan-400 hover:text-black transition"
          >
            View Our Services
          </a>
        </motion.div>

        {/* Trust badges or features */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-8 text-left"
        >
          <div className="flex items-center gap-3 text-gray-300">
            <FaRocket className="text-cyan-400" size={24} />
            <span>Rapid project onboarding</span>
          </div>
          <div className="flex items-center gap-3 text-gray-300">
            <FaHandshake className="text-cyan-400" size={24} />
            <span>1:1 personal support & strategy</span>
          </div>
          <div className="flex items-center gap-3 text-gray-300">
            <FaCheckCircle className="text-cyan-400" size={24} />
            <span>100% transparent pricing</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StartProjectHero;
