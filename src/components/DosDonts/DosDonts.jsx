import React from 'react';
import { Check, X } from 'lucide-react';
import './DosDonts.css';

function DoItem({ type, children }) {
  const isDo = type === 'do';
  return (
    <div className={`exds-dosdonts__item exds-dosdonts__item--${type}`}>
      <div className="exds-dosdonts__bar">
        <span className="exds-dosdonts__icon">
          {isDo
            ? <Check size={14} strokeWidth={2.5} aria-hidden="true" />
            : <X    size={14} strokeWidth={2.5} aria-hidden="true" />
          }
        </span>
        <span className="exds-dosdonts__label">{isDo ? 'Do' : "Don't"}</span>
      </div>
      <div className="exds-dosdonts__content">{children}</div>
    </div>
  );
}

export default function DosDonts({ items }) {
  return (
    <div className="exds-dosdonts">
      {items.map((pair, i) => (
        <div key={i} className="exds-dosdonts__pair">
          <DoItem type="do">{pair.do}</DoItem>
          <DoItem type="dont">{pair.dont}</DoItem>
        </div>
      ))}
    </div>
  );
}
