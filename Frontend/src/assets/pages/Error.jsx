import React from 'react';
import { useNavigate } from 'react-router-dom'; 

export default function Error() {
  const navigate = useNavigate();

  return (
    <div className="w-full min-h-screen bg-[#FFF8E1] flex flex-col justify-center items-center px-4 font-['Poppins'] text-[#333]">
      <p className="text-4xl md:text-6xl font-extrabold mb-6 text-center">
        404 — Page Not Found
      </p>
      <img
        src="/error1.gif"
        alt="Error Illustration"
        className="h-60 mb-8"
      />
      <button
        onClick={() => navigate('/')}
        className="px-6 py-3 text-xl md:text-2xl font-semibold rounded-full bg-[#333] text-white shadow-md transition hover:bg-black hover:shadow-lg"
      >
        Back Home
      </button>
    </div>
  );
}
