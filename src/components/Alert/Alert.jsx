import React from 'react';
import { Info, CheckCircle2, AlertTriangle, XCircle, X } from 'lucide-react';
import './Alert.css';

const ICONS = {
  info:    <Info         size={16} strokeWidth={2} aria-hidden="true" />,
  success: <CheckCircle2 size={16} strokeWidth={2} aria-hidden="true" />,
  warning: <AlertTriangle size={16} strokeWidth={2} aria-hidden="true" />,
  error:   <XCircle      size={16} strokeWidth={2} aria-hidden="true" />,
};

export default function Alert({ children, variant = 'info', title, dismissible, onDismiss, icon, className = '' }) {
  return (
    <div className={`exds-alert exds-alert--${variant} ${className}`} role="alert">
      <span className="exds-alert__icon">{icon ?? ICONS[variant]}</span>
      <div className="exds-alert__content">
        {title && <strong className="exds-alert__title">{title}</strong>}
        <span className="exds-alert__message">{children}</span>
      </div>
      {dismissible && (
        <button className="exds-alert__dismiss" onClick={onDismiss} aria-label="Dismiss">
          <X size={14} strokeWidth={2} aria-hidden="true" />
        </button>
      )}
    </div>
  );
}
