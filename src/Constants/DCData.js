const cards = [
  {
    title: "Batman: Mask of the Phantasm",
    rating: 7.7,
    backgroundImage: "url('/src/Assets/ToonImages/DC/batman_mask_of_the_phantasm.jpg')",
    story: "The Dark Knight must contend with the mysterious figure of the Phantasm while investigating a series of murders.",
    downloadLink: "https://example.com/movies/batman-mask-of-the-phantasm.mp4"
  },
  {
    title: "Batman & Mr. Freeze: SubZero",
    rating: 7.2,
    backgroundImage: "url('/src/Assets/ToonImages/DC/batman_and_mr_freeze.jpg')",
    story: "Batman must confront Mr. Freeze to save Batgirl, who has been kidnapped.",
    downloadLink: "https://example.com/movies/batman-and-mr-freeze-subzero.mp4"
  },
  {
    title: "Batman: Mystery of the Batwoman",
    rating: 7.0,
    backgroundImage: "url('/src/Assets/ToonImages/DC/batman_mystery_of_the_batwoman.jpg')",
    story: "Batman investigates the identity of a mysterious new hero, Batwoman, who is targeting Gotham's crime lords.",
    downloadLink: "https://example.com/movies/batman-mystery-of-the-batwoman.mp4"
  },
  {
    title: "Batman: Gotham Knight",
    rating: 7.0,
    backgroundImage: "url('/src/Assets/ToonImages/DC/batman_gotham_knight.jpg')",
    story: "A collection of animated short films that feature the adventures of Batman in Gotham City.",
    downloadLink: "https://example.com/movies/batman-gotham-knight.mp4"
  },
  {
    title: "Wonder Woman",
    rating: 7.4,
    backgroundImage: "url('/src/Assets/ToonImages/DC/wonder_woman.jpg')",
    story: "When an American pilot crashes on her sheltered island, Wonder Woman leaves home to restore peace.",
    downloadLink: "https://example.com/movies/wonder-woman.mp4"
  },
  {
    title: "Green Lantern: First Flight",
    rating: 7.0,
    backgroundImage: "url('/src/Assets/ToonImages/DC/green_lantern_first_flight.jpg')",
    story: "A test pilot is selected to become the first human Green Lantern.",
    downloadLink: "https://example.com/movies/green-lantern-first-flight.mp4"
  },
  {
    title: "Superman/Batman: Public Enemies",
    rating: 7.0,
    backgroundImage: "url('/src/Assets/ToonImages/DC/superman_batman_public_enemies.jpg')",
    story: "Superman and Batman must team up to clear their names when they are framed for a crime.",
    downloadLink: "https://example.com/movies/superman-batman-public-enemies.mp4"
  },
  {
    title: "Batman: Under the Red Hood",
    rating: 8.0,
    backgroundImage: "url('/src/Assets/ToonImages/DC/batman_under_the_red_hood.jpg')",
    story: "Batman faces a mysterious new vigilante known as Red Hood, who has his own methods of justice.",
    downloadLink: "https://example.com/movies/batman-under-the-red-hood.mp4"
  },
  {
    title: "Superman/Batman: Apocalypse",
    rating: 7.3,
    backgroundImage: "url('/src/Assets/ToonImages/DC/superman_batman_apocalypse.jpg')",
    story: "Superman and Batman must team up to protect the powerful Wonder Girl from Darkseid.",
    downloadLink: "https://example.com/movies/superman-batman-apocalypse.mp4"
  },
  {
    title: "All-Star Superman",
    rating: 7.5,
    backgroundImage: "url('/src/Assets/ToonImages/DC/all_star_superman.jpg')",
    story: "Superman embarks on a journey to complete his final tasks before facing his ultimate fate.",
    downloadLink: "https://example.com/movies/all-star-superman.mp4"
  },
  {
    title: "Green Lantern: Emerald Knights",
    rating: 7.2,
    backgroundImage: "url('/src/Assets/ToonImages/DC/green_lantern_emerald_knights.jpg')",
    story: "A group of Green Lanterns recounts their stories to a new recruit.",
    downloadLink: "https://example.com/movies/green-lantern-emerald-knights.mp4"
  },
  {
    title: "Batman: Year One",
    rating: 7.4,
    backgroundImage: "url('/src/Assets/ToonImages/DC/batman_year_one.jpg')",
    story: "Batman begins his fight against crime in Gotham City.",
    downloadLink: "https://example.com/movies/batman-year-one.mp4"
  },
  {
    title: "Justice League: Doom",
    rating: 7.4,
    backgroundImage: "url('/src/Assets/ToonImages/DC/justice_league_doom.jpg')",
    story: "Vandal Savage obtains the Justice League's files and uses them to defeat them.",
    downloadLink: "https://example.com/movies/justice-league-doom.mp4"
  },
  {
    title: "Superman vs. The Elite",
    rating: 7.0,
    backgroundImage: "url('/src/Assets/ToonImages/DC/superman_vs_the_elite.jpg')",
    story: "Superman faces off against a group of super-powered individuals who operate outside the law.",
    downloadLink: "https://example.com/movies/superman-vs-the-elite.mp4"
  },
  {
    title: "Batman: The Dark Knight Returns, Part 1",
    rating: 8.0,
    backgroundImage: "url('/src/Assets/ToonImages/DC/batman_the_dark_knight_returns_part_1.jpg')",
    story: "Batman comes out of retirement to face a new breed of criminals.",
    downloadLink: "https://example.com/movies/batman-the-dark-knight-returns-part-1.mp4"
  },
  {
    title: "Batman: The Dark Knight Returns, Part 2",
    rating: 8.4,
    backgroundImage: "url('/src/Assets/ToonImages/DC/batman_the_dark_knight_returns_part_2.jpg')",
    story: "Batman faces off against Superman as tensions rise between heroes.",
    downloadLink: "https://example.com/movies/batman-the-dark-knight-returns-part-2.mp4"
  },
  {
    title: "Superman: Unbound",
    rating: 7.0,
    backgroundImage: "url('/src/Assets/ToonImages/DC/superman_unbound.jpg')",
    story: "Superman must save Earth from the threat of Brainiac.",
    downloadLink: "https://example.com/movies/superman-unbound.mp4"
  },
  {
    title: "Justice League: The Flashpoint Paradox",
    rating: 8.0,
    backgroundImage: "url('/src/Assets/ToonImages/DC/justice_league_flashpoint_paradox.jpg')",
    story: "The Flash must navigate an alternate timeline to save the world.",
    downloadLink: "https://example.com/movies/justice-league-flashpoint-paradox.mp4"
  },
  {
    title: "Son of Batman",
    rating: 7.1,
    backgroundImage: "url('/src/Assets/ToonImages/DC/son_of_batman.jpg')",
    story: "Batman discovers he has a son, Damian, who is raised by the League of Assassins.",
    downloadLink: "https://example.com/movies/son-of-batman.mp4"
  },
  {
    title: "Batman: Assault on Arkham",
    rating: 7.5,
    backgroundImage: "url('/src/Assets/ToonImages/DC/batman_assault_on_arkham.jpg')",
    story: "The Suicide Squad is sent to Arkham Asylum to retrieve a dangerous weapon.",
    downloadLink: "https://example.com/movies/batman-assault-on-arkham.mp4"
  },
  {
    title: "Justice League: Throne of Atlantis",
    rating: 7.0,
    backgroundImage: "url('/src/Assets/ToonImages/DC/justice_league_throne_of_atlantis.jpg')",
    story: "Aquaman must reclaim his throne and unite the Justice League against an Atlantean threat.",
    downloadLink: "https://example.com/movies/justice-league-throne-of-atlantis.mp4"
  },
  {
    title: "Batman vs. Robin",
    rating: 7.1,
    backgroundImage: "url('/src/Assets/ToonImages/DC/batman_vs_robin.jpg')",
    story: "Batman and his son, Damian, must confront a new enemy while dealing with their complicated relationship.",
    downloadLink: "https://example.com/movies/batman-vs-robin.mp4"
  },
  {
    title: "Batman: Bad Blood",
    rating: 7.0,
    backgroundImage: "url('/src/Assets/ToonImages/DC/batman_bad_blood.jpg')",
    story: "When Batman goes missing, his allies must find him while facing new threats.",
    downloadLink: "https://example.com/movies/batman-bad-blood.mp4"
  },
  {
    title: "Justice League vs. Teen Titans",
    rating: 7.0,
    backgroundImage: "url('/src/Assets/ToonImages/DC/justice_league_vs_teen_titans.jpg')",
    story: "The Teen Titans must team up with the Justice League to confront a demonic threat.",
    downloadLink: "https://example.com/movies/justice-league-vs-teen-titans.mp4"
  },
  {
    title: "Batman: The Killing Joke",
    rating: 7.0,
    backgroundImage: "url('/src/Assets/ToonImages/DC/batman_the_killing_joke.jpg')",
    story: "The Joker's origin story is revealed as he targets Batgirl.",
    downloadLink: "https://example.com/movies/batman-the-killing-joke.mp4"
  },
  {
    title: "Justice League Dark",
    rating: 7.0,
    backgroundImage: "url('/src/Assets/ToonImages/DC/justice_league_dark.jpg')",
    story: "A new threat leads to the formation of the Justice League Dark.",
    downloadLink: "https://example.com/movies/justice-league-dark.mp4"
  },
  {
    title: "Teen Titans: The Judas Contract",
    rating: 7.0,
    backgroundImage: "url('/src/Assets/ToonImages/DC/teen_titans_the_judas_contract.jpg')",
    story: "The Teen Titans face betrayal from within as a new villain emerges.",
    downloadLink: "https://example.com/movies/teen-titans-the-judas-contract.mp4"
  },
  {
    title: "Batman and Harley Quinn",
    rating: 6.5,
    backgroundImage: "url('/src/Assets/ToonImages/DC/batman_and_harley_quinn.jpg')",
    story: "Batman teams up with Harley Quinn to stop a dangerous new threat.",
    downloadLink: "https://example.com/movies/batman-and-harley-quinn.mp4"
  },
  {
    title: "Batman: Gotham by Gaslight",
    rating: 7.0,
    backgroundImage: "url('/src/Assets/ToonImages/DC/batman_gotham_by_gaslight.jpg')",
    story: "In a Victorian-era Gotham, Batman faces Jack the Ripper.",
    downloadLink: "https://example.com/movies/batman-gotham-by-gaslight.mp4"
  },
  {
    title: "Justice League: The Fatal Five",
    rating: 7.0,
    backgroundImage: "url('/src/Assets/ToonImages/DC/justice_league_the_fatal_five.jpg')",
    story: "The Justice League must stop a new threat from the future.",
    downloadLink: "https://example.com/movies/justice-league-the-fatal-five.mp4"
  },
  {
    title: "Superman: Red Son",
    rating: 7.0,
    backgroundImage: "url('/src/Assets/ToonImages/DC/superman_red_son.jpg')",
    story: "What if Superman landed in the Soviet Union instead of Kansas?",
    downloadLink: "https://example.com/movies/superman-red-son.mp4"
  }
];

export default cards;