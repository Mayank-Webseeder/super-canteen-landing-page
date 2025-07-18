'use client';

import ContactForm from '@/Components/Contactform';
import Footer from '@/Components/Footer';
import Header from '@/Components/Header';
import { Mail, Phone, MapPin } from 'lucide-react';
import Image from 'next/image';

export default function ContactPage() {
  return (
    <section id="contact" className="w-full min-h-screen bg-gray-50 pt-24 pb-0">
      <Header />

      <div className="max-w-6xl mx-auto pb-16 px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Get in <span className="text-blue-800 decoration-black">Touch</span>
          </h1>
          <p className="text-gray-600 text-lg">We’re here to answer any questions you may have.</p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Info with background image */}
          <div className="relative rounded-xl overflow-hidden shadow">
            {/* Background Image */}
            <div className="absolute inset-0">
              <Image
                src="/contact-us.webp"
                alt="Contact Background"
                fill
                className="object-cover object-center filter brightness-[0.4] blur-sm"
              />
            </div>

            {/* Content Overlay */}
            <div className="relative z-10 flex items-center justify-center h-full p-8">
              <div className="rounded-2xl p-8 md:p-10 text-center max-w-3xl mx-auto backdrop-blur-sm bg-white/10">
                <h3 className="text-2xl font-semibold text-gray-100 mb-4">Visit Our Outlet</h3>
                <p className="text-lg text-gray-300 leading-relaxed">
                  📍 <strong>Location:</strong> Aligarh, Uttar Pradesh <br />
                  🕒 <strong>Timing:</strong> 8 AM – 10 PM, All Days <br />
                  📞 <strong>Phone:</strong> +91 81265 06700
                </p>
              </div>
            </div>


          </div>

          {/* Contact Form */}
          <ContactForm />
        </div>
      </div>

      <Footer />
    </section>
  );
}
