import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Footer = () => {
  let [subscribe, setSubscribe] = useState({ name: ' ', email: '' })

  const handleChange = e => {
    setSubscribe({ ...subscribe, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:8000/subscribe', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(subscribe)
      });
      const data = await res.json();
      console.log('Response', data);
      alert('Thanks for subscribing 😊 ', data)
      setSubscribe({ name: '', email: '' });
    } catch (error) {
      console.error('Error Sending data', error)
      alert('Error Sending data', error)
    }
  }


  return (
    <footer className="bg-gradient-to-b from-[#0f0c29] via-[#302b63] to-[#24243e] text-gray-300 pt-14 pb-8 px-4 sm:px-6 lg:px-12">

      {/* Newsletter Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="
          max-w-4xl mx-auto
          bg-[#15162b]
          rounded-2xl
          p-6 sm:p-10
          flex flex-col gap-6
          shadow-[0_0_30px_#00ffff30]
        "
      >
        <div className="space-y-2 text-center">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-cyan-400">
            Subscribe to my newsletter
          </h3>
          <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto">
            Get updates on my latest projects, articles, and tips on frontend and backend development.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 mx-auto w-full max-w-lg">
          <input
            type="email"
            name="email"
              value={subscribe.email} 
            placeholder="Enter your email"
            onChange={handleChange}
            className="
              flex-1
              bg-[#0f0c29]
              border border-gray-700
              text-gray-200
              px-4 py-3
              rounded-lg
              focus:outline-none
              focus:border-cyan-400
              transition
              text-sm sm:text-base
            "
          />
          <button
            type="submit"
            className="
              bg-cyan-400
              hover:bg-cyan-300
              text-[#0f0c29]
              font-semibold
              px-5 py-3
              rounded-lg
              transition
              text-sm sm:text-base
            "
          >
            Subscribe
          </button>
        </form>
      </motion.div>

      {/* Footer Links Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="
          max-w-4xl mx-auto
          mt-14
          border-t border-gray-800
          pt-10
          flex flex-col items-center
          gap-8
        "
      >
        {/* Branding */}
        <div className="space-y-2 text-center">
          <h4 className="text-xl sm:text-2xl md:text-3xl font-bold text-cyan-400">
            Rishabh Suryavanshi
          </h4>
          <p className="text-gray-400 text-sm sm:text-base max-w-md mx-auto">
            Fullstack Developer crafting modern, responsive, and intuitive experiences.
          </p>
        </div>

        {/* Links (mobile=column, desktop=row) */}
        <div className="
          flex flex-col md:flex-row
          flex-wrap
          justify-center
          items-center
          gap-4
          text-center
        ">
          <a href="#about" className="hover:text-cyan-400 transition text-sm sm:text-base">About</a>
          <a href="#projects" className="hover:text-cyan-400 transition text-sm sm:text-base">Projects</a>
          <a href="#skills" className="hover:text-cyan-400 transition text-sm sm:text-base">Skills</a>
          <a href="#contact" className="hover:text-cyan-400 transition text-sm sm:text-base">Contact</a>
          <a href="#privacy" className="hover:text-cyan-400 transition text-sm sm:text-base">Privacy Policy</a>
          <a href="#terms" className="hover:text-cyan-400 transition text-sm sm:text-base">Terms of Service</a>
        </div>
      </motion.div>

      {/* Bottom Note */}
      <div className="mt-10 text-center text-xs sm:text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Rishabh. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
