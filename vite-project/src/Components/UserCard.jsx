import React from 'react';

const UserCard = ({ name, email, description, image }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
      <div className="relative">
        <img 
          src={image} 
          alt={name}
          className="w-full h-48 object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/60 to-transparent"/>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{name}</h3>
        <p className="text-blue-600 text-sm mb-3">{email}</p>
        <p className="text-gray-600 text-sm line-clamp-3 mb-4">{description}</p>
        <div className="flex justify-between items-center">
          <button className="text-blue-500 hover:text-blue-700 text-sm font-medium transition-colors duration-200">
            View Profile
          </button>
          <div className="flex space-x-2">
            <span className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            </span>
            <span className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                <path d="M6 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 01-2 2H8a2 2 0 01-2-2V5z" />
                <path d="M4 4a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V6a2 2 0 00-2-2H4z" />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;