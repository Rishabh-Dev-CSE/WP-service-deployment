import React from "react";
import { motion } from "framer-motion";

// --- SVG Icon Components ---
// By using inline SVGs, we remove the need for external icon libraries
// which can sometimes cause resolution errors in certain environments.

const CodeIcon = ({ size = 36 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6"></polyline>
    <polyline points="8 6 2 12 8 18"></polyline>
  </svg>
);

const MobileIcon = ({ size = 36 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
    <line x1="12" y1="18" x2="12.01" y2="18"></line>
  </svg>
);

const SearchIcon = ({ size = 36 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"></circle>
    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
  </svg>
);

const ShareIcon = ({ size = 36 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="18" cy="5" r="3"></circle>
    <circle cx="6" cy="12" r="3"></circle>
    <circle cx="18" cy="19" r="3"></circle>
    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
  </svg>
);

const ProjectIcon = ({ size = 36 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
    <path d="M2 17l10 5 10-5"></path>
    <path d="M2 12l10 5 10-5"></path>
  </svg>
);

const ArrowRightIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="5" y1="12" x2="19" y2="12"></line>
        <polyline points="12 5 19 12 12 19"></polyline>
    </svg>
);


// Data for the service cards, now using the SVG components
const services = [
  {
    icon: <CodeIcon />,
    title: "Web Design",
    desc: "Designing responsive and engaging websites tailored to user needs.",
    route_link: "/services/website-development-theme",
  },
  {
    icon: <MobileIcon />,
    title: "App Design",
    desc: "Crafting seamless and user-friendly mobile app interfaces.",
    route_link: "/services/app-service/app-theme",
  },
  {
    icon: <SearchIcon />,
    title: "SEO",
    desc: "Optimizing websites to rank higher on search engines and increase visibility.",
    route_link: "/services/seo-service",
  },
  {
    icon: <ShareIcon />,
    title: "Social Media",
    desc: "Boosting brand presence and engagement through strategic social media management.",
    route_link: "/coming-soon",
  },
  {
    icon: <ProjectIcon />,
    title: "Software Service",
    desc: "Providing scalable, robust, and customized software solutions for businesses.",
    route_link: "/coming-soon",
  },
];

// Animation variants for the cards entering the screen
const cardVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.8,
  },
  show: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: 0.4 + i * 0.15,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

// Animation for the icon on hover
const iconHoverVariants = {
  hover: {
    scale: 1.2,
    rotate: 10,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 10,
    },
  },
};

const ServicesSection = () => {
  // State to track mouse position for the spotlight effect
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });

  React.useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section
      id="services"
      className="relative w-full  py-20 lg:py-28 bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] text-white overflow-hidden"
    >
      {/* Dynamic spotlight effect */}
      <div
        className="pointer-events-none fixed inset-0 z-0 transition duration-300"
        style={{
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
        }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-center mb-4"
        >
          Our Premier <span className="text-cyan-400">Services</span>
        </motion.h2>

        {/* Section Subheading */}
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
          className="text-center text-lg text-gray-400 max-w-3xl mx-auto mb-16"
        >
          From concept to launch, we provide comprehensive digital solutions that drive results and elevate your brand.
        </motion.p>

        {/* Grid of Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              className="w-full"
            >
              {/* Using <a> tag as a substitute for Link since react-router-dom is not fully set up */}
              <a href={service.route_link || "#"} className="block group h-full">
                <div
                  className="relative p-6 h-full rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl
                             shadow-lg transition-all duration-300 ease-in-out
                             hover:bg-white/10 hover:border-cyan-400/50 hover:shadow-cyan-400/10 hover:-translate-y-2
                             overflow-hidden flex flex-col"
                >
                  {/* Animated shine effect on hover */}
                  <div className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent 
                                  transition-all duration-700 ease-in-out group-hover:left-[100%]"></div>
                  
                  <div className="relative z-10 flex flex-col h-full">
                    <motion.div
                      className="text-cyan-400 mb-5 inline-block p-4 rounded-full bg-cyan-400/10 self-start"
                      variants={iconHoverVariants}
                      whileHover="hover"
                    >
                      {service.icon}
                    </motion.div>
                    <h3 className="text-xl font-bold mb-3 text-gray-100">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed flex-grow">
                      {service.desc}
                    </p>
                    <div className="mt-6 flex items-center text-cyan-400 font-semibold text-sm">
                      Learn More
                      <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                        <ArrowRightIcon />
                      </span>
                    </div>
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

export default ServicesSection ;


