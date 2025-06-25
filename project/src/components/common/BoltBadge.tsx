import React from 'react';

interface BoltBadgeProps {
  variant?: 'black-circle' | 'white-circle' | 'text-only';
  position?: 'top-right' | 'bottom-right' | 'top-left' | 'bottom-left';
  className?: string;
}

const BoltBadge: React.FC<BoltBadgeProps> = ({ 
  variant = 'black-circle', 
  position = 'bottom-right',
  className = ''
}) => {
  const getImageSrc = () => {
    switch (variant) {
      case 'white-circle':
        return '/images/white_circle_360x360.png';
      case 'text-only':
        return '/images/logotext_poweredby_360w.png';
      case 'black-circle':
      default:
        return '/images/black_circle_360x360.png';
    }
  };

  const getPositionClasses = () => {
    const baseClasses = 'fixed z-50';
    switch (position) {
      case 'top-left':
        return `${baseClasses} top-4 left-4`;
      case 'bottom-left':
        return `${baseClasses} bottom-4 left-4`;
      case 'bottom-right':
        return `${baseClasses} bottom-4 right-4`;
      case 'top-right':
      default:
        return `${baseClasses} top-4 right-4`;
    }
  };

  const getSizeClasses = () => {
    if (variant === 'text-only') {
      return 'w-24 h-auto md:w-32 lg:w-36';
    }
    return 'w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20';
  };

  return (
    <a
      href="https://bolt.new/"
      target="_blank"
      rel="noopener noreferrer"
      className={`${getPositionClasses()} transition-all duration-200 hover:scale-105 ${className}`}
      aria-label="Built with Bolt.new"
    >
      <img
        src={getImageSrc()}
        alt="Built with Bolt.new"
        className={`${getSizeClasses()} object-contain transition-opacity duration-200 hover:opacity-80`}
        loading="lazy"
      />
    </a>
  );
};

export default BoltBadge; 