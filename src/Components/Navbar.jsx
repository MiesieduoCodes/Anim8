import { useState } from "react";
import { Link } from "react-router-dom";

// Navigation data
const links = [
  {
    name: "Hey Ani",
    submenu: true,
    sublinks: [
      { name: "About", link: "/about" },
      { name: "FAQs", link: "/faqs" },
    ],
  },
  {
    name: "Toonz Hub",
    submenu: true,
    sublinks: [
      { name: "Pixar", link: "/pixar" },
      { name: "DreamWorks", link: "/dreamworks" },
      { name: "Disney", link: "/disney" },
      { name: "Netflix", link: "/netflix" },
      { name: "Illumination", link: "/illumination" },
    ],
  },
  {
    name: "Anime Freak",
    submenu: true,
    sublinks: [
      { name: "Anime Films", link: "/anime-films" },
      { name: "Anime Series", link: "/anime-series" },
    ],
  },
  {
    name: "Anim8 Buddy",
    submenu: true,
    sublinks: [
      { name: "Trailers", link: "/trailers" },
      { name: "Trivias", link: "/trivias" },
      { name: "Whatsup?", link: "/whatsgood" },
    ],
  },
];

// NavLinks Component
const NavLinks = () => {
  const [heading, setHeading] = useState("");
  const [ setSubHeading] = useState("");

  return (
    <>
      {links.map((link, index) => (
        <div key={index}>
          <div className="px-3 text-left md:cursor-pointer group">
            <h1
              className="py-7 flex justify-between items-center md:pr-0 pr-5 group"
              onClick={() => {
                heading !== link.name ? setHeading(link.name) : setHeading("");
                setSubHeading("");
              }}
            >
              {link.name}
              <span className="text-xl md:hidden inline">
                <ion-icon
                  name={`${
                    heading === link.name ? "chevron-up" : "chevron-down"
                  }`}
                ></ion-icon>
              </span>
              <span className="text-xl md:mt-1 md:ml-2 md:block hidden group-hover:rotate-180 group-hover:-mt-2">
                <ion-icon name="chevron-down"></ion-icon>
              </span>
            </h1>
            {link.submenu && (
              <div>
                {/* Desktop dropdown */}
                <div className="absolute top-20 hidden group-hover:md:block hover:md:block">
                  <div className="py-3">
                    <div className="w-4 h-4 left-3 absolute mt-1 bg-white rotate-45"></div>
                  </div>
                  <div className="bg-white p-5 grid grid-cols-3 gap-10">
                    {link.sublinks.map((sublink, subIndex) => (
                      <li key={subIndex} className="text-sm text-gray-600 my-2.5">
                        <Link to={sublink.link} className="hover:text-primary">
                          {sublink.name}
                        </Link>
                      </li>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
          {/* Mobile menus */}
          <div className={`${heading === link.name ? "md:hidden" : "hidden"}`}>
            {link.sublinks.map((sublink, subIndex) => (
              <li key={subIndex} className="py-3 pl-14">
                <Link to={sublink.link}>{sublink.name}</Link>
              </li>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

// Navbar Component
import { useNavigate } from "react-router-dom";
import { RiMenu4Fill, RiCloseFill } from "react-icons/ri";
import {  useEffect } from "react";
import { motion } from "framer-motion";
import { IoSearch } from "react-icons/io5";
import movies from "../Constants/data";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showSearchPopup, setShowSearchPopup] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();

  const handleScroll = () => {
    setScrolled(window.scrollY > 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleSearchInputChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query.trim() === "") {
      setSuggestions([]);
      return;
    }

    const filteredMovies = movies.filter(
      (movie) =>
        movie.title.toLowerCase().includes(query.toLowerCase()) ||
        (movie.genre && movie.genre.toLowerCase().includes(query.toLowerCase()))
    );
    setSuggestions(filteredMovies);
  };

  const handleSuggestionClick = (id) => {
    const selectedMovie = movies.find((movie) => movie.id === id);
    if (selectedMovie) {
      navigate(`/anime/${id}`);
      setShowSearchPopup(false);
      setSearchQuery("");
      setSuggestions([]);
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "bg-slate-400 shadow-lg" : "bg-white"
      }`}
    >
      <div className="flex items-center font-medium justify-between px-4 md:px-6">
        {/* Logo and Menu Button */}
        <div className="z-50 p-2 md:w-auto w-full flex justify-between">
          <h1 className="md:cursor-pointer text-xl font-bold">
            Anim<span className="text-red-500">8</span>
          </h1>
          <div
            className="text-3xl md:hidden"
            onClick={() => setOpen(!open)}
          >
            {open ? <RiCloseFill /> : <RiMenu4Fill />}
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex items-center gap-4">
          <li>
            <Link to="/" className="py-1 px-2 font-medium">
              Home
            </Link>
          </li>
          <NavLinks />
          <li>
            <Link to="/talk" className="py-1 px-2">
              Talk To Anim8
            </Link>
          </li>
          <li>
            <Link
              to="/signup"
              className="py-1 px-3 bg-red-500 text-white rounded hover:bg-red-600 transition duration-200"
            >
              Join Anim8
            </Link>
          </li>
        </ul>

        {/* Search Button (Desktop) */}
        <button
          className="hidden md:block text-red-500 text-xl"
          onClick={() => setShowSearchPopup(true)}
        >
          <IoSearch />
        </button>

        {/* Mobile Menu */}
        <ul
          className={`md:hidden bg-white absolute top-0 left-0 z-10 w-full h-screen py-16 pl-6 transition-transform duration-500 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Search Button (Mobile) */}
          <li className="py-2">
            <button
              className="text-red-500 text-xl"
              onClick={() => setShowSearchPopup(true)}
            >
              Search
            </button>
          </li>

          {/* Navigation Links with Spacing */}
          <li className="py-2">
            <Link to="/" className="inline-block">
              Home
            </Link>
          </li>
          <NavLinks />
          <li className="py-2">
            <Link to="/talk" className="inline-block">
              Talk To Anim8
            </Link>
          </li>
          <li className="py-2 mb-2"> {/* Add margin-bottom for spacing */}
            <Link to="/signup" className="inline-block bg-red-500 text-white px-4 py-[6px] rounded hover:bg-red-600">
              Join Anim8
            </Link>
          </li>
        </ul>
      </div>

      {/* Search Popup */}
      {showSearchPopup && (
        <motion.div
          className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="bg-gradient-to-r from-gray-100 to-white p-6 rounded-lg shadow-xl w-[90%] max-w-md">
            <h2 className="text-xl font-bold text-center mb-4 text-gray-800">
              Search Anim8
            </h2>
            <input
              type="text"
              placeholder="Search for an anime..."
              value={searchQuery}
              onChange={handleSearchInputChange}
              className="border border-gray-300 w-full p-[10px] rounded mb-[10px] focus:outline-none focus:ring focus:ring-red-300"
            />
            <ul className="bg-white border rounded shadow max-h-[200px] overflow-y-auto">
              {suggestions.map((movie) => (
                <li
                  key={movie.id}
                  className="px-[10px] py-[8px] cursor-pointer hover:bg-gray-100"
                  onClick={() => handleSuggestionClick(movie.id)}
                >
                  {movie.title}
                </li>
              ))}
              {searchQuery && suggestions.length === 0 && (
                <li className="px-[10px] py-[8px] text-gray-500">
                  No matches found.{" "}
                  <Link to="/movie" className="text-red-500 underline">
                    Request it?
                  </Link>
                </li>
              )}
            </ul>
            <button
              className="text-red-500 font-medium w-full hover:text-red-700 transition mt-[10px]"
              onClick={() => setShowSearchPopup(false)}
            >
              Close
            </button>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
