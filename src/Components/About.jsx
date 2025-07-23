'use client';

import { useEffect, useRef } from 'react';
import React from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  ShoppingCart,
  Clock,
  Truck,
  Shield,
  Percent,
  Headphones,
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  const cardsRef = useRef([]);
  const buttonsRef = useRef(null);

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
      desc: 'Choose from 10,000+ products including groceries, essentials, and more — all in one place.',
    },
    {
      icon: <Clock className="h-8 w-8 text-blue-800" />,
      title: 'Quick Delivery',
      desc: 'Get your orders within 2–4 hours with our same-day delivery service.',
    },
    {
      icon: <Truck className="h-8 w-8 text-blue-800" />,
      title: 'Free Delivery',
      desc: 'Enjoy free delivery on orders above ₹500 — affordable and convenient.',
    },
    {
      icon: <Shield className="h-8 w-8 text-blue-800" />,
      title: 'Quality Assured',
      desc: 'Shop with confidence. Freshness and quality guaranteed on every product.',
    },
    {
      icon: <Percent className="h-8 w-8 text-blue-800" />,
      title: 'Best Prices',
      desc: 'Unbeatable prices compared to big retailers like DMart. Value for every rupee.',
    },
    {
      icon: <Headphones className="h-8 w-8 text-blue-800" />,
      title: '24/7 Support',
      desc: 'Our team is always here to help — anytime, anywhere.',
    },
  ];

  return (
    <section id="features" className="relative w-full py-10 px-6 bg-white overflow-hidden">
      {/* Section Header */}
      <div className="relative z-10 max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-3xl font-extrabold text-blue-800 mb-2">
          Features That Make Super Canteen Powerful
        </h2>
        <div style={{ width: '650px' }} className="h-1 bg-black mx-auto mb-10"></div>
        <p className="text-gray-500 text-base md:text-lg">
          Transform the way you order groceries — lightning fast, effortless, and budget-friendly.
        </p>
      </div>

      {/* Feature Grid */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4 md:px-8">
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

// Feature Card Component
const FeatureCard = React.forwardRef(({ icon, title, desc, id }, ref) => (
 <div
  ref={ref}
  className="relative bg-white border border-gray-200 rounded-lg p-6 shadow-sm transition-transform duration-300 ease-in-out hover:scale-105 group hover:bg-blue-50"

>
  {/* Blue Line on Hover */}
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


));

FeatureCard.displayName = 'FeatureCard';
