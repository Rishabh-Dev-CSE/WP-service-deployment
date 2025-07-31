import React from "react";
import { motion } from "framer-motion";
import ServicesPageSidebar from "./ServicesPageSidebar";
import { Helmet } from "react-helmet";

const ServicePage = () => {
  return (
    <>
      {/* ✅ SEO Tags */}
      <Helmet>
        <title>WP Services - Fraud Prevention & AI Solutions</title>
        <meta
          name="description"
          content="Discover WP Services including fraud protection, AI/ML compliance, and social risk analysis."
        />
        <meta name="keywords" content="WP Services, Fraud, AI Compliance, Machine Learning, Social Fraud" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>

      {/* ✅ Page Layout */}
      <div className="relative bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] min-h-screen flex flex-col md:flex-row overflow-hidden">

        {/* Sidebar */}
        <div className="w-full md:w-auto">
          <ServicesPageSidebar />
        </div>

        {/* Responsive SVG */}
        <div className="absolute left-[12vw] top-[9vh] w-[80vw] md:w-[40vmin] max-w-[300vmin] h-auto z-0">
          <svg
            viewBox="0 0 300 300"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto"
          >
            <path
              d="M250 250 C150 200, 100 50, 50 50"
              stroke="#00FFFF"
              strokeWidth="3"
              fill="none"
              markerEnd="url(#arrowhead)"
            />
            <defs>
              <marker
                id="arrowhead"
                markerWidth="100"
                markerHeight="10"
                refX="0"
                refY="3.5"
                orient="auto"
                markerUnits="strokeWidth"
              >
                <polygon points="0 0, 10 3.5, 0 7" fill="#00FFFF" />
              </marker>
            </defs>
          </svg>
        </div>

        {/* Main Content */}
        <div className="flex-1 relative flex items-center justify-center px-4 py-12 sm:px-6">
          {/* Grid Overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(transparent,rgba(255,255,255,0.02))] pointer-events-none"></div>

          {/* Animated Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative z-10 text-center max-w-3xl"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight tracking-tight mb-6">
              <span className="text-cyan-400">WP</span> Service
            </h1>

            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight">
              Click <span className="text-cyan-400">Services</span>
            </h2>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default ServicePage;
