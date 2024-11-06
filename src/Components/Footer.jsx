
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
<footer className="bg-gray-800 text-white py-8">
<div className="max-w-6xl mx-auto px-4">
  <div className="flex flex-col md:flex-row justify-between gap-8">
    {/* <div>
      <h2 className="text-xl font-bold mb-2">Get the App</h2>
      <p className="text-gray-400">Download our app for the best experience.</p>
      <div className="mt-4">
        <Link to="/get" className="text-yellow-500 hover:underline">Download on the App Store</Link>
        <br />
        <Link to="/" className="text-yellow-500 hover:underline"> Get it on Google Play </Link>
      </div>
    </div> */}

    <div>
      <h2 className="text-xl font-bold mb-2">More</h2>
      <ul>
        <li><Link to="/about" className="text-gray-400 hover:underline">About Us</Link></li>
        <li><Link to="/talk" className="text-gray-400 hover:underline">Contact</Link></li>
      </ul>
    </div>
  </div>

  <div className="mt-8 text-center text-gray-400">
    <p>&copy; {new Date().getFullYear()} Anim8. All rights reserved.</p>
  </div>
</div>
</footer>
  )
}

export default Footer;