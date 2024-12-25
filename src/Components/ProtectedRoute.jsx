import React from "react";
import PropTypes from "prop-types";
import { Route, Navigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { isLoggedIn } = React.useContext(AuthContext);

  return (
    <Route
      {...rest}
      element={
        isLoggedIn ? (
          <Component />
        ) : (
          <Navigate
            to={{
              pathname: "/login",
              state: { from: rest.location }, // Update for `rest.location`
            }}
          />
        )
      }
    />
  );
};

// Add PropTypes validation
ProtectedRoute.propTypes = {
  component: PropTypes.elementType.isRequired, // Validate that 'component' is a React component
  location: PropTypes.object, // Validate 'location' as an object (optional, as it's accessed via props)
};

export default ProtectedRoute;
