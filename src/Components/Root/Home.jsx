import React from 'react';
import Banner from '../Pages/Banner';
import Hotjobs from '../Pages/Hotjobs';

const Home = () => {
  return (
    <div>
      {/* Banner Section */}
      <Banner />

      {/* About Us Section */}
      <div className="bg-gradient-to-r from-gray-100 to-gray-200 py-10 px-6 my-10 rounded-lg shadow-md w-11/12 mx-auto">
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-800">
          About Us
        </h2>
        <p className="mt-4 text-lg text-gray-600 text-center max-w-4xl mx-auto">
          Welcome to <span className="font-semibold text-indigo-600">Job Portal</span>, your go-to platform for connecting
          top talent with exceptional opportunities. Whether you're a job seeker or an employer, we aim to bridge the gap
          and help you achieve your career goals. Explore a wide range of industries, stay updated with the latest job
          trends, and take your career to the next level.
        </p>
        <div className="flex justify-center mt-6">
          <button className="btn btn-primary bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-medium px-6 py-3 rounded-full shadow-md hover:from-purple-500 hover:to-indigo-500">
            Learn More
          </button>
        </div>
      </div>

      {/* Hot Jobs Section */}
      <Hotjobs />
    </div>
  );
};

export default Home;
