// components/services/social-media/SocialMediaServices.jsx
import { motion } from "framer-motion";
import { useState, useRef } from "react";
import { Megaphone, BarChart3, Users, PenTool, MessageSquare, Share2 } from "lucide-react";

const services = [
  {
    title: "Social Media Strategy",
    desc: "Tailored strategies to build brand authority, boost followers, and grow engagement across all platforms.",
    icon: Megaphone,
    video: "/othervideo/center-phone-video.mp4",
  },
  {
    title: "Content Creation",
    desc: "High-quality visuals, videos, and graphics crafted to match your brand's unique identity.",
    icon: PenTool,
   video: "/othervideo/ecomvideo.mp4",
  },
  {
    title: "Community Management",
    desc: "Engage with your audience through timely responses, feedback handling, and active conversation building.",
    icon: Users,
    video: "/othervideo/ecomvideo.mp4",
  },
  {
    title: "Paid Campaigns",
    desc: "Run data-driven ad campaigns on Facebook, Instagram, LinkedIn & TikTok for measurable ROI.",
    icon: BarChart3,
    video: "/othervideo/ecomvideo.mp4",
  },
  {
    title: "Influencer Marketing",
    desc: "Collaborate with niche influencers who resonate with your audience to amplify reach and trust.",
    icon: Share2,
    video: "/othervideo/ecomvideo.mp4",
  },
  {
    title: "Analytics & Reporting",
    desc: "Track progress with detailed insights, monthly reports, and performance optimization strategies.",
    icon: MessageSquare,
    video: "/othervideo/ecomvideo.mp4",
  },
];

export default function SocialMediaServices() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [videoLoaded, setVideoLoaded] = useState({});
  const videoRefs = useRef([]);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
    if (videoRefs.current[index]) {
      // Only try to play if video is loaded
      if (videoLoaded[index]) {
        videoRefs.current[index].play().catch(e => {
          console.log("Autoplay prevented:", e);
        });
      }
    }
  };

  const handleMouseLeave = (index) => {
    setHoveredIndex(null);
    if (videoRefs.current[index]) {
      videoRefs.current[index].pause();
      videoRefs.current[index].currentTime = 0;
    }
  };

  const handleVideoLoad = (index) => {
    setVideoLoaded(prev => ({ ...prev, [index]: true }));
  };

  const handleVideoError = (index) => {
    console.error(`Video failed to load for service ${index}`);
    setVideoLoaded(prev => ({ ...prev, [index]: false }));
  };

  return (
    <section className="w-full text-white px-4 py-12 md:py-16 lg:py-20 bg-gradient-to-br from-[#15172e] to-[#1e224c] ">
      {/* Heading */}
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500"
        >
          Our Social Media Services
        </motion.h2>
        <p className="text-gray-300 text-base md:text-lg mt-4 max-w-3xl mx-auto font-light">
          We offer end-to-end social media solutions designed to elevate your brand presence, 
          boost engagement, and drive measurable results.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative bg-gradient-to-b from-gray-900 via-gray-800/70 to-gray-900 border border-white/5 rounded-2xl p-8 backdrop-blur-xl shadow-2xl 
                       hover:shadow-cyan-500/10 hover:border-cyan-400/20 transition-all duration-500 group h-96 overflow-hidden"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
          >
            {/* Premium corner accents */}
            <div className="absolute top-0 right-0 w-32 h-32">
              <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-cyan-400/40 rounded-tr-2xl"></div>
            </div>
            <div className="absolute bottom-0 left-0 w-32 h-32">
              <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-cyan-400/40 rounded-bl-2xl"></div>
            </div>
            
            {/* Floating Icon with premium glow effect */}
            <div className="absolute top-6 left-6 w-14 h-14 rounded-xl flex items-center justify-center 
                            bg-gradient-to-br from-cyan-400 to-blue-500 text-white shadow-lg z-10 
                            group-hover:shadow-cyan-400/40 group-hover:scale-110 transition-all duration-300">
              <service.icon size={24} />
            </div>

            {/* Text Content */}
            <div className={`absolute inset-0 p-8 flex flex-col justify-end transition-all duration-500 z-10
                            ${hoveredIndex === index ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
              <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                {service.title}
              </h3>
              <p className="text-gray-300 text-base mt-4 leading-relaxed font-light tracking-wide">
                {service.desc}
              </p>
              
              {/* Subtle CTA */}
              <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="text-cyan-400 text-sm font-medium flex items-center">
                  Hover to preview
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
                  </svg>
                </span>
              </div>
            </div>

            {/* Video Container */}
            <div className={`absolute inset-0 rounded-2xl overflow-hidden transition-all duration-700
                            ${hoveredIndex === index ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}>
              <video
                ref={el => videoRefs.current[index] = el}
                src={service.video}
                muted
                loop
                preload="auto"
                playsInline
                className="w-full h-full object-cover"
                onLoadedData={() => handleVideoLoad(index)}
                onError={() => handleVideoError(index)}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
              
              {/* Loading indicator */}
              {!videoLoaded[index] && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-400"></div>
                </div>
              )}
              
              {/* Title overlay on video */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="text-2xl font-bold text-white drop-shadow-md">{service.title}</h3>
                <div className="w-12 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 mt-3 mb-4 rounded-full"></div>
                <p className="text-gray-200 text-sm font-light opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  {service.desc}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}