// src/About.jsx
import Navbar from "./Navbar";
import { Link } from 'react-router-dom';
import Footer from "./Footer";
import FloatingMusicButton from '../FloatingMusicButton';
import { useState, useEffect } from 'react';

const audioTracks = [
  {
    title: "Jack Garratt - Surprise Yourself",
    url: "https://rildi.sunproxy.net/file/cWJSL0N2aFdQbTVEZmQ2S2FCb3VWL2Y3MjRMS2FvYTRVTEgyYW5MSWU0d2wvK3pZRnZwNVprUGxWNEhnTFpZVkRRUnh1V3RlTEZiUHNYZlo5V29tOVlKNC81M0VWbTJKVnMxU3l6Z1V2a0U9/Jack_Garratt_-_1-08._Surprise_Yourself_(Hydr0.org).mp3",
  },
  {
    title: "Timeless Full Drum Loop",
    url: "https://cdn.shopify.com/s/files/1/0129/7698/0032/files/Cymatics_-_Timeless_Full_Drum_Loop.mp3?v=1618935629",
  },
  {
    title: "Summer Daze Melody",
    url: "https://cdn.shopify.com/s/files/1/0129/7698/0032/files/Cymatics_-_Summer_Daze_Melody_b06e61cb-334f-4673-a5b4-c28f873d643c.mp3?v=1618935629",
  },
  // ... (other tracks)
];

const About = () => {
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [audio] = useState(new Audio(audioTracks[currentTrackIndex].url));

  const toggleMusic = () => {
    setIsMusicPlaying(prev => !prev);
  };

  const changeTrack = (index) => {
    setCurrentTrackIndex(index);
  };

  // Play or pause music based on state
  useEffect(() => {
    if (isMusicPlaying) {
      audio.play();
    } else {
      audio.pause();
    }

    // Cleanup function to pause audio on component unmount
    return () => {
      audio.pause();
      audio.currentTime = 0; // Reset to start
    };
  }, [isMusicPlaying, audio]);

  // Change track when currentTrackIndex changes
  useEffect(() => {
    audio.src = audioTracks[currentTrackIndex].url;
    if (isMusicPlaying) {
      audio.play();
    }
  }, [currentTrackIndex, audio, isMusicPlaying]);

  return (
    <div className="main-content pt-24 bg-gray-900">
      <Navbar />
      {/* Welcome Section */}
      <div
        className="bg-cover bg-center py-20 relative"
        style={{ backgroundImage: "url('/welcome-bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
        <div className="relative z-10 px-6 md:px-12">
          <h1 className="text-5xl font-bold text-center mb-6 md:text-6xl text-yellow-500">Welcome to Anim8</h1>
          <p className="text-center text-lg font-light mb-6 md:text-xl text-gray-300">Your Gateway to Endless Animation Adventures</p>
        </div>
      </div>

      {/* Mission Section */}
      <div
        className="bg-cover bg-center py-20 px-6 relative"
        style={{ backgroundImage: "url('/mission-bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-yellow-500">Our Mission</h2>
          <p className="text-xl mb-4 text-gray-300">To become the ultimate destination for animation lovers, offering:</p>
          <ul className="list-disc list-inside mb-6 text-gray-200">
            <li>Top-rated films, carefully curated to ensure quality over quantity</li>
            <li>Data-efficient downloads, saving you time and resources</li>
            <li>Diverse genres: Action, Mystery, Adventure, and more!</li>
          </ul>
        </div>
      </div>

      {/* Vision Section */}
      <div
        className="bg-cover bg-center py-20 px-6 relative"
        style={{ backgroundImage: "url('/vision-bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-yellow-500">Our Vision</h2>
          <p className="text-xl mb-6 text-gray-300">To evolve into a renowned animation production firm, creating original content that inspires and entertains.</p>
          <h3 className="text-3xl font-semibold mb-4 text-yellow-500">Join Us:</h3>
          <p className="text-lg mb-4 text-gray-200">Follow us on:</p>
          <div className="flex justify-center space-x-4">
            <Link to="/instagram" className="text-lg text-blue-500 hover:text-blue-400">Instagram</Link>
            <Link to="/facebook" className="text-lg text-blue-500 hover:text-blue-400">Facebook</Link>
            <Link to="/whatsapp" className="text-lg text-green-500 hover:text-green-400">WhatsApp</Link>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <Footer />

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

export default About;
