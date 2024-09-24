import Navbar from "./Navbar";
const GhostInAShell = () => {
  const movies = [
    "Ghost in the Shell (1995)",
    "Ghost in the Shell 2: Innocence (2004)",
    "Ghost in the Shell: Stand Alone Complex - Solid State Society (2006)",
    "Ghost in the Shell: Arise (2013)",
    "Ghost in the Shell: The New Movie (2015)",
    "Ghost in the Shell (2017)",
  ];

  const story = "Detective Conan follows the adventures of Shinichi Kudo, a teenage detective who is transformed into a child after being poisoned. Under the alias Conan Edogawa, he solves various cases while searching for the organization responsible for his condition.";

  return (
    
    <div className="relative bg-cover bg-center h-80 md:h-96 lg:h-120">
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

export default GhostInAShell;