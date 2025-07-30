import React, { useState, useEffect } from 'react';
import ServicesPageSidebar from '../servicespage/ServicesPageSidebar';
// import './index.css'; // If you have global styles or Tailwind directives here

const SEOServicePage = () => {
  const [activeKeywordTab, setActiveKeywordTab] = useState('tab-core');
  const [openTechAuditItem, setOpenTechAuditItem] = useState(null);

  // --- Navigation Highlighting on Scroll (Optional, but good for UX) ---
  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px', // Adjust threshold to make active link change in middle of section
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === entry.target.id) {
              link.classList.add('active');
            }
          });
        }
      });
    }, observerOptions);

    sections.forEach(section => {
      observer.observe(section);
    });

    // Cleanup observer on component unmount
    return () => {
      sections.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);

  const handleKeywordTabClick = (tabId) => {
    setActiveKeywordTab(tabId);
  };

  const handleTechAuditToggle = (itemIndex) => {
    setOpenTechAuditItem(openTechAuditItem === itemIndex ? null : itemIndex);
  };

  const techAuditItems = [
    {
      title: '🏗️ Site Structure & Schema Markup',
      details: [
        'Optimizing heading hierarchies (H1, H2, H3s).',
        'Crafting unique, keyword-rich title tags and meta descriptions.',
        'Implementing relevant schema markup (Organization, FAQ, Article) for rich snippets.',
        'Using canonical tags to prevent duplicate content issues.',
      ],
    },
    {
      title: '⚡ Core Web Vitals & Mobile Responsiveness',
      details: [
        'Improving page load speed (LCP) by optimizing images, scripts, and caching.',
        'Ensuring seamless mobile-friendliness across all devices.',
        'Enforcing HTTPS across all pages for security and SEO benefits.',
      ],
    },
    {
      title: '🕸️ Crawlability & Indexing Management',
      details: [
        'Verifying search engine bots can crawl all key pages (robots.txt, sitemap).',
        'Monitoring for and resolving HTTP errors (4xx/5xx).',
        'Maintaining an up-to-date XML sitemap for efficient indexing.',
        'Strategically using "noindex" for irrelevant or private sections.',
      ],
    },
  ];

  return (
    <div className="antialiased">
      {/* Inline styles for custom effects and overrides.
          It's generally better to use a dedicated CSS file (like index.css)
          for larger projects, but for a single component, this works. */}
      <style>
        {`
        body {
            font-family: 'Inter', sans-serif;
            background-color: #f0f4f8; /* A slightly deeper light neutral for more depth */
            color: #1e293b; /* slate-800 */
        }
        .section-card {
            background-color: white;
            border-radius: 1rem; /* Slightly more rounded */
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05); /* Stronger shadow */
            transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
        }
        .section-card:hover {
            transform: translateY(-5px); /* Subtle lift effect */
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
        }
        .nav-link {
            transition: color 0.2s ease-in-out, border-color 0.2s ease-in-out;
        }
        .nav-link.active {
            color: #ffffff; /* White for active link in header */
            border-bottom-color: #ffffff;
            font-weight: 600; /* Make active link bolder */
        }
        .tab-button {
            transition: all 0.2s ease-in-out;
            border-bottom-width: 2px;
            border-bottom-color: transparent;
        }
        .tab-button.active {
            background-color: #2563eb; /* blue-600 */
            color: white;
            border-radius: 0.5rem; /* Rounded tabs */
            border-bottom-color: #2563eb; /* Match border color */
        }
        .tab-button:not(.active):hover {
            color: #2563eb; /* blue-600 */
            border-bottom-color: #bfdbfe; /* blue-200 */
        }
        .tech-audit-item button {
            transition: background-color 0.2s ease-in-out;
        }
        .tech-audit-item button:hover {
            background-color: #f1f5f9; /* slate-100 */
        }
        `}
      </style>

      {/* Main Content */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
       <ServicesPageSidebar />
        {/* Hero Section */}
        <section id="hero" className="text-center mb-20 py-16 bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-inner">
          <h2 className="text-5xl md:text-6xl font-extrabold text-slate-900 leading-tight mb-6">Unlock Your Digital Potential. <br />Comprehensive SEO Services.</h2>
          <p className="mt-4 max-w-3xl mx-auto text-xl text-slate-700 leading-relaxed">Boost your online visibility, drive organic traffic, and achieve sustainable growth with our expert Search Engine Optimization solutions.</p>
          <a href="#services" className="mt-10 inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg transform hover:scale-105 transition-all duration-300">Explore Services</a>
        </section>

        {/* Services Section */}
        <section id="services" className="scroll-mt-24 mb-20">
          <h3 className="text-4xl font-extrabold text-slate-900 text-center mb-12">Our Core SEO Services</h3>
          <div className="space-y-16">

            {/* 1. In-Depth Keyword Strategy */}
            <div className="section-card p-8 md:p-10">
              <h4 className="text-3xl font-bold text-slate-900 mb-4">1. In-Depth Keyword Strategy</h4>
              <p className="mt-2 text-lg text-slate-600">Our keyword research goes beyond basic terms to uncover high-value opportunities. We identify keywords that align with user intent, ensuring your content reaches the right audience at every stage of their journey.</p>

              <div className="mt-8">
                <div className="flex justify-center border-b border-gray-200 pb-2">
                  <nav id="keyword-tabs" className="flex space-x-3 sm:space-x-4" aria-label="Tabs">
                    <button
                      data-tab="tab-core"
                      className={`tab-button flex-1 text-center py-3 px-4 font-semibold text-sm rounded-lg text-gray-700 hover:text-blue-600 ${activeKeywordTab === 'tab-core' ? 'active' : ''}`}
                      onClick={() => handleKeywordTabClick('tab-core')}
                    >
                      Core & Niche Keywords
                    </button>
                    <button
                      data-tab="tab-long-tail"
                      className={`tab-button flex-1 text-center py-3 px-4 font-semibold text-sm rounded-lg text-gray-700 hover:text-blue-600 ${activeKeywordTab === 'tab-long-tail' ? 'active' : ''}`}
                      onClick={() => handleKeywordTabClick('tab-long-tail')}
                    >
                      Long-Tail & Conversational
                    </button>
                    <button
                      data-tab="tab-local"
                      className={`tab-button flex-1 text-center py-3 px-4 font-semibold text-sm rounded-lg text-gray-700 hover:text-blue-600 ${activeKeywordTab === 'tab-local' ? 'active' : ''}`}
                      onClick={() => handleKeywordTabClick('tab-local')}
                    >
                      Local & Regional Focus
                    </button>
                  </nav>
                </div>
                <div id="keyword-content" className="mt-8 bg-slate-50 p-6 rounded-lg border border-gray-100">
                  {activeKeywordTab === 'tab-core' && (
                    <div id="tab-core" className="tab-content">
                      <h5 className="font-bold text-xl text-slate-800 mb-3">What we do:</h5>
                      <p className="text-slate-700 leading-relaxed">We identify foundational terms and high-value niche keywords relevant to your industry, analyzing competitor rankings to find untapped opportunities and establish your authority.</p>
                      <h5 className="font-bold text-xl text-slate-800 mt-6 mb-3">Key aspects:</h5>
                      <ul className="list-disc list-inside mt-2 space-y-2 text-slate-700">
                        <li><span className="font-mono bg-blue-50 px-3 py-1 rounded-md text-blue-700 text-sm">Industry-specific solutions</span></li>
                        <li><span className="font-mono bg-blue-50 px-3 py-1 rounded-md text-blue-700 text-sm">Service-based queries</span></li>
                        <li><span className="font-mono bg-blue-50 px-3 py-1 rounded-md text-blue-700 text-sm">Competitive gap analysis</span></li>
                      </ul>
                    </div>
                  )}
                  {activeKeywordTab === 'tab-long-tail' && (
                    <div id="tab-long-tail" className="tab-content">
                      <h5 className="font-bold text-xl text-slate-800 mb-3">What we do:</h5>
                      <p className="text-slate-700 leading-relaxed">We optimize your content for conversational, question-based queries, ideal for AI-driven search and voice assistants, capturing users with very specific needs.</p>
                      <h5 className="font-bold text-xl text-slate-800 mt-6 mb-3">Key aspects:</h5>
                      <ul className="list-disc list-inside mt-2 space-y-2 text-slate-700">
                        <li><span className="font-mono bg-blue-50 px-3 py-1 rounded-md text-blue-700 text-sm">"How-to" questions</span></li>
                        <li><span className="font-mono bg-blue-50 px-3 py-1 rounded-md text-blue-700 text-sm">Problem-solution phrases</span></li>
                        <li><span className="font-mono bg-blue-50 px-3 py-1 rounded-md text-blue-700 text-sm">Natural language patterns</span></li>
                      </ul>
                    </div>
                  )}
                  {activeKeywordTab === 'tab-local' && (
                    <div id="tab-local" className="tab-content">
                      <h5 className="font-bold text-xl text-slate-800 mb-3">What we do:</h5>
                      <p className="text-slate-700 leading-relaxed">We target specific geographic audiences by including geo-modifiers and developing content in regional languages to tap into underserved local markets.</p>
                      <h5 className="font-bold text-xl text-slate-800 mt-6 mb-3">Key aspects:</h5>
                      <ul className="list-disc list-inside mt-2 space-y-2 text-slate-700">
                        <li><span className="font-mono bg-blue-50 px-3 py-1 rounded-md text-blue-700 text-sm">"Near me" searches</span></li>
                        <li><span className="font-mono bg-blue-50 px-3 py-1 rounded-md text-blue-700 text-sm">City/region specific terms</span></li>
                        <li><span className="font-mono bg-blue-50 px-3 py-1 rounded-md text-blue-700 text-sm">Multilingual content strategies</span></li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* 2. Technical SEO Optimization */}
            <div className="section-card p-8 md:p-10">
              <h4 className="text-3xl font-bold text-slate-900 mb-4">2. Technical SEO Optimization</h4>
              <p className="mt-2 text-lg text-slate-600">A flawless technical foundation is paramount for search engine visibility. Our audit ensures your website is fast, accessible, and perfectly structured to meet search engine requirements.</p>
              <div className="mt-8 space-y-5">
                {techAuditItems.map((item, index) => (
                  <div key={index} className="tech-audit-item border border-gray-200 rounded-xl overflow-hidden">
                    <button
                      className="w-full text-left p-5 flex justify-between items-center bg-white hover:bg-slate-50 transition-colors duration-200"
                      onClick={() => handleTechAuditToggle(index)}
                    >
                      <span className="font-semibold text-xl text-slate-800">{item.title}</span>
                      <span className={`transform transition-transform duration-300 text-blue-600 text-2xl ${openTechAuditItem === index ? 'rotate-180' : 'rotate-0'}`}>▼</span>
                    </button>
                    <div className={`tech-audit-content ${openTechAuditItem === index ? '' : 'hidden'} p-5 border-t border-gray-100 bg-slate-50`}>
                      <ul className="list-disc list-inside space-y-2 text-slate-700 leading-relaxed">
                        {item.details.map((detail, detailIndex) => (
                          <li key={detailIndex}>{detail}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 3. AI Search & Featured Snippet Optimization */}
            <div className="section-card p-8 md:p-10">
              <h4 className="text-3xl font-bold text-slate-900 mb-4">3. AI Search & Featured Snippet Optimization</h4>
              <p className="mt-2 text-lg text-slate-600">As search evolves towards AI-driven answers and voice queries, we optimize your content to be featured prominently, dramatically increasing your visibility and authority.</p>
              <div className="mt-8 grid md:grid-cols-3 gap-8 text-center">
                <div className="p-6 border border-gray-200 rounded-xl bg-slate-50 flex flex-col items-center">
                  <div className="text-5xl mb-4 text-blue-600">💬</div>
                  <h5 className="font-bold text-xl text-slate-800 mb-2">Conversational Content</h5>
                  <p className="text-base text-slate-700 leading-relaxed">We structure content in a clear Q&A format, directly answering user queries in natural language, perfect for AI overviews and voice search.</p>
                </div>
                <div className="p-6 border border-gray-200 rounded-xl bg-slate-50 flex flex-col items-center">
                  <div className="text-5xl mb-4 text-blue-600">📋</div>
                  <h5 className="font-bold text-xl text-slate-800 mb-2">Structured Answers</h5>
                  <p className="text-base text-slate-700 leading-relaxed">Utilizing bullet points, numbered lists, and tables, we organize information for easy consumption and to trigger featured snippets.</p>
                </div>
                <div className="p-6 border border-gray-200 rounded-xl bg-slate-50 flex flex-col items-center">
                  <div className="text-5xl mb-4 text-blue-600">📱</div>
                  <h5 className="font-bold text-xl text-slate-800 mb-2">Voice & AI Formatting</h5>
                  <p className="text-base text-slate-700 leading-relaxed">We ensure fast-loading, mobile-friendly pages and integrate local modifiers for voice search, aiming for diverse source citations in AI results.</p>
                </div>
              </div>
            </div>

            {/* 4. E-E-A-T & Authority Building */}
            <div className="section-card p-8 md:p-10">
              <h4 className="text-3xl font-bold text-slate-900 mb-4">4. E-E-A-T & Authority Building</h4>
              <p className="mt-2 text-lg text-slate-600">For any business, especially in sensitive industries, demonstrating Experience, Expertise, Authoritativeness, and Trustworthiness (E-E-A-T) is crucial. We build and showcase these signals to enhance your online reputation and ranking.</p>
              <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="p-6 border border-gray-200 rounded-xl bg-slate-50">
                  <h5 className="font-bold text-xl text-slate-800 mb-2">Experience</h5>
                  <p className="text-base text-slate-700 leading-relaxed">Showcasing your hands-on knowledge through detailed case studies, original research, and content that demonstrates real-world problem-solving.</p>
                </div>
                <div className="p-6 border border-gray-200 rounded-xl bg-slate-50">
                  <h5 className="font-bold text-xl text-slate-800 mb-2">Expertise</h5>
                  <p className="text-base text-slate-700 leading-relaxed">Featuring expert author bylines with professional bios and publishing in-depth white papers on complex industry topics.</p>
                </div>
                <div className="p-6 border border-gray-200 rounded-xl bg-slate-50">
                  <h5 className="font-bold text-xl text-slate-800 mb-2">Authoritativeness</h5>
                  <p className="text-base text-slate-700 leading-relaxed">Acquiring high-quality backlinks and media mentions from reputable industry publications, and citing authoritative sources in your content.</p>
                </div>
                <div className="p-6 border border-gray-200 rounded-xl bg-slate-50">
                  <h5 className="font-bold text-xl text-slate-800 mb-2">Trustworthiness</h5>
                  <p className="text-base text-slate-700 leading-relaxed">Implementing site-wide HTTPS, clearly displaying contact info, privacy policies, and any industry awards or certifications to ensure transparency.</p>
                </div>
              </div>
            </div>

            {/* 5. Competitive Landscape Analysis */}
            <div className="section-card p-8 md:p-10">
              <h4 className="text-3xl font-bold text-slate-900 mb-4">5. Competitive Landscape Analysis</h4>
              <p className="mt-2 text-lg text-slate-600">Understanding your competitors is key to carving out your unique space. We conduct in-depth competitive analysis to identify their strengths, weaknesses, and untapped opportunities in your market.</p>
              <div className="mt-8 bg-slate-50 p-6 rounded-lg border border-gray-100">
                <h5 className="font-bold text-xl text-slate-800 mb-3">How we analyze:</h5>
                <p className="text-slate-700 leading-relaxed">We benchmark your digital presence against key players in your industry. This includes analyzing their content strategies, technical SEO, brand authority, and niche focus to pinpoint areas where you can outperform them.</p>
                <h5 className="font-bold text-xl text-slate-800 mt-6 mb-3">What you gain:</h5>
                <ul className="list-disc list-inside mt-2 space-y-2 text-slate-700">
                  <li>Identification of content gaps and keyword opportunities.</li>
                  <li>Insights into competitor backlink strategies.</li>
                  <li>Understanding of their E-E-A-T signals and how to surpass them.</li>
                  <li>Data-driven recommendations for differentiation.</li>
                </ul>
              </div>
            </div>

            {/* 6. Strategic Link Building & Content Placement */}
            <div className="section-card p-8 md:p-10">
              <h4 className="text-3xl font-bold text-slate-900 mb-4">6. Strategic Link Building & Content Placement</h4>
              <p className="mt-2 text-lg text-slate-600">High-quality backlinks are the backbone of strong SEO. We go beyond traditional methods, engaging with niche communities and influential platforms to earn valuable, contextual backlinks and maximize your content's reach.</p>
              <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="p-6 border border-gray-200 rounded-xl bg-slate-50">
                  <h5 className="font-bold text-xl text-slate-800 mb-2">🤝 Industry Forums & Communities</h5>
                  <p className="text-base text-slate-700 leading-relaxed">Engaging in discussions on relevant industry forums and developer communities to provide value and subtly link to your authoritative resources.</p>
                </div>
                <div className="p-6 border border-gray-200 rounded-xl bg-slate-50">
                  <h5 className="font-bold text-xl text-slate-800 mb-2">🎙️ Expert Podcasts & Interviews</h5>
                  <p className="text-base text-slate-700 leading-relaxed">Securing guest appearances on prominent industry podcasts, which provide authoritative backlinks and significantly boost brand recognition.</p>
                </div>
                <div className="p-6 border border-gray-200 rounded-xl bg-slate-50">
                  <h5 className="font-bold text-xl text-slate-800 mb-2">✍️ Guest Posts & Thought Leadership</h5>
                  <p className="text-base text-slate-700 leading-relaxed">Pitching unique, valuable articles (e.g., case studies, market analyses) to leading industry publications and blogs for high-quality placements.</p>
                </div>
                <div className="p-6 border border-gray-200 rounded-xl bg-slate-50">
                  <h5 className="font-bold text-xl text-slate-800 mb-2">🌐 Regional & Niche Content Outreach</h5>
                  <p className="text-base text-slate-700 leading-relaxed">Collaborating with local language blogs and creating regional infographics to tap into growing regional audiences and capture niche keyword spaces.</p>
                </div>
                <div className="p-6 border border-gray-200 rounded-xl bg-slate-50">
                  <h5 className="font-bold text-xl text-slate-800 mb-2">📈 Comparison & Listing Site Inclusion</h5>
                  <p className="text-base text-slate-700 leading-relaxed">Ensuring your services are listed on relevant SaaS directories, industry tool comparison blogs, and reputable review sites to capture high-intent traffic.</p>
                </div>
                <div className="p-6 border border-gray-200 rounded-xl bg-slate-50">
                  <h5 className="font-bold text-xl text-slate-800 mb-2">📚 Quora & SlideShare Engagement</h5>
                  <p className="text-base text-slate-700 leading-relaxed">Actively answering questions in relevant Quora spaces and publishing insightful presentations on SlideShare to gain visibility and referral traffic.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section id="why-us" className="scroll-mt-24 mb-20 bg-gradient-to-br from-indigo-50 to-blue-50 p-10 rounded-xl shadow-lg">
          <h3 className="text-4xl font-extrabold text-slate-900 text-center mb-12">Why Partner With Us?</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-xl shadow-md flex flex-col items-center text-center">
              <div className="text-5xl text-blue-600 mb-4">✨</div>
              <h5 className="font-bold text-xl text-slate-800 mb-2">Holistic Approach</h5>
              <p className="text-base text-slate-700 leading-relaxed">We cover all facets of SEO, from technical optimization to content strategy and link building, ensuring comprehensive growth.</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-md flex flex-col items-center text-center">
              <div className="text-5xl text-blue-600 mb-4">🎯</div>
              <h5 className="font-bold text-xl text-slate-800 mb-2">Data-Driven Strategies</h5>
              <p className="text-base text-slate-700 leading-relaxed">Our strategies are built on in-depth research and analytics, ensuring every action is purposeful and measurable.</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-md flex flex-col items-center text-center">
              <div className="text-5xl text-blue-600 mb-4">📈</div>
              <h5 className="font-bold text-xl text-slate-800 mb-2">Sustainable Growth</h5>
              <p className="text-base text-slate-700 leading-relaxed">We focus on long-term, ethical SEO practices that build lasting authority and consistent organic traffic.</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-md flex flex-col items-center text-center">
              <div className="text-5xl text-blue-600 mb-4">💡</div>
              <h5 className="font-bold text-xl text-slate-800 mb-2">Future-Proof Techniques</h5>
              <p className="text-base text-slate-700 leading-relaxed">We stay ahead of algorithm updates and emerging trends like AI and voice search to keep you competitive.</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-md flex flex-col items-center text-center">
              <div className="text-5xl text-blue-600 mb-4">🤝</div>
              <h5 className="font-bold text-xl text-slate-800 mb-2">Transparent Reporting</h5>
              <p className="text-base text-slate-700 leading-relaxed">You'll receive clear, regular reports on your performance, so you always know the impact of our efforts.</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-md flex flex-col items-center text-center">
              <div className="text-5xl text-blue-600 mb-4">🧑‍💻</div>
              <h5 className="font-bold text-xl text-slate-800 mb-2">Expert Team</h5>
              <p className="text-base text-slate-700 leading-relaxed">Our team comprises seasoned SEO specialists, data analysts, and content strategists dedicated to your success.</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-800 text-white mt-20">
        <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8 text-center text-sm text-slate-400">
          <p>&copy; 2025 SEO Services. All rights reserved. This is a template for demonstration purposes.</p>
        </div>
      </footer>
    </div>
  );
};

export default SEOServicePage;