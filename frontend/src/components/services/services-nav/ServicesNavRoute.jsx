import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Optional icons

const services = [
  { name: "e-commerce", path: "/services/website-development-theame" },
  { name: "Organic", path: "/services/app-design" },
  { name: "Marketing", path: "/services/seo-service" },
  { name: "Corporate", path: "/services/social-media" },
  { name: "Digital Marketing", path: "/services/digital-marketing" },
];

export default function ServicesTheamePageNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Toggle Button (Mobile only) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed top-4 left-4 z-50 p-2 rounded bg-[#1e1f3b] text-white shadow-lg"
        aria-label="Toggle sidebar"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <nav
        className={`fixed top-0 left-0 h-0 w-full   bg-[#1e1f3b] p-10 pt-[5vh] border-r border-gray-700 z-40 transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"} 
          md:translate-x-0 md:static md:block`}
          style={{
            position:'sticky',
          }}
          
      >
        <div className="ms-0 ">
          {/* <h2 className="text-xl font-bold mb-6 text-cyan-400">Our Services</h2> */}
          <ul className="space-y-4 flex gap-10 bg-gradient-to-r from-red-400 via-blue-500 to-pink-500 bg-clip-text ">
             {services.map((service, index) => (
              <li key={index}>
                <Link
                  to={service.path}
                  onClick={() => setIsOpen(false)}
                  className="hover:text-cyan-300 transition-colors duration-200 block"
                >
                  {service.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Overlay (for mobile) */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-40 z-30 md:hidden"
        />
      )}
    </>
  );
}
