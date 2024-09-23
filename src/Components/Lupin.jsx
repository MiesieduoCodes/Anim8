
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

    <div className="p-6">
      <Navbar />
      <h1 className="text-2xl font-bold">Lupin Movies</h1>
      <img src="" alt="One Piece" className="w-full h-auto mt-4 rounded-lg" />
      <p className="mt-4 text-lg">{story}</p>
      <ul className="list-disc list-inside mt-4">
        {movies.map((movie, index) => (
          <li key={index} className="text-lg">{movie}</li>
        ))}
      </ul>
      
    </div>
  );
};

export default Lupin;