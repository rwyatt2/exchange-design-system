import React from 'react';
import './Button.css';

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  iconRight,
  disabled = false,
  fullWidth = false,
  onClick,
  type = 'button',
  className = '',
  ...props
}) {
  return (
    <button
      type={type}
      className={[
        'exds-button',
        `exds-button--${variant}`,
        `exds-button--${size}`,
        fullWidth && 'exds-button--full',
        className,
      ].filter(Boolean).join(' ')}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {icon && <span className="exds-button__icon">{icon}</span>}
      {children && <span className="exds-button__label">{children}</span>}
      {iconRight && <span className="exds-button__icon exds-button__icon--right">{iconRight}</span>}
    </button>
  );
}
