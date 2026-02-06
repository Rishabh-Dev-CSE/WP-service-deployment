import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

// ---------------- ICONS (memo for performance) ----------------
const CodeIcon = React.memo(({ size = 34 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="16 18 22 12 16 6"></polyline>
    <polyline points="8 6 2 12 8 18"></polyline>
  </svg>
));

const MobileIcon = React.memo(({ size = 34 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="5" y="2" width="14" height="20" rx="2" />
  </svg>
));

const SearchIcon = React.memo(({ size = 34 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.6" y2="16.6" />
  </svg>
));

const ShareIcon = React.memo(({ size = 34 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="18" cy="5" r="3" />
    <circle cx="6" cy="12" r="3" />
    <circle cx="18" cy="19" r="3" />
  </svg>
));

const ProjectIcon = React.memo(({ size = 34 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
  </svg>
));

const ArrowRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
);

// ---------------- SERVICES ----------------
const services = [
  { icon: <CodeIcon />, title: "Web Design", desc: "Responsive modern websites.", route_link: "/services/website-development-theme" },
  { icon: <MobileIcon />, title: "App Design", desc: "User-friendly mobile interfaces.", route_link: "/services/app-service/app-theme" },
  { icon: <SearchIcon />, title: "SEO", desc: "Rank higher & grow traffic.", route_link: "/services/seo-service" },
  { icon: <ShareIcon />, title: "Social Media", desc: "Brand growth strategies.", route_link: "/coming-soon" },
  { icon: <ProjectIcon />, title: "Software Service", desc: "Custom scalable software.", route_link: "/coming-soon" },
];

// ---------------- ANIMATION ----------------
const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.45 },
  }),
};

// ---------------- COMPONENT ----------------
const ServicesSection = () => {
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });

  // Throttle mouse move (performance boost)
  React.useEffect(() => {
    let raf;
    const handleMouseMove = (e) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() =>
        setMousePosition({ x: e.clientX, y: e.clientY })
      );
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative w-full py-20 bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] text-white overflow-hidden">
<Helmet>
  

  <meta
    name="description"
    content="Groveit provides professional web development, mobile app development, SEO services and custom software solutions to grow your business online."
  />

  <meta
    name="keywords"
    content="Groveit, web development company India, app development, SEO services India, software company, digital agency"
  />

  <meta name="robots" content="index, follow" />
  <meta name="author" content="Groveit" />

  {/* FAST SEARCH INDEXING */}
  <meta name="googlebot" content="index, follow, max-image-preview:large" />
  <meta name="bingbot" content="index, follow" />

  {/* MOBILE SEO */}
  <meta name="viewport" content="width=device-width, initial-scale=1" />

  {/* CANONICAL */}
  <link rel="canonical" href="https://groveit.in/services" />

  {/* OPEN GRAPH (SOCIAL SHARE SEO) */}
  <meta property="og:title" content="Groveit Services - Web, App, SEO & Software" />
  <meta property="og:description" content="Grow your business with Groveit digital services. Web, app, SEO & custom software development." />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://groveit.in/services" />
  <meta property="og:image" content="https://groveit.in/og.jpg" />

  {/* TWITTER */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Groveit Services" />
  <meta name="twitter:description" content="Web, App, SEO & Software Development Company" />
  <meta name="twitter:image" content="https://groveit.in/og.jpg" />

  {/* SCHEMA — FAST RANKING BOOST */}
  <script type="application/ld+json">{`
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Groveit",
    "url": "https://groveit.in",
    "logo": "https://groveit.in/logo.png"
  }
  `}</script>

  <script type="application/ld+json">{`
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": [
      "Web Development",
      "Mobile App Development",
      "SEO Services",
      "Software Development"
    ],
    "provider": {
      "@type": "Organization",
      "name": "Groveit"
    }
  }
  `}</script>
</Helmet>


      {/* Spotlight */}
      <div
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          background: `radial-gradient(500px at ${mousePosition.x}px ${mousePosition.y}px, rgba(29,78,216,0.12), transparent 80%)`,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <h2 className="text-5xl font-extrabold text-center mb-4">
          Our <span className="text-cyan-400">Services</span>
        </h2>

        <p className="text-center text-gray-400 mb-14">
          Complete digital solutions for modern businesses.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={cardVariants}
            >
              <a href={service.route_link} className="block group">
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-400/50 hover:-translate-y-2 transition flex flex-col h-full">
                  <div className="text-cyan-400 mb-4">{service.icon}</div>
                  <h3 className="text-lg font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-400 text-sm flex-grow">{service.desc}</p>

                  <div className="mt-5 flex items-center text-cyan-400 text-sm font-semibold">
                    Learn More <span className="ml-2"><ArrowRightIcon /></span>
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
