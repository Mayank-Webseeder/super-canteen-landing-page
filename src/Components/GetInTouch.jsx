'use client';
import { Phone, Mail, MapPin } from 'lucide-react';
import ContactForm from './Contactform';
import Link from 'next/link';

export default function GetInTouch() {
  return (
    <section id="get-in-touch" className="w-full bg-gray-50 py-20 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left - Contact Info */}
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Get in <span className="text-blue-800">Touch</span>
          </h2>
          <p className="text-gray-600 text-lg mb-6">
            Have any questions or need help with something? Reach out to us.
          </p>

          <div className="space-y-4 text-gray-700">
            <div className="flex items-center gap-4">
              <Phone className="text-blue-800" />
              <span>+91 98765 43210</span>
            </div>
            <div className="flex items-center gap-4">
              <Mail className="text-blue-800" />
              <span>support@supercanteen.com</span>
            </div>
            <div className="flex items-center gap-4">
              <MapPin className="text-blue-800" />
              <span>Near Jain Petrol Pump, Naurangabad, Aligarh - 202001</span>
            </div>
          </div>

          {/* Contact With Us Button */}
          <Link href="/contact">
            <button className="mt-6 bg-blue-800 hover:bg-blue-900 text-white px-6 py-3 rounded-lg text-base font-medium transition-transform transform hover:scale-105">
              Talk to Us
            </button>
          </Link>
        </div>

        {/* Right - Form */}
        <ContactForm />
      </div>
    </section>
  );
}
