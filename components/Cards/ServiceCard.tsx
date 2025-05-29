'use client';
import React, { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

interface ServiceCardProps {
  image?: string;
  icon?: React.ReactNode;
  header: string;
  paragraph: string;
  expandedContent?: string;
  className?: string;
  onClick?: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  image,
  icon,
  header,
  paragraph,
  expandedContent,
  className = '',
  onClick,
}) => {
  // Each card has its own independent state
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = (e: React.MouseEvent) => {
    e.stopPropagation();
    // Only toggle this specific card's state
    setIsExpanded((prev) => !prev);
  };

  return (
    <div
      className={`
        flex flex-col bg-white rounded-md overflow-visible
        shadow-[0_4px_15px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_25px_rgba(0,0,0,0.15)] 
        border-b-4 border-b-primaryOrange transition-all duration-500 ease-out
        transform hover:scale-[1.02] hover:-translate-y-1 cursor-default
        group animate-fade-in h-full w-full max-w-sm mx-auto
        min-h-[450px] md:min-h-[550px] lg:min-h-[520px] mb-8
        ${className}
      `}
      onClick={onClick}
    >
      {/* Image Section */}
      <div className="relative h-56 md:h-64 lg:h-64 overflow-visible">
        {image ? (
          <img
            src={image}
            alt={header}
            className="w-full h-full object-cover transition-all duration-300 ease-out group-hover:brightness-110"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
            <div className="text-gray-400 text-6xl">{icon}</div>
          </div>
        )}

        {/* Icon Overlay with original positioning but visible overflow */}
        <div className="absolute bottom-4 right-4 w-12 h-12 md:w-14 md:h-14 bg-primaryOrange rounded-full flex items-center justify-center shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 -mb-12 z-50">
          <div className="text-white text-lg md:text-xl">{icon}</div>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-8 md:p-10 lg:p-10 flex flex-col flex-grow">
        {/* Header */}
        <h3 className="text-xl md:text-xl lg:text-2xl font-bold text-gray-900 mb-4 md:mb-4 transition-all duration-300 group-hover:text-primaryOrange">
          {header}
        </h3>

        {/* Paragraph */}
        <p className="text-base md:text-base lg:text-lg leading-relaxed text-gray-600 mb-6 md:mb-6 flex-grow transition-all duration-300 group-hover:text-gray-700">
          {paragraph}
        </p>

        {/* Expanded Content */}
        <div
          className={`transition-all duration-500 ease-in-out overflow-hidden ${
            isExpanded ? 'max-h-96 opacity-100 mb-6' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="pt-4 pb-4 border-t border-gray-100">
            <div className="text-gray-600 text-sm md:text-base lg:text-lg leading-relaxed space-y-3">
              {expandedContent?.split('. ').map((sentence, index) => (
                <p key={index} className="mb-2">
                  <span className="font-medium text-gray-800">•</span>{' '}
                  {sentence.trim()}
                  {sentence.includes('.') ? '' : '.'}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Learn More Toggle */}
        {expandedContent && (
          <button
            onClick={toggleExpanded}
            className="flex items-center justify-center gap-2 text-primaryOrange hover:text-primary font-medium text-base md:text-base lg:text-lg transition-all duration-300 hover:gap-3 group/button mt-auto"
          >
            <span>{isExpanded ? 'Show less' : 'Learn more'}</span>
            <div className="transition-all duration-300 group-hover/button:scale-110">
              {isExpanded ? (
                <FiChevronUp className="w-4 h-4 md:w-5 md:h-5" />
              ) : (
                <FiChevronDown className="w-4 h-4 md:w-5 md:h-5" />
              )}
            </div>
          </button>
        )}
      </div>
    </div>
  );
};

export default ServiceCard;
