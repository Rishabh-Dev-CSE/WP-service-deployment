import React, { useState } from "react";
import Navbar from "../../navbar/Navbar";
import Footer from "../../footer/Footer";
import ServicesPageSidebar from "../servicespage/ServicesPageSidebar";
import BusinessApps from "./BusinessApps";
import EcommerceApps from "./EcommerceApps";
import FoodApps from "./FoodApps";
import HealthcareApps from "./HealthcareApps";
import TravelApps from "./TravelApps";
import EducationApps from "./EducationApps";
import TechnologyApps from "./TechnologyApps";
import CreativeApps from "./CreativeApps";
import NonprofitApps from "./NonprofitApps";
import EventsApps from "./EventsApps";
import RealEstateApps from "./RealEstateApps";
import BlogsApps from "./BlogsApps";
import InnerServicesNavbar from "../services-nav/ServicesNavRoute";

export default function AppServiceRoute() {
  const [activeService, setActiveService] = useState("e-commerce");
  

  // 🟢 Active category render karne ka function
  const renderActiveCategory = () => {
    switch (activeService) {
      case "e-commerce":
        return <EcommerceApps activeService={activeService} />;
      case "food":
        return <FoodApps activeService={activeService} />;
      case "events":
        return <EventsApps activeService={activeService} />;
      case "travel":
        return <TravelApps activeService={activeService} />;
      case "creative":
        return <CreativeApps activeService={activeService} />;
      case "blogs-&-writing":
        return <BlogsApps activeService={activeService} />;
      case "real-estate":
        return <RealEstateApps activeService={activeService} />;
      case "healthcare":
        return <HealthcareApps activeService={activeService} />;
      case "education":
        return <EducationApps activeService={activeService} />;
      case "business":
        return <BusinessApps activeService={activeService} />;
      case "technology":
        return <TechnologyApps activeService={activeService} />;
      case "nonprofit":
        return <NonprofitApps activeService={activeService} />;
      default:
        return <BlogsApps activeService={activeService} />;
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
