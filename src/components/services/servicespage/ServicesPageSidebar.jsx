import React from "react";
import { Link } from "react-router-dom";

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
  return (
    <aside className="w-64 bg-[#1e1f3b] p-6 pt-[10vmin] border-r border-gray-700">
      <h2 className="text-xl font-bold mb-[3vmin] text-cyan-400">Our Services</h2>
      <ul className="space-y-4">
        {services.map((service, index) => (
          <li key={index}>
            <Link
              to={service.path}
              className="hover:text-cyan-300 text-white cursor-pointer transition-colors duration-200"
            >
              {service.name}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
