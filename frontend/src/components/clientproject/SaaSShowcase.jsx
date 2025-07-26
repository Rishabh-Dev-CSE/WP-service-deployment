import React from "react";
import { motion } from "framer-motion";
import { FaMobileAlt, FaChartLine, FaUserPlus } from "react-icons/fa";

const features = [
  {
    icon: <FaMobileAlt size={36} className="text-cyan-400" />,
    title: "Pixel-Perfect App Interfaces",
    description:
      "Native-feeling designs that make your SaaS app feel polished and intuitive on every screen.",
    delay: 0,
  },
  {
    icon: <FaUserPlus size={36} className="text-cyan-400" />,
    title: "Frictionless Onboarding",
    description:
      "We reduce user churn with smooth sign-up flows and thoughtful onboarding experiences that convert.",
    delay: 0.2,
  },
  {
    icon: <FaChartLine size={36} className="text-cyan-400" />,
    title: "Data-Rich Dashboards",
    description:
      "Insightful, visual, and responsive dashboards built for clarity and action.",
    delay: 0.4,
  },
];

const SaaSShowcase = () => {
  return (
    <section className="w-full py-28 bg-gradient-to-b from-[#0f0c29] via-[#302b63] to-[#24243e] text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold text-center mb-4"
        >
          Build Interfaces <span className="text-cyan-400">Users Love</span>
        </motion.h2>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="text-gray-300 text-lg text-center max-w-3xl mx-auto mb-16"
        >
          From sleek mobile apps to growth-focused onboarding and powerful dashboards — we create with
          clarity, strategy, and users in mind.
        </motion.p>

        {/* Features as Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: feature.delay, duration: 0.6 }}
              className="bg-[#1a1a2e] hover:bg-[#222240] rounded-2xl p-6 text-center shadow-md transition-all duration-300 group"
            >
              <div className="mb-4">{feature.icon}</div>
              <h4 className="text-xl font-semibold mb-2 group-hover:text-cyan-400 transition">
                {feature.title}
              </h4>
              <p className="text-gray-400 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.7 }}
          className="mt-20 text-center"
        >
          <a
            href="/start-project"
            className="inline-block px-10 py-4 text-lg rounded-full font-semibold bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-blue-500 hover:to-cyan-400 transition-all duration-300 shadow-lg hover:scale-105"
          >
            Build My SaaS Interface
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default SaaSShowcase;
