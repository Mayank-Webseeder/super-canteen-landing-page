'use client';

import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Store as StoreIcon, Building2, GraduationCap } from 'lucide-react';

const testimonials = [
  {
    heading: 'Vibrant Ambiance & Freshness',
    message:
      'Our Aligarh outlet offers a vibrant and welcoming atmosphere, perfect for students and families alike. The store is always stocked with fresh produce, a wide variety of snacks, and daily essentials. Our seating area is cozy, ensuring customers can relax while enjoying their meals.',
    image: '/store2.jpeg',
    icon: StoreIcon,
  },
  {
    heading: 'Premium City Center Experience',
    message:
      'Visit our premium outlet in the heart of the city! This location features a spacious dining area, modern interiors, and a dedicated section for quick takeaways. The staff is trained to provide quick service, ensuring you’re served within minutes, even during busy hours.',
    image: '/store1.jpeg',
    icon: Building2,
  },
  {
    heading: 'Campus Vibes with Student Specials',
    message:
      'Our campus outlet is designed specifically for students — fast, affordable, and nutritious meals served in a lively environment. We offer exclusive student combos, refreshing beverages, and comfortable seating, making it the perfect hangout spot between classes.',
    image: '/store3.jpeg',
    icon: GraduationCap,
  },
];

export default function Store() {
  const [index, setIndex] = useState(0);
  const imageRef = useRef(null);
  const contentRef = useRef(null);

useEffect(() => {
  const tl = gsap.timeline();

  tl.fromTo(
    imageRef.current,
    { x: -200, opacity: 0 },
    { x: 0, opacity: 1, duration: 3.5, ease: 'expo.out' }
  ).fromTo(
    contentRef.current,
    { x: 200, opacity: 0 },
    { x: 0, opacity: 1, duration: 3.5, ease: 'expo.out' },
    '<' 
  );
}, [index]);



  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const IconComponent = testimonials[index].icon;

  return (
    <section className="w-full bg-white py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-2">Our Store</h2>
        <div style={{ width: '170px' }} className="h-1 bg-black mx-auto mb-10"></div>

        <div className="flex flex-col lg:flex-row items-stretch gap-8 lg:h-[300px]">
          <div
            ref={imageRef}
            className="w-full lg:w-1/2 h-full rounded-[30px] overflow-hidden relative"
          >
            <Image
              key={testimonials[index].image}
              src={testimonials[index].image}
              alt="Store"
              width={900}
              height={500}
              className="w-full h-full object-cover object-center"
            />
          </div>

          <div
            ref={contentRef}
            className="w-full lg:w-1/2 h-full bg-blue-50 rounded-[30px] p-5 md:p-8 shadow-sm relative flex flex-col justify-center"
          >
            <div className="flex justify-center mb-4">
              <IconComponent className="w-10 h-10 text-blue-800" />
            </div>
            <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-3 text-center">
              {testimonials[index].heading}
            </h3>
            <p className="text-base md:text-lg font-light text-gray-800 leading-relaxed text-center">
              “{testimonials[index].message}”
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
