import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Optional icon set

const services = [
  {
    name: "Web Design",
    path: "/services/website-development-theame"
  },
  {
    name: "App Design",
    path: "/services/app-design"
  },
  {
    name: "SEO",
    path: "/services/seo-service"
  },
  {
    name: "Social Media",
    path: "/services/social-media"
  },
  {
    name: "Digital Marketing",
    path: "/services/digital-marketing"
  }
];

export default function ServicesPageSidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        className="md:hidden fixed top-4 left-2 z-50 text-white bg-[#1e1f3b] p-2 rounded mt-13"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Sidebar"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-[#1e1f3b] p-6 pt-[10vmin] border-r border-gray-700 z-40 transition-transform duration-300 ease-in-out transform
          ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 md:static md:block`}
      >
        <ul className="space-y-4 ms-10">
        <h2 className="text-xl font-bold mt-10 text-cyan-400">Our Services</h2>
          {services.map((service, index) => (
            <li key={index}>
              <Link
                to={service.path}
                className="hover:text-cyan-300 text-white transition-colors duration-200 block"
                onClick={() => setIsOpen(false)} // Close on link click (mobile)
              >
                {service.name}
              </Link>
            </li>
          ))}
        </ul>
      </aside>

      {/* Overlay (optional for mobile UX) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
