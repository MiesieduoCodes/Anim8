import { useState, useEffect, useRef } from 'react';
import Navbar from "./Navbar";
import Footer from "./Footer";
import { MdSkipNext } from "react-icons/md";
import RinYoshidaImage from '../Assets/rin-yoshida-in-call-of-duty-mobile-hz.jpg';
 

const Bleach = () => {
  const movies = [
    "Bleach: Memories of Nobody (2006)",
    "Bleach: The DiamondDust Rebellion (2007)",
    "Bleach: Fade to Black (2008)",
    "Bleach: Hell Verse (2010)",
  ];

  const story = "Detective Conan follows the adventures of Shinichi Kudo, a teenage detective who is transformed into a child after being poisoned. Under the alias Conan Edogawa, he solves various cases while searching for the organization responsible for his condition.";

  // Music state management
 
 
  const audioRef = useRef(null);

  // Toggle music playback
  const toggleMusic = () => {
    setIsMusicPlaying(!isMusicPlaying);
  };

  // Change to a specific track
  const changeTrack = (index) => {
    setCurrentTrackIndex(index);
  };

  // Play/Pause music when isMusicPlaying state changes
  useEffect(() => {
    if (audioRef.current) {
      if (isMusicPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [isMusicPlaying]);

  // Change track when currentTrackIndex changes
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.src = `path/to/your/track-${currentTrackIndex}.mp3`; // Update with actual track paths
      if (isMusicPlaying) {
        audioRef.current.play();
      }
    }
  });

  return (
    <div className="main-content pt-24">
      <Navbar />
      <div className="relative bg-cover bg-center h-[50vh] md:h-80 lg:h-96" style={{ backgroundImage: `url(${RinYoshidaImage})` }}> 
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center p-4 md:p-6">
          <div className="flex flex-col gap-4 md:gap-10">
            <p className="mt-4 text-base md:text-lg text-white text-center md:w-[40%]">{story}</p>
            <a href="">
              <button className="w-full md:w-[150px] h-[40px] p-3 bg-yellow-500 flex justify-center items-center text-white rounded-full transition-transform duration-300 hover:scale-105">
                <MdSkipNext className="text-2xl" /> Watch Trailer
              </button>
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-4">
        <h1 className="text-3xl font-bold text-center mt-4">Bleach Movies</h1>
        <p className="mt-4 text-lg text-center">{story}</p>

        {/* Grid for movies */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
          {movies.map((movie, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-lg text-center">
              <p className="text-lg">{movie}</p>
              <button
                className="bg-blue-500 text-white font-bold py-1 px-2 rounded hover:bg-green-700 transition-colors duration-300 mt-2"
                onClick={() => alert(`Downloading ${movie}`)}
              >
                Download
              </button>
            </div>
          ))}
        </div>
      </div>
      
      <Footer />
 

      {/* Audio Element for Music Playback */}
      <audio ref={audioRef} src={`path/to/your/track-${currentTrackIndex}.mp3`} />
    </div>
  );
};

export default Bleach;
