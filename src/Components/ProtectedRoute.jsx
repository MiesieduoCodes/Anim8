import PropTypes from "prop-types";
import { Route, Navigate, useLocation } from "react-router-dom";
import { useAuth } from "./AuthContext"; // Adjust the path as necessary

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { user } = useAuth(); // Access user from AuthContext
  const location = useLocation(); // Get the current location

  return (
    <Route
      {...rest}
      element={
        user ? (
          <Component {...rest} />
        ) : (
          <Navigate
            to="/signup"
            state={{ from: location }} // Pass the current location for redirection after login
          />
        )
      }
    />
  );
};

// Add PropTypes validation
ProtectedRoute.propTypes = {
  component: PropTypes.elementType.isRequired, // Validate that 'component' is a React component
  location: PropTypes.object, // Validate 'location' as an object (optional, as it's accessed via useLocation)
};

export default ProtectedRoute;
