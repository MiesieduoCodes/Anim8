import Navbar from "./Navbar";
import { Link } from 'react-router-dom'; 
const AnimeFilms = () => {
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
    // New additions
    {
      title: "Weathering with You",
      rating: 8.0,
      path: "/weathering",
    },
    {
      title: "Dragon Quest: Your Story",
      rating: 7.8,
      path: "/dragon-quest",
    },
    {
      title: "Human Lost",
      rating: 7.6,
      path: "/human-lost",
    },
    {
      title: "Hello World",
      rating: 7.5,
      path: "/hello-world",
    },
    {
      title: "The Legend of the Galactic Heroes: Die Neue These",
      rating: 7.4,
      path: "/galactic-heroes",
    },
    {
      title: "Ride Your Wave",
      rating: 7.2,
      path: "/ride-your-wave",
    },
    {
      title: "Children of the Sea",
      rating: 7.1,
      path: "/children-of-the-sea",
    },
    {
      title: "The Wonderland",
      rating: 7.0,
      path: "/wonderland",
    },
    {
      title: "City Hunter: Shinjuku Private Eyes",
      rating: 6.8,
      path: "/city-hunter",
    },
  ];

  const animeCollections = [
    {
      title: "Anime Collection",
      items: [
        { title: "Demon Slayer: Mugen Train", rating: 8.7 },
        { title: "Demon Slayer: Kimetsu no Yaiba – To the Swordsmith Village", rating: 8.4 },
        { title: "Attack on Titans: Wings of Freedom", rating: 7.8 },
        { title: "Your Name", rating: 8.4 },
        { title: "Blood C: The Last Dark", rating: 7.5 },
        { title: "The Garden of Words", rating: 8.1 },
        { title: "Wolf Children", rating: 8.1 },
        { title: "Jujutsu Kaisen 0: The Movie", rating: 8.1 },
        { title: "Colorful", rating: 8.1 },
        { title: "The Secret World of Arrietty", rating: 8.1 },
        { title: "Time of Eve", rating: 8.0 },
        { title: "You Are Umasou", rating: 8.0 },
        { title: "Trigun: Badlands Rumble (Standalone)", rating: 7.9 },
        { title: "Genius Party Beyond", rating: 7.8 },
        { title: "Hortensia Saga", rating: 7.7 },
        { title: "Loups=Garous", rating: 7.6 },
        { title: "Mai Mai Miracle", rating: 7.6 },
        { title: "Oblivion Island", rating: 7.5 },
      ],
    },
    {
      title: "Hack//G.U. Trilogy",
      items: [
        { title: ".hack//G.U. Trilogy: Rebirth", rating: 7.4 },
        { title: ".hack//G.U. Trilogy: Resurrection", rating: 7.5 },
        { title: ".hack//G.U. Trilogy: Redemption", rating: 7.6 },
        { title: "Akira", rating: 8.1 },
        { title: "The Boy and the Beast", rating: 8.0 },
        { title: "A Silent Voice", rating: 8.1 },
        { title: "Death Note: Light Up the New World", rating: 7.5 },
        { title: "Afro Samurai", rating: 8.0 },
        { title: "Afro Samurai: Resurrection", rating: 7.4 },
      ],
    },
  ];

  return (
    <div>
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

      {/* Existing Cards Section */}
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

      {/* Anime Collection Section */}
      {animeCollections.map((collection, index) => (
        <div key={index} className="px-10 py-6">
          <h2 className="text-2xl font-bold mb-4">{collection.title}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {collection.items.map((item, itemIndex) => (
              <div key={itemIndex} className="bg-white p-5 rounded-lg shadow-lg">
                <h3 className="text-lg font-bold">{item.title}</h3>
                <p className="text-gray-600">Rating: {item.rating}</p>
                <div className="w-full bg-gray-300 border-none rounded-full h-4 overflow-hidden mb-2">
                  <div
                    className="bg-orange-500 h-full rounded-full"
                    style={{ width: `${item.rating * 10}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-6 md:mb-0">
              <h2 className="text-xl font-bold mb-2">Get the App</h2>
              <p className="text-gray-400">Download our app for the best experience.</p>
              <div className="mt-4">
                <a href="#" className="text-yellow-500 hover:underline">Download on the App Store</a>
                <br />
                <a href="#" className="text-yellow-500 hover:underline">Get it on Google Play</a>
              </div>
            </div>

            <div className="mb-6 md:mb-0">
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
          <p>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default AnimeFilms;