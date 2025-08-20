// components/services/social-media/SocialMediaIntro.jsx
import { motion } from "framer-motion";
import { Rocket, Award, Zap, Play } from "lucide-react";

export default function SocialMediaIntro() {
  return (
    <div className="w-full bg-white/10 backdrop-blur-xl p-4 md:p-6 lg:p-8 flex flex-col-reverse md:flex-row items-center justify-between shadow-2xl border border-white/5 gap-6 md:gap-10 bg-gradient-to-br from-[#15172e] to-[#1e224c] ">
      
      {/* Left Content */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="flex-1 space-y-4 md:space-y-6 text-center md:text-left"
      >
        
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-snug text-white">
          <span className="inline-flex items-center text-cyan-400 m-1 md:m-2 gap-1 md:gap-2">
            <Rocket className="text-cyan-400 w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" />
            Your Social
          </span>
          Media Solution.
        </h1>

        <p className="text-gray-300 max-w-full md:max-w-md mx-auto md:mx-0 text-xs sm:text-sm md:text-base">
          We are ready and can plan, execute, and track social media marketing campaigns.
          Customize and craft your content from multiple sources.
        </p>

        <div className="flex flex-wrap gap-3 md:gap-4 justify-center md:justify-start">
          <button className="px-4 py-1.5 sm:px-5 sm:py-2 md:px-6 md:py-3 rounded-full border border-cyan-400 text-cyan-400 flex items-center gap-1.5 md:gap-2 hover:bg-cyan-500 hover:text-white transition-all text-xs sm:text-sm md:text-base">
            <Play size={14} className="md:size-4" /> Watch Video
          </button>
        </div>

        {/* Partner Logos */}
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 sm:gap-4 md:gap-6 mt-4 md:mt-6">
          {["/google.png","/meta.png","/adobe.png","/linkedin.png","/slack.png"].map((logo, i) => (
            <motion.img
              key={i}
              src={logo}
              alt="partner logo"
              className="h-4 sm:h-5 md:h-6 lg:h-7 w-auto object-contain"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
            />
          ))}
        </div>
      </motion.div>

      {/* Right Image Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="relative flex-1 flex justify-center mt-15 md:mt-20 max-w-xs sm:max-w-sm md:max-w-md mx-auto"
      >
        {/* Glow Circle */}
        <div className="absolute -top-5 w-[120px] sm:w-[180px] md:w-[250px] lg:w-[350px] h-[120px] sm:h-[180px] md:h-[250px] lg:h-[350px] bg-gradient-to-br from-cyan-400/30 to-blue-500/20 rounded-full blur-2xl md:blur-3xl"></div>
        
        {/* Main Image */}
        <img
          src="/otherimages/girlimage.png"
          alt="social media"
          className="relative z-10 rounded-2xl shadow-2xl w-[150px] sm:w-[200px] md:w-[280px] lg:w-[380px] object-contain"
          style={{
            borderRadius: "10px 200px",
          }}
        />

        {/* Floating Badges */}
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ repeat: Infinity, duration: 3 }}
          className="absolute top-0 left-0 sm:top-2 sm:left-2 md:top-5 md:left-5 bg-white text-black px-2 py-1 md:px-3 md:py-1.5 lg:px-4 lg:py-2 rounded-full shadow-lg flex items-center gap-1 md:gap-2 z-20 text-[10px] sm:text-xs md:text-sm"
        >
          <Award className="text-yellow-500 size-3 md:size-4" /> Best Agency Awards
        </motion.div>

        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 3, delay: 1 }}
          className="absolute bottom-0 right-0 sm:bottom-2 sm:right-2 md:bottom-5 md:right-5 bg-white text-black px-2 py-1 md:px-3 md:py-1.5 lg:px-4 lg:py-2 rounded-full shadow-lg flex items-center gap-1 md:gap-2 z-20 text-[10px] sm:text-xs md:text-sm"
        >
          <Zap className="text-yellow-500 size-3 md:size-4" /> 24/7 Free Access
        </motion.div>
      </motion.div>
    </div>
  );
}