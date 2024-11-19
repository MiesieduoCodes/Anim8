import { useState } from "react";
import {
  MdQueueMusic,
  MdSkipNext,
  MdSkipPrevious,
  MdRepeat,
  MdShuffle,
} from "react-icons/md";
import { FaPlay, FaPause, FaTimes } from "react-icons/fa";
import { useMusic } from "./MusicContext"; // Use the context hook
import "/src/index.css";

const FloatingMusicButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Consume MusicContext
  const {
    audioTracks,
    isMusicPlaying,
    toggleMusic,
    currentTrackIndex,
    handleNextTrack,
    handlePreviousTrack,
    toggleShuffle,
    toggleRepeat,
    isShuffle,
    isRepeat,
  } = useMusic();

  const currentColor = audioTracks[currentTrackIndex]?.color || "#FF6347";

  const toggleMusicDialog = () => setIsOpen((prev) => !prev);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Floating Music Button */}
      <button
        onClick={toggleMusicDialog}
        className="transition-transform duration-500 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 p-4 rounded-full shadow-lg hover:scale-110"
      >
        <MdQueueMusic size={28} color="white" />
      </button>

      {/* Music Player Popup */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70">
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
              className="absolute top-4 right-4 text-white hover:text-gray-300"
            >
              <FaTimes size={20} />
            </button>

            {/* Now Playing Section */}
            <h2 className="text-xl font-bold text-center mb-4 text-white">
              Now Playing
            </h2>
            <div
              className="flex flex-col space-y-2 mb-4 overflow-y-auto scrollable"
              style={{ maxHeight: "200px" }}
            >
              {audioTracks.map((track, index) => (
                <div
                  key={index}
                  className={`p-2 rounded-md transition-colors cursor-pointer ${
                    currentTrackIndex === index
                      ? "bg-gray-800 text-white"
                      : "hover:bg-gray-200 text-black"
                  }`}
                  onClick={() => handlePreviousTrack(index)}
                >
                  {track.title}
                </div>
              ))}
            </div>

            {/* Music Controls */}
            <div className="flex justify-between items-center space-x-4">
              <button onClick={toggleShuffle} aria-label="Toggle Shuffle">
                <MdShuffle
                  size={24}
                  className={isShuffle ? "text-green-400" : "text-white hover:scale-125"}
                />
              </button>
              <button onClick={handlePreviousTrack} aria-label="Previous Track">
                <MdSkipPrevious size={24} className="text-white hover:scale-125" />
              </button>
              <button
                onClick={toggleMusic}
                aria-label={isMusicPlaying ? "Pause" : "Play"}
              >
                {isMusicPlaying ? (
                  <FaPause size={24} className="text-white hover:scale-125" />
                ) : (
                  <FaPlay size={24} className="text-white hover:scale-125" />
                )}
              </button>
              <button onClick={handleNextTrack} aria-label="Next Track">
                <MdSkipNext size={24} className="text-white hover:scale-125" />
              </button>
              <button onClick={toggleRepeat} aria-label="Toggle Repeat">
                <MdRepeat
                  size={24}
                  className={isRepeat ? "text-green-400" : "text-white hover:scale-125"}
                />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FloatingMusicButton;
