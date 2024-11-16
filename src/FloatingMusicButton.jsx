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
    title: "Bez - More You",
    url: "https://example.com/more_you.mp3",
    color: "#FF6347", // Tomato
  },
  {
    title: "Burna Boy - I Told Them",
    url: "https://example.com/i_told_them.mp3",
    color: "#1E90FF", // DodgerBlue
  },
  {
    title: "Taylor Swift - Love Story",
    url: "https://example.com/love_story.mp3",
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
          className="fixed inset-0 flex items-center justify-center transition-all duration-500"
          style={{
            backgroundColor: currentColor,
          }}
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
                  style={{ color: isShuffle ? "white" : "#F0F0F0" }}
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
                  style={{ color: isRepeat ? "white" : "#F0F0F0" }}
                />
              </button>
              <button onClick={() => setIsCrossfade((prev) => !prev)}>
                <span
                  style={{
                    color: isCrossfade ? "white" : "#F0F0F0",
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
