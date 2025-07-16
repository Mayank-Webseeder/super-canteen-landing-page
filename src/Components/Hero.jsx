'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ShoppingBag, MessageSquare } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative w-full bg-black min-h-screen pt-28 pb-20 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero5.webp"
          alt="Background"
          fill
          className="object-cover filter blur-sm brightness-50"
        />
      </div>

      <div className="relative z-10 max-w-3xl w-full text-center px-6 flex flex-col justify-center h-full text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
          Welcome to <span className="text-blue-500">Super Canteen</span>
        </h1>

        <p className="text-lg mb-6">
          Super Canteen is your go-to place for fresh groceries, daily essentials, snacks, and more — all at great prices. From morning needs to midnight cravings, we’ve got everything covered.
        </p>

        <p className="text-lg mb-10">
          We focus on quality, fast delivery, and customer satisfaction. Enjoy a smooth, hassle-free shopping experience delivered right to your doorstep with Super Canteen.
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
               Download App
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
