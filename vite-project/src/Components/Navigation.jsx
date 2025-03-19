import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? 'bg-blue-600' : 'hover:bg-blue-700';
  };

  return (
    <nav className="bg-gray-300 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex space-x-4">
            <Link
              to="/"
              className={`${isActive('/')} text-black px-4 py-2 rounded-md text-sm font-medium justify-center transition-colors duration-200`}
            >
              Home
            </Link>
            <Link
              to="/dashboard"
              className={`${isActive('/dashboard')} text-black px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200`}
            >
              Dashboard
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
