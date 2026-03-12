import React from 'react';
import './RadioGroup.css';

export default function RadioGroup({ label, name, options, value, onChange, direction = 'vertical', className = '' }) {
  return (
    <fieldset className={`exds-radio-group exds-radio-group--${direction} ${className}`}>
      {label && <legend className="exds-radio-group__legend">{label}</legend>}
      <div className="exds-radio-group__options">
        {options.map((opt) => (
          <label key={opt.value} className="exds-radio">
            <input
              type="radio"
              name={name}
              value={opt.value}
              checked={value === opt.value}
              onChange={() => onChange?.(opt.value)}
              className="exds-radio__input"
            />
            <span className="exds-radio__circle" />
            <span className="exds-radio__label">{opt.label}</span>
          </label>
        ))}
      </div>
    </fieldset>
  );
}
