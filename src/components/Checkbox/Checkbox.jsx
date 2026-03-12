import React from 'react';
import { Check } from 'lucide-react';
import './Checkbox.css';

export default function Checkbox({ label, checked, onChange, disabled, id, className = '' }) {
  const cbId = id || `exds-cb-${Math.random().toString(36).slice(2, 9)}`;
  return (
    <label className={`exds-checkbox ${disabled ? 'exds-checkbox--disabled' : ''} ${className}`} htmlFor={cbId}>
      <input
        type="checkbox"
        id={cbId}
        className="exds-checkbox__input"
        checked={checked}
        onChange={(e) => onChange?.(e.target.checked)}
        disabled={disabled}
      />
      <span className="exds-checkbox__box">
        <Check size={12} strokeWidth={3} aria-hidden="true" />
      </span>
      {label && <span className="exds-checkbox__label">{label}</span>}
    </label>
  );
}
