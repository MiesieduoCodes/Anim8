const netflixMovies = [
  {
    title: "Klaus",
    rating: "8.2",
    backgroundImage: "/path/to/klaus-poster.jpg",
    story: "A selfish postman and a reclusive toymaker form an unlikely friendship, delivering joy to a cold, dark town.",
    downloadLink: "https://example.com/download/klaus"
  },
  {
    title: "The Willoughbys",
    rating: "6.4",
    backgroundImage: "https://wallpapercave.com/wp/wp6249468.jpg",
    story: "Convinced they'd be better off raising themselves, the Willoughby children hatch a plan to send their selfish parents on vacation.",
    downloadLink: "https://example.com/download/willoughbys"
  },
  {
    title: "Over the Moon",
    rating: "6.3",
    backgroundImage: "https://wallpapercave.com/wp/wp6249468.jpg",
    story: "In this animated musical, a girl builds a rocket ship and blasts off, hoping to meet a mythical moon goddess.",
    downloadLink: "https://example.com/download/over-the-moon"
  },
  {
    title: "Soul",
    rating: "8.0",
    backgroundImage: "https://wallpapercave.com/wp/wp8207832.jpg",
    story: "A middle-school band teacher's life takes a new direction when his soul is separated from his body after a near-death experience.",
    downloadLink: "https://example.com/download/soul"
  },
  {
    title: "The Mitchells vs. the Machines",
    rating: "7.7",
    backgroundImage: "https://wallpapercave.com/wp/wp8995076.jpg",
    story: "A quirky, dysfunctional family's road trip is upended when they find themselves in the middle of the robot apocalypse.",
    downloadLink: "https://example.com/download/mitchells-vs-machines"
  },
  {
    title: "Wish Dragon",
    rating: "7.2",
    backgroundImage: "https://wallpapercave.com/wp/wp9347563.jpg",
    story: "A young man and a wish-granting dragon embark on an adventure to show the boy the beauty of life and human connection.",
    downloadLink: "https://example.com/download/wish-dragon"
  },
  {
    title: "Extinct",
    rating: "5.4",
    backgroundImage: "https://images7.alphacoders.com/117/thumb-1920-1172674.jpg",
    story: "Two Flummels, small, donut-shaped animals, accidentally time-travel to the future and learn that their species has become extinct.",
    downloadLink: "https://example.com/download/extinct"
  },
  {
    title: "Vivo",
    rating: "6.7",
    backgroundImage: "https://wallpapercave.com/wp/wp9624137.jpg",
    story: "Vivo, a music-loving kinkajou, embarks on the journey of a lifetime to deliver a song to a beloved performer.",
    downloadLink: "https://example.com/download/vivo"
  },
  {
    title: "My Little Pony: A New Generation",
    rating: "6.8",
    backgroundImage: "https://wallpapercave.com/wp/wp9932154.jpg",
    story: "Equestria's divided pony races must come together to restore harmony in this new animated adventure.",
    downloadLink: "https://example.com/download/my-little-pony"
  },
  {
    title: "The Sea Beast",
    rating: "7.1",
    backgroundImage: "https://images7.alphacoders.com/132/thumb-1920-1321564.jpeg",
    story: "A young girl stows away on the ship of a legendary sea monster hunter, embarking on a grand adventure.",
    downloadLink: "https://example.com/download/sea-beast"
  },
  {
    title: "Puss in Boots: The Last Wish",
    rating: "7.8",
    backgroundImage: "https://images4.alphacoders.com/129/thumb-1920-1297183.jpg",
    story: "Puss in Boots discovers that his passion for adventure has taken its toll: he has burned through eight of his nine lives.",
    downloadLink: "https://example.com/download/puss-in-boots"
  },
  {
    title: "Apollo 10½: A Space Age Childhood",
    rating: "7.3",
    backgroundImage: "https://media.themoviedb.org/t/p/w500_and_h282_face/3yAoVcQR1i7Zgm7yNxy58i3RzCi.jpg",
    story: "A man narrates stories of his life as a 10-year-old boy in 1969 Houston, weaving together tales of nostalgia and space adventure.",
    downloadLink: "https://example.com/download/apollo-10-1-2"
  },
  {
    title: "Nimona",
    rating: "7.4",
    backgroundImage: "https://wallpapercave.com/wp/wp12502250.jpg",
    story: "A shapeshifting teen joins forces with a knight to fight an oppressive regime.",
    downloadLink: "https://example.com/download/nimona"
  },
  {
    title: "The Magician's Elephant",
    rating: "6.8",
    backgroundImage: "https://www.motionpictures.org/wp-content/uploads/2023/03/The_Magicians_Elephant_00_27_38_07.jpg",
    story: "An orphan boy is told by a fortune teller that an elephant will lead him to his long-lost sister.",
    downloadLink: "https://example.com/download/magicians-elephant"
  },
  {
    title: "The Amazing Maurice",
    rating: "6.3",
    backgroundImage: "https://images7.alphacoders.com/132/thumb-1920-1321332.jpeg",
    story: "Maurice, a streetwise cat, leads a band of rats to create a money-making scheme by pretending to solve a town’s rat problem.",
    downloadLink: "https://example.com/download/amazing-maurice"
  },
  {
    title: "The Boss Baby: Family Business",
    rating: "5.9",
    backgroundImage: "https://wallpapercave.com/wp/wp5346867.jpg",
    story: "The Templeton brothers have become adults and drifted apart, but a new boss baby brings them together.",
    downloadLink: "https://example.com/download/boss-baby-family-business"
  },
  {
    title: "Naya’s Dream",
    rating: "6.1",
    backgroundImage: "/path/to/nayas-dream-poster.jpg",
    story: "A magical dreamworld opens up for a young girl trying to protect her home and family.",
    downloadLink: "https://example.com/download/nayas-dream"
  },
  {
    title: "Raya and the Last Dragon",
    rating: "7.3",
    backgroundImage: "https://c4.wallpaperflare.com/wallpaper/134/1023771/raya-and-the-last-dragon-animated-movies-raya-raya-and-the-last-dragon-movies-hd-wallpaper-preview.jpg",
    story: "A young warrior sets out to find the last dragon and save her people from an ancient evil.",
    downloadLink: "https://example.com/download/raya-last-dragon"
  },
  {
    title: "Luck",
    rating: "6.3",
    backgroundImage: "https://images8.alphacoders.com/125/thumb-1920-1254691.jpg",
    story: "An unlucky girl discovers the world's luckiest place and teams up with magical creatures to turn her fortune around.",
    downloadLink: "https://example.com/download/luck"
  },
  {
    title: "Back to the Outback",
    rating: "6.5",
    backgroundImage: "https://wallpapercave.com/wp/wp10431048.jpg",
    story: "Tired of being locked in a reptile house, a group of Australia's deadliest creatures plot their escape to the Outback.",
    downloadLink: "https://example.com/download/back-to-outback"
  }
];

export default netflixMovies;
