import React from "react";
import { motion } from "framer-motion";
import { FaCartPlus, FaEye, FaMobileAlt, FaRocket } from "react-icons/fa";

const ecommercePoints = [
  {
    icon: <FaCartPlus className="text-cyan-400 w-6 h-6" />,
    title: "Conversion-Optimized UI",
    desc: "Every click counts. We design interfaces that guide users smoothly to purchase.",
  },
  {
    icon: <FaEye className="text-cyan-400 w-6 h-6" />,
    title: "Intuitive UX",
    desc: "Clear navigation and seamless user flow that reduce friction and drop-offs.",
  },
  {
    icon: <FaMobileAlt className="text-cyan-400 w-6 h-6" />,
    title: "Mobile-First Approach",
    desc: "Majority of traffic is mobile — we ensure pixel-perfect designs across all devices.",
  },
  {
    icon: <FaRocket className="text-cyan-400 w-6 h-6" />,
    title: "Performance Driven",
    desc: "Optimized loading, caching, and design for blazing-fast user experiences.",
  },
];

export default function EcommerceShowcase() {
  return (
    <section className="bg-[#0f0c29] text-white px-6 py-24">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
        {/* Left: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            E-commerce Design <span className="text-cyan-400">That Sells</span>
          </h2>
          <p className="text-lg text-gray-300 mb-6">
            We craft high-performing online stores that blend seamless user
            experience with conversion-focused strategies. Built to scale, built to sell.
          </p>

          <div className="grid gap-6">
            {ecommercePoints.map((point, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="mt-1">{point.icon}</div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-1">
                    {point.title}
                  </h4>
                  <p className="text-sm text-gray-400">{point.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <motion.a
            href="/start-project"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.96 }}
            className="inline-block mt-10 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-blue-500 hover:to-cyan-400 transition text-white font-semibold shadow-md"
          >
            Launch Your Store With Us
          </motion.a>
        </motion.div>

        {/* Right: Visual Placeholder */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-full h-[300px] md:h-[400px] bg-[#1c1c36] rounded-xl shadow-lg flex items-center justify-center"
        >
          <div className="text-cyan-400 text-xl font-semibold">
            Storefront Mockup / Animation Here
          </div>
        </motion.div>
      </div>
    </section>
  );
}
