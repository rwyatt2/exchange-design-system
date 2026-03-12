import React from 'react';
import './Divider.css';

export default function Divider({
  orientation = 'horizontal',
  label,
  variant = 'solid',
}) {
  if (orientation === 'vertical') {
    return <span className={`exds-divider exds-divider--vertical exds-divider--${variant}`} role="separator" aria-orientation="vertical" />;
  }

  if (label) {
    return (
      <div className={`exds-divider exds-divider--labeled exds-divider--${variant}`} role="separator">
        <span className="exds-divider__line" />
        <span className="exds-divider__label">{label}</span>
        <span className="exds-divider__line" />
      </div>
    );
  }

  return <hr className={`exds-divider exds-divider--horizontal exds-divider--${variant}`} role="separator" />;
}
