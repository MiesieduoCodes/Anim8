import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules"; // Import Swiper Autoplay module
import "swiper/css";
import "../index.css";
import movieData from "../Constants/MovieCollection"; // Adjusted to import movieData

const groupMoviesByGenre = (movies) => {
  return movies.reduce((acc, movie) => {
    const { genre = "General" } = movie; // Default genre to "General" if not provided
    if (!acc[genre]) {
      acc[genre] = [];
    }
    acc[genre].push(movie);
    return acc;
  }, {});
};

const AnimeSeries = () => {
  const moviesByGenre = groupMoviesByGenre(movieData);

  const slides = [
    {
      image: "https://images2.alphacoders.com/471/thumb-440-471197.webp",
      title: "Unravel Mysteries with Scooby-Doo and the Gang",
      subtitle: "Join Scooby-Doo, Shaggy, Velma, Daphne, and Fred as they solve spooky mysteries and unmask villains.",
    },
    {
      image: "https://wallpapers.com/images/hd/teen-barbie-doll-m75hneqobytwepzf.webp",
      title: "Explore the World of Barbie",
      subtitle: "From fashion to adventures, follow Barbie through her many careers and thrilling escapades.",
    },
    {
      image: "https://wallpapers.com/images/high/marvel-and-dc-iphone-w2zwnmhjohj7m3wy.webp",
      title: "Join the Marvel Universe",
      subtitle: "Experience the thrilling adventures of Earth's mightiest heroes, from Iron Man to Spider-Man and beyond.",
    },
    {
      image: "https://wallpapers.com/images/high/blue-and-red-dc-superheroes-iozpdy9tja6gbnwa.webp",
      title: "The Legends of DC Comics",
      subtitle: "Step into the world of Batman, Superman, Wonder Woman, and more in epic battles for justice.",
    },
  ];

  return (
    <div className="main-content pt-24">
      <Navbar />
      <video
        className="fixed top-0 left-0 w-full h-full object-cover -z-10"
        src="https://fireforce-anime.jp/3rdwp/wp-content/themes/enn-enn-season3-teaser/_assets/video/loader.mp4"
        autoPlay
        loop
        muted
      />

      <div className="container mx-auto my-10 relative z-10">
  <Swiper
  modules={[Autoplay]} // Enable autoplay
  autoplay={{
    delay: 3000, // Slide change interval in milliseconds
    disableOnInteraction: false, // Keep autoplay active even after interaction
  }}
  loop
  spaceBetween={0}
  slidesPerView={1}
  className="h-[calc(100vh-70px)] md:h-80 lg:h-96" // Adjusted height for better view in mobile
>
  {slides.map((slide, index) => (
    <SwiperSlide key={index}>
      <div
        className="relative bg-cover bg-center h-[calc(100vh-70px)] md:h-80 lg:h-96"
        style={{ backgroundImage: `url('${slide.image}')` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center px-4 sm:px-6 md:px-8 lg:px-10 text-center">
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
            {slide.title}
          </h1>
          <p className="text-white text-base sm:text-lg md:text-xl lg:text-2xl mt-3 sm:mt-4 md:mt-5">
            {slide.subtitle}
          </p>
        </div>
      </div>
    </SwiperSlide>
  ))}
</Swiper>

        {Object.keys(moviesByGenre).map((genre) => (
          <div key={genre} className="mb-8 p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">{genre}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
              {moviesByGenre[genre].map((movie, index) => (
                <motion.div
                  key={index}
                  className="relative border border-gray-200 rounded-lg overflow-hidden shadow-lg"
                  style={{
                    backgroundImage: `url(${movie.backgroundImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '350px',
                  }}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true, amount: 0.5 }}
                  whileHover={{
                    scale: 1.05,
                    transition: {
                      type: 'spring',
                      stiffness: 300,
                      damping: 10,
                      duration: 0.6,
                    },
                  }}
                >
                  <div className="bg-black bg-opacity-50 p-5 h-full flex flex-col justify-end">
                    <h3 className="text-xl font-semibold text-white">{movie.title}</h3>
                    <p className="text-white">{movie.synopsis}</p>
                    <div className="relative inline-block">
                      <Link
                        to="https://chat.whatsapp.com/Fb2mLRz4Xv7HGPQoejmLSY"
                        className="mt-2 inline-block bg-red-500 text-white rounded px-4 py-2"
                      >
                        Request Movie Collection
                      </Link>
                      <button
                        className="absolute top-0 right-0 bg-gray-100 text-gray-800 text-xs px-2 py-1 shadow-md custom-spiky-border"
                        title="Terms and Conditions apply"
                      >
                        T&C apply
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <Footer className="relative z-10" />
    </div>
  );
};

export default AnimeSeries;
