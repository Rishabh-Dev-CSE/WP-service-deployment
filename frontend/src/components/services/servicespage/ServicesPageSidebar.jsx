import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const services = [
  {
    name: "Web Design",
    path: "/services/website-development-theme"
  },
  {
    name: "App Design",
    path: "/services/app-service/app-theme"
  },
  {
    name: "SEO",
    path: "/services/seo-service"
  },
  {
    name: "Social Media",
    path: "/services/social-media-service"
  },
  {
    name: "Digital Marketing",
    path: "/services/digital-marketing"
  }
];

export default function ServicesPageSidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // Get current URL path

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        className="md:hidden fixed top-4 left-2 top-12 z-50 text-white bg-[#1e1f3b] p-2 rounded mt-13"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Sidebar"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 min-h-screen w-50 bg-[#1e1f3b] p-0  pt-[10vmin] border-r border-gray-700 z-40 transition-transform duration-300 ease-in-out transform
          ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 md:static md:block`}
      >
        <ul className="space-y-4 ms-10 lg:mt-[-20px] mt-25">
          <h2
            className="text-xl font-bold mt-10 bg-gradient-to-r from-red-400 via-blue-500 to-pink-500 bg-clip-text text-transparent animate-fade-in-slide"
          >
            Our Services
          </h2>

          {services.map((service, index) => (
            <li key={index}>
              <Link
                to={service.path}
                className={`block transition-colors duration-200 ${location.pathname === service.path
                    ? "text-cyan-400 font-semibold"
                    : "text-white hover:text-cyan-300"
                  }`}
                onClick={() => setIsOpen(false)}
              >
                {service.name}
              </Link>
            </li>
          ))}
        </ul>
      </aside>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
