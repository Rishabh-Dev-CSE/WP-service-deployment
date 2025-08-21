import React from "react";
import { motion } from "framer-motion";
import { FaShoppingCart, FaMobileAlt, FaRocket, FaUserCheck } from "react-icons/fa";
import { Link } from "react-router-dom";

const EcommerceDesign = ({
  imageSrc = "/otherimages/ecom.png",
  onCtaClick,
}) => {
  return (
    <div className="bg-[#0B0B28] text-white flex flex-col md:flex-row items-center justify-between px-8 py-12 gap-8  shadow-lg">
      {/* Graphics Section (Left Side) */}
      <motion.div
        className="flex-1 flex justify-center relative"
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.img
          src={imageSrc}
          alt="E-commerce preview"
          loading="lazy"
          decoding="async"
          className="rounded-xl shadow-2xl max-w-[520px] w-full h-auto"
          onError={(e) => {
            e.currentTarget.src = "https://via.placeholder.com/500x350.png?text=E-commerce+Preview";
          }}
          initial={{ scale: 0.98 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 120, damping: 14 }}
        />
      </motion.div>

      {/* Text Section */}
      <motion.div
        className="flex-1"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.15 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4"
        style={{fontSize:'5vmin'}}
        >
          E-commerce Design <span className="text-[#00C3FF]">That Sells</span>
        </h2>
        <p className="text-gray-300 mb-8">
          We build high-converting online stores with a seamless shopping experience
          and performance-driven designs. Built to attract, built to sell.
        </p>

        <div className="space-y-5">
          <div className="flex items-start gap-4">
            <FaShoppingCart className="text-[#00C3FF] text-2xl" />
            <div>
              <h4 className="font-semibold">Conversion-Optimized UI</h4>
              <p className="text-gray-400 text-sm">
                Every click counts — our designs guide users smoothly to checkout.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <FaUserCheck className="text-[#00C3FF] text-2xl" />
            <div>
              <h4 className="font-semibold">Intuitive UX</h4>
              <p className="text-gray-400 text-sm">
                Clear navigation and seamless flow to reduce friction and drop-offs.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <FaMobileAlt className="text-[#00C3FF] text-2xl" />
            <div>
              <h4 className="font-semibold">Mobile-First Approach</h4>
              <p className="text-gray-400 text-sm">
                Pixel-perfect, responsive designs for all devices.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <FaRocket className="text-[#00C3FF] text-2xl" />
            <div>
              <h4 className="font-semibold">Performance Driven</h4>
              <p className="text-gray-400 text-sm">
                Fast loading, optimized design for better conversions.
              </p>
            </div>
          </div>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.96 }}
          className="mt-8 bg-gradient-to-r from-[#00C3FF] to-[#3A7BD5] px-6 py-3 rounded-full font-semibold shadow-lg focus:outline-none focus:ring-2 focus:ring-[#00C3FF]/60"
          onClick={onCtaClick}
        >
          <Link to={"/services/website-development-theme"} >
          
                Launch Your Store With Us
          </Link>
        </motion.button>
      </motion.div>
    </div>
  );
};

export default EcommerceDesign;
