import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

// Import local images properly


const clients = [
  {
    name: "Acme Corp",
    image: "./src/assets/clientpics/client1.jpeg",
    bio: "Acme Corp is a global leader in innovative solutions, helping businesses transform their workflows and achieve new levels of success."
  },
  {
    name: "Globex Inc",
    image: "./src/assets/clientpics/client2.jpeg",
    bio: "Globex Inc partners with enterprises worldwide to deliver robust, scalable, and secure cloud-based services."
  },
  {
    name: "Stark Industries",
    image: "./src/assets/clientpics/client3.jpeg",
    bio: "Stark Industries pioneers advanced technologies and sustainable energy solutions, pushing the boundaries of what's possible."
  },
  {
    name: "Wayne Enterprises",
    image: "./src/assets/clientpics/client4.jpeg",
    bio: "Wayne Enterprises supports global development through strategic investments in healthcare, technology, and green energy."
  },
  {
    name: "Umbrella Corp",
    image: "./src/assets/clientpics/client5.jpeg",
    bio: "Umbrella Corporation leads in biotech research, dedicated to enhancing human health and longevity."
  },
];

const TopClientsCarousel = () => {
  return (
    <section className="bg-gradient-to-b from-[#0f0c29] via-[#302b63] to-[#24243e] text-gray-300 py-16 px-4 sm:px-6 lg:px-12">
      <div className="max-w-6xl mx-auto text-center mb-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-cyan-400 mb-4">
          Our Top Listed Clients
        </h2>
        <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">
          We proudly collaborate with industry leaders who trust us to deliver cutting-edge solutions and exceptional service.
        </p>
      </div>

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
          1280: { slidesPerView: 4 },
        }}
        className="max-w-6xl mx-auto"
      >
        {clients.map((client, index) => (
          <SwiperSlide key={index} className="flex">
            <div className="bg-[#1b1e3a] rounded-2xl border border-cyan-500/10 overflow-hidden shadow-lg hover:shadow-cyan-400/40 transform hover:scale-[1.03] transition duration-300 ease-in-out flex flex-col h-full w-full">
              <img
                src={client.image}
                alt={client.name}
                className="w-full h-48 object-cover rounded-t-2xl"
              />
              <div className="p-6 flex flex-col gap-4 flex-1">
                <h3 className="text-2xl font-bold text-cyan-400 text-center">{client.name}</h3>
                <p className="text-gray-300 text-sm text-center">{client.bio}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default TopClientsCarousel;
