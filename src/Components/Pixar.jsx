import { useState, useEffect } from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

const Disney = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    // Disney animated movies data
    const disneyMovies = [
      {
        title: "Lilo & Stitch",
        rating: "7.3",
        backgroundImage: "/path/to/lilo-stitch-poster.jpg", // Replace with actual image path
        story: "A young girl adopts a unique pet who turns out to be a notorious extra-terrestrial fugitive.",
      },
      {
        title: "Treasure Planet",
        rating: "7.2",
        backgroundImage: "/path/to/treasure-planet-poster.jpg", // Replace with actual image path
        story: "A Disney animated version of 'Treasure Island.' The only difference is that the island is a planet.",
      },
      {
        title: "Brother Bear",
        rating: "6.8",
        backgroundImage: "/path/to/brother-bear-poster.jpg", // Replace with actual image path
        story: "A young Inuit hunter seeks vengeance on a bear, only to be magically changed into a bear himself.",
      },
      {
        title: "Chicken Little",
        rating: "5.7",
        backgroundImage: "/path/to/chicken-little-poster.jpg", // Replace with actual image path
        story: "After ruining his reputation with the town, a courageous chicken must come to the rescue of his fellow citizens when aliens start an invasion.",
      },
      {
        title: "The Princess and the Frog",
        rating: "7.1",
        backgroundImage: "/path/to/princess-frog-poster.jpg", // Replace with actual image path
        story: "A waitress, desperate to fulfill her dreams as a restaurant owner, is set on a journey to turn a frog prince back into a human being.",
      },
      {
        title: "Tangled",
        rating: "7.7",
        backgroundImage: "/path/to/tangled-poster.jpg", // Replace with actual image path
        story: "The magically long-haired Rapunzel has spent her entire life in a tower, but now that a runaway thief has stumbled upon her, she is about to discover the world for the first time.",
      },
      {
        title: "Frozen",
        rating: "7.4",
        backgroundImage: "/path/to/frozen-poster.jpg", // Replace with actual image path
        story: "When the newly crowned Queen Elsa accidentally uses her power to turn things into ice to curse her home, her sister Anna teams up with a mountain man, his playful reindeer, and a snowman to change the weather condition.",
      },
      {
        title: "Wreck-It Ralph",
        rating: "7.7",
        backgroundImage: "/path/to/wreck-it-ralph-poster.jpg", // Replace with actual image path
        story: "A video game villain wants to be a hero and sets out to fulfill his dream, but his quest brings havoc to the whole arcade where he lives.",
      },
      {
        title: "Big Hero 6",
        rating: "7.8",
        backgroundImage: "/path/to/big-hero-6-poster.jpg", // Replace with actual image path
        story: "A special bond develops between a plus-sized inflatable robot and a prodigy, who team up with a group of friends to form a band of high-tech heroes.",
      },
      {
        title: "Zootopia",
        rating: "8.0",
        backgroundImage: "/path/to/zootopia-poster.jpg", // Replace with actual image path
        story: "In a city of anthropomorphic animals, a rookie bunny cop and a cynical con artist fox must work together to uncover a conspiracy.",
      },
      {
        title: "Moana",
        rating: "7.6",
        backgroundImage: "/path/to/moana-poster.jpg", // Replace with actual image path
        story: "In Ancient Polynesia, when a terrible curse incurred by the Demigod Maui reaches Moana's island, she answers the ocean's call to seek out the Demigod to set things right.",
      },
      {
        title: "Raya and the Last Dragon",
        rating: "7.3",
        backgroundImage: "/path/to/raya-dragon-poster.jpg", // Replace with actual image path
        story: "In a realm known as Kumandra, a re-imagined Earth inhabited by an ancient civilization, a warrior named Raya is determined to find the last dragon.",
      },
      // Add more movies as needed...
    ];

    setCards(disneyMovies);
  }, []);

  return (
    <div className="disney-component">
      <Navbar />
      <h1>Disney Movies</h1>
      <div className="movies-grid">
        {cards.map((card, index) => (
          <div key={index} className="movie-card" style={{ backgroundImage: `url(${card.backgroundImage})` }}>
            <div className="movie-info">
              <h2>{card.title}</h2>
              <p>Rating: {card.rating}</p>
              <p>{card.story}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Disney;
