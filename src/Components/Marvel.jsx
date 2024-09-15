import RinYoshidaImage from '../Assets/rin-yoshida-in-call-of-duty-mobile-hz.jpg';
import Navbar from './Navbar'; // Adjust the import path as needed

const Marvel = () => {
  const cards = [
    {
      title: "Ultimate Avengers (2006)",
      rating: 6.8,
      backgroundImage: `url(${RinYoshidaImage})`,
      story:
        "The Avengers must unite to stop a powerful foe threatening the Earth.",
    },
    {
      title: "Ultimate Avengers 2 (2006)",
      rating: 6.6,
      backgroundImage: `url(${RinYoshidaImage})`,
      story:
        "The Avengers face a new threat as they confront a powerful villain.",
    },
    {
      title: "The Invincible Iron Man (2007)",
      rating: 6.4,
      backgroundImage: `url(${RinYoshidaImage})`,
      story:
        "Tony Stark becomes the armored superhero Iron Man to save the world.",
    },
    {
      title: "Doctor Strange: The Sorcerer Supreme (2007)",
      rating: 6.8,
      backgroundImage: `url(${RinYoshidaImage})`,
      story:
        "The story of how Dr. Stephen Strange becomes the Sorcerer Supreme.",
    },
    {
      title: "Next Avengers: Heroes of Tomorrow (2008)",
      rating: 6.4,
      backgroundImage: `url(${RinYoshidaImage})`,
      story:
        "The children of the Avengers must step up to save the world.",
    },
    {
      title: "Hulk Vs. (2009)",
      rating: 6.7,
      backgroundImage: `url(${RinYoshidaImage})`,
      story:
        "The Hulk faces off against Thor and Wolverine in epic battles.",
    },
    {
      title: "Planet Hulk (2010)",
      rating: 6.8,
      backgroundImage: `url(${RinYoshidaImage})`,
      story:
        "The Hulk is exiled to a distant planet where he becomes a gladiator.",
    },
    {
      title: "Thor: Tales of Asgard (2011)",
      rating: 6.4,
      backgroundImage: `url(${RinYoshidaImage})`,
      story:
        "Thor embarks on a journey to prove himself worthy of the throne.",
    },
    {
      title: "Iron Man: Rise of Technovore (2013)",
      rating: 6.2,
      backgroundImage: `url(${RinYoshidaImage})`,
      story:
        "Iron Man faces off against a new villain, Ezekiel Stane.",
    },
    {
      title: "Avengers Confidential: Black Widow & Punisher (2014)",
      rating: 6.1,
      backgroundImage: `url(${RinYoshidaImage})`,
      story:
        "Black Widow and Punisher team up to take down a deadly organization.",
    },
    {
      title: "Iron Man & Captain America: Heroes United (2014)",
      rating: 6.1,
      backgroundImage: `url(${RinYoshidaImage})`,
      story:
        "Iron Man and Captain America team up to stop a common enemy.",
    },
    {
      title: "Big Hero 6 (2014)",
      rating: 7.8,
      backgroundImage: `url(${RinYoshidaImage})`,
      story:
        "A young robotics prodigy forms a superhero team to combat a villain.",
    },
    {
      title: "Avengers: Confidential: Black Widow & Punisher - Extended Cut (2015)",
      rating: 6.1,
      backgroundImage: `url(${RinYoshidaImage})`,
      story:
        "An extended version of the original film featuring more action.",
    },
    {
      title: "Marvel Super Hero Adventures: Frost Fight! (2015)",
      rating: 6.1,
      backgroundImage: `url(${RinYoshidaImage})`,
      story:
        "The heroes must work together to save the day during a winter crisis.",
    },
    {
      title: "Hulk: Where Monsters Dwell (2016)",
      rating: 6.1,
      backgroundImage: `url(${RinYoshidaImage})`,
      story:
        "Hulk and his friends fight against monsters in a strange dimension.",
    },
    {
      title: "Lego Marvel Super Heroes - Guardians of the Galaxy: The Thanos Threat (2017)",
      rating: 6.1,
      backgroundImage: `url(${RinYoshidaImage})`,
      story:
        "The Guardians of the Galaxy must stop Thanos from obtaining the Infinity Stones.",
    },
    {
      title: "Lego Marvel Super Heroes - Avengers: Infinity War - Part 1 (2018)",
      rating: 6.1,
      backgroundImage: `url(${RinYoshidaImage})`,
      story:
        "The Avengers unite to face the threat of Thanos.",
    },
    {
      title: "Lego Marvel Super Heroes - Avengers: Infinity War - Part 2 (2018)",
      rating: 6.1,
      backgroundImage: `url(${RinYoshidaImage})`,
      story:
        "The epic conclusion of the battle against Thanos.",
    },
    {
      title: "Lego Marvel Super Heroes - Black Panther: Trouble in Wakanda - Part 1 (2018)",
      rating: 6.1,
      backgroundImage: `url(${RinYoshidaImage})`,
      story:
        "Black Panther faces new challenges in protecting Wakanda.",
    },
    {
      title: "Lego Marvel Super Heroes - Black Panther: Trouble in Wakanda - Part 2 (2018)",
      rating: 6.1,
      backgroundImage: `url(${RinYoshidaImage})`,
      story:
        "The adventure continues as Black Panther defends his homeland.",
    },
    {
      title: "Marvel Rising: Secret Warriors (2018)",
      rating: 6.5,
      backgroundImage: `url(${RinYoshidaImage})`,
      story:
        "A group of young heroes must come together to save the day.",
    },
    {
      title: "Spider-Man: Into the Spider-Verse (2018)",
      rating: 8.1,
      backgroundImage: `url(${RinYoshidaImage})`,
      story:
        "Teenager Miles Morales becomes Spider-Man and meets other Spider-People.",
    },
    {
      title: "Marvel Super Hero Adventures: Avengers - Game Over (2020)",
      rating: 6.1,
      backgroundImage: `url(${RinYoshidaImage})`,
      story:
        "The Avengers face off against a new villain in an action-packed adventure.",
    },
    {
      title: "Lego Marvel Super Heroes - Spider-Man: Vexed by Venom (2019)",
      rating: 6.1,
      backgroundImage: `url(${RinYoshidaImage})`,
      story:
        "Spider-Man battles Venom in a thrilling Lego adventure.",
    },
    {
      title: "Lego Marvel Super Heroes - Avengers: Out of Time (2020)",
      rating: 6.1,
      backgroundImage: `url(${RinYoshidaImage})`,
      story:
        "The Avengers must work together to fix the timeline.",
    },
    {
      title: "Spider-Man: Across the Spider-Verse (2022)",
      rating: 8.1,
      backgroundImage: `url(${RinYoshidaImage})`,
      story:
        "Miles Morales continues his journey through the multiverse.",
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
            Discover the Marvel Universe
          </h1>
          <p className="text-white text-lg md:text-xl lg:text-2xl text-center mt-4">
            Explore our collection of animated adventures featuring your favorite heroes.
          </p>
        </div>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 p-10">
        {cards.map((card, index) => (
          <div
            key={index}
            className="relative w-full p-36 h-48 md:h-64 lg:h-72 xl:h-80 bg-cover bg-center rounded-lg shadow-lg overflow-hidden transform transition-transform duration-500 hover:scale-90"
            style={{
              backgroundImage: card.backgroundImage,
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
  );
};

export default Marvel;