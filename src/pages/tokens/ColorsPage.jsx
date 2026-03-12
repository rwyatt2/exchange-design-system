import React, { useState } from 'react';
import { colors } from '../../tokens/tokens';
import { DoIcon, DontIcon, BulletIcon, ArrowIcon, ZapIcon } from '../docIcons';

function ColorSwatch({ hex, name, size = 'md' }) {
  const [copied, setCopied] = useState(false);
  const isLight = (hex) => {
    const r = parseInt(hex.slice(1,3), 16);
    const g = parseInt(hex.slice(3,5), 16);
    const b = parseInt(hex.slice(5,7), 16);
    return (r * 299 + g * 587 + b * 114) / 1000 > 150;
  };

  const copy = () => {
    navigator.clipboard.writeText(hex);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <button
      onClick={copy}
      style={{
        background: hex,
        color: isLight(hex) ? '#141414' : '#ffffff',
        padding: size === 'lg' ? '32px 20px 16px' : '16px 12px 10px',
        borderRadius: 'var(--exds-radius-lg)',
        border: '1px solid var(--exds-color-border-subtle)',
        cursor: 'pointer',
        transition: 'all 200ms ease',
        textAlign: 'left',
        width: '100%',
        fontFamily: 'var(--exds-font-primary)',
      }}
      title={`Click to copy ${hex}`}
    >
      <div style={{ fontSize: 'var(--exds-text-sm)', fontWeight: 600, marginBottom: '4px' }}>
        {copied ? '✓ Copied!' : name}
      </div>
      <div style={{ fontSize: 'var(--exds-text-xs)', opacity: 0.7, fontFamily: 'var(--exds-font-mono)' }}>
        {hex}
      </div>
    </button>
  );
}

export default function ColorsPage() {
  return (
    <div className="doc-page">
      <div className="doc-page__header">
        <h1 className="doc-page__title">Colors</h1>
        <p className="doc-page__subtitle">
          The Exchange color system is built on a dark navy brand palette with a primary action blue,
          semantic colors for feedback, and a comprehensive neutral scale for text and surfaces.
        </p>
      </div>

      <section className="doc-section">
        <h2 className="doc-section__title">Brand Palette</h2>
        <p style={{ color: 'var(--exds-color-text-secondary)', marginBottom: '16px' }}>
          The brand palette anchors the visual identity with deep navy tones progressing through to vibrant cyan accents.
        </p>
        <div className="doc-grid doc-grid--4">
          {Object.entries(colors.brand).map(([key, { value, name }]) => (
            <ColorSwatch key={key} hex={value} name={name} />
          ))}
        </div>
      </section>

      <section className="doc-section">
        <h2 className="doc-section__title">Semantic Colors</h2>
        <p style={{ color: 'var(--exds-color-text-secondary)', marginBottom: '16px' }}>
          Communicate status and feedback consistently across the interface.
        </p>
        <div className="doc-grid doc-grid--4">
          {Object.entries(colors.semantic).map(([key, { value, name }]) => (
            <ColorSwatch key={key} hex={value} name={name} size="lg" />
          ))}
        </div>
      </section>

      <section className="doc-section">
        <h2 className="doc-section__title">Neutral Scale</h2>
        <p style={{ color: 'var(--exds-color-text-secondary)', marginBottom: '16px' }}>
          A 12-step neutral ramp from near-black to light gray, used for text, borders, and backgrounds.
        </p>
        <div className="doc-grid doc-grid--4">
          {Object.entries(colors.neutral).map(([key, { value, name }]) => (
            <ColorSwatch key={key} hex={value} name={name} />
          ))}
        </div>
      </section>

      <section className="doc-section">
        <h2 className="doc-section__title">Surface Colors</h2>
        <p style={{ color: 'var(--exds-color-text-secondary)', marginBottom: '16px' }}>
          Background colors for different elevation levels and contexts.
        </p>
        <div className="doc-grid doc-grid--3">
          {Object.entries(colors.surface).map(([key, { value, name }]) => (
            <ColorSwatch key={key} hex={value} name={name} size="lg" />
          ))}
        </div>
      </section>

      <section className="doc-section">
        <h2 className="doc-section__title">Usage</h2>
        <pre><code>{`/* Using color tokens */
.header {
  background: var(--exds-color-surface-dark);     /* Dark header */
  color: var(--exds-color-text-inverse);           /* White text */
}

.link {
  color: var(--exds-color-text-link);              /* Primary blue */
}

.error-message {
  color: var(--exds-color-error);                  /* Red */
  background: var(--exds-color-error-light);       /* Light red bg */
}`}</code></pre>
      </section>

      {/* ── Do's and Don'ts ── */}
      <section className="doc-section">
        <h2 className="doc-section__title">Do's and Don'ts</h2>
        <div className="doc-guidelines">
          <div className="doc-guideline">
            <span className="doc-guideline__icon"><DoIcon /></span>
            <strong>Do</strong> use semantic color tokens (<code>--exds-color-error</code>, <code>--exds-color-success</code>) for status communication: not raw brand palette values.
          </div>
          <div className="doc-guideline">
            <span className="doc-guideline__icon"><DontIcon /></span>
            <strong>Don't</strong> hardcode hex values. Always use the CSS custom properties so themes and updates propagate automatically.
          </div>
          <div className="doc-guideline">
            <span className="doc-guideline__icon"><DoIcon /></span>
            <strong>Do</strong> pair <code>text-primary</code> with <code>surface</code> and <code>text-inverse</code> with <code>surface-dark</code> to maintain WCAG AA contrast (≥ 4.5:1).
          </div>
          <div className="doc-guideline">
            <span className="doc-guideline__icon"><DontIcon /></span>
            <strong>Don't</strong> use <code>text-tertiary</code> on dark backgrounds or <code>text-inverse</code> on light surfaces: contrast will fail.
          </div>
          <div className="doc-guideline">
            <span className="doc-guideline__icon"><DoIcon /></span>
            <strong>Do</strong> use the neutral scale for borders and backgrounds. Neutrals are designed to work with both brand and semantic colors.
          </div>
          <div className="doc-guideline">
            <span className="doc-guideline__icon"><DontIcon /></span>
            <strong>Don't</strong> use brand-700 or brand-800 for text body: they're designed for accents and highlights, not readability.
          </div>
        </div>
      </section>
    </div>
  );
}
