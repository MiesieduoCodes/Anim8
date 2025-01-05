import { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import cards from "../Constants/DCData";
import { motion } from 'framer-motion';
import { useUser } from './UserContext'; // Import the user context
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection

const DCMovies = () => {
  const [movies, setMovies] = useState([]);
  const { user } = useUser(); // Get the user from the context
  const navigate = useNavigate(); // Initialize the navigation hook

  useEffect(() => {
    setMovies(cards);
  }, []);

  const handleDownload = (downloadLink) => {
    if (!user) {
      // If the user is not signed in, redirect to the signup page
      navigate('/signup'); // Adjust path if needed
    } else {
      // If the user is signed in, proceed with the download
      window.location.href = downloadLink;
    }
  };

  return (
    <div className="relative min-h-screen">
      <video
        className="fixed top-0 left-0 w-full h-full object-cover -z-10"
        src="https://static.videezy.com/system/resources/previews/000/008/148/original/Microscope_v5.mp4"
        autoPlay
        loop
        muted
      />
      <Navbar />

      <div
        className="relative bg-cover bg-center h-[100vh] md:h-80 lg:h-96"
        style={{ backgroundImage: `url('https://example.com/disney-background.jpg')` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center p-4 md:p-6 lg:p-8">
          <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold text-center">
            Discover the Magic of DC
          </h1>
          <p className="text-white text-base md:text-lg lg:text-xl text-center mt-2 md:mt-4">
            Explore our collection of animated DC movies that will take you on thrilling adventures.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {movies.map((movie, index) => (
          <motion.div
            key={index}
            className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
            style={{
              backgroundImage: `url(${movie.backgroundImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '300px',
            }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{
              scale: 1.05,
              transition: {
                type: 'spring',
                stiffness: 300,
                damping: 10,
                duration: 0.6,
              },
            }}
          >
            <div className="flex items-end h-full p-4 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out">
              <div className="text-white text-center w-full">
                <h3 className="text-xl font-semibold">{movie.title}</h3>
                <p className="text-sm">Rating: {movie.rating}</p>
                <div className="w-full bg-gray-600 h-2 rounded">
                  <div
                    className="bg-yellow-500 h-full rounded"
                    style={{ width: `${(movie.rating / 10) * 100}%` }}
                  />
                </div>
                <button
                  onClick={() => handleDownload(movie.downloadLink)} // Trigger download logic
                  className="mt-2 bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-700"
                >
                  Download
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default DCMovies;
