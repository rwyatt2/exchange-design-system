import React from 'react';
import './Skeleton.css';

export default function Skeleton({
  variant = 'rect',
  width,
  height,
  lines = 3,
  animated = true,
}) {
  const base = `exds-skeleton ${animated ? 'exds-skeleton--animated' : ''}`;

  if (variant === 'circle') {
    const sz = width || height || '40px';
    return <span className={`${base} exds-skeleton--circle`} style={{ width: sz, height: sz }} aria-hidden="true" />;
  }

  if (variant === 'text') {
    return (
      <div className="exds-skeleton-text" aria-hidden="true">
        {Array.from({ length: lines }).map((_, i) => (
          <span
            key={i}
            className={`${base} exds-skeleton--text-line`}
            style={{ width: i === lines - 1 ? '65%' : '100%' }}
          />
        ))}
      </div>
    );
  }

  // rect (default)
  return (
    <span
      className={`${base} exds-skeleton--rect`}
      style={{ width: width || '100%', height: height || '120px' }}
      aria-hidden="true"
    />
  );
}
