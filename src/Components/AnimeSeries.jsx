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
      image: "data:image/jpeg;base64,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",
      title: "Embark on Legendary Anime Series",
      subtitle:
        "Join unforgettable heroes in stories that keep you on the edge of your seat.",
    },
    {
      image: "https://itswynnesworld.com/wp-content/uploads/2021/06/darwins-game.jpg?w=1024",
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
    <div className="main-content pt-24">
      <Navbar />
      <video
        className="fixed top-0 left-0 w-full h-full object-cover -z-10"
        src="https://fireforce-anime.jp/3rdwp/wp-content/themes/enn-enn-season3-teaser/_assets/video/loader.mp4"
        autoPlay
        loop
        muted
      />

      
      
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
