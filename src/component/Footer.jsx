import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
    <footer className="bg-indigo-900 text-white py-16 border-t-4 border-red-500">
      <div className="container mx-auto flex flex-col items-center space-y-8">
        <div className="flex flex-col items-center space-y-5">
          <div className="flex space-x-10 text-sm md:text-base">
              <Link to="/" className="hover:underline">Home</Link>
              <Link to="/privacy-policy" className="hover:underline">Privacy Policy</Link>
              <Link to="/cookie-policy" className="hover:underline">Cookie Policy</Link>
          </div>
          <div className="flex items-center space-x-6">
            <span className="text-sm md:text-base">Follow Us:</span>
            <a href="https://www.youtube.com">
              <img src={require('./Assets/youtube_(2).png')} alt="Youtube" className="w-8 h-8 hover:scale-110" />
            </a>
            <a href="https://www.facebook.com">
              <img src={require('./Assets/facebook_(2).png')} alt="Facebook" className="w-8 h-8 hover:scale-110" />
            </a>
            <a href="https://www.instagram.com">
              <img src={require('./Assets/social.png')} alt="Instagram" className="w-8 h-8 hover:scale-110" />
            </a>
          </div>
        </div>
      <p className="text-center text-xs md:text-sm mt-6 text-gray-300">© 2024 IELTS Preparation. All rights reserved.</p>
      </div>
    </footer>
);

export default Footer;

