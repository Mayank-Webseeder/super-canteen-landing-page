'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import { ShoppingBag, MessageSquare } from 'lucide-react';

gsap.registerPlugin(TextPlugin);

const images = ['/hero1.jpg', '/hero2.jpg', '/hero3.jpg', '/hero4.jpg'];

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);
  const textRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const animateTyping = () => {
      gsap.to(textRef.current, {
        text: "Super Canteen",
        duration: 2,
        ease: 'power1.inOut',
        onComplete: () => {
          gsap.to(textRef.current, {
            text: '',
            duration: 1,
            delay: 1,
            ease: 'power1.inOut',
            onComplete: animateTyping,
          });
        },
      });
    };

    animateTyping();
  }, []);

  return (
    <section id="home" className="relative w-full bg-black min-h-screen pt-28 pb-20 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0 transition-opacity duration-1000">
        {images.map((img, index) => (
          <Image
            key={index}
            src={img}
            alt={`Background ${index + 1}`}
            fill
            className={`object-cover filter blur-sm brightness-50 transition-opacity duration-1000 ${index === currentImage ? 'opacity-100' : 'opacity-0'}`}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-3xl w-full text-center px-6 flex flex-col justify-center h-full text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
          Welcome to <span ref={textRef} className="text-blue-500"></span>
        </h1>

        <p className="text-lg mb-6">
          Your one-stop destination for fresh groceries, daily essentials, and more at unbeatable prices.
        </p>
        <p className="text-lg mb-10">
          With a strong focus on quality, speed, and customer satisfaction, we ensure that your daily needs are met without the hassle.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center items-center">
          <Link href="/contact">
            <button className="bg-blue-800 hover:bg-blue-900 text-white px-6 py-3 rounded-lg text-base font-medium transition-transform transform hover:scale-105 flex items-center gap-2">
              <MessageSquare className="w-5 h-5" />
              Start Conversation
            </button>
          </Link>

          <a
            href="https://play.google.com/store/apps/details?id=com.supercanteen.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg text-base font-medium transition-transform transform hover:scale-105 flex items-center gap-2">
              <Image src="/playstore.png" alt="Play Store" width={20} height={20} />
              Get App
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
