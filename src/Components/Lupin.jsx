
import Navbar from "./Navbar";
const Lupin = () => {
  const movies = [

    "The Mystery of the Hemingway Paper (1978)",
    "Castle of Cagliostro (1979)",
    "Legend of the Gold of Babylon (1985)",
    "Farewell to Nostradamus (1995)",
    "Dead or Alive (1996)",
    "Lupin III vs. the Clone (1997)",
    "Voyage to Danger (2002)",
    "Dragon of Doom (2003)",
    "The Blood Spray of Goemon Ishikawa (2017)",
    "Lupin III: The First (2019)",
    "Lupin III (2014)",
    "Lupin III vs. Detective Conan: The Movie (2013)",
    "Jigen's Gravestone (2014)",
    "Goemon Ishikawa's Spray Blood (2017)",
    
    
    
  ];

  const story = "Detective Conan follows the adventures of Shinichi Kudo, a teenage detective who is transformed into a child after being poisoned. Under the alias Conan Edogawa, he solves various cases while searching for the organization responsible for his condition.";

  return (
    <div className="relative bg-cover bg-center h-auto">
      <Navbar />
      <div className="max-w-6xl mx-auto p-4">
        <h1 className="text-3xl font-bold text-center mt-4">Detective Conan Movies</h1>
        <p className="mt-4 text-lg text-center">{story}</p>

        {/* Grid for movies */}
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

export default Lupin;