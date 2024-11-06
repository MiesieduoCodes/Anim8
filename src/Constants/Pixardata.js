const movieData = [
  {
      title: "Toy Story",
      rating: "8.3",
      backgroundImage: "https://c4.wallpaperflare.com/wallpaper/407/622/339/toy-story-barbie-bullseye-toy-story-buzz-lightyear-wallpaper-preview.jpg",
      story: "A cowboy doll is profoundly threatened and jealous when a new spaceman action figure supplants him as top toy in a boy's room.",
      downloadLink: "https://ia601309.us.archive.org/25/items/toy-story_202402/Toy%20Story.mp4"
  },
  {
      title: "A Bug's Life",
      rating: "7.2",
      backgroundImage: "https://images.bauerhosting.com/legacy/empire-tmdb/films/9487/images/gOvW00ZMoEiyRwXVkHPfBictPAl.jpg?ar=16%3A9&fit=crop&crop=top&auto=format&w=768&q=80",
      story: "A misfit ant, looking for 'warriors' to save his colony from greedy grasshoppers, recruits a group of bugs that turn out to be an inept circus troupe.",
      downloadLink: "https://example.com/a-bugs-life.mp4"
  },
  {
      title: "Toy Story 2",
      rating: "7.9",
      backgroundImage: "https://c4.wallpaperflare.com/wallpaper/160/504/941/toy-story-toy-story-2-buzz-lightyear-woody-toy-story-wallpaper-preview.jpg",
      story: "When Woody is stolen by a toy collector, Buzz and his friends set out on a rescue mission to save him.",
      downloadLink: "https://example.com/toy-story-2.mp4"
  },
  {
      title: "Monsters, Inc.",
      rating: "8.1",
      backgroundImage: "https://c4.wallpaperflare.com/wallpaper/803/629/189/cartoon-gate-friends-statues-wallpaper-preview.jpg",
      story: "In order to power the city, monsters have to scare children so they scream. However, the children are toxic to the monsters, and after a child gets through, two monsters realize things may not be what they think.",
      downloadLink: "https://example.com/monsters-inc.mp4"
  },
  {
      title: "Finding Nemo",
      rating: "8.1",
      backgroundImage: "https://c4.wallpaperflare.com/wallpaper/700/141/259/finding-nemo-disney-movies-fish-wallpaper-preview.jpg",
      story: "After his son is captured in the Great Barrier Reef and taken to Sydney, a timid clownfish sets out on a journey to bring him home.",
      downloadLink: "https://example.com/finding-nemo.mp4"
  },
  {
      title: "The Incredibles",
      rating: "8.0",
      backgroundImage: "https://c4.wallpaperflare.com/wallpaper/770/993/260/movie-the-incredibles-dash-parr-elastigirl-wallpaper-preview.jpg",
      story: "A family of undercover superheroes, while trying to live the quiet suburban life, are forced into action to save the world.",
      downloadLink: "https://example.com/the-incredibles.mp4"
  },
  {
      title: "Cars",
      rating: "7.2",
      backgroundImage: "https://c4.wallpaperflare.com/wallpaper/759/811/822/disney-lightning-mcqueen-mcqueen-cars-movie-wallpaper-preview.jpg",
      story: "A hotshot race car named Lightning McQueen gets waylaid in Radiator Springs, where he finds the true meaning of friendship and family.",
      downloadLink: "https://example.com/cars.mp4"
  },
  {
      title: "Ratatouille",
      rating: "8.0",
      backgroundImage: "https://c4.wallpaperflare.com/wallpaper/988/734/385/paris-pixar-disney-company-movies-ratatouille-entertainment-movies-hd-art-wallpaper-preview.jpg",
      story: "A rat who can cook makes an unusual alliance with a young kitchen worker at a famous restaurant.",
      downloadLink: "https://example.com/ratatouille.mp4"
  },
  {
      title: "WALL-E",
      rating: "8.4",
      backgroundImage: "https://c4.wallpaperflare.com/wallpaper/766/754/564/wall-e-pixar-animation-studios-disney-movies-wallpaper-preview.jpg",
      story: "In the distant future, a small waste-collecting robot inadvertently embarks on a space journey that will ultimately decide the fate of mankind.",
      downloadLink: "https://example.com/wall-e.mp4"
  },
  {
      title: "Up",
      rating: "8.3",
      backgroundImage: "https://c4.wallpaperflare.com/wallpaper/673/107/786/up-movie-pixar-animation-studios-movies-sky-wallpaper-preview.jpg",
      story: "78-year-old Carl sets out to fulfill his dream of seeing the wilds of South America by tying thousands of balloons to his home.",
      downloadLink: "https://example.com/up.mp4"
  },
  {
      title: "Toy Story 3",
      rating: "8.3",
      backgroundImage: "https://c4.wallpaperflare.com/wallpaper/387/50/364/toy-story-3-box-toy-wallpaper-preview.jpg",
      story: "The toys are mistakenly delivered to a daycare center instead of the attic before Andy leaves for college, and it's up to Woody to convince the other toys that they weren't abandoned.",
      downloadLink: "https://example.com/toy-story-3.mp4"
  },
  {
      title: "Cars 2",
      rating: "6.2",
      backgroundImage: "https://c4.wallpaperflare.com/wallpaper/529/30/493/cartoon-pixar-cars-2-cars-2-wallpaper-preview.jpg",
      story: "Star race car Lightning McQueen and his pal Mater head overseas to compete in the World Grand Prix, but the road to the championship becomes rocky as Mater gets caught up in espionage.",
      downloadLink: "https://example.com/cars-2.mp4"
  },
  {
      title: "Brave",
      rating: "7.1",
      backgroundImage: "https://c4.wallpaperflare.com/wallpaper/162/491/699/4k-brave-princess-merida-disney-princess-wallpaper-preview.jpg",
      story: "Determined to make her own path in life, Princess Merida defies a custom that brings chaos to her kingdom.",
      downloadLink: "https://example.com/brave.mp4"
  },
  {
      title: "Monsters University",
      rating: "7.2",
      backgroundImage: "https://c4.wallpaperflare.com/wallpaper/276/933/303/monsters-university-disney-wallpaper-preview.jpg",
      story: "A look at the relationship between Mike Wazowski and James P. 'Sulley' Sullivan during their days at Monsters University, when they weren't necessarily the best of friends.",
      downloadLink: "https://example.com/monsters-university.mp4"
  },
  {
      title: "Inside Out",
      rating: "8.1",
      backgroundImage: "https://c4.wallpaperflare.com/wallpaper/554/758/458/movie-inside-out-anger-inside-out-disgust-inside-out-wallpaper-preview.jpg",
      story: "After young Riley is uprooted from her Midwest life and moved to San Francisco, her emotions – Joy, Fear, Anger, Disgust and Sadness – conflict on how best to navigate a new city, house, and school.",
      downloadLink: "https://example.com/inside-out.mp4"
  },
  {
      title: "The Good Dinosaur",
      rating: "6.7",
      backgroundImage: "https://c4.wallpaperflare.com/wallpaper/1018/439/828/movies-hollywood-movies-wallpaper-preview.jpg",
      story: "In a world where dinosaurs and humans live side by side, an Apatosaurus named Arlo makes an unlikely human friend.",
      downloadLink: "https://example.com/the-good-dinosaur.mp4"
  },
  {
      title: "Finding Dory",
      rating: "7.3",
      backgroundImage: "https://c4.wallpaperflare.com/wallpaper/822/890/520/movie-finding-dory-dory-finding-nemo-wallpaper-preview.jpg",
      story: "The friendly but forgetful blue tang fish, Dory, begins a search for her long-lost parents, and everyone learns a few things about the real meaning of family along the way.",
      downloadLink: "https://example.com/finding-dory.mp4"
  },
  {
      title: "Cars 3",
      rating: "6.7",
      backgroundImage: "https://c4.wallpaperflare.com/wallpaper/939/452/923/lightning-mcqueen-4k-poster-cars-3-wallpaper-preview.jpg",
      story: "Lightning McQueen sets out to prove to a new generation of racers that he's still the best race car in the world.",
      downloadLink: "https://example.com/cars-3.mp4"
  },
  {
      title: "Coco",
      rating: "8.4",
      backgroundImage: "https://c4.wallpaperflare.com/wallpaper/165/365/163/pixar-animation-2017-miguel-rivera-wallpaper-preview.jpg",
      story: "Aspiring musician Miguel, confronted with his family's ancestral ban on music, enters the Land of the Dead to find his great-great-grandfather, a legendary singer.",
      downloadLink: "https://example.com/coco.mp4"
  },
  {
      title: "Incredibles 2",
      rating: "7.6",
      backgroundImage: "https://c4.wallpaperflare.com/wallpaper/722/1011/788/movie-incredibles-2-bob-parr-elastigirl-wallpaper-preview.jpg",
      story: "Elastigirl is recruited for a solo mission to save the world, while Mr. Incredible faces his greatest challenge at home: taking care of the kids.",
      downloadLink: "https://example.com/incredibles-2.mp4"
  },
  {
      title: "Onward",
      rating: "7.4",
      backgroundImage: "https://c4.wallpaperflare.com/wallpaper/389/288/298/disney-pixar-onward-movie-wallpaper-preview.jpg",
      story: "Two teenage elf brothers embark on a quest to discover if there is still a little magic left out there.",
      downloadLink: "https://example.com/onward.mp4"
  },
  {
      title: "Soul",
      rating: "8.1",
      backgroundImage: "https://c4.wallpaperflare.com/wallpaper/295/206/130/pixar-soul-wallpaper-preview.jpg",
      story: "Joe Gardner is a middle school band teacher who has always dreamed of playing at the best jazz club in town.",
      downloadLink: "https://example.com/soul.mp4"
  },
  {
      title: "Luca",
      rating: "7.5",
      backgroundImage: "https://c4.wallpaperflare.com/wallpaper/631/168/754/luca-movie-wallpaper-preview.jpg",
      story: "Luca is a young sea monster with a yearning for adventure, who forms a friendship with a boy on the surface.",
      downloadLink: "https://example.com/luca.mp4"
  },
  {
      title: "Turning Red",
      rating: "7.0",
      backgroundImage: "https://c4.wallpaperflare.com/wallpaper/474/867/525/pixar-turning-red-movie-wallpaper-preview.jpg",
      story: "A 13-year-old girl named Mei turns into a giant red panda whenever she gets too excited.",
      downloadLink: "https://example.com/turning-red.mp4"
  },
  {
      title: "Lightyear",
      rating: "5.7",
      backgroundImage: "https://c4.wallpaperflare.com/wallpaper/294/953/576/pixar-lightyear-movie-wallpaper-preview.jpg",
      story: "The legendary Space Ranger's origin story—exploring his adventure to infinity and beyond.",
      downloadLink: "https://example.com/lightyear.mp4"
  }
];

export default movieData;