import React from 'react';
import CTAButton from '../Buttons/CTAButton';

interface HeadingParagraphBtnProps {
  heading: string;
  paragraph: string;
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

const HeadingParagraphBtn: React.FC<HeadingParagraphBtnProps> = ({
  heading,
  paragraph,
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
        relative z-10 flex flex-col gap-6 p-8 rounded-lg
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

export default HeadingParagraphBtn;
