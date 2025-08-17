import React from "react";
import { Helmet } from "react-helmet";
import CategorySection from "./CategorySection";

const templates = [
  { name: "MediCare", description: "A complete healthcare app template. Manages appointments, patient records, and doctor interactions.", rating: "(4.5/5)⭐⭐⭐⭐⭐🌟", appthumbnail: "appthumbnails/healthimages/medicare.png" },
  { name: "HealthTrack", description: "Track your health and fitness with integrated reports, goals, and reminders.", rating: "(4.4/5)⭐⭐⭐⭐🌟", appthumbnail: "appthumbnails/healthimages/healthtrack.png" },
  { name: "DoctorConnect", description: "Connect patients with doctors easily. Schedule appointments and chat securely.", rating: "(4.5/5)⭐⭐⭐⭐⭐🌟", appthumbnail: "appthumbnails/healthimages/doctorconnect.png" },
  { name: "PharmaPlus", description: "Pharmacy management app template. Includes drug catalog, ordering, and delivery tracking.", rating: "(4.4/5)⭐⭐⭐⭐🌟", appthumbnail: "appthumbnails/healthimages/pharmaplus.png" },
  { name: "WellnessPro", description: "A wellness and mental health app. Offers meditation, health tips, and consultation services.", rating: "(4.5/5)⭐⭐⭐⭐⭐🌟", appthumbnail: "appthumbnails/healthimages/wellnesspro.png" },
  { name: "FitLife", description: "Fitness tracking app template. Tracks exercises, nutrition, and progress goals.", rating: "(4.4/5)⭐⭐⭐⭐🌟", appthumbnail: "appthumbnails/healthimages/fitlife.png" },
  { name: "CareNow", description: "Healthcare service app. Book home care, nursing, and medical services easily.", rating: "(4.5/5)⭐⭐⭐⭐⭐🌟", appthumbnail: "appthumbnails/healthimages/carenow.png" },
  { name: "MedReminder", description: "Medication reminder app template. Sends notifications for medicine intake and doctor schedules.", rating: "(4.4/5)⭐⭐⭐⭐🌟", appthumbnail: "appthumbnails/healthimages/medreminder.png" },
  { name: "HealthConsult", description: "Telemedicine app template. Supports video consultations, prescriptions, and medical history.", rating: "(4.5/5)⭐⭐⭐⭐⭐🌟", appthumbnail: "appthumbnails/healthimages/healthconsult.png" },
  { name: "SymptomChecker", description: "An AI-powered symptom checker. Helps users understand potential health issues and next steps.", rating: "(4.4/5)⭐⭐⭐⭐🌟", appthumbnail: "appthumbnails/healthimages/symptomchecker.png" },
  { name: "ClinicManager", description: "Clinic management app. Manages appointments, staff schedules, and patient data efficiently.", rating: "(4.5/5)⭐⭐⭐⭐⭐🌟", appthumbnail: "appthumbnails/healthimages/clinicmanager.png" },
  { name: "NutritionGuide", description: "A nutrition tracking app. Provides meal plans, dietary tips, and health tracking.", rating: "(4.4/5)⭐⭐⭐⭐🌟", appthumbnail: "appthumbnails/healthimages/nutritionguide.png" },
  { name: "EmergencyAssist", description: "Emergency service app template. Helps users call and navigate to nearest hospitals or services.", rating: "(4.5/5)⭐⭐⭐⭐⭐🌟", appthumbnail: "appthumbnails/healthimages/emergencyassist.png" },
  { name: "MindCare", description: "Mental health and counseling app. Connects users with therapists and mindfulness content.", rating: "(4.4/5)⭐⭐⭐⭐🌟", appthumbnail: "appthumbnails/healthimages/mindcare.png" },
  { name: "PregnancyTracker", description: "Pregnancy and baby care app template. Tracks health, tips, and doctor visits.", rating: "(4.5/5)⭐⭐⭐⭐⭐🌟", appthumbnail: "appthumbnails/healthimages/pregnancytracker.png" },
  { name: "DentalCare", description: "Dental clinic and appointment app. Manages patient records, bookings, and dental tips.", rating: "(4.4/5)⭐⭐⭐⭐🌟", appthumbnail: "appthumbnails/healthimages/dentalcare.png" },
  { name: "VisionCheck", description: "Eye care and optometry app template. Tracks eye health and appointment schedules.", rating: "(4.5/5)⭐⭐⭐⭐⭐🌟", appthumbnail: "appthumbnails/healthimages/visioncheck.png" },
  { name: "PharmaTrack", description: "Medicine inventory and pharmacy app. Tracks stock, orders, and prescriptions.", rating: "(4.4/5)⭐⭐⭐⭐🌟", appthumbnail: "appthumbnails/healthimages/pharmatrack.png" },
  { name: "HealthTips", description: "Daily health tips and advice app. Guides users on nutrition, fitness, and wellness.", rating: "(4.5/5)⭐⭐⭐⭐⭐🌟", appthumbnail: "appthumbnails/healthimages/healthtips.png" },
  { name: "ClinicFinder", description: "Find nearby clinics and healthcare providers easily. Includes reviews and booking options.", rating: "(4.4/5)⭐⭐⭐⭐🌟", appthumbnail: "appthumbnails/healthimages/clinicfinder.png" }
];



export default function HealthcareApps() {
  return (
    <>
      <Helmet>
        <title>Healthcare App Templates | Doctor, Fitness & Wellness UI Kits 2025</title>
        <meta
          name="description"
          content="Explore Healthcare App Templates for doctors, clinics, fitness tracking, and wellness apps. Perfect UI kits for modern medical platforms."
        />
        <meta
          name="keywords"
          content="Healthcare app templates, doctor app UI, hospital app design, fitness apps, wellness app, pharmacy apps, medical app UI kits"
        />
        <meta property="og:title" content="Healthcare App Templates 2025" />
        <meta
          property="og:description"
          content="Trending Healthcare & Medical App Templates for clinics, hospitals, and fitness startups."
        />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="AppTemplateHub" />
        <meta name="author" content="AppTemplateHub Team" />
      </Helmet>

      <CategorySection
        category="Healthcare & Medical Apps"
        templates={templates}
        color="from-green-500 to-emerald-400"
      />
    </>
  );
}
