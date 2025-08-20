import React from "react";
import { Helmet } from "react-helmet";
import CategorySection from "./CategorySection";

const templates = [
  { 
    name: "RealPro", 
    description: "A professional real estate website template. Showcases properties, agents, and listings efficiently.", 
    rating: "(4.5/5)⭐⭐⭐⭐⭐🌟", 
    appthumbnail: "appthumbnails/realestateimages/realpro.png",
    image: "/webthumbnails/realestateimages/realpro.png"
  },
  { 
    name: "HouseFinder", 
    description: "A property search website. Users can explore homes, filter listings, and schedule visits.", 
    rating: "(4.4/5)⭐⭐⭐⭐🌟", 
    appthumbnail: "appthumbnails/realestateimages/housefinder.png",
    image: "/webthumbnails/realestateimages/housefinder.png"
  },
  { 
    name: "PropX", 
    description: "A modern property website template. Highlights residential and commercial listings with photos and details.", 
    rating: "(4.5/5)⭐⭐⭐⭐⭐🌟", 
    appthumbnail: "appthumbnails/realestateimages/propx.png",
    image: "/webthumbnails/realestateimages/propx.png"
  },
  { 
    name: "BuildMate", 
    description: "A construction and real estate website. Manages projects, properties, and client communications.", 
    rating: "(4.4/5)⭐⭐⭐⭐🌟", 
    appthumbnail: "appthumbnails/realestateimages/buildmate.png",
    image: "/webthumbnails/realestateimages/buildmate.png"
  },
  { 
    name: "HomeStay", 
    description: "A rental and homestay website template. Facilitates booking, payments, and property management.", 
    rating: "(4.5/5)⭐⭐⭐⭐⭐🌟", 
    appthumbnail: "appthumbnails/realestateimages/homestay.png",
    image: "/webthumbnails/realestateimages/homestay.png"
  },
  { 
    name: "DreamHome", 
    description: "A property discovery website. Helps users find their perfect home with detailed listings.", 
    rating: "(4.4/5)⭐⭐⭐⭐🌟", 
    appthumbnail: "appthumbnails/realestateimages/dreamhome.png",
    image: "/webthumbnails/realestateimages/dreamhome.png"
  },
  { 
    name: "RealtyHub", 
    description: "A comprehensive real estate website. Features agents, properties, and property management tools.", 
    rating: "(4.5/5)⭐⭐⭐⭐⭐🌟", 
    appthumbnail: "appthumbnails/realestateimages/realtyhub.png",
    image: "/webthumbnails/realestateimages/realtyhub.png"
  },
  { 
    name: "SmartHouse", 
    description: "A smart real estate website template. Showcases properties with interactive maps and features.", 
    rating: "(4.4/5)⭐⭐⭐⭐🌟", 
    appthumbnail: "appthumbnails/realestateimages/smarthouse.png",
    image: "/webthumbnails/realestateimages/smarthouse.png"
  },
  { 
    name: "RentEase", 
    description: "A rental property website. Users can search, filter, and book rental homes easily.", 
    rating: "(4.5/5)⭐⭐⭐⭐⭐🌟", 
    appthumbnail: "appthumbnails/realestateimages/rentease.png",
    image: "/webthumbnails/realestateimages/rentease.png"
  },
  { 
    name: "PropDeal", 
    description: "A property marketplace website template. Facilitates buying, selling, and renting properties.", 
    rating: "(4.4/5)⭐⭐⭐⭐🌟", 
    appthumbnail: "appthumbnails/realestateimages/propdeal.png",
    image: "/webthumbnails/realestateimages/propdeal.png"
  },
  { 
    name: "VillaLife", 
    description: "A premium villa listing website. Highlights luxury properties with high-quality visuals.", 
    rating: "(4.5/5)⭐⭐⭐⭐⭐🌟", 
    appthumbnail: "appthumbnails/realestateimages/villalife.png",
    image: "/webthumbnails/realestateimages/villalife.png"
  },
  { 
    name: "FlatFinder", 
    description: "An apartment search website template. Helps users find flats, compare prices, and book visits.", 
    rating: "(4.4/5)⭐⭐⭐⭐🌟", 
    appthumbnail: "appthumbnails/realestateimages/flatfinder.png",
    image: "/webthumbnails/realestateimages/flatfinder.png"
  },
  { 
    name: "RealtyPlus", 
    description: "A modern real estate website. Features property listings, agent contacts, and virtual tours.", 
    rating: "(4.5/5)⭐⭐⭐⭐⭐🌟", 
    appthumbnail: "appthumbnails/realestateimages/realtyplus.png",
    image: "/webthumbnails/realestateimages/realtyplus.png"
  },
  { 
    name: "Constructo", 
    description: "A construction and property website. Manages projects, listings, and client communications.", 
    rating: "(4.4/5)⭐⭐⭐⭐🌟", 
    appthumbnail: "appthumbnails/realestateimages/constructo.png",
    image: "/webthumbnails/realestateimages/constructo.png"
  },
  { 
    name: "HouseMart", 
    description: "A property marketplace website. Enables buying, selling, and renting homes seamlessly.", 
    rating: "(4.5/5)⭐⭐⭐⭐⭐🌟", 
    appthumbnail: "appthumbnails/realestateimages/housemart.png",
    image: "/webthumbnails/realestateimages/housemart.png"
  },
  { 
    name: "InteriorX", 
    description: "An interior design and real estate website. Showcases property interiors and renovation ideas.", 
    rating: "(4.4/5)⭐⭐⭐⭐🌟", 
    appthumbnail: "appthumbnails/realestateimages/interiorx.png",
    image: "/webthumbnails/realestateimages/interiorx.png"
  },
  { 
    name: "SpaceFinder", 
    description: "A commercial and residential property website. Helps users discover available spaces and listings.", 
    rating: "(4.5/5)⭐⭐⭐⭐⭐🌟", 
    appthumbnail: "appthumbnails/realestateimages/spacefinder.png",
    image: "/webthumbnails/realestateimages/spacefinder.png"
  },
  { 
    name: "PropWorld", 
    description: "A global real estate website template. Features properties, agents, and market insights.", 
    rating: "(4.4/5)⭐⭐⭐⭐🌟", 
    appthumbnail: "appthumbnails/realestateimages/propworld.png",
    image: "/webthumbnails/realestateimages/propworld.png"
  },
  { 
    name: "BuildX", 
    description: "A construction and real estate website. Manages projects, properties, and client relationships.", 
    rating: "(4.5/5)⭐⭐⭐⭐⭐🌟", 
    appthumbnail: "appthumbnails/realestateimages/buildx.png",
    image: "/webthumbnails/realestateimages/buildx.png"
  },
  { 
    name: "PrimeRealty", 
    description: "A premium real estate website template. Showcases luxury properties and top agents professionally.", 
    rating: "(4.5/5)⭐⭐⭐⭐⭐🌟", 
    appthumbnail: "appthumbnails/realestateimages/primerealty.png",
    image: "/webthumbnails/realestateimages/primerealty.png"
  }
];

export default function RealEstateWebsites() {
  return (
    <>
      <Helmet>
        <title>Real Estate Website Templates | Property & Housing UI Kits 2025</title>
        <meta
          name="description"
          content="Explore Real Estate Website Templates for property listings, rentals, and housing websites. Modern UI kits for realtors, agencies & builders."
        />
        <meta
          name="keywords"
          content="Real estate website templates, property website UI, rental websites, housing website design, realtor websites, apartment search websites"
        />
        <meta property="og:title" content="Real Estate Website Templates 2025" />
        <meta
          property="og:description"
          content="Trending Real Estate Website Templates for property buying, renting, and housing platforms."
        />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="AppTemplateHub" />
        <meta name="author" content="AppTemplateHub Team" />
      </Helmet>

      <CategorySection
        category="Real Estate & Property Websites"
        templates={templates}
        color="from-teal-500 to-green-400"
      />
    </>
  );
}
