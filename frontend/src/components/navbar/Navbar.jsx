import React from "react";
import { motion } from "framer-motion";

const navLinks = ["Home", "Projects", "Skills", "Experience", "About", "Contact"];

const Navbar = () => {
  return (
    <header className="backdrop-blur-md bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] text-white shadow-md fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-2 text-2xl font-extrabold tracking-tight"
        >
          <img src="/logo.png" alt="Logo" className="w-9 h-9" />
          <span className="bg-gradient-to-r from-green-400 to-blue-400 text-transparent bg-clip-text">
            SKC.Dev
          </span>
        </motion.div>

        {/* Navigation Links */}
        <motion.nav
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="hidden md:flex space-x-8 font-medium"
        >
          {navLinks.map((link, index) => (
            <motion.a
              key={index}
              href={`/${link.toLowerCase()}`}
              whileHover={{ scale: 1.05 }}
              className="relative group transition-all duration-300"
            >
              {link}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-cyan-400 transition-all group-hover:w-full"></span>
            </motion.a>
          ))}
        </motion.nav>

        {/* Sleek Gradient Button */}
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="#contact"
          className="hidden md:block relative px-5 py-2 rounded-full font-semibold text-white bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-blue-500 hover:to-cyan-400 transition-all duration-300 shadow-md"
        >
          Let’s Talk
        </motion.a>
      </div>
    </header>
  );
};

export default Navbar;
