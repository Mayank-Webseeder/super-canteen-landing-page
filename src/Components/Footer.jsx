'use client';

import {
  Facebook,
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
      <div className="absolute top-20 left-[-20]">
        <Image
          src="/Logo1.png"
          alt="Footer Logo"
          width={170}
          height={200}
          className="rotate-[90deg] opacity-40"
        />
      </div>

      <div className="mx-auto max-w-screen-xl px-6 py-10">
        {/* Top Footer Grid */}
        <div className="flex flex-col md:flex-row justify-between gap-12">
          {/* Left - Brand */}
          <div className="flex-1 text-center md:text-left">

            <p className="text-gray-300 mb-4 leading-relaxed">
              Your trusted partner for fresh groceries, daily essentials, and household needs.<br />
              At Super Canteen, we believe in delivering not just products but value, convenience, and reliability right to your doorstep.<br />
            </p>


            <div className="flex flex-col md:flex-row items-center md:items-start gap-4 mt-4">
              <a
                href="https://www.instagram.com/super.canteen.aligarh/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                <Instagram className="h-6 w-6 mt-2 text-gray-400 hover:text-white cursor-pointer" />
              </a>

              <button className="bg-gray-600 hover:bg-gray-700 text-white px-3 py-2 rounded-lg text-base font-medium transition-transform transform hover:scale-105 flex items-center gap-2">
                <Image src="/playstore.png" alt="Play Store" width={20} height={20} />
                Get App
              </button>
            </div>

          </div>

          {/* Center - Quick Links */}
          <div className="flex-1 text-center">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white">About us</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
              <li><Link href="/terms&conditions" className="hover:text-white">Terms & Conditions</Link></li>
              <li><Link href="/refund-policy" className="hover:text-white">Refund Policy</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Right - Contact Info */}
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4 text-white">Contact Us</h3>
            <div className="space-y-4 text-gray-300">
              <div className="flex justify-center md:justify-start items-center">
                <Phone className="h-4 w-4 mr-3 text-blue-600" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex justify-center md:justify-start items-center">
                <Mail className="h-4 w-4 mr-3 text-blue-600" />
                <span>support@supercanteen.com</span>
              </div>
              <div className="flex justify-center md:justify-start items-center">
                <MapPin className="h-4 w-4 mr-3 text-blue-600" />
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
              className="text-white font-semibold"
            >
              WEBSEEDER TECHNOLOGIES
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
