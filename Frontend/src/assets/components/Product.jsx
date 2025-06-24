import React from 'react';

function Product() {
    return (
        <div className='w-full min-h-screen flex justify-center items-center  md:flex-row flex-col py-24 gap-10 relative'>


            <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-full text-center z-50">
                <h1 className="text-4xl md:text-6xl font-extrabold text-[#333]">
                    Our <span className="text-[#FF6347]">Product</span>
                </h1>
            </div>

            <div className="flex-1 flex justify-center items-center shadow-2xl rounded-2xl relative group overflow-hidden w-full max-w-[600px] h-[500px]">
                <img
                    src="https://img.freepik.com/free-photo/vertical-shot-chickpea-curry-chana-masala-with-lime-bowl-white-surf_181624-31989.jpg"
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover rounded-2xl"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col items-center justify-start pt-20 px-6 text-white overflow-y-auto">
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
                        V<span className="text-[#FF6347]">eg</span>
                    </h1>
                    {[
                        { name: 'Paneer Butter Masala', img: 'https://img.freepik.com/premium-photo/malai-achari-paneer-gravy-made-using-whipping-cream-served-serving-pan-selective-focus_466689-30435.jpg' },
                        { name: 'Veg Biryani', img: 'https://img.freepik.com/free-photo/side-close-up-view-spices-pilaf-board-bowls-colorful-spices_140725-74084.jpg' },
                        { name: 'Dal Tadka', img: 'https://img.freepik.com/free-photo/indian-dhal-spicy-curry-bowl-spices-herbs-rustic-black-wooden-table_2829-18712.jpg' },
                        { name: 'Hakka Noodles', img: 'https://img.freepik.com/free-photo/top-view-delicious-noodles-concept_23-2148773775.jpg' },
                        { name: 'Veg Thali', img: 'https://img.freepik.com/premium-photo/indian-hindu-veg-thali-food-platter-selective-focus_466689-35970.jpg' }
                    ].map((item, i) => (
                        <div key={i} className="flex items-center mb-4 w-full">
                            <img src={item.img} alt={item.name} className="h-20 w-20 rounded-full mr-4" />
                            <p className="font-bold">{item.name}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex-1 flex justify-center items-center shadow-2xl rounded-2xl relative group overflow-hidden w-full max-w-[600px] h-[500px]">
                <img
                    src="https://img.freepik.com/premium-photo/indian-fish-platter-thali-popular-sea-food-non-vegetarian-meal-from-mumbai-konkan-maharashtra-goa-bengal-kerala-served-steel-plate-banana-leaf_466689-16700.jpg"
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover rounded-2xl"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col items-center justify-start pt-20 px-6 text-white overflow-y-auto">
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
                        Non <span className="text-[#FF6347]">Veg</span>
                    </h1>
                    {[
                        { name: 'Chicken Biryani', img: 'https://img.freepik.com/premium-photo/dum-handi-chicken-biryani-is-prepared-earthen-clay-pot-called-haandi-popular-indian-non-vegetarian-food_466689-52248.jpg' },
                        { name: 'Butter Chicken', img: 'https://img.freepik.com/free-photo/chicken-red-curry-black-cup_1150-23917.jpg' },
                        { name: 'Mutton Curry', img: 'https://img.freepik.com/premium-photo/indian-style-meat-dish-mutton-gosht-masala-lamb-rogan-josh-served-bowl-selective-focus_466689-53460.jpg' },
                        { name: 'Fish Fry', img: 'https://img.freepik.com/free-photo/crispiy-onion-rolls-with-tartar-dip-sauce_114579-1716.jpg' },
                        { name: 'Egg Curry', img: 'https://img.freepik.com/free-photo/view-delicious-egg-dish_23-2150777633.jpg' }
                    ].map((item, i) => (
                        <div key={i} className="flex items-center mb-4 w-full">
                            <img src={item.img} alt={item.name} className="h-20 w-20 rounded-full mr-4" />
                            <p className="font-bold">{item.name}</p>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
}

export default Product;
