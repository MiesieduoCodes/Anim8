import Navbar from "./Navbar";
import RinYoshidaImage from '../Assets/rin-yoshida-in-call-of-duty-mobile-hz.jpg';
import Footer from "./Footer";
import { MdSkipNext } from "react-icons/md";
 
const Pokemon = () => {
    const movies = [
        "Pokémon the Movie: Volcanion and the Mechanical Marvel",
        "Pokémon the Movie: I Choose You!",
        "Pokémon the Movie: The Power of Us",
        "Pokémon: Mewtwo Strikes Back—Evolution",
        "Pokémon: Detective Pikachu",
        "Pokémon the Movie: Secrets of the Jungle",
        "Pokémon the Movie: Turning Back into the Indigo League",
        "Pokémon the Movie: Secrets of the Jungle - Special Edition",
    ];

    const story = "Pokémon the Movie: I Choose You! follows Ash Ketchum as he embarks on his journey to become a Pokémon Master. Alongside his first Pokémon, Pikachu, Ash encounters various challenges, meets new friends, and ultimately confronts the legendary Pokémon Ho-Oh.";

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
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
          {movies.map((movie, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-lg text-center">
              <p className="text-lg">{movie}</p>
              <button
                  className="bg-blue-500 text-white font-bold py-1 px-2 rounded hover:bg-green-700 transition-colors duration-300 mt-2"
                  onClick={() => alert(`Downloading ${movie}`)}
                >
                  Download
                </button>
            </div>
          ))}
          
        </div>       
<FloatingMusicButton />
<Footer />
      </div>
    );
}

export default Pokemon;