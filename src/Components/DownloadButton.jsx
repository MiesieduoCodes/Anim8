import { useContext } from "react";
import PropTypes from "prop-types"; // Import PropTypes
import { AuthContext } from "./AuthContext";

const DownloadButton = ({ movieTitle }) => {
  const { isLoggedIn } = useContext(AuthContext);

  const handleDownload = () => {
    if (isLoggedIn) {
      // Allow download
      console.log(`Downloading ${movieTitle}...`);
    } else {
      // Redirect to login page
      window.location.href = "/login";
    }
  };

  return (
    <button onClick={handleDownload}>Download {movieTitle}</button>
  );
};

// Add PropTypes validation
DownloadButton.propTypes = {
  movieTitle: PropTypes.string.isRequired, // Validate movieTitle as a required string
};

export default DownloadButton;
