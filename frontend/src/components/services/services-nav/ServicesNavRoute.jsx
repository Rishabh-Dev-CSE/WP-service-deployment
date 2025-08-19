import React, { useEffect } from "react";

const services = [
  { name: "E-Commerce", id: "e-commerce" },
  { name: "Education", id: "education" },
  { name: "Travel", id: "travel" },
  { name: "Real Estate", id: "real-estate" },
  { name: "Creative", id: "creative" },
  { name: "Blogs & Writing", id: "blogs-&-writing" },
  { name: "Events", id: "events" },
  { name: "Healthcare", id: "healthcare" },
  { name: "Food", id: "food" },
  { name: "Business", id: "business" },
  { name: "Technology", id: "technology" },
  { name: "Nonprofit", id: "nonprofit" },
];

export default function InnerServicesNavbar({ activeService, setActiveService }) {
  const handleClick = (id) => {
    setActiveService(id);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // 👇 Scroll detection using IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveService(entry.target.id);
          }
        });
      },
      { threshold: 0.5 } // section ka 50% visible hote hi active hoga
    );

    services.forEach((service) => {
      const section = document.getElementById(service.id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, [setActiveService]);

  return (
    <div className="w-full bg-[#1e1f3b] shadow-md sticky top-[50px] z-50">
      <nav className="w-full overflow-x-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800">
        <ul className="flex gap-5 lg:ms-110 md:gap-10 px-6 py-4 md:justify-center text-lg font-semibold whitespace-nowrap">
          {services.map((service) => (
            <li key={service.id} className="flex-shrink-0">
              <button
                onClick={() => handleClick(service.id)}
                aria-current={activeService === service.id ? "page" : undefined}
                className={`relative block bg-gradient-to-r from-red-400 via-blue-500 to-pink-500 bg-clip-text text-transparent transition-all duration-300 hover:scale-105 hover:text-cyan-300
                  ${activeService === service.id ? "underline underline-offset-4 decoration-cyan-400" : ""}`}
              >
                {service.name}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
