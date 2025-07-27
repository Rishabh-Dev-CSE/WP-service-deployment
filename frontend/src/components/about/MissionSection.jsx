import React from "react";
import { motion } from "framer-motion";
import { FiZap, FiEye, FiCpu } from "react-icons/fi";

const cardVariants = {
  offscreen: (direction) => ({
    opacity: 0,
    x: direction === "left" ? -100 : direction === "right" ? 100 : 0,
    y: direction === "up" ? -100 : direction === "down" ? 100 : 0,
  }),
  onscreen: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      type: "spring",
      bounce: 0.3,
      duration: 1,
    },
  },
};

const MissionSection = () => {
  return (
    <section className="relative bg-[#0f0c29] text-white py-28 px-6 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-[-60px] left-[-120px] w-96 h-96 bg-purple-500 opacity-10 rounded-full blur-3xl animate-ping" />
      <div className="absolute bottom-[-60px] right-[-120px] w-96 h-96 bg-cyan-400 opacity-10 rounded-full blur-3xl animate-pulse" />

      <motion.div
        className="max-w-5xl mx-auto text-center relative z-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-6">
          Our <span className="text-cyan-400">Mission</span>
        </h2>
        <p className="text-gray-300 text-lg sm:text-xl leading-relaxed max-w-3xl mx-auto">
          At <span className="text-white font-semibold">skc.dev</span>, we're not just building tools —<br />
          <span className="inline-block mt-2 bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text font-semibold">
            We’re architecting the future of developer infrastructure.
          </span>
        </p>

        {/* Cards */}
        <div className="mt-16 grid md:grid-cols-3 gap-10 text-left">
          {[
            {
              icon: <FiZap className="text-cyan-400 text-3xl mb-3" />,
              title: "Performance",
              desc: "We engineer for speed. Whether it’s APIs or deployments — latency is our enemy.",
              direction: "left",
            },
            {
              icon: <FiEye className="text-cyan-400 text-3xl mb-3" />,
              title: "Transparency",
              desc: "Clear pricing. Open communication. No black boxes — just solid engineering.",
              direction: "up",
            },
            {
              icon: <FiCpu className="text-cyan-400 text-3xl mb-3" />,
              title: "Innovation",
              desc: "We challenge convention. Rethink workflows. Invent new ways to solve dev problems.",
              direction: "right",
            },
          ].map((card, index) => (
            <motion.div
              key={index}
              className="bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-md shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300 hover:scale-[1.03] cursor-default"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.4 }}
              variants={cardVariants}
              custom={card.direction}
            >
              {card.icon}
              <h3 className="text-xl font-bold text-white mb-2">{card.title}</h3>
              <p className="text-gray-300">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default MissionSection;
