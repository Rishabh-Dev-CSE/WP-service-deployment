import React from "react";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

const AISnippetOptimization = () => {
  return (
    <motion.section
      id="ai-snippet"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="text-center mb-20 px-4 sm:px-6 md:px-10 lg:px-24 py-12 sm:py-16 lg:py-20 rounded-xl bg-gradient-to-br from-[#15172e] to-[#1e224c] shadow-xl text-white"
    >
      <h4 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-cyan-400 mb-6 sm:mb-10">
        3. AI Search & Featured Snippet Optimization
      </h4>

      <p className="max-w-4xl mx-auto text-base sm:text-lg md:text-xl text-slate-300 mb-10 sm:mb-12 leading-relaxed">
        As search evolves towards AI-driven answers and voice queries, we optimize your content to be featured prominently—dramatically increasing your visibility and authority.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
        {[
          {
            icon: "💬",
            title: "Conversational Content",
            desc: "We structure content in a clear Q&A format, directly answering user queries in natural language—perfect for AI overviews and voice search.",
          },
          {
            icon: "📋",
            title: "Structured Answers",
            desc: "Using bullet points, numbered lists, and tables, we organize information for easy consumption and better snippet performance.",
          },
          {
            icon: "📱",
            title: "Voice & AI Formatting",
            desc: "We ensure fast-loading, mobile-friendly pages and integrate local modifiers for voice search, aiming for strong AI citations.",
          },
        ].map((card, i) => (
          <motion.div
            key={i}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="p-5 sm:p-6 lg:p-8 bg-[#1f233e] border border-cyan-700 rounded-2xl shadow-md hover:shadow-cyan-500/10 transition-all duration-300 hover:-translate-y-2"
          >
            <div
              className="text-4xl sm:text-5xl mb-4"
              aria-hidden="true"
            >
              <span role="img">{card.icon}</span>
            </div>
            <h5 className="font-bold text-lg sm:text-xl text-white mb-2">
              {card.title}
            </h5>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {card.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default AISnippetOptimization;
