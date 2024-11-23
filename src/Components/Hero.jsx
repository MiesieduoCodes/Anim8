import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./Navbar";
import FloatingMusicButton from "../FloatingMusicButton";
import Footer from "./Footer";
import { Link } from 'react-router-dom';
import { useContext, useState, useEffect } from "react";
import { MusicContext } from "../MusicContext";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import {FaWhatsapp } from "react-icons/fa";

const Hero = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSigningUp, setIsSigningUp] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const auth = getAuth();

  const sliderVariants = {
    fromDown: {
      y: "100%",
      opacity: 0,
    },
    toPosition: {
      y: "0%",
      opacity: 1,
      transition: { duration: 1, ease: "easeOut" },
    },
    fromUp: {
      y: "-100%",
      opacity: 0,
    },
  };
  // Access music state and functions from MusicContext
  const {
    isMusicPlaying,
    toggleMusic,
    currentTrackIndex,
    changeTrack,
    tracks = [],
  } = useContext(MusicContext);

  const currentTrack = tracks[currentTrackIndex] || {
    title: "No Track oiiiii",
    artist: "Unknown ioooo",
    cover: "/default-cover.jpg",
  };

  const backgrounds = [
    'https://wallpapers.com/images/high/cartoons-in-madagascar-escape-2-africa-izj1z41a3vjuyenh.webp',
    'https://platform.polygon.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/24223176/STRANGE_WORLD_ONLINE_USE_fullcomp_317_39_6k_film.0013_a.jpg?quality=90&strip=all&crop=25.180921052632%2C0%2C62.8125%2C100&w=2400',
    'https://m.media-amazon.com/images/S/pv-target-images/83a15e35dec3984d13ea6eb76857106b3bf03470f6f8f571de2464a4cd3b21c2._SX1440_FMwebp_.jpg'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [backgrounds.length]);

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isSigningUp) {
        await createUserWithEmailAndPassword(auth, email, password);
        setErrorMessage("Signup successful! You can now log in.");
        setIsSigningUp(false);
      } else {
        await signInWithEmailAndPassword(auth, email, password);
        setErrorMessage("");
      }
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <div className="main-content pt-24">
      <Navbar />
      <div className="relative z-0 h-screen overflow-hidden">
        <div className="absolute inset-0 z-10 h-full w-full">
          <AnimatePresence initial={false}>
            <motion.div
              key={currentSlideIndex}
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${backgrounds[currentSlideIndex]})` }}
            />
          </AnimatePresence>
        </div>

        <div className="relative flex inset-0 z-10 items-center justify-center h-full bg-black bg-opacity-50 px-4">
          <main className="flex flex-col md:flex-row justify-between gap-16 items-center">
            <section className="text-center md:text-left">
              <motion.h1
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 0.5 }}
                className="text-3xl md:text-5xl text-white font-bold"
              >
                Welcome to Anim8
              </motion.h1>
              <p className="text-white text-sm md:text-lg mt-4">
                Your One-Stop site for Top-Rated Anime Content
              </p>
            </section>

            <section className="w-full max-w-sm md:max-w-md">
              <form
                onSubmit={handleLoginSubmit}
                className="bg-black bg-opacity-50 p-6 rounded-lg flex flex-col gap-4"
              >
                <h1 className="text-2xl md:text-3xl text-white font-bold text-center">
                  {isSigningUp ? "Sign Up for Anim8" : "Log in to Anim8"}
                </h1>
                {errorMessage && (
                  <p className="text-red-500 text-sm">{errorMessage}</p>
                )}
                <input
                  className="w-full p-2 rounded border text-black"
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <input
                  className="w-full p-2 rounded border text-black"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  className="mt-3 bg-blue-500 text-white font-bold px-4 py-2 rounded hover:bg-blue-700 transition-colors duration-300"
                  type="submit"
                >
                  {isSigningUp ? "Sign Up" : "Log In"}
                </button>
                <p
                  className=" text-white text-xl text-center mt-4 cursor-pointer"
                  onClick={() => setIsSigningUp(!isSigningUp)}
                >
                  {isSigningUp
                    ? "Already have an account? Log in."
                    : "Don't have an account? Sign up."}
                </p>
              </form>
            </section>
          </main>
        </div>
      </div>

      <div className="h-screen flex flex-col justify-center items-center bg-slate-600 p-8">
  <div className="flex flex-col md:flex-row justify-between w-full max-w-6xl gap-4 md:gap-8">
    {/* Left Side */}
    <motion.div
      className="flex-1 h-64 bg-blue-500 flex flex-col items-center justify-center text-white text-center rounded-lg shadow-lg cursor-pointer hover:scale-105 hover:shadow-2xl transition-transform duration-300 p-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={sliderVariants}
      whileHover={{ scale: 1.1 }}
    >
      <h2 className="text-lg md:text-2xl font-bold mb-2">Get Comics</h2>
      <p className="text-sm md:text-base mb-4">
        Dive into a world of action, adventure, and imagination with our vast
        collection of comics. Start your journey today!
      </p>

      {/* Button with Hover Animation */}
      <div className="relative group">
        <button className="bg-white text-blue-500 font-bold py-2 px-4 rounded-full flex items-center gap-3 transition-all duration-300 group-hover:pr-6">
          Explore Now
          <motion.div
            className="opacity-0 group-hover:opacity-100 text-blue-500 text-2xl"
            initial={{ x: -10 }}
            animate={{ x: 0 }}
            transition={{ repeat: Infinity, repeatType: "reverse", duration: 0.6 }}
          >
            →
          </motion.div>
        </button>
      </div>
    </motion.div>

    {/* Center Side */}
    <motion.div
      className="flex-1 h-64 bg-green-500 flex flex-col items-center justify-center text-white text-center rounded-lg shadow-lg cursor-pointer hover:scale-105 hover:shadow-2xl transition-transform duration-300 p-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={sliderVariants}
      whileHover={{ scale: 1.1 }}
    >
      <h2 className="text-lg md:text-2xl font-bold mb-2">Request Movies on WhatsApp</h2>
      <p className="text-sm md:text-base mb-4">
        Can&apos;t find your favorite movie? Send us a request via WhatsApp, and we&apos;ll
        make it available for you. It&apos;s that easy!
      </p>

      {/* Button with Hover Animation */}
      <div className="relative group">

        <button className="bg-white text-green-500 font-bold py-2 px-4 rounded-full flex items-center gap-3 transition-all duration-300 group-hover:pr-6">
          Request Now
          <motion.div
            className="opacity-0 group-hover:opacity-100 text-green-500 text-2xl"
            initial={{ x: -10 }}
            animate={{ x: 0 }}
            transition={{ repeat: Infinity, repeatType: "reverse", duration: 0.6 }}
          >
            <FaWhatsapp className="text-2xl text-green-500 hover:text-green-400" />
          </motion.div>
        </button>
                    
      </div>
    </motion.div>

    {/* Right Side */}
    <motion.div
  className="flex-1 h-64 bg-red-500 flex flex-col items-center justify-center text-white text-center rounded-lg shadow-lg cursor-pointer hover:scale-105 hover:shadow-2xl transition-transform duration-300 p-4"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, margin: "-50px" }}
  variants={sliderVariants}
  whileHover={{ scale: 1.1 }}
>
  <h2 className="text-lg md:text-2xl font-bold mb-2">Request Movie Collections</h2>
  <p className="text-sm md:text-base mb-4">
    Explore complete collections from your favorite franchises like DC, Marvel, 
    Scooby-Doo, and Barbie. Curated just for you!
  </p>

  {/* Button with Hover Animation */}
  <div className="relative group">
  <Link to= "/movie">
      
    <button className="bg-white text-red-500 font-bold py-2 px-4 rounded-full flex items-center gap-3 transition-all duration-300 group-hover:pr-6">
      Request Collection
      <motion.div
        className="opacity-0 group-hover:opacity-100 text-red-500 text-2xl"
        initial={{ x: -10 }}
        animate={{ x: 0 }}
        transition={{ repeat: Infinity, repeatType: "reverse", duration: 0.6 }}
      >
        →
      </motion.div>
    </button>
    </Link>
  </div>
</motion.div>

  </div>
</div>

      <Footer />

      {/* Mini Music Player */}
      <div className="fixed bottom-16 right-4 bg-white p-4 rounded-lg shadow-lg w-80 flex items-center gap-4">
        <img
          src={currentTrack.cover}
          alt="Track Cover"
          className="w-16 h-16 object-cover rounded"
        />
        <div className="flex-1">
          <h3 className="text-sm font-bold">{currentTrack.title}</h3>
          <p className="text-xs text-gray-600">{currentTrack.artist}</p>
        </div>
        <button
          className="p-2 bg-blue-500 text-white rounded-full"
          onClick={toggleMusic}
        >
          {isMusicPlaying ? "Pause" : "Play"}
        </button>
      </div>

      {/* Floating Music Button */}
      <FloatingMusicButton
        isMusicPlaying={isMusicPlaying}
        toggleMusic={toggleMusic}
        currentTrackIndex={currentTrackIndex}
        changeTrack={changeTrack}
      />
    </div>
  );
};

export default Hero;