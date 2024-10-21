
import { useState} from 'react';
import { motion } from 'framer-motion';
import { FaDownload, FaHeart } from 'react-icons/fa';

// Data management (API integration)
const movieData = {
  title: 'Movie Title',
  poster: 'poster.jpg',
  synopsis: 'Lorem ipsum dolor sit amet...',
  rating: 4.5,
  reviews: 100,
  genres: ['Action', 'Adventure'],
  downloadLink: 'download-link',
};

function MovieDetailPage() {
  const [ setIsHovered] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  // Animation ideas (Framer Motion)
  const variants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  // Interactive features
  const handleDownload = () => {
    // Download logic
  };

  const handleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <motion.div
      className="max-w-4xl mx-auto p-4 md:p-6 lg:p-8"
      initial="hidden"
      animate="visible"
      variants={variants}
    >
      {/* Hero animation */}
      <motion.div
        className="flex justify-center mb-4"
        whileHover={{ scale: 1.1 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img src={movieData.poster} alt={movieData.title} />
      </motion.div>

      {/* Movie details */}
      <div className="flex flex-col md:flex-row lg:flex-row">
        <div className="flex-1">
          <h2 className="font-bold text-2xl mb-2">{movieData.title}</h2>
          <p className="text-gray-700 text-base">{movieData.synopsis}</p>
        </div>
        <div className="flex-1 md:ml-4 lg:ml-6">
          <div className="flex justify-between mb-2">
            <span className="font-bold text-lg">Rating:</span>
            <span className="text-lg">{movieData.rating}/5</span>
          </div>
          <div className="flex justify-between mb-2">
            <span className="font-bold text-lg">Reviews:</span>
            <span className="text-lg">{movieData.reviews}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span className="font-bold text-lg">Genres:</span>
            <span className="text-lg">{movieData.genres.join(', ')}</span>
          </div>
        </div>
      </div>

      {/* Download and favorite buttons */}
      <div className="flex justify-between mt-4">
        <motion.button
          className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
          whileHover={{ scale: 1.1 }}
          onClick={handleDownload}
        >
          <FaDownload className="mr-2" /> Download
        </motion.button>
        <motion.button
          className={`${
            isFavorite ? 'bg-red-500' : 'bg-gray-300'
          } hover:bg-red-500 text-white font-bold py-2 px-4 rounded`}
          whileHover={{ scale: 1.1 }}
          onClick={handleFavorite}
        >
          <FaHeart className="mr-2" /> Favorite
        </motion.button>
      </div>

      {/* Additional pages links */}
      <div className="flex justify-between mt-4">
        <a
          href="/movies"
          className="text-blue-500 hover:text-blue-700 font-bold"
        >
          Back to Movies
        </a>
        <a
          href="/genres"
          className="text-blue-500 hover:text-blue-700 font-bold"
        >
          Explore Genres
        </a>
      </div>
    </motion.div>
  );
}

export default MovieDetailPage;
