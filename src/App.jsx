import { motion, AnimatePresence } from "framer-motion"; 
import Navbar from "../src/Components/Navbar";
import { Link } from 'react-router-dom'; 
import { useState, useRef, useEffect, useCallback } from "react"; 
import { MdSkipNext } from "react-icons/md";

const App = () => {
  const audioTracks = [
    {
      title: "Rosario Vampire Theme Song",
      src: "./Assets/Songs/03 I Think.mp3",
      background: "../src/Assets/wallpapersden.com_call-of-duty-dark-nikto_1920x1080.jpg",
    },
    {
      title: "Bleach Season One Theme Song",
      src: "./Assets/Songs/02 Earfquake.mp3",
      background: "../src/Assets/activision-call-of-duty-modern-warfare-2-call-of-duty-warzone-cod-vanguard-playstation-hd-wallpaper-preview.jpg",
    },
    // Add more tracks as necessary
  ];

  const [currentTrack, setCurrentTrack] = useState(0);
  const audioRef = useRef(null);

  const playAudio = async () => {
    try {
      await audioRef.current.play();
    } catch (error) {
      console.error("Error playing audio:", error);
    }
  };

  const changeTrack = async (index) => {
    setCurrentTrack(index);
    audioRef.current.src = audioTracks[index].src; // Set the new source
    try {
      await audioRef.current.load(); // Load the new audio track
      await playAudio(); // Play the audio after it has loaded
    } catch (error) {
      console.error("Error changing track:", error);
    }
  };

  const randomizeTrack = () => {
    const randomIndex = Math.floor(Math.random() * audioTracks.length);
    changeTrack(randomIndex);
  };

  const handleTrackEnd = useCallback(() => {
    randomizeTrack();
  }, []);

  useEffect(() => {
    const audioElement = audioRef.current;

    if (audioElement) {
      audioElement.addEventListener('ended', handleTrackEnd);
      return () => {
        audioElement.removeEventListener('ended', handleTrackEnd);
      };
    }
  }, [handleTrackEnd]);

  return (
    <div>
      <Navbar />

      <div className="relative z-0 h-screen">
        <AnimatePresence mode='wait'>
          <motion.div
            key={audioTracks[currentTrack].background}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 z-10 h-full w-full bg-cover bg-center"
            style={{ backgroundImage: `url(${audioTracks[currentTrack].background})` }}
          />
        </AnimatePresence>

        <div className="relative flex inset-0 z-10 items-center justify-center h-full bg-black bg-opacity-50 px-4">
          <main className="flex flex-col md:flex-row justify-between gap-16 items-center">
            <section className="text-center md:text-left">
              <motion.h1
                whileInView={{ opacity: 1, x: 1 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 0.5 }}
                className="text-3xl md:text-5xl text-white font-bold"
              >
                Welcome to Anim8
              </motion.h1>
              <p className="text-white text-sm md:text-lg mt-4">
                Your One-Stop site for Top-Rated Anime Content
              </p>
              <div className="mt-8">
                <h2 className="text-white text-lg md:text-xl mb-4">
                  Currently Playing: <span className="text-red-500">{audioTracks[currentTrack].title}</span>
                </h2>
                <div className="flex justify-center md:justify-start gap-4 mt-4">
                  <button
                    onClick={randomizeTrack}
                    className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors duration-300"
                  >
                    <MdSkipNext size={24} />
                  </button>
                </div>
              </div>
              <audio ref={audioRef} />
            </section>

            <section className="w-full max-w-sm md:max-w-md">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert(`Logging in...`);
                }}
                className="bg-black bg-opacity-70 p-6 rounded-lg flex flex-col gap-4"
              >
                <h1 className="text-2xl md:text-3xl text-white font-bold text-center">Get Started With Anim8</h1>
                <input
                  className="w-full p-2 rounded border text-black"
                  type="email"
                  placeholder="Email Address"
                  required
                />
                <input
                  className="w-full p-2 rounded border text-black"
                  type="password"
                  placeholder="Password"
                  required
                />
                <button
                  className="mt-3 bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-green-700 transition-colors duration-300"
                  type="submit"
                >
                  Get Started
                </button>
                <div className="text-center text-white font-bold mt-4">
                  <p>New To Anim8?</p>
                  <Link to="/" className="hover:underline text-yellow-400">
                    Create An Account
                  </Link>
                </div>
              </form>
            </section>
          </main>
        </div>
      </div>

      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between gap-8">
            <div>
              <h2 className="text-xl font-bold mb-2">Get the App</h2>
              <p className="text-gray-400">Download our app for the best experience.</p>
              <div className="mt-4">
                <a href="#" className="text-yellow-500 hover:underline">Download on the App Store</a>
                <br />
                <a href="#" className="text-yellow-500 hover:underline">Get it on Google Play</a>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-2">More</h2>
              <ul>
                <li>
                  <Link to="/about" className="text-gray-400 hover:underline">About Us</Link>
                </li>
                <li>
                  <Link to="/contact" className="text-gray-400 hover:underline">Contact</Link>
                </li>
                <li>
                  <Link to="/privacy" className="text-gray-400 hover:underline">Privacy Policy</Link>
                </li>
                <li>
                  <Link to="/terms" className="text-gray-400 hover:underline">Terms of Service</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Anim8. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
