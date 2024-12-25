import Navbar from "./Navbar";
import RinYoshidaImage from '../Assets/rin-yoshida-in-call-of-duty-mobile-hz.jpg';
import { MdSkipNext } from "react-icons/md";
import Footer from "./Footer";
 
const FullMetalAlchemist = () => {
    const movies = [
        "Ghost in the Shell (1995)",
        "Ghost in the Shell 2: Innocence (2004)",
        "Ghost in the Shell: Stand Alone Complex - Solid State Society (2006)",
        "Ghost in the Shell: Arise (2013)",
        "Ghost in the Shell: The New Movie (2015)",
        "Ghost in the Shell (2017)",
    ];

    const story = "Fullmetal Alchemist follows two brothers, Edward and Alphonse Elric, who use alchemy in a desperate attempt to bring their mother back to life. The failed experiment results in Edward losing his arm and Alphonse losing his entire body, leading them on a quest to find the Philosopher's Stone to restore what they lost.";

    return (
      <div className="main-content pt-24">
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
        <h1 className="text-2xl md:text-3xl font-bold text-center mt-4"> FullMetal Alchemist Movies</h1>
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
        
      </div>       
     <Footer />
    <FloatingMusicButton />
    </div>
    );
}

export default FullMetalAlchemist;