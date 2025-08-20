import React from "react";
import { Helmet } from "react-helmet";
import CategorySection from "./CategorySection";

const templates = [
  { 
    name: "CorporatePro", 
    description: "Professional corporate website template for managing company presence. Includes dashboards, team showcase, and service pages. Ideal for medium to large enterprises.", 
    rating: "(4.5/5)⭐⭐⭐⭐⭐🌟", 
    appthumbnail: "appthumbnails/business/corporatepro.png", 
    image: "/webthumbnails/business/corporatepro1.png" 
  },
  { 
    name: "BizConsult", 
    description: "Consulting-focused website to manage client projects and communication. Tracks tasks, meetings, and deliverables efficiently. Perfect for business consultants and agencies.", 
    rating: "(4.4/5)⭐⭐⭐⭐🌟", 
    appthumbnail: "appthumbnails/business/bizconsult.png", 
    image: "/webthumbnails/business/bizconsult1.png" 
  },
  { 
    name: "StartupX", 
    description: "Startup website designed for team collaboration and project showcase. Includes milestone planning, reporting, and investor updates. Ideal for startups and small businesses.", 
    rating: "(4.5/5)⭐⭐⭐⭐⭐🌟", 
    appthumbnail: "appthumbnails/business/startupx.png", 
    image: "/webthumbnails/business/startupx1.png" 
  },
  { 
    name: "AgencyEdge", 
    description: "Agency website template for creative and marketing firms. Manages projects, clients, and campaigns seamlessly. Great for agencies and freelancers.", 
    rating: "(4.4/5)⭐⭐⭐⭐🌟", 
    appthumbnail: "appthumbnails/business/agencyedge.png", 
    image: "/webthumbnails/business/agencyedge1.png" 
  },
  { 
    name: "EliteCorp", 
    description: "Corporate management website with tools for HR, finance, and operations. Supports employee tracking, reporting, and internal communication. Perfect for professional organizations.", 
    rating: "(4.5/5)⭐⭐⭐⭐⭐🌟", 
    appthumbnail: "appthumbnails/business/elitecorp.png", 
    image: "/webthumbnails/business/elitecorp1.png" 
  },
  { 
    name: "ConsultHub", 
    description: "Client consultation website allowing booking, communication, and progress tracking. Supports multiple projects and team collaboration. Ideal for consulting agencies and professionals.", 
    rating: "(4.4/5)⭐⭐⭐⭐🌟", 
    appthumbnail: "appthumbnails/business/consulthub.png", 
    image: "/webthumbnails/business/consulthub1.png" 
  },
  { 
    name: "VentureBoost", 
    description: "Website template for venture firms to showcase investments and startups. Features dashboards, analytics, and reporting tools. Great for investors and venture capitalists.", 
    rating: "(4.5/5)⭐⭐⭐⭐⭐🌟", 
    appthumbnail: "appthumbnails/business/ventureboost.png", 
    image: "/webthumbnails/business/ventureboost1.png" 
  },
  { 
    name: "OfficeSpace", 
    description: "Office management website for workspace booking and team coordination. Handles room scheduling, resources, and internal communication. Ideal for corporate offices.", 
    rating: "(4.4/5)⭐⭐⭐⭐🌟", 
    appthumbnail: "appthumbnails/business/officespace.png", 
    image: "/webthumbnails/business/officespace1.png" 
  },
  { 
    name: "EnterprisePro", 
    description: "Enterprise management website supporting project tracking and reporting. Includes dashboards, analytics, and team collaboration features. Perfect for large organizations.", 
    rating: "(4.5/5)⭐⭐⭐⭐⭐🌟", 
    appthumbnail: "appthumbnails/business/enterprisepro.png", 
    image: "/webthumbnails/business/enterprisepro1.png" 
  },
  { 
    name: "BuildIt", 
    description: "Project and business planning website template for construction or corporate projects. Tracks progress, tasks, and resource allocation. Ideal for project managers and teams.", 
    rating: "(4.4/5)⭐⭐⭐⭐🌟", 
    appthumbnail: "appthumbnails/business/buildit.png", 
    image: "/webthumbnails/business/buildit1.png" 
  }
];

export default function BusinessWebsites() {
  return (
    <>
      <Helmet>
        <title>Business Website Templates | Enterprise & Startup UI Kits 2025</title>
        <meta
          name="description"
          content="Download trending Business Website Templates for startups, enterprises, workflow, task management, and client collaboration. Modern UI/UX kits for 2025."
        />
        <meta
          name="keywords"
          content="Business website templates, enterprise websites, office website UI, workflow manager, startup UI kit, client management websites, productivity tools"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Business Website Templates 2025" />
        <meta
          property="og:description"
          content="Professional Business & Enterprise Website Templates for startups and companies."
        />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="AppTemplateHub" />
        <meta name="author" content="AppTemplateHub Team" />
      </Helmet>

      <CategorySection
        category="Business & Enterprise Websites"
        templates={templates}
        color="from-blue-600 to-cyan-500"
      />
    </>
  );
}
