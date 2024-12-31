
// NavLinks.jsx

import { Link } from "react-router-dom";

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

const NavLinks = () => {
  return (
    <>
      {links.map((link, index) => (
        <li key={index} className="relative group py-1">
          <span className="cursor-pointer font-medium hover:text-red-500">
            {link.name}
          </span>
          {/* Dropdown Menu */}
          <ul className="absolute left-0 top-full bg-white shadow-lg rounded-lg hidden group-hover:block w-40">
            {link.sublinks.map((sublink, subIndex) => (
              <li key={subIndex} className="py-1">
                <Link
                  to={sublink.link}
                  className="block px-2 hover:text-red-500"
                >
                  {sublink.name}
                </Link>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </>
  );
};

export default NavLinks;