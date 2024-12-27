import { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { getAuth, signOut, onAuthStateChanged } from 'firebase/auth';
import { initializeApp } from 'firebase/app';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKE0dQ32aXLOBfSwAFazOWxfMWQznaTmY",
  authDomain: "paymentslip-90abf.firebaseapp.com",
  projectId: "paymentslip-90abf",
  storageBucket: "paymentslip-90abf.appspot.com",
  messagingSenderId: "39407549314",
  appId: "1:39407549314:web:3edd3d343be9e8bcff2d9b",
  measurementId: "G-XJ4L5H9QLD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Create AuthContext
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // User will be null if not logged in

  // Listen for changes in the authentication state
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const login = (userData) => {
    setUser(userData); // This can be replaced with actual login logic if needed
  };

  const logout = async () => {
    await signOut(auth);
    setUser(null); // Update user state upon logout
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// PropTypes validation
AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

// useAuth hook to access context
export const useAuth = () => {
  return useContext(AuthContext);
};
