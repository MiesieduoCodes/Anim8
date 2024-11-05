import { createContext, useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

export const MusicContext = createContext();

export const MusicProvider = ({ children }) => {
  const [isMusicPlaying, setIsMusicPlaying] = useState(true);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);
  const audioRef = useRef(null);

  const tracks = [
    {
      title: "Jack Garratt - Surprise Yourself",
      url: "https://rildi.sunproxy.net/file/cWJSL0N2aFdQbTVEZmQ2S2FCb3VWL2Y3MjRMS2FvYTRVTEgyYW5MSWU0d2wvK3pZRnZwNVprUGxWNEhnTFpZVkRRUnh1V3RlTEZiUHNYZlo5V29tOVlKNC81M0VWbTJKVnMxU3l6Z1V2a0U9/Jack_Garratt_-_1-08._Surprise_Yourself_(Hydr0.org).mp3",
      background: "https://c4.wallpaperflare.com/wallpaper/780/383/751/movie-lilo-and-stitch-wallpaper-preview.jpg",
    },
    {
      title: "Timeless Full Drum Loop",
      url: "https://cdn.shopify.com/s/files/1/0129/7698/0032/files/Cymatics_-_Timeless_Full_Drum_Loop.mp3?v=1618935629",
      background: "https://c4.wallpaperflare.com/wallpaper/673/107/786/up-movie-pixar-animation-studios-movies-sky-wallpaper-preview.jpg",
    },
    {
      title: "Summer Daze Melody",
      url: "https://cdn.shopify.com/s/files/1/0129/7698/0032/files/Cymatics_-_Summer_Daze_Melody_b06e61cb-334f-4673-a5b4-c28f873d643c.mp3?v=1618935629",
      background: "https://images8.alphacoders.com/824/thumb-1920-824926.jpg",
    },
    
    {
      title: "Jon Bellion - Hand of God",
      url: "https://rildi.sunproxy.net/file/VDY0d2dqays5OStzQXZaL2ZKaWxTRy9ZVzBlNFpBd3RwbEQxNXdGUHRTUFJzODBQeWRpNG1naWRzVUNvcXEyYTQ1djBWTmlWNGJuQStzTlNVZWhZWHU2c3ZhU3NqRitWOEg5UGlFM29nNWs9/Jon_Bellion_-_Hand_Of_God_(Hydr0.org).mp3",
      background:"https://wallpapercave.com/wp/wp7820489.jpg",
    },
    {
      title: "Jon Bellion - Luxury",
      url: "https://rildi.sunproxy.net/file/VDY0d2dqays5OStzQXZaL2ZKaWxTRy9ZVzBlNFpBd3RwbEQxNXdGUHRTTUdWeEh5b3pndVZhbU8xMFE3SHVTSjBRSFdXaGx4SStxQjlxc2ZtTmVzK1FyNmc1emg2SXByWkY3Qncyb0RLLzQ9/Jon_Bellion_Ft._Audra_Mae_-_Luxury_(Hydr0.org).mp3",
      background:"https://wallpapercave.com/dwp1x/wp14486446.jpg",
    },
    {
      title: "Moana Theme Song - You're Welcome",
      url: "https://rildi.sunproxy.net/file/VDY0d2dqays5OStzQXZaL2ZKaWxTRy9ZVzBlNFpBd3RwbEQxNXdGUHRTTzM4RzhCeURramZVenF6MEdOd0lUME12M0xFRWorWHNYa0tsdUUrK3lOMzlXUjFVV1FTakRZcTQ3Y2hhN2VvWU09/Disney_s_MOANA_Movie_-_You_re_Welcome_Song_(Hydr0.org).mp3",
      background:"https://c4.wallpaperflare.com/wallpaper/134/1023/771/raya-and-the-last-dragon-animated-movies-raya-raya-and-the-last-dragon-movies-hd-wallpaper-preview.jpg",
    },
    {
      title: "Burna Boy - I Told Them",
      background: "https://static.wikia.nocookie.net/08cb8af6-daab-42bf-a591-c23e9ccbe09a/scale-to-width-down/800",
      url: "https://example.com/burna_boy_i_told_them.mp3",
    },
    {
      title: "Kanye West - Homecoming",
      background:"https://c4.wallpaperflare.com/wallpaper/459/924/918/zootopia-rabbit-cartoon-fox-wallpaper-preview.jpg",
      url: "https://rildi.sunproxy.net/file/VDY0d2dqays5OStzQXZaL2ZKaWxTRy9ZVzBlNFpBd3RwbEQxNXdGUHRTUGllTStNbnlsS0RPdk9aeis3bUY5RFlha1ZPL2pka1RSNEhsRDZLbVhSWlFnVVoyMVIxV0VmVENTUExGN1ZveEU9/Kanye_West_-_Homecoming_(Hydr0.org).mp3",
   
    },
    {
      title: "Kanye West - Ghost Town",
      url: "https://olagist.net/wp-content/uploads/2023/06/Kanye_West_Ft_PartyNextDoor_-_Ghost_Town.mp3?_=1",
      background: "https://images8.alphacoders.com/125/thumb-1920-1254691.jpg",
    },
    {
      background:"https://wallpapercave.com/wp/wp9624137.jpg",
      title: "Mac Miller - Small Worlds",
      url: "https://rildi.sunproxy.net/file/VDY0d2dqays5OStzQXZaL2ZKaWxTRy9ZVzBlNFpBd3RwbEQxNXdGUHRTUDJka1pSY0gwb2YxYVVlR29IdjBEMXNLMFlvMG9MaGZvSmhxakJaclFjais2aU04Z0FwRnc3eGppeWkvM0FhUzg9/Mac_Miller_-_Small_Worlds_(Hydr0.org).mp3",

    },
    {
      title: "Meek Mill - Dangerous",
      url: "https://rildi.sunproxy.net/file/VDY0d2dqays5OStzQXZaL2ZKaWxTRy9ZVzBlNFpBd3RwbEQxNXdGUHRTTzM4RzhCeURramZVenF6MEdOd0lUMDMzZFNEQjNiU1g2YVVEcFRwQ3RYeml4VC9BQWRiaDMrUXh4QksxRHhHN1k9/Meek_Mill_-_Dangerous_(Hydr0.org).mp3",
      background:"https://imgix.ranker.com/list_img_v2/11904/3271904/original/3271904?auto=format&q=50&fit=crop&fm=pjpg&dpr=2&crop=faces&h=356.020942408377&w=680",
    },
    {
      title: "Bez - More You",
      url: "https://rildi.sunproxy.net/file/VDY0d2dqays5OStzQXZaL2ZKaWxTRy9ZVzBlNFpBd3RwbEQxNXdGUHRTTUdWeEh5b3pndVZhbU8xMFE3SHVTSkNHSmNDVm9sQnRPTGZ4eVg1RFdaRnNWNmE1cUttd2hlbUFidnM1TlhMS289/Bez_-_More_You_(Hydr0.org).mp3",
      background:"https://www.motionpictures.org/wp-content/uploads/2023/03/The_Magicians_Elephant_00_27_38_07.jpg",
    },
  ];

  const toggleMusic = () => setIsMusicPlaying((prev) => !prev);

  useEffect(() => {
    if (isMusicPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isMusicPlaying, currentTrackIndex]);

  return (
    <MusicContext.Provider
      value={{
        isMusicPlaying,
        toggleMusic,
        currentTrackIndex,
        setCurrentTrackIndex,
        tracks,
        isFavorite,
        setIsFavorite,
        audioRef,
      }}
    >
      {children}
    </MusicContext.Provider>
  );
};

MusicProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
