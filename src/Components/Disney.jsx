import RinYoshidaImage from '../Assets/rin-yoshida-in-call-of-duty-mobile-hz.jpg';
import Navbar from './Navbar'; // Adjust the import path as needed

const Disney = () => {
  const cards = [
    {
      title: "Frozen (2013)",
      rating: 7.4,
      backgroundImage: `url(${RinYoshidaImage})`,
      story:
        "When their kingdom is trapped in an eternal winter, fearless Anna sets off on a journey alongside a rugged ice harvester, his loyal reindeer, and a naive snowman to find her sister Elsa, the Snow Queen.",
    },
    {
      title: "Moana (2016)",
      rating: 7.6,
      backgroundImage: `url(${RinYoshidaImage})`,
      story:
        "In Ancient Polynesia, when a terrible curse incurred by Maui reaches the island of Motunui, Moana, the daughter of the island's chief, answers the Ocean's call to seek out the demigod to set things right.",
    },
    {
      title: "Zootopia (2016)",
      rating: 8.0,
      backgroundImage: `url(${RinYoshidaImage})`,
      story:
        "In a city of anthropomorphic animals, a bunny cop and a cynical con artist fox must work together to uncover a conspiracy.",
    },
    {
      title: "Raya and the Last Dragon (2021)",
      rating: 7.4,
      backgroundImage: `url(${RinYoshidaImage})`,
      story:
        "In a realm known as Kumandra, a lone warrior named Raya must track down the legendary last dragon to stop an ancient evil from returning.",
    },
    {
      title: "Encanto (2021)",
      rating: 7.2,
      backgroundImage: `url(${RinYoshidaImage})`,
      story:
        "A young Colombian woman has to face the frustration of being the only member of her family without magical powers in a fantastical place called the Encanto.",
    },
    {
      title: "Elemental (2023)",
      rating: 7.1,
      backgroundImage: `url(${RinYoshidaImage})`,
      story:
        "In a city where fire, water, land, and air residents live together, a fiery young woman and a go-with-the-flow guy discover something elemental: how much they actually have in common.",
    },
  ];

  return (
    <div  className="main-content pt-20">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <div className="relative bg-cover bg-center h-80 md:h-96 lg:h-120" style={{ backgroundImage: `url(${RinYoshidaImage})` }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center p-6">
          <h1 className="text-white text-3xl md:text-5xl lg:text-6xl font-bold text-center">
            Discover the Magic of Disney
          </h1>
          <p className="text-white text-lg md:text-xl lg:text-2xl text-center mt-4">
            Explore our collection of animated classics that have captured hearts across the globe.
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
        ))};
      </div>
    </div>
  );
};

export default Disney;