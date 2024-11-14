import { useState, useEffect } from 'react';
import Navbar from './Navbar';
import FloatingMusicButton from '../FloatingMusicButton';
import Footer from "./Footer";
import cardsData from "../Constants/Dreamdata"; // Import MusicContext if you're using it

const DreamWorks = () => {
  const [cards, setCards] = useState([]);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);

  useEffect(() => {
    setCards(cardsData);
  }, []);

  const toggleMusic = () => {
    setIsMusicPlaying(!isMusicPlaying);
    // Add logic to play/pause the music here (e.g., using an HTML audio element or API)
  };

  const changeTrack = (index) => {
    setCurrentTrackIndex(index);
    // Add logic to change the track here
  };

  return (
    <div className="main-content pt-24">
      {/* Navbar */}
      <Navbar />

      {/* Main background section */}
      <div className="relative h-full w-full bg-slate-950">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)]"></div>

        {/* Hero Section */}
        <div
          className="relative bg-cover bg-center h-64 md:h-80 lg:h-96"
          style={{
            backgroundImage:
              `url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ee4200b4-1ca8-4ef7-9ccb-1b66359eb247/dfzdlcd-c0e41887-185c-4b65-a24f-e88ba60ee8f4.jpg/v1/fill/w_1192,h_670,q_70,strp/dreamworks_wallpaper_by_maxtop9002_dfzdlcd-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvZWU0MjAwYjQtMWNhOC00ZWY3LTljY2ItMWI2NjM1OWViMjQ3XC9kZnpkbGNkLWMwZTQxODg3LTE4NWMtNGI2NS1hMjRmLWU4OGJhNjBlZThmNC5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.MmZD7VVsp2Fx8uii0TWUCo0J7Q_JEMyMLnEGYo2twQM')`
          }}
        >
 <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center p-6 md:p-8 lg:p-10">
  <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-extrabold text-center">
    Enter the Wonderful World of DreamWorks
  </h1>
  <p className="text-white text-lg md:text-xl lg:text-2xl text-center mt-3 md:mt-5">
    Dive into our collection of iconic animations <br /> that have brought joy and laughter worldwide.
  </p>
</div>

        </div>

        {/* Cards Section */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 p-10">
                    {cards.map((card, index) => (
                        <div
                            key={index}
                            className="relative w-full p-36 h-48 md:h-64 lg:h-72 xl:h-80 bg-cover bg-center rounded-lg shadow-lg overflow-hidden transform transition-transform duration-500"
                            style={{
                                backgroundImage: `url(${card.backgroundImage})`,
                            }}
                        >
                            {/* Overlay for text */}
                            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center p-4 opacity-0 hover:opacity-100 transition-opacity duration-500">
                                <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold mb-2">
                                    {card.title}
                                </h2>
                                <p className="text-white text-lg text-center mb-2">{card.story}</p>
                                <div className="w-full bg-gray-300 border-none rounded-full h-4 overflow-hidden mb-2">
                                    <div
                                        className="bg-purple-800 h-full rounded-full"
                                        style={{ width: `${card.rating * 10}%` }} // Adjusted width calculation
                                    ></div>
                                </div>
                                <p className="text-white text-lg">{card.rating}</p>
                                 <a
                                    href={card.downloadLink} // Make sure movieData includes a downloadLink property
                                    className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-green-700 transition-colors duration-300" 
                                    download
                                >
                                    Download
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

      <Footer />

      {/* Floating Music Button */}
      <FloatingMusicButton
        isMusicPlaying={isMusicPlaying}
        toggleMusic={toggleMusic}
        currentTrackIndex={currentTrackIndex}
        changeTrack={changeTrack}
      />
    </div>
  );
};

export default DreamWorks;
