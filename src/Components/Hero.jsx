'use client';
import { ShoppingBag } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="w-full bg-white min-h-screen pt-28 pb-20 flex items-center justify-center">
      <div className="max-w-3xl w-full text-center px-6 flex flex-col justify-center h-full">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8 leading-tight">
          Welcome to <span className="text-orange-600">Super Canteen</span>
        </h1>

        <p className="text-lg text-gray-700 mb-6">
          Your one-stop destination for fresh groceries, daily essentials, and more at unbeatable prices.
        </p>
        <p className="text-lg text-gray-700 mb-10">
          With a strong focus on quality, speed, and customer satisfaction, we ensure that your daily needs are met without the hassle. Whether it's early morning breakfast items or midnight cravings — we've got you covered!
        </p>

        <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg rounded-lg transition-all duration-300 hover:scale-105 inline-flex items-center mx-auto">
          <ShoppingBag className="h-5 w-5 mr-2" />
          Get In Touch
        </button>
      </div>
    </section>
  );
}
