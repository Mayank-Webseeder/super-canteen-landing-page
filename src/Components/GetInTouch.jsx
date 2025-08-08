'use client';

import { Phone, Mail, MapPin } from 'lucide-react';
import ContactForm from './Contactform';
import Link from 'next/link';

export default function GetInTouch() {
  return (
    <section id="get-in-touch" className="w-full bg-gradient-to-br from-gray-50 to-gray-100 py-20 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Left - Contact Info */}
        <div className="space-y-8">
          <div>
            <h2 className="text-4xl font-extrabold text-gray-800 mb-4 leading-tight">
              Let’s <span className="text-blue-800">Connect</span>
            </h2>
            <p className="text-gray-600 text-lg">
              Whether you have questions, feedback, or need assistance — we're just a message away!
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow hover:scale-105 transition-transform">
              <div className="bg-blue-100 p-2 rounded-full text-blue-800">
                <Phone />
              </div>
              <span className="text-gray-700 font-medium">+91 9557919140</span>
            </div>

            <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow hover:scale-105 transition-transform">
              <div className="bg-blue-100 p-2 rounded-full text-blue-800">
                <Mail />
              </div>
              <span className="text-gray-700 font-medium">info@supercanteen.in</span>
            </div>

            <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow hover:scale-105 transition-transform">
              <div className="bg-blue-100 p-2 rounded-full text-blue-800">
                <MapPin />
              </div>
              <span className="text-gray-700 font-medium">
                Near Jain Petrol Pump, Naurangabad, Aligarh - 202001
              </span>
            </div>
          </div>

          <Link href="/contact">
            <button className="mt-6 bg-gradient-to-r from-blue-800 to-blue-600 hover:from-blue-900 hover:to-blue-700 text-white px-6 py-3 rounded-lg text-base font-semibold transition-transform transform hover:scale-105 shadow">
              Talk to Us
            </button>
          </Link>
        </div>

        {/* Right - Form */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
