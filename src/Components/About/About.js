import React from 'react'
import image from '../assets/about.png'


const About = () => {
  return (
    <>

<div className='w-full bg-white py-20 px-4' id='about'>
  <div className='max-w-[1240px] mx-auto mt-20 flex md:flex-row flex-col items-center'>
    <img src={image} className='lg:w-full sm:w-1/2 w-full my-4 md:mr-8' />

    <div className='flex flex-col justify-center md:ms-10'>
      <h1 className='lg:text-4xl text-3xl tracking-wide text-[#12141D] font-bold py-4'>DJ ALEXANDRA RUD</h1>
      <p className='text-[#444444] mt-5 line tracking-wide'>
      DJ Rainflow knows how to move your mind, body and soul by delivering tracks that stand out from the norm. As if this impressive succession of high impact, floor-filling bombs wasn’t enough to sustain.</p>

    <button
      className="text-lg tracking-wider bg-[#5c00ce] hover:bg-[#6519c2] text-white mt-9 py-2 px-4 w-44">
      Contact Me
    </button>

      </div>
  </div>
</div>
      
    </>
  )
}

export default About
