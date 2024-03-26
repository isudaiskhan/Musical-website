import React, { useState } from 'react';
import image from '../assets/service-left.jpg';
import { BsPlayCircleFill } from 'react-icons/bs';
import { FaTimes } from 'react-icons/fa';
import image1 from '../assets/service-1.png';
import image2 from '../assets/service-2.png';
import image3 from '../assets/service-3.png';
import image4 from '../assets/service-4.png';



const Servicess = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleIconClick = () => {
    setIsPlaying(!isPlaying);
  };

  const handleCloseClick = () => {
    setIsPlaying(false);
  };

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left Column */}
        <div className="relative">
          <div
            className={`bg-no-repeat bg-cover bg-center h-[640px] lg:h-full`}
            style={{ backgroundImage: `url(${image})` }}
          ></div>
          {/* Play Button */}
          <button
            className="bg-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full py-4 px-4 bg-[#ffffff2c]"
            onClick={handleIconClick}
          >
            <BsPlayCircleFill
              className={`text-6xl animate-pulse rounded-full bg-white border text-[#5c00ce] ${
                isPlaying ? 'animate-wobble' : ''
              }`}
            />
          </button>
        </div>

        {/* Right Column */}
        <div className="relative">
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
                  src="https://www.youtube.com/embed/JGwWNGJdvx8?si=MO9xc9hdtkTLj5X4" 
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          )}

          <div className="grid sm:grid-cols-2">

            {/* First Row */}
            <div className="bg-[#5400BC] p-14 overflow-hidden">
              <img src={image1} alt="Image 1" className="mt-1" />
              <h1 className="text-2xl text-white font-semibold mt-4">Wedding</h1>
              <p className="mt-3 text-white leading-7">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
            </div>
            <div className="bg-[#5c00ce] p-14 overflow-hidden">
              <img src={image2} alt="Image 1" className="mt-1" />
              <h1 className="text-2xl text-white font-semibold mt-4">Clubs and bar</h1>
              <p className="mt-3 text-white leading-7">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
            </div>


            {/* Second Row */}
            <div className="bg-[#5c00ce] p-14 overflow-hidden">
              <img src={image3} alt="Image 1" className="mt-1" />
              <h1 className="text-2xl text-white font-semibold mt-4">Corporate events</h1>
              <p className="mt-3 text-white leading-7">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
            </div>
            <div className="bg-[#5400BC] p-14 overflow-hidden">
              <img src={image4} alt="Image 4" className="mt-1" />
              <h1 className="text-2xl text-white font-semibold mt-4">DJ lessons</h1>
              <p className="mt-3 text-white leading-7">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod..</p>
            </div>
          </div>

        </div>
      </div>

    </>
  );
};

export default Servicess;