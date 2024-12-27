import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import Navbar from "./Navbar";
import Footer from "./Footer";

const firebaseConfig = {
    apiKey: "AIzaSyBKE0dQ32aXLOBfSwAFazOWxfMWQznaTmY",
    authDomain: "paymentslip-90abf.firebaseapp.com",
    projectId: "paymentslip-90abf",
    storageBucket: "paymentslip-90abf.appspot.com",
    messagingSenderId: "39407549314",
    appId: "1:39407549314:web:3edd3d343be9e8bcff2d9b",
    measurementId: "G-XJ4L5H9QLD"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!termsAccepted) {
      alert('You must accept the terms and conditions');
      return;
    }

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      console.log('Logged in as:', user.email);
      alert('Login successful!');
      navigate('/dashboard'); // Adjust the redirect as needed
    } catch (error) {
      console.error('Error during login:', error);
      alert('Login failed. Please try again.');
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 p-4">
      <Navbar />
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm flex-grow">
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">Login to Your Account</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
          />
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={termsAccepted}
              onChange={(e) => setTermsAccepted(e.target.checked)}
              className="mr-2"
            />
            <label className="text-sm text-gray-600">
              I accept the <Link to="/terms" className="text-blue-500 hover:underline">terms and conditions</Link>.
            </label>
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-500 transition duration-200"
          >
            Login
          </button>
        </form>
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            Don&apos;t have an account?{' '}
            <Link to="/signup" className="text-blue-500 hover:underline">
              Sign up here
            </Link>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;