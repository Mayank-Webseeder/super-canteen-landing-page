'use client';

import { useLayoutEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';
import { MessageSquare, Users, Star, ShoppingBag } from 'lucide-react';

export default function Hero() {
  const headingRef = useRef(null);
  const para1Ref = useRef(null);
  const para2Ref = useRef(null);
  const buttonsRef = useRef(null);
  const statsRef = useRef(null);
  const imageRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 0.8 } });

      tl.from(headingRef.current, { y: -50, opacity: 0 })
        .from(para1Ref.current, { x: -50, opacity: 0 }, '-=0.4')
        .from(para2Ref.current, { x: -50, opacity: 0 }, '-=0.6')
        .from(buttonsRef.current, { opacity: 0, y: 30 }, '-=0.5')
        .from(statsRef.current, { y: 30, opacity: 0 }, '-=0.5')
        .from(imageRef.current, { scale: 0.8, opacity: 0 }, '-=0.5');
    });

    return () => ctx.revert();
  }, []);

  return (
    <section id="home" className="relative w-full min-h-screen pt-28 pb-20 flex items-center justify-center overflow-hidden">
      <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
        <source src="/heroo.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black opacity-80" />

      <div className="relative z-10 mt-5 w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center px-6 text-white">
        {/* Left Side */}
        <div className="w-full md:w-1/2 text-left pl-4 md:pl-8 space-y-8">
          <h1 ref={headingRef} className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
            Shop Smarter, <br />Live Better with <br />
            <span className="text-blue-400">Super Canteen</span>
          </h1>

          <p ref={para1Ref} className="text-lg mb-2 text-gray-300">
            Your ultimate hub for <span className="text-yellow-400 font-semibold">fresh groceries</span>, essentials & snacks <br /> — delivered fast!
          </p>

          <p ref={para2Ref} className="text-lg mb-6 text-gray-300">
            We ensure <span className="text-orange-400 font-semibold">top quality</span>, lightning-fast delivery, and customer happiness — right to your doorstep.
          </p>

          {/* Added ref here so GSAP animation works */}
          <div ref={buttonsRef} className="flex flex-col items-center sm:items-start gap-4 mb-8">
            {/* <Link href="/contact">
              <button className="bg-gradient-to-r from-blue-500 to-blue-800 hover:from-blue-600 hover:to-blue-900 text-white px-6 py-3 rounded-lg text-base font-semibold flex items-center gap-2 shadow-lg hover:scale-105 transition">
                <MessageSquare className="w-5 h-5" />
                Start Conversation
              </button>
            </Link> */}

            <a
              href="https://play.google.com/store/apps/details?id=com.supercanteen"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-gradient-to-r from-gray-500 to-gray-700 hover:from-gray-600 hover:to-gray-800 text-white px-6 py-3 rounded-lg text-base font-semibold flex items-center gap-2 shadow-lg hover:scale-105 transition">
                <Image src="/playstore.png" alt="Play Store" width={20} height={20} />
                Download App
              </button>
            </a>
          </div>

          <div
            ref={statsRef}
            className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 justify-items-center"
          >
            <StatCard icon={<Users />} count="10K+" label="Happy Customers" />
            <StatCard icon={<ShoppingBag />} count="100%" label="Fresh Products" />
            <StatCard icon={<Star />} count="4.9★" label="Customer Rating" />
          </div>
        </div>

        {/* Right Side */}
        <div ref={imageRef} className="w-full md:w-1/2 mt-10 md:mt-0 flex justify-center">
          <Image
            src="/grocery.svg"
            alt="Supermarket Illustration"
            width={500}
            height={350}
            className="object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
}

const StatCard = ({ icon, count, label }) => (
  <div className="w-32 sm:w-36 md:w-40 border border-gray-400 rounded-lg p-2 text-center bg-white bg-opacity-10 backdrop-blur-sm text-gray-200 shadow-md hover:scale-105 transition">
    <div className="flex justify-center mb-1 text-blue-400 text-xl">{icon}</div>
    <h3 className="text-lg font-bold mb-1">{count}</h3>
    <p className="text-xs">{label}</p>
  </div>
);
