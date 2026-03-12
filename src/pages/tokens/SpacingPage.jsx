import React from 'react';
import { spacing, radii } from '../../tokens/tokens';
import { DoIcon, DontIcon, BulletIcon, ArrowIcon, ZapIcon } from '../docIcons';

export default function SpacingPage() {
  return (
    <div className="doc-page">
      <div className="doc-page__header">
        <h1 className="doc-page__title">Spacing & Layout</h1>
        <p className="doc-page__subtitle">
          A structured spacing scale, border radius system, and layout constants for consistent spatial
          rhythm and visual harmony.
        </p>
      </div>

      <section className="doc-section">
        <h2 className="doc-section__title">Spacing Scale</h2>
        <div className="doc-preview">
          {spacing.map((s) => (
            <div key={s.token} style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              padding: '8px 0',
              borderBottom: '1px solid var(--exds-color-border-subtle)',
            }}>
              <code style={{ fontSize: 'var(--exds-text-xs)', minWidth: '140px' }}>{s.token.replace('--', '')}</code>
              <div style={{
                width: `${s.px}px`,
                height: '24px',
                background: 'var(--exds-color-primary)',
                borderRadius: '2px',
                opacity: 0.6,
                transition: 'opacity 200ms',
              }} />
              <span style={{
                fontSize: 'var(--exds-text-xs)',
                color: 'var(--exds-color-text-tertiary)',
                fontFamily: 'var(--exds-font-mono)',
                minWidth: '80px',
              }}>
                {s.px}px / {s.rem}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className="doc-section">
        <h2 className="doc-section__title">Border Radii</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', gap: '16px' }}>
          {radii.map((r) => (
            <div key={r.token} className="doc-preview" style={{ textAlign: 'center', padding: '20px 12px' }}>
              <div style={{
                width: '64px',
                height: '64px',
                background: 'var(--exds-color-primary-light)',
                border: '2px solid var(--exds-color-primary)',
                borderRadius: r.value,
                margin: '0 auto 12px',
              }} />
              <div style={{ fontSize: 'var(--exds-text-xs)', fontWeight: 600 }}>{r.value}</div>
              <div style={{
                fontSize: 'var(--exds-text-2xs)',
                color: 'var(--exds-color-text-tertiary)',
                marginTop: '4px',
              }}>{r.usage}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="doc-section">
        <h2 className="doc-section__title">Elevation (Shadows)</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '16px' }}>
          {[
            { name: 'shadow-sm', var: '--exds-shadow-sm' },
            { name: 'shadow-md', var: '--exds-shadow-md' },
            { name: 'shadow-lg', var: '--exds-shadow-lg' },
            { name: 'shadow-xl', var: '--exds-shadow-xl' },
            { name: 'shadow-card', var: '--exds-shadow-card' },
          ].map((s) => (
            <div key={s.name} style={{
              background: 'var(--exds-color-surface)',
              borderRadius: 'var(--exds-radius-lg)',
              padding: '24px 16px',
              textAlign: 'center',
              boxShadow: `var(${s.var})`,
            }}>
              <code style={{ fontSize: 'var(--exds-text-xs)' }}>{s.name}</code>
            </div>
          ))}
        </div>
      </section>

      <section className="doc-section">
        <h2 className="doc-section__title">Layout Constants</h2>
        <table className="doc-props-table">
          <thead>
            <tr><th>Token</th><th>Value</th><th>Usage</th></tr>
          </thead>
          <tbody>
            <tr><td><code>--exds-container-max</code></td><td>1440px</td><td>Maximum container width</td></tr>
            <tr><td><code>--exds-sidebar-width</code></td><td>280px</td><td>Navigation sidebar</td></tr>
            <tr><td><code>--exds-header-height</code></td><td>56px</td><td>Global header height</td></tr>
          </tbody>
        </table>
      </section>

      {/* ── Do's and Don'ts ── */}
      <section className="doc-section">
        <h2 className="doc-section__title">Do's and Don'ts</h2>
        <div className="doc-guidelines">
          <div className="doc-guideline">
            <span className="doc-guideline__icon"><DoIcon /></span>
            <strong>Do</strong> use the spacing scale tokens instead of arbitrary pixel values. The 4px base scale ensures visual rhythm.
          </div>
          <div className="doc-guideline">
            <span className="doc-guideline__icon"><DontIcon /></span>
            <strong>Don't</strong> use values like <code>13px</code> or <code>7px</code> that don't align to the 4px grid: they break visual consistency.
          </div>
          <div className="doc-guideline">
            <span className="doc-guideline__icon"><DoIcon /></span>
            <strong>Do</strong> use <code>space-4</code> to <code>space-6</code> for internal component padding. Use <code>space-8</code> to <code>space-10</code> for section gaps.
          </div>
          <div className="doc-guideline">
            <span className="doc-guideline__icon"><DontIcon /></span>
            <strong>Don't</strong> mix tight and loose spacing inconsistently. If cards use <code>space-5</code> padding, all cards in a grid should match.
          </div>
          <div className="doc-guideline">
            <span className="doc-guideline__icon"><DoIcon /></span>
            <strong>Do</strong> use <code>radius-sm</code> (4px) for small elements (badges, inputs), <code>radius-md</code> (6px) for cards, and <code>radius-lg</code> (8–12px) for panels and modals.
          </div>
          <div className="doc-guideline">
            <span className="doc-guideline__icon"><DontIcon /></span>
            <strong>Don't</strong> apply <code>radius-full</code> to rectangular containers: it only works for square/circle elements like avatars.
          </div>
        </div>
      </section>
    </div>
  );
}
