const netflixMovies = [
  {
    title: "Next Gen",
    rating: "6.6",
    backgroundImage: "https://infokids.com.au/wp-content/uploads/2021/06/6CB9998E-614B-4087-A64D-1790F016293E.jpeg",
    story: "A friendship between a rebellious girl and a top-secret robot develops as they fight a villainous tech mogul.",
    downloadLink: "https://example.com/download/next-gen"
  },
  {
    title: "White Fang",
    rating: "6.7",
    backgroundImage: "https://www.alternateending.com/wp-content/uploads/2019/12/p9b3SRVUWfxlBEOx5hH9saoswg1.jpg",
    story: "A young boy and his loyal wolfdog must face the dangers of the Alaskan wilderness to survive.",
    downloadLink: "https://example.com/download/white-fang"
  },
  {
    title: "Klaus",
    rating: "8.2",
    backgroundImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdMSqk-z9wwV4H_xlBycxUfAcNiphxIuy_2Q&s",
    story: "A young postman forms an unlikely friendship with a reclusive toymaker, changing the fate of their town.",
    downloadLink: "https://example.com/download/klaus"
  },
  {
    title: "I Lost My Body",
    rating: "7.6",
    backgroundImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB0tl3TzHZOSGf3szX1z0kOiAfzmsBI9AgVA&s",
    story: "A severed hand embarks on a journey across Paris to reunite with its owner.",
    downloadLink: "https://example.com/download/i-lost-my-body"
  },
  {
    title: "The Willoughbys",
    rating: "6.4",
    backgroundImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLnB4qrRZ-0DuhPt80lV74cPUa9FAr7j3iMw&s",
    story: "Four children invent a dangerous plan to send their neglectful parents on vacation so they can experience true family love.",
    downloadLink: "https://example.com/download/the-willoughbys"
  },
  {
    title: "Over the Moon",
    rating: "6.3",
    backgroundImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToTJ_6bLdx2VXYvOb61bc9F0fVxXrQwYsRBA&s",
    story: "In this animated musical, a girl builds a rocket ship and blasts off, hoping to meet a mythical moon goddess.",
    downloadLink: "https://example.com/download/over-the-moon"
  },
  {
    title: "A Shaun the Sheep Movie: Farmageddon",
    rating: "6.8",
    backgroundImage: "https://variety.com/wp-content/uploads/2019/09/shaun-sheep-2.jpg",
    story: "Shaun and his flock try to help a friendly alien named Lu-La escape government agents and return home.",
    downloadLink: "https://example.com/download/shaun-the-sheep-farmageddon"
  },
  {
    title: "The Mitchells vs. the Machines",
    rating: "7.7",
    backgroundImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa0dD50n8KVP_oaKn3d6bwASuDkwF3cyBcPw&s",
    story: "A quirky family fights to save the world from a robot apocalypse during a road trip across the country.",
    downloadLink: "https://example.com/download/mitchells-vs-machines"
  },

  {
    title: "The Loud House Movie",
    rating: "6.0",
    backgroundImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPGwFQr580jAl4PqpaccjFppZffaQbbgAPoA&s",
    story: "The Loud family visits Scotland where they discover they have royal blood, and embark on a mission to save the throne.",
    downloadLink: "https://example.com/download/loud-house-movie"
  },
  {
    title: "Vivo",
    rating: "6.8",
    backgroundImage: "https://wallpapercat.com/w/full/4/7/2/1994153-2048x1152-desktop-hd-vivo-movie-wallpaper.jpg",
    story: "A kinkajou must deliver a love song from his late owner to the famous singer who inspired him.",
    downloadLink: "https://example.com/download/vivo"
  },
//   {
//     title: "The Addams Family",
//     rating: "5.8",
//     backgroundImage: "https://i.guim.co.uk/img/media/5d671028827e5034d86ae13555bfcad45a4063e1/888_584_2803_1683/master/2803.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=07d8dcff2a5fe8283c19f278cd468f8c",
//     story: "The Addams family faces new challenges when they move to a suburban neighborhood, where their unusual nature stands out among the locals.",
//     downloadLink: "https://example.com/download/addams-family-1"
// },
//   {
//     title: "The Addams Family 2",
//     rating: "5.3",
//     backgroundImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTafchWSZjxTVZopKhI1HZVPT7Jf45o8Swneg&s",
//     story: "The Addams family embarks on a road trip that reveals their quirkiest secrets and brings them closer than ever.",
//     downloadLink: "https://example.com/download/addams-family-2"
//   },
  {
    title: "Back to the Outback",
    rating: "6.6",
    backgroundImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvO7VjNMI5xCDvH_BMc4VGeLPsan8sBaY9wQ&s",
    story: "A group of Australia’s most dangerous animals embarks on an adventure to escape the zoo and return to the wild.",
    downloadLink: "https://example.com/download/back-to-the-outback"
  },
  {
    title: "The Sea Beast",
    rating: "7.1",
    backgroundImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTWzDaoEVtiShqundLRRzA3kklyBuEM6uiHQ&s",
    story: "A young girl stows away on a legendary sea monster hunter’s ship, and together they challenge the beasts they hunt.",
    downloadLink: "https://example.com/download/sea-beast"
  },
  {
    title: "Guillermo del Toro's Pinocchio",
    rating: "8.0",
    backgroundImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmOF0NtL8fLkAi7tPW1f3Zi1aQKW2zbVJtKw&s",
    story: "Guillermo del Toro's reimagining of the classic tale of Pinocchio, exploring themes of life, death, and the pursuit of happiness.",
    downloadLink: "https://example.com/download/pinocchio-2022"
  },
  {
    title: "Entergalactic",
    rating: "7.0",
    backgroundImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo49GM-yIYgmHj1dXEauANxa143IUnuFrb1A&s",
    story: "A young man’s journey through love, art, and self-discovery as he navigates relationships in the heart of New York City.",
    downloadLink: "https://example.com/download/entergalactic"
  },
  {
    title: "The Magician's Elephant",
    rating: "6.9",
    backgroundImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8VSzgAljhAzjZ7mPEV-cksw2hjM8syesf3g&s",
    story: "A young boy embarks on a quest to find a magical elephant, hoping to reunite with his lost sister.",
    downloadLink: "https://example.com/download/magicians-elephant"
  },
  {
    title: "Nimona",
    rating: "7.5",
    backgroundImage: "https://variety.com/wp-content/uploads/2023/06/Collage-Maker-15-Jun-2023-08-06-PM-4070.jpg?w=1000&h=563&crop=1",
    story: "A shapeshifter and a villainous scientist work together to wreak havoc, exploring themes of identity and friendship.",
    downloadLink: "https://example.com/download/nimona"
  }
];

export default netflixMovies;
