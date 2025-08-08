'use client';

import ContactForm from '@/Components/Contactform';
import Footer from '@/Components/Footer';
import Header from '@/Components/Header';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
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
          <div style={{ width: '210px' }} className="h-1 bg-black mx-auto mb-5"></div>
          <p className="text-gray-600 text-lg">We’re here to answer any questions you may have.</p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
          {/* Contact Info Card */}
          <div className="relative rounded-xl overflow-hidden shadow-lg flex flex-col bg-white h-full">
            {/* Top Paragraph */}
            <div className="p-4 text-gray-800 text-lg font-semibold bg-gray-100 text-center">
              We value your queries! Visit us or contact directly.
            </div>

            {/* Image */}
            <div className="relative w-full h-[280px]">
              <div className="relative w-full h-full overflow-hidden rounded-sm">
                <Image
                  src="/contact-us.webp"
                  alt="Team Collaboration"
                  fill
                  className="object-cover object-center transition-transform duration-300 hover:scale-105"
                />
              </div>

            </div>

            {/* Contact Details */}
            <div className="flex flex-col justify-end items-center text-center p-6 bg-gray-50 flex-grow rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-6 text-blue-600 border-b-2 border-gray-300 pb-2 w-full max-w-xs">
                Visit Our Outlet
              </h3>

              <div className="flex flex-col gap-4 text-gray-700 text-lg">
                <p className="flex items-center font-semibold gap-3 hover:text-blue-600 transition">
                  <span className="bg-blue-100 p-2 rounded-full">
                    <MapPin className="text-blue-500 w-5 h-5" />
                  </span>
                  Aligarh, Uttar Pradesh
                </p>

                <p className="flex items-center gap-3 font-semibold hover:text-blue-600 transition">
                  <span className="bg-blue-100 p-2 rounded-full">
                    <Clock className="text-blue-500 w-5 h-5" />
                  </span>
                  8 AM – 10 PM, All Days
                </p>

                <p className="flex items-center gap-3 font-semibold hover:text-blue-600 transition">
                  <span className="bg-blue-100 p-2 rounded-full">
                    <Phone className="text-blue-500 w-5 h-5" />
                  </span>
                  +91 9557919140
                </p>

                <p className="flex items-center gap-3 font-semibold hover:text-blue-600 transition">
                  <span className="bg-blue-100 p-2 rounded-full">
                    <Mail className="text-blue-500 w-5 h-5" />
                  </span>
                  info@supercanteen.in
                </p>
              </div>
            </div>


          </div>

          {/* Contact Form */}
          <div className="shadow-lg bg-white rounded-xl p-6 md:p-10">
            <ContactForm />
          </div>
        </div>
      </div>

      <Footer />
    </section>
  );
}
