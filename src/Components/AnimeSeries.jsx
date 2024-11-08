import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import FloatingMusicButton from '../FloatingMusicButton';
import movies from "../Constants/data";

const groupMoviesByGenre = (movies) => {
  return movies.reduce((acc, movie) => {
    const { genre } = movie;
    if (!acc[genre]) {
      acc[genre] = [];
    }
    acc[genre].push(movie);
    return acc;
  }, {});
};

const AnimeSeries = () => {
  const moviesByGenre = groupMoviesByGenre(movies);

  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const audioRef = useRef(null);

  // Toggle music playback
  const toggleMusic = () => {
    setIsMusicPlaying(!isMusicPlaying);
  };

  // Change to a specific track
  const changeTrack = (index) => {
    setCurrentTrackIndex(index);
  };

  // Effect to play/pause music when isMusicPlaying state changes
  useEffect(() => {
    if (audioRef.current) {
      if (isMusicPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [isMusicPlaying]);

  // Effect to change track source when currentTrackIndex changes
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.src = `path/to/your/track-${currentTrackIndex}.mp3`; // Update with actual paths
      if (isMusicPlaying) {
        audioRef.current.play();
      }
    }
  });

  return (
    <div className="bg-gray-400 main-content pt-24 min-h-screen">
      <Navbar />
      <div className="container mx-auto my-10">
        <div className="relative bg-cover bg-center h-64 md:h-80 lg:h-96" 
          style={{ backgroundImage: `url('https://c4.wallpaperflare.com/wallpaper/279/89/75/goofy-mickey-mouse-donald-duck-daisy-and-pluto-disney-hd-wallpapers-1920%C3%971200-wallpaper-preview.jpg')`}}>

           <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center p-4 md:p-6 lg:p-8">
            <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold text-center"> Anime Series </h1>

            <p className="text-white text-base md:text-lg lg:text-xl text-center mt-2 md:mt-4"> Explore our collection of animated magic that have captured hearts over the years.</p>

          </div>

        </div>

        {Object.keys(moviesByGenre).map((genre) => (
          <div key={genre} className="mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">{genre}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {moviesByGenre[genre].map((movie) => (

                <div key={movie.id}
                  className="relative border border-gray-200 rounded-lg overflow-hidden"
                  style={{ backgroundImage: `url(${movie.backgroundImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '300px',}}>

                  <div className="bg-black bg-opacity-50 p-5 h-full flex flex-col justify-end">
                    <h3 className="text-xl font-semibold text-white">{movie.title}</h3>
                    <p className="text-white">{movie.synopsis}</p>

                    <Link
                      to={`/anime/${movie.id}?title=${movie.title}`}
                      className="mt-2 inline-block bg-red-500 text-white rounded px-4 py-2" >

                      View Series

                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      <Footer />

      {/* Floating Music Button with functionality */}
      <FloatingMusicButton
        isMusicPlaying={isMusicPlaying}
        toggleMusic={toggleMusic}
        currentTrackIndex={currentTrackIndex}
        changeTrack={changeTrack}
      />

      {/* Audio Element for Music Playback */}
      <audio ref={audioRef} src={`path/to/your/track-${currentTrackIndex}.mp3`} />
    </div>
  );
};

export default AnimeSeries;
