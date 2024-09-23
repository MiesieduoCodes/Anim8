
import Navbar from "./Navbar";
const OnePiece = () => {
  const movies = [

    "One Piece: Strong World (2010)",
    "One Piece: Straw Hat Chase (2011)",
    "One Piece: Film Z (2012)",
    "One Piece: Gold (2016)",
    "One Piece: Stampede (2019)",
    "One Piece: Red (2022)",
    
    
  ];

  const story = "Detective Conan follows the adventures of Shinichi Kudo, a teenage detective who is transformed into a child after being poisoned. Under the alias Conan Edogawa, he solves various cases while searching for the organization responsible for his condition.";

  return (

    <div className="p-6">
      <Navbar />
      <h1 className="text-2xl font-bold">Detective Conan Movies</h1>
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

export default OnePiece;