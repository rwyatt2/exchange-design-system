import React from 'react';
import { FileX2 } from 'lucide-react';
import './EmptyState.css';

const DEFAULT_ICON = <FileX2 size={64} strokeWidth={1} aria-hidden="true" />;

export default function EmptyState({
  icon,
  title,
  description,
  action,
}) {
  return (
    <div className="exds-empty-state" role="status">
      <div className="exds-empty-state__icon" aria-hidden="true">
        {icon ?? DEFAULT_ICON}
      </div>
      {title && <h3 className="exds-empty-state__title">{title}</h3>}
      {description && <p className="exds-empty-state__description">{description}</p>}
      {action && (
        <div className="exds-empty-state__action">
          <button
            className="exds-empty-state__btn"
            onClick={action.onClick}
            type="button"
          >
            {action.label}
          </button>
        </div>
      )}
    </div>
  );
}
