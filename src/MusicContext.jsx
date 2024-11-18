import { createContext, useContext, useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import audioTracks from "../src/Constants/AudioData"; // Adjust path as needed

// Create MusicContext
export const MusicContext = createContext();

// Custom hook to use MusicContext
export const useMusic = () => useContext(MusicContext);

// MusicProvider Component
export const MusicProvider = ({ children }) => {
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isShuffle, setIsShuffle] = useState(false);
  const [isRepeat, setIsRepeat] = useState(false);
  const [volume, setVolume] = useState(0.8); // Default volume: 80%
  const audioRef = useRef(new Audio());

  // Load current track and manage playback
  useEffect(() => {
    const currentTrack = audioTracks[currentTrackIndex];
    if (currentTrack) {
      audioRef.current.src = currentTrack.url;
      audioRef.current.volume = volume;
      if (isMusicPlaying) {
        audioRef.current.play().catch((error) => console.error("Playback error:", error));
      } else {
        audioRef.current.pause();
      }
    }
  }, [isMusicPlaying, currentTrackIndex, volume]);

  // Play/Pause toggle
  const toggleMusic = () => setIsMusicPlaying((prev) => !prev);

  // Skip to the next track
  const handleNextTrack = () => {
    if (!audioTracks.length) return;
    const nextIndex = isShuffle
      ? Math.floor(Math.random() * audioTracks.length)
      : (currentTrackIndex + 1) % audioTracks.length;
    setCurrentTrackIndex(nextIndex);
  };

  // Go back to the previous track
  const handlePreviousTrack = () => {
    const prevIndex =
      currentTrackIndex === 0 ? audioTracks.length - 1 : currentTrackIndex - 1;
    setCurrentTrackIndex(prevIndex);
  };

  // Shuffle toggle
  const toggleShuffle = () => setIsShuffle((prev) => !prev);

  // Repeat toggle
  const toggleRepeat = () => setIsRepeat((prev) => !prev);

  // Handle track end
  const handleTrackEnd = () => {
    if (isRepeat) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    } else {
      handleNextTrack();
    }
  };

  // Attach event listeners to handle track end
  useEffect(() => {
    const audio = audioRef.current;
    audio.addEventListener("ended", handleTrackEnd);
    return () => {
      audio.removeEventListener("ended", handleTrackEnd);
    };
  }, [isRepeat]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      audioRef.current.pause();
      audioRef.current.src = "";
    };
  }, []);

  // Adjust volume
  const setAudioVolume = (newVolume) => {
    setVolume(newVolume);
    audioRef.current.volume = newVolume;
  };

  return (
    <MusicContext.Provider
      value={{
        audioTracks,
        isMusicPlaying,
        currentTrackIndex,
        currentTrack: audioTracks[currentTrackIndex], // Provide the current track details
        toggleMusic,
        handleNextTrack,
        handlePreviousTrack,
        toggleShuffle,
        toggleRepeat,
        isShuffle,
        isRepeat,
        volume,
        setAudioVolume,
      }}
    >
      {children}
    </MusicContext.Provider>
  );
};

// PropTypes validation
MusicProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
