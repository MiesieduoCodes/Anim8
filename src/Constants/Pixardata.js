const movieData = [
    {
        title: "Toy Story",
        rating: "8.3",
        backgroundImage: "https://wallpapers.com/images/high/woody-and-buzz-lightyear-disney-4k-ultra-wide-9qlzumxyotdmyezo.webp",
        story: "A cowboy doll is profoundly threatened and jealous when a new spaceman action figure supplants him as top toy in a boy's room.",
        downloadLink: "https://ia601309.us.archive.org/25/items/toy-story_202402/Toy%20Story.mp4"
    },
    {
        title: "Toy Story 2",
        rating: "7.9",
        backgroundImage: "https://wallpapers.com/images/high/buzz-lightyear-and-jessie-toy-story-2-ljru9ncjb7hy0zv3.webp",
        story: "When Woody is stolen by a toy collector, Buzz and his friends set out on a rescue mission to save him.",
        downloadLink: "https://drive.usercontent.google.com/u/0/uc?id=1u2gSV-eH33C0fl36NCoLTuOkkNH9t-8z&export=download"
    },
    {
        title: "Toy Story 3",
        rating: "8.3",
        backgroundImage: "https://wallpapers.com/images/high/toy-story-3-woody-l3aygq55uq8ydqpa.webp",
        story: "The toys are mistakenly delivered to a daycare center instead of the attic before Andy leaves for college, and it's up to Woody to convince the other toys that they weren't abandoned.",
        downloadLink: "https://example.com/toy-story-3.mp4"
    },
    {
        title: "Toy Story 4",
        rating: "7.8",
        backgroundImage: "https://wallpapers.com/images/hd/toy-story-4-ducky-and-bunny-kfkl61mkly2eqjby.webp",
        story: "Woody, Buzz, and the gang embark on a road trip adventure with Bonnie and her new toy, Forky, who struggles with his identity as a toy.",
        downloadLink: "https://example.com/toy-story-4.mp4"
    },
    {
        title: "Elemental",
        rating: "7.1",
        backgroundImage: "https://wallpapers.com/images/high/elemental-animated-characters-waterand-fire-f0be5vat0y3npn5g.webp", // Replace with actual image URL
        story: "In a city where fire, water, land, and air residents live together, Ember, a fiery young woman, and Wade, a go-with-the-flow water guy, must learn to understand each other despite their differences.",
        downloadLink: "https://example.com/elemental.mp4" // Replace with actual download link if available
    },
    // {
    //     title: "A Bug's Life",
    //     rating: "7.2",
    //     backgroundImage: "",
    //     story: "A misfit ant, looking for 'warriors' to save his colony from greedy grasshoppers, recruits a group of bugs that turn out to be an inept circus troupe.",
    //     downloadLink: "https://example.com/a-bugs-life.mp4"
    // },
    {
        title: "Monsters, Inc.",
        rating: "8.1",
        backgroundImage: "https://wallpapers.com/images/high/monsters-inc-1400-x-933-background-neib0vhkfo4vogb8.webp",
        story: "In order to power the city, monsters have to scare children so they scream. However, the children are toxic to the monsters, and after a child gets through, two monsters realize things may not be what they think.",
        downloadLink: "https://example.com/monsters-inc.mp4"
    },
    {
        title: "Finding Nemo",
        rating: "8.1",
        backgroundImage: "https://wallpapers.com/images/high/finding-nemo-great-white-shark-bruce-jncsh864ujhqpxok.webp",
        story: "After his son is captured in the Great Barrier Reef and taken to Sydney, a timid clownfish sets out on a journey to bring him home.",
        downloadLink: "https://example.com/finding-nemo.mp4"
    },
    {
        title: "The Incredibles",
        rating: "8.0",
        backgroundImage: "https://wallpapers.com/images/high/mr-incredible-explosion-xdwwl002uyaxxvbd.webp",
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
        backgroundImage: "https://wallpapers.com/images/high/soul-1920-x-1080-background-ickjolsqmlszmt7j.webp",
        story: "A middle-school band teacher's life changes forever when he has an accident, and his soul embarks on a transformative journey through the afterlife.",
        downloadLink: "https://example.com/soul.mp4"
    },
    {
        title: "Luca",
        rating: "7.5",
        backgroundImage: "https://wallpapers.com/images/high/luca-characters-rides-green-vespa-ph18a5j1rvszg29f.webp",
        story: "A young boy experiences a life-changing summer in the Italian Riviera while hiding his true identity as a sea monster.",
        downloadLink: "https://example.com/luca.mp4"
    },
  ];
  
  export default movieData;
  