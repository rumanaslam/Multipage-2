import React from 'react';
import Image from 'next/image'; // Import Image component

const Jwellery = () => {
  const clothData = [
    { id: 1, name: 'Afghani Jwellery', price: 3000, description: '3 piece set of jewellery', image: '/pic1.jpeg' },
    { id: 2, name: 'Pearl Jwellery', price: 3000, description: 'Pearl 2 piece', image: '/pic2.jpeg' },
    { id: 3, name: 'Silver Jwellery', price: 3000, description: 'Delicate Silver Jewellery', image: '/pic 3.jpeg' },
    { id: 4, name: 'Heavy Bridal Jwellery Set', price: 4000, description: 'Luxurious Bold Design', image: '/pic 4.jpeg' },
    { id: 5, name: 'Green Guloband', price: 3000, description: 'Party wear Jewellery', image: '/pic 5.jpeg' },
    { id: 6, name: 'Aqua Green Heavy Jwellery Set', price: 3500, description: '3 Piece set of Jwellery', image: '/pic 6.jpeg' },
  ];

  return (
    <div className="clothes grid grid-cols-1 md:grid-cols-3 gap-10 px-10 my-10">
      {clothData.map((cloth) => (
        <div key={cloth.id} className="cloth-card bg-white p-5 rounded-md text-center">
          <div className="relative w-full h-64">
            {/* Replace <img> with <Image /> */}
            <Image
              src={cloth.image}
              alt={cloth.name}
              layout="fill" // Ensure the image fills the container
              objectFit="cover" // Maintain aspect ratio
              className="rounded-md transition-transform duration-300 transform hover:scale-110"
            />
          </div>
          <h3 className="mt-4 text-2xl font-bold">{cloth.name}</h3>
          <p className="text-black font-bold">{cloth.description}</p>
          <div className="price bg-white text-xl font-semibold mt-2">PKR {cloth.price}</div>
          <button className="mt-4 px-4 py-2 bg-black text-white rounded-md">Add to Bag</button>
        </div>
      ))}
    </div>
  );
};

export default Jwellery;
