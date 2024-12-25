import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../Firebase'; // Adjust the path to your firebase.js file
import Navbar from "./Navbar";
import Footer from "./Footer";

const SignupPayment = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [amount, setAmount] = useState(300);
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [bgColor, setBgColor] = useState('bg-blue-500');

  // Change background color periodically
  useEffect(() => {
    const colors = ['bg-blue-500', 'bg-green-500', 'bg-red-500', 'bg-purple-500', 'bg-yellow-500'];
    let index = 0;

    const interval = setInterval(() => {
      setBgColor(colors[index]);
      index = (index + 1) % colors.length;
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleSignup = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    if (!termsAccepted) {
      alert('You must accept the terms and conditions!');
      return;
    }

    try {
      // Save user details to Firestore without password hashing
      const docRef = await addDoc(collection(db, 'users'), {
        email,
        password, // Save the plain password (not recommended for production)
        phone,
        address,
        subscription: amount === 300 ? 'Monthly' : 'Yearly',
        signupDate: new Date().toISOString(),
      });

      console.log('User signed up with ID: ', docRef.id);
      alert('Signup successful! Proceeding to payment.');

      // Redirect to payment or next step
    } catch (error) {
      console.error('Error signing up: ', error);
      alert('Signup failed. Please try again.');
    }
  };

  return (
    <div className={`flex flex-col items-center justify-center min-h-screen p-4 transition-all duration-500 ${bgColor}`}>
      <Navbar />
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md mt-20">
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">Create an Account</h1>
        <form onSubmit={handleSignup} className="space-y-4">
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
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm Password"
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
          />
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Phone Number"
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
          />
          <textarea
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Address"
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
          />
          <div className="mb-4">
            <label htmlFor="amount" className="block text-sm font-medium mb-2 text-gray-700">Select Amount:</label>
            <select
              id="amount"
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
              className="block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            >
              <option value={300}>₦300 (Monthly)</option>
              <option value={3600}>₦3600 (Yearly)</option>
            </select>
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              id="terms"
              checked={termsAccepted}
              onChange={() => setTermsAccepted(!termsAccepted)}
              required
              className="mr-2"
            />
            <label htmlFor="terms" className="text-sm text-gray-600">
              I accept the{' '}
              <Link to="/terms" className="text-blue-500 hover:underline">
                Terms and Conditions
              </Link>
            </label>
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-500 transition duration-200"
          >
            Signup
          </button>
        </form>
        {/* Link to Login */}
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            Already have an account?{' '}
            <Link to="/login" className="text-blue-500 hover:underline">
              Login here
            </Link>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SignupPayment;
