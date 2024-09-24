
import Navbar from "./Navbar";
const Bleach = () => {
  const movies = [
    "Bleach: Memories of Nobody (2006)",
    "Bleach: The DiamondDust Rebellion (2007)",
    "Bleach: Fade to Black (2008)",
    "Bleach: Hell Verse (2010)",

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

export default Bleach;