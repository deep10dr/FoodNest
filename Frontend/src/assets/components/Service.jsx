import React from 'react';

export default function Service() {
  const services = [
    {
      title: '24/7 Customer Support',
      description:
        'Our friendly team is always here to help you with your orders, queries, or special requests — day or night.',
      icon: 'https://cdn-icons-png.flaticon.com/128/8898/8898963.png',
    },
    {
      title: 'Fresh Meal Delivery',
      description:
        'Enjoy chef-prepared meals delivered hot and fresh to your doorstep, anytime you crave quality food without the hassle of cooking.',
      icon: 'https://cdn-icons-png.flaticon.com/128/16135/16135464.png',
    },
    {
      title: 'Custom Meal Plans',
      description:
        'Choose meal plans tailored to your taste, diet, and schedule. We make healthy eating easy and flexible for everyone.',
      icon: 'https://cdn-icons-png.flaticon.com/128/11529/11529135.png',
    },
    {
      title: 'Party & Event Catering',
      description:
        'Hosting a party or corporate event? Let FoodNest handle the food — delicious menus, hassle-free service, and happy guests guaranteed.',
      icon: 'https://cdn-icons-png.flaticon.com/128/864/864763.png',
    },
  ];

  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center px-4 py-20 font-['Poppins'] bg-[#FFF8E1]">
      <h1 className="text-4xl md:text-6xl font-extrabold text-[#333] mb-12">
        Our <span className="text-[#FF6347]">Services</span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 place-items-center w-full max-w-6xl">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative bg-white rounded-2xl shadow-2xl w-72 h-80 p-6 pt-16 hover:scale-105 transition duration-300"
          >
      
            <div className="absolute -top-10 left-2 -translate-x-1/2 bg-white p-4 rounded-full shadow-lg">
              <img src={service.icon} alt={service.title} className="w-20 h-20" />
            </div>

            <h2 className="text-center text-[#FF6347] font-bold text-xl mb-4">
              {service.title}
            </h2>
            <p className="text-center text-[#333] font-medium text-base">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
