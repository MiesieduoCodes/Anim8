import { useState, useEffect, useRef } from "react";
import {
  MdQueueMusic,
  MdSkipNext,
  MdSkipPrevious,
  MdRepeat,
  MdShuffle,
} from "react-icons/md";
import { FaPlay, FaPause, FaTimes } from "react-icons/fa";
import audioTracks from "../src/Constants/AudioData";
import "./index.css";

const FloatingMusicButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isShuffle, setIsShuffle] = useState(false);
  const [isRepeat, setIsRepeat] = useState(false);
  const audioRef = useRef(new Audio());

  const currentColor = audioTracks[currentTrackIndex]?.color || "#FF6347";

  useEffect(() => {
    const audio = audioRef.current;
    audio.src = audioTracks[currentTrackIndex]?.url;

    if (isMusicPlaying) {
      audio.play();
    } else {
      audio.pause();
    }

    const handleTrackEnd = () => {
      if (isRepeat) {
        audio.currentTime = 0;
        audio.play();
      } else {
        handleNextTrack();
      }
    };

    audio.addEventListener("ended", handleTrackEnd);

    return () => {
      audio.removeEventListener("ended", handleTrackEnd);
    };
  }, [isMusicPlaying, currentTrackIndex, isRepeat]);

  const toggleMusicDialog = () => setIsOpen((prev) => !prev);
  const toggleMusic = () => setIsMusicPlaying((prev) => !prev);

  const handlePreviousTrack = () => {
    setCurrentTrackIndex((prev) =>
      prev === 0 ? audioTracks.length - 1 : prev - 1
    );
  };

  const handleNextTrack = () => {
    const nextTrackIndex = isShuffle
      ? Math.floor(Math.random() * audioTracks.length)
      : (currentTrackIndex + 1) % audioTracks.length;

    setCurrentTrackIndex(nextTrackIndex);
  };

  const toggleShuffle = () => setIsShuffle((prev) => !prev);
  const toggleRepeat = () => setIsRepeat((prev) => !prev);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Floating Music Button */}
      <button
        onClick={toggleMusicDialog}
        className="transition-transform duration-500 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 p-4 rounded-full shadow-lg"
      >
        <MdQueueMusic size={28} color="white" />
      </button>

      {/* Music Player Popup */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 transition-all duration-500">
          <div
            className="bg-white rounded-xl shadow-xl p-6 w-96 relative"
            style={{
              backgroundColor: currentColor,
              transition: "background-color 0.5s ease",
            }}
          >
            {/* Close Button */}
            <button onClick={toggleMusicDialog} className="absolute top-4 right-4 text-white">
              <FaTimes size={20} />
            </button>

            {/* Now Playing Section */}
            <h2 className="text-xl font-bold text-center mb-4">Now Playing</h2>
            <div
              className="track-list flex flex-col space-y-2 mb-4 overflow-y-auto"
              style={{ maxHeight: "200px" }}
            >
              {audioTracks.map((track, index) => (
                <div
                  key={index}
                  className={`p-2 rounded-md transition-colors ${
                    currentTrackIndex === index ? "bg-white text-black" : "hover:bg-gray-200"
                  }`}
                  onClick={() => setCurrentTrackIndex(index)}
                >
                  {track.title}
                </div>
              ))}
            </div>

            {/* Music Controls */}
            <div className="flex justify-between items-center space-x-4">
              <button onClick={handlePreviousTrack} aria-label="Previous Track">
                <MdSkipPrevious size={24} style={{ color: "black" }} />
              </button>
              <button onClick={toggleShuffle} aria-label="Toggle Shuffle">
                <MdShuffle size={24} style={{ color: isShuffle ? "white" : "black" }} />
              </button>
              <button onClick={toggleMusic} aria-label={isMusicPlaying ? "Pause" : "Play"}>
                {isMusicPlaying ? <FaPause size={24} /> : <FaPlay size={24} />}
              </button>
              <button onClick={handleNextTrack} aria-label="Next Track">
                <MdSkipNext size={24} style={{ color: "black" }} />
              </button>
              <button onClick={toggleRepeat} aria-label="Toggle Repeat">
                <MdRepeat size={24} style={{ color: isRepeat ? "white" : "black" }} />
              </button>
            </div>
          </div>
        </div>
      )}

      <audio ref={audioRef} />
    </div>
  );
};

export default FloatingMusicButton;
