import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UsingHooks from "./UsingHook";

// Import General Pages
import FAQ from "./Components/faq";
import Talk from "./Components/TalkToUs";
import GetApp from "./Components/GetTheApp";
import Trivias from "./Components/Trivias";
import Trailers from "./Components/Trailers";
import WhatsGood from "./Components/Whatsup";
import Toons from "./Components/ToonedIn";

// Import Animation Collections
import Pixar from "./Components/Pixar";
import DreamWorks from "./Components/Dreamworks";
import Disney from "./Components/Disney";
import Netflix from "./Components/Netflix";
import Marvel from "./Components/Marvel";
import DC from "./Components/DC";
import AnimeF from "./Components/AnimeFilms";
import AnimeS from "./Components/AnimeSeries";

// Import Anime Shows and Movies
import DetectiveConan from "./Components/DetectiveConan";
import OnePiece from "./Components/OnePiece";
import Sword from "./Components/Sword";
import Lupin from "./Components/Lupin";
import Bleach from "./Components/Bleach";
import Ghost from "./Components/GhostInAShell";
import Psycho from "./Components/Psycho";
import FullMetal from "./Components/FullMetalAlchemist";
import Pokemon from "./Components/Pokemon";
import Illumination from "./Components/Illumination";

const App = () => {
  return (
      <Router>
        <div className="app-container relative min-h-screen">
          {/* Main Content */}
          <Routes>
            {/* General Pages */}
            <Route path="/faqs" element={<FAQ />} />
            <Route path="/talk" element={<Talk />} />
            <Route path="/get" element={<GetApp />} />
            <Route path="/trivias" element={<Trivias />} />
            <Route path="/trailers" element={<Trailers />} />
            <Route path="/whatsgood" element={<WhatsGood />} />
            <Route path="/toons" element={<Toons />} />
            <Route path="/pay" element={<UsingHooks />} />

            {/* Animation Collections */}
            <Route path="/pixar" element={<Pixar />} />
            <Route path="/dreamworks" element={<DreamWorks />} />
            <Route path="/disney" element={<Disney />} />
            <Route path="/netflix" element={<Netflix />} />
            <Route path="/marvel" element={<Marvel />} />
            <Route path="/dc" element={<DC />} />
            <Route path="/anime-films" element={<AnimeF />} />
            <Route path="/anime-series" element={<AnimeS />} />

            {/* Anime Shows and Movies */}
            <Route path="/detective" element={<DetectiveConan />} />
            <Route path="/one-piece" element={<OnePiece />} />
            <Route path="/sword" element={<Sword />} />
            <Route path="/lupin" element={<Lupin />} />
            <Route path="/bleach" element={<Bleach />} />
            <Route path="/ghost" element={<Ghost />} />
            <Route path="/psycho" element={<Psycho />} />
            <Route path="/fullmetal" element={<FullMetal />} />
            <Route path="/pokemon" element={<Pokemon />} />
            <Route path="/illumination" element={<Illumination />} />
          </Routes>
        </div>
      </Router>
  );
};

export default App;