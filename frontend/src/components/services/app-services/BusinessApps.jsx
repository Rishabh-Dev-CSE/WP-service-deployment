import React from "react";
import { Helmet } from "react-helmet";
import CategorySection from "./CategorySection";

const templates = [
  { name: "CorporatePro", description: "Professional corporate app template for managing company operations. Includes dashboards, team management, and reporting tools. Ideal for medium to large enterprises.", rating: "(4.5/5)⭐⭐⭐⭐⭐🌟", appthumbnail: "appthumbnails/business/corporatepro.png" },
  { name: "BizConsult", description: "Consulting-focused app to manage client projects and communication. Tracks tasks, meetings, and deliverables efficiently. Perfect for business consultants and agencies.", rating: "(4.4/5)⭐⭐⭐⭐🌟", appthumbnail: "appthumbnails/business/bizconsult.png" },
  { name: "StartupX", description: "Startup management app designed for team collaboration and project tracking. Includes milestone planning, reporting, and investor updates. Ideal for startups and small businesses.", rating: "(4.5/5)⭐⭐⭐⭐⭐🌟", appthumbnail: "appthumbnails/business/startupx.png" },
  { name: "AgencyEdge", description: "Agency app template for creative and marketing firms. Manages projects, clients, and campaigns seamlessly. Great for agencies and freelancers.", rating: "(4.4/5)⭐⭐⭐⭐🌟", appthumbnail: "appthumbnails/business/agencyedge.png" },
  { name: "EliteCorp", description: "Corporate management app with tools for HR, finance, and operations. Supports employee tracking, reporting, and internal communication. Perfect for professional organizations.", rating: "(4.5/5)⭐⭐⭐⭐⭐🌟", appthumbnail: "appthumbnails/business/elitecorp.png" },
  { name: "ConsultHub", description: "Client consultation app allowing booking, communication, and progress tracking. Supports multiple projects and team collaboration. Ideal for consulting agencies and professionals.", rating: "(4.4/5)⭐⭐⭐⭐🌟", appthumbnail: "appthumbnails/business/consulthub.png" },
  { name: "VentureBoost", description: "App template for venture firms to track investments and startups. Features dashboards, analytics, and reporting tools. Great for investors and venture capitalists.", rating: "(4.5/5)⭐⭐⭐⭐⭐🌟", appthumbnail: "appthumbnails/business/ventureboost.png" },
  { name: "OfficeSpace", description: "Office management app for workspace booking and team coordination. Handles room scheduling, resources, and internal communication. Ideal for corporate offices.", rating: "(4.4/5)⭐⭐⭐⭐🌟", appthumbnail: "appthumbnails/business/officespace.png" },
  { name: "EnterprisePro", description: "Enterprise management app supporting project tracking and reporting. Includes dashboards, analytics, and team collaboration features. Perfect for large organizations.", rating: "(4.5/5)⭐⭐⭐⭐⭐🌟", appthumbnail: "appthumbnails/business/enterprisepro.png" },
  { name: "BuildIt", description: "Project and business planning app template for construction or corporate projects. Tracks progress, tasks, and resource allocation. Ideal for project managers and teams.", rating: "(4.4/5)⭐⭐⭐⭐🌟", appthumbnail: "appthumbnails/business/buildit.png" },
  { name: "StrategyPro", description: "Strategic planning app to track business goals and key performance metrics. Includes dashboards, timelines, and reporting. Perfect for management teams and consultants.", rating: "(4.5/5)⭐⭐⭐⭐⭐🌟", appthumbnail: "appthumbnails/business/strategypro.png" },
  { name: "FirmX", description: "Corporate firm app managing clients, projects, and internal communication. Supports collaboration and document sharing. Ideal for professional service firms.", rating: "(4.4/5)⭐⭐⭐⭐🌟", appthumbnail: "appthumbnails/business/firmx.png" },
  { name: "GrowBiz", description: "Business growth app focused on sales, marketing, and client engagement. Tracks campaigns, leads, and performance metrics. Great for small businesses and startups.", rating: "(4.5/5)⭐⭐⭐⭐⭐🌟", appthumbnail: "appthumbnails/business/growbiz.png" },
  { name: "BusinessFlow", description: "Workflow and operations management app for businesses. Handles project tracking, team collaboration, and reporting. Perfect for companies aiming to streamline processes.", rating: "(4.4/5)⭐⭐⭐⭐🌟", appthumbnail: "appthumbnails/business/businessflow.png" },
  { name: "BoardRoom", description: "Executive-level app for board meetings and corporate governance. Includes agendas, minutes, and document sharing. Ideal for directors and senior management.", rating: "(4.5/5)⭐⭐⭐⭐⭐🌟", appthumbnail: "appthumbnails/business/boardroom.png" },
  { name: "PrimeCorp", description: "Corporate management app with tools for HR, finance, and operations. Supports employee tracking, reporting, and internal communication. Perfect for professional organizations.", rating: "(4.4/5)⭐⭐⭐⭐🌟", appthumbnail: "appthumbnails/business/primecorp.png" },
  { name: "StartMate", description: "Startup companion app for project management and team collaboration. Includes milestones, reporting, and task tracking. Ideal for early-stage startups.", rating: "(4.5/5)⭐⭐⭐⭐⭐🌟", appthumbnail: "appthumbnails/business/startmate.png" },
  { name: "LeadGen", description: "Lead generation and CRM-focused app template. Tracks prospects, manages campaigns, and automates follow-ups. Perfect for sales teams and marketers.", rating: "(4.4/5)⭐⭐⭐⭐🌟", appthumbnail: "appthumbnails/business/leadgen.png" },
  { name: "BizLaunch", description: "Business launch app for planning, managing, and tracking new ventures. Supports timelines, milestones, and analytics. Ideal for startups and entrepreneurs.", rating: "(4.5/5)⭐⭐⭐⭐⭐🌟", appthumbnail: "appthumbnails/business/bizlaunch.png" },
  { name: "VisionCorp", description: "Corporate strategy app helping businesses visualize goals and track progress. Includes dashboards, analytics, and reporting tools. Perfect for management teams and executives.", rating: "(4.4/5)⭐⭐⭐⭐🌟", appthumbnail: "appthumbnails/business/visioncorp.png" }
];


export default function BusinessApps() {
  return (
    <>
      <Helmet>
        <title>Business App Templates | Enterprise & Startup UI Kits 2025</title>
        <meta
          name="description"
          content="Download trending Business App Templates for startups, enterprises, workflow, task management, and client collaboration. Modern UI/UX kits for 2025."
        />
        <meta
          name="keywords"
          content="Business app templates, enterprise apps, office app UI, workflow manager, startup UI kit, client management apps, productivity tools"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Business App Templates 2025" />
        <meta
          property="og:description"
          content="Professional Business & Enterprise App Templates for startups and companies."
        />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="AppTemplateHub" />
        <meta name="author" content="AppTemplateHub Team" />
      </Helmet>

      <CategorySection
        category="Business & Enterprise Apps"
        templates={templates}
        color="from-blue-600 to-cyan-500"
      />
    </>
  );
}
