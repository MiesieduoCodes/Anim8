import Navbar from "./Navbar";
import RinYoshidaImage from '../Assets/rin-yoshida-in-call-of-duty-mobile-hz.jpg';
import { MdSkipNext } from "react-icons/md";

const Garden = () => {
  const movies = [
    "Overlooking View (2007)",
    "A Study in Murder - Part 1 (2007)",
    "Remaining Sense of Pain (2008)",
    "The Hollow Shrine (2008)",
    "Paradox Spiral (2008)",
    "Fairy Tale (2008)",
    "...and nothing heart. (2009)",
    "Epilogue (2011)",
  ];

  const story = "Garden of Sinners follows Shiki Ryougi, a girl with the ability to see the 'death' of objects and people. She gets involved in various supernatural events, exploring themes of identity, existence, and the consequences of her actions.";

  return (
    <div>
      <Navbar />
      <div className="relative bg-cover bg-center h-[50vh] md:h-80 lg:h-96" style={{ backgroundImage: `url(${RinYoshidaImage})` }}> 
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center p-4 md:p-6">
          <div className="flex flex-col gap-4 md:gap-10">
            <p className="mt-4 text-base md:text-lg text-white text-center md:w-[40%]">{story}</p>
            <a href="">
              <button className="w-full md:w-[150px] h-[40px] p-3 bg-yellow-500 flex justify-center items-center text-white rounded-full transition-transform duration-300 hover:scale-105">
                <MdSkipNext className="text-2xl" /> Watch Trailer
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto p-4">
        <h1 className="text-2xl md:text-3xl font-bold text-center mt-4">Pokémon Movies</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
          {movies.map((movie, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-lg text-center">
              <p className="text-lg">{movie}</p>
            </div>
          ))}
        </div>
      </div>        
    </div>
  );
};

export default Garden;