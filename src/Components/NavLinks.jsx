import { Link } from "react-router-dom";
import { useState } from "react";

const NavLinks = () => {
  const [openIndex, setOpenIndex] = useState(null);

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

  const toggleMenu = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      {links.map((link, index) => (
        <div key={index} className="relative group">
          <div className="px-4 py-2 cursor-pointer text-left">
            <h1
              className="flex justify-between items-center text-lg font-semibold group-hover:text-blue-500 transition-all duration-300"
              onClick={() => toggleMenu(index)}
            >
              {link.name}
              {link.submenu && (
                <span className="ml-2">
                  <svg
                    className={`w-6 h-6 transform ${
                      openIndex === index ? "rotate-180" : "rotate-0"
                    } transition-transform duration-300`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </span>
              )}
            </h1>

            {/* Submenu */}
            {link.submenu && (
              <div
                className={`bg-white shadow-lg rounded-lg py-3 px-4 transition-all duration-300 transform ${
                  openIndex === index
                    ? "opacity-100 scale-100 visible"
                    : "opacity-0 scale-95 invisible"
                } md:absolute md:left-0 md:top-20 md:w-64 w-full`}
              >
                <ul className="space-y-1">
                  {link.sublinks.map((sublink, subIndex) => (
                    <li
                      key={subIndex}
                      className="text-sm text-gray-600 hover:text-blue-500 transition duration-300"
                    >
                      <Link to={sublink.link}>{sublink.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      ))}
    </>
  );
};

export default NavLinks;
