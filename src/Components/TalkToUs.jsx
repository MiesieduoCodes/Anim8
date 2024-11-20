import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules"; // Import Swiper Autoplay module
import "swiper/css";
import { FaInstagramSquare } from 'react-icons/fa';
import { PiYoutubeLogo } from 'react-icons/pi';
import { SiThreads } from 'react-icons/si';
import emailjs from 'emailjs-com';
import FloatingMusicButton from '../FloatingMusicButton';

const ContactLoginPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await emailjs.send(
        'service_qzz4yef',
        'template_w1e9hgu',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        'g3lutaVJ_7kGr-iUO'
      );
      console.log('SUCCESS!', response.status, response.text);
      setSuccess(true);
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      console.error('FAILED...', err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const toggleMusic = () => setIsMusicPlaying((prev) => !prev);

  const changeTrack = (index) => setCurrentTrackIndex(index);
  const slides = [
    {
      image: "https://wallpapers.com/images/hd/contact-us-background-1.jpg",
      title: "Get in Touch with Anim8",
      subtitle:
        "We'd love to hear from you! Reach out for any questions or support, and we’ll respond promptly.",
    },
    {
      image: "https://wallpapers.com/images/hd/contact-us-background-2.jpg",
      title: "Send Us Your Ideas",
      subtitle:
        "Whether you're an animator or an animation fan, share your thoughts and ideas with Anim8!",
    },
    {
      image: "https://wallpapers.com/images/hd/contact-us-background-3.jpg",
      title: "Stay Connected with Anim8",
      subtitle:
        "Follow us on social media and never miss an update on our latest releases and projects.",
    },
  ];
  

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
      <Navbar />
      <Swiper
  modules={[Autoplay]} // Enable autoplay
  autoplay={{
    delay: 3000, // Slide change interval in milliseconds
    disableOnInteraction: false, // Keep autoplay active even after interaction
  }}
  loop
  spaceBetween={0}
  slidesPerView={1}
  className="h-[calc(100vh-70px)] md:h-80 lg:h-96" // Adjusted height for better view in mobile
>
  {slides.map((slide, index) => (
    <SwiperSlide key={index}>
      <div
        className="relative bg-cover bg-center h-[calc(100vh-70px)] md:h-80 lg:h-96"
        style={{ backgroundImage: `url('${slide.image}')` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center px-4 sm:px-6 md:px-8 lg:px-10 text-center">
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
            {slide.title}
          </h1>
          <p className="text-white text-base sm:text-lg md:text-xl lg:text-2xl mt-3 sm:mt-4 md:mt-5">
            {slide.subtitle}
          </p>
        </div>
      </div>
    </SwiperSlide>
  ))}
</Swiper>
      <div className="main-content pt-20 flex justify-center">
        <div className="flex flex-col md:flex-row justify-center gap-12 p-6 md:p-10 max-w-6xl w-full">
          <section className="w-full md:w-1/2 bg-white shadow-lg rounded-lg p-8">
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
                className={`bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-6 rounded-lg ${
                  loading ? 'opacity-50 cursor-not-allowed' : 'hover:from-blue-600 hover:to-purple-700'
                } transition duration-300 ease-in-out`}
                disabled={loading}
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </section>

          <section className="w-full md:w-1/2 flex flex-col items-center gap-6 p-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg shadow-lg">
            <h2 className="text-2xl text-white font-semibold mb-4">Follow Us</h2>
            <div className="flex gap-6">
              <Link to="https://www.instagram.com/anim8official">
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
