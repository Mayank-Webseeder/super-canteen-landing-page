'use client';

import Image from 'next/image';
import Link from 'next/link';
import { MessageSquare, Users, Star, ShoppingBag } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative w-full min-h-screen pt-28 pb-20 flex items-center justify-center overflow-hidden">

      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/heroo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-80"></div>

      <div className="relative z-10 w-full max-w-7xl space-x-6 mx-auto flex flex-col md:flex-row items-center px-6 text-white animate-fadeIn">

        {/* Left Content */}
        <div className="w-full md:w-1/2 text-left pl-4 md:pl-8 space-y-8">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
            Shop Smarter, <br/>Live Better with <br />
            <span className="text-blue-400">Super Canteen</span>
          </h1>

          <p className="text-lg mb-2 text-gray-300">
            Your ultimate hub for <span className="text-yellow-400 font-semibold">fresh groceries</span>, essentials & snacks — delivered fast!
          </p>

          <p className="text-lg mb-6 text-gray-300">
            We ensure <span className="text-green-400 font-semibold">top quality</span>, lightning-fast delivery, and customer happiness — right to your doorstep.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Link href="/contact">
              <button className="bg-gradient-to-r from-blue-500 to-blue-800 hover:from-blue-600 hover:to-blue-900 text-white px-6 py-3 rounded-lg text-base font-semibold flex items-center gap-2 shadow-lg hover:scale-105 transition">
                <MessageSquare className="w-5 h-5" />
                Start Conversation
              </button>
            </Link>

            <a
              href="https://play.google.com/store/apps/details?id=com.supercanteen.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-gradient-to-r from-gray-500 to-gray-700 hover:from-gray-600 hover:to-gray-800 text-white px-6 py-3 rounded-lg text-base font-semibold flex items-center gap-2 shadow-lg hover:scale-105 transition">
                <Image src="/playstore.png" alt="Play Store" width={20} height={20} />
                Download App
              </button>
            </a>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <StatCard icon={<Users />} count="10K+" label="Happy Customers" />
            <StatCard icon={<ShoppingBag />} count="100%" label="Fresh Products" />
            <StatCard icon={<Star />} count="4.9★" label="Customer Rating" />
          </div>
        </div>

        {/* Right Side Image */}
        <div className="w-full md:w-1/2 mt-10 md:mt-0 flex justify-center">
          <Image
            src="/globe.png"
            alt="Globe"
            width={600}
            height={600}
            className="object-contain filter brightness-0 invert contrast-200 animate-spin-slow transition"
          />
        </div>

      </div>
    </section>
  );
}

// Stat Card Component
const StatCard = ({ icon, count, label }) => (
  <div className="border border-gray-400 rounded-lg p-4 text-center bg-white bg-opacity-10 backdrop-blur-sm text-gray-200 shadow-md hover:scale-105 transition">
    <div className="flex justify-center mb-2 text-blue-400">{icon}</div>
    <h3 className="text-2xl font-bold mb-1">{count}</h3>
    <p className="text-sm">{label}</p>
  </div>
);
