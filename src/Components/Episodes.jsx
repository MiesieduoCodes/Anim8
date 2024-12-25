import { useLocation, useNavigate } from 'react-router-dom';
import {  useEffect } from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import movieData from '../Constants/data.js'; // Import the movie data

const EpisodesPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  const searchParams = new URLSearchParams(location.search);
  const animeTitle = searchParams.get('title');
  const seasonNumber = parseInt(searchParams.get('epinum'), 10); // Parse season number as integer

  const anime = movieData.find((movie) => movie.title === animeTitle);
  const season = anime?.seasons?.find((s) => s.seasonNumber === seasonNumber);
  const episodes = Array.isArray(season?.episodes) ? season?.episodes : [];

  useEffect(() => {
    if (!anime || !season) {
      navigate('/');
      return;
    }
  }, [anime, season, navigate]);

  return (
    <div className="bg-gray-100 main-content pt-24 min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <div className="relative bg-gray-900 text-white py-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${anime?.backgroundImage || 'default-image-url.jpg'})`,
          }}
        >
          <div className="bg-black opacity-50 h-full w-full"></div>
        </div>
        <div className="container mx-auto relative z-10 text-center">
          <h1 className="text-5xl font-bold mb-4">{anime?.title} - Season {season?.seasonNumber}</h1>
          <p className="text-3xl mb-8">{anime?.synopsis}</p>
        </div>
      </div>

      <div className="container mx-auto my-10 px-5">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Episodes</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {episodes.length > 0 ? (
            episodes.map((episode) => (
              <div key={episode.epiNum || episode.title} className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
                <div
                  className="h-48 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${episode.backgroundImage || '/path-to-sample-image.jpg'})`,
                  }}
                ></div>
                <div className="p-5">
                  <h2 className="text-xl font-semibold text-gray-900">{episode.title || `Episode ${episode.epiNum || 'Unknown'}`}</h2>
                  <p className="text-gray-700 mt-2 mb-4">{episode.synopsis || "No description available."}</p>
                  
                  {/* Download Episode Button */}
                  <a 
                    href={episode.downloadLink || '#'}
                    className="inline-block mt-3 px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 transition-colors"
                    download
                  >
                    Download Episode
                  </a>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-700">No episodes available for this season.</p>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default EpisodesPage;