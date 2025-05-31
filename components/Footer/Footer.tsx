'use client';
import React from 'react';
import Link from 'next/link';
import {
  FiChevronRight,
  FiFacebook,
  FiLinkedin,
  FiInstagram,
} from 'react-icons/fi';
import Logo from '../../public/images/logo/enovate.png';
import Image from 'next/image';
import { useState, useEffect } from 'react';

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className = '' }) => {
  const [currentYear, setCurrentYear] = useState(2025); // fallback year

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  const navigationLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Contact Us', href: '/contact' },
  ];

  const socialLinks = [
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/share/1UinPPhXQm/',
      icon: FiFacebook,
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/enovate-resources-ltd',
      icon: FiLinkedin,
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/enovateresources?igsh=OHl2ajl0YTV6YXFn',
      icon: FiInstagram,
    },
  ];

  return (
    <footer className={`bg-black text-white ${className}`}>
      <div className="container mx-auto px-20 py-20">
        {/* Desktop Layout - Two Columns */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-20 items-end">
          {/* Left Column - Company Info */}
          <div className="space-y-10 animate-fade-in-up">
            {/* Logo */}
            <div className="transition-transform duration-300 hover:scale-105">
              <Image
                src={Logo}
                alt="Enovate Resources Ltd Logo"
                className="h-16 w-auto object-contain"
              />
            </div>

            {/* Company Description */}
            <div className="space-y-8">
              <p className="text-lg leading-relaxed text-gray-300 max-w-md transition-colors duration-300 hover:text-white">
                Enovate Resources Ltd, delivering innovative IT solutions with
                excellence and passion since 2020
              </p>

              {/* Office Address */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white">
                  Office Address:
                </h3>
                <div className="text-gray-300 space-y-2">
                  <p className="transition-colors duration-300 hover:text-white">
                    21 Mission Road Okuru Ama
                  </p>
                  <p className="transition-colors duration-300 hover:text-white">
                    Port Harcourt, Rivers State
                  </p>
                </div>
              </div>

              {/* Phone Numbers */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white">
                  Phone Numbers:
                </h3>
                <div className="text-gray-300">
                  <p className="transition-colors duration-300 hover:text-blue-400 cursor-pointer">
                    08063303939, 08039736247, 08067663099
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Navigation and Social */}
          <div className="space-y-10 animate-fade-in-up animation-delay-200">
            <h3 className="text-2xl font-bold text-white">Other Pages</h3>

            <nav className="space-y-6">
              {navigationLinks.map((link, index) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="group flex items-center space-x-3 text-gray-400 hover:text-white transition-all duration-300 transform hover:translate-x-2"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <FiChevronRight
                    size={20}
                    className="transition-all duration-300 group-hover:text-blue-400 group-hover:scale-110"
                  />
                  <span className="text-lg font-medium transition-colors duration-300">
                    {link.name}
                  </span>
                </Link>
              ))}
            </nav>

            {/* Social Media Icons */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white">Follow Us:</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <Link
                      key={social.name}
                      href={social.href}
                      className="group p-3 bg-gray-800 rounded-full hover:bg-primaryOrange transition-all duration-300 transform hover:scale-110"
                      aria-label={social.name}
                    >
                      <IconComponent
                        size={20}
                        className="text-gray-300 group-hover:text-white transition-colors duration-300"
                      />
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile/Tablet Layout - Single Column with Navigation First */}
        <div className="lg:hidden space-y-16">
          {/* Navigation Section - Top on Mobile */}
          <div className="space-y-10 animate-fade-in-up text-center">
            <h3 className="text-2xl font-bold text-white">Other Pages</h3>

            <nav className="space-y-6">
              {navigationLinks.map((link, index) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="group flex items-center justify-center space-x-3 text-gray-400 hover:text-white transition-all duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <FiChevronRight
                    size={20}
                    className="transition-all duration-300 group-hover:text-blue-400 group-hover:scale-110"
                  />
                  <span className="text-lg font-medium transition-colors duration-300">
                    {link.name}
                  </span>
                </Link>
              ))}
            </nav>

            {/* Social Media Icons - Mobile */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white">Follow Us:</h3>
              <div className="flex justify-center space-x-4">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <Link
                      key={social.name}
                      href={social.href}
                      className="group p-3 bg-gray-800 rounded-full hover:bg-primaryOrange transition-all duration-300 transform hover:scale-110"
                      aria-label={social.name}
                    >
                      <IconComponent
                        size={20}
                        className="text-gray-300 group-hover:text-white transition-colors duration-300"
                      />
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Company Info Section - Bottom on Mobile */}
          <div className="space-y-10 animate-fade-in-up animation-delay-200 text-center">
            {/* Logo */}
            <div className="transition-transform duration-300 hover:scale-105 flex justify-center">
              <Image
                src={Logo}
                alt="Enovate Resources Ltd Logo"
                className="h-16 w-auto object-contain"
              />
            </div>

            {/* Company Description */}
            <div className="space-y-8">
              <p className="text-lg leading-relaxed text-gray-300 transition-colors duration-300 hover:text-white">
                Enovate Resources Ltd, delivering innovative IT solutions with
                excellence and passion since 2020.
              </p>

              {/* Office Address */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white">
                  Office Address:
                </h3>
                <div className="text-gray-300 space-y-2">
                  <p className="transition-colors duration-300 hover:text-white">
                    21 Mission Road Okuru Ama
                  </p>
                  <p className="transition-colors duration-300 hover:text-white">
                    Port Harcourt, Rivers State
                  </p>
                </div>
              </div>

              {/* Phone Numbers */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white">
                  Phone Numbers:
                </h3>
                <div className="text-gray-300 flex flex-col lg:flex-row lg:space-x-4 space-y-2 lg:space-y-0">
                  <p className="transition-colors duration-300 hover:text-blue-400 cursor-pointer">
                    08063303939
                  </p>
                  <p className="transition-colors duration-300 hover:text-blue-400 cursor-pointer">
                    08039736247
                  </p>
                  <p className="transition-colors duration-300 hover:text-blue-400 cursor-pointer">
                    08067663099
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-6 py-8">
          <div className="flex items-center justify-center">
            <p className="text-gray-500 text-center transition-colors duration-300 hover:text-gray-300">
              Copyright © {currentYear} All rights reserved
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
          opacity: 0;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
