import { useState } from "react";
import { Bell, Search, ChevronDown, LogOut, Settings, LayoutDashboard, Users, BarChart, FileText } from "lucide-react";

export default function AdminLayout() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="h-screen flex flex-col">
      {/* Header */}
      <header className="w-full bg-gradient-to-b from-[#0f0c29] via-[#302b63] to-[#24243e] shadow-md">
        <div className="flex items-center justify-between px-6 py-3">
          
          {/* Left - Logo */}
          <div className="flex items-center space-x-2 cursor-pointer">
            <img
              src="/logo/company-logo.png"
              alt="Velorax Logo"
              className="h-8 w-8"
            />
            <span className="text-white text-lg font-semibold tracking-wide">
              Velorax Admin
            </span>
          </div>

          {/* Center - Search Bar */}
          <div className="flex-1 max-w-md mx-6 hidden md:flex">
            <div className="relative w-full">
              <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Search..."
                className="w-full pl-10 pr-3 py-2 rounded-xl bg-[#1f1f2e] text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Right - Notifications + Profile */}
          <div className="flex items-center space-x-4 text-gray-200">
            {/* Notifications */}
            <button className="relative hover:text-white">
              <Bell size={20} />
              <span className="absolute -top-1 -right-1 bg-red-500 text-[10px] text-white rounded-full px-1">
                3
              </span>
            </button>

            {/* Profile Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="flex items-center space-x-2 hover:text-white"
              >
                <img
                  src="/logo/company-logo.png"
                  alt="Profile"
                  className="w-8 h-8 rounded-full border border-gray-600"
                />
                <ChevronDown size={16} />
              </button>

              {isProfileOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-[#1f1f2e] rounded-lg shadow-lg border border-gray-700">
                  {/* When click on Settings -> Open Sidebar */}
                  <button
                    onClick={() => {
                      setIsSidebarOpen(true);
                      setIsProfileOpen(false);
                    }}
                    className="flex w-full items-center px-4 py-2 text-sm text-gray-200 hover:bg-[#302b63]"
                  >
                    <Settings size={16} className="mr-2" /> Settings
                  </button>
                  <a
                    href="#"
                    className="flex items-center px-4 py-2 text-sm text-red-400 hover:bg-[#302b63]"
                  >
                    <LogOut size={16} className="mr-2" /> Logout
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Layout with Sidebar + Content */}
      <div className="flex flex-1 bg-[#1a1a2e] text-gray-200">
        {/* Sidebar (Slide-in from Left) */}
        <div
          className={`fixed top-0 left-0 h-full w-64 bg-gradient-to-b from-[#0f0c29] via-[#302b63] to-[#24243e] shadow-lg transform transition-transform duration-300 z-50 ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between px-4 py-4 border-b border-gray-700">
            <h2 className="text-white font-semibold">Settings</h2>
            <button onClick={() => setIsSidebarOpen(false)} className="text-gray-400 hover:text-white">
              ✕
            </button>
          </div>
          <nav className="p-4 space-y-2">
            <a href="#" className="flex items-center p-2 rounded-lg hover:bg-[#302b63]">
              <LayoutDashboard size={18} className="mr-2" /> Dashboard
            </a>
            <a href="/clients-settings" className="flex items-center p-2 rounded-lg hover:bg-[#302b63]">
              <Users size={18} className="mr-2" /> Users & clients settings
            </a>
            <a href="#" className="flex items-center p-2 rounded-lg hover:bg-[#302b63]">
              <FileText size={18} className="mr-2" /> Content
            </a>
            <a href="#" className="flex items-center p-2 rounded-lg hover:bg-[#302b63]">
              <BarChart size={18} className="mr-2" /> Analytics
            </a>
          </nav>
        </div>

        {/* Main Content */}
        <main className="flex-1 p-6 overflow-y-auto">
          <h1 className="text-2xl font-semibold text-white">Welcome to Velorax Admin</h1>
          <p className="text-gray-400 mt-2">Select options from the sidebar to get started.</p>
        </main>
      </div>
    </div>
  );
}
