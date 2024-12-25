import { useState, useEffect  } from 'react';
import Navbar from './Navbar';
 
import Footer from './Footer';
import collections from "../Constants/Animedata";
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules"; // Import Swiper Autoplay module
import "swiper/css";

const AnimeFilms = () => {
  const [animeCollections, setAnimeCollections] = useState([]);
 


  useEffect(() => {
    setAnimeCollections(collections);
  }, []);

  const handleDownload = (item) => {
    const element = document.createElement("a");
    const fileData = `Title: ${item.title}\nRating: ${item.rating}`;
    const blob = new Blob([fileData], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);

    element.href = url;
    element.download = `${item.title}.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

 

  
  const slides = [
    {
      image: "https://images.alphacoders.com/136/thumb-440-1363137.webp",
      title: "Experience the Art of Anime Films",
      subtitle:
        "Dive into worlds filled with breathtaking visuals and heart-stirring stories.",
    },
    {
      image: "https://images7.alphacoders.com/133/thumb-440-1337391.webp",
      title: "Timeless Classics and Modern Masterpieces",
      subtitle:
        "Relive iconic films like Spirited Away and discover new favorites.",
    },
    {
      image: "https://images.alphacoders.com/601/thumb-440-601312.webp",
      title: "A Cinematic Journey through Anime",
      subtitle:
        "From emotional dramas to epic fantasies, explore every genre.",
    },
  ];
  
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
          {animeCollections[0]?.items.map((item, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
              style={{
                backgroundImage: `url(${item.backgroundImage})`,
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
                x: [0, -5, 5, -5, 5, 0],
                y: [0, -5, 5, -5, 5, 0],
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
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="text-sm">Rating: {item.rating}</p>
                  <div className="w-full bg-gray-600 h-2 rounded">
                    <div
                      className="bg-yellow-500 h-full rounded"
                      style={{ width: `${(item.rating / 10) * 100}%` }}
                    />
                  </div>
                  <button
                    onClick={() => handleDownload(item)}
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

export default AnimeFilms;
