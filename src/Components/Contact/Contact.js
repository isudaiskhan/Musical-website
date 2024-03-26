import React from 'react'
import {FiUser, FiMail, FiMessageSquare,FiPhoneCall} from 'react-icons/fi'
import { FaRegEnvelope  } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { LuSendHorizonal } from "react-icons/lu";



    const Contact = () => {
      return (
        <>

      <div className='w-full pb-36 mt-40 bg-white' id='contact'>
        <div className='max-w-[1240px] mx-auto flex flex-col sm:flex-col md:flex-row'>
      
        {/* contact Section */}
        <div className='md:w-1/3 w-11/12 mx-auto my-3 mt-10 '>
        <div>
        <h1 className='md:text-4xl text-3xl font-semibold text-[#12141D]'>Contact info</h1>
        <p className='text-gray-500  mt-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
        </div>


        <div className='flex items-center mt-12'>
        <a href='#' className='px-3 rounded-full py-3 group'>
          <FaLocationDot  className='text-4xl text-[#12141D] group-hover:text-[#5c00ce]' />
        </a>

        <div className='ml-4'>
          <h1 className='text-[#12141D] font-medium text-2xl'>Address</h1>
          <span className='text-gray-700 text-lg'>Los Angeles Gournadi, 1230 Bariasl</span>
        </div>
      </div>





        <div className='flex items-center mt-7'>
        <a href='#' className='px-3 rounded-full py-3 group'>
          <FiPhoneCall className='text-4xl text-[#12141D] group-hover:text-[#5c00ce]' />
        </a>

        <div className='ml-4'>
          <h1 className='text-[#12141D] font-medium text-2xl'>Hotline</h1>
          <span className='text-gray-700 text-lg'>1-677-124-44227 <br></br> 1-688-356-66889</span>
        </div>
      </div>




      <div className='flex items-center mt-7'>
        <a href='#' className='px-3 rounded-full py-3 group'>
          <FaRegEnvelope  className='text-4xl text-[#12141D] group-hover:text-[#5c00ce]' />
        </a>

        <div className='ml-4'>
          <h1 className='text-[#12141D] font-medium text-2xl'>Email</h1>
          <span className='text-gray-700 text-lg'>Support @gmail .com</span>
        </div>
      </div>



      </div>


   {/* Form Section */}
    <form className='md:w-3/5 w-11/12 max-w-3xl mx-auto pt-10 space-y-5 mb-4 md:mb-0'>
    <div>
    <h1 className='md:text-4xl text-3xl font-semibold text-[#12141D]'>Get in Touch</h1>
    <p className='text-gray-500 py-5'>Eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
    </div>
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
        <div className='md:w-1/2 relative'>
          <input type="text" id="input1" name="user_name" placeholder='Name' required className="w-full border rounded border-gray-500 px-4 py-3 text-black focus:outline-[#5c00ce]" />
          <FiUser className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
        </div>
        <div className='md:w-1/2 relative'>
          <input type="email" id="input2" name="user_Email" placeholder='Email' required className="w-full border rounded border-gray-500 px-4 py-3 text-black focus:outline-[#5c00ce]" />
          <FiMail className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
        </div>
      </div>

      <div className='w-full relative'>
        <textarea id="textarea" placeholder='Message' name="message" required rows="6" className="p-2 px-4 py-3 w-full border border-gray-500 rounded-md focus:outline-[#5c00ce]" />
        <FiMessageSquare className="absolute right-3 bottom-3 text-gray-500" />
      </div>


    
      

      <div className="flex justify-center">
  <button type="submit" className="font-medium flex items-center justify-center px-8 py-3 w-full text-white bg-[#5c00ce] hover:bg-[#4a118f]">
    SEND MESSAGE
    <LuSendHorizonal className='ml-3' />
  </button>
</div>

    </form>

  
    </div>
  </div>
    </>
  )
}

export default Contact