import Navbar from "../src/Components/Navbar";
import { Link } from 'react-router-dom';
import { useState } from 'react';

const ContactLoginPage = () => {
  const [contactFormData, setContactFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [loginFormData, setLoginFormData] = useState({
    email: '',
    password: ''
  });

  const handleContactChange = (e) => {
    const { name, value } = e.target;
    setContactFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    alert(`Message sent by: ${contactFormData.name}`);
    setContactFormData({ name: '', email: '', message: '' }); // Reset form
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    alert(`Logged in with email: ${loginFormData.email}`);
    setLoginFormData({ email: '', password: '' }); // Reset form
  };

  return (
    <div>
      <Navbar />

      <div className="relative flex flex-col md:flex-row justify-between gap-12 p-8 h-screen bg-gray-100">
        {/* Contact Section */}
        <section className="w-full md:w-1/2 bg-white shadow-md rounded-lg p-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">Contact Me</h2>
          <form onSubmit={handleContactSubmit} className="flex flex-col gap-4">
            <input
              className="p-3 border rounded"
              type="text"
              name="name"
              placeholder="Your Name"
              value={contactFormData.name}
              onChange={handleContactChange}
              required
            />
            <input
              className="p-3 border rounded"
              type="email"
              name="email"
              placeholder="Your Email"
              value={contactFormData.email}
              onChange={handleContactChange}
              required
            />
            <textarea
              className="p-3 border rounded"
              name="message"
              placeholder="Your Message"
              rows="4"
              value={contactFormData.message}
              onChange={handleContactChange}
              required
            />
            <button
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors duration-300"
              type="submit"
            >
              Send Message
            </button>
          </form>
        </section>

        {/* Login Section */}
        <section className="w-full md:w-1/2 bg-white shadow-md rounded-lg p-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">Login</h2>
          <form onSubmit={handleLoginSubmit} className="flex flex-col gap-4">
            <input
              className="p-3 border rounded"
              type="email"
              name="email"
              placeholder="Email Address"
              value={loginFormData.email}
              onChange={handleLoginChange}
              required
            />
            <input
              className="p-3 border rounded"
              type="password"
              name="password"
              placeholder="Password"
              value={loginFormData.password}
              onChange={handleLoginChange}
              required
            />
            <button
              className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700 transition-colors duration-300"
              type="submit"
            >
              Login
            </button>
          </form>
          <div className="text-center text-gray-700 mt-4">
            <p>New to Anim8?</p>
            <Link to="/" className="text-blue-500 hover:underline">Create an Account</Link>
          </div>
        </section>
      </div>

      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-6 md:mb-0">
              <h2 className="text-xl font-bold mb-2">Get the App</h2>
              <p className="text-gray-400">Download our app for the best experience.</p>
              <div className="mt-4">
                <a href="#" className="text-yellow-500 hover:underline">Download on the App Store</a>
                <br />
                <a href="#" className="text-yellow-500 hover:underline">Get it on Google Play</a>
              </div>
            </div>

            <div className="mb-6 md:mb-0">
              <h2 className="text-xl font-bold mb-2">More</h2>
              <ul>
                <li>
                  <Link to="/about" className="text-gray-400 hover:underline">About Us</Link>
                </li>
                <li>
                  <Link to="/contact" className="text-gray-400 hover:underline">Contact</Link>
                </li>
                <li>
                  <Link to="/privacy" className="text-gray-400 hover:underline">Privacy Policy</Link>
                </li>
                <li>
                  <Link to="/terms" className="text-gray-400 hover:underline">Terms of Service</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Anim8. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default TalkToUs;
