import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const teamMembers = [
  {
    id: 1,
    name: "Rishabh Suryavanshi",
    position: "CEO & Founder",
    education: "Btech , Oxford University",
    bio: "Focused on strategic brand growth and community building. (FullStack Developer)",
    bio2:
      ":- Rishabh is a visionary leader with over 5 years of experience in full-stack development, tech entrepreneurship, and strategic product design. He has worked with global startups and enterprise clients, helping them scale through innovative digital solutions. His education from Oxford has played a key role in shaping his analytical thinking and global business mindset. Rishabh is known for his ethical leadership and dedication to user-focused product development. Under his guidance, the company continues to grow with a focus on long-term value and impact.",
    image: "/teamimages/rishabh.png",
  },
  {
    id: 2,
    name: "Saddam Husain",
    position: "Head of Marketing & (Co-Founder)",
    education: "MBA, Kanpur University",
    bio: "Passionate about building scalable digital products and leading innovation. (Backend developer and server management)",
    bio2:
      ":- Saddam blends marketing excellence with deep backend development knowledge, making him uniquely positioned to scale digital platforms. He has led data-driven marketing campaigns and knows how to convert engagement into measurable growth. With hands-on experience in Linux servers, Node.js, and API development, he ensures our backend systems are robust and secure. His leadership ensures that every marketing move aligns with both technical feasibility and user behavior. A strategic thinker, Saddam builds brand trust through transparency and consistent delivery.",
    image: "/teamimages/saddam.jpeg",
  },
  {
    id: 3,
    name: "Yash Nigam",
    position: "CTO",
    education: "M.Tech, IIT Bombay",
    bio: "Expert in blockchain technology and cloud architecture.",
    bio2:
      ":- Yash brings a decade of experience in architecting secure, scalable, and decentralized platforms. A gold medalist from IIT Bombay, he has led core tech teams in both fintech and healthtech domains. His knowledge of blockchain frameworks and cloud systems like AWS, GCP, and Azure has helped shape the backbone of our technology stack. Yash is also an advisor to multiple early-stage startups and a keynote speaker at tech conferences. He ensures that all tech strategies are future-proof, compliant, and ready for global scale.",
    image: "/teamimages/yash.jpeg",
  },
  {
    id: 4,
    name: "Vaibhav Gupta",
    position: "Team Manager and Explore idea's",
    education: "IIT Kanpur (Btech)",
    bio: "Focused on strategic brand growth and community building.",
    bio2:
      ":- Vaibhav is a highly driven project and operations strategist with a strong engineering foundation. A graduate from IIT Kanpur, he excels at breaking down complex ideas into actionable goals. He leads our innovation labs, where new ideas are tested, refined, and validated for market fit. His ability to coordinate between design, development, and marketing teams ensures smooth delivery pipelines. With a knack for identifying untapped opportunities, Vaibhav plays a crucial role in driving growth, product expansion, and investor confidence.",
    image: "/teamimages/vaibhav.jpeg",
  },
  {
    id: 5,
    name: "Vishal Prajapati",
    position: "Lead Designer",
    education: "B.Des, Integral University Lucknow",
    bio: "Specializes in UI/UX and creating immersive design experiences. (MAAC Teacher)",
    bio2:
      ":- Vishal is a creative powerhouse with over 10 years of experience in graphic design, UI/UX, and interactive media. As a certified MAAC instructor, he has trained hundreds of aspiring designers in industry-relevant skills. He has designed intuitive interfaces for fintech apps, learning platforms, and SaaS dashboards that enhance user engagement. Vishal keeps accessibility, design psychology, and responsive layout at the core of his work. He ensures every user touchpoint is not just beautiful, but purposeful and friction-free.",
    image: "/teamimages/vishal.jpeg",
  },
];


const MeetOurTeam = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  return (
    <section className="bg-gradient-to-br from-[#0a0f2b] to-[#1a1f3d] text-white py-16 relative z-10">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-4"
        >
          Meet Our <span className="text-cyan-400">Team</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-gray-300 mb-12 max-w-2xl mx-auto"
        >
          Our passionate team works together to deliver innovative solutions and
          impactful results.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="flex items-center bg-[#11152d] rounded-2xl shadow-lg p-6 hover:shadow-cyan-400/20 transition cursor-pointer"
              onClick={() => setSelectedMember(member)}
            >
              <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-cyan-400 flex-shrink-0">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="ml-6 text-left">
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-cyan-400 text-sm">{member.position}</p>
                <p className="text-gray-400 text-xs mt-1">{member.education}</p>
                <p className="text-gray-300 text-sm mt-2 leading-relaxed line-clamp-2">
                  {member.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal Card */}
      <AnimatePresence>
        {selectedMember && (
          <motion.div
            className="fixed inset-0 bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] text-white bg-opacity-60 backdrop-blur-sm flex justify-center items-center z-50 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedMember(null)}
          >
            {/* Animated Background Elements */}
            <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-400/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-ping"></div>
            <motion.div
              className="bg-[#0f0a3d] rounded-2xl p-8 text-left max-w-md w-full text-white relative "
              initial={{ scale: 0.8, y: 40 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 40 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              style={{ overflowY: "scroll", height: "50%" }}
            >
              <button
                className="absolute top-4 right-4 text-gray-400 hover:text-white"
                onClick={() => setSelectedMember(null)}
              >
                ✕
              </button>
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-cyan-400">
                  <img
                    src={selectedMember.image}
                    alt={selectedMember.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">{selectedMember.name}</h3>
                  <p className="text-cyan-400 text-sm">{selectedMember.position}</p>
                  <p className="text-gray-400 text-xs mt-1">{selectedMember.education}</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">{selectedMember.bio}</p>
              <p className="text-gray-300 text-sm leading-relaxed">{selectedMember.bio2}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default MeetOurTeam;
