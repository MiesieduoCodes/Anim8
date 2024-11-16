import React, { createContext, useContext, useState, useRef, useEffect } from "react";
import audioTracks from "../src/Constants/AudioData";

// Create MusicContext
export const MusicContext = createContext();

// Custom hook to use MusicContext
export const useMusic = () => useContext(MusicContext);

// Music Provider to wrap the app and manage music state
export const MusicProvider = ({ children }) => {
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isShuffle, setIsShuffle] = useState(false);
  const [isRepeat, setIsRepeat] = useState(false);
  const audioRef = useRef(new Audio());


  // Handle track change and play/pause logic
  useEffect(() => {
    if (audioTracks[currentTrackIndex]) {
      audioRef.current.src = audioTracks[currentTrackIndex].url;
      if (isMusicPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [isMusicPlaying, currentTrackIndex]);

  // Handle the next track
  const handleNextTrack = () => {
    if (!audioTracks.length) return; // Prevent access if no tracks exist
    const nextIndex = isShuffle
      ? Math.floor(Math.random() * audioTracks.length)
      : (currentTrackIndex + 1) % audioTracks.length;
    setCurrentTrackIndex(nextIndex);
  };

  // Handle previous track
  const handlePreviousTrack = () => {
    const prevIndex =
      currentTrackIndex === 0 ? audioTracks.length - 1 : currentTrackIndex - 1;
    setCurrentTrackIndex(prevIndex);
  };

  // Toggle shuffle mode
  const toggleShuffle = () => setIsShuffle((prev) => !prev);

  // Toggle repeat mode
  const toggleRepeat = () => setIsRepeat((prev) => !prev);

  // Handle track end logic for repeat or next track
  const handleTrackEnd = () => {
    if (isRepeat) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    } else {
      handleNextTrack();
    }
  };

  // Listen to the audio end event
  useEffect(() => {
    const audio = audioRef.current;
    audio.addEventListener("ended", handleTrackEnd);
    return () => {
      audio.removeEventListener("ended", handleTrackEnd);
    };
  }, [isRepeat]);

  return (
    <MusicContext.Provider
      value={{
        audioTracks,
        isMusicPlaying,
        currentTrackIndex,
        toggleMusic: () => setIsMusicPlaying((prev) => !prev),
        handleNextTrack,
        handlePreviousTrack,
        toggleShuffle,
        toggleRepeat,
        isShuffle,
        isRepeat,
      }}
    >
      {children}
    </MusicContext.Provider>
  );
};
