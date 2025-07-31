import React from "react";
import { motion } from "framer-motion";
import ServicesPageSidebar from "../servicespage/ServicesPageSidebar"; // Adjust path as needed

export default function HeroSectionPage() {
  return (
    <div className="flex bg-gradient-to-br from-[#0f1123] to-[#1e2150] text-white">
 

      {/* Main Content */}
      <main
        className="flex-1 pt-20 p-10"
      >
        {/* Hero Section */}
        <motion.section
          id="hero"
          className="w-full mb-16 py-20 px-10 rounded-xl bg-gradient-to-br from-[#0f1029] to-[#1c1d3f] shadow-xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
              Unlock Your <span className="text-cyan-400">Digital Potential.</span><br />
              Comprehensive <span className="text-cyan-400">SEO Services.</span>
            </h2>
            <p className="mt-4 max-w-3xl text-xl text-slate-300 leading-relaxed">
              Boost your online visibility, drive organic traffic, and achieve sustainable growth with our expert Search Engine Optimization solutions.
            </p>
            <motion.a
              href="#services"
              className="mt-10 inline-block bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-bold py-3 px-8 rounded-full text-lg shadow-lg hover:shadow-cyan-300/40 transform hover:scale-105 transition-all duration-300"
              whileHover={{ scale: 1.08 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Explore Services
            </motion.a>
          </div>
        </motion.section>
      </main>
    </div>
  );
}
