import React from "react";
import { Helmet } from "react-helmet";
import CategorySection from "./CategorySection";

const templates = [
  { 
    name: "EventPro", 
    description: "EventPro – A professional event management website template. Organizes conferences, weddings, and parties efficiently.", 
    rating: '(5/5)⭐⭐⭐⭐⭐🌟', 
    appthumbnail: "/webthumbnails/eventimages/eventpro.png",
    image: "/webthumbnails/eventimages/eventpro1.png"
  },
  { 
    name: "FestMate", 
    description: "FestMate – A festival and events website. Highlights schedules, performers, and ticketing options.", 
    rating: '(4/5)⭐⭐⭐⭐🌟', 
    appthumbnail: "/webthumbnails/eventimages/festmate.png",
    image: "/webthumbnails/eventimages/festmate1.png"
  },
  { 
    name: "WeddingDay", 
    description: "WeddingDay – A wedding planning website template. Helps manage guests, vendors, and timelines smoothly.", 
    rating: '(5/5)⭐⭐⭐⭐⭐🌟', 
    appthumbnail: "/webthumbnails/eventimages/weddingday.png",
    image: "/webthumbnails/eventimages/weddingday1.png"
  },
  { 
    name: "PartyHub", 
    description: "PartyHub – A social events website. Users can explore, share, and RSVP to parties and gatherings.", 
    rating: '(4/5)⭐⭐⭐⭐🌟', 
    appthumbnail: "/webthumbnails/eventimages/partyhub.png",
    image: "/webthumbnails/eventimages/partyhub1.png"
  },
  { 
    name: "ConcertX", 
    description: "ConcertX – A concert and live music website template. Showcases events, tickets, and artist information.", 
    rating: '(5/5)⭐⭐⭐⭐⭐🌟', 
    appthumbnail: "/webthumbnails/eventimages/concertx.png",
    image: "/webthumbnails/eventimages/concertx1.png"
  },
  { 
    name: "MovieWorld", 
    description: "MovieWorld – A movie-focused website template. Includes showtimes, reviews, and ticket booking.", 
    rating: '(4/5)⭐⭐⭐⭐🌟', 
    appthumbnail: "/webthumbnails/eventimages/movieworld.png",
    image: "/webthumbnails/eventimages/movieworld1.png"
  },
  { 
    name: "ShowBiz", 
    description: "ShowBiz – An entertainment website for shows and performances. Features schedules, tickets, and promotions.", 
    rating: '(5/5)⭐⭐⭐⭐⭐🌟', 
    appthumbnail: "/webthumbnails/eventimages/showbiz.png",
    image: "/webthumbnails/eventimages/showbiz1.png"
  },
  { 
    name: "Eventify", 
    description: "Eventify – A versatile event management website. Manages registrations, schedules, and notifications.", 
    rating: '(4/5)⭐⭐⭐⭐🌟', 
    appthumbnail: "/webthumbnails/eventimages/eventify.png",
    image: "/webthumbnails/eventimages/eventify1.png"
  },
  { 
    name: "MusicFest", 
    description: "MusicFest – A music festival website template. Highlights lineups, tickets, and festival maps.", 
    rating: '(5/5)⭐⭐⭐⭐⭐🌟', 
    appthumbnail: "/webthumbnails/eventimages/musicfest.png",
    image: "/webthumbnails/eventimages/musicfest1.png"
  },
  { 
    name: "DJNight", 
    description: "DJNight – A nightlife and DJ events website. Features events, bookings, and promotions.", 
    rating: '(4/5)⭐⭐⭐⭐🌟', 
    appthumbnail: "/webthumbnails/eventimages/djnight.png",
    image: "/webthumbnails/eventimages/djnight1.png"
  },
  { 
    name: "GalaEvent", 
    description: "GalaEvent – A gala and formal events website template. Manages invitations, RSVPs, and schedules.", 
    rating: '(5/5)⭐⭐⭐⭐⭐🌟', 
    appthumbnail: "/webthumbnails/eventimages/galaevent.png",
    image: "/webthumbnails/eventimages/galaevent1.png"
  },
  { 
    name: "SeminarPro", 
    description: "SeminarPro – A professional seminar and workshop website. Handles registration, agendas, and feedback.", 
    rating: '(4/5)⭐⭐⭐⭐🌟', 
    appthumbnail: "/webthumbnails/eventimages/seminarpro.png",
    image: "/webthumbnails/eventimages/seminarpro1.png"
  },
  { 
    name: "LiveStage", 
    description: "LiveStage – A live performance website template. Showcases concerts, theater, and events.", 
    rating: '(5/5)⭐⭐⭐⭐⭐🌟', 
    appthumbnail: "/webthumbnails/eventimages/livestage.png",
    image: "/webthumbnails/eventimages/livestage1.png"
  },
  { 
    name: "FunTime", 
    description: "FunTime – A casual events and entertainment website. Users can explore local activities and events.", 
    rating: '(4/5)⭐⭐⭐⭐🌟', 
    appthumbnail: "/webthumbnails/eventimages/funtime.png",
    image: "/webthumbnails/eventimages/funtime1.png"
  },
  { 
    name: "DanceNight", 
    description: "DanceNight – A dance and club events website. Features event listings, tickets, and artist info.", 
    rating: '(5/5)⭐⭐⭐⭐⭐🌟', 
    appthumbnail: "/webthumbnails/eventimages/dancenight.png",
    image: "/webthumbnails/eventimages/dancenight1.png"
  },
  { 
    name: "TheatreHub", 
    description: "TheatreHub – A theater and performance website. Manages shows, bookings, and schedules.", 
    rating: '(4/5)⭐⭐⭐⭐🌟', 
    appthumbnail: "/webthumbnails/eventimages/theatrehub.png",
    image: "/webthumbnails/eventimages/theatrehub1.png"
  },
  { 
    name: "StandUpPro", 
    description: "StandUpPro – A comedy and stand-up events website. Highlights shows, performers, and ticketing.", 
    rating: '(5/5)⭐⭐⭐⭐⭐🌟', 
    appthumbnail: "/webthumbnails/eventimages/standuppro.png",
    image: "/webthumbnails/eventimages/standuppro1.png"
  },
  { 
    name: "EventPlus", 
    description: "EventPlus – A multipurpose event management website. Includes invitations, RSVPs, and event tracking.", 
    rating: '(4/5)⭐⭐⭐⭐🌟', 
    appthumbnail: "/webthumbnails/eventimages/eventplus.png",
    image: "/webthumbnails/eventimages/eventplus1.png"
  },
  { 
    name: "GameZone", 
    description: "GameZone – A gaming and e-sports events website. Showcases tournaments, schedules, and results.", 
    rating: '(5/5)⭐⭐⭐⭐⭐🌟', 
    appthumbnail: "/webthumbnails/eventimages/gamezone.png",
    image: "/webthumbnails/eventimages/gamezone1.png"
  },
  { 
    name: "FunFest", 
    description: "FunFest – A festival and entertainment website template. Highlights events, activities, and ticket sales.", 
    rating: '(4/5)⭐⭐⭐⭐🌟', 
    appthumbnail: "/webthumbnails/eventimages/funfest.png",
    image: "/webthumbnails/eventimages/funfest1.png"
  },
];


export default function EventsWebsites() {
  return (
    <>
      <Helmet>
        <title>Events Website Templates | Conferences, Parties & Expo UI Kits 2025</title>
        <meta
          name="description"
          content="Discover Events Website Templates for conferences, parties, festivals, concerts, and expos. Modern UI kits for event management platforms."
        />
        <meta
          name="keywords"
          content="Events website templates, conference website UI, concert websites, festival websites, expo website design, event booking, party websites"
        />
        <meta property="og:title" content="Events Website Templates 2025" />
        <meta
          property="og:description"
          content="Trending Events & Conference Website Templates for concerts, parties, and event management."
        />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="AppTemplateHub" />
        <meta name="author" content="AppTemplateHub Team" />
      </Helmet>

      <CategorySection
        category="Events & Conference Websites"
        templates={templates}
        color="from-orange-500 to-yellow-400"
      />
    </>
  );
}
