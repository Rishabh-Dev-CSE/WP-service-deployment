import React from "react";
import { motion } from "framer-motion";
import { LuBrush, LuPenTool, LuSparkles } from "react-icons/lu";
// import profileImg from "/src/assets/profile.png";

const HeroSection = () => {
    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] text-white relative overflow-hidden"
        >
            <div className="max-w-7xl w-full px-4 sm:px-6 md:px-12 flex flex-col md:flex-row items-center justify-between z-10 gap-12 md:gap-0">
                {/* Left Side */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex-1 text-center md:text-left space-y-6"
                >
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
                        Let’s Work <br />
                        Together to Create <br />
                        <span className="text-cyan-400">Wonders with Us</span>
                    </h1>
                    <p className="text-base sm:text-lg text-gray-300 max-w-md sm:max-w-lg mx-auto md:mx-0">
                        A visionary creative, crafting captivating wonders through web and code.
                        Adept at turning imagination into extraordinary digital reality.
                    </p>

                    <div className="flex flex-col sm:flex-row sm:justify-center md:justify-start items-center gap-4">
                        <a
                            href="#contact"
                            className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:from-blue-500 hover:to-cyan-400 transition"
                        >
                            Let’s Talk
                        </a>
                        <a
                            href="#projects"
                            className="border border-cyan-400 text-cyan-400 px-6 py-3 rounded-full font-semibold hover:bg-cyan-400 hover:text-white transition"
                        >
                            Start Project
                        </a>
                    </div>
                </motion.div>

                {/* Right Side */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex-1 relative flex items-center justify-center w-full"
                >
                    {/* Glowing Gradient Ring with Image inside */}
                    <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full border-4 border-transparent bg-gradient-to-tr from-cyan-400 via-purple-500 to-blue-500 p-[2px] animate-spin-slow">
                        <div className="w-full h-full rounded-full bg-[#0f0c29] flex items-center justify-center overflow-hidden">
                            Creative zone
                            {/* 
                            <img
                                src={profileImg}
                                alt="Creative Zone"
                                className="w-full h-full object-cover object-center scale-125 rounded-full brightness-110 saturate-150"
                            /> 
                            */}
                        </div>
                    </div>

                    {/* Decorative Icons */}
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
                    <div className="absolute top-10 -left-2 bg-white text-black px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium shadow-lg animate-bounce flex items-center space-x-1 sm:space-x-2">
                        <LuBrush className="text-blue-500" />
                        <span>Illustration</span>
                    </div>

                    <div className="absolute top-1/2 -left-4 bg-white text-black px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium shadow-lg animate-pulse flex items-center space-x-1 sm:space-x-2">
                        <LuPenTool className="text-purple-500" />
                        <span>Graphic Design</span>
                    </div>

                    <div className="absolute bottom-8 left-6 sm:left-10 bg-white text-black px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium shadow-lg animate-bounce delay-300 flex items-center space-x-1 sm:space-x-2">
                        <LuSparkles className="text-cyan-500" />
                        <span>Creative Branding</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default HeroSection;
