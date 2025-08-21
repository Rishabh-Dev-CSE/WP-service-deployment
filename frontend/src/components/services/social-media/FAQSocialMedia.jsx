// components/services/social-media/FAQSocialMedia.jsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
    {
        question: "Why does my business need social media marketing?",
        answer:
            "Social media is where your audience already spends their time. With the right strategy, you can build brand authority, attract customers, and generate consistent leads at a fraction of traditional marketing costs.",
    },
    {
        question: "How long before I see real results?",
        answer:
            "It typically takes 2-3 months to see measurable improvements in engagement and followers. For ROI-focused campaigns like ads, results can be seen in weeks with the right targeting.",
    },
    {
        question: "Do you also create content or just manage accounts?",
        answer:
            "We offer complete end-to-end solutions: from content creation (graphics, videos, captions) to scheduling, community engagement, influencer collaborations, and performance tracking.",
    },
    {
        question: "Is paid advertising necessary for growth?",
        answer:
            "Organic growth is powerful, but ads accelerate results by targeting the right audience faster. We combine both organic strategies and paid campaigns for maximum ROI.",
    },
    {
        question: "Will I get reports to track performance?",
        answer:
            "Yes! We provide detailed monthly reports with insights into engagement, reach, followers, conversions, and recommendations for future improvements.",
    },
];

export default function FAQSocialMedia() {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="w-full py-16 px-4 text-white">
            {/* Heading */}
            <div className="text-center mb-12">
                <motion.h2
                    initial={{ opacity: 0, y: -15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl md:text-5xl font-extrabold"
                >
                    Frequently Asked <span className="text-cyan-400">Questions</span>
                </motion.h2>
                <p className="text-gray-300 mt-3 max-w-2xl mx-auto text-base md:text-lg">
                    Everything you need to know before investing in our{" "}
                    <span className="text-cyan-300 font-semibold">
                        Social Media Services
                    </span>
                    .
                </p>
            </div>

            {/* FAQ List */}
            <div className="max-w-3xl mx-auto space-y-4">
                {faqs.map((faq, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className="bg-white/5 border border-white/10 rounded-xl p-5 
                       backdrop-blur-lg shadow-lg hover:shadow-cyan-500/30 
                       hover:border-cyan-400/40 transition-all duration-300"
                    >
                        {/* Question */}
                        <button
                            onClick={() => toggleFAQ(index)}
                            className="flex justify-between items-center w-full text-left"
                        >
                            <span className="text-lg font-semibold">{faq.question}</span>
                            <motion.span
                                animate={{ rotate: activeIndex === index ? 180 : 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <ChevronDown className="text-cyan-400" size={22} />
                            </motion.span>
                        </button>

                        {/* Answer */}
                        <AnimatePresence>
                            {activeIndex === index && (
                                <motion.p
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.4 }}
                                    className="mt-3 text-gray-300 text-sm leading-relaxed"
                                >
                                    {faq.answer}
                                </motion.p>
                            )}
                        </AnimatePresence>
                    </motion.div>
                ))}
            </div>
            {/* Ask Your Questions Section */}
            <section className="w-full mt-16">
                <div className="max-w-3xl mx-auto text-center bg-gradient-to-br from-cyan-500/20 to-blue-500/10 
                  border border-cyan-400/30 rounded-2xl p-10 shadow-lg backdrop-blur-md">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                        Still Have <span className="text-cyan-400">Questions?</span>
                    </h3>
                    <p className="text-gray-300 mb-6 text-sm md:text-base">
                        We’d love to help you out. Drop your queries and our team will get back
                        to you with the right solution tailored to your brand.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <input
                            type="text"
                            placeholder="Enter you mind..."
                            className="w-full sm:w-2/3 px-4 py-3 rounded-xl bg-white/10 border border-white/20 
                   text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400"
                        />
                        <button className="px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-600 text-white font-semibold 
                         shadow-md transition-all duration-300">
                            Ask Now
                        </button>
                    </div>
                </div>
            </section>

        </section>
    );
}
