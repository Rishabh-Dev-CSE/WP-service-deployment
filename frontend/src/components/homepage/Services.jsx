// src/components/ServicesSection.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaPencilRuler, FaMobileAlt, FaCode, FaProjectDiagram } from "react-icons/fa";

const services = [
  {
    icon: <FaPencilRuler size={32} />,
    title: "UI/UX",
    desc: "Creating intuitive and visually appealing designs that enhance user experience.",
  },
  {
    icon: <FaCode size={32} />,
    title: "Web Design",
    desc: "Designing responsive and engaging websites tailored to user needs.",
  },
  {
    icon: <FaMobileAlt size={32} />,
    title: "App Design",
    desc: "Crafting seamless and user-friendly mobile app interfaces.",
  },
  {
    icon: <FaProjectDiagram size={32} />,
    title: "Prototyping & Wireframing",
    desc: "Building interactive prototypes and structured wireframes for better design flow.",
  },
];

// Enhanced smooth animation with spring effect
const cardVariants = {
  hidden: {
    opacity: 0,
    x: -150,
    y: 20,
    scale: 0,
    rotate: -40,
  },
  show: (i) => ({
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1.05,
    rotate: 0,
    transition: {
      delay: 0.4 + i * 0.25,
      type: "spring",
      stiffness: 80,
      damping: 12,
    },
  }),
};

const ServicesSection = () => {
  return (
    <section
      id="services"
      className="w-full py-20 bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white relative"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl font-extrabold text-center mb-6"
        >
          Our <span className="text-cyan-400">Services</span>
        </motion.h2>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-center text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto mb-12"
        >
          Transforming ideas into intuitive digital experiences
        </motion.p>

        {/* Cards */}
        <div className="relative min-h-[300px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={cardVariants}
                className="p-6 rounded-3xl bg-[#1e1b3a] hover:bg-[#2c274d] shadow-xl transition-all duration-300 border border-gray-700 hover:border-cyan-400 cursor-pointer relative overflow-hidden transform hover:scale-[1.07]"
                style={{ position: "relative", zIndex: 10 - i }}
              >
                <div className="text-cyan-400 mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-white">
                  {service.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};  

export default ServicesSection;
