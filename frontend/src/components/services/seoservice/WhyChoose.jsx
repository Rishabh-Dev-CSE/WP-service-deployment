import React from "react";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const WhyChoose = () => {
  const items = [
    {
      icon: "✨",
      title: "Holistic Approach",
      desc: "We cover all facets of SEO, from technical optimization to content strategy and link building, ensuring comprehensive growth.",
    },
    {
      icon: "🎯",
      title: "Data-Driven Strategies",
      desc: "Our strategies are built on in-depth research and analytics, ensuring every action is purposeful and measurable.",
    },
    {
      icon: "📈",
      title: "Sustainable Growth",
      desc: "We focus on long-term, ethical SEO practices that build lasting authority and consistent organic traffic.",
    },
    {
      icon: "💡",
      title: "Future-Proof Techniques",
      desc: "We stay ahead of algorithm updates and emerging trends like AI and voice search to keep you competitive.",
    },
    {
      icon: "🤝",
      title: "Transparent Reporting",
      desc: "You'll receive clear, regular reports on your performance, so you always know the impact of our efforts.",
    },
    {
      icon: "🧑‍💻",
      title: "Expert Team",
      desc: "Our team comprises seasoned SEO specialists, data analysts, and content strategists dedicated to your success.",
    },
  ];

  return (
    <motion.section
      id="why-us"
      className="scroll-mt-24 mb-20 p-10 rounded-xl shadow-xl bg-gradient-to-br from-[#0f1029] to-[#1c1d3f]"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <h3 className="text-4xl font-extrabold text-white text-center mb-12">
        Why Partner With <span className="text-cyan-400">Us?</span>
      </h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((item, i) => (
          <motion.div
            key={i}
            className="p-6 bg-[#121335] border border-[#2e2f4b] rounded-xl shadow-md flex flex-col items-center text-center hover:shadow-cyan-400/30 transition-shadow"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            custom={i}
            viewport={{ once: true }}
          >
            <div className="text-5xl text-cyan-400 mb-4">{item.icon}</div>
            <h5 className="font-bold text-xl text-white mb-2">{item.title}</h5>
            <p className="text-base text-slate-300 leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default WhyChoose;
