import React from 'react';

export default function HeroSection() {
    return (
        <section className="w-full flex flex-col-reverse md:flex-row items-center min-h-screen px-2 py-2 md:px-8 md:py-10 font-['Poppins']  md:gap-1 gap-20">

            {/* Left: Text */}
            <div className="flex-1 text-center md:text-left space-y-6">
                <h1 className="text-4xl md:text-6xl font-extrabold text-[#333]">
                    Welcome to <span className="text-[#FF6347]">FoodNest</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-700 max-w-lg">
                    Delicious meals delivered fresh to your door. Experience the taste of happiness with every bite.
                </p>
                <button className="mt-4 px-8 py-3 bg-[#FF6347] text-white font-semibold rounded-full hover:bg-[#e5533d] transition shadow-md">
                    Order Now
                </button>
            </div>

            {/* Right: Image */}
            <div className="flex-1  relative w-full h-150 bg-center bg-cover bg-no-repeat  group rounded-2xl overflow-hidden bg-[url(/food-view.jpg)]"
            >

                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex justify-center items-center p-6">
                    <p className="text-white text-2xl md:text-4xl font-bold text-center">
                        Food is essential for life — nourish it with love.
                    </p>
                </div>
            </div>
        </section>
    );
}
