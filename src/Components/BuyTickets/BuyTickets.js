import React, { useState, useEffect } from 'react';
import bgimage from '../assets/countdown-bg.jpg';

function BuyTickets({ targetDate }) {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [showFestivalStart, setShowFestivalStart] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const timeLeft = calculateTimeLeft();
      setTimeLeft(timeLeft);

      // Check if countdown is finished
      if (Object.keys(timeLeft).length === 0) {
        setShowFestivalStart(true);
      }
    }, 1000);

    return () => clearTimeout(timer);
  });

  // Function to add leading zeros
  const addLeadingZeros = (value) => {
    return value.toString().padStart(2, '0');
  };


  return (
    <>
      <div className="relative" id='tickets'>
        <div
          className="bg-no-repeat bg-cover bg-center h-[800px]"
          style={{ backgroundImage: `url(${bgimage})` }}
        >
          <div className="absolute inset-0 flex flex-col items-center">
            <div className="text-center ps-5 pe-5 mt-28">
              <div className=" ">
                <h1 className="md:text-6xl text-3xl text-white">Tomorrowland 2024</h1>
                {showFestivalStart ? (
                  <h1 className="md:text-3xl text-2xl text-white mt-8">
                  " Stay Tuned for our next Festival ! "
                  </h1>
                ) : (
                  <h1 className="md:text-3xl text-2xl text-white mt-8">
                    MUSIC FESTIVAL START IN
                  </h1>
                )}
              </div>
              <div className="grid md:grid-cols-4 grid-cols-2 justify-center items-center mt-10 sm:space-x-10">
                <div className="flex flex-col items-center sm:mr-2 sm:mb-2">
                  <span className="font-bold text-white p-5 w-full text-7xl"> 
                    {addLeadingZeros(timeLeft.days || 0)}
                  </span>
                  <span className="text-white tracking-widest w-full text-lg"> DAYS </span>
                </div>
                <div className="flex flex-col items-center sm:mr-2 sm:mb-2">
                  <span className="font-bold p-5 w-full text-white text-7xl">
                    {addLeadingZeros(timeLeft.hours || 0)}
                  </span>
                  <span className="text-white tracking-widest w-full text-lg"> Hours </span>
                </div>
                <div className="flex flex-col items-center sm:mr-2 sm:mb-2">
                  <span className="font-bold p-5 w-full text-white text-7xl">
                    {addLeadingZeros(timeLeft.minutes || 0)}
                  </span>
                  <span className="text-white w-full tracking-widest text-lg"> Minutes </span>
                </div>
                <div className="flex flex-col items-center sm:mr-2 sm:mb-2">
                  <span className="font-bold w-full p-5 text-white text-7xl">
                    {addLeadingZeros(timeLeft.seconds || 0)}
                  </span>
                  <span className="text-white tracking-widest w-full text-lg"> SECONDS </span>
                </div>
              </div>
              <div className="flex justify-center w-full mt-16">
                <button className={`bg-[#5c00ce] hover:bg-[#4a118f] tracking-wider text-white py-3 px-10 ${showFestivalStart ? 'cursor-not-allowed' : 'cursor-pointer'}`}>
                {showFestivalStart ? "TICKETS TIME IS OVER !" : "BUY TICKETS"}
              </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BuyTickets;