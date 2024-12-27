import { useState } from 'react';
import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';

export default function App() {
  const [selectedPlan, setSelectedPlan] = useState(null);

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
    <div className="App p-6 flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-6">Select a Subscription Plan</h1>
      <div className="space-x-4">
        <button
          onClick={() => setSelectedPlan('Monthly')}
          className={`px-6 py-3 ${
            selectedPlan === 'Monthly' ? 'bg-blue-700' : 'bg-blue-500'
          } text-white rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:bg-blue-600 focus:outline-none`}
        >
          300 NGN / Month
        </button>
        <button
          onClick={() => setSelectedPlan('Yearly')}
          className={`px-6 py-3 ${
            selectedPlan === 'Yearly' ? 'bg-green-700' : 'bg-green-500'
          } text-white rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:bg-green-600 focus:outline-none`}
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
            onClick={handlePayment}
            className="px-8 py-3 bg-purple-500 text-white rounded-full shadow-lg transform transition-transform hover:scale-110 hover:bg-purple-600 focus:outline-none"
          >
            Pay {selectedPlan === 'Monthly' ? '300 NGN' : '3600 NGN'}
          </button>
        </div>
      )}
    </div>
  );
}
