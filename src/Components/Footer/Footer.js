import React from 'react';
import bgimage from '../assets/footers.png';
import { FiPhoneCall, FiSend } from 'react-icons/fi';
import { FaDribbble, FaFacebook, FaInstagram, FaRegEnvelope, FaTwitter } from 'react-icons/fa';



const Footer = () => {
  return (
    <>

      <div className="bg-no-repeat bg-cover -mt-16 relative bg-center" style={{ backgroundImage: `url(${bgimage})` }}>
        <div className="max-w-[1240px] mx-auto">
          <div className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="md:grid lg:grid-cols-3 sm:grid-cols-2 md:gap-36 mt-24">
              <div className="mb-8 md:mb-0 md:ml-0 ml-4 mt-3">
                <div className="flex items-center mb-6">
                  <a href="#" className="px-4 py-4 group rounded-full border-2 hover:bg-white">
                    <FiPhoneCall className="text-2xl group-hover:text-[#5c00ce] text-white" />
                  </a>
                  <div className="ml-4">
                    <h1 className="text-gray-400 font-medium text-xl">Phone</h1>
                    <span className="text-white">1-677-124 44227</span>
                  </div>
                </div>
                <div className="flex items-center">
                  <a href="#" className="px-4 py-4 group rounded-full border-2 hover:bg-white">
                    <FaRegEnvelope className="text-2xl group-hover:text-[#5c00ce] text-white" />
                  </a>
                  <div className="ml-4">
                    <h1 className="text-gray-400 font-medium text-xl">Email</h1>
                    <span className="text-white">DJ.Music @ gmail.com</span>
                  </div>
                </div>
              </div>

             <div className="md:text-center md:mt-0 mt-14 md:ml-0 ml-4">
              <h1 className="text-white mb-6 text-4xl font-semibold">DJoz</h1>
              <div className="flex flex-wrap md:justify-center justify-start pt-4 space-x-3">
                <a href="#" className="px-4 py-4 group rounded-full border-2 hover:bg-white">
                  <FaFacebook className="text-xl sm:text-2xl group-hover:text-[#5c00ce] text-white" />
                </a>
                <a href="#" className="px-4 py-4 group rounded-full border-2 hover:bg-white">
                  <FaInstagram className="text-xl sm:text-2xl group-hover:text-[#5c00ce] text-white" />
                </a>
                <a href="#" className="px-4 py-4 group rounded-full border-2 hover:bg-white">
                  <FaTwitter className="text-xl sm:text-2xl group-hover:text-[#5c00ce] text-white" />
                </a>
                <a href="#" className="px-4 py-4 group rounded-full border-2 hover:bg-white">
                  <FaDribbble className="text-xl sm:text-2xl group-hover:text-[#5c00ce] text-white" />
                </a>
              </div>
            </div>





          <div className="md:ml-0 md:mt-0 mt-16 ml-4">
          <h1 className="mb-12 text-2xl sm:text-3xl text-white font-semibold">Stay With me</h1>
          <div className="flex items-start">
            <input className="border bg-transparent text-white focus:outline-none placeholder-white w-full px-3 py-2 mb-2" placeholder="Email" />
            <a href='#'>
            <div className="bg-white px-3 py-3">
              <FiSend className="text-[#5c00ce] text-lg" />
            </div>
            </a>
          </div>
        </div>



            </div>
            <div className="text-center mt-20 text-gray-300">
              <p>Copyright © 2024 All rights reserved | This template is made with by SK</p>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default Footer;