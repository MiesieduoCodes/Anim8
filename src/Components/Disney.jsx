import { useState, useEffect, useRef } from 'react';
import Navbar from './Navbar';
import Footer from "./Footer";
import FloatingMusicButton from '../FloatingMusicButton';
import disneyMovies from "../Constants/disneyMovies";

const Disney = () => {
  const [cards, setCards] = useState([]);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const audioRef = useRef(null);

  useEffect(() => {
    setCards(disneyMovies);
  }, []);

  // Toggle music playback
  const toggleMusic = () => {
    setIsMusicPlaying(!isMusicPlaying);
  };

  // Change to a specific track
  const changeTrack = (index) => {
    setCurrentTrackIndex(index);
  };

  // Effect to handle play/pause
  useEffect(() => {
    if (audioRef.current) {
      if (isMusicPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [isMusicPlaying]);

  // Effect to handle track change
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.src = `path/to/your/track-${currentTrackIndex}.mp3`; // Replace with actual track paths
      if (isMusicPlaying) {
        audioRef.current.play();
      }
    }
  });

  return (
    <div className="main-content pt-24">
      <Navbar />

      <div className="relative h-full w-full bg-slate-950">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)]"></div>

        <div className="relative bg-cover bg-center h-64 md:h-80 lg:h-96" style={{ backgroundImage: `url('https://wallpapers.com/images/hd/disney-4k-gkwca18qluofxgum.jpg')` }}>
        <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center p-6 md:p-8 lg:p-10">
  <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-extrabold text-center">
    Uncover the Enchantment of Disney
  </h1>
  <p className="text-white text-lg md:text-xl lg:text-2xl text-center mt-3 md:mt-5">
    Journey through timeless Disney tales that have inspired wonder <br /> and sparked joy across generations.
  </p>
</div>

        </div>

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
                                 <a
                                    href={card.downloadLink} // Make sure movieData includes a downloadLink property
                                    className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-green-700 transition-colors duration-300" 
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

      <FloatingMusicButton
        isMusicPlaying={isMusicPlaying}
        toggleMusic={toggleMusic}
        currentTrackIndex={currentTrackIndex}
        changeTrack={changeTrack}
      />

      {/* Audio Element for Music Playback */}
      <audio ref={audioRef} src={`path/to/your/track-${currentTrackIndex}.mp3`} />
    </div>
  );
};

export default Disney;
