// components/services/social-media/SocialProof.jsx
"use client";
import { motion } from "framer-motion";
import { Star, Quote, Users, Globe, Award } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const testimonials = [
    {
        name: "Aarav Sharma",
        role: "Founder, TechSphere",
        feedback:
            "Working with this team completely transformed our social presence. Engagement is up 300%, and ROI has been outstanding.",
        image: "/clients/aarav.png",
    },
    {
        name: "Emily Johnson",
        role: "Marketing Head, CreativeCo",
        feedback:
            "They don’t just post content; they craft experiences. Our brand feels alive on social media like never before.",
        image: "/clients/emily.png",
    },
    {
        name: "David Kim",
        role: "CEO, GrowthLabs",
        feedback:
            "Professional, innovative, and reliable. Their campaigns helped us build real connections with our audience.",
        image: "/clients/david.png",
    },
    {
        name: "Sophia Lee",
        role: "Brand Manager, StyleHub",
        feedback:
            "Creative and results-driven. Our influencer collaborations skyrocketed after working with this team.",
        image: "/clients/sophia.png",
    },
];

const stats = [
    { label: "Global Clients", value: "120+", icon: Globe },
    { label: "Projects Delivered", value: "500+", icon: Award },
    { label: "Community Reach", value: "2M+", icon: Users },
];

const logos = ["/google.png", "/meta.png", "/adobe.png", "/linkedin.png", "/slack.png"];

export default function SocialProof() {
    return (
        <section className="w-full py-16 px-4 text-white">
            <div className="max-w-7xl mx-auto">
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-5xl font-bold">
                        Trusted by <span className="text-cyan-400">Leaders Worldwide</span>
                    </h2>
                    <p className="text-gray-300 mt-3 max-w-2xl mx-auto text-sm md:text-base">
                        We empower brands to connect, engage, and thrive on social media.
                        Here’s what clients and partners say about us.
                    </p>
                </motion.div>

                {/* Stats Row */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            className="bg-white/5 border border-white/10 rounded-xl p-6 text-center backdrop-blur-lg shadow-md"
                        >
                            <div className="flex justify-center mb-3">
                                <stat.icon className="w-8 h-8 text-cyan-400" />
                            </div>
                            <h3 className="text-2xl font-bold">{stat.value}</h3>
                            <p className="text-gray-300 text-sm">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Testimonials Slider */}
                <div className="relative mb-16">
                    <Swiper
                        modules={[Autoplay, Pagination, Navigation]}
                        autoplay={{ delay: 3500, disableOnInteraction: false }}
                        pagination={{ clickable: true }}
                        navigation={true}
                        loop={true}
                        grabCursor={true}
                        spaceBetween={20}
                        breakpoints={{
                            640: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                    >
                        {testimonials.map((t, i) => (
                            <SwiperSlide key={i}>
                                <motion.div
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6 }}
                                    className="relative bg-white/5 border border-white/10 rounded-xl p-6 
                             backdrop-blur-lg shadow-lg hover:shadow-cyan-500/20 transition-all h-full"
                                >
                                    <Quote className="absolute top-4 right-4 text-cyan-400 opacity-50" size={20} />
                                    <div className="flex items-center gap-4 mb-4">
                                        <img
                                            src={t.image}
                                            alt={t.name}
                                            className="w-12 h-12 rounded-full object-cover border border-cyan-400"
                                        />
                                        <div>
                                            <h4 className="font-semibold">{t.name}</h4>
                                            <p className="text-gray-400 text-sm">{t.role}</p>
                                        </div>
                                    </div>
                                    <p className="text-gray-300 text-sm leading-relaxed">{t.feedback}</p>
                                    <div className="flex mt-4 text-yellow-400">
                                        {[...Array(5)].map((_, j) => (
                                            <Star key={j} size={16} fill="currentColor" />
                                        ))}
                                    </div>
                                </motion.div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                {/* Partner Logos */}
                <div className="flex flex-wrap justify-center items-center gap-10 opacity-80">
                    {logos.map((logo, i) => (
                        <motion.img
                            key={i}
                            src={logo}
                            alt="partner"
                            className="h-10 w-auto object-contain"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.15 }}
                        />
                    ))}
                </div>

                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-lg shadow-lg 
                  hover:shadow-cyan-500/20 transition-all duration-300">
                        <h3 className="text-3xl font-bold text-cyan-400">95%</h3>
                        <p className="text-gray-300 mt-2 text-sm">
                            Client Retention Rate — proof of the long-term trust our partners place in us.
                        </p>
                    </div>

                    
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-lg shadow-lg 
                  hover:shadow-cyan-500/20 transition-all duration-300">
                        <h3 className="text-3xl font-bold text-cyan-400">10+ Years</h3>
                        <p className="text-gray-300 mt-2 text-sm">
                            A decade of expertise in building authentic social media experiences.
                        </p>
                    </div>

                
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-lg shadow-lg 
                  hover:shadow-cyan-500/20 transition-all duration-300">
                        <h3 className="text-3xl font-bold text-cyan-400">500+ Brands</h3>
                        <p className="text-gray-300 mt-2 text-sm">
                            From startups to global enterprises, brands across industries trust our work.
                        </p>
                    </div>
                </div>

            
                <div className="text-center mt-10 max-w-3xl mx-auto">
                    <p className="text-gray-400 text-sm md:text-base italic">
                        “We don’t just manage campaigns, we build lasting relationships.
                        Every strategy is designed to inspire trust, spark engagement, and drive real growth.”
                    </p>
                </div>

            </div>
        </section>
    );
}
