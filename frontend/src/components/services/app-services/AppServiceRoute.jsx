import React from "react";
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


export default function AppServiceRoute() {
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
                        <EcommerceApps />
                        <FoodApps />
                        <EventsApps />
                        <TravelApps />
                        <CreativeApps />
                        <BlogsApps />
                        <RealEstateApps />
                        <HealthcareApps />
                        <EducationApps />
                        <BusinessApps />
                        <TechnologyApps />
                        <NonprofitApps />
                    </div>
                </main>
            </div>
            <Footer />
        </>
    );
}
