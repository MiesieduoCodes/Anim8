import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../src/Components/Navbar";
import { Link } from 'react-router-dom'; 
import { useState, useRef, useEffect, useCallback } from "react"; 
import { MdSkipNext, MdQueueMusic } from "react-icons/md";
import { AiOutlineHeart } from 'react-icons/ai'; // For favorites

const App = () => {
  const audioTracks = [
    {
      title: "Rosario Vampire Theme Song",
      src: "/Assets/Songs/03 I Think.mp3",
      background: "/src/Assets/wallpapersden.com_call-of-duty-dark-nikto_1920x1080.jpg",
    },
    {
      title: "Bleach Season One Theme Song",
      src: "/Assets/Songs/02 Earfquake.mp3",
      background: "/src/Assets/wallpapersden.com_call-of-duty-modern-warfare-2-call-of-duty-warzone-cod-vanguard-playstation-hd-wallpaper-preview.jpg",
    },
  ];

  const [currentTrack, setCurrentTrack] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);
  const [showQueue, setShowQueue] = useState(false);
  const audioRef = useRef(null);
  const canvasRef = useRef(null);
  const audioContextRef = useRef(null);
  const analyserRef = useRef(null);

  useEffect(() => {
    // Initialize audio context
    audioContextRef.current = new (window.AudioContext || window.webkitAudioContext)();
    const source = audioContextRef.current.createBufferSource();
    analyserRef.current = audioContextRef.current.createAnalyser();
    audioRef.current.src = audioTracks[currentTrack].src;

    // Load the audio track and set it up
    fetch(audioTracks[currentTrack].src)
      .then(response => response.arrayBuffer())
      .then(data => audioContextRef.current.decodeAudioData(data))
      .then(buffer => {
        source.buffer = buffer;
        source.connect(analyserRef.current);
        analyserRef.current.connect(audioContextRef.current.destination);
        source.start(0);
      })
      .catch(error => console.error('Error with fetching audio:', error));

    // Clean up on unmount
    return () => {
      if (source) {
        source.stop();
      }
      audioContextRef.current.close();
    };
  }, [currentTrack]);

  useEffect(() => {
    const drawWaveform = () => {
      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');
      context.clearRect(0, 0, canvas.width, canvas.height);

      const bufferLength = analyserRef.current.frequencyBinCount;
      const dataArray = new Uint8Array(bufferLength);
      analyserRef.current.getByteTimeDomainData(dataArray);

      const width = canvas.width;
      const height = canvas.height;
      const sliceWidth = (width * 1.0) / bufferLength;
      let x = 0;

      context.lineWidth = 2;
      context.strokeStyle = 'blue';
      context.beginPath();

      for (let i = 0; i < bufferLength; i++) {
        const v = dataArray[i] / 128.0; // Normalize to 0-1
        const y = (v * height) / 2;

        if (i === 0) {
          context.moveTo(x, y);
        } else {
          context.lineTo(x, y);
        }
        x += sliceWidth;
      }

      context.lineTo(width, height / 2);
      context.stroke();

      requestAnimationFrame(drawWaveform);
    };

    drawWaveform();
  }, [currentTrack]);

  const changeTrack = (index) => {
    setCurrentTrack(index);
  };

  const randomizeTrack = () => {
    const randomIndex = Math.floor(Math.random() * audioTracks.length);
    changeTrack(randomIndex);
  };

  const handleTrackEnd = useCallback(() => {
    randomizeTrack();
  }, []);

  const toggleFavorite = () => setIsFavorite(!isFavorite);

  useEffect(() => {
    const audioElement = audioRef.current;
    if (audioElement) {
      audioElement.addEventListener('ended', handleTrackEnd);
      return () => {
        audioElement.removeEventListener('ended', handleTrackEnd);
      };
    }
  }, [handleTrackEnd]);

  const toggleQueue = () => setShowQueue(!showQueue);

  return (
    <div className="main-content pt-20">
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

                {/* Waveform canvas */}
                <canvas
                  ref={canvasRef}
                  width={400} // Adjust width as needed
                  height={100} // Adjust height for better visibility
                  className="w-full mb-4"
                />

                {/* Music control buttons */}
                <div className="flex justify-center md:justify-start gap-4 mt-4">
                  <button
                    onClick={() => changeTrack(currentTrack === audioTracks.length - 1 ? 0 : currentTrack + 1)}
                    className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors duration-300"
                  >
                    <MdSkipNext size={24} />
                  </button>
                  <button
                    onClick={toggleFavorite}
                    className={`px-4 py-2 rounded ${isFavorite ? 'bg-red-500' : 'bg-gray-500'} hover:bg-red-700 transition-colors duration-300`}
                  >
                    <AiOutlineHeart size={24} />
                  </button>
                  <button
                    onClick={toggleQueue}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors duration-300"
                  >
                    <MdQueueMusic size={24} />
                  </button>
                </div>

                <audio ref={audioRef} />
              </div>
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

              {showQueue && (
                <div className="mt-4 bg-black bg-opacity-70 p-4 rounded-lg">
                  <h2 className="text-white text-lg">Queue:</h2>
                  <ul className="text-white">
                    {audioTracks.map((track, index) => (
                      <li key={index} className={`py-1 ${index === currentTrack ? 'font-bold' : ''}`}>
                        {track.title}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </section>
          </main>
        </div>
      </div>
    </div>
  );
};

export default App;