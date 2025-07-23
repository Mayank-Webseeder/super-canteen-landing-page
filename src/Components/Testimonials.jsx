'use client';

import { useEffect, useRef, useState } from 'react';
import { UserCircle2, MessageSquare, Star } from 'lucide-react';
import gsap from 'gsap';
import Image from 'next/image';
import Link from 'next/link';

export default function Testimonials() {
  const testimonials = [
    { name: 'Ananya Sharma', feedback: 'Super Canteen has transformed my grocery shopping experience with seamless delivery, top-notch quality, and unbeatable prices.' },
    { name: 'Ravi Mehta', feedback: 'Fast delivery and fresh products every time! The support team is highly responsive and resolves issues quickly.' },
    { name: 'Priya Desai', feedback: 'Customer support is excellent and the range of products is impressive. Highly recommended for busy professionals.' },
    { name: 'Karan Singh', feedback: 'Loved the user-friendly interface of the app. Ordering my daily essentials is just a few clicks now!' },
    { name: 'Megha Joshi', feedback: 'Affordable and reliable. Their delivery service is consistent and always on time.' },
    { name: 'Amit Trivedi', feedback: 'The best canteen solution out there. Super Canteen makes campus life much easier.' },
    { name: 'Divya Rao', feedback: 'No more long lines! I order and collect smoothly. The app works like magic.' },
    { name: 'Sahil Khan', feedback: 'Really love the digital menu and hassle-free payments. 10/10 service!' },
    { name: 'Ishita Verma', feedback: 'Fresh food, timely service, and great offers. Super Canteen is a game-changer for students and staff alike.' },
  ];

  const cardsPerPage = 3;
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardRefs = useRef([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + cardsPerPage) % testimonials.length;

      gsap.to(cardRefs.current, {
        opacity: 0,
        y: 30,
        duration: 0.4,
        stagger: 0.1,
        onComplete: () => {
          setCurrentIndex(nextIndex);
        }
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  useEffect(() => {
    gsap.fromTo(
      cardRefs.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.5, stagger: 0.1 }
    );
  }, [currentIndex]);

  const visibleTestimonials = [];
  for (let i = 0; i < cardsPerPage; i++) {
    const index = (currentIndex + i) % testimonials.length;
    visibleTestimonials.push(testimonials[index]);
  }

  return (
    <section className="w-full bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-800 mb-2">What Customers Say About Us</h2>
           <div style={{ width: '500px' }} className="h-1 bg-black mx-auto mb-10"></div>
          <p className="text-gray-600 text-lg">
            Join thousands who love the Super Canteen experience — here’s what they’re saying!
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {visibleTestimonials.map((t, index) => (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              className="bg-white rounded-2xl shadow-lg p-6 transition-transform transform hover:-translate-y-1 duration-300 flex flex-col justify-between h-[240px]"
            >
              <p className="text-gray-600 italic mb-6">“{t.feedback}”</p>
              <div className="flex items-center gap-3 mt-auto">
                <UserCircle2 className="h-10 w-10 text-blue-700" />
                <div>
                  <p className="font-semibold text-gray-800">{t.name}</p>
                  <div className="flex text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 bg-gradient-to-br from-[#f5faff] to-white rounded-3xl shadow-2xl py-14 px-8 sm:px-16 relative overflow-hidden">
          <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-400 opacity-20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-72 h-72 bg-indigo-300 opacity-10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Ready to Simplify Your Canteen Experience?
            </h3>
            <p className="text-gray-600 mb-8 text-lg">
              Start using Super Canteen today — it’s free, fast, and designed for your needs.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link href="/contact">
                <button className="group bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-xl font-semibold flex items-center gap-2 transition duration-300">
                  <MessageSquare className="w-5 h-5 group-hover:animate-ping" />
                  Talk to Us
                </button>
              </Link>
              <a
                href="https://play.google.com/store/apps/details?id=com.supercanteen.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="group bg-black hover:bg-gray-900 text-white px-6 py-3 rounded-xl font-semibold flex items-center gap-2 transition duration-300">
                  <Image
                    src="/playstore.png"
                    alt="Play Store"
                    width={20}
                    height={20}
                    className="group-hover:scale-110 transition-transform"
                  />
                  Download App
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
