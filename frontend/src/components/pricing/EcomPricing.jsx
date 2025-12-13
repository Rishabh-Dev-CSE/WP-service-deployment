import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Helmet } from "react-helmet";

const plans = [
  {
    name: "Starter",
    price: "$199/mo ",
    tagline: "Perfect for individuals & small projects",
    features: [
      "Basic SaaS tools included",
      "5 Website pages",
      "Basic App prototype",
      "Static Website(Responsive)",
      "Social Media setup (2 platforms)",
      "Email support",
    ],
    highlighted: false,
  },
  {
    name: "Professional",
    price: "$499/6 mon",
    tagline: "Best for growing businesses",
    features: [
      "Full SaaS suite access",
      "Up to 10+ Website pages",
      "Mobile App (iOS + Android)",
      "Google Authentication",
      "Social Media management (4 platforms)",
      "Monthly analytics report",
      "SEO Service Included",
      "Google Rating",
      "+ Maintenance FREE /6 months",
      "Payment Gateway for ecommerce",
      "Priority 24/7 support",
    ],
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    tagline: "Tailored for enterprises & agencies",
    features: [
      "Advanced SaaS integrations",
      "Unlimited Website pages",
      "Full-scale App development",
      "Complete Social Media suite",
      "Dedicated account manager",
      "Custom analytics dashboard",
    ],
    highlighted: false,
  },
];

export default function PricingPlans() {
  const currentYear = new Date().getFullYear();

  const Card = ({ plan }) => (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`relative rounded-2xl p-8 border backdrop-blur-lg shadow-lg transition-all duration-300 
        ${plan.highlighted
          ? "bg-gradient-to-b from-cyan-500/20 to-blue-600/20 border-cyan-400 shadow-cyan-500/40 scale-105"
          : "bg-white/5 border-white/10 hover:shadow-cyan-500/30 hover:border-cyan-400/50"
        }`}
    >

      <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
      <p className="text-cyan-400 text-3xl font-bold mb-4">{plan.price}</p>
      <p className="text-gray-300 text-sm mb-6">{plan.tagline}</p>

      <ul className="space-y-3 mb-6">
        {plan.features.map((feature, i) => (
          <li key={i} className="flex items-center gap-2 text-gray-300">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400"></span>
            {feature}
          </li>
        ))}
      </ul>

      <button
        className={`w-full py-3  bottom-5 rounded-xl font-medium transition-all duration-300
          ${plan.highlighted
            ? "bg-cyan-400 text-black hover:bg-cyan-300"
            : "bg-white/10 hover:bg-cyan-500/20"
          }`}
      >
        Get Started
      </button>
    </motion.div>
  );

  return (
    <section className="w-full mt-15 py-20 bg-gradient-to-b from-[#0a0f1c] to-[#0f172a] text-white">
     <Helmet> 
     <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8034689723711025"
     crossorigin="anonymous"></script>
     </Helmet>
      {/* Heading */}
      <div className="text-center mb-14">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-extrabold"
        > <span className="text-cyan-400">We make </span> you digital <br></br>
          Flexible <span className="text-cyan-400">Pricing Plans</span>
        </motion.h2>
        <p className="text-gray-400 mt-3 max-w-2xl mx-auto">
          Choose a plan that fits your business needs. Scalable, transparent, and designed for growth.
        </p>
      </div>

      {/* Desktop Grid */}
      <div className="hidden md:grid grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
        {plans.map((plan, index) => (
          <Card key={index} plan={plan} />
        ))}
      </div>

      {/* Mobile Carousel (Auto + User Swipe + Infinite Loop) */}
      <div className="md:hidden px-6 relative">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
        >
          {plans.map((plan, index) => (
            <SwiperSlide key={index}>
              <Card plan={plan} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Bottom Year */}
      <div className="text-center text-gray-500 mt-12 text-sm">
        © {currentYear} All Rights Reserved
      </div>
    </section>
  );
}
