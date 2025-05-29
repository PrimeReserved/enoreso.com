'use client';

import Link from 'next/link';
import Image from 'next/image';
import Logo from '../../public/images/logo/enovate.png';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import CTAButton from '../Buttons/CTAButton';
import { navLinks } from '../constants/navLinks';

const Header = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path: string) => pathname === path;

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-10 sm:px-6 lg:px-8 flex items-center justify-between h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src={Logo}
              alt="Enoreso Ltd"
              width={40}
              height={40}
              className="object-contain"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map(({ name, href }) => (
              <Link
                key={name}
                href={href}
                className={`text-xs font-medium transition-colors duration-300 uppercase ${
                  isActive(href)
                    ? 'text-primary'
                    : 'text-gray-900 hover:text-primary/80'
                }`}
              >
                {name}
              </Link>
            ))}
            <CTAButton
              text="Contact Us"
              href="/contact"
              variant="outline"
              className="uppercase"
            />
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden relative z-60 w-10 h-10 flex flex-col items-center justify-center space-y-1.5 group"
            aria-label="Toggle menu"
          >
            <span
              className={`w-7 h-0.5 bg-gray-800 transition-all duration-300 ease-in-out group-hover:bg-primary ${
                mobileMenuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span
              className={`w-7 h-0.5 bg-gray-800 transition-all duration-300 ease-in-out group-hover:bg-primary ${
                mobileMenuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`w-7 h-0.5 bg-gray-800 transition-all duration-300 ease-in-out group-hover:bg-primary ${
                mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden fixed inset-0 z-50 transition-all duration-500 ease-in-out ${
          mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        {/* Background Overlay */}
        <div
          className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-500 ${
            mobileMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={closeMobileMenu}
        />

        {/* Menu Content */}
        <div
          className={`relative h-full bg-black/80 flex flex-col items-center justify-center transition-transform duration-500 ease-out ${
            mobileMenuOpen
              ? 'transform translate-x-0'
              : 'transform translate-x-full'
          }`}
        >
          {/* Close Button */}
          <button
            onClick={closeMobileMenu}
            className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-red-100 transition-colors duration-300 group"
            aria-label="Close menu"
          >
            <svg
              className="w-6 h-6 text-gray group-hover:text-red-500 transition-colors duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Logo */}
          <div className="absolute top-6 left-6 flex items-center space-x-2">
            <Image
              src={Logo}
              alt="Enoreso Ltd"
              width={32}
              height={32}
              className="object-contain"
            />
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col items-center space-y-10">
            {navLinks.map(({ name, href }, index) => (
              <Link
                key={name}
                href={href}
                onClick={closeMobileMenu}
                className={`text-3xl md:text-4xl font-bold text-white hover:text-primary transition-all duration-300 transform hover:scale-110 uppercase tracking-wide ${
                  mobileMenuOpen
                    ? 'animate-fade-in-up opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-4'
                }`}
                style={{
                  animationDelay: mobileMenuOpen ? `${index * 100}ms` : '0ms',
                  animationFillMode: 'both',
                }}
              >
                {name}
              </Link>
            ))}

            {/* CTA Button */}
            <div
              className={`mt-8 transition-all duration-300 ${
                mobileMenuOpen
                  ? 'animate-fade-in-up opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-4'
              }`}
              style={{
                animationDelay: mobileMenuOpen
                  ? `${navLinks.length * 100}ms`
                  : '0ms',
                animationFillMode: 'both',
              }}
            >
              <CTAButton text="Get in Touch" href="/contact" />
            </div>
          </nav>

          {/* Decorative Elements */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <div className="flex space-x-2">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              <div
                className="w-2 h-2 bg-primary/60 rounded-full animate-pulse"
                style={{ animationDelay: '0.2s' }}
              ></div>
              <div
                className="w-2 h-2 bg-primary/40 rounded-full animate-pulse"
                style={{ animationDelay: '0.4s' }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out;
        }
      `}</style>
    </>
  );
};

export default Header;
