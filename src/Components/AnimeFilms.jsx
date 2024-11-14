import { useState, useEffect, useRef } from 'react';
import Navbar from './Navbar';
import FloatingMusicButton from '../FloatingMusicButton';
import Footer from './Footer';
import collections from "../Constants/Animedata";
import { motion } from 'framer-motion';

const AnimeFilms = () => {
  const [animeCollections, setAnimeCollections] = useState([]);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const audioRef = useRef(null);

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

  const toggleMusic = () => setIsMusicPlaying(!isMusicPlaying);
  const changeTrack = (index) => setCurrentTrackIndex(index);

  useEffect(() => {
    if (audioRef.current) {
      isMusicPlaying ? audioRef.current.play() : audioRef.current.pause();
    }
  }, [isMusicPlaying]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.src = `path/to/your/track-${currentTrackIndex}.mp3`;
      if (isMusicPlaying) audioRef.current.play();
    }
  }, [currentTrackIndex, isMusicPlaying]);

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
          style={{ backgroundImage: `url('https://c4.wallpaperflare.com/wallpaper/279/89/75/goofy-mickey-mouse-donald-duck-daisy-and-pluto-disney-hd-wallpapers-1920%C3%971200-wallpaper-preview.jpg')` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center p-4 md:p-6 lg:p-8">
            <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold text-center">
              Anime Related Text Here
            </h1>
            <p className="text-white text-base md:text-lg lg:text-xl text-center mt-2 md:mt-4">
              Put your Anime Related Story Here So these Mfs Will Understand What they&apos;re <br />downloading before its scam.
            </p>
          </div>
        </div>

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
        
        <FloatingMusicButton
          isMusicPlaying={isMusicPlaying}
          toggleMusic={toggleMusic}
          currentTrackIndex={currentTrackIndex}
          changeTrack={changeTrack}
        />

        <audio ref={audioRef} src={`path/to/your/track-${currentTrackIndex}.mp3`} />
      </div>
    </>
  );
};

export default AnimeFilms;
