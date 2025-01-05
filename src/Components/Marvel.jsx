import { useEffect, useState, useContext } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';
import marvelMovies from "../Constants/MarvelData";
import { UserContext } from './UserContext'; // Assuming you have a UserContext
import { motion } from 'framer-motion';

const Marvel = () => {
  const [cards, setCards] = useState([]);
  const { user } = useContext(UserContext); // Access user state from context
  const navigate = useNavigate(); // Hook for navigation

  useEffect(() => {
    setCards(marvelMovies);
  }, []);

  const handleDownload = (card) => {
    if (!user) {
      // If user is not signed in, redirect to signup page
      navigate('/signup');
    } else {
      // If user is signed in, allow download
      window.location.href = card.downloadLink; // Trigger download
    }
  };

  return (
    <div className="main-content pt-24">
      <Navbar />

      <div className="relative h-full w-full bg-slate-950">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)]"></div>

        <div
          className="relative bg-cover bg-center h-[100vh] md:h-80 lg:h-96"
          style={{ backgroundImage: `url('/src/Assets/ToonImages/Marvel/marvel-background.jpg')` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center p-4 md:p-6 lg:p-8">
            <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold text-center">
              Discover the Marvel Universe
            </h1>
            <p className="text-white text-base md:text-lg lg:text-xl text-center mt-2 md:mt-4">
              Explore our collection of animated classics that have captured <br />
              hearts across the globe.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 p-10">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className="relative w-full p-36 h-48 md:h-64 lg:h-72 xl:h-80 bg-cover bg-center rounded-lg shadow-lg overflow-hidden transform transition-transform duration-500"
              style={{
                backgroundImage: `url(${card.backgroundImage})`,
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Overlay for text */}
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center p-4 opacity-0 hover:opacity-100 transition-opacity duration-500">
                <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold mb-2">
                  {card.title}
                </h2>
                <p className="text-white text-lg text-center mb-2">{card.story}</p>
                <div className="w-full bg-gray-300 border-none rounded-full h-4 overflow-hidden mb-2">
                  <div
                    className="bg-purple-800 h-full rounded-full"
                    style={{ width: `${card.rating * 10}%` }} // Adjusted width calculation
                  ></div>
                </div>
                <p className="text-white text-lg">{card.rating}</p>
                <button
                  onClick={() => handleDownload(card)} // Trigger download logic
                  className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-green-700 transition-colors duration-300"
                >
                  Download
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
<Footer />
    </div>
  );
};

export default Marvel;
