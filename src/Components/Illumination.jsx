import { useState, useEffect, useContext } from 'react';
import Navbar from './Navbar';
import Footer from "./Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules"; // Import Swiper Autoplay module
import "swiper/css";
import movies from "../Constants/IlluminateData";
import { motion } from 'framer-motion'; // Import MusicContext if you're using it
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { UserContext } from "./UserContext"; // Assuming you have a UserContext to manage user state

const Illumination = () => {
  const [cards, setCards] = useState([]);
  const { user } = useContext(UserContext); // Access user context to check if the user is signed in
  const navigate = useNavigate(); // Hook to navigate to the signup page

  useEffect(() => {
    setCards(movies);
  }, []);

  const slides = [
    {
      image: "https://images7.alphacoders.com/677/thumb-440-677436.webp",
      title: "Step into the Brilliance of Illumination",
      subtitle:
        "Discover the hilarity and heart behind Despicable Me, Minions, and more.",
    },
    {
      image: "https://images6.alphacoders.com/120/thumb-440-1208592.webp",
      title: "Feel the Music and Joy of Sing",
      subtitle:
        "Experience the power of music and unforgettable characters in Sing.",
    },
    {
      image: "https://images7.alphacoders.com/825/thumb-440-825278.webp",
      title: "Explore the Secret Life of Pets",
      subtitle:
        "A hilarious look into what our furry friends do when we're not around.",
    }
  ];

  // Handle download logic
  const handleDownload = (downloadLink) => {
    if (!user) {
      // If user is not signed in, redirect to the signup page
      navigate("./Signup.jsx");
    } else {
      // If user is signed in, allow the download
      window.location.href = downloadLink; // Trigger the download
    }
  };

  return (
    <>
      <div className="main-content pt-24">
        <Navbar />
        <video
          className="fixed top-0 left-0 w-full h-full object-cover -z-10"
          src="https://static.videezy.com/system/resources/previews/000/008/148/original/Microscope_v5.mp4"
          autoPlay
          loop
          muted
        />

        <Swiper
          modules={[Autoplay]} // Enable autoplay
          autoplay={{
            delay: 3000, // Slide change interval in milliseconds
            disableOnInteraction: false, // Keep autoplay active even after interaction
          }}
          loop
          spaceBetween={0}
          slidesPerView={1}
          className="h-[calc(100vh-70px)] md:h-80 lg:h-96" // Adjusted height for better view in mobile
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div
                className="relative bg-cover bg-center h-[calc(100vh-70px)] md:h-80 lg:h-96"
                style={{ backgroundImage: `url('${slide.image}')` }}
              >
                <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center px-4 sm:px-6 md:px-8 lg:px-10 text-center">
                  <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
                    {slide.title}
                  </h1>
                  <p className="text-white text-base sm:text-lg md:text-xl lg:text-2xl mt-3 sm:mt-4 md:mt-5">
                    {slide.subtitle}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
              style={{
                backgroundImage: `url(${card.backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '300px',
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{
                scale: 1.05,
                transition: {
                  type: 'spring',
                  stiffness: 300,
                  damping: 10,
                  duration: 0.6,
                },
              }}
            >
              <div className="flex items-end h-full p-4 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out">
                <div className="text-white text-center w-full">
                  <h3 className="text-xl font-semibold">{card.title}</h3>
                  <p className="text-sm">Rating: {card.rating}</p>
                  <div className="w-full bg-gray-600 h-2 rounded">
                    <div
                      className="bg-yellow-500 h-full rounded"
                      style={{ width: `${(card.rating / 10) * 100}%` }}
                    />
                  </div>
                  <button
                    onClick={() => handleDownload(card.downloadLink)} // Call handleDownload with the download link
                    className="mt-2 bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-700"
                  >
                    Download
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Illumination;
