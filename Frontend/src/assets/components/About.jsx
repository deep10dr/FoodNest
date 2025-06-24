import React from 'react'

function About() {
    return (
        <div className='w-full min-h-screen flex justify-center items-center p-2 py-15 md:flex-row flex-col'>
            <div className=' justify-center p-2  items-center flex flex-col gap-5 h-max  flex-1 '>
                <div className='relative group  group-hover:bg-black/40'>
                    <img src="/about.jpg" alt="" className='h-50 md:h-80 rounded-2xl ' />
                    <div className='absolute inset-0 z-10 text-white opacity-0 group-hover:opacity-100 bg-black/30 rounded-2xl flex justify-center items-center'>
                        <p className='text-xl font-bold w-100  '>Our skilled chefs craft every meal with care and passion, blending tradition and creativity to serve you fresh, tasty dishes every time.</p>
                    </div>
                </div>
                <div className='relative group  group-hover:bg-black/40'>
                    <img src="/about2.jpg" alt="" className='h-50 md:h-80 rounded-2xl ' />
                    <div className='absolute inset-0 z-10 text-white opacity-0 group-hover:opacity-100 bg-black/30 rounded-2xl flex justify-center items-center'>
                        <p className='text-xl font-bold w-100  '>We use only high-quality, fresh ingredients to ensure every bite is healthy, safe, and full of flavor — because you deserve the best.</p>
                    </div>
                </div>
            </div>
            <div className="flex-1 w-full p-6 md:p-12 shadow-2xl rounded-2xl ">
                <h1 className="text-4xl md:text-6xl font-extrabold text-[#333] mb-8">
                    About <span className="text-[#FF6347]">Us</span>
                </h1>

                <div className="space-y-8 text-[#333]">
                    <div>
                        <h2 className="text-2xl md:text-3xl font-bold mb-2">Bringing People Together</h2>
                        <p className="text-base md:text-lg">
                            At FoodNest, we believe that good food brings people together. Our mission is to deliver fresh, delicious meals straight to your doorstep, made with the finest ingredients and a touch of love.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl md:text-3xl font-bold mb-2">Passionate About Good Food</h2>
                        <p className="text-base md:text-lg">
                            Founded by passionate food lovers, FoodNest is committed to making mealtime convenient, healthy, and enjoyable for everyone. Whether you’re craving traditional flavors or exploring new cuisines, we’ve got you covered.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl md:text-3xl font-bold mb-2">Trusted by Thousands</h2>
                        <p className="text-base md:text-lg">
                            Join thousands of happy customers who trust FoodNest for their daily meals. Experience the taste, convenience, and quality that make us your favorite food delivery partner.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About