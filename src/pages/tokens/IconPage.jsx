import React from 'react';
import { DoIcon, DontIcon, BulletIcon, ArrowIcon, ZapIcon } from '../docIcons';

const SIZES = [
  { name: '16px (sm)', value: 16 },
  { name: '20px (md)', value: 20 },
  { name: '24px (base)', value: 24 },
  { name: '32px (lg)', value: 32 },
];

const ICONS = [
  { name: 'Search', path: 'M21 21l-4.35-4.35m0 0A7 7 0 1 0 6.65 6.65a7 7 0 0 0 9.99 9.99z' },
  { name: 'Filter', path: 'M3 5h18M6 10h12M9 15h6' },
  { name: 'Bell',   path: 'M18 8a6 6 0 0 0-12 0v4l-2 4h16l-2-4V8zM13.73 21a2 2 0 0 1-3.46 0' },
  { name: 'Check',  path: 'M20 6L9 17l-5-5' },
  { name: 'Alert',  path: 'M12 9v4M12 17v.5M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z' },
  { name: 'Grid',   path: 'M3 3h7v7H3zM3 14h7v7H3zM14 3h7v7h-7zM14 14h7v7h-7z' },
  { name: 'User',   path: 'M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z' },
  { name: 'Settings', path: 'M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z' },
  { name: 'Chart', path: 'M18 20V10M12 20V4M6 20v-6' },
  { name: 'Download', path: 'M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3' },
  { name: 'Edit', path: 'M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z' },
  { name: 'Trash', path: 'M3 6h18M8 6V4h8v2M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6' },
];

function IconBox({ name, path, size }) {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '6px',
      padding: '12px 8px',
      background: 'var(--exds-color-surface)',
      border: '1px solid var(--exds-color-border-subtle)',
      borderRadius: 'var(--exds-radius-md)',
    }}>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width={size} height={size}>
        <path d={path} />
      </svg>
      <span style={{ fontSize: 'var(--exds-text-2xs)', color: 'var(--exds-color-text-tertiary)', textAlign: 'center' }}>{name}</span>
    </div>
  );
}

export default function IconPage() {
  return (
    <div className="doc-page">
      <div className="doc-page__header">
        <h1 className="doc-page__title">Icon System</h1>
        <p className="doc-page__subtitle">
          Exchange uses a stroke-based icon style (2px stroke, round caps and joins)
          sourced from a consistent geometric vocabulary. Icons are rendered inline as
          SVG for crisp rendering at any DPI and easy color theming via <code>currentColor</code>.
        </p>
      </div>

      {/* Style principles */}
      <section className="doc-section">
        <h2 className="doc-section__title">Icon Style</h2>
        <table className="doc-props-table">
          <thead><tr><th>Property</th><th>Value</th></tr></thead>
          <tbody>
            <tr><td>Stroke width</td><td>2px</td></tr>
            <tr><td>Stroke linecap</td><td>round</td></tr>
            <tr><td>Stroke linejoin</td><td>round</td></tr>
            <tr><td>Fill</td><td>none (stroke-only)</td></tr>
            <tr><td>ViewBox</td><td>0 0 24 24</td></tr>
            <tr><td>Color</td><td><code>currentColor</code>: inherits from parent</td></tr>
            <tr><td>Recommended library</td><td><a href="https://lucide.dev" target="_blank" rel="noopener noreferrer">Lucide</a> or <a href="https://heroicons.com" target="_blank" rel="noopener noreferrer">Heroicons</a></td></tr>
          </tbody>
        </table>
      </section>

      {/* Size scale */}
      <section className="doc-section">
        <h2 className="doc-section__title">Size Scale</h2>
        <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-end', flexWrap: 'wrap' }}>
          {SIZES.map(({ name, value }) => (
            <div key={value} style={{ textAlign: 'center' }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="var(--exds-color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width={value} height={value}>
                <circle cx="12" cy="12" r="9" /><path d="M12 8v4l3 3" />
              </svg>
              <div style={{ marginTop: '6px', fontSize: 'var(--exds-text-2xs)', color: 'var(--exds-color-text-tertiary)', fontFamily: 'var(--exds-font-mono)' }}>{name}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Icon inventory */}
      <section className="doc-section">
        <h2 className="doc-section__title">Common Icons</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(80px, 1fr))', gap: '8px' }}>
          {ICONS.map(({ name, path }) => (
            <IconBox key={name} name={name} path={path} size={24} />
          ))}
        </div>
      </section>

      {/* Usage */}
      <section className="doc-section">
        <h2 className="doc-section__title">Usage</h2>
        <pre><code>{`/* Inline SVG (recommended) */
<svg viewBox="0 0 24 24" fill="none"
  stroke="currentColor" strokeWidth="2"
  strokeLinecap="round" strokeLinejoin="round"
  width="20" height="20">
  <path d="M21 21l-4.35-4.35M10 17a7 7 0 1 0 0-14 7 7 0 0 0 0 14z" />
</svg>

/* With Lucide React */
import { Search, Bell, Settings } from 'lucide-react';

<Search size={20} />             /* 20px icon */
<Bell size={20} color="currentColor" />
<Settings size={24} strokeWidth={1.5} />`}</code></pre>
      </section>

      {/* Do's and Don'ts */}
      <section className="doc-section">
        <h2 className="doc-section__title">Do's and Don'ts</h2>
        <div className="doc-guidelines">
          <div className="doc-guideline"><span className="doc-guideline__icon"><DoIcon /></span><span><strong>Do</strong> use <code>currentColor</code> for icon stroke/fill so it inherits color from parent and responds to hover states automatically.</span></div>
          <div className="doc-guideline"><span className="doc-guideline__icon"><DontIcon /></span><span><strong>Don't</strong> mix icon styles (outline and filled) within the same component: pick one and stay consistent.</span></div>
          <div className="doc-guideline"><span className="doc-guideline__icon"><DoIcon /></span><span><strong>Do</strong> size icons to 16px for inline text, 20px for buttons, and 24px for standalone icon buttons.</span></div>
          <div className="doc-guideline"><span className="doc-guideline__icon"><DontIcon /></span><span><strong>Don't</strong> use icons alone (without labels) in interactive controls unless the meaning is universal: always add <code>aria-label</code> or a visible label.</span></div>
          <div className="doc-guideline"><span className="doc-guideline__icon"><DoIcon /></span><span><strong>Do</strong> add <code>aria-hidden="true"</code> to decorative icons and <code>role="img"</code> with <code>aria-label</code> to semantic icons.</span></div>
        </div>
      </section>
    </div>
  );
}
