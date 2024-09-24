import RinYoshidaImage from '../Assets/rin-yoshida-in-call-of-duty-mobile-hz.jpg';
import Navbar from './Navbar'; // Adjust the import path as needed
import { Link } from 'react-router-dom'; // Import Link

const AnimeFilms = () => {
  const cards = [
    {
      title: "Detective Conan",
      rating: 7.6,
      path: "/detective", // Path for linking
    },
    {
      title: "One Piece",
      rating: 8.6,
      path: "/one-piece", // Path for linking
    },
    {
      title: "Sword Art Online",
      rating: 7.5,
      path: "/sword-art-online", // Path for linking
    },
    {
      title: "Lupin III",
      rating: 7.8,
      path: "/lupin-iii", // Path for linking
    },
    {
      title: "Bleach",
      rating: 8.0,
      path: "/bleach", // Path for linking
    },
    {
      title: "Ghost in the Shell",
      rating: 8.6,
      path: "/ghost-in-the-shell", // Path for linking
    },
    {
      title: "Fullmetal Alchemist",
      rating: 9.0,
      path: "/fullmetal-alchemist", // Path for linking
    },
    {
      title: "Psycho-Pass",
      rating: 8.3,
      path: "/psycho-pass", // Path for linking
    },
  ];

  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <div className="relative bg-cover bg-center h-80 md:h-96 lg:h-120" style={{ backgroundImage: `url(${RinYoshidaImage})` }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center p-6">
          <h1 className="text-white text-3xl md:text-5xl lg:text-6xl font-bold text-center">
            Discover the Anime-Verse
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
            <Link to={card.path} key={index} className="bg-white p-5 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h2 className="text-lg font-bold">{card.title}</h2>
              <p className="text-gray-600">Rating: {card.rating}</p>
              <div className="w-full bg-gray-300 border-none rounded-full h-4 overflow-hidden mb-2">
                <div
                  className="bg-orange-500 h-full rounded-full"
                  style={{ width: `${card.rating * 10}%` }}
                ></div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnimeFilms;