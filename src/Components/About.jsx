'use client';
import {
  Clock,
  ShoppingCart,
  Truck,
  Shield,
  Percent,
  Headphones,
} from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="features" className="w-full bg-white py-10 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Why Choose <span className="text-orange-600">Super Canteen?</span>
        </h2>
        <p className="text-lg text-gray-600 mb-16 max-w-3xl mx-auto">
          We make grocery shopping simple, convenient, and affordable for everyone. Experience the future of grocery shopping with our innovative features.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            icon={<ShoppingCart className="h-7 w-7 text-orange-600" />}
            title="Wide Selection"
            desc="10,000+ products from groceries to household items"
          />
          <FeatureCard
            icon={<Clock className="h-7 w-7 text-orange-600" />}
            title="Quick Delivery"
            desc="Same-day delivery within 2–4 hours"
          />
          <FeatureCard
            icon={<Truck className="h-7 w-7 text-orange-600" />}
            title="Free Delivery"
            desc="Free delivery on orders above ₹500"
          />
          <FeatureCard
            icon={<Shield className="h-7 w-7 text-orange-600" />}
            title="Quality Assured"
            desc="Fresh products with quality guarantee"
          />
          <FeatureCard
            icon={<Percent className="h-7 w-7 text-orange-600" />}
            title="Best Prices"
            desc="Competitive prices just like DMart"
          />
          <FeatureCard
            icon={<Headphones className="h-7 w-7 text-orange-600" />}
            title="24/7 Support"
            desc="Round the clock customer support"
          />
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ icon, title, desc }) {
  return (
    <div className="rounded-xl p-8 bg-white text-center shadow-sm border border-transparent transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-orange-500">
      <div className="w-14 h-14 mx-auto rounded-full flex items-center justify-center mb-4 bg-orange-100">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{desc}</p>
    </div>
  );
}
