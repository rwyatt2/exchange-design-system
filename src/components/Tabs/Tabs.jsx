import React from 'react';
import './Tabs.css';

export default function Tabs({ items, activeId, onChange, variant = 'default', className = '' }) {
  return (
    <div className={`exds-tabs exds-tabs--${variant} ${className}`} role="tablist">
      {items.map((item) => (
        <button
          key={item.id}
          role="tab"
          aria-selected={activeId === item.id}
          className={`exds-tabs__tab ${activeId === item.id ? 'exds-tabs__tab--active' : ''}`}
          onClick={() => onChange?.(item.id)}
        >
          {item.icon && <span className="exds-tabs__icon">{item.icon}</span>}
          {item.label}
        </button>
      ))}
    </div>
  );
}
