import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

// Main Components
import App from "./App"; // Main site component
import About from "./Components/About";
import FAQ from "./Components/faq";
import Talk from "./Components/TalkToUs";
import Get from "./Components/GetTheApp";
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
//import AnimeCollection from "./Components/AnimeCollection";

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

// Other Pages
import SeasonsPage from "./Components/SeasonPage";
import EpisodesPage from "./Components/Episodes";
import SeasonDetails from "./Components/SeasonDetails"; 
import GetApp from "./Components/GetTheApp";// Import your SeasonDetails component

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/season", element: <SeasonsPage /> },
  { path: "/episodes/:id/:seasonId", element: <EpisodesPage /> }, // Updated to handle both movie id and seasonId
  { path: "/season/:id", element: <SeasonDetails /> }, // Add route for SeasonDetails
  { path: "/faqs", element: <FAQ /> },
  { path: "/about", element: <About /> },
  { path: "/trivias", element: <Trivias /> },
  { path: "/anime-films", element: <AnimeF /> },
  { path: "/trailers", element: <Trailers /> },
  { path: "/anime-series", element: <AnimeS /> },
  { path: "/toonedin", element: <Toons /> },
  { path: "/whatsgood", element: <WhatsGood /> },
  { path: "/pixar", element: <Pixar /> },
  { path: "/dreamworks", element: <DreamWorks /> },
  { path: "/disney", element: <Disney /> },
  { path: "/netflix", element: <Netflix /> },
  //{ path: "/anime-collection", element: <AnimeCollection /> },
  { path: "/marvel", element: <Marvel /> },
  { path: "/dc", element: <DC /> },
  { path: "/get", element: <Get /> },
  { path: "/talk", element: <Talk /> },
  { path: "/detective", element: <DetectiveConan /> },
  { path: "/one-piece", element: <OnePiece /> },
  { path: "/sword", element: <Sword /> },
  { path: "/lupin", element: <Lupin /> },
  { path: "/bleach", element: <Bleach /> },
  { path: "/ghost", element: <Ghost /> },
  { path: "/psycho", element: <Psycho /> },
  { path: "/fullmetal", element: <FullMetal /> },
  { path: "/garden", element: <Garden /> },
  { path: "/anime/:id", element: <SeasonsPage /> },
  { path: "/pokemon", element: <Pokemon /> },
  { path: "/get", element: <GetApp /> },
  {path : "/illumination", element: <Illumination />},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);