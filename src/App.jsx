import { motion, AnimatePresence } from "framer-motion"; 
import Navbar from "../src/Components/Navbar"; // Adjust the import path as needed
import { Link } from 'react-router-dom'; // Adjust the import path as needed
import { useState, useRef, useEffect, useCallback } from "react"; 
import { MdSkipNext } from "react-icons/md";

const App = () => {
  const audioTracks = [
    {
      title: "Rosario Vampire Theme Song",
      src: "",
      background: "../src/Assets/wallpapersden.com_call-of-duty-dark-nikto_1920x1080.jpg",
    },
    {
      title: "Bleach Season One Theme Song",
      src: "/src/Assets/Songs/03 I Think.mp3",
      background: "../src/Assets/activision-call-of-duty-modern-warfare-2-call-of-duty-warzone-cod-vanguard-playstation-hd-wallpaper-preview.jpg",
    },
    {
      title: "Fire Force Closing Theme Song",
      src: "/src/Assets/Songs/07 - Water.mp3",
      background: "../src/Assets/call-of-duty-mobile-season-6-game-4k-3840x2160_1704132637.jpg",
    },
    {
      title: "Naruto Ending Theme Song",
      src: "/src/Assets/Songs/09 - Hands On.mp3",
      background: "../src/Assets/rin-yoshida-in-call-of-duty-mobile-hz.jpg"
    },
    {
      title: "Scissor Seven Opening Theme Song",
      src: "/src/Assets/Songs/Dadbod Instrumental - Logic.mp3",
      background: "../src/Assets/340716-Call-of-Duty-Mobile-COD-CODM-Video-Game-Call-of-Duty-Season-11.jpg",
    },
    {
      title: "Yame - Becane",
      src: "/src/Assets/Songs/Logic_-_Self_Medication_feat_Seth_MacFarlane_Redman_Statik_Selektah__FlexyOkay.com (1).mp3",
      background: "../src/Assets/call-of-duty-mobile-season-6-game-4k-3840x2160_1704132637.jpg",
    },
  ];

  const [currentTrack, setCurrentTrack] = useState(0);
  const audioRef = useRef(null);

  const playAudio = () => {
    audioRef.current.play();
  };

  const changeTrack = (index) => {
    setCurrentTrack(index);
    audioRef.current.load();
    playAudio();
  };

  const randomizeTrack = () => {
    const randomIndex = Math.floor(Math.random() * audioTracks.length);
    changeTrack(randomIndex);
  };

  const handleTrackEnd = useCallback(() => {
    randomizeTrack();
  }, [currentTrack]);

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
      <div className="relative z-50">
        <Navbar />
      </div>

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

        <div className="relative flex inset-0 z-10 items-center justify-center h-full bg-black bg-opacity-50">
          <main className="p-8">
            <motion.h1
              whileInView={{ opacity: 1, x: 1 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.5 }}
              className="text-3xl text-center text-white font-bold"
            >
              Welcome to Anim8
            </motion.h1>
            <p className="text-center text-white">
              Your One-Stop site for Top-Rated <br /> Anime Content
            </p>

            <div className="mt-8">
              <h2 className="text-white text-xl mb-4">
                Currently Playing: <span className="text-red-500">{audioTracks[currentTrack].title}</span>
              </h2>
              <div className="flex justify-center gap-4 mt-4">
                <button
                  onClick={randomizeTrack}
                  className="bg-green-500 text-white px-4 py-2 rounded"
                >
                  <MdSkipNext />
                </button>
              </div>
            </div>

            {/* Audio Element */}
            <audio ref={audioRef} src={audioTracks[currentTrack].src} />
          </main>
        </div>
      </div>
      


      <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-6 md:mb-0">
            <h2 className="text-xl font-bold mb-2">Get the App</h2>
            <p className="text-gray-400">Download our app for the best experience.</p>
            <div className="mt-4">
              <a href="#" className="text-yellow-500 hover:underline">Download on the App Store</a>
              <br />
              <a href="#" className="text-yellow-500 hover:underline">Get it on Google Play</a>
            </div>
          </div>

          <div className="mb-6 md:mb-0">
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
        <p>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
      </div>
    </footer>
    </div>
  );
};

export default App;