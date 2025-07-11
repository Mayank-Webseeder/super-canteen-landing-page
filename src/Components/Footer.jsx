'use client';
import {
  Facebook,
  Twitter,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-gray-800 text-white">
      <div className="mx-auto max-w-screen-xl px-6 py-10">
        {/* Top Footer Grid */}
        <div className="flex flex-col md:flex-row justify-between gap-12">
          {/* Left - Brand */}
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-green-400 mb-4">Super Canteen</h2>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Your trusted partner for fresh groceries and daily essentials.<br />
              Quality products at unbeatable prices.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
              <Twitter className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
              <Instagram className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
            </div>
          </div>

          {/* Center - Quick Links */}
          <div className="flex-1 text-center">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white">About us</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
              <li><a href="#" className="hover:text-white">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white">Return Policy</a></li>
            </ul>
          </div>

          {/* Right - Contact Info */}
          <div className="flex-1 text-right">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-4 text-gray-300">
              <div className="flex justify-end items-center">
                <Phone className="h-4 w-4 mr-2" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex justify-end items-center">
                <Mail className="h-4 w-4 mr-2" />
                <span>info@supercanteen.com</span>
              </div>
              <div className="flex justify-end items-center">
                <MapPin className="h-4 w-4 mr-2" />
                <span>123 Market Street, City</span>
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
