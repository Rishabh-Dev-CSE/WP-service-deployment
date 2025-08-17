import React from "react";
import { Helmet } from "react-helmet";
import CategorySection from "./CategorySection";

const templates = [
  { name: "TechPro", description: "A modern tech app template for software companies and startups. Showcases products, services, and solutions efficiently.", rating: "(4.6/5)⭐⭐⭐⭐⭐🌟", appthumbnail: "appthumbnails/techimages/techpro.png" },
  { name: "SaaSify", description: "Designed for SaaS platforms. Features subscription plans, dashboards, and client management tools.", rating: "(4.5/5)⭐⭐⭐⭐⭐🌟", appthumbnail: "appthumbnails/techimages/saasify.png" },
  { name: "AppLaunch", description: "A sleek app template for launching mobile or web applications. Highlights features, pricing, and downloads.", rating: "(4.4/5)⭐⭐⭐⭐🌟", appthumbnail: "appthumbnails/techimages/applaunch.png" },
  { name: "CodeHub", description: "A platform for developers and coding communities. Includes tutorials, code snippets, and collaboration tools.", rating: "(4.5/5)⭐⭐⭐⭐⭐🌟", appthumbnail: "appthumbnails/techimages/codehub.png" },
  { name: "CloudBase", description: "A cloud services app template. Showcases storage, computing, and cloud solutions with clarity.", rating: "(4.4/5)⭐⭐⭐⭐🌟", appthumbnail: "appthumbnails/techimages/cloudbase.png" },
  { name: "InnovateX", description: "Perfect for tech startups and innovation hubs. Highlights projects, products, and team expertise.", rating: "(4.5/5)⭐⭐⭐⭐⭐🌟", appthumbnail: "appthumbnails/techimages/innovatex.png" },
  { name: "WebSoft", description: "A software company app template. Displays apps, services, and client success stories effectively.", rating: "(4.3/5)⭐⭐⭐⭐🌟", appthumbnail: "appthumbnails/techimages/websoft.png" },
  { name: "ITWorld", description: "An IT service app template. Ideal for support, solutions, and consulting services.", rating: "(4.4/5)⭐⭐⭐⭐🌟", appthumbnail: "appthumbnails/techimages/itworld.png" },
  { name: "AIPro", description: "Designed for AI and machine learning products. Highlights features, demos, and integrations.", rating: "(4.5/5)⭐⭐⭐⭐⭐🌟", appthumbnail: "appthumbnails/techimages/aipro.png" },
  { name: "DataFlow", description: "A data analytics and business intelligence app template. Showcases dashboards, insights, and reports.", rating: "(4.4/5)⭐⭐⭐⭐🌟", appthumbnail: "appthumbnails/techimages/dataflow.png" },
  { name: "CyberSecure", description: "A cybersecurity-focused app. Offers security solutions, monitoring, and protection features.", rating: "(4.5/5)⭐⭐⭐⭐⭐🌟", appthumbnail: "appthumbnails/techimages/cybersecure.png" },
  { name: "StartupTech", description: "A startup-focused tech app template. Perfect for presenting innovative solutions and growth plans.", rating: "(4.4/5)⭐⭐⭐⭐🌟", appthumbnail: "appthumbnails/techimages/startuptech.png" },
  { name: "DevPro", description: "Designed for development agencies. Highlights portfolios, services, and client success stories.", rating: "(4.3/5)⭐⭐⭐⭐🌟", appthumbnail: "appthumbnails/techimages/devpro.png" },
  { name: "QuantumTech", description: "A futuristic tech app template. Focused on quantum computing and advanced technologies.", rating: "(4.5/5)⭐⭐⭐⭐⭐🌟", appthumbnail: "appthumbnails/techimages/quantumtech.png" },
  { name: "AIBase", description: "A platform for AI tools and solutions. Includes demos, features, and client integration options.", rating: "(4.4/5)⭐⭐⭐⭐🌟", appthumbnail: "appthumbnails/techimages/aibase.png" },
  { name: "RoboLab", description: "A robotics and automation app template. Showcases projects, prototypes, and lab facilities.", rating: "(4.3/5)⭐⭐⭐⭐🌟", appthumbnail: "appthumbnails/techimages/robolab.png" },
  { name: "CodeX", description: "A software and app development template. Clean design for portfolios, services, and product launches.", rating: "(4.4/5)⭐⭐⭐⭐🌟", appthumbnail: "appthumbnails/techimages/codex.png" },
  { name: "NetSolutions", description: "A networking and IT services app. Features solutions, client success, and service requests.", rating: "(4.5/5)⭐⭐⭐⭐⭐🌟", appthumbnail: "appthumbnails/techimages/netsolutions.png" },
  { name: "SoftServe", description: "A software company template with clean UI. Perfect for product showcases, pricing, and team info.", rating: "(4.4/5)⭐⭐⭐⭐🌟", appthumbnail: "appthumbnails/techimages/softserve.png" },
  { name: "AppWorks", description: "A versatile app template for software launches. Highlights features, testimonials, and download links.", rating: "(4.5/5)⭐⭐⭐⭐⭐🌟", appthumbnail: "appthumbnails/techimages/appworks.png" }
];

export default function TechnologyApps() {
  return (
    <>
      <Helmet>
        <title>Technology App Templates | AI, Cloud & Developer UI Kits 2025</title>
        <meta
          name="description"
          content="Download Technology App Templates for AI, Cloud, Data, and Developer platforms. Modern UI kits for startups, SaaS, and futuristic apps."
        />
        <meta
          name="keywords"
          content="Technology app templates, AI apps, cloud app UI, developer platform, SaaS apps, cyber security app design, data apps"
        />
        <meta property="og:title" content="Technology App Templates 2025" />
        <meta
          property="og:description"
          content="Trending Technology App Templates for AI, cloud, developer, and SaaS applications."
        />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="AppTemplateHub" />
        <meta name="author" content="AppTemplateHub Team" />
      </Helmet>

      <CategorySection
        category="Technology & SaaS Apps"
        templates={templates}
        color="from-cyan-500 to-blue-500"
      />
    </>
  );
}
