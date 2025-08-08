'use client';

import {
  Instagram,
  Mail,
  Phone,
  MapPin,
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="relative w-full bg-gray-900 text-white overflow-hidden">
      {/* Rotated Logo on bottom-left */}
      <div className="absolute top-20 left-[-20] z-0 pointer-events-none">
        <Image
          src="/Logo1.png"
          alt="Footer Logo"
          width={170}
          height={200}
          className="rotate-[90deg] opacity-40"
        />
      </div>

      <div className="mx-auto max-w-screen-xl px-6 py-10 relative z-10">
        {/* Top Footer Grid */}
        <div className="flex flex-col md:flex-row justify-between gap-12">
          {/* Left - Brand */}
          <div className="flex-1 text-center md:text-left">

            <p className="text-gray-300 mb-4 leading-relaxed">
              Your trusted partner for fresh groceries, daily essentials, and household needs.<br />
              At Super Canteen, we believe in delivering not just products but value, convenience, and reliability right to your doorstep.<br />
            </p>


            <div className="flex flex-col md:flex-row items-center md:items-start gap-4 mt-4">
              <a href="https://www.instagram.com/super.canteen.aligarh/" target="_blank" rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors duration-200">
                <Instagram size={32} />
              </a>
              <button className="bg-gray-600 hover:bg-gray-700 text-white px-3 py-2 rounded-lg text-base font-medium transition-transform transform flex items-center gap-2">
                <Image src="/playstore.png" alt="Play Store" width={20} height={20} />
                Get App
              </button>
            </div>
          </div>

          {/* Center - Quick Links */}
          <div className="flex-1 text-center">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li><Link href="/#features" className="hover:text-white">About us</Link></li>
              <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
              <li><Link href="/terms&conditions" className="hover:text-white">Terms & Conditions</Link></li>
              <li><Link href="/refund-policy" className="hover:text-white">Refund Policy</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Right - Contact Info */}
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4 text-white">Contact Us</h3>
            <div className="space-y-4 text-gray-300 text-sm md:text-base">

              <div className="flex items-start md:items-center justify-center md:justify-start gap-2 md:gap-3">
                <Phone className="h-5 w-5 text-blue-600 flex-shrink-0" />
                <span>+91 81265 06700</span>
              </div>

              <div className="flex items-start md:items-center justify-center md:justify-start gap-2 md:gap-3 break-words">
                <Mail className="h-5 w-5 text-blue-600 flex-shrink-0" />
                <span>info@supercanteen.in</span>
              </div>

              <div className="flex items-start md:items-center justify-center md:justify-start gap-2 md:gap-3 break-words">
                <MapPin className="h-5 w-5 text-blue-600 flex-shrink-0" />
                <span>Near Jain Petrol Pump, Naurangabad, Aligarh</span>
              </div>

            </div>
          </div>
        </div>

        {/* Bottom Footer Bar */}
        <div className="mt-12 border-t border-gray-700 pt-6 text-sm text-gray-400 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-center sm:text-left">
            &copy; 2025 SUPER CANTEEN. ALL RIGHTS RESERVED.
          </p>
          <p className="text-center sm:text-right mt-2 sm:mt-0">
            DESIGNED BY &nbsp;
            <a
              href="https://webseeder.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white font-semibold hover:text-gray-300"
            >
              WEBSEEDER TECHNOLOGIES
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
