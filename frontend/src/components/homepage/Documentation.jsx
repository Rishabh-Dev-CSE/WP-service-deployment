import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet";
import {
  FaCertificate,
  FaAward,
  FaShieldAlt,
  FaFileAlt,
  FaChartLine,
  FaUsers,
  FaCheckCircle,
  FaChevronDown,
  FaChevronUp,
  FaStar,
  FaMedal,
  FaSearch,
  FaCog,
  FaLink,
  FaExternalLinkAlt
} from "react-icons/fa";

const DocumentationComponent = () => {
  const [activeTab, setActiveTab] = useState("certifications");
  const [expandedItem, setExpandedItem] = useState(null);

  // Data for different sections
  const sections = {
    certifications: [
      {
        id: 1,
        title: "Google Premier Partner",
        issuer: "Google LLC",
        date: "2024-2025",
        description: "Awarded to top 3% of Google partners demonstrating exceptional performance in advertising and client satisfaction.",
        icon: <FaCertificate className="text-blue-400" />,
        verification: "#",
      },
      {
        id: 2,
        title: "Ramavi PVT LTD.",
        issuer: "Ramavi",
        date: "2021-2022",
        description: "Certified in inbound marketing, sales, and service with demonstrated expertise in HubSpot's platform.",
        icon: <FaCertificate className="text-orange-400" />,
        verification: "#",
      },
      {
        id: 3,
        title: "The Ameyaa Tech ",
        issuer: "The ameyaa tech ",
        date: "2025-P",
        description: "Recognized for expertise in cloud business applications and demonstrating the highest level of skill and commitment.",
        icon: <FaCertificate className="text-purple-400" />,
        verification: "#",
      }
    ],
    awards: [
      {
        id: 1,
        title: "Best Web Development Agency ",
        issuer: "DesignRush",
        date: "December 2022",
        description: "Recognized as a top web development agency for innovative solutions and client satisfaction.",
        icon: <FaAward className="text-yellow-400" />,
        verification: "#"
      },
      {
        id: 2,
        title: "Excellence in UX Design",
        issuer: "AWWWARDS",
        date: "October 2023",
        description: "Awarded for outstanding user experience design in enterprise applications.",
        icon: <FaAward className="text-teal-400" />,
        verification: "#"
      }
    ],
    caseStudies: [
      {
        id: 1,
        title: "E-commerce Platform Transformation",
        client: "Fashion Retailer",
        results: "75% increase in conversion rate",
        description: "Complete redesign of shopping experience resulting in significant revenue growth.",
        icon: <FaChartLine className="text-green-400" />,
        link: "#"
      },
      {
        id: 2,
        title: "SaaS Product UI/UX Overhaul",
        client: "B2B Software Company",
        results: "41% reduction in support tickets",
        description: "Streamlined complex workflows and improved user onboarding experience.",
        icon: <FaChartLine className="text-indigo-400" />,
        link: "#"
      }
    ],
    seoStrategy: [
      {
        id: 1,
        title: "Keyword Research",
        description: "Identify industry-specific and long-tail keywords using tools like Google Keyword Planner, Ahrefs, or SEMrush.",
        icon: <FaSearch className="text-cyan-400" />
      },
      {
        id: 2,
        title: "On-Page SEO Optimization",
        description: "Craft keyword-rich titles, meta descriptions, and publish engaging content with visuals, infographics, and videos.",
        icon: <FaFileAlt className="text-green-400" />
      },
      {
        id: 3,
        title: "Technical SEO",
        description: "Optimize website speed (<3s), ensure mobile responsiveness, create XML sitemap, and improve Core Web Vitals.",
        icon: <FaCog className="text-purple-400" />
      },
      {
        id: 4,
        title: "Off-Page SEO",
        description: "Build high-quality backlinks, guest post on industry blogs, and strengthen social media presence.",
        icon: <FaLink className="text-yellow-400" />
      },
      {
        id: 5,
        title: "Content Marketing",
        description: "Publish regular blogs, host webinars, showcase client case studies, and repurpose content across formats.",
        icon: <FaChartLine className="text-blue-400" />
      },
      {
        id: 6,
        title: "Competitive Analysis",
        description: "Monitor competitor strategies, backlink sources, and highlight Velorax’s unique selling proposition (USP).",
        icon: <FaExternalLinkAlt className="text-red-400" />
      },
      {
        id: 7,
        title: "Client Engagement & Retention",
        description: "Enhance customer support, collect regular feedback, and run segmented email campaigns.",
        icon: <FaUsers className="text-indigo-400" />
      }
    ]
  };

  const stats = [
    { value: "98%", label: "Client Satisfaction", icon: <FaStar className="text-yellow-400" /> },
    { value: "250+", label: "Projects Completed", icon: <FaCheckCircle className="text-green-400" /> },
    { value: "5+", label: "Industry Awards", icon: <FaMedal className="text-amber-500" /> },
    { value: "7", label: "Years Experience", icon: <FaUsers className="text-blue-400" /> }
  ];

  const toggleExpand = (id) => {
    if (expandedItem === id) {
      setExpandedItem(null);
    } else {
      setExpandedItem(id);
    }
  };

  return (
    <section className="w-full py-20 bg-gradient-to-br from-[#0f0c29] via-[#1a1647] to-[#24243e] text-white relative overflow-hidden">
      {/* SEO Helmet */}
      <Helmet>
        <title>Velorax | Trust, SEO & Client Success</title>
        <meta
          name="description"
          content="Discover Velorax’s certifications, awards, case studies, and SEO strategies that drive digital marketing success."
        />
        <meta
          name="keywords"
          content="SEO strategy, SaaS marketing, digital marketing, Velorax, certifications, case studies, 
    search engine optimization, content marketing, backlink strategy, Google ranking, 
    PPC advertising, SEM, keyword research, on-page SEO, off-page SEO, technical SEO, 
    website speed optimization, mobile SEO, XML sitemap, local SEO, international SEO, 
    social media marketing, influencer marketing, video marketing, ecommerce SEO, B2B marketing, 
    SaaS growth strategy, customer acquisition, client retention, email marketing, 
    digital transformation, user experience optimization, web development agency, 
    SEO best practices, organic traffic growth, link building, Google analytics, 
    SERP optimization, competitive analysis, marketing automation, inbound marketing, 
    HubSpot certified, Google premier partner, content SEO, long-tail keywords, 
    SaaS SEO strategy, growth hacking, performance marketing, SEO audits, 
    client success stories, case studies marketing, trust and credibility"
        />
        <meta property="og:title" content="Velorax | Trust & SEO Expertise" />
        <meta
          property="og:description"
          content="Explore why clients trust Velorax – certifications, awards, case studies, and SEO excellence."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.velorax.com/" />
        <meta property="og:image" content="https://www.velorax.com/seo-preview.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Velorax | Trust & SEO Expertise" />
        <meta
          name="twitter:description"
          content="Explore why clients trust Velorax – certifications, awards, case studies, and SEO excellence."
        />
        <meta name="twitter:image" content="https://www.velorax.com/seo-preview.jpg" />
      </Helmet>


      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-cyan-400 text-sm font-medium mb-6">
            <FaShieldAlt className="mr-2" /> Trust & Credentials
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Clients Trust Us</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Our commitment to excellence is validated by industry recognition, client success stories, and proven results.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          {stats.map((stat, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
              <div className="flex justify-center mb-3">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold mb-1">{stat.value}</div>
              <div className="text-sm text-gray-300">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Tabs */}
        <div className="mb-10">
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {Object.keys(sections).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${activeTab === tab
                    ? "bg-cyan-500 text-white"
                    : "bg-white/5 text-gray-300 hover:bg-white/10"
                  }`}
              >
                {tab === "certifications" && <FaCertificate className="inline mr-2" />}
                {tab === "awards" && <FaAward className="inline mr-2" />}
                {tab === "caseStudies" && <FaFileAlt className="inline mr-2" />}
                {tab === "seoStrategy" && <FaSearch className="inline mr-2" />}
                {tab === "testimonials" && <FaUsers className="inline mr-2" />}
                {tab.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase())}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="grid gap-4"
              >
                {sections[activeTab].map((item) => (
                  <div
                    key={item.id}
                    className="bg-gradient-to-r from-[#16132b] to-[#1a1738] rounded-xl p-5 border border-white/10 overflow-hidden"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-4">
                        <div className="mt-1 p-2 rounded-lg bg-white/5">
                          {item.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                          {(item.issuer || item.client || item.results) && (
                            <p className="text-sm text-gray-300 mb-2">
                              {item.issuer || item.client} {item.date ? `• ${item.date}` : item.results ? `• ${item.results}` : ""}
                            </p>
                          )}
                          <AnimatePresence>
                            {expandedItem === item.id && (
                              <motion.p
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                className="text-sm text-gray-400 mb-3"
                              >
                                {item.description}
                              </motion.p>
                            )}
                          </AnimatePresence>
                        </div>
                      </div>
                      <button
                        onClick={() => toggleExpand(item.id)}
                        className="p-2 text-gray-400 hover:text-white transition-colors"
                      >
                        {expandedItem === item.id ? <FaChevronUp /> : <FaChevronDown />}
                      </button>
                    </div>
                    {item.verification || item.link ? (
                      <div className="flex justify-end mt-4 space-x-3">
                        {item.verification && (
                          <a
                            href={item.verification}
                            className="text-sm px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                          >
                            Verify Credential
                          </a>
                        )}
                        {item.link && (
                          <a
                            href={item.link}
                            className="text-sm px-3 py-1.5 rounded-lg bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-400 transition-colors"
                          >
                            View Case Study
                          </a>
                        )}
                      </div>
                    ) : null}
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DocumentationComponent;
