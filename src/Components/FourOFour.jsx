import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from './Navbar';
import Footer from './Footer';

const NotFoundPage = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-900 to-purple-800 px-6">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center text-black"
        >
          <motion.h1
            className="text-6xl font-extrabold text-black mb-4"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            404
          </motion.h1>
          <motion.p
            className="text-lg text-black mb-8"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Oops! The page you&apos;re looking for has gone missing in the world of animations.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="relative"
        >
          {/* Animated Character */}
          <motion.img
            src=""
            className="w-64 mb-8"
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Link
            to="/movie"
            className="px-6 py-3 bg-pink-500 hover:bg-pink-600 text-white font-bold rounded-full shadow-lg transition-transform duration-200 transform hover:scale-105"
          >
            Request Movie Instead
          </Link>
        </motion.div>
      </div>
      <Footer className="relative z-10" />
    </div>
  );
};

export default NotFoundPage;
