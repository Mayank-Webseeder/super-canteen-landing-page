'use client';

import { useEffect, useRef } from 'react';
import React from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ShoppingCart, Clock, Truck, Shield, Percent, Headphones } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  const cardsRef = useRef([]);

  useEffect(() => {
    cardsRef.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          delay: index * 0.1,
          scrollTrigger: {
            trigger: card,
            start: 'top 80%',
          },
        }
      );
    });
  }, []);

  const features = [
    {
      icon: <ShoppingCart className="h-8 w-8 text-blue-800" />,
      title: 'Wide Selection',
      desc: 'We offer a vast selection of over 10,000 products including groceries, household essentials, and more. Find everything you need in one place without hassle.',
    },
    {
      icon: <Clock className="h-8 w-8 text-blue-800" />,
      title: 'Quick Delivery',
      desc: 'Our same-day delivery ensures that your essentials reach you within 2–4 hours, providing a swift and reliable service when you need it most.',
    },
    {
      icon: <Truck className="h-8 w-8 text-blue-800" />,
      title: 'Free Delivery',
      desc: 'Enjoy free delivery on all orders above ₹500, ensuring affordability along with convenience for every customer.',
    },
    {
      icon: <Shield className="h-8 w-8 text-blue-800" />,
      title: 'Quality Assured',
      desc: 'We guarantee the freshness and quality of all our products, so you can shop with confidence every time.',
    },
    {
      icon: <Percent className="h-8 w-8 text-blue-800" />,
      title: 'Best Prices',
      desc: 'Get the most competitive prices in the market, comparable to top players like DMart, giving you great value for your money.',
    },
    {
      icon: <Headphones className="h-8 w-8 text-blue-800" />,
      title: '24/7 Support',
      desc: 'Our customer support is available around the clock to assist you with any queries or issues you may have.',
    },
  ];

  return (
    <section id="features" className="w-full bg-white py-12 px-4">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold text-blue-800 mb-2">Why Choose Super Canteen?</h2>
        <div style={{ width: '400px' }} className="h-1 bg-black mx-auto mb-8"></div>
        <p className="text-gray-600 text-base max-w-2xl mx-auto">
          We make grocery shopping simple, convenient, and affordable for everyone. Experience the future of grocery shopping with our innovative features.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
        {features.map((feature, idx) => (
          <FeatureCard
            key={idx}
            icon={feature.icon}
            title={feature.title}
            desc={feature.desc}
            id={idx + 1}
            ref={(el) => (cardsRef.current[idx] = el)}
          />
        ))}
      </div>
    </section>
  );
}

const FeatureCard = React.forwardRef(({ icon, title, desc, id }, ref) => {
  return (
    <div
      ref={ref}
      className="relative bg-white border border-gray-200 rounded-lg p-6 shadow-sm transform transition-transform duration-500 group hover:scale-105 hover:bg-blue-50"
    >
      {/* Left Blue Line on Hover */}
      <div className="absolute left-0 top-0 h-full w-1 bg-blue-800 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-l-lg"></div>

      <div className="flex items-center justify-between mb-4">
        <div className="p-2 rounded-full bg-blue-100 text-blue-800 group-hover:bg-blue-200 transition-all duration-300">
          {icon}
        </div>
        <div className="flex-1 border-t border-blue-800 mx-4"></div>
        <div className="text-lg text-gray-400 font-semibold">{id}</div>
      </div>

      <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{desc}</p>
    </div>

  );
});

FeatureCard.displayName = 'FeatureCard';
