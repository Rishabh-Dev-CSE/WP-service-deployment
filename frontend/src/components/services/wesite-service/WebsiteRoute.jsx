import React, { useState } from "react";
import Navbar from "../../navbar/Navbar";
import Footer from "../../footer/Footer";
import ServicesPageSidebar from "../servicespage/ServicesPageSidebar";
import InnerServicesNavbar from "../services-nav/ServicesNavRoute";
import EcommerceWeb from "./EcommerceWeb";
import FoodWebsites from "./Foodweb";
import EventsWebsites from "./EventsWeb";
import CreativeWebsites from "./CreativeWeb";
import TravelWebsites from "./TravelWeb";

export default function WebsiteRoute() {
  const [activeService, setActiveService] = useState("e-commerce");

  // 🟢 Active category render karne ka function
  const renderActiveCategory = () => {
    switch (activeService) {
      case "e-commerce":
        return <EcommerceWeb activeService={activeService} />;
      case "food":
        return <FoodWebsites activeService={activeService} />;
      case "events":
        return <EventsWebsites activeService={activeService} />;
      case "travel":
        return <TravelWebsites activeService={activeService} />;
      case "creative":
        return <CreativeWebsites activeService={activeService} />;
      default:
        return <EcommerceWeb activeService={activeService} />;
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex min-h-screen bg-gradient-to-br from-[#0f1123] to-[#1e2150] text-white">
        <ServicesPageSidebar />
        {/* Main Scrollable Section */}
        <main
          className="flex-1 overflow-y-scroll"
          style={{ height: "100vh" }}
        >
          <div className="p-2 py-20 space-y-20">
            {/* Navbar */}
            <InnerServicesNavbar setActiveService={setActiveService} />

            {/* Sirf ek hi category show hogi */}
            {renderActiveCategory()}
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}
