/**
 * Exchange Design System: Design Token JS Exports
 * For programmatic access in documentation pages
 */

export const colors = {
  brand: {
    '900': { value: '#0b0d0f', name: 'Brand 900' },
    '800': { value: '#12181c', name: 'Brand 800 (Header)' },
    '700': { value: '#1a4265', name: 'Brand 700 (Dark Blue)' },
    '600': { value: '#20262c', name: 'Brand 600' },
    '500': { value: '#255f82', name: 'Brand 500 (Teal)' },
    '400': { value: '#3459a7', name: 'Brand 400 (Primary Blue)' },
    '300': { value: '#00a3c4', name: 'Brand 300 (Cyan)' },
    '200': { value: '#19daff', name: 'Brand 200 (Bright Cyan)' },
  },
  semantic: {
    success: { value: '#008140', name: 'Success' },
    error: { value: '#cc2427', name: 'Error' },
    warning: { value: '#d4a017', name: 'Warning' },
    info: { value: '#3459a7', name: 'Info' },
  },
  neutral: {
    '900': { value: '#141414', name: 'Neutral 900' },
    '800': { value: '#20262c', name: 'Neutral 800' },
    '700': { value: '#3e4b59', name: 'Neutral 700' },
    '600': { value: '#505961', name: 'Neutral 600' },
    '500': { value: '#7c7c7c', name: 'Neutral 500' },
    '400': { value: '#808c97', name: 'Neutral 400' },
    '300': { value: '#afb0af', name: 'Neutral 300' },
    '200': { value: '#c4c4c4', name: 'Neutral 200' },
    '150': { value: '#d4d4d4', name: 'Neutral 150' },
    '100': { value: '#dadada', name: 'Neutral 100' },
    '75':  { value: '#e5e8eb', name: 'Neutral 75' },
    '50':  { value: '#f4f4f4', name: 'Neutral 50' },
  },
  surface: {
    default: { value: '#ffffff', name: 'Surface Default' },
    alt:     { value: '#fafafa', name: 'Surface Alt' },
    raised:  { value: '#f8f8f8', name: 'Surface Raised' },
    dark:    { value: '#12181c', name: 'Surface Dark' },
    darkAlt: { value: '#1a4265', name: 'Surface Dark Alt' },
  },
};

export const typography = {
  families: {
    primary:   "'Inter', 'Source Sans 3', -apple-system, BlinkMacSystemFont, sans-serif",
    secondary: "'Source Sans 3', 'Inter', sans-serif",
    mono:      "'JetBrains Mono', 'SF Mono', 'Consolas', monospace",
  },
  sizes: [
    { token: '--exds-text-2xs', px: 9,  rem: '0.5625rem', usage: 'Micro labels (e.g. "ROUTE ID")' },
    { token: '--exds-text-xs',  px: 12, rem: '0.75rem',   usage: 'Captions, metadata, badges' },
    { token: '--exds-text-sm',  px: 13, rem: '0.8125rem', usage: 'Secondary body text' },
    { token: '--exds-text-base',px: 14, rem: '0.875rem',  usage: 'Primary body text (default)' },
    { token: '--exds-text-md',  px: 16, rem: '1rem',      usage: 'Emphasized body, nav items' },
    { token: '--exds-text-lg',  px: 18, rem: '1.125rem',  usage: 'Sub-headings' },
    { token: '--exds-text-xl',  px: 20, rem: '1.25rem',   usage: 'Section titles' },
    { token: '--exds-text-2xl', px: 24, rem: '1.5rem',    usage: 'Card headings' },
    { token: '--exds-text-3xl', px: 28, rem: '1.75rem',   usage: 'Page headings' },
    { token: '--exds-text-4xl', px: 32, rem: '2rem',      usage: 'Large headings' },
    { token: '--exds-text-5xl', px: 36, rem: '2.25rem',   usage: 'Hero subtext' },
    { token: '--exds-text-6xl', px: 48, rem: '3rem',      usage: 'Hero text' },
  ],
  weights: [
    { token: '--exds-font-light',    value: 300, usage: 'Light emphasis, hero subtext' },
    { token: '--exds-font-regular',  value: 400, usage: 'Body text (default)' },
    { token: '--exds-font-medium',   value: 500, usage: 'Medium emphasis' },
    { token: '--exds-font-semibold', value: 600, usage: 'Headings, labels, emphasis' },
    { token: '--exds-font-bold',     value: 700, usage: 'Strong emphasis' },
  ],
};

export const spacing = [
  { token: '--exds-space-1',  px: 4,  rem: '0.25rem' },
  { token: '--exds-space-2',  px: 6,  rem: '0.375rem' },
  { token: '--exds-space-3',  px: 8,  rem: '0.5rem' },
  { token: '--exds-space-4',  px: 12, rem: '0.75rem' },
  { token: '--exds-space-5',  px: 16, rem: '1rem' },
  { token: '--exds-space-6',  px: 22, rem: '1.375rem' },
  { token: '--exds-space-7',  px: 24, rem: '1.5rem' },
  { token: '--exds-space-8',  px: 32, rem: '2rem' },
  { token: '--exds-space-9',  px: 36, rem: '2.25rem' },
  { token: '--exds-space-10', px: 48, rem: '3rem' },
  { token: '--exds-space-11', px: 50, rem: '3.125rem' },
  { token: '--exds-space-12', px: 64, rem: '4rem' },
];

export const radii = [
  { token: '--exds-radius-none', value: '0px', usage: 'No radius' },
  { token: '--exds-radius-sm',   value: '3px',  usage: 'Checkboxes, small inputs' },
  { token: '--exds-radius-md',   value: '4px',  usage: 'Buttons, standard inputs, cards' },
  { token: '--exds-radius-lg',   value: '8px',  usage: 'Modals, tooltips, elevated cards' },
  { token: '--exds-radius-xl',   value: '20px', usage: 'Pills, rounded panels' },
  { token: '--exds-radius-pill', value: '100px', usage: 'Fully rounded (buttons)' },
  { token: '--exds-radius-circle',value: '50%', usage: 'Circles (avatars)' },
];

export const shadows = [
  { token: '--exds-shadow-sm', usage: 'Buttons, simple cards' },
  { token: '--exds-shadow-md', usage: 'Dropdown menus' },
  { token: '--exds-shadow-lg', usage: 'Popovers, medium elevation' },
  { token: '--exds-shadow-xl', usage: 'Modals, high elevation' },
  { token: '--exds-shadow-card', usage: 'Card default state' },
  { token: '--exds-shadow-card-hover', usage: 'Card hover state' },
  { token: '--exds-shadow-modal', usage: 'Modal dialogs' },
];

export const zIndex = [
  { token: '--exds-z-hide', value: '-1' },
  { token: '--exds-z-base', value: '0' },
  { token: '--exds-z-docked', value: '10' },
  { token: '--exds-z-dropdown', value: '1000' },
  { token: '--exds-z-sticky', value: '1100' },
  { token: '--exds-z-banner', value: '1200' },
  { token: '--exds-z-overlay', value: '1300' },
  { token: '--exds-z-modal', value: '1400' },
  { token: '--exds-z-popover', value: '1500' },
  { token: '--exds-z-toast', value: '1600' },
  { token: '--exds-z-tooltip', value: '1700' },
];

export const motion = [
  { token: '--exds-transition-fast', usage: 'Hover states, micro-interactions' },
  { token: '--exds-transition-base', usage: 'Standard transitions' },
  { token: '--exds-transition-slow', usage: 'Modals, large surface movement' },
  { token: '--exds-transition-spring', usage: 'Playful bounciness' },
];
