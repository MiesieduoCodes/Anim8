import { useState, useEffect, useRef } from "react";
import {
  MdQueueMusic,
  MdSkipNext,
  MdSkipPrevious,
  MdRepeat,
  MdShuffle,
} from "react-icons/md";
import { FaPlay, FaPause, FaTimes } from "react-icons/fa";

// Define the music tracks and their associated accent colors
const audioTracks = [
  {
    title: "Burna Boy - I Told Them",
    url: "https://rildi.sunproxy.net/file/VDY0d2dqays5OStzQXZaL2ZKaWxTRy9ZVzBlNFpBd3RwbEQxNXdGUHRTTzM4RzhCeURramZVenF6MEdOd0lUME12M0xFRWorWHNYa0tsdUUrK3lOMzlXUjFVV1FTakRZcTQ3Y2hhN2VvWU09/Disney_s_MOANA_Movie_-_You_re_Welcome_Song_(Hydr0.org).mp3",
    color: "#FF6347", // Tomato
  },
  {
    title: "Kanye West - Runaway",
    url: "https://cdn.shopify.com/s/files/1/0129/7698/0032/files/Cymatics_-_Timeless_Full_Drum_Loop.mp3?v=1618935629",
    color: "#1E90FF", // DodgerBlue
  },
  {
    title: "Kanye West - Ghost Town",
    url: "https://olagist.net/wp-content/uploads/2023/06/Kanye_West_Ft_PartyNextDoor_-_Ghost_Town.mp3?_=1",
    color: "#32CD32", // LimeGreen
  },
];

const FloatingMusicButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isShuffle, setIsShuffle] = useState(false);
  const [isRepeat, setIsRepeat] = useState(false);
  const [isCrossfade, setIsCrossfade] = useState(false);
  const audioRef = useRef(null);

  const currentColor = audioTracks[currentTrackIndex]?.color || "#FF6347";

  useEffect(() => {
    if (isMusicPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isMusicPlaying, currentTrackIndex]);

  const toggleMusicDialog = () => {
    setIsOpen((prev) => !prev);
  };

  const toggleMusic = () => {
    setIsMusicPlaying((prev) => !prev);
  };

  const changeTrack = (index) => {
    setCurrentTrackIndex(index);
  };

  const handleTrackEnd = () => {
    const nextTrackIndex = isShuffle
      ? Math.floor(Math.random() * audioTracks.length)
      : (currentTrackIndex + 1) % audioTracks.length;
    setCurrentTrackIndex(nextTrackIndex);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Floating Music Button */}
      <button
        onClick={toggleMusicDialog}
        className={`transition-transform duration-500 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 p-4 rounded-full shadow-lg`}
      >
        <MdQueueMusic size={28} color="white" />
      </button>

      {/* Music Player Popup */}
      {isOpen && (
        <div
        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 transition-all duration-500"

        >
          <div
            className="bg-white rounded-xl shadow-xl p-6 w-96 relative"
            style={{
              backgroundColor: currentColor,
              transition: "background-color 0.5s ease",
            }}
          >
            {/* Close Button */}
            <button
              onClick={toggleMusicDialog}
              className="absolute top-4 right-4 text-white"
            >
              <FaTimes size={20} />
            </button>

            {/* Now Playing Section */}
            <h2 className="text-xl font-bold text-center mb-4">
              Now Playing
            </h2>
            <div className="flex flex-col space-y-2 mb-4">
              {audioTracks.map((track, index) => (
                <div
                  key={index}
                  className={`p-2 rounded-md transition-colors ${
                    currentTrackIndex === index
                      ? "bg-white text-black"
                      : "hover:bg-gray-200"
                  }`}
                  onClick={() => changeTrack(index)}
                >
                  {track.title}
                </div>
              ))}
            </div>

            {/* Music Controls */}
            <div className="flex justify-between items-center space-x-4">
              <button onClick={() => setIsShuffle((prev) => !prev)}>
                <MdShuffle
                  size={24}
                  style={{ color: isShuffle ? "white" : "black" }}
                />
              </button>
              <button onClick={toggleMusic}>
                {isMusicPlaying ? (
                  <FaPause size={24} />
                ) : (
                  <FaPlay size={24} />
                )}
              </button>
              <button onClick={handleTrackEnd}>
                <MdSkipNext size={24} />
              </button>
              <button onClick={() => setIsRepeat((prev) => !prev)}>
                <MdRepeat
                  size={24}
                  style={{ color: isRepeat ? "white" : "black" }}
                />
              </button>
              <button onClick={() => setIsCrossfade((prev) => !prev)}>
                <span
                  style={{
                    color: isCrossfade ? "white" : "black",
                  }}
                >
                  Crossfade
                </span>
              </button>
            </div>
          </div>
        </div>
      )}

      <audio
        ref={audioRef}
        src={audioTracks[currentTrackIndex]?.url}
        onEnded={handleTrackEnd}
      />
    </div>
  );
};

export default FloatingMusicButton;
