import { useState } from 'react';
import Navbar from "./Navbar";
import RinYoshidaImage from '../Assets/rin-yoshida-in-call-of-duty-mobile-hz.jpg';
import Footer from "./Footer";
import { MdSkipNext } from "react-icons/md";
 

const DetectiveConan = () => {
  const movies = [
    "The Time-Bombed Skyscraper (1997)",
    "The Fourteenth Target (1998)",
    "The Last Wizard of the Century (1999)",
    "Captured in Her Eyes (2000)",
    "Countdown to Heaven (2001)",
    "The Phantom of Baker Street (2002)",
    "Crossroad in the Ancient Capital (2003)",
    "Magician of the Silver Sky (2004)",
    "Strategy Above the Depths (2005)",
    "The Private Eyes' Requiem (2006)",
    "Jolly Roger in the Deep Azure (2007)",
    "Full Score of Fear (2008)",
    "The Raven Chaser (2009)",
    "The Lost Ship in the Sky (2010)",
    "Quarter of Silence (2011)",
    "Eleventh Striker (2012)",
    "Private Eye in the Distant Sea (2013)",
    "Dimensional Sniper ",
    "Sunflowers of Inferno",
    "The Darkest Nightmare ",
    "Crimson Love Letter ",
    "Zero the Enforcer ",
    "The Fist of Blue Sapphire",
    "The Scarlet Bullet",
    "The Bride of Halloween ",
  ];

  const story = "Detective Conan follows the adventures of Shinichi Kudo, a teenage detective who is transformed into a child after being poisoned. Under the alias Conan Edogawa, he solves various cases while searching for the organization responsible for his condition.";

  // State to control music playback and track
 
 

  // Function to toggle music play/pause
  const toggleMusic = () => {
    setIsMusicPlaying(!isMusicPlaying);
    // Add logic to play/pause the music
  };

  // Function to change the music track
  const changeTrack = (index) => {
    setCurrentTrackIndex(index);
    // Logic to change track
  };

  return (
    <div className="main-content pt-24">
      <Navbar />
      <div className="relative bg-cover bg-center h-[50vh] md:h-80 lg:h-96" style={{ backgroundImage: `url(${RinYoshidaImage})` }}> 
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center p-4 md:p-6">
          <div className="flex flex-col gap-4 md:gap-10">
            <p className="mt-4 text-base md:text-lg text-white text-center md:w-[40%]">{story}</p>
            <a href="">
              <button className="w-full md:w-[150px] h-[40px] p-3 bg-yellow-500 flex justify-center items-center text-white rounded-full transition-transform duration-300 hover:scale-105">
                <MdSkipNext className="text-2xl" /> Watch Trailer
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto p-4">
        <h1 className="text-2xl md:text-3xl font-bold text-center mt-4">Detective Conan Movies</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
          {movies.map((movie, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-lg text-center">
              <p className="text-lg">{movie}</p>
              <button
                  className="bg-blue-500 text-white font-bold py-1 px-2 rounded hover:bg-green-700 transition-colors duration-300 mt-2"
                  onClick={() => alert(`Downloading ${movie}`)}
                >
                  Download
                </button>
            </div>
          ))}
        </div>
      </div>         
      <Footer />
 
    </div>
  );
};

export default DetectiveConan;
