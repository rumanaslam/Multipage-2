import React from 'react'

const About = () => {
  return (
    <section 
      className="about h-screen flex items-center justify-start bg-cover bg-center text-amber-300 px-10" 
      style={{backgroundImage: "url('/bagy2.jpg')"}}
    >
      <div className="bg-black bg-opacity-60 p-8 rounded-md max-w-lg w-full mx-auto lg:ml-0 lg:w-[400px] lg:h-auto">
        <h2 className="text-4xl font-bold mb-4" data-aos="fade-up">
          About Us
        </h2>
        <p className="text-white text-sm sm:text-base md:text-lg leading-relaxed">
          Rang-e-Zevar is a premium jewellery brand that beautifully blends traditional heritage with modern elegance. Each piece is meticulously handcrafted using high-quality materials, making it a perfect fit for every personality and occasion. Our designs are more than just ornaments—they tell a story of style, grace, and timeless tradition.
          <br />
          Whether you&apos;re looking for a royal set for a wedding or something subtle and elegant for everyday wear, our collection is crafted to impress. At Rang-e-Zevar, we take pride in our craftsmanship and passion, bringing you jewellery that adds a unique sparkle to your style.
        </p>
      </div>
    </section>
  )
}

export default About;
