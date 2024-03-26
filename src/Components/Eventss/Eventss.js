import React,{useState} from 'react'
import image1 from '../assets/event-1.jpg'
import image2 from '../assets/event-2.jpg'
import image3 from '../assets/event-3.jpg'
import {FaMapMarkerAlt } from "react-icons/fa";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const Eventss = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Set autoplay speed in milliseconds (e.g., 3000ms = 3 seconds)
    arrows: false, // Remove default navigation buttons
    pauseOnHover: false, // Pause autoplay on hover
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  }

  const [grabCursor, setGrabCursor] = useState(false);

  const handleMouseDown = () => {
    setGrabCursor(true);
  };

  const handleMouseUp = () => {
    setGrabCursor(false);
  };



  return (
    <>

<div className='w-full max-w-[1240px] mx-auto mt-24' id='team'>

      <h1 className='md:text-3xl mb-2 text-2xl text-black font-bold ps-8'>UPCOMING EVENTS</h1>
      <div
      className={`w-full px-4 ${grabCursor ? 'cursor-grab' : ''}`}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}>
      <Slider {...settings}>      

      {/* Card 1 */}
          <div className='w-full my-4 p-4 relative group shadow-xl'>
          <div className='relative'>
          <img src={image1} className='w-full' />
          <div className="-mt-6 relative z-10">
     <div className="text-center py-3 w-32 text-white mx-auto bg-[#5c00ce]">
     Dec 15, 2023
    </div>
   </div>
   </div>

        <div className='py-5'>
          <h1 className='text-center mt-2 text-2xl font-medium'>David Guetta Miami Ultra</h1>
          <div className="flex items-center justify-center mt-3 text-gray-600 tracking-wide">
      <FaMapMarkerAlt className="me-3 text-sm text-[#5c00ce]" />
      Funkhaus Berlin, Berlin, Germany
     </div>     
     </div>
      </div>





      
      {/* Card 2 */}
      <div className='w-full my-4 p-4 relative group shadow-xl'>
          <div className='relative'>
          <img src={image2} className='w-full' />
          <div className="-mt-6 relative z-10">
     <div className="text-center py-3 w-32 text-white mx-auto bg-[#5c00ce]">
     Dec 15, 2023
    </div>
   </div>
   </div>

        <div className='py-5'>
          <h1 className='text-center mt-2 text-2xl font-medium'>David Guetta Miami Ultra</h1>
          <div className="flex items-center justify-center mt-3 text-gray-600 tracking-wide">
      <FaMapMarkerAlt className="me-3 text-sm text-[#5c00ce]" />
      Funkhaus Berlin, Berlin, Germany
     </div>     
     </div>
      </div>






      {/* Card 3 */}
      <div className='w-full my-4 p-4 relative group shadow-xl'>
          <div className='relative'>
          <img src={image3} className='w-full' />
          <div className="-mt-6 relative z-10">
     <div className="text-center py-3 w-32 text-white mx-auto bg-[#5c00ce]">
     Dec 15, 2023
    </div>
   </div>
   </div>

        <div className='py-5'>
          <h1 className='text-center mt-2 text-2xl font-medium'>David Guetta Miami Ultra</h1>
          <div className="flex items-center justify-center mt-3 text-gray-600 tracking-wide">
      <FaMapMarkerAlt className="me-3 text-sm text-[#5c00ce]" />
      Funkhaus Berlin, Berlin, Germany
     </div>     
     </div>
      </div>
      </Slider>

        </div>
       </div>      
    </>
  )
}

export default Eventss