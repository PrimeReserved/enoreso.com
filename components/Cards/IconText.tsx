import React from 'react';

interface IconTextProps {
  icon: React.ReactNode;
  topText: string;
  bottomText: string;
  iconSize?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
}

const IconText: React.FC<IconTextProps> = ({
  icon,
  topText,
  bottomText,
  iconSize = 'md',
  className = '',
  onClick,
}) => {
  const iconSizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
  };

  return (
    <div
      className={`
        flex flex-col items-center text-center space-y-3 p-4 rounded-lg
        md:flex-row md:items-center md:text-left md:space-y-0 md:space-x-4
        transition-all duration-300 ease-in-out
        hover:shadow-lg hover:scale-105 cursor-default
        animate-fade-in group
        ${className}
      `}
      onClick={onClick}
    >
      {/* Icon */}
      <div
        className={`
        flex-shrink-0 flex items-center justify-center
        ${iconSizeClasses[iconSize]}
        text-primary transition-all duration-300
        animate-scale-in
      `}
      >
        {icon}
      </div>

      {/* Text Content */}
      <div className="flex-1 space-y-1">
        {/* Top Text (Number) */}
        <div
          className="
          text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900
          transition-all duration-300 group-hover:text-primary
          animate-slide-in-left
        "
        >
          {topText}
        </div>

        {/* Bottom Text (Description) */}
        <div
          className="
          text-sm md:text-base text-gray-600
          transition-all duration-300 group-hover:text-gray-800
          animate-slide-in-left
        "
          style={{ animationDelay: '0.1s' }}
        >
          {bottomText}
        </div>
      </div>
    </div>
  );
};

export default IconText;
