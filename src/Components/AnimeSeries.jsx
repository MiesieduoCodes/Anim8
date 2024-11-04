import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import FloatingMusicButton from '../FloatingMusicButton';

const movies = [
  // Romance Genre
  {
    id: 1,
    title: 'Your Lie in April',
    genre: 'Romance',
    synopsis: 'A pianist rediscovers his passion for music and love through a violinist he meets.',
    backgroundImage: 'https://c4.wallpaperflare.com/wallpaper/264/75/737/anime-sunset-piano-clouds-wallpaper-preview.jpg',
    seasons: [{ id: 1, episodeCount: 22 }]
  },
  {
    id: 2,
    title: 'Toradora!',
    genre: 'Romance',
    synopsis: 'Two high school students form an unlikely friendship to help each other pursue their crushes.',
    backgroundImage: 'https://eyeforaneyepiece.wordpress.com/wp-content/uploads/2013/09/konachan-com-42979-aisaka_taiga-kawashima_ami-kitamura_yusaku-kushieda_minori-takasu_ryuuji-toradora.jpg?w=625&h=400',
    seasons: [{ id: 1, episodeCount: 25 }]
  },
  {
    id: 3,
    title: 'Kaguya-sama: Love Is War',
    genre: 'Romance',
    synopsis: 'A battle of wits and romance between two high school geniuses.',
    backgroundImage: 'https://thecambridgegeek.com/posts/2019/03/20190301-a.jpg',
    seasons: [
      { id: 1, episodeCount: 12 },
      { id: 2, episodeCount: 12 },
      { id: 3, episodeCount: 13 }
    ]
  },
  {
    id: 4,
    title: 'Horimiya',
    genre: 'Romance',
    synopsis: 'A sweet high school romance that reveals the unexpected sides of two classmates.',
    backgroundImage: 'https://i0.wp.com/beneaththetangles.com/wp-content/uploads/2023/07/horimiya-the-missing-pieces-ep-1c.png?resize=1400%2C400&ssl=1',
    seasons: [{ id: 1, episodeCount: 13 }]
  },
  {
    id: 5,
    title: 'Ao Haru Ride',
    genre: 'Romance',
    synopsis: 'A girl reunites with her first love and faces the changes time has brought them.',
    backgroundImage: 'https://faos.home.blog/wp-content/uploads/2020/10/ao-haru-ride-futaba-friends.jpg?w=1024',
    seasons: [{ id: 1, episodeCount: 12 }]
  },

  // Action Genre
  {
    id: 6,
    title: "Darwin's Game",
    genre: 'Action',
    synopsis: 'A high-stakes survival game in which players must fight or die.',
    backgroundImage: 'https://thespookyredhead.wordpress.com/wp-content/uploads/2022/02/darwins-game.jpg?w=1024',
    seasons: [{ id: 1, episodeCount: 11 }]
  },
  {
    id: 7,
    title: 'One Punch Man',
    genre: 'Action',
    synopsis: 'A hero who can defeat any opponent with a single punch searches for meaning.',
    backgroundImage: 'https://images.thedirect.com/media/article_full/one-punch-man-season-3-release.jpg?imgeng=/cmpr_60/w_auto',
    seasons: [
      { id: 1, episodeCount: 12 },
      { id: 2, episodeCount: 12 }
    ]
  },
  {
    id: 8,
    title: 'Mob Psycho 100',
    genre: 'Action',
    synopsis: 'A powerful psychic faces both supernatural and everyday challenges.',
    backgroundImage: 'https://i0.wp.com/anitrendz.net/news/wp-content/uploads/2022/10/mob-psycho-100-III-mob-and-dimple.jpg?resize=696%2C392&ssl=1',
    seasons: [
      { id: 1, episodeCount: 12 },
      { id: 2, episodeCount: 10 },
      { id: 3, episodeCount: 12 }
    ]
  },
  {
    id: 9,
    title: 'Fate/Zero',
    genre: 'Action',
    synopsis: 'Seven mages summon heroic spirits to fight in a war for the Holy Grail.',
    backgroundImage: 'https://images.squarespace-cdn.com/content/v1/52a28c62e4b0b9264e00c55a/1433095857903-JZCGB06DEUHLVEOP1063/upload.jpeg?format=1500w',
    seasons: [
      { id: 1, episodeCount: 13 },
      { id: 2, episodeCount: 12 }
    ]
  },
  {
    id: 10,
    title: 'Vinland Saga',
    genre: 'Action',
    synopsis: 'A young Viking seeks revenge for his fathers murder and becomes entangled in war.',
    backgroundImage: 'https://miro.medium.com/v2/resize:fit:720/format:webp/1*aRgVjpScRTPByVv2cI6YYw.png',
    seasons: [
      { id: 1, episodeCount: 24 },
      { id: 2, episodeCount: 12 }
    ]
  },
  {
    id: 11,
    title: 'Jujutsu Kaisen',
    genre: 'Action',
    synopsis: 'A student becomes involved in a world of curses and sorcery.',
    backgroundImage: 'https://static.wikia.nocookie.net/08cb8af6-daab-42bf-a591-c23e9ccbe09a/scale-to-width-down/800',
    seasons: [
      { id: 1, episodeCount: 24 },
      { id: 2, episodeCount: 23 }
    ]
  },
  {
    id: 12,
    title: 'Fire Force',
    genre: 'Action',
    synopsis: 'In a world of spontaneous combustion, a young hero joins a fire force to fight the flames.',
    backgroundImage: 'https://imgix.ranker.com/list_img_v2/11904/3271904/original/3271904?auto=format&q=50&fit=crop&fm=pjpg&dpr=2&crop=faces&h=356.020942408377&w=680',
    seasons: [
      { id: 1, episodeCount: 24 },
      { id: 2, episodeCount: 24 }
    ]
  },
  {
    id: 22,
    title: 'Inuyashiki',
    genre: 'Action',
    synopsis: 'A dying man is reborn as a cyborg and decides to fight crime.',
    backgroundImage: 'https://static0.gamerantimages.com/wordpress/wp-content/uploads/2022/10/inuyashiki-feature.jpg?q=50&fit=crop&w=1140&h=&dpr=1.5',
    seasons: [{ id: 1, episodeCount: 11 }]
  },

  // Mystery Genre
  {
    id: 13,
    title: 'Erased',
    genre: 'Mystery',
    synopsis: 'A man with time-travel abilities tries to prevent a tragedy from his childhood.',
    backgroundImage: 'https://static1.cbrimages.com/wordpress/wp-content/uploads/2020/09/erased-1.jpg?q=50&fit=crop&w=1140&h=&dpr=1.5',
    seasons: [{ id: 1, episodeCount: 12 }]
  },
  {
    id: 14,
    title: 'The Promised Neverland',
    genre: 'Mystery',
    synopsis: 'Children at an orphanage discover a horrifying secret and plan their escape.',
    backgroundImage: 'https://thereviewmonster.blog/wp-content/uploads/2019/04/emma-and-isabella.jpg?w=554&h=312',
    seasons: [
      { id: 1, episodeCount: 12 },
      { id: 2, episodeCount: 11 }
    ]
  },
  {
    id: 15,
    title: 'Psycho-Pass',
    genre: 'Mystery',
    synopsis: 'In a dystopian future, crime is managed through advanced psychological assessments.',
    backgroundImage: 'https://static1.cbrimages.com/wordpress/wp-content/uploads/2022/09/psycho-pass-anime.jpg?q=50&fit=crop&w=1140&h=&dpr=1.5',
    seasons: [
      { id: 1, episodeCount: 22 },
      { id: 2, episodeCount: 11 },
      { id: 3, episodeCount: 8 }
    ]
  },
  {
    id: 16,
    title: 'Another',
    genre: 'Mystery',
    synopsis: 'A student investigates the mysterious deaths surrounding his new school.',
    backgroundImage: 'https://animerants.net/wp-content/uploads/2019/09/another-anime-misaki-mei-1.png?w=1400&h=400&crop=1',
    seasons: [{ id: 1, episodeCount: 12 }]
  },
  {
    id: 17,
    title: 'Terror in Resonance',
    genre: 'Mystery',
    synopsis: 'Two teenagers wreak havoc in Tokyo to reveal a dark conspiracy.',
    backgroundImage: 'https://static1.cbrimages.com/wordpress/wp-content/uploads/2023/01/tir102-cropped.png?q=50&fit=crop&w=1140&h=&dpr=1.5',
    seasons: [{ id: 1, episodeCount: 11 }]
  },

  // Adventure/Fantasy Genre
  {
    id: 18,
    title: 'Made in Abyss',
    genre: 'Adventure/Fantasy',
    synopsis: 'An orphan girl and her robot friend explore a dangerous abyss in search of her mother.',
    backgroundImage: 'https://static1.cbrimages.com/wordpress/wp-content/uploads/2022/12/bondrewd-with-umbra-hands-background.jpg?q=50&fit=crop&w=1140&h=&dpr=1.5',
    seasons: [
      { id: 1, episodeCount: 13 },
      { id: 2, episodeCount: 12 }
    ]
  },
  {
    id: 19,
    title: 'The Rising of the Shield Hero',
    genre: 'Adventure/Fantasy',
    synopsis: 'A man is summoned to another world to become a hero, facing betrayal and struggle.',
    backgroundImage: 'https://static1.cbrimages.com/wordpress/wp-content/uploads/2023/10/naofumi-iwatani-on-rising-shield-hero-season-2.jpg?q=50&fit=crop&w=1140&h=&dpr=1.5',
    seasons: [
      { id: 1, episodeCount: 25 },
      { id: 2, episodeCount: 12 }
    ]
  },

];

const groupMoviesByGenre = (movies) => {
  return movies.reduce((acc, movie) => {
    const { genre } = movie;
    if (!acc[genre]) {
      acc[genre] = [];
    }
    acc[genre].push(movie);
    return acc;
  }, {});
};

const AnimeSeries = () => {
  const moviesByGenre = groupMoviesByGenre(movies);

  return (
    <div className="bg-gray-400 main-content pt-24 min-h-screen">
      <Navbar />
      <div className="container mx-auto my-10">
      <div className="relative bg-cover bg-center h-64 md:h-80 lg:h-96" style={{ backgroundImage: `url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ee4200b4-1ca8-4ef7-9ccb-1b66359eb247/dfzdlcd-c0e41887-185c-4b65-a24f-e88ba60ee8f4.jpg/v1/fill/w_1192,h_670,q_70,strp/dreamworks_wallpaper_by_maxtop9002_dfzdlcd-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvZWU0MjAwYjQtMWNhOC00ZWY3LTljY2ItMWI2NjM1OWViMjQ3XC9kZnpkbGNkLWMwZTQxODg3LTE4NWMtNGI2NS1hMjRmLWU4OGJhNjBlZThmNC5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.MmZD7VVsp2Fx8uii0TWUCo0J7Q_JEMyMLnEGYo2twQM')` }}>
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center p-4 md:p-6 lg:p-8">
            <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold text-center">
              Discover the Magic of Dreamworks
            </h1>
            <p className="text-white text-base md:text-lg lg:text-xl text-center mt-2 md:mt-4">
              Explore our collection of animated <br /> classics that have captured hearts across the globe.
            </p>
          </div>
        </div>
        {Object.keys(moviesByGenre).map((genre) => (
          <div key={genre} className="mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">{genre}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {moviesByGenre[genre].map((movie) => (
                <div
                  key={movie.id}
                  className="relative border border-gray-200 rounded-lg overflow-hidden"
                  style={{
                    backgroundImage: `url(${movie.backgroundImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '300px',
                  }}
                >
                  <div className="bg-black bg-opacity-50 p-5 h-full flex flex-col justify-end">
                    <h3 className="text-xl font-semibold text-white">{movie.title}</h3>
                    <p className="text-white">{movie.synopsis}</p>
                    <Link
                      to={`/anime/${movie.id}?title=${movie.title}`}
                      className="mt-2 inline-block bg-red-500 text-white rounded px-4 py-2"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <Footer />
      <FloatingMusicButton />
    </div>
  );
};

export default AnimeSeries;