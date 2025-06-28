import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

// Navigation Links
const navLinks = [
  { name: "Home", path: "/" },
  { name: "Projects", path: "/projects" },
  { name: "Skills", path: "/skills" },
  { name: "Experience", path: "/experience" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

// Framer Motion Genie-Like Animation Variants
const genieMenuVariants = {
  initial: {
    clipPath: "inset(0% 0% 0% 0%)",
    opacity: 1,
  },
  animate: {
    clipPath: "inset(0% 0% 0% 0%)",
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: [0.4, 0, 0.2, 1],
    },
  },
  exit: {
    clipPath: "inset(50% 50% 50% 50%)", // squeeze to center
    opacity: 0,
    transition: {
      duration: 0.6,
      ease: [0.65, 0, 0.35, 1],
    },
  },
};

const Navbar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  // Close on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (isMobileOpen) {
        setIsMobileOpen(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobileOpen]);

  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur-md bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-2 text-2xl font-extrabold tracking-tight"
        >
          <img src="/src/assets/logo/my-logo.png" alt="Logo" className="w-9 h-9" />
          <span className="bg-gradient-to-r from-green-400 to-blue-400 text-transparent bg-clip-text">
            SKC.Dev
          </span>
        </motion.div>

        {/* Desktop Nav */}
        <motion.nav
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="hidden md:flex space-x-8 font-medium"
        >
          {navLinks.map((link, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="relative group transition-all duration-300"
            >
              <Link to={link.path}>
                {link.name}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-cyan-400 transition-all group-hover:w-full"></span>
              </Link>
            </motion.div>
          ))}
        </motion.nav>

        {/* CTA Button */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="hidden md:block"
        >
          <Link
            to="/contact"
            className="relative px-5 py-2 rounded-full font-semibold text-white bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-blue-500 hover:to-cyan-400 transition-all duration-300 shadow-md"
          >
            Let’s Talk
          </Link>
        </motion.div>

        {/* Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="focus:outline-none"
          >
            <div className="space-y-1">
              <span className="block w-6 h-0.5 bg-white"></span>
              <span className="block w-6 h-0.5 bg-white"></span>
              <span className="block w-6 h-0.5 bg-white"></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu with Mac-style minimize effect */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            key="mobile-menu"
            variants={genieMenuVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="md:hidden bg-[#0f0c29] px-6 pb-6 origin-top overflow-hidden"
          >
            <nav className="flex flex-col gap-4 py-4">
              {navLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.path}
                  onClick={() => setIsMobileOpen(false)}
                  className="text-white hover:text-cyan-400 transition"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setIsMobileOpen(false)}
                className="mt-2 inline-block text-center px-4 py-2 rounded-full font-semibold text-white bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-blue-500 hover:to-cyan-400 transition-all duration-300 shadow-md"
              >
                Let’s Talk
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
