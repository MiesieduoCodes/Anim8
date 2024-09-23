
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
    "Dimensional Sniper (2014)",
    "Sunflowers of Inferno (2015)",
    "The Darkest Nightmare (2016)",
    "Crimson Love Letter (2017)",
    "Zero the Enforcer (2018)",
    "The Fist of Blue Sapphire (2019)",
    "The Scarlet Bullet (2021)",
    "The Bride of Halloween (2022)",
  ];

  const story = "Detective Conan follows the adventures of Shinichi Kudo, a teenage detective who is transformed into a child after being poisoned. Under the alias Conan Edogawa, he solves various cases while searching for the organization responsible for his condition.";

  return (

    <div className="p-6">
      <Navbar />
      <h1 className="text-2xl font-bold">Detective Conan Movies</h1>
      <img src="" alt="Detective Conan" className="w-full h-auto mt-4 rounded-lg" />
      <p className="mt-4 text-lg">{story}</p>
      <ul className="list-disc list-inside mt-4">
        {movies.map((movie, index) => (
          <li key={index} className="text-lg">{movie}</li>
        ))}
      </ul>
      
    </div>
  );
};

export default DetectiveConan;