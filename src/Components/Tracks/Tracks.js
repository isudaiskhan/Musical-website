import React from 'react';
import image1 from '../assets/track-right.jpg';
import song1 from '../assets/1.mp3';
import song2 from '../assets/2.mp3';
import song3 from '../assets/3.mp3';
import song4 from '../assets/4.mp3';
import song5 from '../assets/5.mp3';
import song6 from '../assets/6.mp3';




const Tracks = () => {
  return (
    <div className="max-w-[1240px] mx-auto mt-44 px-4 sm:px-6 lg:px-8" id='tracks'>
      <div className="mb-16 ps-4 pe-3 flex justify-between items-center flex-col md:flex-row">
        <h1 className="text-4xl font-semibold mb-10 md:mb-0">LATEST TRACKS</h1>
        <button className="px-7 border-2 border-[#5c00ce] py-3 tracking-wider hover:bg-[#5c00ce] hover:text-white text-black rounded">
          VIEW ALL TRACKS
        </button>
      </div>

      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-28">
        <div className="w-full md:w-3/6">
          <div className="grid grid-cols-1 md:grid-cols-1 gap-2 overflow-y-auto max-h-[80vh]">

            {/* Song 1 */}
            <div className="p-4 rounded-lg">
              <h2 className="text-xl mb-4 font-bold">DAVID GUETTA MIAMI ULTRA</h2>
              <audio controls className="w-full">
                <source src={song1} type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            </div>


            {/* Song 2 */}
            <div className="p-4 rounded-lg">
              <h2 className="text-xl mb-4 font-bold">DAVID GUETTA MIAMI ULTRA</h2>
              <audio controls className="w-full">
                <source src={song2} type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            </div>


            {/* Song 3 */}
            <div className="p-4 rounded-lg">
              <h2 className="text-xl mb-4 font-bold">DAVID GUETTA MIAMI ULTRA</h2>
              <audio controls className="w-full">
                <source src={song3} type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            </div>


            {/* Song 4 */}
            <div className="p-4 rounded-lg">
              <h2 className="text-xl mb-4 font-bold">DAVID GUETTA MIAMI ULTRA</h2>
              <audio controls className="w-full">
                <source src={song4} type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            </div>


            {/* Song 5 */}
            <div className="p-4 rounded-lg">
              <h2 className="text-xl mb-4 font-bold">DAVID GUETTA MIAMI ULTRA</h2>
              <audio controls className="w-full">
                <source src={song5} type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            </div>


            {/* Song 6 */}
            <div className="p-4 rounded-lg">
              <h2 className="text-xl mb-4 font-bold">DAVID GUETTA MIAMI ULTRA</h2>
              <audio controls className="w-full">
                <source src={song6} type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            </div>
          </div>
        </div>


        <div className="w-full md:w-2/5 flex justify-center">
          <img src={image1} alt="Your Image" className="w-full h-auto" />
        </div>
      </div>
    </div>
  );
};

export default Tracks;
