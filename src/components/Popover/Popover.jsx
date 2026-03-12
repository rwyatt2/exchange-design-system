import React, { useState, useRef, useEffect, useCallback } from 'react';
import './Popover.css';

export default function Popover({
  trigger,
  content,
  placement = 'bottom',
  open: controlledOpen,
  onClose,
}) {
  const [internalOpen, setInternalOpen] = useState(false);
  const isControlled = controlledOpen !== undefined;
  const open = isControlled ? controlledOpen : internalOpen;

  const popoverRef = useRef(null);
  const triggerRef = useRef(null);

  const close = useCallback(() => {
    if (isControlled) { onClose?.(); }
    else setInternalOpen(false);
  }, [isControlled, onClose]);

  const toggle = () => {
    if (isControlled) { open ? onClose?.() : null; }
    else setInternalOpen((v) => !v);
  };

  // Close on outside click
  useEffect(() => {
    if (!open) return;
    const handle = (e) => {
      if (
        popoverRef.current && !popoverRef.current.contains(e.target) &&
        triggerRef.current && !triggerRef.current.contains(e.target)
      ) close();
    };
    document.addEventListener('mousedown', handle);
    return () => document.removeEventListener('mousedown', handle);
  }, [open, close]);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const handle = (e) => { if (e.key === 'Escape') close(); };
    document.addEventListener('keydown', handle);
    return () => document.removeEventListener('keydown', handle);
  }, [open, close]);

  return (
    <div className="exds-popover-wrapper">
      <div ref={triggerRef} onClick={toggle} className="exds-popover-trigger">
        {trigger}
      </div>
      {open && (
        <div
          ref={popoverRef}
          className={`exds-popover exds-popover--${placement}`}
          role="dialog"
          aria-modal="false"
        >
          <div className="exds-popover__arrow" aria-hidden="true" />
          <div className="exds-popover__content">{content}</div>
        </div>
      )}
    </div>
  );
}
