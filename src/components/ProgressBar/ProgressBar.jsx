import React from 'react';
import './ProgressBar.css';

export default function ProgressBar({
  value = 0,
  label,
  size = 'md',
  variant = 'default',
  animated = false,
  showValue = false,
}) {
  const clamped = Math.max(0, Math.min(100, value));

  return (
    <div className={`exds-progress exds-progress--${size}`}>
      {(label || showValue) && (
        <div className="exds-progress__header">
          {label && <span className="exds-progress__label">{label}</span>}
          {showValue && <span className="exds-progress__value">{clamped}%</span>}
        </div>
      )}
      <div
        className="exds-progress__track"
        role="progressbar"
        aria-valuenow={clamped}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={label || `${clamped}% complete`}
      >
        <div
          className={`exds-progress__fill exds-progress__fill--${variant} ${animated ? 'exds-progress__fill--animated' : ''}`}
          style={{ width: `${clamped}%` }}
        />
      </div>
    </div>
  );
}
