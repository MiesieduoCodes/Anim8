import { Link, useNavigate } from "react-router-dom";
import NavLinks from "./NavLinks";
import { RiMenu4Fill, RiCloseFill } from "react-icons/ri";
import { useState, useEffect } from "react";
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
    <div className="z-50 p-4 md:w-auto w-full flex justify-between">
      <h1 className="md:cursor-pointer text-2xl font-bold">
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
    <ul className="hidden md:flex items-center gap-8">
      <li>
        <Link to="/" className="py-2 px-3 font-medium">
          Home
        </Link>
      </li>
      <NavLinks />
      <li>
        <Link to="/talk" className="py-2 px-3">
          Talk To Anim8
        </Link>
      </li>
      <li>
        <Link
          to="/signup"
          className="py-2 px-4 bg-red-500 text-white rounded hover:bg-red-600 transition duration-200"
        >
          Join Anim8
        </Link>
      </li>
    </ul>

    {/* Search Button (Desktop) */}
    <button
      className="hidden md:block text-red-500 text-2xl"
      onClick={() => setShowSearchPopup(true)}
    >
      <IoSearch />
    </button>

    {/* Mobile Menu */}
    <ul
      className={`md:hidden bg-white absolute top-0 left-0 z-10 w-full h-screen py-24 pl-6 transition-transform duration-500 ${
        open ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <li className="py-3">
        <Link to="/" className="inline-block">
          Home
        </Link>
      </li>
      <NavLinks />
      <li className="py-3">
        <Link to="/talk" className="inline-block">
          Talk To Anim8
        </Link>
      </li>
      <li className="py-3">
        <Link to="/signup" className="inline-block bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
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
      <div className="bg-gradient-to-r from-gray-100 to-white p-6 rounded-2xl shadow-xl w-80">
        <h2 className="text-xl font-bold text-center mb-4 text-gray-800">
          Search Anim8
        </h2>
        <input
          type="text"
          placeholder="Search for an anime..."
          value={searchQuery}
          onChange={handleSearchInputChange}
          className="border border-gray-300 w-full p-2 rounded mb-2 focus:outline-none focus:ring-2 focus:ring-red-300"
        />
        <ul className="bg-white border rounded shadow max-h-40 overflow-y-auto">
          {suggestions.map((movie) => (
            <li
              key={movie.id}
              className="px-3 py-2 cursor-pointer hover:bg-gray-100"
              onClick={() => handleSuggestionClick(movie.id)}
            >
              {movie.title}
            </li>
          ))}
          {searchQuery && suggestions.length === 0 && (
            <li className="px-3 py-2 text-gray-500">
              No matches found.{" "}
              <Link to="/movie" className="text-red-500 underline">
                Request it?
              </Link>
            </li>
          )}
        </ul>
        <button
          className="text-red-500 font-medium w-full hover:text-red-700 transition mt-3"
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
