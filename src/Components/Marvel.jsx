import { useEffect, useState } from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom'; 
import RinYoshidaImage from '../Assets/rin-yoshida-in-call-of-duty-mobile-hz.jpg';

const Marvel = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const movieTitles = [
        "Ultimate Avengers",
        "Ultimate Avengers 2",
        "The Invincible Iron Man",
        "Doctor Strange: The Sorcerer Supreme",
        "Next Avengers: Heroes of Tomorrow",
        "Hulk Vs.",
        "Planet Hulk",
        "Thor: Tales of Asgard",
        "Iron Man: Rise of Technovore",
        "Avengers Confidential: Black Widow & Punisher",
        "Iron Man & Captain America: Heroes United",
        "Big Hero 6",
        "Avengers: Confidential: Black Widow & Punisher - Extended Cut",
        "Marvel Super Hero Adventures: Frost Fight!",
        "Hulk: Where Monsters Dwell",
        "Lego Marvel Super Heroes - Guardians of the Galaxy: The Thanos Threat",
        "Lego Marvel Super Heroes - Avengers: Infinity War - Part 1",
        "Lego Marvel Super Heroes - Avengers: Infinity War - Part 2",
        "Lego Marvel Super Heroes - Black Panther: Trouble in Wakanda - Part 1",
        "Lego Marvel Super Heroes - Black Panther: Trouble in Wakanda - Part 2",
        "Marvel Rising: Secret Warriors",
        "Spider-Man: Into the Spider-Verse",
        "Marvel Super Hero Adventures: Avengers - Game Over",
        "Lego Marvel Super Heroes - Spider-Man: Vexed by Venom",
        "Lego Marvel Super Heroes - Avengers: Out of Time",
        "Spider-Man: Across the Spider-Verse"
      ];

      const movieData = await Promise.all(
        movieTitles.map(async (title) => {
          const response = await fetch(`http://www.omdbapi.com/?t=${encodeURIComponent(title)}&apikey=e19e9342`);
          const data = await response.json();
          return {
            title: data.Title,
            rating: data.imdbRating,
            story: data.Plot,
            backgroundImage: data.Poster || RinYoshidaImage, // Fallback image
          };
        })
      );

      setCards(movieData);
    };

    fetchMovies();
  }, []);

  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <div className="relative bg-cover bg-center h-80 md:h-96 lg:h-120" style={{ backgroundImage: `url(${RinYoshidaImage})` }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center p-6">
          <h1 className="text-white text-3xl md:text-5xl lg:text-6xl font-bold text-center">
            Discover the Marvel Universe
          </h1>
          <p className="text-white text-lg md:text-xl lg:text-2xl text-center mt-4">
            Explore our collection of animated adventures featuring your favorite heroes.
          </p>
        </div>
      </div>

      {/* Cards Section */}
      <div className="relative">
        {/* Background Layer */}
        <div className="absolute top-0 z-[-2] h-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 bg-black sm:grid-cols-2 lg:grid-cols-3 gap-10 p-10 relative z-10">
          {cards.map((card, index) => (
            <div key={index} className="bg-white p-5 rounded-lg shadow-lg">
              <h2 className="text-lg font-bold">{card.title}</h2>
              <p className="text-gray-600">Rating: {card.rating}</p>
              <p className="text-gray-500 mt-2">{card.story}</p>
              <div className="w-full bg-gray-300 border-none rounded-full h-4 overflow-hidden mb-2">
                <div
                  className="bg-purple-800 h-full rounded-full"
                  style={{ width: `${card.rating * 10}%` }}
                ></div>
              </div>
              <button
                className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-green-700 transition-colors duration-300"
                onClick={() => alert(`Downloading ${card.title}`)}
              >
                Download
              </button>
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

export default Marvel;