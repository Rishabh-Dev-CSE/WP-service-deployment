// components/services/social-media/CaseStudies.jsx
import { motion } from "framer-motion";
import { BarChart3, TrendingUp, Users, ArrowRight, Sparkles, Target, Award } from "lucide-react";

const caseStudies = [
  {
    brand: "TechSphere",
    logo: "/logos/techsphere.png",
    challenge: "Struggling with low engagement on Instagram despite paid campaigns.",
    solution:
      "We redefined their content calendar, added influencer partnerships, and built short-form video strategy.",
    result: "📈 Engagement rate boosted by 320% in just 3 months.",
    icon: TrendingUp,
    stats: ["320%", "Engagement Boost"],
    duration: "3 Months",
    industry: "Technology"
  },
  {
    brand: "Glow Cosmetics",
    logo: "/logos/glow.png",
    challenge: "Wanted to boost brand awareness in a highly competitive skincare market.",
    solution:
      "Executed a targeted TikTok & Instagram Reels campaign with niche beauty creators.",
    result: "🚀 Reached 12M+ users & tripled followers in 60 days.",
    icon: Users,
    stats: ["12M+", "Users Reached"],
    duration: "60 Days",
    industry: "Beauty & Cosmetics"
  },
  {
    brand: "FinEdge Finance",
    logo: "/logos/finedge.png",
    challenge: "Low lead conversion despite strong ad spend on LinkedIn.",
    solution:
      "Created tailored LinkedIn ads, optimized messaging for B2B audience, and improved landing pages.",
    result: "🎯 45% higher qualified leads, CPL reduced by 28%.",
    icon: BarChart3,
    stats: ["45%", "More Leads"],
    duration: "4 Months",
    industry: "Finance"
  },
];

export default function CaseStudies() {
  return (
    <section className="w-full py-20 px-4 md:px-8 lg:px-12 text-white relative overflow-hidden">
      {/* Premium Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
    
      </div>

      {/* Heading */}
      <div className="text-center mb-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 px-4 py-2 rounded-full border border-cyan-500/20 mb-6"
        >
          <Sparkles className="w-4 h-4 text-cyan-400" />
          <span className="text-cyan-400 text-sm font-medium">Success Stories</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
        >
          Proven <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Results</span>
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-300 mt-3 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed"
        >
          We don't just promise results — we deliver transformative outcomes. 
          Here's how elite brands across industries trusted us to revolutionize their digital presence.
        </motion.p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto relative z-10">
        {caseStudies.map((study, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: index * 0.15 }}
            viewport={{ once: true, margin: "-50px" }}
            className="relative group"
          >
            {/* Card Container */}
            <div className="relative bg-gradient-to-br from-white/5 to-white/10 
                           border border-white/10 rounded-2xl p-8 backdrop-blur-xl 
                           shadow-2xl hover:shadow-cyan-500/20 
                           transition-all duration-500 hover:-translate-y-3 h-full
                           overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-cyan-500/0 before:via-purple-500/0 before:to-blue-500/0 before:transition-all before:duration-700 before:hover:via-cyan-500/5 before:hover:from-purple-500/5">
              
              {/* Decorative Corner Elements */}
              <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-cyan-400/10 to-transparent rounded-tr-2xl"></div>
              </div>
              
              {/* Industry Badge */}
              <div className="absolute top-4 right-4">
                <span className="text-xs font-medium text-cyan-300 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-400/20">
                  {study.industry}
                </span>
              </div>

              {/* Logo + Brand */}
              <div className="flex items-center gap-4 mb-6">
                <div className="relative h-14 w-14 flex items-center justify-center rounded-xl 
                                bg-gradient-to-tr from-cyan-400/20 to-blue-500/20 
                                shadow-lg border border-white/10">
                  <div className="absolute inset-0 bg-gradient-to-tr from-cyan-400/10 to-blue-500/10 rounded-xl"></div>
                  <img
                    src={study.logo}
                    alt={`${study.brand} logo`}
                    className="h-8 w-8 object-contain relative z-10"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold tracking-wide text-white">{study.brand}</h3>
                  <p className="text-cyan-400 text-sm flex items-center gap-1">
                    <Target size={14} />
                    {study.duration}
                  </p>
                </div>
              </div>

              {/* Stats Highlight */}
              <div className="mb-6 p-4 rounded-xl bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-400/20">
                <div className="text-3xl font-bold text-cyan-400">{study.stats[0]}</div>
                <div className="text-sm text-cyan-300">{study.stats[1]}</div>
              </div>

              {/* Challenge */}
              <div className="mb-5">
                <p className="text-gray-300 text-sm leading-relaxed">
                  <span className="font-semibold text-white">Challenge:</span> {study.challenge}
                </p>
              </div>

              {/* Solution */}
              <div className="mb-6">
                <p className="text-gray-300 text-sm leading-relaxed">
                  <span className="font-semibold text-white">Our Solution:</span> {study.solution}
                </p>
              </div>

              {/* Result */}
              <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-cyan-500/15 to-blue-500/15 
                              border border-cyan-400/30 flex items-center gap-3 group-hover:border-cyan-400/50 
                              transition-all duration-300">
                <div className="flex-shrink-0">
                  <study.icon size={24} className="text-cyan-400" />
                </div>
                <span className="text-cyan-300 font-medium text-sm">{study.result}</span>
              </div>

              {/* View Case Study Button */}
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        viewport={{ once: true }}
        className="text-center mt-16 relative z-10"
      >
        <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 p-8 rounded-2xl border border-cyan-400/20 backdrop-blur-sm">
          <Award className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to Transform Your Social Presence?
          </h3>
          <p className="text-gray-300 max-w-2xl mx-auto mb-6">
            Join our roster of elite brands and experience the premium difference in social media marketing.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 
                       text-white font-medium shadow-lg shadow-cyan-500/25 
                       hover:shadow-cyan-500/40 transition-all duration-300"
          >
            Schedule Strategy Call
          </motion.button>
        </div>
      </motion.div>

      {/* Floating decorative elements */}
      <motion.div 
        className="absolute top-1/4 left-10 w-3 h-3 rounded-full bg-cyan-400"
        animate={{ y: [0, 15, 0], opacity: [0.5, 1, 0.5] }}
        transition={{ repeat: Infinity, duration: 4 }}
      />
      <motion.div 
        className="absolute bottom-1/3 right-16 w-4 h-4 rounded-full bg-purple-400"
        animate={{ y: [0, -12, 0], opacity: [0.5, 1, 0.5] }}
        transition={{ repeat: Infinity, duration: 5, delay: 1 }}
      />
    </section>
  );
}