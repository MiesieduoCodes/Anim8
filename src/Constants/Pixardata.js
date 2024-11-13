const movieData = [
    {
        title: "Toy Story",
        rating: "8.3",
        backgroundImage: "https://c4.wallpaperflare.com/wallpaper/407/622/339/toy-story-barbie-bullseye-toy-story-buzz-lightyear-wallpaper-preview.jpg",
        story: "A cowboy doll is profoundly threatened and jealous when a new spaceman action figure supplants him as top toy in a boy's room.",
        downloadLink: "https://ia601309.us.archive.org/25/items/toy-story_202402/Toy%20Story.mp4"
    },
    {
        title: "Toy Story 2",
        rating: "7.9",
        backgroundImage: "https://c4.wallpaperflare.com/wallpaper/160/504/941/toy-story-toy-story-2-buzz-lightyear-woody-toy-story-wallpaper-preview.jpg",
        story: "When Woody is stolen by a toy collector, Buzz and his friends set out on a rescue mission to save him.",
        downloadLink: "https://example.com/toy-story-2.mp4"
    },
    {
        title: "Toy Story 3",
        rating: "8.3",
        backgroundImage: "https://c4.wallpaperflare.com/wallpaper/387/50/364/toy-story-3-box-toy-wallpaper-preview.jpg",
        story: "The toys are mistakenly delivered to a daycare center instead of the attic before Andy leaves for college, and it's up to Woody to convince the other toys that they weren't abandoned.",
        downloadLink: "https://example.com/toy-story-3.mp4"
    },
    {
        title: "Toy Story 4",
        rating: "7.8",
        backgroundImage: "https://c4.wallpaperflare.com/wallpaper/152/1019/587/toy-story-4-woody-buzz-lightyear-wallpaper-preview.jpg",
        story: "Woody, Buzz, and the gang embark on a road trip adventure with Bonnie and her new toy, Forky, who struggles with his identity as a toy.",
        downloadLink: "https://example.com/toy-story-4.mp4"
    },
    {
        title: "Elemental",
        rating: "7.1",
        backgroundImage: "https://wallpapercave.com/dwp1x/wp13585033.jpg", // Replace with actual image URL
        story: "In a city where fire, water, land, and air residents live together, Ember, a fiery young woman, and Wade, a go-with-the-flow water guy, must learn to understand each other despite their differences.",
        downloadLink: "https://example.com/elemental.mp4" // Replace with actual download link if available
    },
    {
        title: "A Bug's Life",
        rating: "7.2",
        backgroundImage: "https://images.bauerhosting.com/legacy/empire-tmdb/films/9487/images/gOvW00ZMoEiyRwXVkHPfBictPAl.jpg?ar=16%3A9&fit=crop&crop=top&auto=format&w=768&q=80",
        story: "A misfit ant, looking for 'warriors' to save his colony from greedy grasshoppers, recruits a group of bugs that turn out to be an inept circus troupe.",
        downloadLink: "https://example.com/a-bugs-life.mp4"
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
        backgroundImage: "https://wallpapers.com/images/high/boys-of-incredibles-2-zex9u25ymptgkgn5.webp",
        story: "Elastigirl is recruited for a solo mission to save the world, while Mr. Incredible faces his greatest challenge at home: taking care of the kids.",
        downloadLink: "https://example.com/incredibles-2.mp4"
    },
    {
        title: "Onward",
        rating: "7.4",
        backgroundImage: "https://wallpapers.com/images/high/onward-ian-barley-concerned-expressions-qs0dg6wdord15f4x.webp",
        story: "Two teenage elf brothers embark on a quest to discover if there is still a little magic left out there.",
        downloadLink: "https://example.com/onward.mp4"
    },
    {
        title: "Soul",
        rating: "8.1",
        backgroundImage: "https://c4.wallpaperflare.com/wallpaper/557/103/110/soul-pixar-animated-movies-2020-wallpaper-preview.jpg",
        story: "A middle-school band teacher's life changes forever when he has an accident, and his soul embarks on a transformative journey through the afterlife.",
        downloadLink: "https://example.com/soul.mp4"
    },
    {
        title: "Luca",
        rating: "7.5",
        backgroundImage: "https://c4.wallpaperflare.com/wallpaper/848/139/215/luca-2021-pixar-movie-wallpaper-preview.jpg",
        story: "A young boy experiences a life-changing summer in the Italian Riviera while hiding his true identity as a sea monster.",
        downloadLink: "https://example.com/luca.mp4"
    },
  ];
  
  export default movieData;
  