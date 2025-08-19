import React from "react";
import { Helmet } from "react-helmet";
import CategorySection from "./CategorySection";

const templates = [
  { 
    name: "TravelMate", 
    description: "TravelMate – A complete travel planning app template. Helps users book trips, plan itineraries, and explore destinations effortlessly.", 
    rating: '(4.6/5)⭐⭐⭐⭐⭐🌟', 
    appthumbnail: "/webthumbnails/travelimages/travelmate.png",
    image: "/webthumbnails/travelimages/travelmate1.png"
  }, 
  { 
    name: "FlyAway", 
    description: "FlyAway – Designed for airline bookings and flight management. Smooth interface for searching, booking, and mobile check-ins.", 
    rating: '(4.4/5)⭐⭐⭐⭐🌟', 
    appthumbnail: "/webthumbnails/travelimages/flyaway.png",
    image: "/webthumbnails/travelimages/flyaway1.png"
  },
  { 
    name: "GlobeTrek", 
    description: "GlobeTrek – A travel discovery app for adventure seekers. Showcases destinations, activities, and local travel guides.", 
    rating: '(4.5/5)⭐⭐⭐⭐⭐🌟', 
    appthumbnail: "/webthumbnails/travelimages/globetrek.png",
    image: "/webthumbnails/travelimages/globetrek1.png"
  }, 
  { 
    name: "Wanderlust", 
    description: "Wanderlust – A stylish travel journal and booking app. Perfect for travel bloggers, tourists, and storytellers.", 
    rating: '(4.3/5)⭐⭐⭐⭐🌟', 
    appthumbnail: "/webthumbnails/travelimages/wanderlust.png",
    image: "/webthumbnails/travelimages/wanderlust1.png"
  },
  { 
    name: "TripPlanner", 
    description: "TripPlanner – A detailed itinerary management app. Organize schedules, hotels, and activities effortlessly.", 
    rating: '(4.2/5)⭐⭐⭐⭐🌟', 
    appthumbnail: "/webthumbnails/travelimages/tripplanner.png",
    image: "/webthumbnails/travelimages/tripplanner1.png"
  }, 
  { 
    name: "HolidayHub", 
    description: "HolidayHub – A complete vacation booking platform. Covers hotels, resorts, packages, and more.", 
    rating: '(4.6/5)⭐⭐⭐⭐⭐🌟', 
    appthumbnail: "/webthumbnails/travelimages/holidayhub.png",
    image: "/webthumbnails/travelimages/holidayhub1.png"
  },
  { 
    name: "SkyTravel", 
    description: "SkyTravel – An airline and flight-focused app template. Provides booking, boarding, and real-time flight updates.", 
    rating: '(4.4/5)⭐⭐⭐⭐🌟', 
    appthumbnail: "/webthumbnails/travelimages/skytravel.png",
    image: "/webthumbnails/travelimages/skytravel1.png"
  }, 
  { 
    name: "GoAdventure", 
    description: "GoAdventure – A travel app for adventure trips and experiences. Includes activities, bookings, and reviews.", 
    rating: '(4.5/5)⭐⭐⭐⭐⭐🌟', 
    appthumbnail: "/webthumbnails/travelimages/goadventure.png",
    image: "/webthumbnails/travelimages/goadventure1.png"
  },
  { 
    name: "StayBook", 
    description: "StayBook – A hotel and accommodation booking app template. Easy search, booking, and reviews system.", 
    rating: '(4.3/5)⭐⭐⭐⭐🌟', 
    appthumbnail: "/webthumbnails/travelimages/staybook.png",
    image: "/webthumbnails/travelimages/staybook1.png"
  }, 
  { 
    name: "RoomFinder", 
    description: "RoomFinder – Designed for short-term rentals and homestays. Smooth UI for browsing rooms and instant booking.", 
    rating: '(4.2/5)⭐⭐⭐⭐🌟', 
    appthumbnail: "/webthumbnails/travelimages/roomfinder.png",
    image: "/webthumbnails/travelimages/roomfinder1.png"
  },
  { 
    name: "TravelX", 
    description: "TravelX – A global travel marketplace app connecting travelers to hotels, tours, and guides worldwide.", 
    rating: '(4.5/5)⭐⭐⭐⭐⭐🌟', 
    appthumbnail: "/webthumbnails/travelimages/travelx.png",
    image: "/webthumbnails/travelimages/travelx1.png"
  },
  { 
    name: "ExploreNow", 
    description: "ExploreNow – A tourism-focused app template with attractions, guides, maps, and travel tips.", 
    rating: '(4.4/5)⭐⭐⭐⭐🌟', 
    appthumbnail: "/webthumbnails/travelimages/explorenow.png",
    image: "/webthumbnails/travelimages/explorenow1.png"
  },
  { 
    name: "JetSet", 
    description: "JetSet – Luxury travel app template for premium users. Highlights exclusive trips, hotels, and luxury experiences.", 
    rating: '(4.7/5)⭐⭐⭐⭐⭐🌟', 
    appthumbnail: "/webthumbnails/travelimages/jetset.png",
    image: "/webthumbnails/travelimages/jetset1.png"
  },
  { 
    name: "TourEase", 
    description: "TourEase – An easy-to-use tour booking app. Covers packages, day trips, and group adventures.", 
    rating: '(4.3/5)⭐⭐⭐⭐🌟', 
    appthumbnail: "/webthumbnails/travelimages/tourease.png",
    image: "/webthumbnails/travelimages/tourease1.png"
  },
  { 
    name: "ResortLife", 
    description: "ResortLife – A resort-focused app template. Showcases amenities, activities, and quick booking options.", 
    rating: '(4.5/5)⭐⭐⭐⭐⭐🌟', 
    appthumbnail: "/webthumbnails/travelimages/resortlife.png",
    image: "/webthumbnails/travelimages/resortlife1.png"
  },
  { 
    name: "RoadTrip", 
    description: "RoadTrip – A navigation and trip planning app. Helps users map routes, find stops, and explore attractions.", 
    rating: '(4.2/5)⭐⭐⭐⭐🌟', 
    appthumbnail: "/webthumbnails/travelimages/roadtrip.png",
    image: "/webthumbnails/travelimages/roadtrip1.png"
  },
  { 
    name: "CruiseTime", 
    description: "CruiseTime – A cruise booking and management app. Includes cabin selection, itineraries, and services.", 
    rating: '(4.4/5)⭐⭐⭐⭐🌟', 
    appthumbnail: "/webthumbnails/travelimages/cruisetime.png",
    image: "/webthumbnails/travelimages/cruisetime1.png"
  },
  { 
    name: "AdventurePro", 
    description: "AdventurePro – Built for adventure tour operators. Booking, tracking, and experience management in one app.", 
    rating: '(4.5/5)⭐⭐⭐⭐⭐🌟', 
    appthumbnail: "/webthumbnails/travelimages/adventurepro.png",
    image: "/webthumbnails/travelimages/adventurepro1.png"
  },
  { 
    name: "BeachStay", 
    description: "BeachStay – A coastal stay booking app template. Highlights beach resorts, packages, and local activities.", 
    rating: '(4.3/5)⭐⭐⭐⭐🌟', 
    appthumbnail: "/webthumbnails/travelimages/beachstay.png",
    image: "/webthumbnails/travelimages/beachstay1.png"
  },
  { 
    name: "HostelWorld", 
    description: "HostelWorld – A hostel and budget stay app. Enables quick bookings, reviews, and community engagement.", 
    rating: '(4.2/5)⭐⭐⭐⭐🌟', 
    appthumbnail: "/webthumbnails/travelimages/hostelworld.png",
    image: "/webthumbnails/travelimages/hostelworld1.png"
  }
];

export default function TravelWebsites() {
  return (
    <>
      <Helmet>
        <title>Travel Website Templates | Flight, Hotel & Tourism UI Kits</title>
        <meta
          name="description"
          content="Download professional Travel Website Templates for flight booking, hotel booking, tourism, road trips, cruises, and adventure travel. Premium UI kits for agencies, startups, and tour operators."
        />
        <meta
          name="keywords"
          content="Travel website templates, flight booking website, hotel booking UI, tourism website design, travel agency templates, wanderlust websites, adventure booking sites, holiday website UI kit"
        />
        <meta property="og:title" content="Travel Website Templates 2025" />
        <meta
          property="og:description"
          content="Explore trending Travel & Tourism Website Templates for airlines, hotels, road trips, cruises, and adventure booking websites."
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="WP Servics" />
        <meta name="author" content="WPServices Team" />
      </Helmet>

      <CategorySection
        category="Travel & Tourism Websites"
        templates={templates}
        color="from-indigo-500 to-sky-400"
      />
    </>
  );

}
