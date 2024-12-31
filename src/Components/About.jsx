// src/About.jsx
import Navbar from "./Navbar";
import { Link } from 'react-router-dom';
import Footer from "./Footer";
import { FaInstagramSquare, FaFacebook, FaWhatsapp } from "react-icons/fa";

const About = () => {
  return (
    <div className="main-content pt-24 bg-gray-900">
      <Navbar />
      
      {/* Welcome Section */}
      <div
        className="bg-cover bg-center py-20 relative"
        style={{ backgroundImage: "url('/welcome-bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
        <div className="relative z-10 px-6 md:px-12">
          <h1 className="text-5xl font-bold text-center mb-6 md:text-6xl text-yellow-500">Welcome to Anim8</h1>
          <p className="text-center text-lg font-light mb-6 md:text-xl text-gray-300">
            Your ultimate destination for top-rated animated movies, anime series, and films! We&apos;re passionate about bringing you the best of the animation world, carefully curated to ensure you have an unforgettable viewing experience. From action-packed adventures to heartwarming tales, our library is packed with exciting content for all ages.
          </p>
          <p className="text-center text-lg font-light mb-6 md:text-xl text-gray-300">
            At Anim8, we&apos;re dedicated to providing a premium platform for animation enthusiasts to access high-quality, top-rated content. Our extensive library features a wide range of animated movies, anime series, and films, carefully selected to cater to diverse tastes and preferences. Whether you&apos;re a fan of classic cartoons or the latest anime releases, we&apos;ve got you covered. Explore our site, discover new favorites, and enjoy a seamless viewing experience.
          </p>
          <p className="text-center text-lg font-light md:text-xl text-gray-300">
            Join our community today and get ready to Anim8 your world!
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <div
        className="bg-cover bg-center py-20 px-6 relative"
        style={{ backgroundImage: "url('/mission-bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-yellow-500">Our Mission</h2>
          <p className="text-xl mb-4 text-gray-300">To become the ultimate destination for animation lovers, offering:</p>
          <ul className="list-disc list-inside mb-6 text-gray-200">
            <li>Top-rated films, carefully curated to ensure quality over quantity</li>
            <li>Data-efficient downloads, saving you time and resources</li>
            <li>Diverse genres: Action, Mystery, Adventure, and more!</li>
          </ul>
        </div>
      </div>

      {/* Vision Section */}
      <div
        className="bg-cover bg-center py-20 px-6 relative"
        style={{ backgroundImage: "url('/vision-bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-yellow-500">Our Vision</h2>
          <p className="text-xl mb-6 text-gray-300">To evolve into a renowned animation production firm, creating original content that inspires and entertains.</p>
          <h3 className="text-3xl font-semibold mb-4 text-yellow-500">Join Us:</h3>
          <p className="text-lg mb-4 text-gray-200">Follow us on:</p>
          <div className="flex justify-center space-x-4">
            <Link to="/instagram" className="text-5xl text-red-500 hover:text-red-400"><FaInstagramSquare /></Link>
            <Link to="/facebook" className="text-5xl text-blue-500 hover:text-blue-400"><FaFacebook /></Link>
            <Link to="/whatsapp" className="text-5xl text-green-500 hover:text-green-400"><FaWhatsapp /></Link>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default About;
