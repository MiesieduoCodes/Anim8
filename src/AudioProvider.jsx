import { createContext, useContext, useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";

const AudioContext = createContext();

export const AudioProvider = ({ children }) => {
  const audioRef = useRef(null);
  const [currentTrack, setCurrentTrack] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

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
    {
      title: "Jon Bellion - Hand of God",
      url: "https://rildi.sunproxy.net/file/VDY0d2dqays5OStzQXZaL2ZKaWxTRy9ZVzBlNFpBd3RwbEQxNXdGUHRTUFJzODBQeWRpNG1naWRzVUNvcXEyYTQ1djBWTmlWNGJuQStzTlNVZWhZWHU2c3ZhU3NqRitWOEg5UGlFM29nNWs9/Jon_Bellion_-_Hand_Of_God_(Hydr0.org).mp3",
    },
    {
      title: "Jon Bellion - Luxury",
      url: "https://rildi.sunproxy.net/file/VDY0d2dqays5OStzQXZaL2ZKaWxTRy9ZVzBlNFpBd3RwbEQxNXdGUHRTTUdWeEh5b3pndVZhbU8xMFE3SHVTSjBRSFdXaGx4SStxQjlxc2ZtTmVzK1FyNmc1emg2SXByWkY3Qncyb0RLLzQ9/Jon_Bellion_Ft._Audra_Mae_-_Luxury_(Hydr0.org).mp3",
    },
    {
      title: "Moana Theme Song - You're Welcome",
      url: "https://rildi.sunproxy.net/file/VDY0d2dqays5OStzQXZaL2ZKaWxTRy9ZVzBlNFpBd3RwbEQxNXdGUHRTTzM4RzhCeURramZVenF6MEdOd0lUME12M0xFRWorWHNYa0tsdUUrK3lOMzlXUjFVV1FTakRZcTQ3Y2hhN2VvWU09/Disney_s_MOANA_Movie_-_You_re_Welcome_Song_(Hydr0.org).mp3",
    },
    {
      title: "Burna Boy - I Told Them",
      url: "https://example.com/burna_boy_i_told_them.mp3",
    },
    {
      title: "Kanye West - Homecoming",
      url: "https://rildi.sunproxy.net/file/VDY0d2dqays5OStzQXZaL2ZKaWxTRy9ZVzBlNFpBd3RwbEQxNXdGUHRTUGllTStNbnlsS0RPdk9aeis3bUY5RFlha1ZPL2pka1RSNEhsRDZLbVhSWlFnVVoyMVIxV0VmVENTUExGN1ZveEU9/Kanye_West_-_Homecoming_(Hydr0.org).mp3",
    },
    {
      title: "Kanye West - Ghost Town",
      url: "https://olagist.net/wp-content/uploads/2023/06/Kanye_West_Ft_PartyNextDoor_-_Ghost_Town.mp3?_=1",
    },
    {
      title: "Mac Miller - Small World",
      url: "https://rildi.sunproxy.net/file/VDY0d2dqays5OStzQXZaL2ZKaWxTRy9ZVzBlNFpBd3RwbEQxNXdGUHRTUDJka1pSY0gwb2YxYVVlR29IdjBEMXNLMFlvMG9MaGZvSmhxakJaclFjais2aU04Z0FwRnc3eGppeWkvM0FhUzg9/Mac_Miller_-_Small_Worlds_(Hydr0.org).mp3",
    },
    {
      title: "Meek Mill - Dangerous",
      url: "https://rildi.sunproxy.net/file/VDY0d2dqays5OStzQXZaL2ZKaWxTRy9ZVzBlNFpBd3RwbEQxNXdGUHRTTzM4RzhCeURramZVenF6MEdOd0lUMDMzZFNEQjNiU1g2YVVEcFRwQ3RYeml4VC9BQWRiaDMrUXh4QksxRHhHN1k9/Meek_Mill_-_Dangerous_(Hydr0.org).mp3",
    },
    {
      title: "Bez - More You",
      url: "https://rildi.sunproxy.net/file/VDY0d2dqays5OStzQXZaL2ZKaWxTRy9ZVzBlNFpBd3RwbEQxNXdGUHRTTUdWeEh5b3pndVZhbU8xMFE3SHVTSkNHSmNDVm9sQnRPTGZ4eVg1RFdaRnNWNmE1cUttd2hlbUFidnM1TlhMS289/Bez_-_More_You_(Hydr0.org).mp3",
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
      audioRef.current.load();  // Reload the audio source when track changes
      if (isPlaying) {
        audioRef.current.play();
      }
    }
  }, [currentTrack]);

  const togglePlay = () => setIsPlaying((prev) => !prev);
  const changeTrack = (index) => {
    setCurrentTrack(index);
    setIsPlaying(true);  // Start playing the new track automatically
  };

  return (
    <AudioContext.Provider
      value={{ audioRef, audioTracks, currentTrack, isPlaying, togglePlay, changeTrack }}
    >
      <audio ref={audioRef} src={audioTracks[currentTrack].src} />
      {children} {/* Pass down the children components */}
    </AudioContext.Provider>
  );
};

// Add PropTypes validation
AudioProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useAudio = () => useContext(AudioContext);
