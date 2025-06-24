import React, { useState } from 'react';
import { FaHome, FaInfoCircle, FaServicestack, FaStar, FaBox, FaQuoteRight, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const data = [
    { name: 'Home', icon: <FaHome /> },
    { name: 'About', icon: <FaInfoCircle /> },
    { name: 'Service', icon: <FaServicestack /> },
    { name: 'Features', icon: <FaStar /> },
    { name: 'Product', icon: <FaBox /> },
    { name: 'Testimonial', icon: <FaQuoteRight /> },
    { name: 'Contact', icon: <FaEnvelope /> },
  ];

  return (
    <nav className="w-full px-6 py-3 bg-[#8BC34A] shadow font-['Poppins'] z-[9999999]">
      <div className="flex justify-between items-center">
        <div className="text-2xl font-bold text-[#333] flex md:flex-row flex-row-reverse  w-full justify-between"><div className='flex  justify-center items-center gap-2'><p className=''>FoodNest  </p> <img src="https://cdn-icons-png.flaticon.com/128/3183/3183463.png" alt="" className='h-10' /></div>
          <div className="md:hidden text-3xl cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
        </div>



        <div className={`flex flex-col md:flex-row md:items-center gap-6 md:gap-8 bg-[#8BC34A] text-[#333] absolute md:static md:bg-transparent md:top-0 top-15 h-screen md:h-max w-max  md:w-auto px-8 md:px-0 transition-all duration-300 ease-in ${isOpen ? 'left-0' : 'left-[-500px]'}`}>
          {data.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-2 cursor-pointer hover:text-[#FF6347] transition py-2 md:py-0"
              onClick={()=>{
                window.location.href=`/#${item.name.toLowerCase()}`
              }}
            >
              {item.icon}
              <p>{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}
