import React from "react";
import { Helmet } from "react-helmet";
import CategorySection from "./CategorySection";

const templates = [
  { 
    name: "TravelMate", 
    description: "A complete travel planning app template. Helps users book trips, plan itineraries, and explore destinations.", 
    rating: '(4.6/5)⭐⭐⭐⭐⭐🌟', 
    appthumbnail: "/appthumbnails/healthimages/travelmate.png" 
  }, 
  { 
    name: "FlyAway", 
    description: "Designed for airline bookings and flight management. Smooth interface for searching, booking, and check-ins.", 
    rating: '(4.4/5)⭐⭐⭐⭐🌟', 
    appthumbnail: "/appthumbnails/healthimages/flyaway.png" 
  },
  { 
    name: "GlobeTrek", 
    description: "A travel discovery app for adventure seekers. Showcases destinations, activities, and travel guides.", 
    rating: '(4.5/5)⭐⭐⭐⭐⭐🌟', 
    appthumbnail: "/appthumbnails/healthimages/globetrek.png" 
  }, 
  { 
    name: "Wanderlust", 
    description: "A stylish travel journal and booking app. Perfect for tourists and travel bloggers.", 
    rating: '(4.3/5)⭐⭐⭐⭐🌟', 
    appthumbnail: "/appthumbnails/healthimages/wanderlust.png" 
  },
  { 
    name: "TripPlanner", 
    description: "A detailed itinerary management app. Users can organize schedules, hotels, and activities effortlessly.", 
    rating: '(4.2/5)⭐⭐⭐⭐🌟', 
    appthumbnail: "/appthumbnails/healthimages/tripplanner.png" 
  }, 
  { 
    name: "HolidayHub", 
    description: "A complete vacation booking platform. Covers hotels, resorts, and holiday packages.", 
    rating: '(4.6/5)⭐⭐⭐⭐⭐🌟', 
    appthumbnail: "/appthumbnails/healthimages/holidayhub.png" 
  },
  { 
    name: "SkyTravel", 
    description: "An airline and flight-focused template. Provides booking, check-in, and real-time flight updates.", 
    rating: '(4.4/5)⭐⭐⭐⭐🌟', 
    appthumbnail: "/appthumbnails/healthimages/skytravel.png" 
  }, 
  { 
    name: "GoAdventure", 
    description: "A travel app for adventure trips and experiences. Includes activities, bookings, and ratings.", 
    rating: '(4.5/5)⭐⭐⭐⭐⭐🌟', 
    appthumbnail: "/appthumbnails/healthimages/goadventure.png" 
  },
  { 
    name: "StayBook", 
    description: "A hotel and accommodation booking app template. Easy-to-use search, booking, and reviews system.", 
    rating: '(4.3/5)⭐⭐⭐⭐🌟', 
    appthumbnail: "/appthumbnails/healthimages/staybook.png" 
  }, 
  { 
    name: "RoomFinder", 
    description: "Designed for short-term rentals and homestays. Smooth UI for browsing rooms and booking instantly.", 
    rating: '(4.2/5)⭐⭐⭐⭐🌟', 
    appthumbnail: "/appthumbnails/healthimages/roomfinder.png" 
  },
  { 
    name: "TravelX", 
    description: "A travel marketplace app connecting travelers to hotels, tours, and guides worldwide.", 
    rating: '(4.5/5)⭐⭐⭐⭐⭐🌟', 
    appthumbnail: "/appthumbnails/healthimages/travelx.png" 
  },
  { 
    name: "ExploreNow", 
    description: "A tourism-focused app template with attractions, guides, and travel tips.", 
    rating: '(4.4/5)⭐⭐⭐⭐🌟', 
    appthumbnail: "/appthumbnails/healthimages/explorenow.png" 
  },
  { 
    name: "JetSet", 
    description: "Luxury travel app template for premium users. Highlights exclusive trips, hotels, and experiences.", 
    rating: '(4.7/5)⭐⭐⭐⭐⭐🌟', 
    appthumbnail: "/appthumbnails/healthimages/jetset.png" 
  },
  { 
    name: "TourEase", 
    description: "An easy-to-use tour booking app. Covers packages, day trips, and group adventures.", 
    rating: '(4.3/5)⭐⭐⭐⭐🌟', 
    appthumbnail: "/appthumbnails/healthimages/tourease.png" 
  },
  { 
    name: "ResortLife", 
    description: "A resort-focused app template. Showcases amenities, activities, and booking options.", 
    rating: '(4.5/5)⭐⭐⭐⭐⭐🌟', 
    appthumbnail: "/appthumbnails/healthimages/resortlife.png" 
  },
  { 
    name: "RoadTrip", 
    description: "A navigation and road-trip planning app. Helps users map routes, stops, and nearby attractions.", 
    rating: '(4.2/5)⭐⭐⭐⭐🌟', 
    appthumbnail: "/appthumbnails/healthimages/roadtrip.png" 
  },
  { 
    name: "CruiseTime", 
    description: "A cruise booking and management app. Includes cabin selection, itineraries, and on-board services.", 
    rating: '(4.4/5)⭐⭐⭐⭐🌟', 
    appthumbnail: "/appthumbnails/healthimages/cruisetime.png" 
  },
  { 
    name: "AdventurePro", 
    description: "Designed for adventure tour operators. Booking, tracking, and experience management in one app.", 
    rating: '(4.5/5)⭐⭐⭐⭐⭐🌟', 
    appthumbnail: "/appthumbnails/healthimages/adventurepro.png" 
  },
  { 
    name: "BeachStay", 
    description: "A coastal stay booking app template. Highlights beach resorts, packages, and activities.", 
    rating: '(4.3/5)⭐⭐⭐⭐🌟', 
    appthumbnail: "/appthumbnails/healthimages/beachstay.png" 
  },
  { 
    name: "HostelWorld", 
    description: "A hostel and budget stay app. Enables quick bookings, reviews, and community engagement.", 
    rating: '(4.2/5)⭐⭐⭐⭐🌟', 
    appthumbnail: "/appthumbnails/healthimages/hostelworld.png" 
  }
];

export default function TravelApps() {
  return (
    <>
      <Helmet>
        <title>Travel App Templates | Flight, Hotel & Tourism UI Kits 2025</title>
        <meta
          name="description"
          content="Download Travel App Templates for flight booking, hotels, tourism, and adventure trips. Modern UI kits for travel startups & agencies."
        />
        <meta
          name="keywords"
          content="Travel app templates, flight booking app, hotel booking UI, tourism apps, ride sharing, adventure app UI kit, wanderlust apps"
        />
        <meta property="og:title" content="Travel App Templates 2025" />
        <meta
          property="og:description"
          content="Trending Travel & Tourism App Templates for flight, hotel, and adventure booking apps."
        />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="AppTemplateHub" />
        <meta name="author" content="AppTemplateHub Team" />
      </Helmet>

      <CategorySection
        category="Travel & Tourism Apps"
        templates={templates}
        color="from-indigo-500 to-sky-400"
      />
    </>
  );
}
