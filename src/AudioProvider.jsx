import { createContext, useContext, useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom"; // Import useLocation for route change detection

const AudioContext = createContext();

export const AudioProvider = ({ children }) => {
  const audioRef = useRef(null);
  const [currentTrack, setCurrentTrack] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const location = useLocation(); // To detect route changes

  const audioTracks = [
    {
      title: "Jack Garratt - Surprise Yourself",
      url: "https://rildi.sunproxy.net/file/cWJSL0N2aFdQbTVEZmQ2S2FCb3VWL2Y3MjRMS2FvYTRVTEgyYW5MSWU0d2wvK3pZRnZwNVprUGxWNEhnTFpZVkRRUnh1V3RlTEZiUHNYZlo5V29tOVlKNC81M0VWbTJKVnMxU3l6Z1V2a0U9/Jack_Garratt_-_1-08._Surprise_Yourself_(Hydr0.org).mp3",
    },
    {
      title: "Timeless Full Drum Loop",
      url: "https://cdn.shopify.com/s/files/1/0129/7698/0032/files/Cymatics_-_Timeless_Full_Drum_Loop.mp3?v=1618935629",
    },
    {
      title: "Summer Daze Melody",
      url: "https://cdn.shopify.com/s/files/1/0129/7698/0032/files/Cymatics_-_Summer_Daze_Melody_b06e61cb-334f-4673-a5b4-c28f873d643c.mp3?v=1618935629",
    },
  ];

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.src = audioTracks[currentTrack].url;
      audioRef.current.load();
      if (isPlaying) {
        audioRef.current.play();
      }
    }
  }, [currentTrack]);

  useEffect(() => {
    // Pause audio when navigating to a new route
    setIsPlaying(false);
  }, [location]);

  const togglePlay = () => setIsPlaying((prev) => !prev);
  const changeTrack = (index) => {
    setCurrentTrack(index);
    setIsPlaying(true);
  };

  return (
    <AudioContext.Provider
      value={{ audioRef, audioTracks, currentTrack, isPlaying, togglePlay, changeTrack }}
    >
      <audio ref={audioRef} />
      {children}
    </AudioContext.Provider>
  );
};

AudioProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useAudio = () => useContext(AudioContext);
