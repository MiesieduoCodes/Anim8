import { useState, useEffect, useContext } from 'react';
import Navbar from './Navbar';
import Footer from "./Footer";
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { UserContext } from "./UserContext";// Import useUser (your context for authentication)
import cardsData from "../Constants/Dreamdata"; // Import MusicContext if you're using it
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules"; // Import Autoplay module
import "swiper/css";// Updated import for Navigation module
import "swiper/css";
import "swiper/css/navigation";

const DreamWorks = () => {
  const [cards, setCards] = useState([]);
  const { user } = useContext(UserContext);  // Get user data from the context
  const navigate = useNavigate(); // Initialize navigate function

  useEffect(() => {
    setCards(cardsData);
  }, []);

  const handleDownload = (downloadLink) => {
    if (!user) {
      // If the user is not signed in, redirect to the signup page
      navigate('/signup');
    } else {
      // If the user is signed in, proceed with the download
      window.location.href = downloadLink; // Or you can use other methods to download the file
    }
  };

  const slides = [
    {
      image: "https://wallpapers.com/images/high/monsters-vs-aliens-dreamworks-6ipboeyh5curod8z.webp",
      title: "Discover the World of DreamWorks Animation",
      subtitle:
        "Unleash your imagination with iconic characters and unforgettable stories.",
    },
    {
      image: "https://wallpapers.com/images/high/shrek-and-donkey-goofy-dngksu7xmohxyfk7.webp",
      title: "Iconic Heroes and Hilarious Villains",
      subtitle:
        "From Shrek to Kung Fu Panda, enjoy tales of adventure, laughter, and heart.",
    },
    {
      image: "https://wallpapers.com/images/high/how-to-train-your-dragon-4k-6591wv7tsyq2p0xy.webp",
      title: "Soar to New Heights with DreamWorks",
      subtitle:
        "Join beloved characters in breathtaking adventures that captivate all ages.",
    },
  ];

  return (
    <div className="main-content pt-24">
      {/* Navbar */}
      <Navbar />

      {/* Main background section */}
      <div className="relative h-full w-full bg-slate-950">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)]"></div>

        {/* Hero Section */}
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

        {/* Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 p-10">
          {cards.map((card, index) => (
            <div
              key={index}
              className="relative w-full p-36 h-48 md:h-64 lg:h-72 xl:h-80 bg-cover bg-center rounded-lg shadow-lg overflow-hidden transform transition-transform duration-500"
              style={{
                backgroundImage: `url(${card.backgroundImage})`,
              }}
            >
              {/* Overlay for text */}
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center p-4 opacity-0 hover:opacity-100 transition-opacity duration-500">
                <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold mb-2">
                  {card.title}
                </h2>
                <p className="text-white text-lg text-center mb-2">{card.story}</p>
                <div className="w-full bg-gray-300 border-none rounded-full h-4 overflow-hidden mb-2">
                  <div
                    className="bg-purple-800 h-full rounded-full"
                    style={{ width: `${card.rating * 10}%` }} // Adjusted width calculation
                  ></div>
                </div>
                <p className="text-white text-lg">{card.rating}</p>
                <button
                  onClick={() => handleDownload(card.downloadLink)} // Call handleDownload function
                  className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-green-700 transition-colors duration-300"
                >
                  Download
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default DreamWorks;
