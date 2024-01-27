import React from 'react';
import whiteJacet from "../../img/whiteJacet.png"
import one from "../../img/one.png"
import two from "../../img/two.png"
import there from "../../img/there.png"
import four from "../../img/four.png"


const Hero = () => {
    return (
        <div id='hero'>
            <div className="container">
                <div className="hero mt-16">
                <section class="bg-white dark:bg-gray-900">
    <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div class="mr-auto place-self-center lg:col-span-7">
            <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Hello</h1>
            <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">I'm Aziret</h1>
            <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">I've been doing web design, front-end and back-end development for a year now. Do you need a website design, site layout, or maybe a turnkey website? Then contact me</p>
            <a href="#" class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                Contact me
            </a> 
        </div>
        <div class="dott hidden lg:mt-0 lg:col-span-5 lg:flex relative">
            <img className='object-cover h-[400px] w-[409px] ml-[-40px] ' src={whiteJacet} alt="img"/>
            <img className='absolute top-0 left-[-30px] w-[80px]' src={one} alt="img" />
            <img className='absolute top-[200px] left-[-100px] w-[80px]' src={two} alt="img" />
            <img className='absolute top-[400px] left-[-10px] w-[80px]' src={there} alt="img" />
            <img className='absolute top-0 right-[-30px] w-20' src={four} alt="img" />
        </div>                
    </div>
</section>
                </div>
            </div>
        </div>
    );
};

export default Hero;