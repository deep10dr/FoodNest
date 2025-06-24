import React, { useState } from 'react';

function Features() {
  const data = [
    {
      title: "Easy Ordering",
      description: "Order your favorite meals in just a few clicks through our simple and user-friendly app or website.",
      img: "/ordering.jpg"
    },
    {
      title: "Fast Delivery",
      description: "Get hot, freshly prepared food delivered to your door quickly — we value your time and hunger!",
      img: "/fast.jpg"
    },
    {
      title: "Flexible Scheduling",
      description: "Schedule orders in advance or subscribe for daily meals as per your convenience.",
      img: "/flex.jpg"
    },
    {
      title: "Fresh & Healthy",
      description: "We use only fresh, locally sourced ingredients to prepare meals that are both tasty and nutritious.",
      img: "/healthy.jpg"
    },
    {
      title: "Secure Payment",
      description: "Multiple payment options with safe and secure checkout to give you peace of mind.",
      img: "/2151961285.jpg"
    },
    {
      title: "Real-Time Tracking",
      description: "Track your order live from our kitchen to your doorstep with real-time updates.",
      img: "/tracking.jpg"
    }
  ];

  const [current, setCurrent] = useState(0);

  const prevIndex = (current - 1 + data.length) % data.length;
  const nextIndex = (current + 1) % data.length;

  return (
    <div className='w-full min-h-screen flex justify-center items-center flex-col py-20 px-4'>
      <h1 className="text-4xl md:text-6xl font-extrabold text-[#333] mb-10 text-center">
        Our <span className="text-[#FF6347]">Features</span>
      </h1>

      <div className='w-full flex justify-center items-center relative h-[70vh] md:h-screen'>

        {/* Previous card */}
        <div
          className='w-[80%] md:w-96 h-[50%] md:h-80 me-4 md:me-10 opacity-90 rounded-2xl shadow-2xl cursor-pointer p-4 bg-white overflow-hidden'
          onClick={() => setCurrent(prevIndex)}
        >
          <img src={data[prevIndex].img} alt={data[prevIndex].title} className='h-40 w-full object-cover mb-4 rounded-xl' />
          <p className='text-xl font-bold mb-2'>{data[prevIndex].title}</p>
          <p className='text-sm'>{data[prevIndex].description}</p>
        </div>

        <div
          className='w-[80%] md:w-96 h-[50%] md:h-80 opacity-90 rounded-2xl shadow-2xl cursor-pointer p-4 bg-white overflow-hidden'
          onClick={() => setCurrent(nextIndex)}
        >
          <img src={data[nextIndex].img} alt={data[nextIndex].title} className='h-40 w-full object-cover mb-4 rounded-xl' />
          <p className='text-xl font-bold mb-2'>{data[nextIndex].title}</p>
          <p className='text-sm'>{data[nextIndex].description}</p>
        </div>

        {/* Center card */}
        <div className='w-full md:w-[30rem] h-max absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-2xl rounded-2xl z-10 bg-white p-6 overflow-hidden'>
          <img src={data[current].img} alt={data[current].title} className='h-52 md:h-72 w-full object-cover mb-4 rounded-xl' />
          <p className='text-2xl font-bold mb-2'>{data[current].title}</p>
          <p className='text-sm md:text-base'>{data[current].description}</p>
        </div>

      </div>
    </div>
  );
}

export default Features;
