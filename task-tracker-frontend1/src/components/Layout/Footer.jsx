import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 dark:bg-gray-950 text-gray-300 py-8 border-t border-gray-800 mt-auto transition-colors duration-500">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start">
          <div className="flex items-center gap-2 mb-1">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 text-blue-500">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75v10.5A2.25 2.25 0 006 19.5h12a2.25 2.25 0 002.25-2.25V6.75M3.75 6.75A2.25 2.25 0 016 4.5h12a2.25 2.25 0 012.25 2.25m-16.5 0l8.25 6.75m8.25-6.75l-8.25 6.75" />
            </svg>
            <span className="text-xl font-bold text-white tracking-wide">Task Tracker</span>
          </div>
          <p className="text-sm text-gray-400">© {new Date().getFullYear()} All rights reserved</p>
        </div>
        <div className="flex gap-8 items-center">
          <a href="#" className="flex items-center gap-1 text-gray-400 hover:text-blue-400 transition">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
            </svg>
            Privacy Policy
          </a>
          <a href="#" className="flex items-center gap-1 text-gray-400 hover:text-blue-400 transition">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75v10.5a2.25 2.25 0 01-2.25 2.25H9a2.25 2.25 0 01-2.25-2.25V6.75" />
            </svg>
            Terms of Service
          </a>
          <a href="#" className="flex items-center gap-1 text-gray-400 hover:text-blue-400 transition">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.75V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15v-2.25m18-6V9m0 0a9 9 0 11-18 0V6a9 9 0 0118 0z" />
            </svg>
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
