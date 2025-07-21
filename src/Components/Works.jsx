'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { Download, Search, CreditCard, Home } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Works() {
  const stepsRef = useRef([]);

  const steps = [
    {
      id: 1,
      type: 'STEP 1',
      title: 'Open Super Canteen',
      description: 'Access Super Canteen via our app or website to explore groceries, snacks & essentials.',
      icon: <Download className="h-6 w-6 text-blue-800" />,
      bgColor: 'bg-blue-100',
    },
    {
      id: 2,
      type: 'STEP 2',
      title: 'Browse & Select',
      description: 'Quickly browse & pick your favorite items using search and filters.',
      icon: <Search className="h-6 w-6 text-green-700" />,
      bgColor: 'bg-green-100',
    },
    {
      id: 3,
      type: 'STEP 3',
      title: 'Easy Payment',
      description: 'Pay via UPI, cards, wallets or opt for cash on delivery securely.',
      icon: <CreditCard className="h-6 w-6 text-purple-700" />,
      bgColor: 'bg-purple-100',
    },
    {
      id: 4,
      type: 'STEP 4',
      title: 'Doorstep Delivery',
      description: 'Sit back & relax while we deliver fresh items quickly to your door.',
      icon: <Home className="h-6 w-6 text-pink-700" />,
      bgColor: 'bg-pink-100',
    },
  ];

  useEffect(() => {
    gsap.utils.toArray(stepsRef.current).forEach((el, idx) => {
      gsap.from(el, {
        scrollTrigger: {
          trigger: el,
          start: 'top 80%',
        },
        opacity: 0,
        y: 40,
        duration: 0.6,
        delay: idx * 0.2,
        ease: 'power3.out',
      });
    });
  }, []);

  return (
    <section id="how-it-works" className="w-full bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-3xl font-extrabold text-blue-800 mb-5">How It Works</h2>
         <div style={{ width: '200px' }} className="h-1 bg-black mx-auto mb-10"></div>
        <p className="text-gray-500 text-base md:text-lg mb-10">
          Simple steps to get your groceries delivered seamlessly
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {steps.map((step, index) => (
          <div
            key={index}
            ref={(el) => (stepsRef.current[index] = el)}
            className="relative border-t-2 border-gray-300 pt-10 text-center group bg-white rounded-lg p-5 shadow hover:shadow-xl transition duration-300 hover:scale-105"
          >
            <div className={`absolute -top-6 left-1/2 transform -translate-x-1/2 ${step.bgColor} p-3 rounded-full shadow`}>
              {step.icon}
            </div>
            <p className="text-xs uppercase text-blue-800 font-semibold mb-2">{step.type}</p>
            <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-blue-600">{step.title}</h3>
            <p className="text-gray-600 text-sm">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
