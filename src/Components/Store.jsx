'use client';

import Image from 'next/image';
import { Store as StoreIcon, Building2, GraduationCap, ArrowRight } from 'lucide-react';

const storeData = [
  {
    storeImage: '/store2.webp',
    icon: StoreIcon,
    title: 'Our Vibrant Ambiance',
    content: 'Explore our welcoming and vibrant store environment with fresh products and cozy seating.',
  },
  {
    storeImage: '/store1.webp',
    icon: Building2,
    title: 'Premium City Experience',
    content: 'Visit our premium outlets in the heart of the city with quick takeaways and modern spaces.',
  },
  {
    storeImage: '/store3.webp',
    icon: GraduationCap,
    title: 'Campus Vibes & Student Specials',
    content: 'Specially designed for students — affordable meals and a lively atmosphere.',
  },
];

export default function Store() {
  return (
    <section className="w-full bg-gray-100 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-2">Our Store</h2>
        <div className="h-1 bg-black w-32 mx-auto mb-4"></div>
        <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
          Discover the unique experiences at each of our stores — whether you seek a vibrant ambiance, premium city life, or student-friendly spaces. We cater to all with quality service and fresh offerings.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {storeData.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div
                key={idx}
                className="relative group flex flex-col items-center text-center border border-gray-200 rounded-2xl overflow-hidden shadow-sm h-[380px] transition-all hover:shadow-xl hover:scale-[1.02]"
              >
                {/* Store Image */}
                <div className="w-full h-[180px] overflow-hidden">
                  <Image
                    src={item.storeImage}
                    alt={item.title}
                    width={400}
                    height={150}
                    className="w-full h-full object-cover object-top transform transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Horizontal Line */}
                <div className="border-t border-black w-full"></div>

                {/* Content */}
                <div className="relative flex flex-col items-center px-4 pt-4 pb-2 flex-grow overflow-hidden border-t border-gray-300">
                  <div className="bg-blue-100 text-blue-800 rounded-full w-10 h-10 flex items-center justify-center mb-2">
                    <IconComponent className="w-5 h-5" />
                  </div>

                  <h3 className="text-lg font-semibold text-gray-800 mb-1 group-hover:text-blue-800 transition-colors">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.content}</p>
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
