import { Link } from "react-router-dom";
import { useState } from "react";

const NavLinks = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const links = [
    {
      name: "Hey Ani",
      submenu: true,
      sublinks: [
        {
          sublink: [
            { name: "About", link: "/about" },
            { name: "FAQs", link: "/faqs" },
          ],
        },
      ],
    },
    {
      name: "Toonz Hub",
      submenu: true,
      sublinks: [
        {
          sublink: [
            { name: "Pixar", link: "/pixar" },
            { name: "DreamWorks", link: "/dreamworks" },
            { name: "Disney", link: "/disney" },
            { name: "Netflix", link: "/netflix" },
            { name : "Illumination", link: "/illumination"},
            {
              // sublink: [
              //   { name: "Marvel", link: "/marvel" },
              //   { name: "DC", link: "/dc" },
              // ],
            },
          ],
        },
      ],
    },
    {
      name: "Anim8 Buddy",
      submenu: true,
      sublinks: [
        {
          sublink: [
            { name: "Trailers", link: "/trailers" },
            { name: "Trivias", link: "/trivias" },
            // { name: "Tooned In", link: "/toonedin" },
            { name: "Whatsup?", link: "/whatsgood" },
          ],
        },
      ],
    },
    {
      name: "Anime Freak",
      submenu: true,
      sublinks: [
        {
          sublink: [
            { name: "Anime Films", link: "/anime-films" },
            { name: "Anime Series", link: "/anime-series" },
        //    { name: "Anime Films Collections", link: "/anime-collection" },
          ],
        },
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
          <div className="px-4 py-3 cursor-pointer text-left md:cursor-pointer group relative">
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
                className={`bg-white shadow-lg rounded-lg py-4 px-6 transition-all duration-300 transform ${
                  openIndex === index
                    ? "opacity-100 scale-100 visible"
                    : "opacity-0 scale-95 invisible"
                } md:absolute md:left-0 md:top-20 md:shadow-md md:w-64 w-full ${
                  openIndex === index ? "block" : "hidden"
                }`}
              >
                {link.sublinks.map((sublinkGroup, subIndex) => (
                  <div key={subIndex} className="mb-4">
                    <h2 className="text-md font-semibold text-gray-800 mb-2">
                      {sublinkGroup.Head}
                    </h2>
                    <ul className="space-y-2">
                      {sublinkGroup.sublink.map((slink, slinkIndex) => (
                        <li key={slinkIndex} className="group">
                          {slink.sublink ? (
                            <div>
                              <Link
                                to={slink.link}
                                className="text-sm text-gray-600 hover:text-blue-500 transition duration-300"
                              >
                                {slink.name}
                              </Link>
                              <ul className="ml-4 space-y-2">
                                {slink.sublink.map((subItem, subItemIndex) => (
                                  <li
                                    key={subItemIndex}
                                    className="text-sm text-gray-600 hover:text-blue-500 transition duration-300"
                                  >
                                    <Link to={subItem.link}>{subItem.name}</Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ) : (
                            <Link
                              to={slink.link}
                              className="text-sm text-gray-600 hover:text-blue-500 transition duration-300"
                            >
                              {slink.name}
                            </Link>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </>
  );
};

export default NavLinks;
