'use client';
import Footer from '@/Components/Footer';
import Header from '@/Components/Header';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactPage() {
  return (
    <section id="contact" className="w-full min-h-screen bg-gray-50 pt-24 pb-0">
      <Header />

      <div className="max-w-6xl mx-auto pb-16">
        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Get in <span className="text-orange-500">Touch</span>
          </h1>
          <p className="text-gray-600 text-lg">We’re here to answer any questions you may have.</p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div className="bg-white p-8 rounded-xl shadow">
            <h2 className="text-xl font-semibold mb-6 text-gray-700">Contact Information</h2>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Phone className="text-orange-500" />
                <span className="text-gray-700">+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="text-orange-500" />
                <span className="text-gray-700">support@supercanteen.com</span>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="text-orange-500" />
                <span className="text-gray-700">123 Super Canteen Street, Indore, India</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form className="bg-white p-8 rounded-xl shadow space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
              <input type="text" placeholder="Your Name" className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input type="email" placeholder="you@example.com" className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea rows="4" placeholder="Your message..." className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"></textarea>
            </div>
            <button type="submit" className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-6 py-3 rounded-lg transition duration-300">
              Send Message
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </section>
  );
}
