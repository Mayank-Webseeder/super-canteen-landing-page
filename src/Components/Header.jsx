'use client';

import { useState, useEffect, useRef } from 'react';
import { Menu, X, Instagram, SquareMenu, Home, Star, HelpCircle, PhoneCall } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [activeSection, setActiveSection] = useState('');
  const lastScrollY = useRef(0);
  const pathname = usePathname();

  const navItems = [
    { name: 'Home', id: 'home', icon: <Home size={18} /> },
    { name: 'Features', id: 'features', icon: <Star size={18} /> },
    { name: 'How It Works', id: 'how-it-works', icon: <HelpCircle size={18} /> },
    { name: 'Contact Us', id: 'contact', icon: <PhoneCall size={18} /> },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setShowNavbar(currentY < lastScrollY.current || currentY < 100);
      lastScrollY.current = currentY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        let visibleSection = '';
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visibleSection = entry.target.id;
          }
        });
        setActiveSection(visibleSection);
      },
      { threshold: 0.6 }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const handleScroll = () => setIsOpen(false);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isOpen]);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${showNavbar ? 'translate-y-0' : '-translate-y-full'} bg-white shadow-md`}>
      <div className="relative w-full mx-auto px-4 py-1 flex items-center justify-between">
        <Link href="/" className="inline-block">
          <div className="flex items-center space-x-2 cursor-pointer">
            <Image 
              src="/Logo.png" alt="Logo" width={200} height={130} className="object-cover" priority />
          </div>
        </Link>

        <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:block pl-16">
          <ul className="flex items-center gap-10 text-[18px] font-medium">
            {navItems.map((item) => {
              const isActive = item.name === 'Contact Us'
                ? pathname === '/contact'
                : activeSection === item.id;

              return (
                <li key={item.name} className="relative group cursor-pointer">
                  <Link
                    href={item.name === 'Contact Us' ? '/contact' : `/#${item.id}`}
                    className={`text-black transition-all duration-200 ${isActive ? 'text-[#4F46E5] font-bold' : 'group-hover:text-black'}`}
                  >
                    {item.name}
                  </Link>
                  <span
                    className={`absolute left-0 -bottom-1 h-[2px] transition-all duration-300 ${isActive ? 'w-full bg-[#4F46E5]' : 'w-0 group-hover:w-full group-hover:bg-[#4F46E5]'}`}
                  />
                </li>
              );
            })}
          </ul>
        </div>

        <div className="flex items-center space-x-4 md:space-x-6 text-black">
          <a href="https://www.instagram.com/super.canteen.aligarh/" target="_blank" rel="noopener noreferrer" className="hover:text-[#4F46E5] transition-colors duration-200">
            <Instagram size={28} />
          </a>

          <button onClick={() => setIsOpen(!isOpen)} className="transition-transform duration-300 transform hover:scale-110 md:hidden">
            {isOpen ? (
              <X size={28} className='hover:text-blue-800 hover:scale-110 hover:shadow-md transition-all duration-300 cursor-pointer' />
            ) : (
              <SquareMenu size={28} className="text-gray-800 hover:text-blue-800 hover:scale-110 hover:shadow-md transition-all duration-300 cursor-pointer" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg px-6 pb-4">
          <ul className="pt-4 font-medium text-gray-800 text-base flex flex-col items-center space-y-4">
            {navItems.map((item, index) => {
              const isActive = item.name === 'Contact Us'
                ? pathname === '/contact'
                : activeSection === item.id;

              return (
                <li
                  key={item.name}
                  className={`w-full flex justify-center transition-colors duration-300 py-2 rounded-md animate-fadeIn ${
                    isActive ? 'bg-blue-100 text-blue-800' : 'hover:bg-blue-100'
                  }`}
                  style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'both' }}
                >
                  <Link
                    href={item.name === 'Contact Us' ? '/contact' : `/#${item.id}`}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-3"
                  >
                    <span className="w-6 flex justify-center">{item.icon}</span>
                    <span className="text-center">{item.name}</span>
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="border-t border-gray-300 my-4"></div>

          <div
            className="text-center text-gray-800 space-y-2 text-[14px] animate-fadeIn"
            style={{ animationDelay: `${navItems.length * 0.1}s`, animationFillMode: 'both' }}
          >
            <div className="flex items-center justify-center gap-2">
              <span>📧</span>
              <span>info@supercanteen.in</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <span>📞</span>
              <span>+91 9557919140</span>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
