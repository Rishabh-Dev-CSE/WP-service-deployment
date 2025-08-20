import React from "react";
import { Helmet } from "react-helmet";
import CategorySection from "./CategorySection";

const templates = [
  { name: "CharityPlus", description: "A comprehensive charity website template. Supports donations, campaigns, and volunteer management.", rating: "(4.5/5)⭐⭐⭐⭐⭐🌟", appthumbnail: "appthumbnails/nonprofitimages/charityplus.png", image: "/webthumbnails/nonprofitimages/charityplus1.png" },
  { name: "HelpHub", description: "Designed for community support initiatives. Connects helpers with those in need and organizes events.", rating: "(4.4/5)⭐⭐⭐⭐🌟", appthumbnail: "appthumbnails/nonprofitimages/helphub.png", image: "/webthumbnails/nonprofitimages/helphub1.png" },
  { name: "NGOPro", description: "A professional NGO website template. Showcases projects, impact reports, and donation drives.", rating: "(4.5/5)⭐⭐⭐⭐⭐🌟", appthumbnail: "appthumbnails/nonprofitimages/ngopro.png", image: "/webthumbnails/nonprofitimages/ngopro1.png" },
  { name: "FundMate", description: "A fundraising website template. Simplifies campaign creation, donations, and progress tracking.", rating: "(4.4/5)⭐⭐⭐⭐🌟", appthumbnail: "appthumbnails/nonprofitimages/fundmate.png", image: "/webthumbnails/nonprofitimages/fundmate1.png" },
  { name: "SaveEarth", description: "An environmental website template. Promotes eco-friendly initiatives, campaigns, and volunteer activities.", rating: "(4.5/5)⭐⭐⭐⭐⭐🌟", appthumbnail: "appthumbnails/nonprofitimages/saveearth.png", image: "/webthumbnails/nonprofitimages/saveearth1.png" },
  { name: "SocialCause", description: "A community-driven website template. Connects users with social initiatives and events.", rating: "(4.4/5)⭐⭐⭐⭐🌟", appthumbnail: "appthumbnails/nonprofitimages/socialcause.png", image: "/webthumbnails/nonprofitimages/socialcause1.png" },
  { name: "KindWorld", description: "Focused on spreading kindness and community engagement. Includes donation and volunteering features.", rating: "(4.5/5)⭐⭐⭐⭐⭐🌟", appthumbnail: "appthumbnails/nonprofitimages/kindworld.png", image: "/webthumbnails/nonprofitimages/kindworld1.png" },
  { name: "DonateX", description: "A clean donation platform website. Supports multiple campaigns, payment gateways, and progress tracking.", rating: "(4.4/5)⭐⭐⭐⭐🌟", appthumbnail: "appthumbnails/nonprofitimages/donatex.png", image: "/webthumbnails/nonprofitimages/donatex1.png" },
  { name: "ChurchLife", description: "A church management website template. Features events, donations, and community updates.", rating: "(4.5/5)⭐⭐⭐⭐⭐🌟", appthumbnail: "appthumbnails/nonprofitimages/churchlife.png", image: "/webthumbnails/nonprofitimages/churchlife1.png" },
  { name: "FaithConnect", description: "Designed for faith-based communities. Connects members, shares events, and organizes activities.", rating: "(4.4/5)⭐⭐⭐⭐🌟", appthumbnail: "appthumbnails/nonprofitimages/faithconnect.png", image: "/webthumbnails/nonprofitimages/faithconnect1.png" },
  { name: "HopeNow", description: "A nonprofit website template focused on social causes. Supports campaigns, donations, and awareness programs.", rating: "(4.5/5)⭐⭐⭐⭐⭐🌟", appthumbnail: "appthumbnails/nonprofitimages/hopenow.png", image: "/webthumbnails/nonprofitimages/hopenow1.png" },
  { name: "AidBase", description: "A disaster relief and aid management website. Connects donors with affected communities efficiently.", rating: "(4.4/5)⭐⭐⭐⭐🌟", appthumbnail: "appthumbnails/nonprofitimages/aidbase.png", image: "/webthumbnails/nonprofitimages/aidbase1.png" },
  { name: "CareZone", description: "A community care website template. Organizes volunteers, events, and support networks.", rating: "(4.5/5)⭐⭐⭐⭐⭐🌟", appthumbnail: "appthumbnails/nonprofitimages/carezone.png", image: "/webthumbnails/nonprofitimages/carezone1.png" },
  { name: "GlobalHelp", description: "An international aid and nonprofit website template. Highlights global campaigns and volunteer opportunities.", rating: "(4.4/5)⭐⭐⭐⭐🌟", appthumbnail: "appthumbnails/nonprofitimages/globalhelp.png", image: "/webthumbnails/nonprofitimages/globalhelp1.png" },
  { name: "MissionPro", description: "A mission-driven website template for NGOs. Supports project tracking, campaigns, and community engagement.", rating: "(4.5/5)⭐⭐⭐⭐⭐🌟", appthumbnail: "appthumbnails/nonprofitimages/missionpro.png", image: "/webthumbnails/nonprofitimages/missionpro1.png" },
  { name: "CharityFund", description: "A donation-focused website. Enables multiple campaigns, donor management, and reporting.", rating: "(4.4/5)⭐⭐⭐⭐🌟", appthumbnail: "appthumbnails/nonprofitimages/charityfund.png", image: "/webthumbnails/nonprofitimages/charityfund1.png" },
  { name: "CommunityLife", description: "A community engagement website template. Connects members, shares updates, and promotes events.", rating: "(4.5/5)⭐⭐⭐⭐⭐🌟", appthumbnail: "appthumbnails/nonprofitimages/communitylife.png", image: "/webthumbnails/nonprofitimages/communitylife1.png" },
  { name: "GiveMore", description: "A fundraising and volunteer website. Features campaigns, donations, and progress dashboards.", rating: "(4.4/5)⭐⭐⭐⭐🌟", appthumbnail: "appthumbnails/nonprofitimages/givemore.png", image: "/webthumbnails/nonprofitimages/givemore1.png" },
  { name: "NonProfitX", description: "A versatile nonprofit website template. Manages campaigns, volunteers, and donor communications.", rating: "(4.5/5)⭐⭐⭐⭐⭐🌟", appthumbnail: "appthumbnails/nonprofitimages/nonprofitx.png", image: "/webthumbnails/nonprofitimages/nonprofitx1.png" },
  { name: "RescueNow", description: "A disaster relief and emergency aid website. Provides real-time updates, volunteer coordination, and donation support.", rating: "(4.4/5)⭐⭐⭐⭐🌟", appthumbnail: "appthumbnails/nonprofitimages/rescuenow.png", image: "/webthumbnails/nonprofitimages/rescuenow1.png" }
];

export default function NonprofitWebsite() {
  return (
    <>
      <Helmet>
        <title>Nonprofit Website Templates | Charity, NGO & Fundraising UI Kits 2025</title>
        <meta
          name="description"
          content="Download Nonprofit Website Templates for NGOs, charity, fundraising, and social impact platforms. Modern UI kits for donation & awareness apps."
        />
        <meta
          name="keywords"
          content="Nonprofit website templates, charity websites, NGO UI kits, fundraising websites, donation platforms, social impact websites, community service websites"
        />
        <meta property="og:title" content="Nonprofit Website Templates 2025" />
        <meta
          property="og:description"
          content="Trending Nonprofit & Charity Website Templates for NGOs, donations, and fundraising campaigns."
        />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="AppTemplateHub" />
        <meta name="author" content="AppTemplateHub Team" />
      </Helmet>

      <CategorySection
        category="Nonprofit & Charity Websites"
        templates={templates}
        color="from-emerald-500 to-green-400"
      />
    </>
  );
}
