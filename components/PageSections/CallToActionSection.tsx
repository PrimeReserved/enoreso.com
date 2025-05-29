import React from 'react';
import HeadingParagraphBtn from '../Cards/HeadingParagraphBtn';

interface CallToActionSectionProps {
  backgroundImage?: string;
  onContactClick?: () => void;
  className?: string;
}

const CallToActionSection: React.FC<CallToActionSectionProps> = ({
  backgroundImage = '/images/backup-power-hero.jpg', // Default image path
  onContactClick,
  className = '',
}) => {
  return (
    <section
      className={`
        relative min-h-[70vh] flex items-center justify-center
        bg-cover bg-center bg-no-repeat
        ${className}
      `}
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60" />

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <HeadingParagraphBtn
            heading="Reliable Backup Power Solutions"
            paragraph="We provide tailored backup power solutions for small, medium, and corporate businesses across both private and public sectors."
            buttonText="CONTACT US"
            buttonHref="/contact"
            buttonVariant="primary"
            alignment="center"
            backgroundColor="transparent"
            backgroundOpacity={0}
            textColor="white"
            onButtonClick={onContactClick}
          />
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;
