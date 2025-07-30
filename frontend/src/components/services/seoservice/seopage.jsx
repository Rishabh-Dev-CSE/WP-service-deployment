import React, { useState } from 'react';

const SEOServicePage = () => {
  const [activeTab, setActiveTab] = useState('tab-core');
  const [expandedAccordions, setExpandedAccordions] = useState({});

  const toggleAccordion = (index) => {
    setExpandedAccordions((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className="font-['Inter'] bg-[#f0f4f8] text-slate-800">
    
      {/* Main Content */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        {/* Hero Section */}
        <section id="hero" className="text-center mb-20 py-16 bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-inner">
          <h2 className="text-5xl md:text-6xl font-extrabold text-slate-900 leading-tight mb-6">Unlock Your Digital Potential. <br />Comprehensive SEO Services.</h2>
          <p className="mt-4 max-w-3xl mx-auto text-xl text-slate-700">Boost your online visibility, drive organic traffic, and achieve sustainable growth with our expert Search Engine Optimization solutions.</p>
          <a href="#services" className="mt-10 inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg transform hover:scale-105 transition-all duration-300">Explore Services</a>
        </section>

        {/* Services Section */}
        <section id="services" className="scroll-mt-24 mb-20">
          <h3 className="text-4xl font-extrabold text-slate-900 text-center mb-12">Our Core SEO Services</h3>

          {/* 1. Keyword Strategy */}
          <div className="section-card p-8 md:p-10 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition">
            <h4 className="text-3xl font-bold mb-4">1. In-Depth Keyword Strategy</h4>
            <p className="text-lg text-slate-600">Our keyword research goes beyond basic terms to uncover high-value opportunities...</p>
            
            {/* Tabs */}
            <div className="mt-8">
              <div className="flex justify-center border-b border-gray-200 pb-2">
                <nav className="flex space-x-3" aria-label="Tabs">
                  {['tab-core', 'tab-long-tail', 'tab-local'].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`tab-button py-3 px-4 font-semibold text-sm rounded-lg ${activeTab === tab ? 'bg-blue-600 text-white' : 'text-gray-700 hover:text-blue-600'}`}
                    >
                      {tab === 'tab-core' && 'Core & Niche Keywords'}
                      {tab === 'tab-long-tail' && 'Long-Tail & Conversational'}
                      {tab === 'tab-local' && 'Local & Regional Focus'}
                    </button>
                  ))}
                </nav>
              </div>

              {/* Tab Content */}
              <div className="mt-8 bg-slate-50 p-6 rounded-lg border border-gray-100">
                {activeTab === 'tab-core' && (
                  <>
                    <h5 className="font-bold text-xl mb-3">What we do:</h5>
                    <p className="text-slate-700">We identify foundational terms and niche keywords...</p>
                    <ul className="list-disc list-inside mt-4 space-y-2">
                      <li><code className="bg-blue-50 px-2 py-1 rounded text-blue-700 text-sm">Industry-specific solutions</code></li>
                      <li><code className="bg-blue-50 px-2 py-1 rounded text-blue-700 text-sm">Service-based queries</code></li>
                      <li><code className="bg-blue-50 px-2 py-1 rounded text-blue-700 text-sm">Competitive gap analysis</code></li>
                    </ul>
                  </>
                )}
                {activeTab === 'tab-long-tail' && (
                  <>
                    <h5 className="font-bold text-xl mb-3">What we do:</h5>
                    <p className="text-slate-700">We optimize content for conversational, question-based queries...</p>
                    <ul className="list-disc list-inside mt-4 space-y-2">
                      <li><code className="bg-blue-50 px-2 py-1 rounded text-blue-700 text-sm">"How-to" questions</code></li>
                      <li><code className="bg-blue-50 px-2 py-1 rounded text-blue-700 text-sm">Problem-solution phrases</code></li>
                      <li><code className="bg-blue-50 px-2 py-1 rounded text-blue-700 text-sm">Natural language patterns</code></li>
                    </ul>
                  </>
                )}
                {activeTab === 'tab-local' && (
                  <>
                    <h5 className="font-bold text-xl mb-3">What we do:</h5>
                    <p className="text-slate-700">We target specific geographic audiences with geo-modifiers and regional content...</p>
                    <ul className="list-disc list-inside mt-4 space-y-2">
                      <li><code className="bg-blue-50 px-2 py-1 rounded text-blue-700 text-sm">"Near me" searches</code></li>
                      <li><code className="bg-blue-50 px-2 py-1 rounded text-blue-700 text-sm">City/region-specific terms</code></li>
                      <li><code className="bg-blue-50 px-2 py-1 rounded text-blue-700 text-sm">Multilingual strategies</code></li>
                    </ul>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* 2. Technical SEO Optimization */}
          <div className="section-card p-8 md:p-10 mt-16 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition">
            <h4 className="text-3xl font-bold mb-4">2. Technical SEO Optimization</h4>
            <p className="text-lg text-slate-600">A flawless technical foundation is paramount...</p>
            <div className="mt-8 space-y-5">
              {[
                {
                  title: '🏗️ Site Structure & Schema Markup',
                  items: [
                    'Optimizing heading hierarchies (H1, H2, H3s).',
                    'Crafting keyword-rich title tags and meta descriptions.',
                    'Implementing schema markup for rich snippets.',
                    'Using canonical tags to prevent duplicates.',
                  ],
                },
                {
                  title: '⚡ Core Web Vitals & Mobile Responsiveness',
                  items: [
                    'Optimizing images and caching for LCP.',
                    'Ensuring mobile-friendliness across devices.',
                    'Enforcing HTTPS for SEO benefits.',
                  ],
                },
                {
                  title: '🕸️ Crawlability & Indexing Management',
                  items: [
                    'Verifying robots.txt and sitemaps.',
                    'Resolving HTTP errors.',
                    'Maintaining up-to-date XML sitemaps.',
                    'Using "noindex" for non-essential content.',
                  ],
                },
              ].map((section, idx) => (
                <div key={idx} className="border border-gray-200 rounded-xl">
                  <button
                    className="w-full text-left p-5 flex justify-between items-center bg-white hover:bg-slate-50"
                    onClick={() => toggleAccordion(idx)}
                  >
                    <span className="font-semibold text-xl">{section.title}</span>
                    <span className="text-blue-600 text-2xl transform transition-transform duration-300">
                      {expandedAccordions[idx] ? '▲' : '▼'}
                    </span>
                  </button>
                  {expandedAccordions[idx] && (
                    <div className="p-5 border-t border-gray-100 bg-slate-50">
                      <ul className="list-disc list-inside space-y-2 text-slate-700">
                        {section.items.map((item, i) => <li key={i}>{item}</li>)}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Continue with 3–6 sections... (same structure) */}

        </section>
      </main>
    </div>
  );
};

export default SEOServicePage;
