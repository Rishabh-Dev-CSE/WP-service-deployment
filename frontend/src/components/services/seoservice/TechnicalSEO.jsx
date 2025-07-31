import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const techAuditItems = [
  {
    title: "🏗️ Site Structure & Schema Markup",
    details: [
      "Optimizing heading hierarchies (H1, H2, H3).",
      "Crafting unique, keyword-rich title tags and meta descriptions.",
      "Implementing relevant schema markup (Organization, FAQ, Article) for rich snippets.",
      "Using canonical tags to prevent duplicate content issues.",
    ],
  },
  {
    title: "⚡ Core Web Vitals & Mobile Responsiveness",
    details: [
      "Improving page load speed (LCP) by optimizing images, scripts, and caching.",
      "Ensuring seamless mobile-friendliness across all devices.",
      "Enforcing HTTPS across all pages for security and SEO benefits.",
    ],
  },
  {
    title: "🕸️ Crawlability & Indexing Management",
    details: [
      "Verifying search-engine bots can crawl all key pages (robots.txt, sitemap).",
      "Monitoring for and resolving HTTP errors (4xx/5xx).",
      "Maintaining an up-to-date XML sitemap for efficient indexing.",
      'Strategically using "noindex" for irrelevant or private sections.',
    ],
  },
];

export default function TechnicalSEO() {
  const [open, setOpen] = useState(null);

  const toggle = (idx) => setOpen(open === idx ? null : idx);

  return (
    <motion.section
      id="technical-seo"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="w-full max-w-6xl mx-auto bg-gradient-to-br from-[#15172e] to-[#1e224c] rounded-xl shadow-xl
                 px-4 sm:px-6 md:px-10 lg:px-20 py-12 sm:py-16 lg:py-20 text-white mb-20"
    >
      {/* Heading */}
      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-cyan-400 text-center mb-10">
        2. Technical SEO Optimization
      </h3>

      {/* Intro */}
      <p className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed mb-10 max-w-3xl mx-auto">
        A flawless technical foundation is paramount for search-engine visibility. Our audit
        ensures your website is fast, accessible, and perfectly structured to meet search-engine requirements.
      </p>

      {/* Accordion */}
      <div className="space-y-4">
        {techAuditItems.map((item, idx) => (
          <div
            key={idx}
            className="border border-cyan-700 rounded-xl overflow-hidden"
          >
            {/* Toggle button */}
            <button
              onClick={() => toggle(idx)}
              aria-expanded={open === idx}
              aria-controls={`panel-${idx}`}
              role="button"
              className="w-full flex justify-between items-center bg-[#1f233e] hover:bg-[#2a2f4f]
                         px-5 sm:px-6 py-4 sm:py-5 transition-colors duration-200 text-left"
            >
              <span className="text-lg sm:text-xl font-semibold">{item.title}</span>
              <motion.span
                animate={{ rotate: open === idx ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="text-cyan-400 text-xl transform-gpu"
              >
                ▼
              </motion.span>
            </button>

            {/* Collapsible content */}
            <AnimatePresence initial={false}>
              {open === idx && (
                <motion.div
                  id={`panel-${idx}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="bg-[#23294e] px-5 sm:px-6 py-4 sm:py-5 text-slate-300"
                >
                  <ul className="list-disc list-inside space-y-2 text-sm sm:text-base">
                    {item.details.map((detail, i) => (
                      <li key={i}>{detail}</li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
