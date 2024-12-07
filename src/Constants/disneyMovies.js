const disneyMovies = [
  {
    title: "Lilo & Stitch",
    rating: "7.3",
    backgroundImage: "https://c4.wallpaperflare.com/wallpaper/780/383/751/movie-lilo-and-stitch-wallpaper-preview.jpg",
    story: "A young girl adopts a unique pet who turns out to be a notorious extra-terrestrial fugitive.",
    downloadLink: "https://example.com/movies/lilo-and-stitch.mp4"
  },
  {
    title: "Treasure Planet",
    rating: "7.2",
    backgroundImage: "https://c4.wallpaperflare.com/wallpaper/954/990/373/treasure-planet-disney-science-fiction-steampunk-hd-wallpaper-preview.jpg",
    story: "A Disney animated version of 'Treasure Island.' The only difference is that the island is a planet.",
    downloadLink: "https://example.com/movies/treasure-planet.mp4"
  },
  {
    title: "Chicken Little",
    rating: "5.7",
    backgroundImage: "https://c4.wallpaperflare.com/wallpaper/472/16/943/chicken-little-funny-hd-wallpaper-wallpaper-preview.jpg",
    story: "After ruining his reputation with the town, a courageous chicken must come to the rescue of his fellow citizens when aliens start an invasion.",
    downloadLink: "https://example.com/movies/chicken-little.mp4"
  },
  {
    title: "The Princess and the Frog",
    rating: "7.1",
    backgroundImage: "https://c4.wallpaperflare.com/wallpaper/661/606/473/movie-the-princess-and-the-frog-wallpaper-preview.jpg",
    story: "A waitress, desperate to fulfill her dreams as a restaurant owner, is set on a journey to turn a frog prince back into a human being.",
    downloadLink: "https://example.com/movies/princess-and-the-frog.mp4"
  },
  {
    title: "Tangled",
    rating: "7.7",
    backgroundImage: "https://c4.wallpaperflare.com/wallpaper/16/77/288/tangled-movie-rapunzel-wallpaper-preview.jpg",
    story: "The magically long-haired Rapunzel has spent her entire life in a tower, but now that a runaway thief has stumbled upon her, she is about to discover the world for the first time.",
    downloadLink: "https://example.com/movies/tangled.mp4"
  },
  {
    title: "Frozen",
    rating: "7.4",
    backgroundImage: "https://c4.wallpaperflare.com/wallpaper/987/132/956/snow-snowflakes-ice-deer-wallpaper-preview.jpg",
    story: "When the newly crowned Queen Elsa accidentally uses her power to turn things into ice to curse her home, her sister Anna teams up with a mountain man, his playful reindeer, and a snowman to change the weather condition.",
    downloadLink: "https://example.com/movies/frozen.mp4"
  },
  {
    title: "Wreck-It Ralph",
    rating: "7.7",
    backgroundImage: "https://c4.wallpaperflare.com/wallpaper/290/558/366/cartoon-movie-wreck-it-ralph-wallpaper-preview.jpg",
    story: "A video game villain wants to be a hero and sets out to fulfill his dream, but his quest brings havoc to the whole arcade where he lives.",
    downloadLink: "https://example.com/movies/wreck-it-ralph.mp4"
  },
  {
    title: "Big Hero 6",
    rating: "7.8",
    backgroundImage: "https://c4.wallpaperflare.com/wallpaper/900/725/263/baymax-big-hero-6-hiro-hamada-big-hero-6-tadashi-hamada-big-hero-6-big-hero-6-wallpaper-preview.jpg",
    story: "A special bond develops between a plus-sized inflatable robot and a prodigy, who team up with a group of friends to form a band of high-tech heroes.",
    downloadLink: "https://example.com/movies/big-hero-6.mp4"
  },
  {
    title: "Zootopia",
    rating: "8.0",
    backgroundImage: "https://c4.wallpaperflare.com/wallpaper/459/924/918/zootopia-rabbit-cartoon-fox-wallpaper-preview.jpg",
    story: "In a city of anthropomorphic animals, a rookie bunny cop and a cynical con artist fox must work together to uncover a conspiracy.",
    downloadLink: "https://example.com/movies/zootopia.mp4"
  },
  {
    title: "Moana",
    rating: "7.6",
    backgroundImage: "https://c4.wallpaperflare.com/wallpaper/141/820/1006/disney-princesses-moana-vaiana-sea-cartoon-movie-wallpaper-preview.jpg",
    story: "In Ancient Polynesia, when a terrible curse incurred by the Demigod Maui reaches Moana's island, she answers the ocean's call to seek out the Demigod to set things right.",
    downloadLink: "https://example.com/movies/moana.mp4"
  },
  {
    title: "Raya and the Last Dragon",
    rating: "7.3",
    backgroundImage: "https://c4.wallpaperflare.com/wallpaper/134/1023/771/raya-and-the-last-dragon-animated-movies-raya-raya-and-the-last-dragon-movies-hd-wallpaper-preview.jpg",
    story: "In a realm known as Kumandra, a re-imagined Earth inhabited by an ancient civilization, a warrior named Raya is determined to find the last dragon.",
    downloadLink: "https://example.com/movies/raya-and-the-last-dragon.mp4"
  },
  // New entries
  {
    title: "Encanto",
    rating: "7.3",
    backgroundImage: "https://wallpapers.com/images/high/encanto-mirabel-holding-broken-glass-dxyz7q1udwx09toc.webp",
    story: "The Madrigal family lives in a magical house in a vibrant town, but one of them, Mirabel, discovers that she might be the key to saving their home and magic.",
    downloadLink: "https://example.com/movies/encanto.mp4"
  },
  {
    title: "Wish",
    rating: "N/A",
    backgroundImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi5s1N2CIXcUaRbjDakKFuRK-GvCTB5d1JYg&s",
    story: "In the kingdom of Rosas, a young woman named Asha makes a wish to the stars, beginning a journey that will change her destiny.",
    downloadLink: "https://example.com/movies/wish.mp4"
  },
  {
    title: "Strange World",
    rating: "6.3",
    backgroundImage: "https://platform.polygon.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/24223176/STRANGE_WORLD_ONLINE_USE_fullcomp_317_39_6k_film.0013_a.jpg?quality=90&strip=all&crop=25.180921052632%2C0%2C62.8125%2C100&w=2400",
    story: "The Clade family, explorers of a mysterious and uncharted world, face strange creatures and obstacles as they venture into a realm beyond imagination.",
    downloadLink: "https://example.com/movies/strange-world.mp4"
  },
  {
    title: "Frozen II",
    rating: "6.9",
    backgroundImage: "https://wallpapers.com/images/high/elsa-and-anna-adult-kncpyugry2704mkd.webp",
    story: "Anna and Elsa embark on a journey to discover the origins of Elsa's powers and uncover the truth about their family's past.",
    downloadLink: "https://example.com/movies/frozen-ii.mp4"
  }
];

export default disneyMovies;
