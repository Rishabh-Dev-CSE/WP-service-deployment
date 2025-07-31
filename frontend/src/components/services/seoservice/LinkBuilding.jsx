import React from "react";
import { motion } from "framer-motion";
import {
  FaUsers,
  FaPodcast,
  FaPenNib,
  FaGlobeAsia,
  FaChartLine,
  FaQuestionCircle,
} from "react-icons/fa";

const tactics = [
  {
    icon: <FaUsers className="text-cyan-400 text-3xl" />,
    title: "Industry Forums & Communities",
    desc: "Engage in value-driven discussions in niche communities and subtly link back to authoritative content.",
  },
  {
    icon: <FaPodcast className="text-cyan-400 text-3xl" />,
    title: "Expert Podcasts & Interviews",
    desc: "Earn backlinks and exposure by featuring in prominent industry podcasts and interviews.",
  },
  {
    icon: <FaPenNib className="text-cyan-400 text-3xl" />,
    title: "Guest Posts & Thought Leadership",
    desc: "Publish expert insights on authoritative blogs to build reputation and domain authority.",
  },
  {
    icon: <FaGlobeAsia className="text-cyan-400 text-3xl" />,
    title: "Regional & Niche Outreach",
    desc: "Collaborate with local publishers and create geo-targeted content for specific markets.",
  },
  {
    icon: <FaChartLine className="text-cyan-400 text-3xl" />,
    title: "Comparison & Listing Sites",
    desc: "Get listed on SaaS directories and top industry listing platforms for high-converting visibility.",
  },
  {
    icon: <FaQuestionCircle className="text-cyan-400 text-3xl" />,
    title: "Quora & SlideShare Engagement",
    desc: "Drive traffic through educational answers on Quora and visual content on SlideShare.",
  },
];

const LinkBuilding = () => {
  return (
    <motion.section
      id="link-building"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="text-white py-20 px-6 mb-24 bg-gradient-to-br from-[#0f1123] to-[#1c1e3c] rounded-3xl shadow-2xl border border-cyan-700/30 relative overflow-hidden"
    >
      {/* Glowing background effect */}
      <div className="absolute top-[-15%] left-[-10%] w-[300px] h-[300px] bg-cyan-500 rounded-full blur-[180px] opacity-20" />
      <div className="absolute bottom-[-15%] right-[-10%] w-[300px] h-[300px] bg-blue-600 rounded-full blur-[180px] opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold text-cyan-400 mb-6 text-center tracking-tight">
          6. Strategic Link Building & Content Placement
        </h2>
        <p className="text-lg text-slate-300 max-w-3xl mx-auto text-center mb-14">
          We go beyond generic backlink tactics—focusing on high-authority placements, niche-specific value, and engagement that drives both visibility and trust.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {tactics.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-[#1e213e]/80 border border-cyan-700 hover:shadow-cyan-400/30 shadow-md p-6 rounded-2xl backdrop-blur-md transition-all duration-300 hover:scale-[1.04]"
            >
              <div className="mb-4">{item.icon}</div>
              <h5 className="text-xl font-semibold text-cyan-300 mb-2">
                {item.title}
              </h5>
              <p className="text-slate-300 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default LinkBuilding;
