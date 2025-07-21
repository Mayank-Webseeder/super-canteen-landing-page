'use client';

import { useEffect, useRef, useState } from 'react';
import { UserCircle2 } from 'lucide-react';
import gsap from 'gsap';

export default function Testimonials() {
  const testimonials = [
    { name: 'Ananya Sharma', feedback: 'Super Canteen has transformed my grocery shopping experience with seamless delivery, top-notch quality, and unbeatable prices.'},
    { name: 'Ravi Mehta', feedback: 'Fast delivery and fresh products every time! The support team is highly responsive and resolves issues quickly.'},
    { name: 'Priya Desai', feedback: 'Customer support is excellent and the range of products is impressive. Highly recommended for busy professionals.'},
    { name: 'Suresh Kumar', feedback: 'Affordable prices with a great variety of groceries. The entire ordering process is smooth and efficient.'},
    { name: 'Neha Patel', feedback: 'Packaging is always secure and deliveries are on time, even for bulk orders. A trustworthy service.'},
    { name: 'Dipesh Kushwah', feedback: 'The collection of snacks, beverages, and fresh produce is simply the best. Great value for money.'},
    { name: 'Kavita Joshi', feedback: 'A reliable service that I use every month. They ensure quality and consistency.'},
    { name: 'Mohit Yadav', feedback: 'Website is super easy to use and product details are clear. Prompt delivery every time.', },
    { name: 'Deepika Verma', feedback: 'Their offers and discounts help me save a lot. I am a regular happy customer.' },
  ];

  const cardsPerPage = 3;
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardRefs = useRef([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + cardsPerPage) % testimonials.length;

      gsap.to(cardRefs.current, {
        opacity: 0,
        scale: 0.9,
        duration: 0.5,
        stagger: 0.1,
        onComplete: () => {
          setCurrentIndex(nextIndex);
        }
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  useEffect(() => {
    gsap.fromTo(
      cardRefs.current,
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1, duration: 0.5, stagger: 0.1 }
    );
  }, [currentIndex]);

  const visibleTestimonials = [];
  for (let i = 0; i < cardsPerPage; i++) {
    const index = (currentIndex + i) % testimonials.length;
    visibleTestimonials.push(testimonials[index]);
  }

  return (
    <section id="testimonials" className="w-full bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold text-blue-800 mb-2">What Our Clients Say</h2>
        <div style={{ width: '300px' }} className="h-1 bg-black mx-auto mb-8"></div>
        <p className="text-gray-600 text-base max-w-2xl mx-auto">
          Hear directly from our happy customers who love the Super Canteen experience.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {visibleTestimonials.map((t, index) => (
          <div
            key={index}
            ref={(el) => (cardRefs.current[index] = el)}
            className="border p-6 rounded-lg shadow-sm bg-white text-left flex flex-col justify-between h-[200px]"
          >
            <p className="text-gray-600 italic mb-6">“{t.feedback}”</p>
            <div className="flex items-center gap-2 mt-auto">
              <UserCircle2 className="h-8 w-8 text-blue-800" />
              <div>
                <p className="font-semibold text-gray-800">{t.name}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
