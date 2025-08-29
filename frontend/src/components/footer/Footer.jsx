import React, { useState } from "react";
import { motion } from "framer-motion";

const Footer = () => {
  let [subscribe, setSubscribe] = useState({ name: "", email: "" });
  let [dataMsg, setDataMsg] = useState("")

  const handleChange = (e) => {
    setSubscribe({ ...subscribe, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const name = subscribe.name.trim();
    const email = subscribe.email.trim();

    if (!email) {
      alert("Please enter your email address 🙌");
      return;
    }

    try {
      const res = await fetch(
        "https://wp-service-deployment-1.onrender.com/api/subscribe",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(subscribe),
        }
      );

      const data = await res.json();
      console.log("Response", data);

      alert("Thanks for subscribing to Velorax 🚀 data",);
      setDataMsg(data);
      setSubscribe({ name: "", email: "" });
    } catch (error) {
      console.error("Error Sending data", error);
      alert("Error Sending data");
    }
  };

  const renderMessage = () => {
  if (!dataMsg) {
    return <h1 className="text-gray-500 ">We connect your business <span className="inline-block animate-spin">🌏</span> worldwide </h1>;
  }

  switch (dataMsg.status) {
    case "exist":
      return <h1 className="text-red-500">You have already subscribed, we will updating you 😊❤️</h1>;

    case "success":
      return <h1 className="text-green-500">Thanks for subscribe , get updates 😊❤️</h1>;

    case "error":
      return <h1 className="text-yellow-500">Sumthing went wrong😒</h1>;

    default:
      return <h1 className="text-gray-500">{dataMsg.status}We make you digital</h1>;
  }
};


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
          <h1>  {renderMessage()} </h1>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-cyan-400">
            Stay Connected with <span className="text-white">Velorax</span>
          </h3>
          <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto">
            Get the latest updates on SaaS, SEO strategies, and digital
            innovations directly in your inbox.
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-3 mx-auto w-full max-w-lg"
        >
          <input
            type="text"
            name="name"
            value={subscribe.name}
            placeholder="Enter your name"
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
            Velorax Digital Agency
          </h4>
          <p className="text-gray-400 text-sm sm:text-base max-w-md mx-auto">
            Delivering premium web, app, SEO, SaaS, and enterprise software
            solutions to help businesses scale globally.
          </p>
        </div>

        {/* Links */}
        <div
          className="
          flex flex-col md:flex-row
          flex-wrap
          justify-center
          items-center
          gap-4
          text-center
        "
        >
          <a href="/about-us" className="hover:text-cyan-400 transition text-sm sm:text-base">About Us</a>
          <a href="/services" className="hover:text-cyan-400 transition text-sm sm:text-base">Services</a>
          <a href="/case-studies" className="hover:text-cyan-400 transition text-sm sm:text-base">Case Studies</a>
          <a href="/blog" className="hover:text-cyan-400 transition text-sm sm:text-base">Blog</a>
          <a href="/careers" className="hover:text-cyan-400 transition text-sm sm:text-base">Careers</a>
          <a href="/contact" className="hover:text-cyan-400 transition text-sm sm:text-base">Contact</a>
          <a href="/privacy-policy" className="hover:text-cyan-400 transition text-sm sm:text-base">Privacy Policy</a>
          <a href="/terms" className="hover:text-cyan-400 transition text-sm sm:text-base">Terms of Service</a>
        </div>
      </motion.div>

      {/* Bottom Note */}
      <div className="mt-10 text-center text-xs sm:text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Velorax. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
