import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";

const userGrowthData = [
  { month: "Jan", users: 400 },
  { month: "Feb", users: 600 },
  { month: "Mar", users: 800 },
  { month: "Apr", users: 1200 },
  { month: "May", users: 1600 },
];

const salesData = [
  { service: "Web", sales: 120 },
  { service: "App", sales: 200 },
  { service: "Social", sales: 150 },
  { service: "Other", sales: 90 },
];

const Dashboard = () => {
  return (
    <div className="min-h-screen p-6 bg-gradient-to-b from-[#0f0c29] via-[#302b63] to-[#24243e] text-white">
      {/* Title */}
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

      {/* Top Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 shadow-lg">
          <h2 className="text-lg font-semibold">Total Users</h2>
          <p className="text-2xl font-bold mt-2">4,500</p>
        </div>
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 shadow-lg">
          <h2 className="text-lg font-semibold">Total Sales</h2>
          <p className="text-2xl font-bold mt-2">$25,000</p>
        </div>
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 shadow-lg">
          <h2 className="text-lg font-semibold">Active Clients</h2>
          <p className="text-2xl font-bold mt-2">320</p>
        </div>
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 shadow-lg">
          <h2 className="text-lg font-semibold">Notifications</h2>
          <p className="text-2xl font-bold mt-2">12</p>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Line Chart */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 shadow-lg">
          <h2 className="text-lg font-semibold mb-4">User Growth</h2>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={userGrowthData}>
              <XAxis dataKey="month" stroke="#fff" />
              <YAxis stroke="#fff" />
              <Tooltip />
              <Line type="monotone" dataKey="users" stroke="#00c6ff" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Bar Chart */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 shadow-lg">
          <h2 className="text-lg font-semibold mb-4">Sales by Service</h2>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={salesData}>
              <XAxis dataKey="service" stroke="#fff" />
              <YAxis stroke="#fff" />
              <Tooltip />
              <Bar dataKey="sales" fill="#ff6a00" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 shadow-lg">
        <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
        <ul className="space-y-3">
          <li className="border-b border-white/20 pb-2">🚀 New client registered: <b>Acme Corp</b></li>
          <li className="border-b border-white/20 pb-2">💳 Payment received: <b>$1,200</b></li>
          <li className="border-b border-white/20 pb-2">🛠️ Service deployed: <b>Website Hosting</b></li>
          <li>📩 Support ticket resolved: <b>#4521</b></li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
