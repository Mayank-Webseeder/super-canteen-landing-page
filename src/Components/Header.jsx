'use client';

import { useState, useEffect, useRef } from 'react';
import { Menu, X, Instagram } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [activeSection, setActiveSection] = useState('');
  const lastScrollY = useRef(0);
  const pathname = usePathname();

  const navItems = ['Home', 'Features', 'How It Works', 'Contact Us'];

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

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        showNavbar ? 'translate-y-0' : '-translate-y-full'
      } bg-white shadow-md`}
    >
      <div className="relative w-full mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="inline-block">
          <div className="flex items-center ml-2 space-x-2 cursor-pointer">
            <Image
              src="/logo.jpeg"
              alt="Logo"
              width={60}
              height={60}
              className="rounded-full object-cover"
            />
            <span className="text-2xl sm:text-3xl font-bold text-orange-600 hover:text-orange-800 transition duration-300">
              Super Canteen
            </span>
          </div>
        </Link>

        <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:block">
          <ul className="flex items-center gap-10 text-[18px] font-medium">
            {navItems.map((item) => {
              const id = item.toLowerCase().replace(/\s+/g, '-');
              const isContact = item === 'Contact Us';
              const isActive = isContact
                ? pathname === '/contact'
                : activeSection === id;

              return (
                <li key={item} className="relative group cursor-pointer">
                  <Link
                    href={isContact ? '/contact' : `/#${id}`}
                    className={`text-black transition-all duration-200 ${
                      isActive
                        ? 'text-orange-700 font-bold'
                        : 'group-hover:text-black group-hover:font-bold'
                    }`}
                  >
                    {item}
                  </Link>
                  <span
                    className={`absolute left-0 -bottom-1 h-[2px] transition-all duration-300 ${
                      isActive
                        ? 'w-full bg-orange-700'
                        : 'w-0 group-hover:w-full group-hover:bg-orange-700'
                    }`}
                  />
                </li>
              );
            })}
          </ul>
        </div>

        <div className="flex items-center space-x-4 md:space-x-6 text-black">
          {/* Instagram Icon */}
          <a
            href="https://www.instagram.com/supercanteen"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-500 transition-colors duration-200"
          >
            <Instagram size={24} />
          </a>

          {/* Hamburger Menu */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="transition-transform duration-300 transform hover:scale-110 md:hidden"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white shadow-lg px-6 pb-4">
          <ul className="space-y-4 pt-4 font-medium text-gray-800 text-base">
            {navItems.map((item) => {
              const id = item.toLowerCase().replace(/\s+/g, '-');
              return (
                <li key={item}>
                  <Link
                    href={item === 'Contact Us' ? '/contact' : `/#${id}`}
                    onClick={() => setIsOpen(false)}
                    className="block hover:text-orange-500 transition-colors duration-200"
                  >
                    {item}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </nav>
  );
}
