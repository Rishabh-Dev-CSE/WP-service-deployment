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

// If you're using local image in src/assets, import it like this
// import featureImage from "/src/assets/feature/feature1.jpeg"; // Adjust path as needed

const FeatureSection = () => {
  return (
    <section
      id="features"
      className="min-h-screen bg-gradient-to-b from-[#0f0c29] via-[#302b63] to-[#24243e] flex items-center justify-center px-4 py-20"
    >
      <div className="relative w-full max-w-6xl flex flex-col items-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold text-white text-center mb-12"
        >
          Discover Our <span className="text-cyan-400">App Features</span>
        </motion.h2>

        {/* Phone Container */}
        <motion.div
          className="relative flex flex-col items-center justify-center w-full max-w-6xl"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
        >
          <div className="flex items-end justify-center w-full mb-12 flex-wrap gap-4">
            {/* Left Phone */}
            <motion.div
              variants={{
                hidden: phoneVariants.hiddenLeft,
                show: phoneVariants.showLeft,
              }}
              className="w-44 h-96 md:w-52 md:h-[450px] bg-black rounded-[2rem] border-4 border-gray-800 shadow-[0_0_30px_#00ffff50] mx-2 transform -rotate-12 hover:scale-105 transition-all duration-300"
            >
              <div className="w-full h-full rounded-[1.7rem] overflow-hidden">
                <img
                  src="/src/assets/feature/feature1.jpeg"
                  alt="Fast Performance"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </motion.div>

            {/* Center Phone */}
            <motion.div
              variants={{
                hidden: phoneVariants.hiddenCenter,
                show: phoneVariants.showCenter,
              }}
              className="w-48 h-96 md:w-56 md:h-[450px] bg-black rounded-[2rem] border-4 border-gray-800 shadow-[0_0_50px_#00ffff70] mx-2 z-10 hover:scale-110 transition-all duration-300"
            >
              <div className="w-full h-full rounded-[1.7rem] overflow-hidden">
                <img
                  src="/src/assets/feature/feature3.jpeg"
                  alt="Intuitive Interface"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </motion.div>

            {/* Right Phone */}
            <motion.div
              variants={{
                hidden: phoneVariants.hiddenRight,
                show: phoneVariants.showRight,
              }}
              className="w-44 h-96 md:w-52 md:h-[450px] bg-black rounded-[2rem] border-4 border-gray-800 shadow-[0_0_30px_#00ffff50] mx-2 transform rotate-12 hover:scale-105 transition-all duration-300"
            >
              <div className="w-full h-full rounded-[1.7rem] overflow-hidden">
                <img
                  src="/src/assets/feature/feature2.jpeg"
                  alt="Smart Notifications"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </motion.div>
          </div>

          {/* Bottom Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl px-4"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Complete Digital Solutions — All In One Place
            </h3>
            <p className="text-lg md:text-xl text-gray-300 mb-2">
              From mobile apps and responsive websites to powerful admin panels — we deliver
              <span className="text-cyan-400 font-semibold"> full-stack solutions</span> that are scalable, secure, and beautifully designed.
            </p>
            <p className="text-md text-gray-400">
              Launch faster, manage smarter, and scale confidently with our expert development services.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeatureSection;
