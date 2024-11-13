const netflixMovies = [
  {
    title: "Next Gen",
    rating: "6.6",
    backgroundImage: "https://c4.wallpaperflare.com/wallpaper/320/228/329/next-gen-animated-wallpaper-preview.jpg",
    story: "A friendship between a rebellious girl and a top-secret robot develops as they fight a villainous tech mogul.",
    downloadLink: "https://example.com/download/next-gen"
  },
  {
    title: "White Fang",
    rating: "6.7",
    backgroundImage: "https://c4.wallpaperflare.com/wallpaper/606/22/476/white-fang-movie-wallpaper-preview.jpg",
    story: "A young boy and his loyal wolfdog must face the dangers of the Alaskan wilderness to survive.",
    downloadLink: "https://example.com/download/white-fang"
  },
  {
    title: "The Christmas Chronicles",
    rating: "7.0",
    backgroundImage: "https://c4.wallpaperflare.com/wallpaper/299/776/839/christmas-wallpaper-preview.jpg",
    story: "Two siblings accidentally crash Santa’s sleigh and must work together to save Christmas.",
    downloadLink: "https://example.com/download/christmas-chronicles"
  },
  {
    title: "Klaus",
    rating: "8.2",
    backgroundImage: "https://c4.wallpaperflare.com/wallpaper/384/491/1001/klaus-movie-wallpaper-preview.jpg",
    story: "A young postman forms an unlikely friendship with a reclusive toymaker, changing the fate of their town.",
    downloadLink: "https://example.com/download/klaus"
  },
  {
    title: "I Lost My Body",
    rating: "7.6",
    backgroundImage: "https://c4.wallpaperflare.com/wallpaper/117/779/927/i-lost-my-body-wallpaper-preview.jpg",
    story: "A severed hand embarks on a journey across Paris to reunite with its owner.",
    downloadLink: "https://example.com/download/i-lost-my-body"
  },
  {
    title: "The Willoughbys",
    rating: "6.4",
    backgroundImage: "https://c4.wallpaperflare.com/wallpaper/821/283/732/the-willoughbys-movie-wallpaper-preview.jpg",
    story: "Four children invent a dangerous plan to send their neglectful parents on vacation so they can experience true family love.",
    downloadLink: "https://example.com/download/the-willoughbys"
  },
  {
    title: "Over the Moon",
    rating: "6.3",
    backgroundImage: "https://wallpapercave.com/wp/wp6249468.jpg",
    story: "In this animated musical, a girl builds a rocket ship and blasts off, hoping to meet a mythical moon goddess.",
    downloadLink: "https://example.com/download/over-the-moon"
  },
  {
    title: "A Shaun the Sheep Movie: Farmageddon",
    rating: "6.8",
    backgroundImage: "https://c4.wallpaperflare.com/wallpaper/767/312/370/shaun-the-sheep-movie-farmageddon-wallpaper-preview.jpg",
    story: "Shaun and his flock try to help a friendly alien named Lu-La escape government agents and return home.",
    downloadLink: "https://example.com/download/shaun-the-sheep-farmageddon"
  },
  {
    title: "The Mitchells vs. the Machines",
    rating: "7.7",
    backgroundImage: "https://c4.wallpaperflare.com/wallpaper/626/115/926/the-mitchells-vs-the-machines-wallpaper-preview.jpg",
    story: "A quirky family fights to save the world from a robot apocalypse during a road trip across the country.",
    downloadLink: "https://example.com/download/mitchells-vs-machines"
  },
  {
    title: "America: The Motion Picture",
    rating: "5.7",
    backgroundImage: "https://c4.wallpaperflare.com/wallpaper/681/558/973/america-the-motion-picture-hd-wallpaper-preview.jpg",
    story: "A raunchy animated take on American history where George Washington battles evil forces during the Revolutionary War.",
    downloadLink: "https://example.com/download/america-motion-picture"
  },
  {
    title: "The Loud House Movie",
    rating: "6.0",
    backgroundImage: "https://c4.wallpaperflare.com/wallpaper/624/435/350/the-loud-house-movie-wallpaper-preview.jpg",
    story: "The Loud family visits Scotland where they discover they have royal blood, and embark on a mission to save the throne.",
    downloadLink: "https://example.com/download/loud-house-movie"
  },
  {
    title: "Vivo",
    rating: "6.8",
    backgroundImage: "https://c4.wallpaperflare.com/wallpaper/193/510/678/vivo-movie-wallpaper-preview.jpg",
    story: "A kinkajou must deliver a love song from his late owner to the famous singer who inspired him.",
    downloadLink: "https://example.com/download/vivo"
  },
  {
    title: "The Addams Family 2",
    rating: "5.3",
    backgroundImage: "https://c4.wallpaperflare.com/wallpaper/380/207/951/addams-family-2-movie-wallpaper-preview.jpg",
    story: "The Addams family embarks on a road trip that reveals their quirkiest secrets and brings them closer than ever.",
    downloadLink: "https://example.com/download/addams-family-2"
  },
  {
    title: "Back to the Outback",
    rating: "6.6",
    backgroundImage: "https://c4.wallpaperflare.com/wallpaper/597/672/827/back-to-the-outback-movie-wallpaper-preview.jpg",
    story: "A group of Australia’s most dangerous animals embarks on an adventure to escape the zoo and return to the wild.",
    downloadLink: "https://example.com/download/back-to-the-outback"
  },
  {
    title: "The Sea Beast",
    rating: "7.1",
    backgroundImage: "https://c4.wallpaperflare.com/wallpaper/612/348/526/the-sea-beast-wallpaper-preview.jpg",
    story: "A young girl stows away on a legendary sea monster hunter’s ship, and together they challenge the beasts they hunt.",
    downloadLink: "https://example.com/download/sea-beast"
  },
  {
    title: "Lyle, Lyle, Crocodile",
    rating: "6.1",
    backgroundImage: "https://c4.wallpaperflare.com/wallpaper/645/320/588/lyle-lyle-crocodile-movie-wallpaper-preview.jpg",
    story: "A young boy befriends a singing crocodile who helps him embrace his true self in New York City.",
    downloadLink: "https://example.com/download/lyle-lyle-crocodile"
  },
  {
    title: "Guillermo del Toro's Pinocchio",
    rating: "8.0",
    backgroundImage: "https://c4.wallpaperflare.com/wallpaper/431/548/237/pinocchio-2022-movie-wallpaper-preview.jpg",
    story: "Guillermo del Toro's reimagining of the classic tale of Pinocchio, exploring themes of life, death, and the pursuit of happiness.",
    downloadLink: "https://example.com/download/pinocchio-2022"
  },
  {
    title: "Entergalactic",
    rating: "7.0",
    backgroundImage: "https://c4.wallpaperflare.com/wallpaper/689/97/395/entergalactic-movie-wallpaper-preview.jpg",
    story: "A young man’s journey through love, art, and self-discovery as he navigates relationships in the heart of New York City.",
    downloadLink: "https://example.com/download/entergalactic"
  },
  {
    title: "The Magician's Elephant",
    rating: "6.9",
    backgroundImage: "https://c4.wallpaperflare.com/wallpaper/676/872/732/magicians-elephant-movie-wallpaper-preview.jpg",
    story: "A young boy embarks on a quest to find a magical elephant, hoping to reunite with his lost sister.",
    downloadLink: "https://example.com/download/magicians-elephant"
  },
  {
    title: "Nimona",
    rating: "7.5",
    backgroundImage: "https://c4.wallpaperflare.com/wallpaper/118/891/244/nimona-movie-wallpaper-preview.jpg",
    story: "A shapeshifter and a villainous scientist work together to wreak havoc, exploring themes of identity and friendship.",
    downloadLink: "https://example.com/download/nimona"
  }
];

export default netflixMovies;
