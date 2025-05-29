'use client';

import { FC } from 'react';

interface HeroBoxProps {
  backgroundImage: string;
  title: string;
  overlayOpacity?: number;
  overlayColor?: string;
  height?: string;
  textSize?: 'text-2xl' | 'text-3xl' | 'text-4xl' | 'text-5xl' | 'text-6xl';
  className?: string;
  showBreadcrumb?: boolean;
  breadcrumbItems?: string[];
}

const HeroBox: FC<HeroBoxProps> = ({
  backgroundImage,
  title,
  overlayOpacity = 0.65,
  overlayColor = 'black',
  height = 'h-72 md:h-80 lg:h-96',
  textSize = 'text-5xl',
  className = '',
  showBreadcrumb = false,
  breadcrumbItems = [],
}) => {
  return (
    <section
      className={`relative w-full ${height} flex items-center justify-center overflow-hidden ${className}`}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Clean Overlay */}
      <div
        className="absolute inset-0 transition-opacity duration-700 ease-in-out"
        style={{
          backgroundColor: overlayColor,
          opacity: overlayOpacity,
        }}
      />

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          {showBreadcrumb && breadcrumbItems.length > 0 && (
            <nav className="mb-6 animate-fade-in-up animation-delay-300">
              <div className="flex items-center justify-center space-x-2 text-sm text-gray-200">
                {breadcrumbItems.map((item, index) => (
                  <div key={index} className="flex items-center">
                    <span className="hover:text-white transition-colors duration-300 font-medium">
                      {item}
                    </span>
                    {index < breadcrumbItems.length - 1 && (
                      <svg
                        className="w-4 h-4 mx-3 text-gray-300"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </div>
                ))}
              </div>
            </nav>
          )}

          {/* Title with clean underline */}
          <div className="animate-fade-in-up animation-delay-500">
            <h1
              className={`${textSize} md:text-6xl lg:text-7xl font-bold text-white mb-8 tracking-tight leading-tight`}
            >
              <span className="relative inline-block">
                {title}
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-white rounded-full animate-scale-in"></div>
              </span>
            </h1>
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

        @keyframes scale-in {
          from {
            transform: translateX(-50%) scaleX(0);
          }
          to {
            transform: translateX(-50%) scaleX(1);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-scale-in {
          animation: scale-in 0.8s ease-out 0.8s forwards;
          transform: translateX(-50%) scaleX(0);
        }

        .animation-delay-300 {
          animation-delay: 0.3s;
        }

        .animation-delay-500 {
          animation-delay: 0.5s;
        }
      `}</style>
    </section>
  );
};

export default HeroBox;
