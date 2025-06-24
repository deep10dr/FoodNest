import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import About from '../components/About'
import Service from '../components/Service'
import Features from '../components/Features'
import Product from '../components/Product'
import Testimonial from '../components/Testimonial'
import Contact from '../components/Contact'
function Home() {
    return (
        <div className='w-full overflow-auto scroll-smooth bg-[#FFF8E1] min-h-screen'>
            <div className='w-full fixed z-[9999]'><Navbar /></div>

            <div className='w-full h-max md:mt-8 mt-16'>
                <section className='m-0 ' id='home'>
                    <HeroSection />
                </section>
                <section className='w-full ' id='about'><About /></section>
                <section className='w-full ' id='service' ><Service/></section>
                <section className='w-full  ' id='features'><Features/></section>
                <section className='w-full  ' id='product'><Product/></section>
                <section className='w-full  ' id='testimonial'><Testimonial/></section>
                <section className='w-full  ' id='contact'><Contact/></section>
            </div>
        </div>
    )
}

export default Home