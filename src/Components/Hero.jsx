import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import Navbar from './Navbar';
import Footer from './Footer';
import SignupPage from './Signup'; // Assuming you have a SignupPage component
import { FaWhatsapp, FaFilm, FaMagic } from 'react-icons/fa';

const firebaseConfig = {
  apiKey: 'AIzaSyBKE0dQ32aXLOBfSwAFazOWxfMWQznaTmY',
  authDomain: 'paymentslip-90abf.firebaseapp.com',
  projectId: 'paymentslip-90abf',
  storageBucket: 'paymentslip-90abf.appspot.com',
  messagingSenderId: '39407549314',
  appId: '1:39407549314:web:3edd3d343be9e8bcff2d9b',
  measurementId: 'G-XJ4L5H9QLD',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const HeroWithLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isSignup, setIsSignup] = useState(false); // State to toggle between forms
  const navigate = useNavigate();

  const backgrounds = [
    'https://wallpapers.com/images/high/cartoons-in-madagascar-escape-2-africa-izj1z41a3vjuyenh.webp',
    'https://platform.polygon.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/24223176/STRANGE_WORLD_ONLINE_USE_fullcomp_317_39_6k_film.0013_a.jpg?quality=90&strip=all&crop=25.180921052632%2C0%2C62.8125%2C100&w=2400',
    'https://m.media-amazon.com/images/S/pv-target-images/83a15e35dec3984d13ea6eb76857106b3bf03470f6f8f571de2464a4cd3b21c2._SX1440_FMwebp_.jpg',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [backgrounds.length]);

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
      navigate('/'); // Adjust the redirect as needed
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-col md:flex-row flex-grow">
        {/* Hero Section */}
        <div className="relative flex-grow h-screen">
          <div className="absolute inset-0">
            <AnimatePresence initial={false}>
              <motion.div
                key={currentSlideIndex}
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '-100%' }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${backgrounds[currentSlideIndex]})` }}
              />
            </AnimatePresence>
          </div>
          <div className="relative flex items-center justify-center h-full bg-black bg-opacity-50 px-4">
            <main className="text-center">
              <motion.h1
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 0.5 }}
                className="text-3xl md:text-5xl text-white font-bold"
              >
                Welcome to Anim8
              </motion.h1>
              <p className="text-white text-sm md:text-lg mt-4">
                Your One-Stop site for Top-Rated Anime Content
              </p>
            </main>
          </div>
        </div>

        {/* Login or Signup Section */}
        <div className="flex items-center justify-center flex-grow bg-gray-100 p-8">
          <div className="w-full max-w-md">
            {isSignup ? (
              <SignupPage /> // Render the SignupPage component when isSignup is true
            ) : (
              <>
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
                      id="terms"
                      checked={termsAccepted}
                      onChange={(e) => setTermsAccepted(e.target.checked)}
                      className="mr-2"
                    />
                    <label htmlFor="terms" className="text-sm text-gray-600">
                      I accept the terms and conditions
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
                    <button
                      onClick={() => setIsSignup(true)} // Switch to signup form when clicked
                      className="text-blue-500 hover:underline"
                    >
                      Sign up here
                    </button>
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Cards Section */}
      <div className="py-10 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Explore Our Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 md:px-10">
          {/* Card 1 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white rounded-lg shadow-lg p-6"
          >
            <FaWhatsapp className="text-green-500 text-5xl mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Request Movies & Content</h3>
            <p className="text-gray-600 mb-4">
              Easily request your favorite movies and animated content directly through WhatsApp.
            </p>
            <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">
              Request Now
            </button>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white rounded-lg shadow-lg p-6"
          >
            <FaFilm className="text-blue-500 text-5xl mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Stream High-Quality Films</h3>
            <p className="text-gray-600 mb-4">
              Enjoy a wide range of top-rated animated films in stunning quality anytime, anywhere.
            </p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
              Start Streaming
            </button>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white rounded-lg shadow-lg p-6"
          >
            <FaMagic className="text-purple-500 text-5xl mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Discover Magic Moments</h3>
            <p className="text-gray-600 mb-4">
              Dive into the magical world of animations and explore content that inspires.
            </p>
            <button className="bg-purple-500 text-white px-4 py-2 rounded-md hover:bg-purple-600">
              Discover Now
            </button>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default HeroWithLogin;
