import React from 'react';
import './Card.css';

export default function Card({
  children,
  title,
  subtitle,
  icon,
  footer,
  variant = 'default',
  hoverable = false,
  className = '',
  onClick,
  ...props
}) {
  const Tag = onClick ? 'button' : 'div';
  return (
    <Tag
      className={[
        'exds-card',
        `exds-card--${variant}`,
        hoverable && 'exds-card--hoverable',
        onClick && 'exds-card--clickable',
        className,
      ].filter(Boolean).join(' ')}
      onClick={onClick}
      {...props}
    >
      {(title || icon) && (
        <div className="exds-card__header">
          {icon && <span className="exds-card__icon">{icon}</span>}
          <div className="exds-card__header-text">
            {title && <h3 className="exds-card__title">{title}</h3>}
            {subtitle && <span className="exds-card__subtitle">{subtitle}</span>}
          </div>
        </div>
      )}
      {children && <div className="exds-card__body">{children}</div>}
      {footer && <div className="exds-card__footer">{footer}</div>}
    </Tag>
  );
}
