import React, { useState } from 'react';
import bgimage from '../assets/hero-bg.png';
import { BsPlayCircleFill } from "react-icons/bs";
import { FaTimes } from "react-icons/fa";
import { HiChevronDoubleDown  } from "react-icons/hi";

const Hero = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleIconClick = () => {
    setIsPlaying(!isPlaying);
  };

  const handleCloseClick = () => {
    setIsPlaying(false);
  };


  return (
    <>
    <div className="relative" id='home'>
      <div
        className="bg-no-repeat bg-cover bg-center h-[1000px]"
        style={{ backgroundImage: `url(${bgimage})` }}
      >
        <div
          className={`bg-black fixed inset-0 z-50 transition-opacity duration-300 ${
            isPlaying ? 'opacity-75' : 'opacity-0 pointer-events-none'
          }`}
        ></div>

        {/* YouTube video player */}
        {isPlaying && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
            <div className="relative">
              <button
                className="absolute -mt-6 right-0 text-white hover:text-gray-300"
                onClick={handleCloseClick}
              >
                <FaTimes className="w-6 h-6" />
              </button>
              <iframe
                className="w-full h-full sm:w-[500px] sm:h-72"
                src="https://www.youtube.com/embed/K4DyBUG242c?si=yUF7oGuSmvE3HcMQ"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>

            </div>
          </div>
        )}

        {/* Container for responsive content */}
        <div className="absolute inset-0 mt-7 flex items-center justify-center">
          <div className="px-6 text-center text-white">
            <div className="sm:text-xl text-lg tracking-widest mb-6">NEW SINGLE</div>
            <div className="md:text-7xl text-5xl">Feel the heart beats</div>
            <div className="mt-10">
              <p className="text-white sm:w-2/3 mx-auto">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <button
              className="mt-14 text-white rounded-full py-4 px-4 bg-[#ffffff48]"
              onClick={handleIconClick}
            >
              {/* Music Icon */}
              <BsPlayCircleFill className={`text-6xl animate-pulse rounded-full bg-[#5c00ce] opacity-75 ${isPlaying ? 'animate-wobble' : ''}`} />
            </button>
          </div>
        </div>
      </div>
      <HiChevronDoubleDown className='text-6xl animate-bounce mx-auto text-[#5c00ce] -mt-10' />
    </div>
    </>
  );
};

export default Hero;