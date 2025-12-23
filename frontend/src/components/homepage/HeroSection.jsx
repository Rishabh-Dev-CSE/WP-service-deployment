import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  LuShieldCheck,
  LuGlobe,
  LuSmartphone,
  LuSearch,
  LuRocket
} from "react-icons/lu";
import { Helmet } from "react-helmet";

const HeroSection = () => {
  return (
  <section id="home" className="relative w-full py-20 lg:py-28 bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] text-white overflow-hidden">
      {/* ================= SEO ================= */}
      <Helmet>
        <title>Velorax | Web, App, SaaS & Cyber Security Services</title>
        <meta
          name="description"
          content="Velorax builds secure, scalable digital products including Web, App, SaaS, Cyber Security and SEO solutions."
        />
      </Helmet>

      {/* ================= HERO BACKGROUND VISUAL ================= */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Soft background glow */}
        <div className="absolute right-[12%] top-1/2 -translate-y-1/2 w-[720px] h-[720px] bg-cyan-500/25 blur-[300px] rounded-full" />

        {/* Hero image */}
        <motion.img
          src="/logo/hero-graphics.webp"
          alt="Velorax technology visualization"
          className="
      absolute
      right-[6%]
      top-1/2
      -translate-y-1/2
      w-1/2
      h-2/3
      max-w-none
      opacity-95
      hero-mask-soft
      select-none
    "
          animate={{ y: [0, -14, 0] }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
          draggable={false}
        />
      </div>

      {/* ================= CONTENT ================= */}
      <div className="max-w-7xl w-full mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-7"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full text-sm border border-white/10 w-fit">
              <LuRocket className="text-cyan-400" />
              <span>Trusted Digital Service & SaaS Partner</span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
              We Build, Secure & Scale <br />
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Digital Products
              </span>
            </h1>

            {/* Description */}
            <p className="text-gray-300 text-lg max-w-xl">
              Velorax helps businesses grow with
              <span className="text-white font-medium">
                {" "}Web, Mobile Apps, SaaS Platforms, Cyber Security
              </span>{" "}
              and{" "}
              <span className="text-white font-medium">
                SEO-driven growth solutions
              </span>.
            </p>

            {/* Services */}
            <div className="flex flex-wrap gap-3 text-sm">
              <span className="px-3 py-1 rounded-full bg-white/10 border border-white/10 flex items-center gap-1">
                <LuGlobe className="text-cyan-400" /> Web
              </span>
              <span className="px-3 py-1 rounded-full bg-white/10 border border-white/10 flex items-center gap-1">
                <LuSmartphone className="text-purple-400" /> Apps
              </span>
              <span className="px-3 py-1 rounded-full bg-white/10 border border-white/10 flex items-center gap-1">
                <LuShieldCheck className="text-emerald-400" /> Security
              </span>
              <span className="px-3 py-1 rounded-full bg-white/10 border border-white/10 flex items-center gap-1">
                <LuSearch className="text-blue-400" /> SEO
              </span>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Link
                to="/start-project"
                className="bg-gradient-to-r from-cyan-400 to-blue-500 hover:opacity-90 transition text-white px-7 py-3 rounded-full font-semibold text-center"
              >
                Start Your Project
              </Link>

              <Link
                to="/contact"
                className="border border-white/30 hover:bg-white/10 transition px-7 py-3 rounded-full font-semibold text-center"
              >
                Talk to Experts
              </Link>
            </div>
          </motion.div>

          {/* RIGHT COLUMN EMPTY (visual space only) */}
          <div />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
