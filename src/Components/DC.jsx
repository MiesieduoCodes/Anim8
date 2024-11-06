import Navbar from './Navbar';
import Footer from "./Footer";
import FloatingMusicButton from '../FloatingMusicButton';
import  cards from "../Constants/DCData";

const DCMovies = () => {
  

  return (
    <div className="main-content pt-24">
      <Navbar />

      <div className="relative h-full w-full bg-slate-950">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)]"></div>

        <div className="relative bg-cover bg-center h-64 md:h-80 lg:h-96" style={{ backgroundImage: `url('/src/Assets/ToonImages/DC/dc_background.jpg')` }}>
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center p-4 md:p-6 lg:p-8">
            <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold text-center">
              Discover the Magic of DC
            </h1>
            <p className="text-white text-base md:text-lg lg:text-xl text-center mt-2 md:mt-4">
              Explore our collection of animated classics that have captured <br /> hearts across the globe.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 p-10">
          {cards.map((card, index) => (
            <div
              key={index}
              className="relative w-full h-48 md:h-64 lg:h-72 xl:h-80 bg-cover bg-center rounded-lg shadow-lg overflow-hidden transform transition-transform duration-500 hover:scale-90"
              style={{
                backgroundImage: `url(${card.backgroundImage})`,
              }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center p-4 opacity-0 hover:opacity-100 transition-opacity duration-500">
                <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold mb-2">
                  {card.title}
                </h2>
                <p className="text-white text-lg text-center mb-2">{card.story}</p>
                <div className="w-full bg-gray-300 rounded-full h-4 overflow-hidden mb-2">
                  <div
                    className="bg-purple-800 h-full rounded-full"
                    style={{ width: `${card.rating ? card.rating * 10 : 0}%` }}
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
      <Footer/>
      <FloatingMusicButton />
    </div>
  );
};

export default DCMovies;
