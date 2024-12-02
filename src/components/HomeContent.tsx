"use client"

import React from "react";
import AOS from 'aos';
import {useEffect} from "react";
import 'aos/dist/aos.css';

const HomeContent =() => {
    useEffect(() =>{
        AOS.init({
            duration:1000,
            once: true,
        });
    }, []);
    return(
         <section className="hero h-screen flex items-center bg-cover bg-center" style={{backgroundImage:"url('/mine.jpg')"}}>
            <div className="pl-0 md:pl-16 text-black text-left">
                <h1 className="text-6xl font-bold drop-shadow-md" data-aos='fade-up'> Welcome To Rang-e-Zevar</h1>
                <p className="text-3xl mt-4 text-center" > Jewellery that adds sparkle to your every moment.</p>
                <div className="flex justify-center">
    <button className="mt-6 px-6 py-3 bg-amber-300 hover:bg-amber-400 rounded-md font-bold">
      Shop Now
    </button>
  </div>
            </div>
            </section>
        );
    

};
export default HomeContent;