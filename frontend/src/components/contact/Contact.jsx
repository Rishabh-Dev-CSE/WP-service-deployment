import React from "react";
import { LuMail, LuPhone, LuGithub, LuLinkedin, LuTwitter } from "react-icons/lu";
import { motion } from "framer-motion";

const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut" },
    },
};

const Contact = () => {
    return (
        <section className="relative bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white py-28 px-6 flex items-center justify-center min-h-20 overflow-hidden">
            {/* Decorative background blobs */}
            <motion.div
                animate={{ y: [0, 30, 0] }}
                transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
                className="absolute top-10 -left-20 w-72 h-72 bg-cyan-500 opacity-20 rounded-full filter blur-3xl"
            />
            <motion.div
                animate={{ y: [0, -30, 0] }}
                transition={{ repeat: Infinity, duration: 10, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-10 -right-20 w-72 h-72 bg-purple-500 opacity-20 rounded-full filter blur-3xl"
            />

            {/* Contact Card */}
            <motion.div
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="relative z-10 max-w-3xl w-full bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-3xl shadow-2xl text-center space-y-8"
            >
                <motion.h2
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="text-3xl sm:text-4xl font-bold text-cyan-400"
                >
                    Let's Connect
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="text-gray-300 max-w-xl mx-auto"
                >
                    Have an idea, a project, or just want to say hi? Fill out the form or connect via email or socials below.
                </motion.p>

                {/* Contact Info */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.6 }}
                    className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-6 text-gray-300 text-sm"
                >
                    <div className="flex items-center gap-2">
                        <LuMail className="text-cyan-400" />
                        <a
                            href="mailto:rishabhshakya9336@gmail.com"
                            className="hover:text-white transition"
                        >
                            rishabhshakya9336@gmail.com
                        </a>
                    </div>
                    <div className="flex items-center gap-2">
                        <LuPhone className="text-cyan-400" />
                        <a href="tel:+91 9336621975">
                            <span>+91 9336621975</span>
                        </a>
                    </div>
                </motion.div>

                {/* Social Icons */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="mt-6 flex justify-center gap-6 text-2xl text-gray-400"
                >
                    <motion.a
                        whileHover={{ scale: 1.2, color: "#ffffff" }}
                        href="https://github.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <LuGithub />
                    </motion.a>
                    <motion.a
                        whileHover={{ scale: 1.2, color: "#ffffff" }}
                        href="https://linkedin.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <LuLinkedin />
                    </motion.a>
                    <motion.a
                        whileHover={{ scale: 1.2, color: "#ffffff" }}
                        href="https://twitter.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <LuTwitter />
                    </motion.a>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Contact;
