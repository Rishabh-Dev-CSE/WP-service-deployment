import React from "react";
import { Helmet } from "react-helmet";
import CategorySection from "./CategorySection";

const templates = [
  { name: "CharityPlus", description: "A comprehensive charity app template. Supports donations, campaigns, and volunteer management.", rating: "(4.5/5)⭐⭐⭐⭐⭐🌟", appthumbnail: "appthumbnails/nonprofitimages/charityplus.png" },
  { name: "HelpHub", description: "Designed for community support initiatives. Connects helpers with those in need and organizes events.", rating: "(4.4/5)⭐⭐⭐⭐🌟", appthumbnail: "appthumbnails/nonprofitimages/helphub.png" },
  { name: "NGOPro", description: "A professional NGO app template. Showcases projects, impact reports, and donation drives.", rating: "(4.5/5)⭐⭐⭐⭐⭐🌟", appthumbnail: "appthumbnails/nonprofitimages/ngopro.png" },
  { name: "FundMate", description: "A fundraising app template. Simplifies campaign creation, donations, and progress tracking.", rating: "(4.4/5)⭐⭐⭐⭐🌟", appthumbnail: "appthumbnails/nonprofitimages/fundmate.png" },
  { name: "SaveEarth", description: "An environmental app template. Promotes eco-friendly initiatives, campaigns, and volunteer activities.", rating: "(4.5/5)⭐⭐⭐⭐⭐🌟", appthumbnail: "appthumbnails/nonprofitimages/saveearth.png" },
  { name: "SocialCause", description: "A community-driven app template. Connects users with social initiatives and events.", rating: "(4.4/5)⭐⭐⭐⭐🌟", appthumbnail: "appthumbnails/nonprofitimages/socialcause.png" },
  { name: "KindWorld", description: "Focused on spreading kindness and community engagement. Includes donation and volunteering features.", rating: "(4.5/5)⭐⭐⭐⭐⭐🌟", appthumbnail: "appthumbnails/nonprofitimages/kindworld.png" },
  { name: "DonateX", description: "A clean donation platform app. Supports multiple campaigns, payment gateways, and progress tracking.", rating: "(4.4/5)⭐⭐⭐⭐🌟", appthumbnail: "appthumbnails/nonprofitimages/donatex.png" },
  { name: "ChurchLife", description: "A church management app template. Features events, donations, and community updates.", rating: "(4.5/5)⭐⭐⭐⭐⭐🌟", appthumbnail: "appthumbnails/nonprofitimages/churchlife.png" },
  { name: "FaithConnect", description: "Designed for faith-based communities. Connects members, shares events, and organizes activities.", rating: "(4.4/5)⭐⭐⭐⭐🌟", appthumbnail: "appthumbnails/nonprofitimages/faithconnect.png" },
  { name: "HopeNow", description: "A nonprofit app template focused on social causes. Supports campaigns, donations, and awareness programs.", rating: "(4.5/5)⭐⭐⭐⭐⭐🌟", appthumbnail: "appthumbnails/nonprofitimages/hopenow.png" },
  { name: "AidBase", description: "A disaster relief and aid management app. Connects donors with affected communities efficiently.", rating: "(4.4/5)⭐⭐⭐⭐🌟", appthumbnail: "appthumbnails/nonprofitimages/aidbase.png" },
  { name: "CareZone", description: "A community care app template. Organizes volunteers, events, and support networks.", rating: "(4.5/5)⭐⭐⭐⭐⭐🌟", appthumbnail: "appthumbnails/nonprofitimages/carezone.png" },
  { name: "GlobalHelp", description: "An international aid and nonprofit app template. Highlights global campaigns and volunteer opportunities.", rating: "(4.4/5)⭐⭐⭐⭐🌟", appthumbnail: "appthumbnails/nonprofitimages/globalhelp.png" },
  { name: "MissionPro", description: "A mission-driven app template for NGOs. Supports project tracking, campaigns, and community engagement.", rating: "(4.5/5)⭐⭐⭐⭐⭐🌟", appthumbnail: "appthumbnails/nonprofitimages/missionpro.png" },
  { name: "CharityFund", description: "A donation-focused app. Enables multiple campaigns, donor management, and reporting.", rating: "(4.4/5)⭐⭐⭐⭐🌟", appthumbnail: "appthumbnails/nonprofitimages/charityfund.png" },
  { name: "CommunityLife", description: "A community engagement app template. Connects members, shares updates, and promotes events.", rating: "(4.5/5)⭐⭐⭐⭐⭐🌟", appthumbnail: "appthumbnails/nonprofitimages/communitylife.png" },
  { name: "GiveMore", description: "A fundraising and volunteer app. Features campaigns, donations, and progress dashboards.", rating: "(4.4/5)⭐⭐⭐⭐🌟", appthumbnail: "appthumbnails/nonprofitimages/givemore.png" },
  { name: "NonProfitX", description: "A versatile nonprofit app template. Manages campaigns, volunteers, and donor communications.", rating: "(4.5/5)⭐⭐⭐⭐⭐🌟", appthumbnail: "appthumbnails/nonprofitimages/nonprofitx.png" },
  { name: "RescueNow", description: "A disaster relief and emergency aid app. Provides real-time updates, volunteer coordination, and donation support.", rating: "(4.4/5)⭐⭐⭐⭐🌟", appthumbnail: "appthumbnails/nonprofitimages/rescuenow.png" }
];


export default function NonprofitApps() {
  return (
    <>
      <Helmet>
        <title>Nonprofit App Templates | Charity, NGO & Fundraising UI Kits 2025</title>
        <meta
          name="description"
          content="Download Nonprofit App Templates for NGOs, charity, fundraising, and social impact platforms. Modern UI kits for donation & awareness apps."
        />
        <meta
          name="keywords"
          content="Nonprofit app templates, charity apps, NGO UI kits, fundraising apps, donation platforms, social impact apps, community service apps"
        />
        <meta property="og:title" content="Nonprofit App Templates 2025" />
        <meta
          property="og:description"
          content="Trending Nonprofit & Charity App Templates for NGOs, donations, and fundraising campaigns."
        />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="AppTemplateHub" />
        <meta name="author" content="AppTemplateHub Team" />
      </Helmet>

      <CategorySection
        category="Nonprofit & Charity Apps"
        templates={templates}
        color="from-emerald-500 to-green-400"
      />
    </>
  );
}
