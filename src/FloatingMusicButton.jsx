// src/FloatingMusicButton.jsx
import { useState } from 'react';
import PropTypes from 'prop-types';
import { MdQueueMusic } from "react-icons/md";
import { FaPlay, FaPause } from "react-icons/fa";

const FloatingMusicButton = ({
  isMusicPlaying,
  toggleMusic,
  currentTrackIndex,
  changeTrack,
  tracks
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMusicDialog = () => {
    setIsOpen(prevState => !prevState);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={toggleMusicDialog}
        className="bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
        aria-label="Open music queue"
      >
        <MdQueueMusic size={24} />
      </button>

      {isOpen && (
        <div className="absolute bottom-16 right-0 bg-white shadow-lg rounded-lg p-4 w-64">
          <h3 className="text-lg font-bold mb-2">Music Queue</h3>
          {tracks && tracks.length > 0 ? (
            <ul className="list-disc list-inside">
              {tracks.map((track, index) => (
                <li key={index} className={`py-1 ${index === currentTrackIndex ? 'font-bold text-blue-600' : ''}`}>
                  {index === currentTrackIndex && isMusicPlaying ? (
                    <FaPause className="inline mr-1 text-green-500" />
                  ) : (
                    <FaPlay className="inline mr-1 text-green-500" />
                  )}
                  {track.title}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">No tracks available</p>
          )}
          <div className="flex justify-between mt-4">
            <button 
              onClick={() => changeTrack((currentTrackIndex + 1) % tracks.length)} 
              className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700 transition-colors"
              aria-label="Next track"
            >
              Next
            </button>
            <button 
              onClick={toggleMusic} 
              className="bg-green-500 text-white p-2 rounded hover:bg-green-600 transition-colors"
              aria-label={isMusicPlaying ? 'Pause music' : 'Play music'}
            >
              {isMusicPlaying ? 'Pause' : 'Play'}
            </button>
            <button 
              onClick={toggleMusicDialog} 
              className="bg-red-500 text-white p-2 rounded hover:bg-red-600 transition-colors"
              aria-label="Close music queue"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

// PropTypes validation
FloatingMusicButton.propTypes = {
  isMusicPlaying: PropTypes.bool.isRequired,
  toggleMusic: PropTypes.func.isRequired,
  currentTrackIndex: PropTypes.number.isRequired,
  changeTrack: PropTypes.func.isRequired,
  tracks: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default FloatingMusicButton;
