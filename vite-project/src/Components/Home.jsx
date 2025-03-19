import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-50 px-4">
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
          Welcome to Our <span className="text-blue-600"> Dashboard</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
         Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab nesciunt id rerum debitis porro temporibus aut aliquam vero possimus est voluptatem ducimus ipsam eveniet ex ut aspernatur natus, suscipit nam?
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/dashboard"
            className="px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
             Our Team
          </Link>
          <a
            href="#contact"
            className="px-8 py-3 bg-white text-blue-600 rounded-lg font-medium border-2 border-blue-600 hover:bg-blue-50 transition-colors duration-200"
          >
            go to dashboard
          </a>
        </div>
        <div className="mt-12 flex justify-center space-x-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">5+</div>
            <div className="text-gray-600">Team Members</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">10+</div>
            <div className="text-gray-600">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">90%</div>
            <div className="text-gray-600">Client Satisfaction</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;