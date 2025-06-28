import React from "react";
import { motion } from "framer-motion";
import { FaMobileAlt, FaChartLine, FaUserPlus } from "react-icons/fa";

const SaaSShowcase = () => {
  return (
    <section className="w-full py-24 bg-gradient-to-b from-[#0f0c29] via-[#302b63] to-[#24243e] text-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-center mb-6"
        >
          Building Interfaces <span className="text-cyan-400">SaaS Users Love</span>
        </motion.h2>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="text-gray-300 text-lg text-center max-w-3xl mx-auto mb-12"
        >
          Whether it's sleek mobile apps, intuitive onboarding flows, or dynamic dashboards — we design
          with your users and growth goals in mind. Our approach blends strategy, UX science, and clean UI
          to fuel SaaS success.
        </motion.p>

        {/* Feature Icons with Descriptions (no cards) */}
        <div className="grid md:grid-cols-3 gap-10 text-center mt-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center space-y-4"
          >
            <FaMobileAlt size={36} className="text-cyan-400" />
            <h4 className="text-xl font-semibold">Pixel-Perfect App Interfaces</h4>
            <p className="text-gray-400">Native-feeling designs that make your SaaS app feel polished and intuitive on every screen.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex flex-col items-center space-y-4"
          >
            <FaUserPlus size={36} className="text-cyan-400" />
            <h4 className="text-xl font-semibold">Frictionless Onboarding</h4>
            <p className="text-gray-400">We reduce user churn with smooth sign-up flows and thoughtful onboarding experiences that convert.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-col items-center space-y-4"
          >
            <FaChartLine size={36} className="text-cyan-400" />
            <h4 className="text-xl font-semibold">Data-Rich Dashboards</h4>
            <p className="text-gray-400">Insightful, visual, and responsive dashboards built for clarity and action.</p>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.7 }}
          className="mt-16 text-center"
        >
          <a
            href="/start-project"
            className="inline-block px-8 py-4 text-lg rounded-full font-semibold bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 shadow-md"
          >
            Build My SaaS Interface
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default SaaSShowcase;
