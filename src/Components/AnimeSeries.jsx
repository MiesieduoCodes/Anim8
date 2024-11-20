import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules"; // Import Swiper Autoplay module
import "swiper/css";
import FloatingMusicButton from '../FloatingMusicButton';
import movies from "../Constants/data";

const groupMoviesByGenre = (movies) => {
  return movies.reduce((acc, movie) => {
    const { genre } = movie;
    if (!acc[genre]) {
      acc[genre] = [];
    }
    acc[genre].push(movie);
    return acc;
  }, {});
};

const AnimeSeries = () => {
  const moviesByGenre = groupMoviesByGenre(movies);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const audioRef = useRef(null);

  const toggleMusic = () => {
    setIsMusicPlaying(!isMusicPlaying);
  };

  const changeTrack = (index) => {
    setCurrentTrackIndex(index);
  };

  useEffect(() => {
    if (audioRef.current) {
      if (isMusicPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [isMusicPlaying]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.src = `path/to/your/track-${currentTrackIndex}.mp3`;
      if (isMusicPlaying) {
        audioRef.current.play();
      }
    }
  }, [currentTrackIndex, isMusicPlaying]);
  const slides = [
    {
      image: "https://wallpapers.com/images/hd/attack-on-titan-eren-yeager-anime-wallpaper-8sg42jfakuyqdh2w.jpg",
      title: "Embark on Legendary Anime Series",
      subtitle:
        "Join unforgettable heroes in stories that keep you on the edge of your seat.",
    },
    {
      image: "https://wallpapers.com/images/hd/naruto-uzumaki-anime-character-wallpaper-syzq7hdx8v6h5otb.jpg",
      title: "Dive into Rich Narratives and Iconic Adventures",
      subtitle:
        "From Naruto to Attack on Titan, explore tales of growth, courage, and destiny.",
    },
    {
      image: "https://wallpapers.com/images/hd/demon-slayer-tanjiro-sunset-anime-hd-jdb8sz7zzvl0nmzl.jpg",
      title: "An Unparalleled Journey through Anime Worlds",
      subtitle:
        "Witness breathtaking battles, emotional stories, and stunning artistry.",
    },
  ];
  
  return (
    <div className="relative min-h-screen">
      <video
        className="fixed top-0 left-0 w-full h-full object-cover -z-10"
        src="https://fireforce-anime.jp/3rdwp/wp-content/themes/enn-enn-season3-teaser/_assets/video/loader.mp4"
        autoPlay
        loop
        muted
      />

      <Navbar />
      
      <div className="container mx-auto my-10 relative z-10">
      <Swiper
      modules={[Autoplay]} // Enable autoplay
      autoplay={{
        delay: 3000, // Slide change interval in milliseconds
        disableOnInteraction: false, // Keep autoplay active even after interaction
      }}
      loop
      spaceBetween={0}
      slidesPerView={1}
      className="h-64 md:h-80 lg:h-96"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div
            className="relative bg-cover bg-center h-[100vh] md:h-80 lg:h-96"
            style={{ backgroundImage: `url('${slide.image}')` }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center p-6 md:p-8 lg:p-10">
              <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-extrabold text-center">
                {slide.title}
              </h1>
              <p className="text-white text-lg md:text-xl lg:text-2xl text-center mt-3 md:mt-5">
                {slide.subtitle}
              </p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>

        {Object.keys(moviesByGenre).map((genre) => (
          <div key={genre} className="mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">{genre}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {moviesByGenre[genre].map((movie, index) => (
                <motion.div
                  key={movie.id}
                  className="relative border border-gray-200 rounded-lg overflow-hidden"
                  style={{
                    backgroundImage: `url(${movie.backgroundImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '300px',
                  }}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true, amount: 0.5 }}
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
                  <div className="bg-black bg-opacity-50 p-5 h-full flex flex-col justify-end">
                    <h3 className="text-xl font-semibold text-white">{movie.title}</h3>
                    <p className="text-white">{movie.synopsis}</p>

                    <Link
                      to={`/anime/${movie.id}?title=${movie.title}`}
                      className="mt-2 inline-block bg-red-500 text-white rounded px-4 py-2"
                    >
                      View Series
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <Footer className="relative z-10" />

      <FloatingMusicButton
        isMusicPlaying={isMusicPlaying}
        toggleMusic={toggleMusic}
        currentTrackIndex={currentTrackIndex}
        changeTrack={changeTrack}
        className="relative z-10"
      />

      <audio ref={audioRef} src={`path/to/your/track-${currentTrackIndex}.mp3`} />
    </div>
  );
};

export default AnimeSeries;
