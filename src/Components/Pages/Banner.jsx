import React from 'react';
import { motion } from 'motion/react';
import team1 from '../../assets/team-1.webp';
import team2 from '../../assets/team-2.jpeg';

const Banner = () => {
  return (
    <div className="hero bg-gradient-to-r from-blue-50 to-purple-100 w-11/12 mx-auto min-h-screen my-10 rounded-lg shadow-md">
      <div className="hero-content flex-col lg:flex-row-reverse items-center">
        {/* Images Section */}
        <div className="flex-1 flex flex-col md:flex-row justify-center gap-4 lg:gap-6">
          <motion.img
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            src={team1}
            className="w-56 lg:w-64 rounded-lg shadow-lg"
          />
          <motion.img
            animate={{ y: [10, 30, 10] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
            src={team2}
            className="w-56 lg:w-64 -ml-6 rounded-lg shadow-lg"
          />
        </div>

        {/* Text Section */}
        <div className="flex-1 text-center lg:text-left mt-10 lg:mt-0">
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            className="text-4xl lg:text-5xl font-extrabold text-gray-800"
          >
            Discover the Latest{' '}
            <motion.span
              animate={{
                color: ['#ff4d4f', '#1a73e8', '#ff4d4f'],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
              className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500"
            >
              Job
            </motion.span>{' '}
            News!
          </motion.h1>
          <p className="py-6 text-gray-600">
            Stay ahead in your career with our curated list of the hottest jobs in the market.
            We bring you the latest opportunities tailored just for you.
          </p>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="btn btn-primary bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:from-purple-500 hover:to-blue-500"
          >
            Get Started
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
