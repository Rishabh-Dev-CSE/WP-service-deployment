import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { auth, signInWithGoogle, logout } from "../../firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";

// Navigation Links
const navLinks = [
  { name: "Home", path: "/" },
  { name: "Projects", path: "/projects" },
  { name: "Services", path: "/services" },
  { name: "Our Works", path: "/our-works" },
  { name: "About", path: "/about-us" },
  { name: "Contact", path: "/contact" },
];

// Framer Motion Variants

const genieMenuVariants = {
  initial: { clipPath: "inset(0% 0% 0% 0%)", opacity: 1 },
  animate: {
    clipPath: "inset(0% 0% 0% 0%)",
    opacity: 1,
    transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
  },
  exit: {
    clipPath: "inset(50% 50% 50% 50%)",
    opacity: 0,
    transition: { duration: 0.6, ease: [0.65, 0, 0.35, 1] },
  },
};

const navContainerVariants = {
  animate: { transition: { staggerChildren: 0.1 } },
};

const navItemVariants = {
  initial: { opacity: 0, y: -10 },
  animate: { opacity: 1, y: 0 },
};

const mobileNavContainer = {
  animate: { transition: { staggerChildren: 0.08 } },
};

const mobileNavItem = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
};

const Navbar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [user, setUser] = useState(null);

  // Firebase auth state listener
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  // Handle login
  const handleLogin = async () => {
    try {
      await signInWithGoogle();
      setIsMobileOpen(false); // close menu after login
    } catch (error) {
      console.error(error);
    }
  };

  // Handle logout
  const handleLogout = async () => {
    try {
      await logout();
      setIsMobileOpen(false); // close menu after logout
    } catch (error) {
      console.error(error);
    }
  };

  // Close mobile menu on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (isMobileOpen) setIsMobileOpen(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobileOpen]);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      className="fixed top-0 w-full z-50 backdrop-blur-md bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] text-white shadow-md"
      style={{ zIndex: 1000 }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          whileHover={{ rotate: 10 }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-2 text-2xl font-extrabold tracking-tight"
        >
          <img src="/logo/logo.png" alt="Logo" className="w-9 h-9" />
          <span className="rgb-animate-text">WP Service</span>
        </motion.div>

        {/* Desktop Nav */}
        <motion.nav
          variants={navContainerVariants}
          initial="initial"
          animate="animate"
          className="hidden md:flex space-x-8 font-medium"
        >
          {navLinks.map((link, index) => (
            <motion.div
              key={index}
              variants={navItemVariants}
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

        {/* Desktop Login/Logout Button */}

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="hidden md:block"
        >
          {user ? (
            <button
              onClick={handleLogout}
              className="relative px-5 py-2 rounded-full font-semibold text-white bg-red-500 hover:bg-red-600 transition-all duration-300 shadow-md"
            >
              Logout ({user.displayName})
            </button>
          ) : (
            <button
              onClick={handleLogin}
              className="relative px-5 py-2 rounded-full font-semibold text-white bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-blue-500 hover:to-cyan-400 transition-all duration-300 shadow-md"
            >
              Signup / Login
            </button>
          )}
        </motion.div>

        {/* Hamburger */}
        
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="focus:outline-none relative w-6 h-6"
          >
            <span
              className={`block absolute h-0.5 w-6 bg-white transform transition duration-300 ease-in-out ${
                isMobileOpen ? "rotate-45 top-2.5" : "top-1"
              }`}
            ></span>
            <span
              className={`block absolute h-0.5 w-6 bg-white transition-all duration-300 ease-in-out ${
                isMobileOpen ? "opacity-0" : "top-3"
              }`}
            ></span>
            <span
              className={`block absolute h-0.5 w-6 bg-white transform transition duration-300 ease-in-out ${
                isMobileOpen ? "-rotate-45 top-2.5" : "top-5"
              }`}
            ></span>
          </button>
        </div>

      </div>

      {/* Mobile Menu */}

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
            <motion.nav
              variants={mobileNavContainer}
              initial="initial"
              animate="animate"
              className="flex flex-col gap-4 py-4"
            >
              {navLinks.map((link, index) => (
                <motion.div key={index} variants={mobileNavItem}>
                  <Link
                    to={link.path}
                    onClick={() => setIsMobileOpen(false)}
                    className="text-white hover:text-cyan-400 transition"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}

              {/* Mobile Login/Logout */}

              <motion.div variants={mobileNavItem}>
                {user ? (
                  <button
                    onClick={handleLogout}
                    className="relative px-5 py-2 rounded-full font-semibold text-white bg-red-500 hover:bg-red-600 transition-all duration-300 shadow-md"
                  >
                    Logout ({user.displayName})
                  </button>
                ) : (
                  <button
                    onClick={handleLogin}
                    className="relative px-5 py-2 rounded-full font-semibold text-white bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-blue-500 hover:to-cyan-400 transition-all duration-300 shadow-md"
                  >
                    Signup / Login
                  </button>
                )}
              </motion.div>

            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>

    </motion.header>
  );
};

export default Navbar;
