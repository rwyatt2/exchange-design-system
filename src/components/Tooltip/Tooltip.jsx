import React, { useState } from 'react';
import './Tooltip.css';

/**
 * Tooltip component for displaying contextual information on hover or focus.
 */
export const Tooltip = ({ 
  content, 
  position = 'top', 
  children,
  className = '',
  ...props 
}) => {
  const [isVisible, setIsVisible] = useState(false);

  // Use state or rely entirely on CSS hover. We use CSS hover in this simple design,
  // but state could be used to extend with delays or controlled visibility.
  
  const tooltipClasses = [
    'exds-tooltip',
    `exds-tooltip--${position}`,
    className
  ].filter(Boolean).join(' ');

  return (
    <div 
      className="exds-tooltip-wrapper"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      onFocus={() => setIsVisible(true)}
      onBlur={() => setIsVisible(false)}
    >
      {children}
      <div 
        className={tooltipClasses} 
        role="tooltip" 
        aria-hidden={!isVisible}
        {...props}
      >
        {content}
      </div>
    </div>
  );
};


