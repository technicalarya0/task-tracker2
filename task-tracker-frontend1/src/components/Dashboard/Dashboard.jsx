import React from 'react';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-800 text-white flex flex-col">
      
      {/* Header */}
      <header className="px-6 py-4 flex justify-between items-center bg-gray-900 shadow-md">
        <h1 className="text-2xl font-bold">Task Tracker ✅</h1>
        <nav>
          <a href="#" className="text-gray-400 hover:text-white transition">Log in</a>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center p-6">
        <h2 className="text-4xl font-semibold mb-4 text-center">Manage Your Tasks</h2>
        <p className="text-gray-400 mb-8 text-center">Stay organized and get things done efficiently!</p>

        {/* Tasks Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl mb-8">
          
          {/* Single Task Card */}
          <div className="bg-gray-700 p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">First Task</h3>
            <p className="text-gray-400 text-sm">This is a sample task description.</p>
          </div>

          <div className="bg-gray-700 p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Second Task</h3>
            <p className="text-gray-400 text-sm">Another important task to complete.</p>
          </div>

          <div className="bg-gray-700 p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Third Task</h3>
            <p className="text-gray-400 text-sm">Don't forget this one!</p>
          </div>

        </div>

        {/* Get Started Button */}
        <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-xl transition">
          Get Started
        </button>

      </main>

      {/* Footer */}
      <footer className="text-center text-gray-500 text-sm py-4">
        © {new Date().getFullYear()} Task Tracker. All rights reserved.
      </footer>

    </div>
  );
};

export default Dashboard;
