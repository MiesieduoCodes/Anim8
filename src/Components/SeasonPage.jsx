import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from "./Footer";
import FloatingMusicButton from '../FloatingMusicButton';
import Navbar from "./Navbar";
import movies from '../Constants/data'; // Import your structured movie data

const SeasonPage = () => {
  // State management for music
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [selectedGenre, setSelectedGenre] = useState(''); // State for genre selection

  const toggleMusic = () => {
    setIsMusicPlaying(!isMusicPlaying);
  };

  const changeTrack = (index) => {
    setCurrentTrackIndex(index);
  };

  useEffect(() => {
    if (currentTrackIndex >= 0) {
      const audio = new Audio([currentTrackIndex].url);
      if (isMusicPlaying) {
        audio.play();
      } else {
        audio.pause();
      }
    }
  }, [isMusicPlaying, currentTrackIndex]);

  const queryParams = new URLSearchParams(window.location.search);
  const animeTitle = queryParams.get('title');
  const result = movies.find((movie) => movie.title === animeTitle);

  // Function to handle genre filtering
  const handleGenreChange = (e) => {
    setSelectedGenre(e.target.value);
  };

  // Filter movies by selected genre
  const filteredSeasons = result ? result.seasons.filter((season) => {
    return selectedGenre ? season.genre === selectedGenre : true;
  }) : [];

  // Get distinct genres from the seasons data
  const genres = result ? [...new Set(result.seasons.map(season => season.genre))] : [];

  return (
    <div className="bg-gray-100 main-content pt-24 min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <div className="relative bg-gray-900 text-white py-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${result ? result.backgroundImage || 'default-image-url.jpg' : 'default-image-url.jpg'})`
          }}
        >
          <div className="bg-black opacity-50 h-full w-full"></div>
        </div>
        <div className="container mx-auto relative z-10 text-center">
          <h1 className="text-5xl font-bold mb-4">{result ? result.title : 'Anime Title'}</h1>
          <p className="text-3xl mb-8">{result ? result.synopsis || 'No synopsis available.' : 'No description available.'}</p>
          <Link
            to={`/trailer/${animeTitle}`} // Link to the trailer page
            className="inline-block bg-red-500 text-white rounded px-6 py-3 hover:bg-red-600 transition"
          >
            Watch Trailer
          </Link>
        </div>
      </div>

      <div className="container mx-auto my-10">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Explore Movies</h1>

        {/* Genre Filter */}
        <div className="mb-6">
          <label htmlFor="genre" className="text-lg font-semibold mr-4">Filter by Genre:</label>
          <select
            id="genre"
            value={selectedGenre}
            onChange={handleGenreChange}
            className="border border-gray-300 rounded-lg px-4 py-2"
          >
            <option value="">All Genres</option>
            {genres.map((genre) => (
              <option key={genre} value={genre}>
                {genre}
              </option>
            ))}
          </select>
        </div>

        {result ? (
          <div>
            <div>
              {/* Map through the filtered seasons */}
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {filteredSeasons.map((season) => (
                  <div key={season.id} className="border border-gray-300 rounded-lg overflow-hidden shadow-md transition-transform transform hover:scale-105">
                    <div
                      className="h-40 bg-cover bg-center"
                      style={{
                        backgroundImage: `url(${season.backgroundImage || 'default-season-image-url.jpg'})`, // Adjust to your image source for seasons
                      }}
                    ></div>
                    <div className="p-4 bg-white">
                      <h4 className="text-lg font-semibold text-gray-900">Season {season.seasonNumber}</h4>
                      <Link
                        to={`/episodes/${result.id}/${season.id}?title=${result.title}&epinum=${season.seasonNumber}`} // Construct the URL with movie and season IDs
                        className="mt-4 inline-block bg-red-500 text-white rounded px-4 py-2"
                      >
                        Watch Season {season.seasonNumber}
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <p className="text-gray-700">No movie found with the title {animeTitle}.</p>
        )}
      </div>

      <Footer />
      <FloatingMusicButton
        isMusicPlaying={isMusicPlaying}
        toggleMusic={toggleMusic}
        currentTrackIndex={currentTrackIndex}
        changeTrack={changeTrack}
      />
    </div>
  );
};

export default SeasonPage;
