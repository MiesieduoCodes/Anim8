"use client";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { auth, db } from "../Firebase";
import Navbar  from "./Navbar";
import Footer  from "./Footer";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";

const SignupPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    password: "",
    confirmPassword: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    terms: false,
  });

  const [selectedPlan, setSelectedPlan] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
      const user = userCredential.user;

      await setDoc(doc(db, "users", user.uid), {
        ...formData,
        subscriptionPlan: selectedPlan,
      });

      alert("User registered successfully!");
      handlePayment(user.uid);
    } catch (error) {
      console.error("Error signing up:", error);
      alert("Error signing up: " + error.message);
    }
  };

  const config = {
    public_key: "FLWPUBK_TEST-3614527a79f7edf4d1a6e7dc93674123-X",
    tx_ref: Date.now(),
    amount: selectedPlan === "Monthly" ? 500 : 6000,
    currency: "NGN",
    payment_options: "card,mobilemoney,ussd",
    customer: {
      email: formData.email,
      phone_number: formData.phoneNumber,
      name: `${formData.firstName} ${formData.lastName}`,
    },
    customizations: {
      title: "Anim8",
      description: `Payment for ${selectedPlan} subscription`,
      logo: "https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg",
    },
  };

  const handleFlutterPayment = useFlutterwave(config);

  const handlePayment = (userId) => {
    if (!selectedPlan) {
      alert("Please select a plan to proceed.");
      return;
    }

    handleFlutterPayment({
      callback: async (response) => {
        if (response.status === "successful") {
          alert("Payment Successful!");

          await setDoc(
            doc(db, "users", userId),
            { paymentStatus: "Paid" },
            { merge: true }
          );

          navigate("/pixar");
        } else {
          alert("Payment Failed. Please try again.");
        }
        closePaymentModal();
      },
      onClose: () => {
        console.log("Payment Modal Closed");
      },
    });
  };

  return (
    <div className="relative main-content pt-24 min-h-screen overflow-hidden">
      <Navbar />
      {/* Background Slider */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="h-full w-full animate-slider">
          <div
            className="absolute h-full w-full bg-cover bg-center"
            style={{
              backgroundImage: "url('/images/cartoon1.jpg')",
            }}
          ></div>
          <div
            className="absolute h-full w-full bg-cover bg-center"
            style={{
              backgroundImage: "url('/images/cartoon2.jpg')",
            }}
          ></div>
          <div
            className="absolute h-full w-full bg-cover bg-center"
            style={{
              backgroundImage: "url('/images/cartoon3.jpg')",
            }}
          ></div>
        </div>
      </div>

      {/* Signup Form */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 mx-auto mt-10 max-w-lg bg-white bg-opacity-80 shadow-xl rounded-lg p-6"
      >
        <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Input Fields */}
          <div className="grid grid-cols-1 gap-4">
            {[
              { name: "firstName", placeholder: "First Name" },
              { name: "lastName", placeholder: "Last Name" },
              { name: "phoneNumber", placeholder: "Phone Number" },
              { name: "email", placeholder: "Email" },
              { name: "password", placeholder: "Password", type: "password" },
              {
                name: "confirmPassword",
                placeholder: "Confirm Password",
                type: "password",
              },
              { name: "address", placeholder: "Address" },
              { name: "city", placeholder: "City" },
              { name: "state", placeholder: "State" },
              { name: "zipCode", placeholder: "Zip Code" },
            ].map((field, idx) => (
              <input
                key={idx}
                type={field.type || "text"}
                name={field.name}
                placeholder={field.placeholder}
                value={formData[field.name]}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
              />
            ))}
          </div>

          {/* Subscription Plan */}
          <h3 className="text-xl font-bold mt-6">Select a Subscription Plan</h3>
          <div className="flex space-x-4 mb-4">
            <button
              type="button"
              onClick={() => setSelectedPlan("Monthly")}
              className={`flex-1 px-4 py-3 ${
                selectedPlan === "Monthly" ? "bg-blue-700" : "bg-blue-500"
              } text-white rounded-lg`}
            >
              500 NGN / Month
            </button>
            <button
              type="button"
              onClick={() => setSelectedPlan("Yearly")}
              className={`flex-1 px-4 py-3 ${
                selectedPlan === "Yearly" ? "bg-green-700" : "bg-green-500"
              } text-white rounded-lg`}
            >
              6000 NGN / Year
            </button>
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white font-semibold py-2 rounded hover:bg-indigo-700 transition duration-300"
          >
            Sign Up
          </button>
        </form>
      </motion.div>
      <Footer />
    </div>
  );
};

export default SignupPage;
