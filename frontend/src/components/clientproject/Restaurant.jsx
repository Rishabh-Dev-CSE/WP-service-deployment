import { motion } from "framer-motion";
import { FaUtensils, FaMobileAlt, FaClock, FaLeaf } from "react-icons/fa";
import { Link } from "react-router-dom";

const RestaurantDesign = () => {         
  return (
    <div className="bg-[#0B0B28] text-white flex flex-col md:flex-row items-center justify-between px-8 py-12 gap-8  shadow-lg">
      
      {/* Video Section (Left Side) */}
      <motion.div
        className="flex-1 flex justify-center"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* <video
          // src="/othervideo/ecomvideo.mp4"
          width={500}
          height={400}
          className="rounded-xl shadow-2xl"
          autoPlay
          loop
          muted
          playsInline
        /> */}

        <img
        className="rounded-[10px] shadow"
        src="/otherimages/restaurant.png" 
        alt="restaurant image HD 4k graphics" 
        width={500}

        />
      </motion.div>

      {/* Text Section */}
      <motion.div
        className="flex-1"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4"
        style={{fontSize:"5vmin"}}
        >
          Restaurant Website <span className="text-[#00C3FF]">That Attracts</span>
        </h2>
        <p className="text-gray-300 mb-8">
          We create visually appealing, mouth-watering restaurant websites that blend 
          seamless ordering experience with flavor-filled design. Built to impress, built to serve.
        </p>

        <div className="space-y-5">
          <div className="flex items-start gap-4">
            <FaUtensils className="text-[#00C3FF] text-2xl" />
            <div>
              <h4 className="font-semibold">Mouth-Watering Visuals</h4>
              <p className="text-gray-400 text-sm">
                Showcase your menu with high-quality images that tempt customers to order.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <FaMobileAlt className="text-[#00C3FF] text-2xl" />
            <div>
              <h4 className="font-semibold">Mobile-First Design</h4>
              <p className="text-gray-400 text-sm">
                Smooth and responsive experience for customers on any device.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <FaClock className="text-[#00C3FF] text-2xl" />
            <div>
              <h4 className="font-semibold">Quick Reservations</h4>
              <p className="text-gray-400 text-sm">
                Integrated booking system for hassle-free table reservations.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <FaLeaf className="text-[#00C3FF] text-2xl" />
            <div>
              <h4 className="font-semibold">Fresh & Authentic Branding</h4>
              <p className="text-gray-400 text-sm">
                A design that reflects your restaurant’s unique flavors and style.
              </p>
            </div>
          </div>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-8 bg-gradient-to-r from-[#00C3FF] to-[#3A7BD5] px-6 py-3 rounded-full font-semibold shadow-lg"
        >
          <Link to={"/services/website-development-theme"} >

          Launch Your Restaurant Website
          </Link>
        </motion.button>
      </motion.div>
    </div>
  );
};

export default RestaurantDesign;
