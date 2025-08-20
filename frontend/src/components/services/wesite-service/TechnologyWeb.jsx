import React from "react";
import { Helmet } from "react-helmet";
import CategorySection from "./CategorySection";

const templates = [
  { 
    name: "TechPro", 
    description: "A modern tech website template for software companies and startups. Showcases products, services, and solutions efficiently.", 
    rating: "(4.6/5)⭐⭐⭐⭐⭐🌟", 
    appthumbnail: "appthumbnails/techimages/techpro.png",
    image: "/webthumbnails/techimages/techpro1.png" 
  },
  { 
    name: "SaaSify", 
    description: "Designed for SaaS platforms. Features subscription plans, dashboards, and client management tools.", 
    rating: "(4.5/5)⭐⭐⭐⭐⭐🌟", 
    appthumbnail: "appthumbnails/techimages/saasify.png",
    image: "/webthumbnails/techimages/saasify1.png" 
  },
  { 
    name: "AppLaunch", 
    description: "A sleek website template for launching mobile or web applications. Highlights features, pricing, and downloads.", 
    rating: "(4.4/5)⭐⭐⭐⭐🌟", 
    appthumbnail: "appthumbnails/techimages/applaunch.png",
    image: "/webthumbnails/techimages/applaunch1.png" 
  },
  { 
    name: "CodeHub", 
    description: "A platform for developers and coding communities. Includes tutorials, code snippets, and collaboration tools.", 
    rating: "(4.5/5)⭐⭐⭐⭐⭐🌟", 
    appthumbnail: "appthumbnails/techimages/codehub.png",
    image: "/webthumbnails/techimages/codehub1.png" 
  },
  { 
    name: "CloudBase", 
    description: "A cloud services website template. Showcases storage, computing, and cloud solutions with clarity.", 
    rating: "(4.4/5)⭐⭐⭐⭐🌟", 
    appthumbnail: "appthumbnails/techimages/cloudbase.png",
    image: "/webthumbnails/techimages/cloudbase1.png" 
  },
  { 
    name: "InnovateX", 
    description: "Perfect for tech startups and innovation hubs. Highlights projects, products, and team expertise.", 
    rating: "(4.5/5)⭐⭐⭐⭐⭐🌟", 
    appthumbnail: "appthumbnails/techimages/innovatex.png",
    image: "/webthumbnails/techimages/innovatex1.png" 
  },
  { 
    name: "WebSoft", 
    description: "A software company website template. Displays apps, services, and client success stories effectively.", 
    rating: "(4.3/5)⭐⭐⭐⭐🌟", 
    appthumbnail: "appthumbnails/techimages/websoft.png",
    image: "/webthumbnails/techimages/websoft1.png" 
  },
  { 
    name: "ITWorld", 
    description: "An IT service website template. Ideal for support, solutions, and consulting services.", 
    rating: "(4.4/5)⭐⭐⭐⭐🌟", 
    appthumbnail: "appthumbnails/techimages/itworld.png",
    image: "/webthumbnails/techimages/itworld1.png" 
  },
  { 
    name: "AIPro", 
    description: "Designed for AI and machine learning products. Highlights features, demos, and integrations.", 
    rating: "(4.5/5)⭐⭐⭐⭐⭐🌟", 
    appthumbnail: "appthumbnails/techimages/aipro.png",
    image: "/webthumbnails/techimages/aipro1.png" 
  },
  { 
    name: "DataFlow", 
    description: "A data analytics and business intelligence website template. Showcases dashboards, insights, and reports.", 
    rating: "(4.4/5)⭐⭐⭐⭐🌟", 
    appthumbnail: "appthumbnails/techimages/dataflow.png",
    image: "/webthumbnails/techimages/dataflow1.png" 
  },
  { 
    name: "CyberSecure", 
    description: "A cybersecurity-focused website. Offers security solutions, monitoring, and protection features.", 
    rating: "(4.5/5)⭐⭐⭐⭐⭐🌟", 
    appthumbnail: "appthumbnails/techimages/cybersecure.png",
    image: "/webthumbnails/techimages/cybersecure1.png" 
  },
  { 
    name: "StartupTech", 
    description: "A startup-focused tech website template. Perfect for presenting innovative solutions and growth plans.", 
    rating: "(4.4/5)⭐⭐⭐⭐🌟", 
    appthumbnail: "appthumbnails/techimages/startuptech.png",
    image: "/webthumbnails/techimages/startuptech1.png" 
  },
  { 
    name: "DevPro", 
    description: "Designed for development agencies. Highlights portfolios, services, and client success stories.", 
    rating: "(4.3/5)⭐⭐⭐⭐🌟", 
    appthumbnail: "appthumbnails/techimages/devpro.png",
    image: "/webthumbnails/techimages/devpro1.png" 
  },
  { 
    name: "QuantumTech", 
    description: "A futuristic tech website template. Focused on quantum computing and advanced technologies.", 
    rating: "(4.5/5)⭐⭐⭐⭐⭐🌟", 
    appthumbnail: "appthumbnails/techimages/quantumtech.png",
    image: "/webthumbnails/techimages/quantumtech1.png" 
  },
  { 
    name: "AIBase", 
    description: "A platform for AI tools and solutions. Includes demos, features, and client integration options.", 
    rating: "(4.4/5)⭐⭐⭐⭐🌟", 
    appthumbnail: "appthumbnails/techimages/aibase.png",
    image: "/webthumbnails/techimages/aibase1.png" 
  },
  { 
    name: "RoboLab", 
    description: "A robotics and automation website template. Showcases projects, prototypes, and lab facilities.", 
    rating: "(4.3/5)⭐⭐⭐⭐🌟", 
    appthumbnail: "appthumbnails/techimages/robolab.png",
    image: "/webthumbnails/techimages/robolab1.png" 
  },
  { 
    name: "CodeX", 
    description: "A software and app development template. Clean design for portfolios, services, and product launches.", 
    rating: "(4.4/5)⭐⭐⭐⭐🌟", 
    appthumbnail: "appthumbnails/techimages/codex.png",
    image: "/webthumbnails/techimages/codex1.png" 
  },
  { 
    name: "NetSolutions", 
    description: "A networking and IT services website. Features solutions, client success, and service requests.", 
    rating: "(4.5/5)⭐⭐⭐⭐⭐🌟", 
    appthumbnail: "appthumbnails/techimages/netsolutions.png",
    image: "/webthumbnails/techimages/netsolutions1.png" 
  },
  { 
    name: "SoftServe", 
    description: "A software company template with clean UI. Perfect for product showcases, pricing, and team info.", 
    rating: "(4.4/5)⭐⭐⭐⭐🌟", 
    appthumbnail: "appthumbnails/techimages/softserve.png",
    image: "/webthumbnails/techimages/softserve1.png" 
  },
  { 
    name: "AppWorks", 
    description: "A versatile website template for software launches. Highlights features, testimonials, and download links.", 
    rating: "(4.5/5)⭐⭐⭐⭐⭐🌟", 
    appthumbnail: "appthumbnails/techimages/appworks.png",
    image: "/webthumbnails/techimages/appworks1.png" 
  }
];

export default function TechnologyWebsite() {
  return (
    <>
      <Helmet>
        <title>Technology Website Templates | AI, Cloud & Developer UI Kits 2025</title>
        <meta
          name="description"
          content="Download Technology Website Templates for AI, Cloud, Data, and Developer platforms. Modern UI kits for startups, SaaS, and futuristic sites."
        />
        <meta
          name="keywords"
          content="Technology website templates, AI sites, cloud website UI, developer platform, SaaS sites, cyber security web design, data websites"
        />
        <meta property="og:title" content="Technology Website Templates 2025" />
        <meta
          property="og:description"
          content="Trending Technology Website Templates for AI, cloud, developer, and SaaS applications."
        />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="AppTemplateHub" />
        <meta name="author" content="AppTemplateHub Team" />
      </Helmet>

      <CategorySection
        category="Technology & SaaS Websites"
        templates={templates}
        color="from-cyan-500 to-blue-500"
      />
    </>
  );
}
