import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function KeywordStrategyPage() {
  const [activeKeywordTab, setActiveKeywordTab] = useState("tab-core");

  const handleKeywordTabClick = (tab) => {
    setActiveKeywordTab(tab);
  };

  return (
    <div className="flex flex-col pt-10 md:flex-row bg-gradient-to-br from-[#0f1123] to-[#1e2150] text-white">


  
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full rounded-xl bg-gradient-to-br from-[#15172e] to-[#1e224c] shadow-xl"
        >
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-cyan-400 text-center mb-10 sm:mb-12">
            Our Core SEO Services
          </h3>

          <div className="p-4 sm:p-6 rounded-xl border border-cyan-800 bg-[#1a1d3a]">
            <h4 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4">
              1. In-Depth Keyword Strategy
            </h4>
            <p className="mt-2 text-base sm:text-lg text-slate-300">
              Our keyword research goes beyond basic terms to uncover high-value opportunities.
              We identify keywords that align with user intent, ensuring your content reaches the
              right audience at every stage of their journey.
            </p>

            {/* Tabs */}
            <div className="mt-8">
              <div className="flex justify-center border-b border-cyan-800 pb-4 overflow-x-auto">
                <nav className="flex flex-wrap gap-2 sm:gap-4 justify-center">
                  {[
                    { id: "tab-core", label: "Core & Niche Keywords" },
                    { id: "tab-long-tail", label: "Long-Tail & Conversational" },
                    { id: "tab-local", label: "Local & Regional Focus" },
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => handleKeywordTabClick(tab.id)}
                      className={`whitespace-nowrap py-2 px-4 text-sm font-semibold rounded-full transition-all duration-200 ${
                        activeKeywordTab === tab.id
                          ? "bg-cyan-500 text-slate-900"
                          : "bg-slate-700 text-white hover:bg-cyan-600"
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </nav>
              </div>

              {/* Tab Content */}
              <div className="mt-6 sm:mt-8 bg-[#21254a] p-4 sm:p-6 rounded-lg border border-cyan-700 min-h-[200px]">
                <AnimatePresence mode="wait">
                  {activeKeywordTab === "tab-core" && (
                    <motion.div
                      key="core"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.5 }}
                    >
                      <TabContent
                        title="We identify foundational terms and high-value niche keywords relevant to your industry, analyzing competitor rankings to find untapped opportunities and establish your authority."
                        bullets={[
                          "Industry-specific solutions",
                          "Service-based queries",
                          "Competitive gap analysis"
                        ]}
                      />
                    </motion.div>
                  )}

                  {activeKeywordTab === "tab-long-tail" && (
                    <motion.div
                      key="longtail"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.5 }}
                    >
                      <TabContent
                        title="We optimize your content for conversational, question-based queries, ideal for AI-driven search and voice assistants, capturing users with very specific needs."
                        bullets={[
                          '"How-to" questions',
                          "Problem-solution phrases",
                          "Natural language patterns"
                        ]}
                      />
                    </motion.div>
                  )}

                  {activeKeywordTab === "tab-local" && (
                    <motion.div
                      key="local"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.5 }}
                    >
                      <TabContent
                        title="We target specific geographic audiences by including geo-modifiers and developing content in regional languages to tap into underserved local markets."
                        bullets={[
                          '"Near me" searches',
                          "City/region specific terms",
                          "Multilingual content strategies"
                        ]}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </motion.section>
    
    </div>
  );
}

// Reusable Tab Content Component
function TabContent({ title, bullets }) {
  return (
    <>
      <h5 className="font-bold text-lg sm:text-xl text-cyan-300 mb-3">What we do:</h5>
      <p className="text-slate-300 leading-relaxed text-sm sm:text-base">{title}</p>
      <h5 className="font-bold text-lg sm:text-xl text-cyan-300 mt-6 mb-3">Key aspects:</h5>
      <ul className="list-disc list-inside space-y-2 text-slate-300 text-sm sm:text-base">
        {bullets.map((item, i) => (
          <li key={i}>
            <span className="bg-cyan-100 text-cyan-800 text-xs sm:text-sm font-mono px-3 py-1 rounded">
              {item}
            </span>
          </li>
        ))}
      </ul>
    </>
  );
}
