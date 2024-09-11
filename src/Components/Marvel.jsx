
import Navbar from './Navbar'; // Adjust the import path as needed
import Google from '../Assets/images-removebg-preview.png';
const Marvel = () => {
  const cards = [
    {
      title: "Toy Story (1995)",
      rating: 8.1,
      backgroundImage: "url('/src/Assets/ToonImages/Pixar/wallpaperflare.com_wallpaper.jpg')",
      story:
        "A cowboy doll is profoundly threatened and jealous when a new spaceman figure supplants him as top toy in a boy's room.",
    },
    {
      title: "A Bug's Life (1998)",
      rating: 7.5,
      backgroundImage: "url('/src/Assets/ToonImages/Pixar/wallpaperflare.com_wallpaper (1).jpg')",
      story:
        "A misfit ant, looking for warriors to save his colony from greedy grasshoppers, recruits a group of bugs that turn out to be an inept circus troupe.",
    },
    {
      title: "Toy Story 2 (1999)",
      rating: 7.9,
      backgroundImage: "url('https://c4.wallpaperflare.com/wallpaper/716/92/977/horse-dinosaur-dog-piggy-wallpaper-preview.jpg')",
      story:
        "When Woody is stolen by a toy collector, Buzz and his friends vow to rescue him, but Woody finds the idea of immortality in a museum tempting.",
    },
    {
      title: "Monsters, Inc. (2001)",
      rating: 8.1,
      backgroundImage: "url('https://c4.wallpaperflare.com/wallpaper/803/629/189/cartoon-gate-friends-statues-wallpaper-preview.jpg')",
      story:
        "In order to power the city, monsters have to scare children so that they scream. However, the children are toxic to the monsters, and after a child gets through, two monsters realize things may not be what they think.",
    },
    {
      title: "Finding Nemo (2003)",
      rating: 8.1,
      backgroundImage: "url('https://c4.wallpaperflare.com/wallpaper/288/543/808/finding-nemo-crush-finding-nemo-dory-finding-nemo-marlin-finding-nemo-wallpaper-preview.jpg')",
      story:
        "After his son is captured in the Great Barrier Reef and taken to Sydney, a timid clownfish sets out on a journey to bring him home.",
    },
    {
      title: "The Incredibles (2004)",
      rating: 8.0,
      backgroundImage: "url('https://c4.wallpaperflare.com/wallpaper/541/643/697/city-action-disney-heroes-wallpaper-preview.jpg')",
      story:
        "A family of undercover superheroes, while trying to live the quiet suburban life, are forced into action to save the world.",
    },
    {
      title: "Cars (2006)",
      rating: 7.1,
      backgroundImage: "url('https://c4.wallpaperflare.com/wallpaper/689/654/352/machine-the-explosion-sport-cartoon-wallpaper-preview.jpg')",
      story:
        "A hot-shot race-car named Lightning McQueen gets waylaid in Radiator Springs, where he finds the true meaning of friendship and family.",
    },
    {
      title: "Ratatouille (2007)",
      rating: 8.1,
      backgroundImage: "url('https://c4.wallpaperflare.com/wallpaper/988/734/385/paris-pixar-disney-company-movies-ratatouille-entertainment-movies-hd-art-wallpaper-preview.jpg')",
      story:
        "A rat who can cook makes an unusual alliance with a young kitchen worker at a famous restaurant.",
    },
    {
      title: "WALL-E (2008)",
      rating: 8.4,
      backgroundImage: "url('https://c4.wallpaperflare.com/wallpaper/766/754/564/wall-e-pixar-animation-studios-disney-movies-wallpaper-preview.jpg')",
      story:
        "In the distant future, a small waste-collecting robot inadvertently embarks on a space journey that will ultimately decide the fate of mankind.",
    },
    {
      title: "Up (2009)",
      rating: 8.2,
      backgroundImage: "url('https://c4.wallpaperflare.com/wallpaper/673/107/786/up-movie-pixar-animation-studios-movies-sky-wallpaper-preview.jpg')",
      story:
        "Seventy-eight-year-old Carl Fredricksen travels to Paradise Falls in his house equipped with balloons, inadvertently taking a young stowaway.",
    },
    {
      title: "Toy Story 3 (2010)",
      rating: 8.3,
      backgroundImage: "url('https://c4.wallpaperflare.com/wallpaper/387/50/364/toy-story-3-box-toy-wallpaper-preview.jpg')",
      story:
        "The toys are mistakenly delivered to a day-care center instead of the attic right before Andy leaves for college, and it's up to Woody to convince the other toys that they weren't abandoned and to return home.",
    },
    {
      title: "Cars 2 (2011)",
      rating: 6.9,
      backgroundImage: "url('https://c4.wallpaperflare.com/wallpaper/529/30/493/cartoon-pixar-cars-2-cars-2-wallpaper-preview.jpg')",
      story:
        "Star race car Lightning McQueen and his pal Mater head overseas to compete in the World Grand Prix, but the road to the championship becomes rocky as Mater gets caught up in an intriguing adventure of his own: international espionage.",
    },
    {
      title: "Brave (2012)",
      rating:  7.1,
      backgroundImage: "url('https://c4.wallpaperflare.com/wallpaper/162/491/699/4k-brave-princess-merida-disney-princess-wallpaper-preview.jpg')",
      story:
        "Determined to make her own path in life, Princess Merida defies a custom that brings chaos to her kingdom. Granted one wish, Merida must rely on her bravery and her archery skills to undo a beastly curse.",
    },
    {
      title: "Monsters University (2013)",
      rating: 7.1,
      backgroundImage: "url('https://c4.wallpaperflare.com/wallpaper/326/585/282/monsters-university-official-hd-disney-pixar-monster-university-poster-wallpaper-preview.jpg')",
      story:
        "A look at the relationship between Mike Wazowski and James P. 'Sully' Sullivan during their days at Monsters University when they weren't necessarily the best of friends.",
    },
    {
      title: "Inside Out (2015)",
      rating: 8.2,
      backgroundImage: "url('https://c4.wallpaperflare.com/wallpaper/896/550/428/movie-inside-out-anger-inside-out-disgust-inside-out-wallpaper-preview.jpg')",
      story:
        "After young Riley is uprooted from her Midwest life and moved to San Francisco, her emotions - Joy, Fear, Anger, Disgust and Sadness - conflict on how best to navigate a new city, house, and school.",
    },
    {
      title: "The Good Dinosaur (2015)",
      rating: 6.7,
      backgroundImage: "url('https://c4.wallpaperflare.com/wallpaper/1018/439/828/movies-hollywood-movies-wallpaper-preview.jpg')",
      story:
        "In a world where dinosaurs and humans live side by side, an Apatosaurus named Arlo makes an unlikely human friend.",
    },
    {
      title: "Finding Dory (2016)",
      rating: 7.3,
      backgroundImage: "url('https://c4.wallpaperflare.com/wallpaper/3/457/279/finding-dory-pixar-shark-nemo-wallpaper-preview.jpg')",
      story:
        "The friendly but forgetful blue tang fish, Dory, begins a search for her long-lost parents, and everyone learns a few things about the real meaning of family along the way.",
    },
    {
      title: "Cars 3 (2017)",
      rating: 6.8,
      backgroundImage: "url('https://c4.wallpaperflare.com/wallpaper/741/118/524/cars-3-lightning-mcqueen-jackson-storm-cruz-ramirez-wallpaper-preview.jpg')",
      story:
        "Lightning McQueen sets out to prove to a new generation of racers that he's still the best race car in the world.",
    },
    {
      title: "Coco (2017)",
      rating: 8.4,
      backgroundImage: "url('https://c4.wallpaperflare.com/wallpaper/112/76/996/coco-4k-8k-animation-wallpaper-preview.jpg')",
      story:
        "Aspiring musician Miguel, confronted with his family's ancestral ban on music, enters the Land of the Dead to find his great-great-grandfather, a legendary singer.",
    },
    {
      title: "Incredibles 2 (2018)",
      rating: 7.6,
      backgroundImage: "url('https://c4.wallpaperflare.com/wallpaper/936/625/240/movie-incredibles-2-dash-parr-elastigirl-jack-jack-parr-hd-wallpaper-preview.jpg')",
      story:
        "The Incredibles hero family takes on a new mission, which involves a change in family roles: Bob Parr (Mr. Incredible) must manage the house while his wife Helen (Elastigirl) goes out to save the world.",
    },
    {
      title: "Toy Story 4 (2019)",
      rating: 7.8,
      backgroundImage: "url('https://images.wallpapersden.com/image/wxl-toy-story-4-movie_64457.jpg')",
      story:
        "When a new toy called 'Forky' joins Woody and the gang, a road trip alongside old and new friends reveals how big the world can be for a toy.",
    },
    {
      title: "Onward (2020)",
      rating: 6.9,
      backgroundImage: "url('https://images.wallpapersden.com/image/download/8k-poster-of-onward_a25mamuUmZqaraWkpJRsbWllrWhubWc.jpg')",
      story:
        "Two elven brothers embark on a quest to bring their father back for one day.",
    },
    {
      title: "Soul (2020)",
      rating: 8.1,
      backgroundImage: "url('https://c4.wallpaperflare.com/wallpaper/277/715/616/movie-soul-pixar-soul-movie-hd-wallpaper-preview.jpg')",
      story:
        "A musician who has lost his passion for music is transported out of his body and must find his way back with the help of an infant soul learning about herself.",
    },
    {
      title: "Luca (2021)",
      rating: 7.4,
      backgroundImage: "url('https://images.wallpapersden.com/image/wxl-pixar-luca-movie-2021_77981.jpg')",
      story:
        "On the Italian Riviera, an unlikely but strong friendship grows between a human being and a sea monster disguised as a human.",
    },
    {
      title: "Turning Red (2022)",
      rating: 7.3,
      backgroundImage: "url('https://images.wallpapersden.com/image/download/disney-turning-red_bG1oamiUmZqaraWkpJRmbmdlrWZlbWU.jpg')",
      story:
        "A 13-year-old girl named Meilin turns into a giant red panda whenever she gets too excited.",
    },
    {
      title: "Lightyear (2022)",
      rating: 6.9,
      backgroundImage: "url('https://c4.wallpaperflare.com/wallpaper/384/3/757/movie-toy-story-4-buzz-lightyear-hd-wallpaper-preview.jpg')",
      story:
        "While spending years attempting to return home, marooned Space Ranger Buzz Lightyear encounters an army of ruthless robots commanded by Zurg who are attempting to steal his fuel source.",
    },
    {
      title: "Elemental (2023)",
      rating: 7.1,
      backgroundImage: "url('https://example.com/elemental.jpg')",
      story:
        "In a city where fire, water, land, and air residents live together, a fiery young woman and a go-with-the-flow guy discover something elemental: how much they actually have in common.",
    },
  ];



  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Main background section */}
      <div className="relative h-full w-full bg-slate-950">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)]"></div>
        
        {/* Hero Section */}
        <div className="relative bg-cover bg-center h-64 md:h-80 lg:h-96" style={{ backgroundImage: `url('/src/Assets/ToonImages/Pixar/wallpaperflare.com_wallpaper (2).jpg')` }}>
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center p-4 md:p-6 lg:p-8">
            <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold text-center">
              Discover the Magic of Marvel
            </h1>
            <p className="text-white text-base md:text-lg lg:text-xl text-center mt-2 md:mt-4">
              Explore our collection of animated classics that have captured <br />so many hearts across the globe.
            </p>
          </div>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 md:p-10">
          {cards.map((card, index) => (
            <div
              key={index}
              className="relative w-full h-48 md:h-64 lg:h-72 bg-cover bg-center rounded-lg shadow-lg overflow-hidden transform transition-transform duration-500 hover:scale-105"
              style={{
                backgroundImage: card.backgroundImage,
              }}
            >
              {/* Overlay for text and loading bar */}
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center p-2 md:p-4 opacity-0 hover:opacity-100 transition-opacity duration-500">
                <h2 className="text-white text-xl md:text-2xl lg:text-3xl font-bold mb-2 text-center">
                  {card.title}
                </h2>
                <p className="text-white text-sm md:text-base lg:text-lg text-center mb-2">{card.story}</p>
                <div className="w-full bg-gray-300 rounded-full h-2 overflow-hidden mb-2">
                  <div
                    className="bg-red-400 h-full rounded-full"
                    style={{ width: `${card.rating * 10}%` }}
                  ></div>
                </div>
                <p className="text-white text-sm md:text-base">{card.rating}</p>
                <button
                  className="bg-blue-500 text-white font-bold py-1 px-2 rounded hover:bg-green-700 transition-colors duration-300 mt-2"
                  onClick={() => alert(`Downloading ${card.title}`)}
                >
                  Download
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <footer>
        <div className="z-50 p-5 md:w-auto w-full flex justify-between items-center">
          <div>
            <h1 className="md:cursor-pointer text-3xl h-9">
              Anim<span className="text-red-500">8</span>
            </h1>
            <h2> by Goofy_Did_This</h2>
          </div>
          <div>
            <img width="200px" src={Google} alt="" />
          </div>
          <div>
            <h1>© JWICEBOXBIZ, All Rights Reserved.</h1>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Marvel;
