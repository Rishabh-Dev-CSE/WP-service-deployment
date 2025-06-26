import React from "react";
import { motion } from "framer-motion";
import { LuBrush, LuPenTool, LuSparkles } from "react-icons/lu";


const HeroSection = () => {
    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] text-white relative overflow-hidden"
        >
            <div className="max-w-7xl w-full px-6 md:px-12 flex flex-col md:flex-row items-center justify-between z-10">
                {/* Left Side */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex-1 space-y-6"
                >
                    <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
                        Let’s Work <br />
                        Together to Create <br />
                        <span className="text-cyan-400">Wonders with Us</span>
                    </h1>
                    <p className="text-lg text-gray-300 max-w-lg">
                        A visionary creative, crafting captivating wonders through web and code. Adept at turning imagination into extraordinary digital reality.
                    </p>

                    <div className="flex space-x-4">
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

                    <div className="flex space-x-8 mt-6 text-sm text-gray-300">
                        <div>
                            <p className="text-2xl font-bold text-white">15+</p>
                            <p>Years Experience</p>
                        </div>
                        <div>
                            <p className="text-2xl font-bold text-white">26K</p>
                            <p>Projects Success</p>
                        </div>
                        <div>
                            <p className="text-2xl font-bold text-white">98%</p>
                            <p>Satisfied Rate</p>
                        </div>
                    </div>
                </motion.div>

                {/* Right Side */}
                {/* Right Side - Decorative Creative Orbit */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex-1 relative mt-16 md:mt-0 flex items-center justify-center"
                >
                    {/* Glowing Gradient Ring */}
                    <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-transparent bg-gradient-to-tr from-cyan-400 via-purple-500 to-blue-500 p-[2px] animate-spin-slow">
                        <div className="w-full h-full rounded-full bg-[#0f0c29] flex items-center justify-center">
                            <span className="text-cyan-300 font-bold text-lg">Creative Zone</span>
                        </div>
                    </div>

                    {/* Decorative Icons orbiting */}
                    <div className="absolute top-4 left-6 text-white bg-black/40 backdrop-blur-sm p-2 rounded-full shadow-md">
                        <LuBrush className="text-blue-400" size={20} />
                    </div>
                    <div className="absolute top-0 right-12 text-white bg-black/40 backdrop-blur-sm p-2 rounded-full shadow-md">
                        <LuPenTool className="text-purple-400" size={20} />
                    </div>
                    <div className="absolute bottom-4 left-10 text-white bg-black/40 backdrop-blur-sm p-2 rounded-full shadow-md">
                        <LuSparkles className="text-cyan-400" size={20} />
                    </div>

                    {/* Floating Labels */}
                    <div className="absolute top-12 -left-2 bg-white text-black px-3 py-1 rounded-full text-sm font-medium shadow-lg animate-bounce flex items-center space-x-2">
                        <LuBrush className="text-blue-500" />
                        <span>Illustration</span>
                    </div>

                    <div className="absolute top-1/2 -left-4 bg-white text-black px-3 py-1 rounded-full text-sm font-medium shadow-lg animate-pulse flex items-center space-x-2">
                        <LuPenTool className="text-purple-500" />
                        <span>Graphic Design</span>
                    </div>

                    <div className="absolute bottom-10 left-10 bg-white text-black px-3 py-1 rounded-full text-sm font-medium shadow-lg animate-bounce delay-300 flex items-center space-x-2">
                        <LuSparkles className="text-cyan-500" />
                        <span>Creative Branding</span>
                    </div>
                </motion.div>


            </div>
        </section>
    );
};

export default HeroSection;
