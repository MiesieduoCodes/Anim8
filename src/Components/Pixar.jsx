import { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Google from '../Assets/images-removebg-preview.png';

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
            backgroundImage: data.Poster,
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 md:p-10">
          {cards.map((card, index) => (
            <div
              key={index}
              className="relative w-full h-48 md:h-64 lg:h-72 bg-cover bg-center rounded-lg shadow-lg overflow-hidden transform transition-transform duration-500 hover:scale-105"
              style={{
                backgroundImage: `url(${card.backgroundImage})`,
              }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center p-2 md:p-4 opacity-0 hover:opacity-100 transition-opacity duration-500">
                <h2 className="text-white text-xl md:text-2xl lg:text-3xl font-bold mb-2 text-center">
                  {card.title} ({card.year})
                </h2>
                <p className="text-white text-sm md:text-base lg:text-lg text-center mb-2">{card.story}</p>
                <p className="text-white text-sm md:text-base">Genre: {card.genre}</p>
                <p className="text-white text-sm md:text-base">Director: {card.director}</p>
                <p className="text-white text-sm md:text-base">Starring: {card.actors}</p>
                <div className="w-full bg-gray-300 rounded-full h-2 overflow-hidden mb-2">
                  <div className="bg-red-400 h-full rounded-full" style={{ width: `${card.rating * 10}%` }}></div>
                </div>
                <p className="text-white text-sm md:text-base">Rating: {card.rating}</p>
                <button
                  className="bg-blue-500 text-white font-bold py-1 px-2 rounded hover:bg-green-700 transition-colors duration-300 mt-2"
                  onClick={() => alert(`Downloading ${card.title}`)}
                >
                  Download
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <footer>
        <div className="z-50 p-5 md:w-auto w-full flex justify-between items-center">
          <div>
            <h1 className="md:cursor-pointer text-3xl h-9">
              Anim<span className="text-red-500">8</span>
            </h1>
            <h2> by Goofy_Did_This</h2>
          </div>
          <div>
            <img width="200px" src={Google} alt="" />
          </div>
          <div>
            <h1>© JWICEBOXBIZ, All Rights Reserved.</h1>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Pixar;