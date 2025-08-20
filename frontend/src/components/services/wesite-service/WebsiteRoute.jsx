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
import RealEstateWebsites from "./RealEstateWeb";
import BlogsWebsites from "./BlogsWeb";
import HealthcareWebsites from "./HealthcareWeb";
import EducationWebsites from "./EducationWeb";
import TechnologyWebsite from "./TechnologyWeb";
import NonprofitWebsite from "./NonprofitWebsite";
import BusinessWebsites from "./BusinessWeb";

export default function WebsiteRoute() {
  const [activeService, setActiveService] = useState("e-commerce");

  // Active category render
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
      case "real-estate":
        return <RealEstateWebsites activeService={activeService} />;
      case "blogs-&-writing":
        return <BlogsWebsites activeService={activeService} />;
      case "healthcare":
        return <HealthcareWebsites activeService={activeService} />;
      case "education":
        return <EducationWebsites activeService={activeService} />;
      case "technology":
        return <TechnologyWebsite activeService={activeService} />;
      case "nonprofit":
        return <NonprofitWebsite activeService={activeService} />;
        case "business":
          return <BusinessWebsites activeService={activeService} />
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
