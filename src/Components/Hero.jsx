import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./Navbar";
import FloatingMusicButton from "../FloatingMusicButton";
import Footer from "./Footer";
import { useContext, useState } from "react";
import { MusicContext } from "../MusicContext";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";

const Hero = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSigningUp, setIsSigningUp] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const auth = getAuth();

  // Access music state and functions from MusicContext
  const {
    isMusicPlaying,
    toggleMusic,
    currentTrackIndex,
    changeTrack,
    tracks = [],
  } = useContext(MusicContext);

  // Safely retrieve the current track or default to an empty object
  const currentTrack = tracks[currentTrackIndex] || {
    title: "No Track oiiiii",
    artist: "Unknown ioooo",
    cover: "/default-cover.jpg",
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isSigningUp) {
        // Signup process
        await createUserWithEmailAndPassword(auth, email, password);
        setErrorMessage("Signup successful! You can now log in.");
        setIsSigningUp(false);
      } else {
        // Login process
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
      <div className="relative z-0 h-screen">
        <AnimatePresence mode="wait">
          <motion.div
            key="default-background"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 z-10 h-full w-full bg-cover bg-center"
            style={{ backgroundImage: `url(/default-background.jpg)` }}
          />
        </AnimatePresence>

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
                  className="text-sm text-white mt-4 cursor-pointer hover:underline"
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
