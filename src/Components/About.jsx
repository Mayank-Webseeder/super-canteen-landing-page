'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import React from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Clock,
  ShoppingCart,
  Truck,
  Shield,
  Percent,
  Headphones,
} from 'lucide-react';

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
          delay: index * 0.1, // small stagger
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
      icon: <ShoppingCart className="h-7 w-7 text-blue-800" />,
      title: 'Wide Selection',
      desc: '10,000+ products from groceries to household items',
    },
    {
      icon: <Clock className="h-7 w-7 text-blue-800" />,
      title: 'Quick Delivery',
      desc: 'Same-day delivery within 2–4 hours',
    },
    {
      icon: <Truck className="h-7 w-7 text-blue-800" />,
      title: 'Free Delivery',
      desc: 'Free delivery on orders above ₹500',
    },
    {
      icon: <Shield className="h-7 w-7 text-blue-800" />,
      title: 'Quality Assured',
      desc: 'Fresh products with quality guarantee',
    },
    {
      icon: <Percent className="h-7 w-7 text-blue-800" />,
      title: 'Best Prices',
      desc: 'Competitive prices just like DMart',
    },
    {
      icon: <Headphones className="h-7 w-7 text-blue-800" />,
      title: '24/7 Support',
      desc: 'Round the clock customer support',
    },
  ];

  return (
    <section id="features" className="w-full bg-white py-10 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-3xl font-bold text-blue-800 mb-4">
          Why Choose Super Canteen?
        </h2>
        <div style={{ width: '400px' }} className="h-1 bg-black mx-auto mb-8"></div>

        <p className="text-lg text-gray-600 mb-16 max-w-3xl mx-auto">
          We make grocery shopping simple, convenient, and affordable for everyone. Experience the future of grocery shopping with our innovative features.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <FeatureCard
              key={idx}
              icon={feature.icon}
              title={feature.title}
              desc={feature.desc}
              ref={(el) => (cardsRef.current[idx] = el)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

const FeatureCard = React.forwardRef(({ icon, title, desc }, ref) => {
  return (
    <div
      ref={ref}
      className="rounded-xl p-8 bg-white text-center shadow-sm border border-transparent transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-blue-800"
    >
      <div className="w-14 h-14 mx-auto rounded-full flex items-center justify-center mb-4 bg-blue-100">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{desc}</p>
    </div>
  );
});

FeatureCard.displayName = 'FeatureCard';
