import React from 'react';
import { shadows } from '../../tokens/tokens';
import { DoIcon, DontIcon, BulletIcon, ArrowIcon, ZapIcon } from '../docIcons';

const SHADOW_VALUES = {
  '--exds-shadow-sm':         '0 1px 2px rgba(0,0,0,0.06), 0 1px 3px rgba(0,0,0,0.1)',
  '--exds-shadow-md':         '0 4px 6px rgba(0,0,0,0.07), 0 2px 4px rgba(0,0,0,0.06)',
  '--exds-shadow-lg':         '0 10px 15px rgba(0,0,0,0.08), 0 4px 6px rgba(0,0,0,0.05)',
  '--exds-shadow-xl':         '0 20px 25px rgba(0,0,0,0.10), 0 10px 10px rgba(0,0,0,0.04)',
  '--exds-shadow-card':       '0 1px 3px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.05)',
  '--exds-shadow-card-hover': '0 4px 12px rgba(0,0,0,0.12), 0 2px 4px rgba(0,0,0,0.06)',
  '--exds-shadow-modal':      '0 25px 50px rgba(0,0,0,0.20), 0 10px 20px rgba(0,0,0,0.10)',
};

export default function ElevationPage() {
  return (
    <div className="doc-page">
      <div className="doc-page__header">
        <h1 className="doc-page__title">Elevation & Shadows</h1>
        <p className="doc-page__subtitle">
          A layered shadow scale that communicates depth and hierarchy.
          Elevation is applied purposefully: not decoratively: to signal
          interactive surfaces, overlays, and floating elements.
        </p>
      </div>

      {/* Live preview */}
      <section className="doc-section">
        <h2 className="doc-section__title">Shadow Scale</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '24px', padding: '8px 0' }}>
          {shadows.map((s) => (
            <div key={s.token} style={{
              background: 'var(--exds-color-surface)',
              borderRadius: 'var(--exds-radius-lg)',
              padding: '28px 20px 20px',
              boxShadow: `var(${s.token})`,
              textAlign: 'center',
            }}>
              <div style={{ marginBottom: '12px' }}>
                <code style={{ fontSize: 'var(--exds-text-xs)', color: 'var(--exds-color-primary)' }}>
                  {s.token.replace('--exds-shadow-', '')}
                </code>
              </div>
              <div style={{
                fontSize: 'var(--exds-text-2xs)',
                color: 'var(--exds-color-text-tertiary)',
                fontFamily: 'var(--exds-font-mono)',
                lineHeight: 1.5,
              }}>
                {SHADOW_VALUES[s.token]}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Reference table */}
      <section className="doc-section">
        <h2 className="doc-section__title">Token Reference</h2>
        <table className="doc-props-table">
          <thead>
            <tr>
              <th>Token</th>
              <th>Typical Usage</th>
            </tr>
          </thead>
          <tbody>
            {shadows.map((s) => (
              <tr key={s.token}>
                <td><code>{s.token}</code></td>
                <td style={{ color: 'var(--exds-color-text-secondary)' }}>{s.usage}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Usage code */}
      <section className="doc-section">
        <h2 className="doc-section__title">Usage</h2>
        <pre><code>{`/* Apply shadows via CSS custom properties */
.card {
  box-shadow: var(--exds-shadow-card);
  transition: box-shadow var(--exds-transition-fast);
}
.card:hover {
  box-shadow: var(--exds-shadow-card-hover);
}

.modal {
  box-shadow: var(--exds-shadow-modal);
}

.dropdown {
  box-shadow: var(--exds-shadow-md);
}`}</code></pre>
      </section>

      {/* Do's and Don'ts */}
      <section className="doc-section">
        <h2 className="doc-section__title">Do's and Don'ts</h2>
        <div className="doc-guidelines">
          <div className="doc-guideline">
            <span className="doc-guideline__icon"><DoIcon /></span>
            <span><strong>Do</strong> use <code>shadow-sm</code> and <code>shadow-card</code> for resting state surfaces. Reserve larger shadows for modals and popovers.</span>
          </div>
          <div className="doc-guideline">
            <span className="doc-guideline__icon"><DontIcon /></span>
            <span><strong>Don't</strong> apply high-elevation shadows (xl, modal) to inline elements: they compete with genuinely floating layers and confuse hierarchy.</span>
          </div>
          <div className="doc-guideline">
            <span className="doc-guideline__icon"><DoIcon /></span>
            <span><strong>Do</strong> pair <code>shadow-card</code> → <code>shadow-card-hover</code> for card hover transitions to communicate interactivity.</span>
          </div>
          <div className="doc-guideline">
            <span className="doc-guideline__icon"><DontIcon /></span>
            <span><strong>Don't</strong> stack multiple box-shadows across nested elements: overlapping shadows create muddy, illegible depth.</span>
          </div>
          <div className="doc-guideline">
            <span className="doc-guideline__icon"><DoIcon /></span>
            <span><strong>Do</strong> combine elevation with <code>border-radius</code> tokens consistently: <code>shadow-card</code> + <code>radius-lg</code>, <code>shadow-modal</code> + <code>radius-lg</code>.</span>
          </div>
        </div>
      </section>
    </div>
  );
}
