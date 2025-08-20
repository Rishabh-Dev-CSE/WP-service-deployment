import React from "react";
import Navbar from "../../navbar/Navbar";
import Footer from "../../footer/Footer";
import ServicesPageSidebar from "../servicespage/ServicesPageSidebar";
import HeroSection from "./socialMediaIntro";
import SocialMediaServices from "./SocialMediaServices";
import SocialProof from "./SocialProof";
import CaseStudies from "./CaseStudies";

export default function SocialMediaRoute() {
  return (
    <>
      <Navbar />

      <div className="flex min-h-screen bg-gradient-to-br from-[#0f1123] to-[#1e2150] text-white">
        {/* Sidebar */}
        <ServicesPageSidebar />

        {/* Main Scrollable Section */}
        <main
          className="flex-1 overflow-y-scroll"
          style={{ height: "100vh" }}
        >

          <div className=" space-y-20">
        {/* <ServicesTheamePageNavbar /> */}
            <HeroSection />
            <SocialMediaServices />
            <SocialProof />
            <CaseStudies />
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}
