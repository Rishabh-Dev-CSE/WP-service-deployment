import React from "react";
import { Helmet } from "react-helmet";
import CategorySection from "./CategorySection";

const templates = [
  { name: "RealPro", description: "A professional real estate app template. Showcases properties, agents, and listings efficiently.", rating: "(4.5/5)⭐⭐⭐⭐⭐🌟", appthumbnail: "appthumbnails/realestateimages/realpro.png" },
  { name: "HouseFinder", description: "A property search app. Users can explore homes, filter listings, and schedule visits.", rating: "(4.4/5)⭐⭐⭐⭐🌟", appthumbnail: "appthumbnails/realestateimages/housefinder.png" },
  { name: "PropX", description: "A modern property app template. Highlights residential and commercial listings with photos and details.", rating: "(4.5/5)⭐⭐⭐⭐⭐🌟", appthumbnail: "appthumbnails/realestateimages/propx.png" },
  { name: "BuildMate", description: "A construction and real estate app. Manages projects, properties, and client communications.", rating: "(4.4/5)⭐⭐⭐⭐🌟", appthumbnail: "appthumbnails/realestateimages/buildmate.png" },
  { name: "HomeStay", description: "A rental and homestay app template. Facilitates booking, payments, and property management.", rating: "(4.5/5)⭐⭐⭐⭐⭐🌟", appthumbnail: "appthumbnails/realestateimages/homestay.png" },
  { name: "DreamHome", description: "A property discovery app. Helps users find their perfect home with detailed listings.", rating: "(4.4/5)⭐⭐⭐⭐🌟", appthumbnail: "appthumbnails/realestateimages/dreamhome.png" },
  { name: "RealtyHub", description: "A comprehensive real estate app. Features agents, properties, and property management tools.", rating: "(4.5/5)⭐⭐⭐⭐⭐🌟", appthumbnail: "appthumbnails/realestateimages/realtyhub.png" },
  { name: "SmartHouse", description: "A smart real estate app template. Showcases properties with interactive maps and features.", rating: "(4.4/5)⭐⭐⭐⭐🌟", appthumbnail: "appthumbnails/realestateimages/smarthouse.png" },
  { name: "RentEase", description: "A rental property app. Users can search, filter, and book rental homes easily.", rating: "(4.5/5)⭐⭐⭐⭐⭐🌟", appthumbnail: "appthumbnails/realestateimages/rentease.png" },
  { name: "PropDeal", description: "A property marketplace app template. Facilitates buying, selling, and renting properties.", rating: "(4.4/5)⭐⭐⭐⭐🌟", appthumbnail: "appthumbnails/realestateimages/propdeal.png" },
  { name: "VillaLife", description: "A premium villa listing app. Highlights luxury properties with high-quality visuals.", rating: "(4.5/5)⭐⭐⭐⭐⭐🌟", appthumbnail: "appthumbnails/realestateimages/villalife.png" },
  { name: "FlatFinder", description: "An apartment search app template. Helps users find flats, compare prices, and book visits.", rating: "(4.4/5)⭐⭐⭐⭐🌟", appthumbnail: "appthumbnails/realestateimages/flatfinder.png" },
  { name: "RealtyPlus", description: "A modern real estate app. Features property listings, agent contacts, and virtual tours.", rating: "(4.5/5)⭐⭐⭐⭐⭐🌟", appthumbnail: "appthumbnails/realestateimages/realtyplus.png" },
  { name: "Constructo", description: "A construction and property app. Manages projects, listings, and client communications.", rating: "(4.4/5)⭐⭐⭐⭐🌟", appthumbnail: "appthumbnails/realestateimages/constructo.png" },
  { name: "HouseMart", description: "A property marketplace app. Enables buying, selling, and renting homes seamlessly.", rating: "(4.5/5)⭐⭐⭐⭐⭐🌟", appthumbnail: "appthumbnails/realestateimages/housemart.png" },
  { name: "InteriorX", description: "An interior design and real estate app. Showcases property interiors and renovation ideas.", rating: "(4.4/5)⭐⭐⭐⭐🌟", appthumbnail: "appthumbnails/realestateimages/interiorx.png" },
  { name: "SpaceFinder", description: "A commercial and residential property app. Helps users discover available spaces and listings.", rating: "(4.5/5)⭐⭐⭐⭐⭐🌟", appthumbnail: "appthumbnails/realestateimages/spacefinder.png" },
  { name: "PropWorld", description: "A global real estate app template. Features properties, agents, and market insights.", rating: "(4.4/5)⭐⭐⭐⭐🌟", appthumbnail: "appthumbnails/realestateimages/propworld.png" },
  { name: "BuildX", description: "A construction and real estate platform. Manages projects, properties, and client relationships.", rating: "(4.5/5)⭐⭐⭐⭐⭐🌟", appthumbnail: "appthumbnails/realestateimages/buildx.png" },
  { name: "PrimeRealty", description: "A premium real estate app template. Showcases luxury properties and top agents professionally.", rating: "(4.5/5)⭐⭐⭐⭐⭐🌟", appthumbnail: "appthumbnails/realestateimages/primerealty.png" }
];


export default function RealEstateApps() {
  return (
    <>
      <Helmet>
        <title>Real Estate App Templates | Property & Housing UI Kits 2025</title>
        <meta
          name="description"
          content="Explore Real Estate App Templates for property listings, rentals, and housing apps. Modern UI kits for realtors, agencies & builders."
        />
        <meta
          name="keywords"
          content="Real estate app templates, property app UI, rental apps, housing app design, realtor apps, apartment search apps"
        />
        <meta property="og:title" content="Real Estate App Templates 2025" />
        <meta
          property="og:description"
          content="Trending Real Estate App Templates for property buying, renting, and housing platforms."
        />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="AppTemplateHub" />
        <meta name="author" content="AppTemplateHub Team" />
      </Helmet>

      <CategorySection
        category="Real Estate & Property Apps"
        templates={templates}
        color="from-teal-500 to-green-400"
      />
    </>
  );
}
