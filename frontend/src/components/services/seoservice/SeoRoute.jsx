import React from "react";
import Navbar from "../../navbar/Navbar";
import Footer from "../../footer/Footer";
import ServicesPageSidebar from "../servicespage/ServicesPageSidebar";
import KeywordStrategy from "./KeywordStrategy";
import TechnicalSEO from "./TechnicalSEO";
import AISnippetOptimization from "./AISnippetOptimization";
import EEATAuthority from "./EEATAuthority";
import CompetitiveAnalysis from "./CompetitiveAnalysis";
import LinkBuilding from "./LinkBuilding";

export default function SeoRoute() {
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
          <div className="p-10 space-y-20">
            <KeywordStrategy />
            <TechnicalSEO />
            <AISnippetOptimization />
            <EEATAuthority />
            <CompetitiveAnalysis />
            <LinkBuilding />
          </div>
        </main>
      </div>

      <Footer />
    </>
  );
}
