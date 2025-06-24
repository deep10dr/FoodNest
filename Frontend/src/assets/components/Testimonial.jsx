import React from 'react';

function Testimonial() {
    const testimonials = [
        {
            name: "Arnold schwarzenegger",
            role: "Body Builder",
            quote: "FoodNest has completely changed my daily meals — fresh, tasty, and always on time. Highly recommend!",
            img: "https://media.gettyimages.com/id/2172603727/photo/berlin-germany-former-california-governor-arnold-schwarzenegger-speaks-to-students-after-he.jpg?s=612x612&w=0&k=20&c=85PjR1cvZwFA6tm4dqucbT_Q6vJsd5cAH73YlkmHB-A="
        },
        {
            name: "Tom Cruise",
            role: "American actor and producer",
            quote: "I love how easy it is to order healthy food for my hectic schedule. Great service and great taste!",
            img: "/tom.webp"
        },
        {
            name: "Benjamin Kirby Tennyson",
            role: "Student",
            quote: "Affordable, delicious, and convenient. FoodNest is my go-to for quick meals between classes.",
            img: "https://i.pinimg.com/736x/68/33/dd/6833dd5f92bc04e64a60cc3bbded2391.jpg"
        },
        {
            name: "Chhota Bheem",
            role: "Student",
            quote: "Affordable, delicious, and convenient. FoodNest is my go-to for quick meals between classes.",
            img: "/bheem.jpg"
        },
        {
            name: "Generator Rex",
            role: "Superhero",
            quote: "Affordable, delicious, and convenient. FoodNest is my go-to for quick meals between classes.",
            img: "/rex.jpg"
        },
    ];

    return (
        <div className="w-full min-h-screen flex flex-col justify-center items-center py-20">
            <h1 className="text-4xl md:text-6xl font-extrabold text-[#333] mb-12">
                Testi<span className="text-[#FF6347]">monial</span>
            </h1>

            <div className="grid md:grid-cols-3 grid-cols-1 gap-8 w-full max-w-6xl">
                {testimonials.map((item, index) => (
                    <div
                        key={index}
                        className="bg-white shadow-2xl rounded-2xl p-6 flex flex-col items-center text-center transition transform hover:-translate-y-2"
                    >
                        <img
                            src={item.img}
                            alt={item.name}
                            className="w-24 h-24 rounded-full mb-4 object-cover"
                        />
                        <h2 className="text-xl font-bold text-[#333]">{item.name}</h2>
                        <p className="text-sm text-[#FF6347] mb-4">{item.role}</p>
                        <p className="text-[#555] font-medium">“{item.quote}”</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Testimonial;
