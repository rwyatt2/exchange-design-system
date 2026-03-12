import React, { useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import './Modal.css';

export default function Modal({ isOpen, onClose, title, children, footer, size = 'md', className = '' }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      dialogRef.current?.showModal();
    } else {
      dialogRef.current?.close();
    }
  }, [isOpen]);

  return (
    <dialog
      ref={dialogRef}
      className={`exds-modal exds-modal--${size} ${className}`}
      onCancel={onClose}
      onClick={(e) => { if (e.target === dialogRef.current) onClose?.(); }}
    >
      <div className="exds-modal__container">
        <div className="exds-modal__header">
          <h2 className="exds-modal__title">{title}</h2>
          <button className="exds-modal__close" onClick={onClose} aria-label="Close">
            <X size={20} strokeWidth={2} aria-hidden="true" />
          </button>
        </div>
        <div className="exds-modal__body">{children}</div>
        {footer && <div className="exds-modal__footer">{footer}</div>}
      </div>
    </dialog>
  );
}
