import React from "react";
import { motion } from "framer-motion";

// Animation configs
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const phoneVariants = {
  hiddenLeft: { opacity: 0, x: -100, rotate: -20 },
  hiddenCenter: { opacity: 0, scale: 0.9 },
  hiddenRight: { opacity: 0, x: 100, rotate: 20 },
  showLeft: { opacity: 1, x: 0, rotate: -12, transition: { duration: 1 } },
  showCenter: { opacity: 1, scale: 1, transition: { duration: 1, delay: 0.2 } },
  showRight: { opacity: 1, x: 0, rotate: 12, transition: { duration: 1 } },
};

const FeatureSection = () => {
  return (
    <section className="w-full py-24 bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-12">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-center"
        >
          Discover Our <span className="text-cyan-400">App Features</span>
        </motion.h2>

        {/* Phone Container */}
        <motion.div
          className="relative flex flex-wrap items-end justify-center w-full gap-6 sm:gap-8 md:gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
        >
          {/* Left Phone */}
          <motion.div
            variants={{
              hidden: phoneVariants.hiddenLeft,
              show: phoneVariants.showLeft,
            }}
            className="relative w-40 h-80 sm:w-48 sm:h-[420px] md:w-56 md:h-[450px] bg-black rounded-[2rem] border-4 border-gray-800 shadow-lg hover:shadow-cyan-500/50 transform -rotate-12 hover:scale-105 transition-all duration-300"
          >
            <div className="w-full h-full rounded-[1.7rem] overflow-hidden">
              <img
                src="/feature/feature1.jpeg"
                alt="Fast Performance"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Center Phone with VIDEO */}
          <motion.div
            variants={{
              hidden: phoneVariants.hiddenCenter,
              show: phoneVariants.showCenter,
            }}
            className="relative w-44 h-80 sm:w-52 sm:h-[420px] md:w-60 md:h-[450px] bg-black rounded-[2rem] border-4 border-gray-800 shadow-xl hover:shadow-cyan-500/70 z-10 hover:scale-110 transition-all duration-300"
          >
            <div className="w-full h-full rounded-[1.7rem] overflow-hidden">
              <video
                src="/feature/center-phone-video.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Right Phone */}
          <motion.div
            variants={{
              hidden: phoneVariants.hiddenRight,
              show: phoneVariants.showRight,
            }}
            className="relative w-40 h-80 sm:w-48 sm:h-[420px] md:w-56 md:h-[450px] bg-black rounded-[2rem] border-4 border-gray-800 shadow-lg hover:shadow-cyan-500/50 transform rotate-12 hover:scale-105 transition-all duration-300"
          >
            <div className="w-full h-full rounded-[1.7rem] overflow-hidden">
              <img
                src="/feature/feature2.jpeg"
                alt="Smart Notifications"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl space-y-4 px-4"
        >
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            Complete Digital Solutions — All In One Place
          </h3>
          <p className="text-lg sm:text-xl text-gray-300">
            From mobile apps and responsive websites to powerful admin panels — we deliver
            <span className="text-cyan-400 font-semibold"> full-stack solutions</span> that are scalable, secure, and beautifully designed.
          </p>
          <p className="text-md sm:text-lg text-gray-400">
            Launch faster, manage smarter, and scale confidently with our expert development services.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FeatureSection;
