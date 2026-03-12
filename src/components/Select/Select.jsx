import React from 'react';
import { ChevronDown } from 'lucide-react';
import './Select.css';

export default function Select({ label, options, value, onChange, placeholder, disabled, error, className = '', ...props }) {
  return (
    <div className={`exds-select ${error ? 'exds-select--error' : ''} ${className}`}>
      {label && <label className="exds-select__label">{label}</label>}
      <div className="exds-select__wrapper">
        <select
          className="exds-select__field"
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          disabled={disabled}
          {...props}
        >
          {placeholder && <option value="" disabled>{placeholder}</option>}
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </select>
        <ChevronDown className="exds-select__chevron" size={16} strokeWidth={2} aria-hidden="true" />
      </div>
    </div>
  );
}
