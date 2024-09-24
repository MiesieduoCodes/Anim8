import Navbar from "./Navbar";

const DetectiveConan = () => {
  const movies = [
    "The Time-Bombed Skyscraper (1997)",
    "The Fourteenth Target (1998)",
    "The Last Wizard of the Century (1999)",
    "Captured in Her Eyes (2000)",
    "Countdown to Heaven (2001)",
    "The Phantom of Baker Street (2002)",
    "Crossroad in the Ancient Capital (2003)",
    "Magician of the Silver Sky (2004)",
    "Strategy Above the Depths (2005)",
    "The Private Eyes' Requiem (2006)",
    "Jolly Roger in the Deep Azure (2007)",
    "Full Score of Fear (2008)",
    "The Raven Chaser (2009)",
    "The Lost Ship in the Sky (2010)",
    "Quarter of Silence (2011)",
    "Eleventh Striker (2012)",
    "Private Eye in the Distant Sea (2013)",
    "Dimensional Sniper ",
    "Sunflowers of Inferno",
    "The Darkest Nightmare ",
    "Crimson Love Letter ",
    "Zero the Enforcer ",
    "The Fist of Blue Sapphire",
    "The Scarlet Bullet",
    "The Bride of Halloween ",
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

export default DetectiveConan;