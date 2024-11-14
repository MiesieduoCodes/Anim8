const cards = [
  {
  title: "Chicken Run",
  rating: 6.9,
  backgroundImage: "https://wallpapers.com/images/high/rocky-and-ginger-in-the-chicken-run-movie-5fjh6ccbil5hlg5a.webp",
  story: "When a cockerel flies into a chicken farm, the chickens see him as an opportunity to escape their evil owners.",
  downloadLink: "https://example.com/movies/chicken-run.mp4"
  },
  {
  title: "Shrek",
  rating: 7.9,
  backgroundImage: "https://wallpapers.com/images/high/funny-shrek-kcn8nv60431sny2u.webp",
  story: "A grumpy ogre must go on a quest to rescue a princess for a lord in order to get his swamp back.",
  downloadLink: "https://example.com/movies/shrek.mp4"
  },
  {
  title: "Shrek 2",
  rating: 7.9,
  backgroundImage: "https://wallpapers.com/images/high/fiona-donkey-and-shrek-2-posing-81hlhxmxyi6yh368.webp",
  story: "Shrek and Fiona visit her parents in the Kingdom of Far Far Away, but things don't go as planned.",
  downloadLink: "https://example.com/movies/shrek-2.mp4"
  },
  {
  title: "Shrek the Third",
  rating: 6.9,
  backgroundImage: "https://wallpapers.com/images/high/shrek-the-third-happy-while-hugging-friends-c17ao3rg35u7ow8n.webp",
  story: "Shrek recruits his friends to install a rebellious prince as the new king of Far Far Away.",
  downloadLink: "https://example.com/movies/shrek-the-third.mp4"
  },
  {
  title: "Shrek Forever After",
  rating: 6.3,
  backgroundImage: "https://wallpapers.com/images/high/shrek-forever-after-shrek-talking-with-rumpelstiltskin-9bo1gbu7rko9e4gv.webp",
  story: "Shrek makes a pact with Rumpelstiltskin to get his old life back, but ends up in an alternate reality where things are not as they seem.",
  downloadLink: "https://example.com/movies/shrek-forever-after.mp4"
  },
  {
  title: "Kung Fu Panda",
  rating: 8.0,
  backgroundImage: "https://wallpapers.com/images/high/kung-fu-panda-2-monkey-1xbrjbc3k15pmoc1.webp",
  story: "An obese panda becomes the Dragon Warrior and must save China from the savage Tai Lung.",
  downloadLink: "https://example.com/movies/kung-fu-panda.mp4"
  },
  {
  title: "Kung Fu Panda 2",
  rating: 7.3,
  backgroundImage: "https://wallpapers.com/images/high/kung-fu-panda-2-chopsticks-dimsum-vwjyoqmzsamhhsat.webp",
  story: "Po must face a new villain, Lord Shen, and uncover his past to save the valley and China.",
  downloadLink: "https://example.com/movies/kung-fu-panda-2.mp4"
  },
  {
  title: "Kung Fu Panda 3",
  rating: 7.1,
  backgroundImage: "https://wallpapers.com/images/high/surviving-pandas-from-kung-fu-panda-3-v7yvpisosxqop7x8.webp",
  story: "Po reunites with his long-lost biological father and trains a village of pandas to defeat the evil Kai.",
  downloadLink: "https://example.com/movies/kung-fu-panda-3.mp4"
  },
  {
  title: "Kung Fu Panda 4",
  rating: 7.5,
  backgroundImage: "https://wallpapers.com/images/high/a-cartoon-character-of-a-panda-3y58t3bd9ibp29o6-2.webp",
  story: "Po faces new challenges as the Dragon Warrior, while working to keep the Valley of Peace safe from new threats.",
  downloadLink: "https://example.com/movies/kung-fu-panda-4.mp4"
  },
  {
  title: "Shark Tale",
  rating: 6.0,
  backgroundImage: "https://wallpapercave.com/wp/wp7287198.jpg",
  story: "A small fish takes advantage of the accidental death of a shark to gain fame and fortune.",
  downloadLink: "https://example.com/movies/shark-tale.mp4"
  },
  {
  title: "Madagascar",
  rating: 7.0,
  backgroundImage: "https://wallpapercave.com/dwp1x/wp14486446.jpg",
  story: "A group of zoo animals end up in the wilds of Madagascar and must adapt to their new surroundings.",
  downloadLink: "https://example.com/movies/madagascar.mp4"
  },
  {
  title: "Madagascar: Escape 2 Africa",
  rating: 6.6,
  backgroundImage: "https://wallpapers.com/images/high/cartoons-in-madagascar-escape-2-africa-izj1z41a3vjuyenh.webp",
  story: "The zoo animals attempt to return to New York but crash-land in Africa, where Alex the lion meets his family and the group faces new adventures.",
  downloadLink: "https://example.com/movies/madagascar-escape-2-africa.mp4"
  },
  {
  title: "Madagascar 3: Europe's Most Wanted",
  rating: 6.8,
  backgroundImage: "https://wallpapers.com/images/high/madagascar3-circus-performance-cast-3mn3jpcqld8lyydz.webp",
  story: "In an effort to return to New York, the gang joins a traveling circus in Europe, all while being pursued by a relentless animal control officer.",
  downloadLink: "https://example.com/movies/madagascar-3-europes-most-wanted.mp4"
  },
  {
  title: "Penguins of Madagascar",
  rating: 6.7,
  backgroundImage: "https://wallpapers.com/images/high/the-penguins-of-madagascar-in-action-ts1ncfivh6y52ch9.webp",
  story: "Skipper, Kowalski, Rico, and Private team up with an undercover organization to stop a villainous octopus from destroying the world.",
  downloadLink: "https://example.com/movies/penguins-of-madagascar.mp4"
  },
  {
  title: "Wallace & Gromit: The Curse of the Were-Rabbit",
  rating: 7.6,
  backgroundImage: "https://resizing.flixster.com/4dcpjaQ10yLmbP1qyyHtU6b1JtY=/1100x618/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p36347_i_h8_ad.jpg",
  story: "Wallace and Gromit investigate garden sabotage in their village, which leads to a giant vegetable competition.",
  downloadLink: "https://example.com/movies/wallace-and-gromit-the-curse-of-the-were-rabbit.mp4"
  },
  {
  title: "Over the Hedge",
  rating: 6.7,
  backgroundImage: "https://wallpapercave.com/wp/wp7453203.jpg",
  story: "A raccoon convinces a group of forest animals to invade a suburban sprawl to repay a debt of food.",
  downloadLink: "https://example.com/movies/over-the-hedge.mp4"
  },
  {
  title: "Flushed Away",
  rating: 7.0,
  backgroundImage: "https://wallpapers.com/images/featured/flushed-away-4b5su2wq1fuwh5z5.webp",
  story: "A pampered mouse ends up in the sewers of London, where he has to adapt to a new way of life.",
  downloadLink: "https://example.com/movies/flushed-away.mp4"
  }
  ];
  
  export default cards;