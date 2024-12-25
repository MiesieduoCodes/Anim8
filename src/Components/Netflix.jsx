import { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Footer  from "./Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules"; // Import Swiper Autoplay module
import "swiper/css";
 
import netflixMovies from "../Constants/NetflixData";

const Netflix = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    setCards(netflixMovies);
  }, []);

  const slides = [
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ9-8wNW3j2639T2ePUrOElynaIzrBxVEWYg&s",
      title: "Dive into Netflix Animation",
      subtitle:
        "Experience groundbreaking animated stories that captivate audiences of all ages.",
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqT7PYRqexCJOAhM5BuknAseavzbS8cy_81Q&s",
      title: "Unforgettable Adventures Await",
      subtitle:
        "Join characters on thrilling journeys filled with humor, heart, and breathtaking visuals.",
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDeDIHKbh99wjsA8DdQLkncCuTKzFoO6OpSQ&s",
      title: "Celebrate Animated Excellence",
      subtitle:
        "From family favorites to bold new stories, discover the magic of Netflix animations.",
    },
  ];
  
  return (
    <div className="main-content pt-24">
      <Navbar />

      <div className="relative h-full w-full bg-slate-950">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)]"></div>

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


        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 p-10">
  {cards.map((card, index) => (
    <div
      key={index}
      className="relative w-full h-60 md:h-72 lg:h-80 xl:h-96 bg-cover bg-center rounded-lg shadow-lg overflow-hidden transform transition-transform duration-500 hover:scale-105"
      style={{
        backgroundImage: `url(${card.backgroundImage})`,
      }}
    >
      {/* Overlay for text */}
      <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center p-6 opacity-0 hover:opacity-100 transition-opacity duration-500">
        <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold mb-2">
          {card.title}
        </h2>
        <p className="text-white text-base md:text-lg lg:text-xl text-center mb-2 px-4">
          {card.story}
        </p>
        {/* Synopsis Section */}
        <div className="w-full p-3 bg-black bg-opacity-30 rounded-lg mb-2">
          <p className="text-gray-200 text-sm text-center leading-relaxed px-2">
            {card.synopsis}
          </p>
        </div>
        <div className="w-full bg-gray-300 border-none rounded-full h-4 overflow-hidden mb-2">
          <div
            className="bg-purple-800 h-full rounded-full transition-all duration-500 ease-in-out"
            style={{ width: `${card.rating * 10}%` }}
          ></div>
        </div>
        <p className="text-white text-lg">{card.rating}</p>
        <a
          href={card.downloadLink}
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-green-700 transition-colors duration-300 transform hover:scale-105"
          download
        >
          Download
        </a>
      </div>
    </div>
  ))}
</div>

            </div>
      <Footer />

 
    </div>
  );
};

export default Netflix;
