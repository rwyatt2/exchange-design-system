import React from 'react';
import { Search } from 'lucide-react';
import './SearchBar.css';

export default function SearchBar({
  placeholder = 'Search...',
  value,
  onChange,
  onSubmit,
  size = 'md',
  className = '',
  ...props
}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit?.(value);
  };

  return (
    <form
      className={[
        'exds-search',
        `exds-search--${size}`,
        className,
      ].filter(Boolean).join(' ')}
      onSubmit={handleSubmit}
      role="search"
    >
      <Search className="exds-search__icon" size={16} strokeWidth={2} aria-hidden="true" />
      <input
        type="search"
        className="exds-search__input"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        {...props}
      />
    </form>
  );
}
