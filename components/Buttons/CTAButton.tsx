'use client';

import Link from 'next/link';
import { FC } from 'react';

interface CTAButtonProps {
  text: string;
  href: string;
  variant?: 'primary' | 'secondary' | 'orange' | 'outline' | 'custom';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  bgColor?: string;
  textColor?: string;
  hoverBgColor?: string;
  hoverTextColor?: string;
  fullWidth?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}

const CTAButton: FC<CTAButtonProps> = ({
  text,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  bgColor,
  textColor,
  hoverBgColor,
  hoverTextColor,
  fullWidth = false,
  disabled = false,
  onClick,
}) => {
  // Size classes
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-5 py-2.5 text-sm',
    lg: 'px-6 py-3 text-base',
  };

  // Variant classes using your custom colors
  const variantClasses = {
    primary:
      'bg-primary text-white hover:bg-primary/90 border-2 border-primary hover:border-primary/90',
    secondary:
      'bg-secondary text-primary hover:bg-secondary/80 border-2 border-secondary hover:border-secondary/80',
    orange:
      'bg-primaryOrange text-white hover:bg-primaryOrange/90 border-2 border-primaryOrange hover:border-primaryOrange/90',
    outline:
      'bg-transparent text-primary border-2 border-primary hover:bg-primary hover:text-white',
    custom: '',
  };

  // Base classes
  const baseClasses = `
    inline-block rounded-sm font-semibold transition-all duration-300 ease-in-out
    transform hover:scale-105 hover:shadow-lg active:scale-95
    ${fullWidth ? 'w-full text-center' : ''}
    ${
      disabled
        ? 'opacity-50 cursor-not-allowed hover:scale-100 hover:shadow-none'
        : 'cursor-pointer'
    }
  `;

  // Combine all classes
  const buttonClasses = `
    ${baseClasses}
    ${sizeClasses[size]}
    ${variantClasses[variant]}
    ${className}
  `
    .trim()
    .replace(/\s+/g, ' ');

  const handleClick = () => {
    if (onClick && !disabled) {
      onClick();
    }
  };

  // For custom variant, use inline styles
  const customStyles =
    variant === 'custom'
      ? {
          backgroundColor: bgColor,
          color: textColor,
          borderColor: bgColor,
          borderWidth: '2px',
        }
      : {};

  // Custom hover styles for custom variant
  const customHoverStyles =
    variant === 'custom' && (hoverBgColor || hoverTextColor)
      ? ({
          '--hover-bg-color': hoverBgColor || bgColor,
          '--hover-text-color': hoverTextColor || textColor,
        } as React.CSSProperties)
      : {};

  if (disabled) {
    return (
      <span
        className={buttonClasses}
        style={{ ...customStyles, ...customHoverStyles }}
      >
        {text}
      </span>
    );
  }

  return (
    <Link
      href={href}
      className={`${buttonClasses} ${variant === 'custom' ? 'group' : ''}`}
      style={{ ...customStyles, ...customHoverStyles }}
      onClick={handleClick}
    >
      {text}
      {variant === 'custom' && (hoverBgColor || hoverTextColor) && (
        <style jsx>{`
          a:hover {
            background-color: ${hoverBgColor} !important;
            color: ${hoverTextColor} !important;
            border-color: ${hoverBgColor} !important;
          }
        `}</style>
      )}
    </Link>
  );
};

export default CTAButton;
