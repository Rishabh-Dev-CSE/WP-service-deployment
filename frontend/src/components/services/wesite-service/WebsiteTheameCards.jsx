import React from "react";
import ServicesPageSidebar from "../servicespage/ServicesPageSidebar";

const services = [
  {
    title: "Business Website",
    rating: "5.0",
    description: "Responsive modern websites",
    image: "/theameImages/t1.jpg"
  },
  {
    title: "Flask Web",
    rating: "4.8", description:
      "Mobile-first app UX/UI",
    image: "/theameImages/t2.jpg"
  },
  {
    title: "SEO",
    rating: "4.9",
    description: "Rank higher on search engines",
    image: "/theameImages/t3.jpg"
  },
  {
    title: "Social Media",
    rating: "4.7", description:
      "Engagement & content", image:
      "/theameImages/t3.jpg"
  },
  // Repeated items shortened for brevity
  // ...Array(9).fill({
  //   title: "Digital Marketing",
  //   rating: "4.8",
  //   description: "Ads, Funnels, Email",
  //   image: "/theameImages/t1.jpg"
  // }),
];

export default function WebsiteTheameCards() {
  return (
    <div className="flex min-h-screen mt-10 bg-gradient-to-br from-[#0f1123] to-[#1e2150] text-white">
      <ServicesPageSidebar />

      <main
        className="flex-1 p-4 sm:p-6 md:p-10 overflow-y-auto h-screen"
      >
        <h1 className="text-2xl sm:text-3xl font-bold text-cyan-300 mb-6 sm:mb-8">
          Explore Services
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#2a2d55] p-4 sm:p-6 rounded-2xl shadow-lg hover:scale-[1.03] transition-transform duration-300"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <div className="text-lg sm:text-xl font-semibold mb-1">{service.title}</div>
              <div className="text-sm text-gray-300 mb-2">
                ({service.rating}) ⭐⭐⭐⭐⭐
              </div>
              <div className="text-gray-400 text-sm">{service.description}</div>
              <button className="mt-4 bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-1 rounded-full text-sm">
                Preview
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
