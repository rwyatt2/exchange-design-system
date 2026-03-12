import React from 'react';
import { User } from 'lucide-react';
import './Avatar.css';

function getInitials(name) {
  if (!name) return '?';
  const parts = name.trim().split(/\s+/);
  if (parts.length === 1) return parts[0][0].toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

const PALETTE = [
  '#3459a7','#255f82','#00a3c4','#008140',
  '#d4a017','#cc2427','#7c3aed','#c2410c',
];

function colorFromName(name) {
  if (!name) return PALETTE[0];
  let h = 0;
  for (let i = 0; i < name.length; i++) h = (h << 5) - h + name.charCodeAt(i);
  return PALETTE[Math.abs(h) % PALETTE.length];
}

export default function Avatar({ src, name, size = 'md', variant }) {
  const resolvedVariant = variant || (src ? 'image' : name ? 'initials' : 'icon');

  return (
    <span
      className={`exds-avatar exds-avatar--${size}`}
      aria-label={name || 'Avatar'}
      style={resolvedVariant === 'initials' ? { background: colorFromName(name) } : undefined}
    >
      {resolvedVariant === 'image' && src && (
        <img src={src} alt={name || 'Avatar'} className="exds-avatar__img" />
      )}
      {resolvedVariant === 'initials' && (
        <span className="exds-avatar__initials" aria-hidden="true">{getInitials(name)}</span>
      )}
      {resolvedVariant === 'icon' && (
        <User className="exds-avatar__icon" aria-hidden="true" strokeWidth={1.5} />
      )}
    </span>
  );
}
