import React from "react";
import { Helmet } from "react-helmet";
import CategorySection from "./CategorySection";

const templates = [
  { name: "EventPro", description: "A professional event management app template. Organizes conferences, weddings, and parties efficiently.", rating: "(4.5/5)⭐⭐⭐⭐⭐🌟", appthumbnail: "appthumbnails/eventimages/eventpro.png" },
  { name: "FestMate", description: "A festival and event app. Highlights schedules, performers, and ticketing options.", rating: "(4.4/5)⭐⭐⭐⭐🌟", appthumbnail: "appthumbnails/eventimages/festmate.png" },
  { name: "WeddingDay", description: "A wedding planning app template. Helps manage guests, vendors, and timelines smoothly.", rating: "(4.5/5)⭐⭐⭐⭐⭐🌟", appthumbnail: "appthumbnails/eventimages/weddingday.png" },
  { name: "PartyHub", description: "A social event app. Users can create, share, and RSVP to parties and gatherings.", rating: "(4.4/5)⭐⭐⭐⭐🌟", appthumbnail: "appthumbnails/eventimages/partyhub.png" },
  { name: "ConcertX", description: "A concert and live music app template. Showcases events, tickets, and artist information.", rating: "(4.5/5)⭐⭐⭐⭐⭐🌟", appthumbnail: "appthumbnails/eventimages/concertx.png" },
  { name: "MovieWorld", description: "A movie-focused app template. Includes showtimes, reviews, and ticket booking.", rating: "(4.4/5)⭐⭐⭐⭐🌟", appthumbnail: "appthumbnails/eventimages/movieworld.png" },
  { name: "ShowBiz", description: "An entertainment app for shows and performances. Features schedules, tickets, and promotions.", rating: "(4.5/5)⭐⭐⭐⭐⭐🌟", appthumbnail: "appthumbnails/eventimages/showbiz.png" },
  { name: "Eventify", description: "A versatile event management app. Manages registrations, schedules, and notifications.", rating: "(4.4/5)⭐⭐⭐⭐🌟", appthumbnail: "appthumbnails/eventimages/eventify.png" },
  { name: "MusicFest", description: "A music festival app template. Highlights lineups, tickets, and festival maps.", rating: "(4.5/5)⭐⭐⭐⭐⭐🌟", appthumbnail: "appthumbnails/eventimages/musicfest.png" },
  { name: "DJNight", description: "A nightlife and DJ event app. Features events, bookings, and promotions.", rating: "(4.4/5)⭐⭐⭐⭐🌟", appthumbnail: "appthumbnails/eventimages/djnight.png" },
  { name: "GalaEvent", description: "A gala and formal event app template. Manages invitations, RSVPs, and schedules.", rating: "(4.5/5)⭐⭐⭐⭐⭐🌟", appthumbnail: "appthumbnails/eventimages/galaevent.png" },
  { name: "SeminarPro", description: "A professional seminar and workshop app. Handles registration, agendas, and feedback.", rating: "(4.4/5)⭐⭐⭐⭐🌟", appthumbnail: "appthumbnails/eventimages/seminarpro.png" },
  { name: "LiveStage", description: "A live performance app template. Showcases concerts, theater, and events.", rating: "(4.5/5)⭐⭐⭐⭐⭐🌟", appthumbnail: "appthumbnails/eventimages/livestage.png" },
  { name: "FunTime", description: "A casual events and entertainment app. Users can explore local activities and events.", rating: "(4.4/5)⭐⭐⭐⭐🌟", appthumbnail: "appthumbnails/eventimages/funtime.png" },
  { name: "DanceNight", description: "A dance and club event app. Features event listings, tickets, and artist info.", rating: "(4.5/5)⭐⭐⭐⭐⭐🌟", appthumbnail: "appthumbnails/eventimages/dancenight.png" },
  { name: "TheatreHub", description: "A theater and performance app. Manages shows, bookings, and schedules.", rating: "(4.4/5)⭐⭐⭐⭐🌟", appthumbnail: "appthumbnails/eventimages/theatrehub.png" },
  { name: "StandUpPro", description: "A comedy and stand-up event app. Highlights shows, performers, and ticketing.", rating: "(4.5/5)⭐⭐⭐⭐⭐🌟", appthumbnail: "appthumbnails/eventimages/standuppro.png" },
  { name: "EventPlus", description: "A multipurpose event management app. Includes invitations, RSVPs, and event tracking.", rating: "(4.4/5)⭐⭐⭐⭐🌟", appthumbnail: "appthumbnails/eventimages/eventplus.png" },
  { name: "GameZone", description: "A gaming and e-sports event app. Showcases tournaments, schedules, and results.", rating: "(4.5/5)⭐⭐⭐⭐⭐🌟", appthumbnail: "appthumbnails/eventimages/gamezone.png" },
  { name: "FunFest", description: "A festival and entertainment app template. Highlights events, activities, and ticket sales.", rating: "(4.4/5)⭐⭐⭐⭐🌟", appthumbnail: "appthumbnails/eventimages/funfest.png" }
];


export default function EventsApps() {
  return (
    <>
      <Helmet>
        <title>Events App Templates | Conferences, Parties & Expo UI Kits 2025</title>
        <meta
          name="description"
          content="Discover Events App Templates for conferences, parties, festivals, concerts, and expos. Modern UI kits for event management platforms."
        />
        <meta
          name="keywords"
          content="Events app templates, conference app UI, concert apps, festival apps, expo app design, event booking, party apps"
        />
        <meta property="og:title" content="Events App Templates 2025" />
        <meta
          property="og:description"
          content="Trending Events & Conference App Templates for concerts, parties, and event management."
        />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="AppTemplateHub" />
        <meta name="author" content="AppTemplateHub Team" />
      </Helmet>

      <CategorySection
        category="Events & Conference Apps"
        templates={templates}
        color="from-orange-500 to-yellow-400"
      />
    </>
  );
}
