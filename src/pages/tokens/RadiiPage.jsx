import React from 'react';
import { radii } from '../../tokens/tokens';
import { DoIcon, DontIcon, BulletIcon, ArrowIcon, ZapIcon } from '../docIcons';

export default function RadiiPage() {
  return (
    <div className="doc-page">
      <div className="doc-page__header">
        <h1 className="doc-page__title">Border Radii</h1>
        <p className="doc-page__subtitle">
          A deliberate radius scale from sharp to fully circular. Consistent corner
          rounding unifies the visual language and signals element type: inputs,
          badges, modals, and avatars each have their own radius personality.
        </p>
      </div>

      {/* Live preview grid */}
      <section className="doc-section">
        <h2 className="doc-section__title">Radius Scale</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))', gap: '16px' }}>
          {radii.map((r) => (
            <div key={r.token} style={{
              background: 'var(--exds-color-surface)',
              border: '1px solid var(--exds-color-border-subtle)',
              borderRadius: 'var(--exds-radius-lg)',
              padding: '20px 12px',
              textAlign: 'center',
            }}>
              <div style={{
                width: r.token.includes('circle') ? '64px' : '80px',
                height: '64px',
                background: 'var(--exds-color-primary-light)',
                border: '2px solid var(--exds-color-primary)',
                borderRadius: r.value,
                margin: '0 auto 14px',
              }} />
              <code style={{ fontSize: 'var(--exds-text-xs)', display: 'block', marginBottom: '6px' }}>
                {r.token.replace('--exds-radius-', '')}
              </code>
              <div style={{
                fontSize: 'var(--exds-text-2xs)',
                fontFamily: 'var(--exds-font-mono)',
                color: 'var(--exds-color-text-tertiary)',
                marginBottom: '6px',
              }}>
                {r.value}
              </div>
              <div style={{
                fontSize: 'var(--exds-text-2xs)',
                color: 'var(--exds-color-text-tertiary)',
              }}>
                {r.usage}
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
              <th>Value</th>
              <th>Usage</th>
            </tr>
          </thead>
          <tbody>
            {radii.map((r) => (
              <tr key={r.token}>
                <td><code>{r.token}</code></td>
                <td style={{ fontFamily: 'var(--exds-font-mono)', fontSize: 'var(--exds-text-xs)' }}>{r.value}</td>
                <td style={{ color: 'var(--exds-color-text-secondary)' }}>{r.usage}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Usage code */}
      <section className="doc-section">
        <h2 className="doc-section__title">Usage</h2>
        <pre><code>{`/* Apply border radii via CSS custom properties */
.button {
  border-radius: var(--exds-radius-md);   /* 4px: standard button */
}

.button--pill {
  border-radius: var(--exds-radius-pill); /* 100px: fully rounded */
}

.card {
  border-radius: var(--exds-radius-lg);   /* 8px: elevated card */
}

.avatar {
  border-radius: var(--exds-radius-circle); /* 50%: circular crop */
}

.badge {
  border-radius: var(--exds-radius-xl);   /* 20px: pill badge */
}`}</code></pre>
      </section>

      {/* Do's and Don'ts */}
      <section className="doc-section">
        <h2 className="doc-section__title">Do's and Don'ts</h2>
        <div className="doc-guidelines">
          <div className="doc-guideline">
            <span className="doc-guideline__icon"><DoIcon /></span>
            <span><strong>Do</strong> use <code>radius-sm</code> (3px) for tight elements like checkboxes, small inputs, and inline badges.</span>
          </div>
          <div className="doc-guideline">
            <span className="doc-guideline__icon"><DontIcon /></span>
            <span><strong>Don't</strong> apply <code>radius-circle</code> to non-square elements: it will produce ellipses, not circles.</span>
          </div>
          <div className="doc-guideline">
            <span className="doc-guideline__icon"><DoIcon /></span>
            <span><strong>Do</strong> escalate radius with elevation: flat elements use <code>radius-sm</code>, floating overlays use <code>radius-lg</code>.</span>
          </div>
          <div className="doc-guideline">
            <span className="doc-guideline__icon"><DontIcon /></span>
            <span><strong>Don't</strong> mix radius values arbitrarily within a component: if a button uses <code>radius-md</code>, its icon variant should too.</span>
          </div>
          <div className="doc-guideline">
            <span className="doc-guideline__icon"><DoIcon /></span>
            <span><strong>Do</strong> use <code>radius-none</code> for flush container edges, table cells, and full-bleed sections.</span>
          </div>
        </div>
      </section>
    </div>
  );
}
