import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./Components/ProtectedRoute";

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

          {/* Protected Animation Collections */}
          {[
            { path: "/pixar", component: Pixar },
            { path: "/dreamworks", component: DreamWorks },
            { path: "/disney", component: Disney },
            { path: "/netflix", component: Netflix },
            { path: "/marvel", component: Marvel },
            { path: "/dc", component: DC },
            { path: "/anime-films", component: AnimeF },
            { path: "/anime-series", component: AnimeS },
          ].map(({ path, component }) => (
            <Route
              key={path}
              path={path}
              element={
                <ProtectedRoute>
                  {component}
                </ProtectedRoute>
              }
            />
          ))}

          {/* Protected Anime Shows and Movies */}
          {[
            { path: "/detective", component: DetectiveConan },
            { path: "/one-piece", component: OnePiece },
            { path: "/sword", component: Sword },
            { path: "/lupin", component: Lupin },
            { path: "/bleach", component: Bleach },
            { path: "/ghost", component: Ghost },
            { path: "/psycho", component: Psycho },
            { path: "/fullmetal", component: FullMetal },
            { path: "/pokemon", component: Pokemon },
            { path: "/illumination", component: Illumination },
          ].map(({ path, component }) => (
            <Route
              key={path}
              path={path}
              element={
                <ProtectedRoute>
                  {component}
                </ProtectedRoute>
              }
            />
          ))}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
