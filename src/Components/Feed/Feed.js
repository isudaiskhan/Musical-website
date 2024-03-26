import React, { useState } from 'react';
import image1 from '../assets/youtube-1.jpg';
import image2 from '../assets/youtube-2.jpg';
import image3 from '../assets/youtube-3.jpg';
import { BsPlayCircleFill } from 'react-icons/bs';
import { FaTimes } from 'react-icons/fa';


const Feed = () => {
    const [currentVideoIndex, setCurrentVideoIndex] = useState(-1);
    const [videoUrls] = useState([
        'https://www.youtube.com/embed/yJg-Y5byMMw?si=hznSQrNwpdG4wMoI',
        'https://www.youtube.com/embed/8VLXHyHRXjc?si=xTUKauNqvr59BDFk',
        'https://www.youtube.com/embed/tt2k8PGm-TI?si=tb7C_vuu5Yu7OM5y'
    ]);

    const handleIconClick = (index) => {
        setCurrentVideoIndex(index);
    };

    const handleCloseClick = () => {
        setCurrentVideoIndex(-1);
    };

    return (
        <>
        <div className='max-w-[1240px] mx-auto mt-44 px-4 md:px-5' id='feed'>
            <h1 className='text-center text-4xl font-bold'>YOUTUBE FEED</h1>
            <div className="grid grid-cols-1 mt-16 gap-8 sm:grid-cols-2 lg:grid-cols-3 ">

                {/* Song 1 */}
               <div className="relative w-full h-full">
               <img src={image1} className="w-full" alt="Video thumbnail" />
               <div className="absolute inset-0 flex justify-center items-center">
               <button
               className="bg-white rounded-full p-2 mb-24 bg-opacity-65"
               onClick={() => handleIconClick(0)}
           >
            <BsPlayCircleFill className="text-4xl rounded-full bg-white text-[#5c00ce]" />
         </button>
         </div>
         <div className="py-1 mt-5">
           <h1 className="text-xl md:text-2xl font-bold">David Guetta Miami Ultra Music Festival 2023</h1>
            </div>
        </div>



                {/* Song 2 */}
                <div className="relative w-full h-full">
               <img src={image2} className="w-full" alt="Video thumbnail" />
               <div className="absolute inset-0 flex justify-center items-center">
               <button
               className="bg-white rounded-full p-2 mb-24 bg-opacity-65"
               onClick={() => handleIconClick(1)}
           >
            <BsPlayCircleFill className="text-4xl rounded-full bg-white text-[#5c00ce]" />
         </button>
         </div>
         <div className="py-1 mt-5">
           <h1 className="text-xl md:text-2xl font-bold">Martin Garrix (Full live-set) | SLAM!Koningsdag</h1>
            </div>
        </div>


                {/* Song 3 */}
                <div className="relative w-full h-full">
               <img src={image3} className="w-full" alt="Video thumbnail" />
               <div className="absolute inset-0 flex justify-center items-center">
               <button
               className="bg-white rounded-full p-2 mb-24 bg-opacity-65"
               onClick={() => handleIconClick(2)}
           >
            <BsPlayCircleFill className="text-4xl rounded-full bg-white text-[#5c00ce]" />
         </button>
         </div>
         <div className="py-1 mt-5">
           <h1 className="text-xl md:text-2xl font-bold">Dimitri Vegas, Steve Aoki & Like Mike's “3 Are Legend”</h1>
            </div>
        </div>

                {/* Video Player */}
                {currentVideoIndex !== -1 && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
                        <div className="relative">
                            <button
                                className="absolute top-0 right-0  text-white hover:text-gray-300"
                                onClick={handleCloseClick}
                            >
                                <FaTimes className="w-6 h-6 -mt-8" />
                            </button>
                            <iframe
                                className="w-full h-full sm:w-[500px] sm:h-72"
                                src={videoUrls[currentVideoIndex]}
                                title="YouTube video player"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                )}
            </div>
            </div>

        </>
    );
};

export default Feed;
