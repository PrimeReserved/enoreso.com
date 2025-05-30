import React from 'react';

interface VisionCardProps {
  image?: string;
  icon?: React.ReactNode;
  header: string;
  paragraph: string;
  className?: string;
  onClick?: () => void;
}

const VisionCard: React.FC<VisionCardProps> = ({
  image,
  icon,
  header,
  paragraph,
  className = '',
  onClick,
}) => {
  return (
    <div
      className={`
        flex flex-col items-center text-center p-6 md:p-8 bg-white
        shadow-[0_8px_20px_rgba(0,0,0,0.15)] hover:shadow-[0_12px_28px_rgba(0,0,0,0.25)] border-b-8 border-b-primary transition-all duration-300 ease-in-out
        transform hover:scale-[1.02] cursor-default
        group animate-fade-in h-full
        ${className}
      `}
      onClick={onClick}
    >
      {/* Image or Icon */}
      <div className="mb-6 transition-all duration-300 group-hover:scale-105">
        {image ? (
          <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden">
            <img
              src={image}
              alt={header}
              className="w-full h-full object-cover transition-all duration-300 group-hover:scale-110"
            />
          </div>
        ) : icon ? (
          <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center text-primary transition-all duration-300 group-hover:text-primaryOrange">
            {icon}
          </div>
        ) : (
          <div className="w-16 h-16 md:w-20 md:h-20 bg-primary rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-primaryOrange">
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
          </div>
        )}
      </div>

      {/* Header */}
      <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3 transition-all duration-300 group-hover:text-primary">
        {header}
      </h3>

      {/* Paragraph */}
      <p className="text-gray-600 leading-relaxed text-sm md:text-base text-center transition-all duration-300 group-hover:text-gray-800">
        {paragraph}
      </p>
    </div>
  );
};

export default VisionCard;
