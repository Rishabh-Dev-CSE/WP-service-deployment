import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, XCircle, AlertCircle } from "lucide-react";

const cardVariants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    y: 50,
    rotate: -10,
  },
  show: (i) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    rotate: 0,
    transition: {
      delay: 0.3 + i * 0.2,
      type: "spring",
      stiffness: 80,
      damping: 12,
    },
  }),
};

export default function DailyOrderStatus() {
  // State for dynamic counts
  const [approved, setApproved] = useState(20);
  const [canceled, setCanceled] = useState(5);
  const [rejected, setRejected] = useState(15);

  useEffect(() => {
    // For demo, we use small intervals (seconds instead of hours)
    // Replace 5000 with 3600000 for real hours (1 hour = 3600000ms)

    const approvedInterval = setInterval(() => {
      setApproved((prev) => prev + 1);
    }, 10000); // 5 seconds simulating 1 hour

    const canceledInterval = setInterval(() => {
      setCanceled((prev) => prev + 1);
    }, 100000); // 10 seconds simulating 2 hours

    const rejectedInterval = setInterval(() => {
      setRejected((prev) => prev + 1);
    }, 20000); // 20 seconds simulating 4 hours

    // Cleanup
    return () => {
      clearInterval(approvedInterval);
      clearInterval(canceledInterval);
      clearInterval(rejectedInterval);
    };
  }, []);

  const orderStats = [
    {
      icon: <CheckCircle size={42} strokeWidth={1.6} />,
      title: "Approved",
      count: approved,
      description: "Orders successfully processed",
      bg: "bg-[#1e1b3a]/70 backdrop-blur-lg",
      hoverBg: "hover:bg-[#2c274d]/80",
      border: "border-cyan-500",
      accent: "text-cyan-400",
    },
    {
      icon: <XCircle size={42} strokeWidth={1.6} />,
      title: "Canceled",
      count: canceled,
      description: "Orders canceled by users",
      bg: "bg-[#1e1b3a]/70 backdrop-blur-lg",
      hoverBg: "hover:bg-[#2c274d]/80",
      border: "border-rose-500",
      accent: "text-rose-400",
    },
    {
      icon: <AlertCircle size={42} strokeWidth={1.6} />,
      title: "Rejected",
      count: rejected,
      description: "Orders declined due to issues",
      bg: "bg-[#1e1b3a]/70 backdrop-blur-lg",
      hoverBg: "hover:bg-[#2c274d]/80",
      border: "border-amber-500",
      accent: "text-amber-400",
    },
  ];

  return (
    <section
      id="orders"
      className="w-full py-20 bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl font-extrabold text-center mb-4"
        >
          Daily <span className="text-cyan-400">Orders Status</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-center text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto mb-12"
        >
          Monitor and track the real-time status of your orders with insightful breakdown.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {orderStats.map((stat, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={cardVariants}
              className={`relative p-6 rounded-3xl ${stat.bg} ${stat.hoverBg} shadow-xl border ${stat.border} cursor-pointer transition-all duration-300 overflow-hidden group`}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileHover={{ opacity: 0.2, scale: 1.5 }}
                transition={{ duration: 0.5 }}
                className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${stat.accent} blur-2xl opacity-0 group-hover:opacity-20 pointer-events-none`}
              />

              <div className="relative z-10">
                <div className={`mb-4 ${stat.accent}`}>{stat.icon}</div>
                <h3 className="text-2xl font-semibold mb-2 text-white">
                  {stat.title}
                </h3>
                <p className={`text-5xl font-extrabold mb-3 ${stat.accent}`}>
                  {stat.count}
                </p>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {stat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
