
import { Link } from 'react-router-dom';
import Footer from "./Footer";
 
import Navbar from "./Navbar";
import movies from '../Constants/data'; // Import your structured movie data

const SeasonPage = () => {
  // State management for music
 
 


  const queryParams = new URLSearchParams(window.location.search);
  const animeTitle = queryParams.get('title');
  const result = movies.find((movie) => movie.title === animeTitle);

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
   

        {result ? (
          <div>
            <div>
              {/* Map through the seasons */}
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {result.seasons.map((season) => (
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
                        View Season {season.seasonNumber}
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
 
    </div>
  );
};

export default SeasonPage;
