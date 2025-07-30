import React from "react";
import { motion } from "framer-motion";
import ServicesPageSidebar from "./ServicesPageSidebar";

const ServicePage = () => {
  return (
    <div className="relative bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] min-h-screen flex">
      {/* Sidebar */}
      <ServicesPageSidebar />

      <svg width="700" height="1000" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg"
        style={{
          position:"absolute",
          left:"20vmin",
          top:"-10vmin"

        }}
      >
        <path
          d="M250 250 C150 100, 100 50, 50 50"
          stroke="#00FFFF"
          strokeWidth="3"
          fill="none"
          marker-end="url(#arrowhead)"
        />
        <defs>
          <marker
            id="arrowhead"
            markerWidth="10"
            markerHeight="7"
            refX="0"
            refY="3.5"
            orient="auto"
            markerUnits="strokeWidth"
          >
            <polygon points="0 0, 10 3.5, 0 7" fill="#00FFFF" />
          </marker>
        </defs>
      </svg>




      {/* Main Content Wrapper */}
      <div className="flex-1 relative flex items-center justify-center px-6">
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(transparent,rgba(255,255,255,0.02))] pointer-events-none"></div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative z-10 text-center max-w-3xl"
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight mb-6"
            style={{ fontSize: "10vmin" }}
          >
            <span className="text-cyan-400">WP</span> Service
          </h1>
          <p className="text-lg text-gray-400">
            Professional WordPress services tailored for your business needs.
          </p>
           <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight mb-6"
            style={{ fontSize: "5vmin" }}
          >
            Click<span className="text-cyan-400"> Services</span>
          </h1>
        </motion.div>
      </div>
    </div>
  );
};

export default ServicePage;
