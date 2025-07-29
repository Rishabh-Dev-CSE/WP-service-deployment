import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { LuBrush, LuPenTool, LuSparkles } from "react-icons/lu";
import GlowOrbSvg from "./GlowOrbSvg";
import AnimatedWaves from "../../animatedwaves/AnimatedWaves";

const HeroSection = () => { 
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] text-white relative pb-0"
    >
      {/* <AnimatedWaves /> */}
      <div className="max-w-7xl w-full px-0 sm:px-2 md:px-4 flex flex-col md:flex-row items-center justify-between z-10 gap-1 md:gap-0">
        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-center md:text-left space-y-6"
        // style={{paddingLeft:-200}}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
            Let’s Work <br className="hidden md:block" />
            Together to Create <br className="hidden sm:block" />
            <span className="text-cyan-400">Wonders with Us</span>
          </h1>
          <p className="text-base sm:text-lg text-gray-300 max-w-md sm:max-w-lg mx-auto md:mx-0">
            A visionary creative studio crafting captivating experiences through code and design.
            Turning imagination into extraordinary digital reality.
          </p>

          <div className="flex flex-col sm:flex-row sm:justify-center md:justify-start items-center gap-4">
            <Link
              to={"/contact"}
              className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:from-blue-500 hover:to-cyan-400 transition w-full sm:w-auto text-center"
            >
              Let’s Talk
            </Link>


            <Link
              to={'/start-project'}
            >
              <button
                className="border border-cyan-400 text-cyan-400 px-6 py-3 rounded-full font-semibold hover:bg-cyan-400 hover:text-white transition w-full sm:w-auto text-center"
              >
                Start Project
              </button>
            </Link>



          </div>
        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 relative flex items-center justify-center w-full"
        >
          {/* Glowing Gradient Ring with Animated SVG inside */}
          <div className="relative w-52 h-52 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full border-4 border-transparent bg-gradient-to-tr from-cyan-400 via-purple-500 to-blue-500 p-[2px] animate-spin-slow">
            <div className="w-full h-full rounded-full bg-[#0f0c29] flex items-center justify-center overflow-hidden">
              <GlowOrbSvg />
            </div>
          </div>

          {/* Decorative Floating Icons */}
          <div className="absolute top-2 left-4 sm:top-4 sm:left-6 bg-black/40 backdrop-blur-sm p-1 sm:p-2 rounded-full shadow-md">
            <LuBrush className="text-blue-400" size={18} />
          </div>
          <div className="absolute top-0 right-6 sm:right-12 bg-black/40 backdrop-blur-sm p-1 sm:p-2 rounded-full shadow-md">
            <LuPenTool className="text-purple-400" size={18} />
          </div>
          <div className="absolute bottom-2 left-6 sm:bottom-4 sm:left-10 bg-black/40 backdrop-blur-sm p-1 sm:p-2 rounded-full shadow-md">
            <LuSparkles className="text-cyan-400" size={18} />
          </div>

          {/* Floating Labels */}
          <div className="absolute top-10 -left-2 sm:top-10 sm:-left-4 bg-white text-black px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium shadow-lg animate-bounce flex items-center space-x-1 sm:space-x-2">
            <LuBrush className="text-blue-500" />
            <span>Illustration</span>
          </div>

          <div className="absolute top-1/2 -left-4 sm:-left-6 bg-white text-black px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium shadow-lg animate-pulse flex items-center space-x-1 sm:space-x-2">
            <LuPenTool className="text-purple-500" />
            <span>Graphic Design</span>
          </div>

          <div className="absolute bottom-8 left-6 sm:bottom-8 sm:left-10 bg-white text-black px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium shadow-lg animate-bounce delay-300 flex items-center space-x-1 sm:space-x-2">
            <LuSparkles className="text-cyan-500" />
            <span>Creative Branding</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
