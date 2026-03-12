import React from 'react';
import './Toggle.css';

export default function Toggle({
  checked = false,
  onChange,
  disabled = false,
  label,
  id,
  size = 'md',
}) {
  const handleChange = (e) => {
    if (!disabled && onChange) onChange(e.target.checked);
  };

  return (
    <label
      className={`exds-toggle exds-toggle--${size} ${disabled ? 'exds-toggle--disabled' : ''}`}
      htmlFor={id}
    >
      <input
        type="checkbox"
        id={id}
        className="exds-toggle__input"
        checked={checked}
        onChange={handleChange}
        disabled={disabled}
        role="switch"
        aria-checked={checked}
      />
      <span className="exds-toggle__track" aria-hidden="true">
        <span className="exds-toggle__thumb" />
      </span>
      {label && <span className="exds-toggle__label">{label}</span>}
    </label>
  );
}
