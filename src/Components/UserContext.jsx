import { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

// Create a context for user authentication
const UserContext = createContext();

// Custom hook to use the user context
export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};

// UserProvider component to wrap the app
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null); // `null` means not logged in

  const signUp = (userData) => {
    setUser(userData); // Update the user state after signup
  };

  return (
    <UserContext.Provider value={{ user, signUp }}>
      {children}
    </UserContext.Provider>
  );
};

// PropTypes validation
UserProvider.propTypes = {
  children: PropTypes.node.isRequired, // Define 'children' as required
};

// Export the UserContext if needed elsewhere
export { UserContext };
