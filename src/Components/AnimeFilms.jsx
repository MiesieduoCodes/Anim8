import { useState, useEffect, useRef } from 'react';
import Navbar from './Navbar';
import FloatingMusicButton from '../FloatingMusicButton';
import Footer from "./Footer";
import collections from "../Constants/Animedata";

const AnimeFilms = () => {
  const [animeCollections, setAnimeCollections] = useState([]);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const audioRef = useRef(null);

  useEffect(() => {
    setAnimeCollections(collections);
  }, []);

  // Function to handle download
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

  // Toggle music playback
  const toggleMusic = () => {
    setIsMusicPlaying(!isMusicPlaying);
  };

  // Change to a specific track
  const changeTrack = (index) => {
    setCurrentTrackIndex(index);
  };

  // Effect to play/pause music when isMusicPlaying state changes
  useEffect(() => {
    if (audioRef.current) {
      if (isMusicPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [isMusicPlaying]);

  // Effect to change track source when currentTrackIndex changes
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.src = `path/to/your/track-${currentTrackIndex}.mp3`; // Update with actual paths
      if (isMusicPlaying) {
        audioRef.current.play();
      }
    }
  });

  return (
    <>
      <div className="main-content bg-slate-950 pt-24">
        <Navbar />

        {/* Header Section */}
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

        {/* Anime Collection Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
          {animeCollections[0]?.items.map((item, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
              style={{
                backgroundImage: `url(${item.backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
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
            </div>
          ))}
        </div>
      </div>

      {/* Footer Section */}
      <Footer />

      {/* Floating Music Button with functionality */}
      <FloatingMusicButton
        isMusicPlaying={isMusicPlaying}
        toggleMusic={toggleMusic}
        currentTrackIndex={currentTrackIndex}
        changeTrack={changeTrack}
      />

      {/* Audio Element for Music Playback */}
      <audio ref={audioRef} src={`path/to/your/track-${currentTrackIndex}.mp3`} />
    </>
  );
};

export default AnimeFilms;
