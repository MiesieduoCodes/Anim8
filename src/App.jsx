import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import PropTypes from 'prop-types';
import { UserProvider, useUser } from './Components/UserContext';

// Import General Pages
import FAQ from "./Components/faq";
import Talk from "./Components/TalkToUs";
import GetApp from "./Components/GetTheApp";
import Trivias from "./Components/Trivias";
import Trailers from "./Components/Trailers";
import WhatsGood from "./Components/Whatsup";
import Toons from "./Components/ToonedIn";
import EpisodesPage from "./Components/Episodes";

// Import Animation Collections
import Pixar from "./Components/Pixar";
import DreamWorks from "./Components/Dreamworks";
import Disney from "./Components/Disney";
import Netflix from "./Components/Netflix";
import Marvel from "./Components/Marvel";
import DC from "./Components/DC";
import AnimeF from "./Components/AnimeFilms";
import AnimeS from "./Components/AnimeSeries";
import Illumination from "./Components/Illumination";

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const { user } = useUser();

  if (!user) {
    return <Navigate to="/signup" replace />;
  }

  return children;
};

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

const App = () => {
  return (
    <UserProvider>
      <Router>
        <div className="app-container relative min-h-screen">
          <Routes>
            <Route path="/faqs" element={<FAQ />} />
            <Route path="/talk" element={<Talk />} />
            <Route path="/get" element={<GetApp />} />
            <Route path="/trivias" element={<Trivias />} />
            <Route path="/trailers" element={<Trailers />} />
            <Route path="/whatsgood" element={<WhatsGood />} />
            <Route path="/toonedin" element={<Toons />} />
            <Route path="/anime-series" element={<AnimeS />} />

            <Route path="/pixar" element={<ProtectedRoute><Pixar /></ProtectedRoute>} />
            <Route path="/dreamworks" element={<ProtectedRoute><DreamWorks /></ProtectedRoute>} />
            <Route path="/disney" element={<ProtectedRoute><Disney /></ProtectedRoute>} />
            <Route path="/netflix" element={<ProtectedRoute><Netflix /></ProtectedRoute>} />
            <Route path="/marvel" element={<ProtectedRoute><Marvel /></ProtectedRoute>} />
            <Route path="/dc" element={<ProtectedRoute><DC /></ProtectedRoute>} />
            <Route path="/anime-films" element={<ProtectedRoute><AnimeF /></ProtectedRoute>} />
            <Route path="/episodes/:id/:seasonId" element={<ProtectedRoute><EpisodesPage /></ProtectedRoute>} />
            <Route path="/illumination" element={<ProtectedRoute><Illumination /></ProtectedRoute>} />
          </Routes>
        </div>
      </Router>
    </UserProvider>
  );
};

export default App;
