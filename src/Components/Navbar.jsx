import { Link } from "react-router-dom";
import NavLinks from "./NavLinks";
import { RiMenu4Fill, RiCloseFill } from "react-icons/ri";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  // Example content to search through
  const content = [
    "Detective Conan",
    "One Piece",
    "Sword Art Online",
    "Bleach",
    "Ghost in the Shell",
    "Fullmetal Alchemist",
    "Psycho-Pass",
    "The Garden Of Sinners",
    // Add more items as needed
  ];

  const handleScroll = () => {
    setScrolled(window.scrollY > 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);

    // Update search results based on the search term
    if (term) {
      const results = content.filter(item =>
        item.toLowerCase().includes(term)
      );
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "bg-gray-800 shadow-lg" : "bg-white"
      }`}
    >
      <div className="flex items-center font-medium justify-between px-4 md:px-8">
        <div className="z-50 p-5 md:w-auto w-full flex justify-between">
          <h1 className="md:cursor-pointer text-3xl h-9">
            Anim<span className="text-red-500">8</span>
          </h1>
          <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
            {open ? <RiCloseFill /> : <RiMenu4Fill />}
          </div>
        </div>

        {/* Search Input for Desktop with Entrance Animation */}
        <motion.div
          className="relative hidden md:flex items-center flex-grow"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <input
            type="text"
            placeholder="Search Movies or Shows..."
            value={searchTerm}
            onChange={handleSearch}
            className="border rounded-lg p-2 w-full max-w-xs focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          {searchTerm && searchResults.length > 0 && (
            <motion.div
              className="absolute z-20 bg-white text-black shadow-lg rounded-lg w-full mt-2 max-h-72 overflow-y-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {searchResults.map((result, index) => (
                <Link
                  key={index}
                  to={`/${result.toLowerCase().replace(/\s+/g, '-')}`}
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  {result}
                </Link>
              ))}
            </motion.div>
          )}
        </motion.div>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex items-center gap-8">
          <li>
            <Link to="/" className="py-7 px-3 inline-block">
              Home
            </Link>
          </li>
          <NavLinks />
          <li>
            <Link to="/talk" className="py-7 px-3 inline-block">
              Talk To Anim8
            </Link>
          </li>
        </ul>

        {/* Mobile Menu */}
        <ul
          className={`md:hidden bg-white absolute top-0 left-0 z-10 w-full h-screen py-24 pl-4 transition-transform duration-500 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Search Input for Mobile */}
          <div className="relative mb-4">
            <input
              type="text"
              placeholder="Search Movies or Shows..."
              value={searchTerm}
              onChange={handleSearch}
              className="border rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            {searchTerm && searchResults.length > 0 && (
              <motion.div
                className="absolute z-20 bg-white text-black shadow-lg rounded-lg w-full mt-2 max-h-72 overflow-y-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {searchResults.map((result, index) => (
                  <Link
                    key={index}
                    to={`/${result.toLowerCase().replace(/\s+/g, '-')}`}
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    {result}
                  </Link>
                ))}
              </motion.div>
            )}
          </div>

          {/* Mobile Navigation Links */}
          <li>
            <Link to="/" className="py-7 px-3 inline-block">
              Home
            </Link>
          </li>
          <NavLinks />
          <li>
            <Link to="/talk" className="py-7 px-3 inline-block">
              Talk To Anim8
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
