import React from "react";
import ServicesPageSidebar from "../servicespage/ServicesPageSidebar";
const services = [
  {
    title: "Business Website",
    rating: "5.0",
    description: "Responsive modern websites",
    image:'/theameImages/t1.jpg'
  },
  {
    title: "Flask Web ",
    rating: "4.8",
    description: "Mobile-first app UX/UI",
    image:'/theameImages/t2.jpg'
  },
  {
    title: "SEO",
    rating: "4.9",
    description: "Rank higher on search engines",
    image:'/theameImages/t3.jpg'
  },
  {
    title: "Social Media",
    rating: "4.7",
    description: "Engagement & content",
    image:'/theameImages/t4.jpg'
  },
  {
    title: "Digital Marketing",
    rating: "4.8",
    description: "Ads, Funnels, Email",
    image:'/theameImages/t1.jpg'
  }
];

export default function WebsiteTheameCards() {
  return (
    <div className="flex min-h-screen  bg-gradient-to-br from-[#0f1123] to-[#1e2150] text-white">
      <ServicesPageSidebar />

      <main className="flex-1 pt-30 p-10">
        <h1 className="text-3xl font-bold text-cyan-300 mb-8">Explore Services</h1>
        <div className="grid grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#2a2d55] p-6 rounded-2xl shadow-lg hover:scale-105 transition-all duration-300"
            >
              <div> <img src={service.image} alt="" srcset="" height={200} width={100} /> </div>
              <div className="text-xl font-semibold text-white mb-2">{service.title}</div>
              <div className="text-sm text-gray-300 mb-2"> ({service.rating})  ⭐⭐⭐⭐⭐</div>
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
