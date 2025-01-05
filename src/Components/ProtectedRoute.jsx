import PropTypes from 'prop-types'; // Import PropTypes
import { Navigate } from 'react-router-dom';
import { useUser } from './UserContext'; // Adjust the path

const ProtectedRoute = ({ element: Component }) => {
  const { user } = useUser(); // Access user from context

  // If user is authenticated, render the component; otherwise, redirect to "/Signup"
  return user ? <Component /> : <Navigate to="./Signup.jsx" />;
};

// Prop types validation
ProtectedRoute.propTypes = {
  element: PropTypes.elementType.isRequired, // Ensure element is a React component
};

export default ProtectedRoute;
