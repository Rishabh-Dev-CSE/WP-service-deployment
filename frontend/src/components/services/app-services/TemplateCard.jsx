import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function TemplateCard({ template }) {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  return (
    <>
      {/* Main Card */}
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        whileHover={{ scale: 1.02 }}
        className="bg-slate-900/40 backdrop-blur-xl border border-slate-700/60 rounded-2xl overflow-hidden group shadow-md flex flex-col transition-all duration-500 w-full"
      >
        {/* Image Section */}
        <div className="relative overflow-hidden">
          <img
            className="w-full h-40 sm:h-44 md:h-48 lg:h-56 object-cover transition-transform duration-500 group-hover:scale-110"
            src={`${template.appthumbnail}`}
            alt={`${template.name} template screenshot`}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                "https://placehold.co/600x400/1e293b/ff0000?text=Image+Error";
            }}
          />

          {/* Floating Badge */}
          <div className="absolute top-2 right-2 bg-slate-900/70 backdrop-blur-md text-cyan-400 text-[10px] sm:text-xs font-bold px-2 sm:px-3 py-0.5 sm:py-1 rounded-full shadow-md shadow-cyan-500/20">
            APP
          </div>

          {/* Overlay Hover Effect */}
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/30 to-transparent flex items-center justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsPreviewOpen(true)}
              className="px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-sky-500 to-cyan-400 text-white text-xs sm:text-sm font-semibold rounded-lg shadow-md shadow-cyan-500/30 hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300"
            >
              Preview
            </motion.button>
          </motion.div>
        </div>

        {/* Content Section */}
        <div className="p-3 sm:p-4 md:p-5 flex-grow flex flex-col">
          <h3 className="text-white font-bold text-base sm:text-lg md:text-xl mb-2 truncate group-hover:text-cyan-400 transition-colors duration-300">
            {template.rating}
          </h3>
          <h3 className="text-white font-bold text-base sm:text-lg md:text-xl mb-2 truncate group-hover:text-cyan-400 transition-colors duration-300">
            {template.name}
          </h3>

          {template.description ? (
            <p className="text-slate-400 text-xs sm:text-sm md:text-base mb-4 line-clamp-2">
              {template.description}
            </p>
          ) : (
            <div className="h-5 mb-4"></div>
          )}

          {/* CTA Button */}
          <div className="mt-auto">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.92 }}
              onClick={() => setIsPreviewOpen(true)}
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-sky-600 to-cyan-500 text-white text-xs sm:text-sm md:text-base font-semibold py-2 sm:py-2.5 md:py-3 px-3 sm:px-4 rounded-lg shadow-md shadow-cyan-500/20 hover:shadow-lg hover:shadow-cyan-500/40 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-1 focus:ring-offset-slate-900 transition-all duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                fill="currentColor"
                viewBox="0 0 16 16"
                className="animate-pulse hidden sm:block"
              >
                <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
              </svg>
              <span>View Template</span>
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Modal Image Preview */}
      <AnimatePresence>
        {isPreviewOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setIsPreviewOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="relative max-w-3xl w-full"
              onClick={(e) => e.stopPropagation()} // Prevent close on image click
            >
              <img
                src={template.appthumbnail}
                alt={`${template.name} large preview`}
                className="w-full h-auto rounded-xl shadow-2xl"
              />
              {/* Close Button */}
              <button
                onClick={() => setIsPreviewOpen(false)}
                className="absolute top-3 right-3 bg-slate-900/70 hover:bg-red-600 text-white text-xs sm:text-sm font-bold px-3 py-1 rounded-full shadow-md"
              >
                ✕ Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
