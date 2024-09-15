import RinYoshidaImage from '../Assets/rin-yoshida-in-call-of-duty-mobile-hz.jpg';
import Navbar from './Navbar'; // Adjust the import path as needed

const Netflix = () => {
  const cards = [
    {
      title: "Klaus (2019)",
      rating: 8.2,
      backgroundImage: `url(${RinYoshidaImage})`,
      story:
        "A postman and a reclusive toymaker form an unlikely friendship that brings joy to a cold town.",
    },
    {
      title: "The Willoughbys (2020)",
      rating: 6.7,
      backgroundImage: `url(${RinYoshidaImage})`,
      story:
        "The Willoughby siblings hatch a plan to send their selfish parents on vacation.",
    },
    {
      title: "Over the Moon (2020)",
      rating: 6.6,
      backgroundImage: `url(${RinYoshidaImage})`,
      story:
        "A girl builds a rocket ship to meet a mythical goddess on the moon.",
    },
    {
      title: "Soul (2020)",
      rating: 8.0,
      backgroundImage: `url(${RinYoshidaImage})`,
      story:
        "A middle school music teacher's soul is separated from his body, leading him on a journey through the afterlife.",
    },
    {
      title: "The Mitchells vs. the Machines (2021)",
      rating: 7.7,
      backgroundImage: `url(${RinYoshidaImage})`,
      story:
        "A quirky family's road trip is interrupted by a robot apocalypse.",
    },
    {
      title: "Wish Dragon (2021)",
      rating: 7.0,
      backgroundImage: `url(${RinYoshidaImage})`,
      story:
        "A dragon that grants wishes helps a young man reunite with his childhood friend.",
    },
    {
      title: "Extinct (2021)",
      rating: 5.8,
      backgroundImage: `url(${RinYoshidaImage})`,
      story:
        "Two species of extinct animals travel through time to save their kind.",
    },
    {
      title: "Vivo (2021)",
      rating: 6.7,
      backgroundImage: `url(${RinYoshidaImage})`,
      story:
        "A music-loving kinkajou embarks on a journey to deliver a love song.",
    },
    {
      title: "My Little Pony: A New Generation (2021)",
      rating: 6.1,
      backgroundImage: `url(${RinYoshidaImage})`,
      story:
        "A new generation of ponies sets out to restore magic to their world.",
    },
    {
      title: "The Sea Beast (2022)",
      rating: 7.1,
      backgroundImage: `url(${RinYoshidaImage})`,
      story:
        "A young girl stows away on the ship of a legendary sea monster hunter.",
    },
    {
      title: "Puss in Boots: The Last Wish (2022)",
      rating: 7.8,
      backgroundImage: `url(${RinYoshidaImage})`,
      story:
        "Puss in Boots discovers he has used eight of his nine lives.",
    },
    {
      title: "Apollo 10½: A Space Age Childhood (2022)",
      rating: 7.4,
      backgroundImage: `url(${RinYoshidaImage})`,
      story:
        "A nostalgic look at childhood during the space race era.",
    },
    {
      title: "Nimona (2023)",
      rating: 7.9,
      backgroundImage: `url(${RinYoshidaImage})`,
      story:
        "A young shapeshifter teams up with a knight accused of a crime he didn't commit.",
    },
    {
      title: "The Magician's Elephant (2023)",
      rating: 6.7,
      backgroundImage: `url(${RinYoshidaImage})`,
      story:
        "A young boy embarks on a quest to find a magician who can summon an elephant.",
    },
    {
      title: "The Amazing Maurice (2023)",
      rating: 6.9,
      backgroundImage: `url(${RinYoshidaImage})`,
      story:
        "A streetwise cat and a group of talking rats embark on an adventure.",
    },
    {
      title: "The Boss Baby: Family Business (2023)",
      rating: 6.1,
      backgroundImage: `url(${RinYoshidaImage})`,
      story:
        "The Templeton brothers are now grown up and have to save their parents from a dastardly villain.",
    },
    {
      title: "Naya’s Dream (2023)",
      rating: 6.5,
      backgroundImage: `url(${RinYoshidaImage})`,
      story:
        "A young girl discovers the power of dreams and imagination.",
    },
    {
      title: "Raya and the Last Dragon (2023)",
      rating: 7.4,
      backgroundImage: `url(${RinYoshidaImage})`,
      story:
        "Raya must find the last dragon to save her divided land from evil.",
    },
    {
      title: "Luck (2022)",
      rating: 6.3,
      backgroundImage: `url(${RinYoshidaImage})`,
      story:
        "A girl discovers a world of luck and misfortune.",
    },
    {
      title: "Back to the Outback (2021)",
      rating: 6.6,
      backgroundImage: `url(${RinYoshidaImage})`,
      story:
        "A group of misunderstood animals escape from their zoo to return to the wild.",
    },
    {
      title: "The Haunted Mansion (2023)",
      rating: 6.2,
      backgroundImage: `url(${RinYoshidaImage})`,
      story:
        "A woman and her son enlist a motley crew of so-called spiritual experts.",
    },
    {
      title: "The Monkey King (2023)",
      rating: 6.8,
      backgroundImage: `url(${RinYoshidaImage})`,
      story:
        "The legendary Monkey King embarks on a quest to defeat a demon.",
    },
    {
      title: "Gnome Alone (2023)",
      rating: 6.0,
      backgroundImage: `url(${RinYoshidaImage})`,
      story:
        "A girl discovers that her garden gnomes are alive and must save them from intruders.",
    },
    {
      title: "The Secret Garden (2024)",
      rating: 7.1,
      backgroundImage: `url(${RinYoshidaImage})`,
      story:
        "A young girl discovers a hidden garden that changes her life.",
    },
    {
      title: "The Land of Lost Things (2024)",
      rating: 6.8,
      backgroundImage: `url(${RinYoshidaImage})`,
      story:
        "A group of children discover a magical land where lost things go.",
    },
    {
      title: "Space Adventures (2024)",
      rating: 6.5,
      backgroundImage: `url(${RinYoshidaImage})`,
      story:
        "A team of explorers embarks on a thrilling journey through space.",
    },
    {
      title: "The Last Unicorn (2024)",
      rating: 7.0,
      backgroundImage: `url(${RinYoshidaImage})`,
      story:
        "A unicorn sets out on a quest to find her lost kin.",
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
        ))}
      </div>
    </div>
  );
};

export default Netflix;