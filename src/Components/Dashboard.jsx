
import { useAuth } from './AuthContext';
import Navbar from './Navbar';
import Footer from './Footer';

const Dashboard = () => {
  const { user, logout, loading } = useAuth();

  if (loading) {
    return <div className="text-center">Loading...</div>; // Loading state
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 p-4">
      <Navbar />
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-2xl mx-auto flex-grow">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">Welcome to Your Dashboard</h1>
        <p className="text-gray-700">Hello, {user.email}!</p>
        <button
          onClick={logout}
          className="mt-4 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-500 transition duration-200"
        >
          Logout
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;