import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useContext, useState, useEffect } from "react";
import { MdSkipNext, MdPause, MdPlayArrow } from "react-icons/md";
import { AiOutlineHeart } from "react-icons/ai";
import FloatingMusicButton from "../FloatingMusicButton";
import { MusicContext } from "../MusicContext";

const Hero = () => {
  const {
    isMusicPlaying,
    toggleMusic,
    currentTrackIndex,
    setCurrentTrackIndex,
    tracks,
    setTracks,
    isFavorite,
    setIsFavorite,
    audioRef,
  } = useContext(MusicContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log("Login submitted:", { email, password });
  };

  useEffect(() => {
    const fetchTracks = async () => {
      const fetchedTracks = [
        { title: "Track 1", url: "url1.mp3", background: "bg1.jpg" },
        { title: "Track 2", url: "url2.mp3", background: "bg2.jpg" },
      ];
      setTracks(fetchedTracks);
    };

    fetchTracks();
  }, [setTracks]);

  if (!tracks || tracks.length === 0) {
    return (
      <div className="main-content pt-24">
        <Navbar />
        <div className="h-screen flex items-center justify-center bg-black text-white">
          <p>Loading tracks, please wait...</p>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="main-content pt-24">
      <Navbar />
      <div className="relative z-0 h-screen">
        <AnimatePresence mode="wait">
          <motion.div
            key={tracks[currentTrackIndex]?.background}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 z-10 h-full w-full bg-cover bg-center"
            style={{ backgroundImage: `url(${tracks[currentTrackIndex]?.background})` }}
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

              <div className="mt-8">
                <h2 className="text-white text-lg md:text-xl mb-4">
                  Currently Playing:{" "}
                  <span className="text-red-500">
                    {tracks[currentTrackIndex]?.title}
                  </span>
                </h2>

                <div className="flex justify-center md:justify-start gap-4 mt-4">
                  <button
                    onClick={toggleMusic}
                    className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors duration-300"
                  >
                    {isMusicPlaying ? (
                      <MdPause size={24} />
                    ) : (
                      <MdPlayArrow size={24} />
                    )}
                  </button>
                  <button
                    onClick={() =>
                      setCurrentTrackIndex(
                        (currentTrackIndex + 1) % tracks.length
                      )
                    }
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors duration-300"
                  >
                    <MdSkipNext size={24} />
                  </button>
                  <button
                    onClick={() => setIsFavorite(!isFavorite)}
                    className={`bg-${
                      isFavorite ? "red" : "gray"
                    }-500 text-white px-4 py-2 rounded hover:bg-${
                      isFavorite ? "red" : "gray"
                    }-700 transition-colors duration-300`}
                  >
                    <AiOutlineHeart size={24} />
                  </button>
                </div>
              </div>
            </section>

            <section className="w-full max-w-sm md:max-w-md">
              <form
                onSubmit={handleLoginSubmit}
                className="bg-black bg-opacity-50 p-6 rounded-lg flex flex-col gap-4"
              >
                <h1 className="text-2xl md:text-3xl text-white font-bold text-center">
                  Log in to Anim8
                </h1>
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
                  Log In
                </button>
              </form>
            </section>
          </main>
        </div>
      </div>
      <Footer />

      <FloatingMusicButton
        isMusicPlaying={isMusicPlaying}
        toggleMusic={toggleMusic}
        currentTrackIndex={currentTrackIndex}
        changeTrack={(index) => setCurrentTrackIndex(index)}
        tracks={tracks}
      />

      <audio ref={audioRef} src={tracks[currentTrackIndex]?.url} loop />
    </div>
  );
};

export default Hero;
