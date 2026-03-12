import React from 'react';
import './TextInput.css';

export default function TextInput({
  label,
  helperText,
  error,
  id,
  size = 'md',
  disabled = false,
  readOnly = false,
  className = '',
  ...props
}) {
  const inputId = id || `exds-input-${Math.random().toString(36).slice(2, 9)}`;
  return (
    <div className={[
      'exds-input',
      error && 'exds-input--error',
      disabled && 'exds-input--disabled',
      readOnly && 'exds-input--readonly',
      className,
    ].filter(Boolean).join(' ')}>
      {label && <label className="exds-input__label" htmlFor={inputId}>{label}</label>}
      <input
        id={inputId}
        className={`exds-input__field exds-input__field--${size}`}
        disabled={disabled}
        readOnly={readOnly}
        {...props}
      />
      {(helperText || error) && (
        <span className={`exds-input__helper ${error ? 'exds-input__helper--error' : ''}`}>
          {error || helperText}
        </span>
      )}
    </div>
  );
}
