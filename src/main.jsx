import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

// Main Components
import App from "./App";
import About from "./Components/About";
import FAQ from "./Components/faq";
import Talk from "./Components/TalkToUs";
import GetApp from "./Components/GetTheApp";
import Trivias from "./Components/Trivias";
import Trailers from "./Components/Trailers";
import WhatsGood from "./Components/Whatsup";
import Toons from "./Components/ToonedIn";

// Animation Collections
import Pixar from "./Components/Pixar";
import DreamWorks from "./Components/Dreamworks";
import Disney from "./Components/Disney";
import Netflix from "./Components/Netflix";
import Marvel from "./Components/Marvel";
import DC from "./Components/DC";
import AnimeF from "./Components/AnimeFilms";
import AnimeS from "./Components/AnimeSeries";

// Anime Shows and Movies
import DetectiveConan from "./Components/DetectiveConan";
import OnePiece from "./Components/OnePiece";
import Sword from "./Components/Sword";
import Lupin from "./Components/Lupin";
import Bleach from "./Components/Bleach";
import Ghost from "./Components/GhostInAShell";
import Psycho from "./Components/Psycho";
import FullMetal from "./Components/FullMetalAlchemist";
import Garden from "./Components/The Garden of Sinners";
import Pokemon from "./Components/Pokemon";
import Illumination from "./Components/Illumination";
import Movie from "./Components/MovieCollection";
// Episodes and Seasons
import SeasonsPage from "./Components/SeasonPage";
import EpisodesPage from "./Components/Episodes";
import SeasonDetails from "./Components/SeasonDetails";
import Hero from "./Components/Hero";

// Import MusicProvider
import { MusicProvider } from "../src/MusicContext"; // Adjust the path as needed

const router = createBrowserRouter([
  // Home
  { path: "/", element: <App /> },

  // General Pages
  { path: "/faqs", element: <FAQ /> },
  { path: "/about", element: <About /> },
  { path: "/trivias", element: <Trivias /> },
  { path: "/trailers", element: <Trailers /> },
  { path: "/toonedin", element: <Toons /> },
  { path: "/whatsgood", element: <WhatsGood /> },
  { path: "/talk", element: <Talk /> },
  { path: "/get", element: <GetApp /> },
  { path: "/hero", element: <Hero /> },

  // Animation Collections
  { path: "/pixar", element: <Pixar /> },
  { path: "/dreamworks", element: <DreamWorks /> },
  { path: "/disney", element: <Disney /> },
  { path: "/netflix", element: <Netflix /> },
  { path: "/marvel", element: <Marvel /> },
  { path: "/dc", element: <DC /> },
  { path: "/anime-films", element: <AnimeF /> },
  { path: "/anime-series", element: <AnimeS /> },

  // Anime Shows and Movies
  { path: "/detective", element: <DetectiveConan /> },
  { path: "/one-piece", element: <OnePiece /> },
  { path: "/sword", element: <Sword /> },
  { path: "/lupin", element: <Lupin /> },
  { path: "/bleach", element: <Bleach /> },
  { path: "/ghost", element: <Ghost /> },
  { path: "/psycho", element: <Psycho /> },
  { path: "/fullmetal", element: <FullMetal /> },
  { path: "/garden", element: <Garden /> },
  { path: "/pokemon", element: <Pokemon /> },
  { path: "/illumination", element: <Illumination /> },
  { path: "/movie", element: <Movie /> },

  // Episodes and Seasons
  { path: "/season", element: <SeasonsPage /> },
  { path: "/episodes/:id/:seasonId", element: <EpisodesPage /> }, // Supports dynamic movie and season IDs
  { path: "/season/:id", element: <SeasonDetails /> },
  { path: "/anime/:id", element: <SeasonsPage /> }, // Reusing for anime seasons
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* Wrap the RouterProvider with MusicProvider */}
    <MusicProvider>
      <RouterProvider router={router} />
    </MusicProvider>
  </React.StrictMode>
);
