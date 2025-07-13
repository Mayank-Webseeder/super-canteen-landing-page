'use client';
import { Download, Search, CreditCard, Home, ArrowRight } from 'lucide-react';
import Image from 'next/image';
export default function Works() {
  const steps = [
    {
      id: 1,
      title: 'Open Super Canteen',
      description:
        'Access Super Canteen through our mobile app or website to explore an extensive catalog of groceries, snacks, and daily essentials.',
      icon: <Download className="h-6 w-6 text-orange-600" />,
      color: 'orange',
    },
    {
      id: 2,
      title: 'Browse & Select',
      description:
        'Easily browse categories and select your favorite fresh vegetables, fruits, beverages, and packaged items using filters and quick search.',
      icon: <Search className="h-6 w-6 text-orange-500" />,
      color: 'orange',
    },
    {
      id: 3,
      title: 'Easy Payment',
      description:
        'Choose your preferred payment method — from UPI, cards, wallets, or even cash on delivery. Checkout is smooth, secure, and fast.',
      icon: <CreditCard className="h-6 w-6 text-orange-600" />,
      color: 'orange',
    },
    {
      id: 4,
      title: 'Doorstep Delivery',
      description:
        'Relax as our delivery partner brings your order to your doorstep — often within just a few hours, ensuring freshness and speed.',
      icon: <Home className="h-6 w-6 text-orange-500" />,
      color: 'orange',
    },
  ];

  return (
    <section id="how-it-works" className="w-full bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">
          How It <span className="text-orange-500">Works</span>
        </h2>
        <p className="text-gray-500 mb-12 text-lg max-w-2xl mx-auto">
          Simple steps to get your groceries delivered to your doorstep
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div key={step.id} className="relative group">
              <div className="h-[280px] flex flex-col justify-between bg-white shadow-md hover:shadow-lg rounded-xl p-6 transition-all duration-300 text-center">
                {/* Icon & Badge */}
                <div>
                  <div
                    className={`w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4 bg-${step.color}-100 relative`}
                  >
                    {step.icon}
                    <span
                      className={`absolute -top-2 -right-2 bg-${step.color}-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold`}
                    >
                      {step.id}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Arrow between cards (except last) */}
              {index !== steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <ArrowRight className="text-orange-600" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
