import React from "react";
import { Link } from "react-router-dom";

const pexelsImage = "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&w=1200&q=80";

const Home = () => {
  return (
    <main className="flex-1 flex flex-col md:flex-row items-center justify-center bg-gradient-to-br from-blue-900 via-gray-900 to-gray-950 dark:from-gray-900 dark:via-gray-950 dark:to-black transition-colors duration-500">
      <div className="flex-1 flex flex-col items-center md:items-start px-8 py-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 drop-shadow-lg">Welcome to TaskTracker</h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl">
          Organize your projects, manage your tasks, and boost your productivity with TaskTracker. Collaborate, track progress, and achieve your goals efficiently—all in one place.
        </p>
        <Link to="/signup">
          <button className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition text-lg">
            Get Started
          </button>
        </Link>
      </div>
      <div className="flex-1 flex justify-center items-center p-8">
        <img
          src={pexelsImage}
          alt="Project management illustration"
          className="rounded-2xl shadow-2xl w-full max-w-md object-cover border-4 border-blue-800 dark:border-gray-800"
        />
      </div>
    </main>
  );
};

export default Home; 