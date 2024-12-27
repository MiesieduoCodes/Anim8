import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../Firebase'; // Adjust the path to your firebase.js file
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useAuth } from './AuthContext'; // Import AuthContext
import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';

const SignupPayment = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [amount, setAmount] = useState(300);
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [bgColor, setBgColor] = useState('bg-blue-500');
  const { login } = useAuth(); // Access login function from AuthContext
  const navigate = useNavigate(); // For navigation

  // Initialize Flutterwave hook inside the component
  const config = {
    public_key: 'FLWPUBK_TEST-3614527a79f7edf4d1a6e7dc93674123-X', // Replace with your actual Flutterwave public key
    tx_ref: Date.now(),
    amount: selectedPlan === 'Monthly' ? 300 : 3600,
    currency: 'NGN',
    payment_options: 'card,mobilemoney,ussd',
    customer: {
      email: 'annim8official@gmail.com',
      phone_number: '070********',
      name: 'John Doe',
    },
    customizations: {
      title: 'Annimate',
      description: `Payment for ${selectedPlan} subscription`,
      logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
    },
  };

  // Use the hook here in the component
  const handleFlutterPayment = useFlutterwave(config);

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
      // Save user details to Firestore
      const docRef = await addDoc(collection(db, 'users'), {
        email,
        password, // Consider hashing this in production
        phone,
        address,
        subscription: amount === 300 ? 'Monthly' : 'Yearly',
        signupDate: new Date().toISOString(),
      });

      console.log('User signed up with ID: ', docRef.id);
      alert('Signup successful! Proceeding to payment.');

      // Update user context
      login({ email }); // Update user context with email or other details
      // Redirect to payment or next step
      navigate('/payment'); // Adjust the path as necessary
    } catch (error) {
      console.error('Error signing up: ', error);
      alert('Signup failed. Please try again.');
    }
  };

  const handlePayment = () => {
    if (!selectedPlan) {
      alert('Please select a plan to proceed.');
      return;
    }

    handleFlutterPayment({
      callback: (response) => {
        console.log('Payment Response:', response);
        if (response.status === 'successful') {
          alert('Payment Successful!');
        } else {
          alert('Payment Failed. Please try again.');
        }
        closePaymentModal(); // Close the payment modal
      },
      onClose: () => {
        console.log('Payment Modal Closed');
      },
    });
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

        {/* Payment Section */}
        <div className="mt-6 text-center">
          <h2 className="text-lg font-medium mb-4">
            Select a Subscription Plan
          </h2>
          <div className="space-x-4">
            <button
              onClick={() => setSelectedPlan('Monthly')}
              className={`px-6 py-3 ${selectedPlan === 'Monthly' ? 'bg-blue-700' : 'bg-blue-500'} text-white rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:bg-blue-600 focus:outline-none`}
            >
              300 NGN / Month
            </button>
            <button
              onClick={() => setSelectedPlan('Yearly')}
              className={`px-6 py-3 ${selectedPlan === 'Yearly' ? 'bg-green-700' : 'bg-green-500'} text-white rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:bg-green-600 focus:outline-none`}
            >
              3600 NGN / Year
            </button>
          </div>

          {selectedPlan && (
            <div className="mt-6 text-center">
              <button
                onClick={handlePayment}
                className="px-8 py-3 bg-purple-500 text-white rounded-full shadow-lg transform transition-transform hover:scale-110 hover:bg-purple-600 focus:outline-none"
              >
                Pay {selectedPlan === 'Monthly' ? '300 NGN' : '3600 NGN'}
              </button>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SignupPayment;
