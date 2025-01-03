import { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

// Create a context for user authentication
const UserContext = createContext();

export const useUser = () => {
  return useContext(UserContext);
};

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