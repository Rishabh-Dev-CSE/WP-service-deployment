import React from "react";
import { motion } from "framer-motion";
import {
  FaBullseye,
  FaLink,
  FaRegFileAlt,
  FaShieldAlt,
} from "react-icons/fa";

const featureList = [
  {
    title: "Keyword Gap Analysis",
    text: "Identify high-volume opportunities your competitors missed.",
    icon: <FaBullseye className="text-cyan-400 text-2xl" />,
  },
  {
    title: "Backlink Insights",
    text: "Uncover competitor link-building tactics you can outperform.",
    icon: <FaLink className="text-cyan-400 text-2xl" />,
  },
  {
    title: "Content Strategy Review",
    text: "Reverse engineer top-performing content in your niche.",
    icon: <FaRegFileAlt className="text-cyan-400 text-2xl" />,
  },
  {
    title: "E-E-A-T Benchmarking",
    text: "Evaluate competitor authority and trust signals.",
    icon: <FaShieldAlt className="text-cyan-400 text-2xl" />,
  },
];

const CompetitiveAnalysis = () => {
  return (
    <motion.section
      id="competitive-analysis"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative overflow-hidden border border-cyan-700/30 rounded-3xl bg-gradient-to-br from-[#0f1123] to-[#1c1e3c] text-white shadow-2xl
        px-4 sm:px-6 md:px-10 py-16 sm:py-20 lg:py-24 mb-24 max-w-6xl mx-auto"
    >
      {/* Blurred glow backgrounds */}
      <div className="absolute top-[-15%] left-[-10%] w-[300px] h-[300px] bg-cyan-500 rounded-full blur-[180px] opacity-20" />
      <div className="absolute bottom-[-15%] right-[-10%] w-[300px] h-[300px] bg-blue-600 rounded-full blur-[180px] opacity-20" />

      {/* Heading & description */}
      <h2 className="text-3xl sm:text-4xl font-extrabold text-cyan-400 text-center mb-6">
        5. Competitive Landscape Analysis
      </h2>
      <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto text-center mb-12 leading-relaxed">
        We don't just research competitors — we reverse-engineer them. Our insights help you unlock hidden opportunities to lead your industry.
      </p>

      {/* Feature Grid */}
      <div className="grid gap-6 md:grid-cols-2">
        {featureList.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex items-start gap-4 p-5 sm:p-6 bg-[#1e213e]/50 backdrop-blur-md border border-cyan-700/30 rounded-xl hover:bg-[#1e213e]/80 transition-all duration-300"
          >
            <div className="w-12 h-12 flex items-center justify-center bg-cyan-400/10 rounded-lg">
              {item.icon}
            </div>
            <div>
              <h5 className="text-lg font-semibold text-cyan-300 mb-1">
                {item.title}
              </h5>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {item.text}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default CompetitiveAnalysis;
