import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { motion, AnimatePresence } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";

const TopClientsCarousel = () => {
  const [clients, setClients] = useState([]);
  const [selectedClient, setSelectedClient] = useState(null);



  // 🔹 Fetch clients from Django
  useEffect(() => {
    const fetchClients = async () => {
      try {
        const res = await fetch("https://wp-service-deployment-1.onrender.com/api/top-clients", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "X": "12345-abcdef", // ✅ API key
          },
        });

        if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);

        const data = await res.json();
        console.log("Fetched clients data:", data);

        // ✅ Handle { clients: [...] }
        const clientsArray = data.clients || [];

        setClients(clientsArray);
      } catch (err) {
        console.error("Error fetching clients:", err);
      }
    };

    fetchClients();
  }, []);

  // 🔹 Disable body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = selectedClient ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [selectedClient]);

  return (
    <section id="home" className="relative w-full py-20 lg:py-28 bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] text-white overflow-hidden">
      <div className="max-w-6xl mx-auto text-center mb-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-cyan-400 mb-4">
          Our Top Listed Clients
        </h2>
        <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">
          We proudly collaborate with industry leaders who trust us to deliver
          cutting-edge solutions and exceptional service.
        </p>
      </div>

      {/* 🔹 Swiper Carousel */}
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={24}
        navigation
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        speed={1000}
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="max-w-6xl mx-auto"
      >
        {clients.map((client, index) => (
          <SwiperSlide key={index} className="flex">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col items-center bg-[#11152d] rounded-2xl shadow-lg p-6 hover:shadow-cyan-400/20 transition cursor-pointer w-full"
              onClick={() => setSelectedClient(client)}
            >
              {/* Client Image */}
              <div className="w-28 h-28 rounded-full overflow-hidden border-2 border-cyan-400 shadow-lg">
                <img
                  src={client.image}
                  alt={client.client_name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Client Info */}
              <div className="mt-4 text-center">
                <h3 className="text-xl font-semibold">{client.client_name}</h3>
                <p className="text-cyan-400 text-sm">
                  {client.company_name || "Client"}
                </p>

                {client.description && (
                  <p className="text-gray-300 text-sm mt-3 leading-relaxed line-clamp-3">
                    {client.description}
                  </p>
                )}
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* 🔹 Modal */}
      <AnimatePresence>
        {selectedClient && (
          <motion.div
               className="fixed inset-0 bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] text-white bg-opacity-60 backdrop-blur-sm flex justify-center items-center z-50 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedClient(null)}
          >
              <motion.div
                          initial={{ scale: 0.8 }}
                          animate={{ scale: 1 }}
                          exit={{ scale: 0.8 }}
                          transition={{ type: "spring", stiffness: 200, damping: 20 }}
                          className="relative max-w-3xl w-full mt-20"
                          onClick={(e) => e.stopPropagation()}
                          style={{ overflowY: "scroll", height: "80%" }}
                        >

            <motion.div
              className="bg-[#0f0a3d] rounded-2xl p-8 text-left max-w-4xl w-full text-white relative grid grid-cols-1 md:grid-cols-2 gap-8"
              initial={{ scale: 0.8, y: 40 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 40 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                className="absolute top-4 right-4 text-gray-400 hover:text-white"
                onClick={() => setSelectedClient(null)}
              >
                ✕
              </button>

              {/* Left Side (Image + Name) */}
              <div className="flex flex-col items-center justify-center">
                <div className="w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-cyan-400 shadow-lg">
                  <img
                    src={selectedClient.image}
                    alt={selectedClient.client_name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="mt-2">Rating : ⭐⭐⭐⭐⭐ </p>
                <h3 className="text-2xl font-bold mt-4">{selectedClient.client_name}</h3>
                <p className="text-cyan-400 text-sm">{selectedClient.company_name}</p>

                <a
                  href={
                    selectedClient.website.startsWith("http")
                      ? selectedClient.website
                      : `https://${selectedClient.website}`
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                 Website : <u className="text-cyan-400"> {selectedClient.company_name}</u>
                </a>

              </div>

              {/* Right Side (Details) */}
              <div className="overflow-y-auto pr-2 max-h-[70vh]">
                <h4 className="text-xl font-semibold mb-3">About</h4>
                <p className="text-gray-300 text-sm leading-relaxed mb-3">
                  {selectedClient.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default TopClientsCarousel;
