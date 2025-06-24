import React from 'react';
import { FaUser, FaEnvelope, FaPaperPlane, FaCommentDots } from 'react-icons/fa';

function Contact() {
  return (
    <div className="min-h-screen w-full relative overflow-hidden">
=
      <video
        src="/4923053_Feast_Table_1920x1080.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      ></video>

      <div className="absolute inset-0 flex justify-center items-center z-10 ">
        <div className="w-max bg-black/60 rounded-2xl p-8 flex flex-col gap-6 ">
          <h1 className="text-white text-4xl md:text-5xl font-bold text-center mb-4">Contact</h1>

          <div className="flex items-center bg-white rounded-full px-6 py-2">
            <FaUser className="text-[#FF6347] mr-3" />
            <input
              type="text"
              placeholder="Your Name"
              className="flex-1 outline-none bg-transparent text-[#333]"
            />
          </div>

          <div className="flex items-center bg-white rounded-full px-4 py-2">
            <FaEnvelope className="text-[#FF6347] mr-3" />
            <input
              type="email"
              placeholder="Your Email"
              className="flex-1 outline-none bg-transparent text-[#333]"
            />
          </div>

          <div className="flex items-start bg-white rounded-2xl px-4 py-2">
            <FaCommentDots className="text-[#FF6347] mr-3 mt-2" />
            <textarea
              placeholder="Your Message"
              rows="4"
              className="flex-1 outline-none bg-transparent text-[#333] resize-none"
            ></textarea>
          </div>

          <div className='w-full flex justify-center items-center'>
            <button className="flex items-center justify-center bg-[#FF6347] text-white font-bold px-6 py-3 rounded-full hover:bg-[#e5533f] transition w-max">
            <FaPaperPlane className="mr-2" /> Send Message
          </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
