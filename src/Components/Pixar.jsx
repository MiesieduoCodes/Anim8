import { useEffect, useState } from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom'; 

const Pixar = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const movieTitles = [
        "Guardians of the Galaxy Vol. 2", // Example movie
        "Toy Story",
        "A Bug's Life",
        "Toy Story 2",
        "Monsters, Inc.",
        "Finding Nemo",
        "The Incredibles",
        "Cars",
        "Ratatouille",
        "WALL-E",
        "Up",
        "Toy Story 3",
        "Cars 2",
        "Brave",
        "Monsters University",
        "Inside Out",
        "The Good Dinosaur",
        "Finding Dory",
        "Cars 3",
        "Coco",
        "Incredibles 2",
        "Toy Story 4",
        "Onward",
        "Soul",
        "Luca",
        "Turning Red",
        "Lightyear",
        "Elemental"
      ];

      const movieData = await Promise.all(
        movieTitles.map(async (title) => {
          const response = await fetch(`http://www.omdbapi.com/?t=${encodeURIComponent(title)}&apikey=e19e9342`);
          const data = await response.json();
          return {
            title: data.Title,
            rating: data.imdbRating,
            backgroundImage: data.Poster, // Fallback image if not available
            story: data.Plot,
          };
        })
      );

      setCards(movieData);
    };

    fetchMovies();
  }, []);

  return (
    <div className="main-content pt-20">
      <Navbar />

      <div className="relative h-full w-full bg-slate-950">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)]"></div>

        <div className="relative bg-cover bg-center h-64 md:h-80 lg:h-96" style={{ backgroundImage: `url('/src/Assets/ToonImages/Pixar/wallpaperflare.com_wallpaper (2).jpg')` }}>
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center p-4 md:p-6 lg:p-8">
            <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold text-center">
              Discover the Magic of Pixar
            </h1>
            <p className="text-white text-base md:text-lg lg:text-xl text-center mt-2 md:mt-4">
              Explore our collection of animated classics that have captured <br />hearts across the globe.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 p-10">
        {cards.map((card, index) => (
          <div
            key={index}
            className="relative w-full p-36 h-48 md:h-64 lg:h-72 xl:h-80 bg-cover bg-center rounded-lg shadow-lg overflow-hidden transform transition-transform duration-500 hover:scale-90"
            style={{
              backgroundImage: `url(${card.backgroundImage})`,
            }}
          >
            {/* Overlay for text and loading bar */}
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center p-4 opacity-0 hover:opacity-100 transition-opacity duration-500">
              <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold mb-2">
                {card.title}
              </h2>
              <p className="text-white text-lg border-none text-center mb-2">{card.story}</p>
              <div className="w-full bg-gray-300 border-none rounded-full h-4 overflow-hidden mb-2">
                <div
                  className="bg-purple-800 h-full rounded-full"
                  style={{ width: `${card.rating * 10}%` }}
                ></div>
              </div>
              <p className="text-white text-lg">{card.rating}</p>
              <button
                className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-green-700 transition-colors duration-300"
                onClick={() => alert(`Downloading ${card.title}`)}
              >
                Download
              </button>
            </div>
          </div>
        ))}
      </div>
      </div>

    <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between gap-8">
            <div>
              <h2 className="text-xl font-bold mb-2">Get the App</h2>
              <p className="text-gray-400">Download our app for the best experience.</p>
              <div className="mt-4">
                <a href="#" className="text-yellow-500 hover:underline">Download on the App Store</a>
                <br />
                <a href="#" className="text-yellow-500 hover:underline">Get it on Google Play</a>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-2">More</h2>
              <ul>
                <li>
                  <Link to="/about" className="text-gray-400 hover:underline">About Us</Link>
                </li>
                <li>
                  <Link to="/contact" className="text-gray-400 hover:underline">Contact</Link>
                </li>
                <li>
                  <Link to="/privacy" className="text-gray-400 hover:underline">Privacy Policy</Link>
                </li>
                <li>
                  <Link to="/terms" className="text-gray-400 hover:underline">Terms of Service</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Anim8. All rights reserved.</p>
        </div>
      </footer>

    </div>
  );
};

export default Pixar;