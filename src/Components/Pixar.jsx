import { useState, useEffect } from 'react'; // Import necessary hooks
import Navbar from './Navbar';
import Footer from "./Footer";
import FloatingMusicButton from '../FloatingMusicButton';
const Pixar = () => {
  const [cards, setCards] = useState([]);

 // useRef hook

  useEffect(() => {
    // Predefined data for Pixar movies
    const movieData = [
      {
        title: "Toy Story",
        rating: "8.3",
        backgroundImage: "https://c4.wallpaperflare.com/wallpaper/407/622/339/toy-story-barbie-bullseye-toy-story-buzz-lightyear-wallpaper-preview.jpg",
        story: "A cowboy doll is profoundly threatened and jealous when a new spaceman action figure supplants him as top toy in a boy's room.",
      },
      {
        title: "A Bug's Life",
        rating: "7.2",
        backgroundImage: "https://images.bauerhosting.com/legacy/empire-tmdb/films/9487/images/gOvW00ZMoEiyRwXVkHPfBictPAl.jpg?ar=16%3A9&fit=crop&crop=top&auto=format&w=768&q=80",
        story: "A misfit ant, looking for 'warriors' to save his colony from greedy grasshoppers, recruits a group of bugs that turn out to be an inept circus troupe.",
      },
      {
        title: "Toy Story 2",
        rating: "7.9",
        backgroundImage: "https://c4.wallpaperflare.com/wallpaper/160/504/941/toy-story-toy-story-2-buzz-lightyear-woody-toy-story-wallpaper-preview.jpg",
        story: "When Woody is stolen by a toy collector, Buzz and his friends set out on a rescue mission to save him.",
      },
      {
        title: "Monsters, Inc.",
        rating: "8.1",
        backgroundImage: "https://c4.wallpaperflare.com/wallpaper/803/629/189/cartoon-gate-friends-statues-wallpaper-preview.jpg",
        story: "In order to power the city, monsters have to scare children so they scream. However, the children are toxic to the monsters, and after a child gets through, two monsters realize things may not be what they think.",
      },
      {
        title: "Finding Nemo",
        rating: "8.1",
        backgroundImage: "https://c4.wallpaperflare.com/wallpaper/700/141/259/finding-nemo-disney-movies-fish-wallpaper-preview.jpg",
        story: "After his son is captured in the Great Barrier Reef and taken to Sydney, a timid clownfish sets out on a journey to bring him home.",
      },
      {
        title: "The Incredibles",
        rating: "8.0",
        backgroundImage: "https://c4.wallpaperflare.com/wallpaper/770/993/260/movie-the-incredibles-dash-parr-elastigirl-wallpaper-preview.jpg",
        story: "A family of undercover superheroes, while trying to live the quiet suburban life, are forced into action to save the world.",
      },
      {
        title: "Cars",
        rating: "7.2",
        backgroundImage: "https://c4.wallpaperflare.com/wallpaper/759/811/822/disney-lightning-mcqueen-mcqueen-cars-movie-wallpaper-preview.jpg",
        story: "A hotshot race car named Lightning McQueen gets waylaid in Radiator Springs, where he finds the true meaning of friendship and family.",
      },
      {
        title: "Ratatouille",
        rating: "8.0",
        backgroundImage: "https://c4.wallpaperflare.com/wallpaper/988/734/385/paris-pixar-disney-company-movies-ratatouille-entertainment-movies-hd-art-wallpaper-preview.jpg",
        story: "A rat who can cook makes an unusual alliance with a young kitchen worker at a famous restaurant.",
      },
      {
        title: "WALL-E",
        rating: "8.4",
        backgroundImage: "https://c4.wallpaperflare.com/wallpaper/766/754/564/wall-e-pixar-animation-studios-disney-movies-wallpaper-preview.jpg",
        story: "In the distant future, a small waste-collecting robot inadvertently embarks on a space journey that will ultimately decide the fate of mankind.",
      },
      {
        title: "Up",
        rating: "8.3",
        backgroundImage: "https://c4.wallpaperflare.com/wallpaper/673/107/786/up-movie-pixar-animation-studios-movies-sky-wallpaper-preview.jpg",
        story: "78-year-old Carl sets out to fulfill his dream of seeing the wilds of South America by tying thousands of balloons to his home.",
      },
      {
        title: "Toy Story 3",
        rating: "8.3",
        backgroundImage: "https://c4.wallpaperflare.com/wallpaper/387/50/364/toy-story-3-box-toy-wallpaper-preview.jpg",
        story: "The toys are mistakenly delivered to a daycare center instead of the attic before Andy leaves for college, and it's up to Woody to convince the other toys that they weren't abandoned.",
      },
      {
        title: "Cars 2",
        rating: "6.2",
        backgroundImage: "https://c4.wallpaperflare.com/wallpaper/529/30/493/cartoon-pixar-cars-2-cars-2-wallpaper-preview.jpg",
        story: "Star race car Lightning McQueen and his pal Mater head overseas to compete in the World Grand Prix, but the road to the championship becomes rocky as Mater gets caught up in espionage.",
      },
      {
        title: "Brave",
        rating: "7.1",
        backgroundImage: "https://c4.wallpaperflare.com/wallpaper/162/491/699/4k-brave-princess-merida-disney-princess-wallpaper-preview.jpg",
        story: "Determined to make her own path in life, Princess Merida defies a custom that brings chaos to her kingdom.",
      },
      {
        title: "Monsters University",
        rating: "7.2",
        backgroundImage: "https://c4.wallpaperflare.com/wallpaper/276/933/303/monsters-university-disney-wallpaper-preview.jpg",
        story: "A look at the relationship between Mike Wazowski and James P. 'Sulley' Sullivan during their days at Monsters University, when they weren't necessarily the best of friends.",
      },
      {
        title: "Inside Out",
        rating: "8.1",
        backgroundImage: "https://c4.wallpaperflare.com/wallpaper/554/758/458/movie-inside-out-anger-inside-out-disgust-inside-out-wallpaper-preview.jpg",
        story: "After young Riley is uprooted from her Midwest life and moved to San Francisco, her emotions – Joy, Fear, Anger, Disgust and Sadness – conflict on how best to navigate a new city, house, and school.",
      },
      {
        title: "The Good Dinosaur",
        rating: "6.7",
        backgroundImage: "https://c4.wallpaperflare.com/wallpaper/1018/439/828/movies-hollywood-movies-wallpaper-preview.jpg",
        story: "In a world where dinosaurs and humans live side by side, an Apatosaurus named Arlo makes an unlikely human friend.",
      },
      {
        title: "Finding Dory",
        rating: "7.3",
        backgroundImage: "https://c4.wallpaperflare.com/wallpaper/822/890/520/movie-finding-dory-dory-finding-nemo-wallpaper-preview.jpg",
        story: "The friendly but forgetful blue tang fish, Dory, begins a search for her long-lost parents, and everyone learns a few things about the real meaning of family along the way.",
      },
      {
        title: "Cars 3",
        rating: "6.7",
        backgroundImage: "https://c4.wallpaperflare.com/wallpaper/939/452/923/lightning-mcqueen-4k-poster-cars-3-wallpaper-preview.jpg",
        story: "Lightning McQueen sets out to prove to a new generation of racers that he's still the best race car in the world.",
      },
      {
        title: "Coco",
        rating: "8.4",
        backgroundImage: "https://c4.wallpaperflare.com/wallpaper/165/365/163/pixar-animation-2017-miguel-rivera-wallpaper-preview.jpg",
        story: "Aspiring musician Miguel, confronted with his family's ancestral ban on music, enters the Land of the Dead to find his great-great-grandfather, a legendary singer.",
      },
      {
        title: "Incredibles 2",
        rating: "7.6",
        backgroundImage: "https://c4.wallpaperflare.com/wallpaper/722/1011/788/movie-incredibles-2-bob-parr-elastigirl-wallpaper-preview.jpg",
        story: "Elastigirl is recruited for a solo mission to save the world, while Mr. Incredible faces his greatest challenge at home: taking care of the kids.",
      },
      {
        title: "Onward",
        rating: "7.4",
        backgroundImage: "https://c4.wallpaperflare.com/wallpaper/389/288/298/disney-pixar-onward-movie-wallpaper-preview.jpg",
        story: "Two teenage elf brothers embark on a quest to discover if there is still a little magic left out there.",
      },
      {
        title: "Soul",
        rating: "8.1",
        backgroundImage: "https://c4.wallpaperflare.com/wallpaper/295/206/130/pixar-soul-wallpaper-preview.jpg",
        story: "Joe Gardner is a middle school band teacher who has always dreamed of playing at the best jazz club in town.",
      },
      {
        title: "Luca",
        rating: "7.5",
        backgroundImage: "https://c4.wallpaperflare.com/wallpaper/631/168/754/luca-movie-wallpaper-preview.jpg",
        story: "Luca is a young sea monster with a yearning for adventure, who forms a friendship with a boy on the surface.",
      },
      {
        title: "Turning Red",
        rating: "7.0",
        backgroundImage: "https://c4.wallpaperflare.com/wallpaper/474/867/525/pixar-turning-red-movie-wallpaper-preview.jpg",
        story: "A 13-year-old girl named Mei turns into a giant red panda whenever she gets too excited.",
      },
      {
        title: "Lightyear",
        rating: "5.7",
        backgroundImage: "https://c4.wallpaperflare.com/wallpaper/294/953/576/pixar-lightyear-movie-wallpaper-preview.jpg",
        story: "The legendary Space Ranger's origin story—exploring his adventure to infinity and beyond.",
      },
    ];
    
    setCards(movieData);
  }, []); // Dependency array to run once


  return (
    <div className="main-content pt-24">
      <Navbar />

      {/* Music Section */}


      <div className="relative h-full w-full bg-slate-950">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)]"></div>

        <div className="relative bg-cover bg-center h-64 md:h-80 lg:h-96" style={{ backgroundImage: `url('https://wallpapers.com/images/featured/pixar-cx81w1x378htuj4p.webp')` }}>
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center p-4 md:p-6 lg:p-8">
            <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold text-center">
              Discover the Magic of Pixar
            </h1>
            <p className="text-white text-base md:text-lg lg:text-xl text-center mt-2 md:mt-4">
              Explore our collection of animated classics that have captured <br />hearts across the globe.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 p-10">
          {cards.map((card, index) => (
            <div
              key={index}
              className="relative w-full p-36 h-48 md:h-64 lg:h-72 xl:h-80 bg-cover bg-center rounded-lg shadow-lg overflow-hidden transform transition-transform duration-500 hover:scale-90"
              style={{
                backgroundImage: `url(${card.backgroundImage})`,
              }}
            >
              {/* Overlay for text */}
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center p-4 opacity-0 hover:opacity-100 transition-opacity duration-500">
                <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold mb-2">
                  {card.title}
                </h2>
                <p className="text-white text-lg text-center mb-2">{card.story}</p>
                <div className="w-full bg-gray-300 border-none rounded-full h-4 overflow-hidden mb-2">
                  <div
                    className="bg-purple-800 h-full rounded-full"
                    style={{ width: `${card.rating * 10}%` }} // Adjusted width calculation
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

export default Pixar;
