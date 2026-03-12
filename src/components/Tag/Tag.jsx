import React from 'react';
import { X } from 'lucide-react';
import './Tag.css';

export default function Tag({
  label,
  onRemove,
  color,
  size = 'md',
  variant = 'filled',
}) {
  return (
    <span
      className={`exds-tag exds-tag--${size} exds-tag--${variant}`}
      style={color ? { '--tag-color': color } : undefined}
    >
      <span className="exds-tag__label">{label}</span>
      {onRemove && (
        <button
          className="exds-tag__remove"
          onClick={onRemove}
          aria-label={`Remove ${label}`}
          type="button"
        >
          <X size={10} strokeWidth={2.5} aria-hidden="true" />
        </button>
      )}
    </span>
  );
}
