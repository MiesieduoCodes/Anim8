
import RinYoshidaImage from '../Assets/rin-yoshida-in-call-of-duty-mobile-hz.jpg';
import Navbar from './Navbar'; // Adjust the import path as needed

const DCMovies = () => {
  const movies = [
    { 
      title: "Batman: Mask of the Phantasm (1993)", 
      rating: 7.8, 
      story: "Batman faces a mysterious figure known as the Phantasm, who is eliminating Gotham's crime bosses."
    },
    { 
      title: "Batman & Mr. Freeze: SubZero (1998)", 
      rating: 6.8, 
      story: "Mr. Freeze kidnaps Batgirl to save his wife, leading Batman on a dangerous chase."
    },
    { 
      title: "Batman: Mystery of the Batwoman (2003)", 
      rating: 6.7, 
      story: "Batman investigates the identity of a new crimefighter in Gotham, the Batwoman."
    },
    { 
      title: "Batman: Gotham Knight (2008)", 
      rating: 6.9, 
      story: "A series of interconnected stories showcasing Batman's adventures in Gotham City."
    },
    { 
      title: "Wonder Woman (2009)", 
      rating: 7.2, 
      story: "Wonder Woman embarks on a journey to save her homeland and confronts Ares, the god of war."
    },
    { 
      title: "Green Lantern: First Flight (2009)", 
      rating: 6.9, 
      story: "Hal Jordan becomes the first human Green Lantern and must save the universe from a great threat."
    },
    { 
      title: "Superman/Batman: Public Enemies (2009)", 
      rating: 7.1, 
      story: "Superman and Batman must work together to clear their names when they are framed for murder."
    },
    { 
      title: "Batman: Under the Red Hood (2010)", 
      rating: 8.0, 
      story: "Batman faces a mysterious vigilante known as the Red Hood, who has ties to his past."
    },
    { 
      title: "Superman/Batman: Apocalypse (2010)", 
      rating: 7.1, 
      story: "Superman and Batman must protect Supergirl from Darkseid and his forces."
    },
    { 
      title: "All-Star Superman (2011)", 
      rating: 7.1, 
      story: "Superman faces his mortality and must complete twelve labors before his time runs out."
    },
    { 
      title: "Green Lantern: Emerald Knights (2011)", 
      rating: 6.8, 
      story: "Anthology of stories from the Green Lantern Corps as they prepare for a great battle."
    },
    { 
      title: "Batman: Year One (2011)", 
      rating: 7.3, 
      story: "A retelling of Batman's first year as a crimefighter and his origin story."
    },
    { 
      title: "Justice League: Doom (2012)", 
      rating: 7.4, 
      story: "The Justice League must stop Vandal Savage from using Batman's contingency plans against them."
    },
    { 
      title: "Superman vs. The Elite (2012)", 
      rating: 6.9, 
      story: "Superman faces a new group of heroes who have a different approach to justice."
    },
    { 
      title: "Batman: The Dark Knight Returns, Part 1 (2012)", 
      rating: 7.9, 
      story: "An aging Batman comes out of retirement to fight crime in Gotham City once more."
    },
    { 
      title: "Batman: The Dark Knight Returns, Part 2 (2013)", 
      rating: 8.3, 
      story: "Batman faces off against Superman and the Mutants in a climactic battle."
    },
    { 
      title: "Superman: Unbound (2013)", 
      rating: 7.1, 
      story: "Superman must save Earth from the threat of Brainiac, who is collecting cities."
    },
    { 
      title: "Justice League: The Flashpoint Paradox (2013)", 
      rating: 8.1, 
      story: "The Flash accidentally alters the timeline and must fix the chaos he created."
    },
    { 
      title: "Son of Batman (2014)", 
      rating: 6.9, 
      story: "Batman discovers he has a son, Damian, and must teach him to be a hero."
    },
    { 
      title: "Batman: Assault on Arkham (2014)", 
      rating: 7.4, 
      story: "Task Force X is sent to infiltrate Arkham Asylum and retrieve a dangerous weapon."
    },
    { 
      title: "Justice League: Throne of Atlantis (2015)", 
      rating: 6.8, 
      story: "Aquaman's origins are explored as he fights to reclaim his throne."
    },
    { 
      title: "Batman vs. Robin (2015)", 
      rating: 7.1, 
      story: "Batman and Robin's relationship is tested when Damian is influenced by the Court of Owls."
    },
    { 
      title: "Batman: Bad Blood (2016)", 
      rating: 6.8, 
      story: "Batman goes missing, and the rest of the Bat-family must band together to find him."
    },
    { 
      title: "Justice League vs. Teen Titans (2016)", 
      rating: 6.9, 
      story: "The Teen Titans must team up with the Justice League to face the demonic Trigon."
    },
    { 
      title: "Batman: The Killing Joke (2016)", 
      rating: 6.7, 
      story: "An exploration of the relationship between Batman and the Joker through a tragic event."
    },
    { 
      title: "Justice League Dark (2017)", 
      rating: 6.8, 
      story: "A team of supernatural heroes must save the world from dark magic."
    },
    { 
      title: "Teen Titans: The Judas Contract (2017)", 
      rating: 6.8, 
      story: "The Teen Titans face betrayal as a new member infiltrates their team."
    },
    { 
      title: "Batman and Harley Quinn (2017)", 
      rating: 6.6, 
      story: "Batman teams up with Harley Quinn to stop a global threat."
    },
    { 
      title: "Batman: Gotham by Gaslight (2018)", 
      rating: 6.8, 
      story: "Batman investigates Jack the Ripper in a Victorian-era Gotham."
    },
    { 
      title: "Justice League: The Fatal Five (2019)", 
      rating: 6.7, 
      story: "The Justice League must stop the Fatal Five from destroying the future."
    },
    { 
      title: "Batman: Hush (2019)", 
      rating: 7.1, 
      story: "Batman faces a mysterious new villain known as Hush while dealing with his past."
    },
    { 
      title: "Wonder Woman: Bloodlines (2019)", 
      rating: 6.8, 
      story: "Wonder Woman fights to protect her homeland from a powerful new enemy."
    },
    { 
      title: "Superman: Red Son (2020)", 
      rating: 6.9, 
      story: "An alternate history where Superman lands in the Soviet Union instead of Kansas."
    },
    { 
      title: "Justice League Dark: Apokolips War (2020)", 
      rating: 7.7, 
      story: "The Justice League faces Darkseid in a battle that could determine the fate of Earth."
    },
    { 
      title: "Batman: Soul of the Dragon (2021)", 
      rating: 6.8, 
      story: "A martial arts adventure featuring Batman training in the East."
    },
    { 
      title: "Justice Society: World War II (2021)", 
      rating: 6.9, 
      story: "The Justice Society must fight against the Axis powers during World War II."
    },
    { 
      title: "Batman: The Long Halloween, Part One (2021)", 
      rating: 7.2, 
      story: "Batman investigates a series of murders that happen on holidays."
    },
    { 
      title: "Batman: The Long Halloween, Part Two (2021)", 
      rating: 7.2, 
      story: "The investigation of the Holiday Killer continues as Batman faces new challenges."
    },
    { 
      title: "Injustice (2021)", 
      rating: 6.8, 
      story: "A world where Superman becomes a tyrant after a personal tragedy."
    },
    { 
      title: "DC League of Super-Pets (2022)", 
      rating: 7.1, 
      story: "Superman's pet dog teams up with a group of super-powered pets to save the day."
    },
  ];

  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <div className="relative bg-cover bg-center h-80 md:h-96 lg:h-120" style={{ backgroundImage: `url(${RinYoshidaImage})` }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center p-6">
          <h1 className="text-white text-3xl md:text-5xl lg:text-6xl font-bold text-center">
            DC Animated Movies
          </h1>
          <p className="text-white text-lg md:text-xl lg:text-2xl text-center mt-4">
            Explore our collection of iconic animated films from the DC universe.
          </p>
        </div>
      </div>

      {/* Movies Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 p-10">
        {movies.map((movie, index) => (
          <div key={index} className="bg-white p-5 rounded-lg shadow-lg">
            <h2 className="text-lg font-bold">{movie.title}</h2>
            <p className="text-gray-600">Rating: {movie.rating}</p>
            <div className="w-full bg-gray-300 rounded-full h-4 overflow-hidden mb-2">
              <div
                className="bg-purple-800 h-full rounded-full"
                style={{ width: `${movie.rating * 10}%` }}
              ></div>
            </div>
            <p className="text-gray-500 mt-2">{movie.story}</p>
            <button
              className="mt-3 bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-green-700 transition-colors duration-300"
              onClick={() => alert(`Downloading ${movie.title}`)}
            >
              Download
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DCMovies;