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

const EEATAuthority = () => {
  const eeatPoints = [
    {
      title: "Experience",
      description:
        "Showcasing your hands-on knowledge through detailed case studies, original research, and content that demonstrates real-world problem-solving.",
    },
    {
      title: "Expertise",
      description:
        "Featuring expert author bylines with professional bios and publishing in-depth white papers on complex industry topics.",
    },
    {
      title: "Authoritativeness",
      description:
        "Acquiring high-quality backlinks and media mentions from reputable industry publications, and citing authoritative sources in your content.",
    },
    {
      title: "Trustworthiness",
      description:
        "Implementing site-wide HTTPS, clearly displaying contact info, privacy policies, and any industry awards or certifications to ensure transparency.",
    },
  ];

  return (
    <motion.section
      id="eeat-authority"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="text-center mb-20 py-16 px-6 rounded-xl bg-gradient-to-br from-[#15172e] to-[#1e224c] shadow-xl text-white"
    >
      <h4 className="text-3xl font-extrabold text-cyan-400 mb-10">
        4. E-E-A-T & Authority Building
      </h4>
      <p className="max-w-3xl mx-auto text-lg text-slate-300 mb-12">
        For any business, especially in sensitive industries, demonstrating Experience, Expertise, Authoritativeness, and Trustworthiness (E-E-A-T) is crucial. We build and showcase these signals to enhance your online reputation and ranking.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {eeatPoints.map((point, i) => (
          <motion.div
            key={i}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="p-6 border border-cyan-700 bg-[#1f233e] rounded-2xl shadow-md hover:shadow-cyan-500/10 transition-all duration-300 hover:-translate-y-2"
          >
            <h5 className="font-bold text-xl text-white mb-2">{point.title}</h5>
            <p className="text-base text-slate-300 leading-relaxed">{point.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default EEATAuthority;
