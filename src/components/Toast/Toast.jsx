import React, { useEffect, useRef } from 'react';
import { CheckCircle2, XCircle, AlertTriangle, Info, X } from 'lucide-react';
import './Toast.css';

const ICONS = {
  success: <CheckCircle2 size={18} strokeWidth={2} aria-hidden="true" />,
  error:   <XCircle      size={18} strokeWidth={2} aria-hidden="true" />,
  warning: <AlertTriangle size={18} strokeWidth={2} aria-hidden="true" />,
  info:    <Info          size={18} strokeWidth={2} aria-hidden="true" />,
};

export default function Toast({
  message,
  type = 'info',
  duration = 4000,
  onDismiss,
  visible = true,
}) {
  const timerRef = useRef(null);

  useEffect(() => {
    if (visible && duration && onDismiss) {
      timerRef.current = setTimeout(onDismiss, duration);
    }
    return () => clearTimeout(timerRef.current);
  }, [visible, duration, onDismiss]);

  if (!visible) return null;

  return (
    <div
      className={`exds-toast exds-toast--${type}`}
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
    >
      <span className="exds-toast__icon">{ICONS[type]}</span>
      <span className="exds-toast__message">{message}</span>
      {onDismiss && (
        <button className="exds-toast__close" onClick={onDismiss} aria-label="Dismiss notification">
          <X size={14} strokeWidth={2} aria-hidden="true" />
        </button>
      )}
    </div>
  );
}
