import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h1 className="text-xl font-semibold">Task Tracker</h1>
          <p className="text-sm text-gray-400">© {new Date().getFullYear()} All rights reserved</p>
        </div>

        <div className="flex space-x-6">
          <a href="#" className="text-gray-400 hover:text-white transition">Privacy Policy</a>
          <a href="#" className="text-gray-400 hover:text-white transition">Terms of Service</a>
          <a href="#" className="text-gray-400 hover:text-white transition">Contact</a>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
