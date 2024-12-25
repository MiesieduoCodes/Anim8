import Navbar from "./Navbar";
import { Link } from 'react-router-dom'; 
import Footer from "./Footer";
  
const AnimeCollection = () => {
  const cards = [
    {
      title: "Detective Conan",
      rating: 7.6,
      path: "/detective",
    },
    {
      title: "One Piece",
      rating: 8.6,
      path: "/one-piece",
    },
    {
      title: "Sword Art Online",
      rating: 7.5,
      path: "/sword",
    },
    {
      title: "Lupin III",
      rating: 7.8,
      path: "/lupin",
    },
    {
      title: "Bleach",
      rating: 8.0,
      path: "/bleach",
    },
    {
      title: "Ghost in the Shell",
      rating: 8.6,
      path: "/ghost",
    },
    {
      title: "Fullmetal Alchemist",
      rating: 9.0,
      path: "/fullmetal",
    },
    {
      title: "Psycho-Pass",
      rating: 8.3,
      path: "/psycho",
    },
    {
      title: "Pokemon",
      rating: 8.0,
      path: "/pokemon",
    },
  ];
  return (
    <div  className="main-content pt-24">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <div className="relative bg-cover bg-center h-[100vh] md:h-96 lg:h-120" style={{ backgroundImage: `url("https://wallpapercave.com/wp/wp5203578.jpg")` }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center p-6">
          <h1 className="text-white text-3xl md:text-5xl lg:text-6xl font-bold text-center">
            Discover the Anime-Verse
          </h1>
          <p className="text-white text-lg md:text-xl lg:text-2xl text-center mt-4">
            Explore our collection of animated adventures featuring your favorite heroes.
          </p>
        </div>
      </div>

      {/* Background Layer */}
      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>

      {/* Existing Cards Section */}
      <div className="relative">
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

      <Footer/>
      <FloatingMusicButton />
    </div>
  );
};

export default AnimeCollection;