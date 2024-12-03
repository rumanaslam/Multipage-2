"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const HomeContent = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section
      className="hero h-screen flex items-center justify-start bg-cover bg-center relative"
      style={{
        backgroundImage: "url('/mine.jpg')",
        backgroundSize: "cover", // Ensures the image covers the entire screen
        backgroundPosition: "center", // Keeps the image centered
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Text Section */}
      <div className="relative z-20 text-black text-left px-8 py-10 md:py-16 md:px-20 w-full max-w-xl">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold drop-shadow-md" data-aos="fade-up">
          Welcome To Rang-e-Zevar
        </h1>
        <p className="text-xl sm:text-lg md:text-2xl mt-4">
          Jewellery that adds sparkle to your every moment.
        </p>
        <div className="flex justify-start mt-6">
          {/* Updated Button Color */}
          <button className="px-6 py-3 bg-green-500 hover:bg-green-600 rounded-md font-bold">
            Shop Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomeContent;
