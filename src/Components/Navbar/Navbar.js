import React, { useState } from 'react';
import { AiOutlineClose } from "react-icons/ai";
import { IoMdMenu } from "react-icons/io";
import {FaFacebook,FaTwitter,FaInstagram,FaDribbble} from 'react-icons/fa'



const Navbar = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const [mobileMenu, setMobileMenu] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'ABOUT' },
    { id: 'tracks', label: 'TRACKS' },
    { id: 'feed', label: 'FEED' },
    { id: 'contact', label: 'CONTACT' },
    { id: 'tickets', label: 'TICKETS' },

  ];

  const triggerMobileNavItem = (target) => {
    setMobileMenu(false);

    const targetElement = document.querySelector(target);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className="relative">
        <div className="w-full bg-[#0000004d] z-50 top-0 absolute sm:ps-16 ps-6 sm:pe-16 pe-6">
          <div className="container py-4 mx-auto flex items-center justify-between lg:justify-between">
            <div>
              <a href="#">
                <h1 className='text-5xl font-semibold text-white'>DJoz</h1>
              </a>
            </div>
            <div className="hidden lg:block">
              <ul className="flex items-center">
        {navItems.map((item) => (
          <li
            key={item.id}
            className={`p-5 mx-1 border-transparent relative group cursor-pointer ${
              item.id === 'home' ? 'transform scale-x-100' : ''
            }`}
          >
            <span
              onClick={() => scrollToSection(item.id)}
              className={`${
                item.id === 'home' ? 'text-white' : 'text-white'
              }`}
            >
              {item.label}
              <span
                className={`absolute bottom-0 left-0 w-full h-[3px] ${
                  item.id === 'home' ? 'bg-white' : 'bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-bottom-left'
                }`}
              ></span>
            </span>
          </li>
        ))}
        <div className='text-xl'>
<span className='flex space-x-2 md:space-x-5 ps-5 items-center'>
  <FaFacebook className='text-white cursor-pointer' />
   <FaTwitter className='text-white cursor-pointer' />
    <FaInstagram className='text-white cursor-pointer' /> 
    <FaDribbble className='text-white cursor-pointer' />
</span>
</div>
      </ul>

            </div>

            <div className="block lg:hidden">
              <button onClick={() => setMobileMenu(!mobileMenu)}>
                {mobileMenu ? (
                  <IoMdMenu className="text-3xl text-white" />
                ) : (
                  <IoMdMenu className="text-4xl text-white" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {mobileMenu && (
        <div className="lg:hidden fixed inset-0 z-50 min-h-screen bg-black bg-opacity-70">
          <div className="absolute right-0 min-h-screen w-3/5 py-4 px-8 shadow md:w-1/3 bg-[#5c00ce] z-50">
            <button className="absolute top-0 right-0 mt-4 mr-4" onClick={() => setMobileMenu(false)}>
              <AiOutlineClose className="text-4xl text-white hover:text-gray-300" />
            </button>
            <ul className="mt-8 flex flex-col space-y-7">
              {navItems.map((item) => (
                <MobileNavItem key={item.id} onClick={() => triggerMobileNavItem(`#${item.id}`)}>
                  {item.label}
                </MobileNavItem>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

const MobileNavItem = ({ children, onClick }) => {
  return (
    <li className="py-2">
      <span onClick={onClick} className="cursor-pointer pt-0.5  uppercase text-white">
        {children}
      </span>
    </li>
  );
};

export default Navbar;