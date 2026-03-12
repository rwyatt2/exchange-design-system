import React from 'react';
import { typography } from '../../tokens/tokens';
import { DoIcon, DontIcon, BulletIcon, ArrowIcon, ZapIcon } from '../docIcons';

export default function TypographyPage() {
  return (
    <div className="doc-page">
      <div className="doc-page__header">
        <h1 className="doc-page__title">Typography</h1>
        <p className="doc-page__subtitle">
          The Exchange uses Inter (substituting for the proprietary Optimist) as its primary typeface,
          with Source Sans 3 as secondary and JetBrains Mono for code.
        </p>
      </div>

      <section className="doc-section">
        <h2 className="doc-section__title">Font Families</h2>
        <div style={{ display: 'grid', gap: '16px' }}>
          <div className="doc-preview">
            <p className="doc-section__label">Primary: Inter (Optimist substitute)</p>
            <p style={{ fontFamily: 'var(--exds-font-primary)', fontSize: '24px', marginBottom: '8px' }}>
              The quick brown fox jumps over the lazy dog
            </p>
            <code style={{ fontSize: 'var(--exds-text-xs)' }}>var(--exds-font-primary)</code>
          </div>
          <div className="doc-preview">
            <p className="doc-section__label">Secondary: Source Sans 3</p>
            <p style={{ fontFamily: 'var(--exds-font-secondary)', fontSize: '24px', marginBottom: '8px' }}>
              The quick brown fox jumps over the lazy dog
            </p>
            <code style={{ fontSize: 'var(--exds-text-xs)' }}>var(--exds-font-secondary)</code>
          </div>
          <div className="doc-preview">
            <p className="doc-section__label">Monospace: JetBrains Mono</p>
            <p style={{ fontFamily: 'var(--exds-font-mono)', fontSize: '24px', marginBottom: '8px' }}>
              The quick brown fox jumps over the lazy dog
            </p>
            <code style={{ fontSize: 'var(--exds-text-xs)' }}>var(--exds-font-mono)</code>
          </div>
        </div>
      </section>

      <section className="doc-section">
        <h2 className="doc-section__title">Type Scale</h2>
        <div className="doc-preview">
          {typography.sizes.map((size) => (
            <div key={size.token} style={{
              display: 'flex',
              alignItems: 'baseline',
              gap: '24px',
              padding: '12px 0',
              borderBottom: '1px solid var(--exds-color-border-subtle)',
            }}>
              <span style={{
                fontSize: size.rem,
                fontFamily: 'var(--exds-font-primary)',
                fontWeight: 400,
                minWidth: '300px',
                lineHeight: 1.3,
              }}>
                Exchange Design
              </span>
              <span style={{
                fontSize: 'var(--exds-text-xs)',
                color: 'var(--exds-color-text-tertiary)',
                fontFamily: 'var(--exds-font-mono)',
                minWidth: '80px',
              }}>
                {size.px}px
              </span>
              <span style={{
                fontSize: 'var(--exds-text-xs)',
                color: 'var(--exds-color-text-tertiary)',
                fontFamily: 'var(--exds-font-mono)',
                minWidth: '100px',
              }}>
                {size.rem}
              </span>
              <span style={{
                fontSize: 'var(--exds-text-xs)',
                color: 'var(--exds-color-text-secondary)',
                flex: 1,
              }}>
                {size.usage}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className="doc-section">
        <h2 className="doc-section__title">Font Weights</h2>
        <div className="doc-preview">
          {typography.weights.map((w) => (
            <div key={w.token} style={{
              display: 'flex',
              alignItems: 'baseline',
              gap: '24px',
              padding: '12px 0',
              borderBottom: '1px solid var(--exds-color-border-subtle)',
            }}>
              <span style={{
                fontWeight: w.value,
                fontSize: 'var(--exds-text-xl)',
                fontFamily: 'var(--exds-font-primary)',
                minWidth: '300px',
              }}>
                Exchange Design System
              </span>
              <code style={{ fontSize: 'var(--exds-text-xs)' }}>{w.value}</code>
              <span style={{
                fontSize: 'var(--exds-text-xs)',
                color: 'var(--exds-color-text-secondary)',
              }}>
                {w.usage}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className="doc-section">
        <h2 className="doc-section__title">Usage</h2>
        <pre><code>{`/* Typography tokens */
.heading {
  font-family: var(--exds-font-primary);
  font-size: var(--exds-text-3xl);     /* 28px */
  font-weight: var(--exds-font-semibold); /* 600 */
  line-height: var(--exds-leading-tight); /* 1.2 */
}

.body {
  font-size: var(--exds-text-base);    /* 14px: primary body */
  font-weight: var(--exds-font-regular); /* 400 */
  line-height: var(--exds-leading-normal); /* 1.5 */
}

.caption {
  font-size: var(--exds-text-xs);      /* 12px */
  color: var(--exds-color-text-tertiary);
  text-transform: uppercase;
  letter-spacing: var(--exds-tracking-caps);
}`}</code></pre>
      </section>

      {/* ── Do's and Don'ts ── */}
      <section className="doc-section">
        <h2 className="doc-section__title">Do's and Don'ts</h2>
        <div className="doc-guidelines">
          <div className="doc-guideline">
            <span className="doc-guideline__icon"><DoIcon /></span>
            <strong>Do</strong> use <code>text-base</code> (14px) as the default body size. It's the primary reading size throughout The Exchange.
          </div>
          <div className="doc-guideline">
            <span className="doc-guideline__icon"><DontIcon /></span>
            <strong>Don't</strong> use <code>text-4xl</code> or <code>text-3xl</code> for body copy: large sizes are reserved for page and section headings only.
          </div>
          <div className="doc-guideline">
            <span className="doc-guideline__icon"><DoIcon /></span>
            <strong>Do</strong> maintain heading hierarchy: one <code>text-4xl</code> h1 per page, then <code>text-2xl</code> for sections, <code>text-lg</code> for subsections.
          </div>
          <div className="doc-guideline">
            <span className="doc-guideline__icon"><DontIcon /></span>
            <strong>Don't</strong> skip heading levels (e.g., h1 → h4): it breaks screen reader navigation and visual hierarchy.
          </div>
          <div className="doc-guideline">
            <span className="doc-guideline__icon"><DoIcon /></span>
            <strong>Do</strong> use <code>font-semibold</code> (600) for headings, labels, and emphasis. Use <code>font-bold</code> (700) sparingly for maximum emphasis.
          </div>
          <div className="doc-guideline">
            <span className="doc-guideline__icon"><DontIcon /></span>
            <strong>Don't</strong> use <code>font-mono</code> for anything other than code snippets, identifiers, and technical values.
          </div>
        </div>
      </section>
    </div>
  );
}
