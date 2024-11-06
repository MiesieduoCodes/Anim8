const cards = [
  {
    title: "Antz (1998)",
    rating: 6.5,
    backgroundImage: "url('https://wallpapercave.com/wp/wp9988538.jpg')",
    story: "A neurotic worker ant in a totalitarian society tries to win the affection of the princess he loves.",
    downloadLink: "https://example.com/movies/antz.mp4"
  },
  {
    title: "The Prince of Egypt (1998)",
    rating: 7.1,
    backgroundImage: "url('https://c4.wallpaperflare.com/wallpaper/660/641/103/movie-the-prince-of-egypt-wallpaper-preview.jpg')",
    story: "An Egyptian prince learns of his identity as a Hebrew and his destiny to become the chosen deliverer of his people.",
    downloadLink: "https://example.com/movies/the-prince-of-egypt.mp4"
  },
  {
    title: "The Road to El Dorado (2000)",
    rating: 7.0,
    backgroundImage: "url('https://images8.alphacoders.com/824/thumb-1920-824926.jpg')",
    story: "Two swindlers get their hands on a map to the fabled city of gold, El Dorado.",
    downloadLink: "https://example.com/movies/the-road-to-el-dorado.mp4"
  },
  {
    title: "Chicken Run (2000)",
    rating: 6.9,
    backgroundImage: "url('https://wallpapercave.com/wp/wp7820489.jpg')",
    story: "When a cockerel flies into a chicken farm, the chickens see him as an opportunity to escape their evil owners.",
    downloadLink: "https://example.com/movies/chicken-run.mp4"
  },
  {
    title: "Shrek (2001)",
    rating: 7.9,
    backgroundImage: "url('https://images.alphacoders.com/500/thumbbig-500304.webp')",
    story: "A grumpy ogre must go on a quest to rescue a princess for a lord in order to get his swamp back.",
    downloadLink: "https://example.com/movies/shrek.mp4"
  },
  {
    title: "Spirit: Stallion of the Cimarron (2002)",
    rating: 7.0,
    backgroundImage: "url('https://images3.alphacoders.com/121/thumb-440-1217984.webp')",
    story: "A wild stallion is captured by humans but refuses to lose hope in his struggle for freedom.",
    downloadLink: "https://example.com/movies/spirit-stallion-of-the-cimarron.mp4"
  },
  {
    title: "Sinbad: Legend of the Seven Seas (2003)",
    rating: 6.7,
    backgroundImage: "url('https://wallpapercave.com/dwp1x/wp12683867.jpg')",
    story: "The sailor Sinbad must retrieve the Book of Peace from the goddess Eris to save his friend Prince Proteus.",
    downloadLink: "https://example.com/movies/sinbad-legend-of-the-seven-seas.mp4"
  },
  {
    title: "Shrek 2 (2004)",
    rating: 7.9,
    backgroundImage: "url('https://wallpapercave.com/dwp1x/712YYNC.jpg')",
    story: "Shrek and Fiona visit her parents in the Kingdom of Far Far Away, but things don't go as planned.",
    downloadLink: "https://example.com/movies/shrek-2.mp4"
  },
  {
    title: "Shark Tale (2004)",
    rating: 6.0,
    backgroundImage: "url('https://wallpapercave.com/wp/wp7287198.jpg')",
    story: "A small fish takes advantage of the accidental death of a shark to gain fame and fortune.",
    downloadLink: "https://example.com/movies/shark-tale.mp4"
  },
  {
    title: "Madagascar (2005)",
    rating: 7.0,
    backgroundImage: "url('https://wallpapercave.com/dwp1x/wp14486446.jpg')",
    story: "A group of zoo animals end up in the wilds of Madagascar and must adapt to their new surroundings.",
    downloadLink: "https://example.com/movies/madagascar.mp4"
  },
  {
    title: "Wallace & Gromit: The Curse of the Were-Rabbit (2005)",
    rating: 7.6,
    backgroundImage: "url('https://resizing.flixster.com/4dcpjaQ10yLmbP1qyyHtU6b1JtY=/1100x618/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p36347_i_h8_ad.jpg')",
    story: "Wallace and Gromit investigate garden sabotage in their village, which leads to a giant vegetable competition.",
    downloadLink: "https://example.com/movies/wallace-and-gromit-the-curse-of-the-were-rabbit.mp4"
  },
  {
    title: "Over the Hedge (2006)",
    rating: 6.7,
    backgroundImage: "url('https://wallpapercave.com/wp/wp7453203.jpg')",
    story: "A raccoon convinces a group of forest animals to invade a suburban sprawl to repay a debt of food.",
    downloadLink: "https://example.com/movies/over-the-hedge.mp4"
  },
  {
    title: "Flushed Away (2006)",
    rating: 7.0,
    backgroundImage: "url('https://wallpapers.com/images/featured/flushed-away-4b5su2wq1fuwh5z5.webp')",
    story: "A pampered mouse ends up in the sewers of London, where he has to adapt to a new way of life.",
    downloadLink: "https://example.com/movies/flushed-away.mp4"
  },
  {
    title: "Shrek the Third (2007)",
    rating: 6.9,
    backgroundImage: "url('https://wallpapercave.com/wp/wp11162755.jpg')",
    story: "Shrek recruits his friends to install a rebellious prince as the new king of Far Far Away.",
    downloadLink: "https://example.com/movies/shrek-the-third.mp4"
  },
  {
    title: "Bee Movie (2007)",
    rating: 6.1,
    backgroundImage: "url('https://wallpapercave.com/wp/wp3729394.jpg')",
    story: "A bee sues humanity for stealing honey after discovering the truth during a trip outside the hive.",
    downloadLink: "https://example.com/movies/bee-movie.mp4"
  },
  {
    title: "Kung Fu Panda (2008)",
    rating: 8.0,
    backgroundImage: "url('https://wallpapercave.com/wp/wp14241047.jpg')",
    story: "An obese panda becomes the Dragon Warrior and must save China from the savage Tai Lung.",
    downloadLink: "https://example.com/movies/kung-fu-panda.mp4"
  },
  {
    title: "Madagascar: Escape 2 Africa (2008)",
    rating: 6.9,
    backgroundImage: "url('https://images5.alphacoders.com/732/thumb-1920-732524.jpg')",
    story: "The animals crash-land in Africa, where Alex discovers his royal heritage as the prince of a lion pride.",
    downloadLink: "https://example.com/movies/madagascar-escape-2-africa.mp4"
  },
  {
    title: "Monsters vs. Aliens (2009)",
    rating: 6.4,
    backgroundImage: "url('https://picfiles.alphacoders.com/111/thumb-1920-111141.jpg')",
    story: "A woman transformed into a giant must join a team of monsters to save Earth from an alien invasion.",
    downloadLink: "https://example.com/movies/monsters-vs-aliens.mp4"
  }
];

export default cards;