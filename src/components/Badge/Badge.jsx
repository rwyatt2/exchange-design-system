import React from 'react';
import './Badge.css';

export default function Badge({
  children,
  variant = 'default',
  size = 'md',
  className = '',
  ...props
}) {
  return (
    <span
      className={[
        'exds-badge',
        `exds-badge--${variant}`,
        `exds-badge--${size}`,
        className,
      ].filter(Boolean).join(' ')}
      {...props}
    >
      {children}
    </span>
  );
}
