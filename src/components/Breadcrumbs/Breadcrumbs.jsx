import React from 'react';
import './Breadcrumbs.css';

/**
 * Breadcrumbs component for displaying hierarchical navigation.
 */
export const Breadcrumbs = ({ 
  items = [], 
  separator = '/',
  className = '',
  'aria-label': ariaLabel = 'Breadcrumb navigation',
  ...props 
}) => {
  const classes = ['exds-breadcrumbs', className].filter(Boolean).join(' ');

  return (
    <nav aria-label={ariaLabel} {...props}>
      <ol className={classes}>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          
          return (
            <li 
              key={index} 
              className="exds-breadcrumb-item"
              aria-current={isLast ? 'page' : undefined}
            >
              {item.href ? (
                <a href={item.href} className="exds-breadcrumb-link">
                  {item.label}
                </a>
              ) : (
                <span className="exds-breadcrumb-link">{item.label}</span>
              )}
              
              {!isLast && (
                <span className="exds-breadcrumb-separator" aria-hidden="true">
                  {separator}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};


