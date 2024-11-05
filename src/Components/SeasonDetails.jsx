import { Link } from 'react-router-dom';
import movies from '../Constants/data'; // Import your movies data

const SeasonDetails = () => {

  const queryParams = new URLSearchParams(window.location.search);
  const animeTitle = queryParams.get('title');
  //alert (animeTitle);
  const result = movies.find(movies => movies.title === animeTitle);

  return (
    <div className="bg-gray-200 min-h-screen p-6">
      <Link to="/anime" className="text-blue-500 underline">Back to All Anime</Link>
      <h1 className="text-4xl font-bold mb-4">{result.title} - Season</h1>
      <p className="text-lg mb-6">{result.synopsis}</p>
      <h2 className="text-3xl font-semibold mb-4">Episodes</h2>
      <ul className="list-disc pl-6">

      </ul>
    </div>
  );
};

export default SeasonDetails;