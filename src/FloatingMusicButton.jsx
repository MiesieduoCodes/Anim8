import { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { MdQueueMusic } from "react-icons/md";
import { FaPlay, FaPause } from "react-icons/fa";
// Define the music tracks
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
    url: "https://rildi.sunproxy.net/file/VDY0d2dqays5OStzQXZaL2ZKaWxTRy9ZVzBlNFpBd3RwbEQxNXdGUHRTzM4RzhCeURramZVenF6MEdOd0lUMDMzZFNEQjNiU1g2YVVEcFRwQ3RYeml4VC9BQWRiaDMrUXh4QksxRHhHN1k9/Meek_Mill_-_Dangerous_(Hydr0.org).mp3",
  },
  {
    title: "Bez - More You",
    url: "https://rildi.sunproxy.net/file/VDY0d2dqays5OStzQXZaL2ZKaWxTRy9ZVzBlNFpBd3RwbEQxNXdGUHRTTUdWeEh5b3pndVZhbU8xMFE3SHVTSkNHSmNDVm9sQnRPTGZ4eVg1RFdaRnNWNmE1cUttd2hlbUFidnM1TlhMS289/Bez_-_More_You_(Hydr0.org).mp3",
  },
];

const FloatingMusicButton = ({
  isMusicPlaying,
  toggleMusic,
  currentTrackIndex,
  changeTrack,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const audioRef = useRef(null);

  // Play or pause music based on isMusicPlaying state
  useEffect(() => {
    if (isMusicPlaying && audioTracks[currentTrackIndex]) {
      audioRef.current.play();
    } else if (audioRef.current) {
      audioRef.current.pause();
    }
  }, [isMusicPlaying, currentTrackIndex]);

  // Function to handle track end and move to the next track
  const handleTrackEnd = () => {
    const nextTrackIndex = (currentTrackIndex + 1) % audioTracks.length;
    changeTrack(nextTrackIndex);
  };

  const toggleMusicDialog = () => {
    setIsOpen((prevState) => !prevState);
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
          {audioTracks && audioTracks.length > 0 ? (
            <ul className="list-disc list-inside">
              {audioTracks.map((track, index) => (
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
              onClick={() => changeTrack((currentTrackIndex + 1) % audioTracks.length)}
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

      {/* Hidden audio element to play music */}
      {audioTracks[currentTrackIndex] && (
        <audio
          ref={audioRef}
          src={audioTracks[currentTrackIndex].url}
          onEnded={handleTrackEnd}
        />
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
};

export default FloatingMusicButton;