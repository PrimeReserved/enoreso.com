import React from 'react';
import CTAButton from '../Buttons/CTAButton';

interface HeadingParagraphBulletsBtnProps {
  heading: string;
  paragraph: string;
  bullets: string[];
  buttonText: string;
  onButtonClick?: () => void;
  buttonHref?: string;
  buttonVariant?: 'primary' | 'secondary' | 'outline' | 'custom';
  alignment?: 'left' | 'center' | 'right';
  backgroundColor?: string;
  backgroundOpacity?: number;
  textColor?: string;
  className?: string;
}

const HeadingParagraphBulletsBtn: React.FC<HeadingParagraphBulletsBtnProps> = ({
  heading,
  paragraph,
  bullets,
  buttonText,
  onButtonClick,
  buttonHref = '#',
  buttonVariant = 'primary',
  alignment = 'left',
  backgroundColor,
  backgroundOpacity = 50,
  textColor = 'white',
  className = '',
}) => {
  const alignmentClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center',
    right: 'text-right items-end',
  };

  const backgroundStyle = backgroundColor
    ? {
        backgroundColor: backgroundColor,
        opacity: backgroundOpacity / 100,
      }
    : {};

  const textColorClass = backgroundColor
    ? `text-${textColor}`
    : 'text-gray-900';

  return (
    <div className={`relative ${className}`}>
      {/* Background Overlay */}
      {backgroundColor && (
        <div className="absolute inset-0 rounded-lg" style={backgroundStyle} />
      )}

      {/* Content */}
      <div
        className={`
        relative z-10 flex flex-col gap-6 p-8 rounded-lg space-y-4
        ${alignmentClasses[alignment]}
        animate-fade-in-up
      `}
      >
        <h2
          className={`
          text-3xl md:text-3xl lg:text-4xl font-bold leading-tight
          ${textColorClass}
        `}
        >
          {heading}
        </h2>

        <p
          className={`
          text-lg md:text-xl leading-relaxed max-w-2xl
          ${textColorClass} opacity-90
        `}
        >
          {paragraph}
        </p>

        {/* Bullet Points */}
        <div className="space-y-4">
          {bullets.map((bullet, index) => (
            <div
              key={index}
              className={`
                flex items-center gap-4 
                ${
                  alignment === 'center'
                    ? 'justify-center'
                    : alignment === 'right'
                    ? 'justify-end'
                    : 'justify-start'
                }
                animate-slide-in-left
              `}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Check Icon */}
              <div className="flex-shrink-0">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
              </div>

              {/* Bullet Text */}
              <span
                className={`
                text-base md:text-lg ${textColorClass} opacity-90
                transition-all duration-300 hover:opacity-100
              `}
              >
                {bullet}
              </span>
            </div>
          ))}
        </div>

        <div>
          <CTAButton
            text={buttonText}
            href={buttonHref}
            variant={buttonVariant}
            onClick={onButtonClick}
          />
        </div>
      </div>
    </div>
  );
};

export default HeadingParagraphBulletsBtn;
