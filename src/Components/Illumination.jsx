import { useState, useEffect } from 'react';
import Navbar from './Navbar';
import FloatingMusicButton from '../FloatingMusicButton';
import Footer from "./Footer";
import movies from "../Constants/IlluminateData";
import { motion } from 'framer-motion'; // Import MusicContext if you're using it

const Illumination = () => {
  const [cards, setCards] = useState([]);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);

  useEffect(() => {
    setCards(movies);
  }, []);

  const toggleMusic = () => {
    setIsMusicPlaying(!isMusicPlaying);
    // Add logic to play/pause the music here (e.g., using an HTML audio element or API)
  };

  const changeTrack = (index) => {
    setCurrentTrackIndex(index);
    // Add logic to change the track here
  };

  return (
    <>
    <div className="relative min-h-screen">
      <video
        className="fixed top-0 left-0 w-full h-full object-cover -z-10"
        src="https://static.videezy.com/system/resources/previews/000/008/148/original/Microscope_v5.mp4"
        autoPlay
        loop
        muted
      />
      <Navbar />

      <div
        className="relative bg-cover bg-center h-64 md:h-80 lg:h-96"
        style={{ backgroundImage: `url('https://i.ytimg.com/vi/f00eH6LpWfg/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGBMgTCh_MA8=&rs=AOn4CLBQ4x7g78bo13_Ih1eF044Hn1qhUQ')` }}
      >
<div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center p-6 md:p-8 lg:p-10">
  <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-extrabold text-center">
    Step into the Brilliance of Illumination
  </h1>
  <p className="text-white text-lg md:text-xl lg:text-2xl text-center mt-3 md:mt-5">
    Dive into a world of animated wonders that blend humor, heart, <br /> and unforgettable stories for all ages.
  </p>
</div>
      </div>

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
                  // onClick={() => handleDownload(card)} // Add download logic here
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
      
      <FloatingMusicButton
        isMusicPlaying={isMusicPlaying}
        toggleMusic={toggleMusic}
        currentTrackIndex={currentTrackIndex}
        changeTrack={changeTrack}
      />

      {/* <audio ref={audioRef} src={`path/to/your/track-${currentTrackIndex}.mp3`} /> */}
    </div>
  </>
    );
};

export default Illumination;
