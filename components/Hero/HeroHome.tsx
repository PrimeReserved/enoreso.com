'use client';

import { FC } from 'react';
import HeadingParagraphBtn from '../Cards/HeadingParagraphBtn';

interface HeroHomeProps {
  backgroundImage: string;
  overlayOpacity?: number;
  overlayColor?: string;
  heading: string;
  paragraph: string;
  buttonText: string;
  buttonHref: string;
  buttonVariant?: 'primary' | 'secondary' | 'outline' | 'custom';
  minHeight?: string;
  className?: string;
}

const HeroHome: FC<HeroHomeProps> = ({
  backgroundImage,
  overlayOpacity = 0,
  overlayColor = 'black',
  heading,
  paragraph,
  buttonText,
  buttonHref,
  buttonVariant = 'primary',
  minHeight = 'lg:min-h-screen md:min-h-[70vh] sm:min-h-[70vh] min-h-[70vh]',
  className = '',
}) => {
  return (
    <section
      className={`relative w-full ${minHeight} flex items-center ${className}`}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Dark Overlay - Only render if overlayOpacity > 0 */}
      {overlayOpacity > 0 && (
        <div
          className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
          style={{
            backgroundColor: overlayColor,
            opacity: overlayOpacity,
          }}
        />
      )}

      {/* Animated particles background effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/20 rounded-full animate-pulse"
          style={{ animationDelay: '1s' }}
        ></div>
        <div
          className="absolute top-3/4 left-1/3 w-1 h-1 bg-white/30 rounded-full animate-pulse"
          style={{ animationDelay: '2s' }}
        ></div>
        <div
          className="absolute top-1/2 right-1/4 w-3 h-3 bg-white/10 rounded-full animate-pulse"
          style={{ animationDelay: '3s' }}
        ></div>
        <div
          className="absolute bottom-1/4 right-1/3 w-2 h-2 bg-white/20 rounded-full animate-pulse"
          style={{ animationDelay: '4s' }}
        ></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <div className="order-2 lg:order-1 opacity-0 animate-fade-in-up lg:translate-y-0 md:translate-y-32 sm:translate-y-32 translate-y-36">
              <HeadingParagraphBtn
                heading={heading}
                paragraph={paragraph}
                buttonText={buttonText}
                buttonHref={buttonHref}
                buttonVariant={buttonVariant}
                alignment="left"
                textColor="white"
                backgroundColor="rgba(0, 0, 0, 0.7)"
                backgroundOpacity={70}
                className="relative z-20 py-4"
              />
            </div>

            {/* Right side - Reserved for additional content if needed */}
            <div
              className="order-1 lg:order-2 opacity-0 animate-fade-in-up"
              style={{ animationDelay: '0.3s' }}
            >
              {/* This space can be used for additional content, images, or graphics */}
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
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
          animation: fade-in-up 1s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default HeroHome;
