import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaUser,
  FaEnvelope,
  FaBuilding,
  FaCommentDots,
  FaPaperPlane,
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

const EnquiryForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("http://localhost:8000/enquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Network response was not ok");

      const data = await response.json();
      console.log("Server Response:", data);
      alert("Message sent successfully!");
      setFormData({
        name: "",
        email: "",
        company: "",
        message: "",
      });
    } catch (err) {
      console.error(err);
      alert("Failed to send enquiry.");
    } finally {
      setLoading(false);
    }
  };

  const inputStyle =
    "w-full bg-[#23233a] border border-[#33324a] text-white pl-10 pr-4 py-3 rounded-lg focus:outline-none focus:ring-1 focus:ring-cyan-400";

  const inputVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
    }),
  };

  const fields = [
    {
      name: "name",
      placeholder: "e.g. Rishabh Shakya",
      type: "text",
      icon: <FaUser className="absolute left-3 top-3.5 text-cyan-400" />,
    },
    {
      name: "email",
      placeholder: "you@example.com",
      type: "email",
      icon: <FaEnvelope className="absolute left-3 top-3.5 text-cyan-400" />,
    },
    {
      name: "company",
      placeholder: "Your brand or company (optional)",
      type: "text",
      icon: <FaBuilding className="absolute left-3 top-3.5 text-cyan-400" />,
    },
  ];

  return (
    <section className="relative bg-gradient-to-br from-[#952ca3] via-[#302b63] to-[#24243e] text-white py-28 px-6 flex items-center justify-center min-h-screen overflow-hidden">
      {/* Animated Blobs */}
      <div className="absolute top-10 -left-20 w-72 h-72 bg-cyan-500 opacity-20 rounded-full filter blur-3xl animate-pulse" />
      <div className="absolute bottom-10 -right-20 w-72 h-72 bg-purple-500 opacity-20 rounded-full filter blur-3xl animate-pulse delay-200" />

      {/* Container */}
      <div className="relative z-10 max-w-6xl w-full grid md:grid-cols-2 gap-12">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", duration: 0.8 }}
          className="flex flex-col justify-center"
        >
          <motion.div
            initial={{ rotate: -10, scale: 0.8 }}
            whileInView={{ rotate: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", duration: 0.6 }}
            className="text-4xl text-cyan-400 mb-4"
          >
            <FaPaperPlane />
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold  mb-6 leading-tight"
            style={{fontSize:"10vmin"}}
          >
            Let’s Build <span className="text-cyan-400">Something Real</span>
          </h2>
          <p className="text-gray-300 font-600 text-lg mb-6">
            Whether you're a startup or scaling brand — let's craft digital
            experiences that convert and inspire.
          </p>
          <ul className="space-y-3 text-gray-300 text-sm">
            <li>📱 Product Design, SaaS & eCom</li>
            <li>🚀 Mobile-first, fast, scalable UX</li>
            <li>🎯 Strategy + performance focused</li>
          </ul>

          {/* Social Icons */}
          <div className="mt-8 flex gap-6 text-2xl text-gray-400">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <FaTwitter />
            </a>
          </div>
        </motion.div>

        {/* Right: Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 90, damping: 14 }}
          className="bg-[#1a1a2e] border border-[#2b2b45] p-8 rounded-2xl shadow-lg space-y-6"
        >
          <h3 className="text-2xl font-semibold mb-4">Enquiry Form</h3>

          {fields.map((field, i) => (
            <motion.div
              key={field.name}
              className="relative"
              custom={i}
              variants={inputVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {field.icon}
              <input
                type={field.type}
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                placeholder={field.placeholder}
                className={inputStyle}
                required={field.name !== "company"}
              />
            </motion.div>
          ))}

          <motion.div
            custom={fields.length}
            variants={inputVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative"
          >
            <FaCommentDots className="absolute left-3 top-3.5 text-cyan-400" />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              placeholder="Tell us about your project..."
              className="w-full bg-[#23233a] border border-[#33324a] text-white pl-10 pr-4 py-3 rounded-lg focus:outline-none focus:ring-1 focus:ring-cyan-400 resize-none"
              required
            />
          </motion.div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            disabled={loading}
            className="w-full py-3 mt-4 bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-blue-500 hover:to-cyan-400 transition-all duration-300 rounded-lg font-semibold text-white shadow-md flex items-center justify-center gap-2"
          >
            <FaPaperPlane /> {loading ? "Sending..." : "Send Enquiry"}
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default EnquiryForm;
