'use client';

import { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [activeSection, setActiveSection] = useState('');
  const lastScrollY = useRef(0);
  const pathname = usePathname();

  const navItems = ['Home', 'Features', 'How It Works', 'Testimonials', 'Contact Us'];

  // Scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setScrolled(currentY > 20);
      setShowNavbar(currentY < lastScrollY.current || currentY < 100);
      lastScrollY.current = currentY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Section detection using IntersectionObserver
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
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${showNavbar ? 'translate-y-0' : '-translate-y-full'
        } ${scrolled || pathname !== '/' ? 'bg-white shadow-md' : 'bg-transparent'}`}
    >
      <div className="relative w-full mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="inline-block">
          <div className="flex items-center ml-2 space-x-2 cursor-pointer">
            <span className="text-2xl sm:text-3xl font-bold text-green-700 hover:text-green-900 transition duration-300">
              Super Canteen
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:block">
          <ul className="flex items-center gap-10 text-[18px] font-medium">
            {navItems.map((item) => {
              const id = item.toLowerCase().replace(/\s+/g, '-');
              const isContact = item === 'Contact Us';
              const isActive =
                isContact
                  ? pathname === '/contact'
                  : activeSection === id;

              return (
                <li key={item} className="relative group cursor-pointer">
                  <Link
                    href={isContact ? '/contact' : `/#${id}`}
                    className={`text-black transition-all duration-200 ${
                      isActive
                        ? 'text-green-800 font-bold'
                        : 'group-hover:text-black group-hover:font-bold'
                    }`}
                  >
                    {item}
                  </Link>
                  <span
                    className={`absolute left-0 -bottom-1 h-[2px] transition-all duration-300 ${
                      isActive
                        ? 'w-full bg-black'
                        : 'w-0 group-hover:w-full group-hover:bg-black'
                    }`}
                  />
                </li>
              );
            })}
          </ul>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden text-black">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="transition-transform duration-300 transform hover:scale-110"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
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
                    className="block hover:text-green-400 transition-colors duration-200"
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
