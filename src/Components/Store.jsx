'use client';
import Image from 'next/image';
import { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const testimonials = [
  {
    heading: 'Vibrant Ambiance & Freshness',
    message:
      'Our Aligarh outlet offers a vibrant and welcoming atmosphere, perfect for students and families alike. The store is always stocked with fresh produce, a wide variety of snacks, and daily essentials. Our seating area is cozy, ensuring customers can relax while enjoying their meals.',
    image: '/store2.jpeg',
  },
  {
    heading: 'Premium City Center Experience',
    message:
      'Visit our premium outlet in the heart of the city! This location features a spacious dining area, modern interiors, and a dedicated section for quick takeaways. The staff is trained to provide quick service, ensuring you’re served within minutes, even during busy hours.',
    image: '/store1.jpeg',
  },
  {
    heading: 'Campus Vibes with Student Specials',
    message:
      'Our campus outlet is designed specifically for students — fast, affordable, and nutritious meals served in a lively environment. We offer exclusive student combos, refreshing beverages, and comfortable seating, making it the perfect hangout spot between classes.',
    image: '/store3.jpeg',
  },
];

export default function Store() {
  const [index, setIndex] = useState(0);

  const handlePrev = () => {
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    //store section
  
    <section className="w-full bg-white py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
          Our <span className="text-orange-500">Store</span>
        </h2>

        <div className="flex flex-col lg:flex-row items-stretch gap-8 h-[300px]">
          {/* Image Section */}
          <div className="w-full lg:w-1/2 rounded-[50px] overflow-hidden h-full">
            <Image
              src={testimonials[index].image}
              alt="Store"
              width={900}
              height={500}
              className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105"
            />
          </div>

          {/* Content Section */}
          <div className="w-full lg:w-1/2 bg-blue-50 rounded-lg p-6 shadow-sm relative flex flex-col justify-between h-full overflow-hidden">
            <div className='mb-5'>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                {testimonials[index].heading}
              </h3>
              <p className="text-lg md:text-xl font-light text-gray-800 leading-relaxed mb-4">
                “{testimonials[index].message}”
              </p>
            </div>

            {/* Navigation Arrows */}
            <div className="flex justify-between mt-5">
              <button
                onClick={handlePrev}
                className="bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-full"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                className="bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-full"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
