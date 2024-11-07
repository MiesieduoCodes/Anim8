import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from "./Footer";
import { FaInstagramSquare } from "react-icons/fa";
import { PiYoutubeLogo } from "react-icons/pi";
import { SiThreads } from "react-icons/si";
import emailjs from 'emailjs-com';
import FloatingMusicButton from '../FloatingMusicButton'; // Import the FloatingMusicButton

const ContactLoginPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send(
      'service_qzz4yef',
      'template_w1e9hgu',
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      },
      'g3lutaVJ_7kGr-iUO'
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      setSuccess(true);
      setError(false);
      setFormData({ name: '', email: '', message: '' });
    })
    .catch((err) => {
      console.log('FAILED...', err);
      setSuccess(false);
      setError(true);
    })
    .finally(() => {
      setLoading(false);
    });
  };

  const toggleMusic = () => {
    setIsMusicPlaying(!isMusicPlaying);
    // Add logic to play/pause the music
  };

  const changeTrack = (index) => {
    setCurrentTrackIndex(index);
    // Add logic to change the track
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
      <Navbar />
      <div className="main-content pt-20 flex justify-center">
        <div className="flex flex-col md:flex-row justify-center gap-12 p-6 md:p-10 max-w-6xl w-full">
          <section className="w-full md:w-1/2 bg-white shadow-lg rounded-lg p-8 transform transition hover:shadow-2xl">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">Contact Anim8</h2>
            
            {success && <p className="text-green-600 text-center">Message sent successfully!</p>}
            {error && <p className="text-red-600 text-center">Failed to send message. Please try again later.</p>}
            
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <input 
                className="p-3 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-300" 
                type="text" 
                name="name" 
                placeholder="Your Name" 
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input 
                className="p-3 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-300" 
                type="email" 
                name="email" 
                placeholder="Your Email" 
                value={formData.email}
                onChange={handleChange}
                required
              />
              <textarea 
                className="p-3 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-300" 
                name="message" 
                placeholder="Your Message" 
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
              <button 
                type="submit" 
                className={`bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-6 rounded-lg hover:from-blue-600 hover:to-purple-700 transition duration-300 ease-in-out transform hover:scale-105 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                disabled={loading}
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </section>

          {/* Social/Login Section */}
          <section className="flex w-full md:w-1/2 flex-col justify-center items-center gap-6 p-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg shadow-lg transform transition hover:shadow-2xl">
            <h2 className="text-2xl text-white font-semibold mb-4">Follow Us</h2>
            <div className="flex gap-6">
              <Link to="https://www.instagram.com/anim8official?igsh=MWxuenc2ODFhMz1ZA==">
                <FaInstagramSquare className="text-5xl text-white hover:text-pink-400 transition duration-300 transform hover:scale-110" />
              </Link>
              <Link to="/about">
                <PiYoutubeLogo className="text-5xl text-white hover:text-red-400 transition duration-300 transform hover:scale-110" />
              </Link>
              <Link to="https://www.threads.net/@anim8official">
                <SiThreads className="text-5xl text-white hover:text-gray-300 transition duration-300 transform hover:scale-110" />
              </Link>
            </div>
          </section>
        </div>
      </div>

      <Footer />

      {/* Floating Music Button */}
      <FloatingMusicButton 
        isMusicPlaying={isMusicPlaying}
        toggleMusic={toggleMusic}
        currentTrackIndex={currentTrackIndex}
        changeTrack={changeTrack}
      />
    </div>
  );
};

export default ContactLoginPage;
