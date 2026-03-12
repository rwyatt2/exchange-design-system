import React from 'react';
import './Spinner.css';

/**
 * Spinner component for indicating loading state.
 */
export const Spinner = ({ 
  size = 'md', 
  color = 'brand',
  className = '',
  'aria-label': ariaLabel = 'Loading',
  ...props 
}) => {
  const classes = [
    'exds-spinner',
    `exds-spinner--${size}`,
    `exds-spinner--${color}`,
    className
  ].filter(Boolean).join(' ');

  return (
    <div 
      className={classes}
      role="status"
      aria-label={ariaLabel}
      {...props}
    />
  );
};


