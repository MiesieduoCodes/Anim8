"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { auth, db } from '../Firebase'; // Adjust the path accordingly
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';

const SignupPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    password: '',
    confirmPassword: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    terms: false,
  });

  const [selectedPlan, setSelectedPlan] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
      const user = userCredential.user;

      await setDoc(doc(db, "users", user.uid), {
        firstName: formData.firstName,
        lastName: formData.lastName,
        phoneNumber: formData.phoneNumber,
        address: formData.address,
        city: formData.city,
        state: formData.state,
        zipCode: formData.zipCode,
        email: formData.email,
      });

      alert("User registered successfully!");
      handlePayment(user.uid);

    } catch (error) {
      console.error("Error signing up:", error);
      alert("Error signing up: " + error.message);
    }
  };

  const config = {
    public_key: 'FLWPUBK_TEST-3614527a79f7edf4d1a6e7dc93674123-X', // Your actual Flutterwave public key
    tx_ref: Date.now(),
    amount: selectedPlan === 'Monthly' ? 300 : 3600,
    currency: 'NGN',
    payment_options: 'card,mobilemoney,ussd',
    customer: {
      email: formData.email, // Ensure this is set
      phone_number: formData.phoneNumber,
      name: `${formData.firstName} ${formData.lastName}`,
    },
    customizations: {
      title: 'Annimate',
      description: `Payment for ${selectedPlan} subscription`,
      logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
    },
  };
  const handleFlutterPayment = useFlutterwave(config);

  const handlePayment = () => {
    if (!selectedPlan) {
      alert('Please select a plan to proceed.');
      return;
    }

    handleFlutterPayment({
      callback: (response) => {
        if (response.status === 'successful') {
          alert('Payment Successful!');
        } else {
          alert('Payment Failed. Please try again.');
        }
        closePaymentModal();
      },
      onClose: () => {
        console.log('Payment Modal Closed');
      },
    });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white shadow-md rounded-lg p-8 w-96"
      >
        <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex space-x-4 mb-4">
            <motion.div>
              <label className="block text-sm font-medium mb-1">First Name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="border border-gray-300 rounded w-full p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </motion.div>

            <motion.div>
              <label className="block text-sm font-medium mb-1">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="border border-gray-300 rounded w-full p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </motion.div>
          </div>

          <div className="flex space-x-4 mb-4">
            <motion.div>
              <label className="block text-sm font-medium mb-1">Phone Number</label>
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
                className="border border-gray-300 rounded w-full p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </motion.div>

            <motion.div>
              <label className="block text-sm font-medium mb-1">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="border border-gray-300 rounded w-full p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </motion.div>
          </div>

          <div className="flex space-x-4 mb-4">
            <motion.div>
              <label className="block text-sm font-medium mb-1">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="border border-gray-300 rounded w-full p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </motion.div>

            <motion.div>
              <label className="block text-sm font-medium mb-1">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                className="border border-gray-300 rounded w-full p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </motion.div>
          </div>

          <motion.div className="mb-4">
            <label className="block text-sm font-medium mb-1">Address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded w-full p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </motion.div>

          <motion.div className="mb-4">
            <label className="block text-sm font-medium mb-1">City</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded w-full p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </motion.div>

          <motion.div className="mb-4">
            <label className="block text-sm font-medium mb-1">State</label>
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded w-full p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </motion.div>

          <motion.div className="mb-4">
            <label className="block text-sm font-medium mb-1">Zip Code</label>
            <input
              type="text"
              name="zipCode"
              value={formData.zipCode}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded w-full p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </motion.div>

          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              name="terms"
              checked={formData.terms}
              onChange={handleChange}
              required
              className="mr-2"
            />
            <label className="text-sm">
              I agree to the <a href="#" className="text-indigo-600">terms and conditions</a>.
            </label>
          </div>

          <h1 className="text-xl font-bold mt-6">Select a Subscription Plan</h1>
<div className="space-x-4 mb-4">
  <button
    type="button"
    onClick={() => setSelectedPlan('Monthly')}
    className={`px-6 py-3 ${selectedPlan === 'Monthly' ? 'bg-blue-700' : 'bg-blue-500'} text-white rounded-lg`}
  >
    300 NGN / Month
  </button>
  <button
    type="button"
    onClick={() => setSelectedPlan('Yearly')}
    className={`px-6 py-3 ${selectedPlan === 'Yearly' ? 'bg-green-700' : 'bg-green-500'} text-white rounded-lg`}
  >
    3600 NGN / Year
  </button>
</div>

{selectedPlan && (
  <div className="mt-6 text-center">
    <h2 className="text-lg font-medium mb-4">
      Selected Plan: <span className="text-blue-600">{selectedPlan}</span>
    </h2>
    <button
      type="button"
      onClick={handlePayment}
      className="px-8 py-3 bg-purple-500 text-white rounded-full"
    >
      Pay {selectedPlan === 'Monthly' ? '300 NGN' : '3600 NGN'}
    </button>
  </div>
)}

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white font-semibold py-2 rounded hover:bg-indigo-700 transition duration-300"
          >
            Sign Up
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default SignupPage;