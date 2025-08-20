import React from "react";
import { Helmet } from "react-helmet";
import CategorySection from "./CategorySection";

const templates = [
  { 
    name: "MediCare", 
    description: "A complete healthcare website template. Manages appointments, patient records, and doctor interactions.", 
    rating: "(4.5/5)⭐⭐⭐⭐⭐🌟", 
    appthumbnail: "appthumbnails/healthimages/medicare.png",
    image: "/webthumbnails/healthimages/medicare1.png"
  },
  { 
    name: "HealthTrack", 
    description: "Track your health and fitness with integrated reports, goals, and reminders.", 
    rating: "(4.4/5)⭐⭐⭐⭐🌟", 
    appthumbnail: "appthumbnails/healthimages/healthtrack.png",
    image: "/webthumbnails/healthimages/healthtrack1.png"
  },
  { 
    name: "DoctorConnect", 
    description: "Connect patients with doctors easily. Schedule appointments and chat securely.", 
    rating: "(4.5/5)⭐⭐⭐⭐⭐🌟", 
    appthumbnail: "appthumbnails/healthimages/doctorconnect.png",
    image: "/webthumbnails/healthimages/doctorconnect1.png"
  },
  { 
    name: "PharmaPlus", 
    description: "Pharmacy management website template. Includes drug catalog, ordering, and delivery tracking.", 
    rating: "(4.4/5)⭐⭐⭐⭐🌟", 
    appthumbnail: "appthumbnails/healthimages/pharmaplus.png",
    image: "/webthumbnails/healthimages/pharmaplus1.png"
  },
  { 
    name: "WellnessPro", 
    description: "A wellness and mental health website. Offers meditation, health tips, and consultation services.", 
    rating: "(4.5/5)⭐⭐⭐⭐⭐🌟", 
    appthumbnail: "appthumbnails/healthimages/wellnesspro.png",
    image: "/webthumbnails/healthimages/wellnesspro1.png"
  },
  { 
    name: "FitLife", 
    description: "Fitness tracking website template. Tracks exercises, nutrition, and progress goals.", 
    rating: "(4.4/5)⭐⭐⭐⭐🌟", 
    appthumbnail: "appthumbnails/healthimages/fitlife.png",
    image: "/webthumbnails/healthimages/fitlife1.png"
  },
  { 
    name: "CareNow", 
    description: "Healthcare service website. Book home care, nursing, and medical services easily.", 
    rating: "(4.5/5)⭐⭐⭐⭐⭐🌟", 
    appthumbnail: "appthumbnails/healthimages/carenow.png",
    image: "/webthumbnails/healthimages/carenow1.png"
  },
  { 
    name: "MedReminder", 
    description: "Medication reminder website template. Sends notifications for medicine intake and doctor schedules.", 
    rating: "(4.4/5)⭐⭐⭐⭐🌟", 
    appthumbnail: "appthumbnails/healthimages/medreminder.png",
    image: "/webthumbnails/healthimages/medreminder1.png"
  },
  { 
    name: "HealthConsult", 
    description: "Telemedicine website template. Supports video consultations, prescriptions, and medical history.", 
    rating: "(4.5/5)⭐⭐⭐⭐⭐🌟", 
    appthumbnail: "appthumbnails/healthimages/healthconsult.png",
    image: "/webthumbnails/healthimages/healthconsult1.png"
  },
  { 
    name: "SymptomChecker", 
    description: "An AI-powered symptom checker. Helps users understand potential health issues and next steps.", 
    rating: "(4.4/5)⭐⭐⭐⭐🌟", 
    appthumbnail: "appthumbnails/healthimages/symptomchecker.png",
    image: "/webthumbnails/healthimages/symptomchecker1.png"
  }
];

export default function HealthcareWebsites() {
  return (
    <>
      <Helmet>
        <title>Healthcare Website Templates | Doctor, Fitness & Wellness UI Kits 2025</title>
        <meta
          name="description"
          content="Explore Healthcare Website Templates for doctors, clinics, fitness tracking, and wellness sites. Perfect UI kits for modern medical platforms."
        />
        <meta
          name="keywords"
          content="Healthcare website templates, doctor website UI, hospital site design, fitness websites, wellness site, pharmacy website UI kits"
        />
        <meta property="og:title" content="Healthcare Website Templates 2025" />
        <meta
          property="og:description"
          content="Trending Healthcare & Medical Website Templates for clinics, hospitals, and fitness startups."
        />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="AppTemplateHub" />
        <meta name="author" content="AppTemplateHub Team" />
      </Helmet>

      <CategorySection
        category="Healthcare & Medical Websites"
        templates={templates}
        color="from-green-500 to-emerald-400"
      />
    </>
  );
}
