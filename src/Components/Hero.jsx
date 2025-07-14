'use client';
import { ShoppingBag } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const images = ['/hero1.jpg', '/hero2.jpg', '/hero3.jpg', '/hero4.jpg'];

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative w-full bg-black min-h-screen pt-28 pb-20 flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 transition-opacity duration-1000">
        {images.map((img, index) => (
          <Image
            key={index}
            src={img}
            alt={`Background ${index + 1}`}
            fill
            className={`object-cover filter blur-sm brightness-50 transition-opacity duration-5000 ${index === currentImage ? 'opacity-100' : 'opacity-0'
              }`}
          />
        ))}
      </div>

      {/* Overlay Content */}
      <div className="relative z-10 max-w-3xl w-full text-center px-6 flex flex-col justify-center h-full text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
          Welcome to <span className="text-orange-400">Super Canteen</span>
        </h1>

        <p className="text-lg mb-6">
          Your one-stop destination for fresh groceries, daily essentials, and more at unbeatable prices.
        </p>
        <p className="text-lg mb-10">
          With a strong focus on quality, speed, and customer satisfaction, we ensure that your daily needs are met without the hassle. Whether it's early morning breakfast items or midnight cravings — we've got you covered!
        </p>

        <Link href="/contact" className="mx-auto">
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg rounded-lg transition-all duration-300 hover:scale-105 inline-flex items-center">
            <ShoppingBag className="h-5 w-5 mr-2" />
            Get In Touch
          </button>
        </Link>
      </div>
    </section>
  );
}
