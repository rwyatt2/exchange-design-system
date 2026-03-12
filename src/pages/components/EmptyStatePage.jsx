import React, { useState } from 'react';
import EmptyState from '../../components/EmptyState/EmptyState';
import { DoIcon, DontIcon, BulletIcon, ArrowIcon, ZapIcon } from '../docIcons';

const VARIANTS = [
  {
    id: 'no-data',
    title: 'No Results Found',
    description: 'Try adjusting your filters or search terms to find what you\'re looking for.',
    action: { label: 'Clear Filters', onClick: () => {} },
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" width="64" height="64">
        <circle cx="28" cy="28" r="16" /><path d="M40 40l12 12" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 'no-items',
    title: 'No Items Yet',
    description: 'Get started by creating your first item. It only takes a moment.',
    action: { label: 'Create Item', onClick: () => {} },
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" width="64" height="64">
        <rect x="12" y="12" width="40" height="40" rx="4" />
        <path d="M32 22v20M22 32h20" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 'error',
    title: 'Something Went Wrong',
    description: 'We couldn\'t load this data. Try refreshing the page.',
    action: { label: 'Retry', onClick: () => {} },
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" width="64" height="64">
        <circle cx="32" cy="32" r="22" /><path d="M32 20v16M32 42v2" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function EmptyStatePage() {
  const [activeVariant, setActiveVariant] = useState('no-data');
  const variant = VARIANTS.find((v) => v.id === activeVariant);

  return (
    <div className="doc-page">
      <div className="doc-page__header">
        <h1 className="doc-page__title">Empty State</h1>
        <p className="doc-page__subtitle">
          Empty states appear when there is no data to display. A well-designed
          empty state explains why the area is empty, sets expectations, and
          provides a clear path forward.
        </p>
      </div>

      {/* Interactive demo */}
      <section className="doc-section">
        <h2 className="doc-section__title">Variants</h2>
        <div style={{ display: 'flex', gap: '8px', marginBottom: '16px', flexWrap: 'wrap' }}>
          {VARIANTS.map((v) => (
            <button
              key={v.id}
              onClick={() => setActiveVariant(v.id)}
              style={{
                padding: '6px 14px',
                borderRadius: 'var(--exds-radius-md)',
                border: '1px solid var(--exds-color-border)',
                background: activeVariant === v.id ? 'var(--exds-color-primary)' : 'var(--exds-color-surface)',
                color: activeVariant === v.id ? '#fff' : 'var(--exds-color-text-primary)',
                fontFamily: 'var(--exds-font-primary)',
                fontSize: 'var(--exds-text-sm)',
                cursor: 'pointer',
                fontWeight: 500,
              }}
            >
              {v.title}
            </button>
          ))}
        </div>
        <div className="doc-preview">
          <EmptyState icon={variant.icon} title={variant.title} description={variant.description} action={variant.action} />
        </div>
      </section>

      {/* Usage */}
      <section className="doc-section">
        <h2 className="doc-section__title">Usage</h2>
        <pre><code>{`<EmptyState
  icon={<SearchIcon />}
  title="No Results Found"
  description="Try adjusting your filters."
  action={{ label: 'Clear Filters', onClick: clearFilters }}
/>`}</code></pre>
      </section>

      {/* Props */}
      <section className="doc-section">
        <h2 className="doc-section__title">Props</h2>
        <table className="doc-props-table">
          <thead><tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
          <tbody>
            <tr><td><code>icon</code></td><td>ReactNode</td><td>default icon</td><td>Illustration or icon above the title</td></tr>
            <tr><td><code>title</code></td><td>string</td><td>: </td><td>Primary heading</td></tr>
            <tr><td><code>description</code></td><td>string</td><td>: </td><td>Explanatory body text</td></tr>
            <tr><td><code>action</code></td><td><code>&#123; label, onClick &#125;</code></td><td>: </td><td>Optional CTA button</td></tr>
          </tbody>
        </table>
      </section>

      {/* Do's and Don'ts */}
      <section className="doc-section">
        <h2 className="doc-section__title">Do's and Don'ts</h2>
        <div className="doc-guidelines">
          <div className="doc-guideline"><span className="doc-guideline__icon"><DoIcon /></span><span><strong>Do</strong> always include a call to action: users should never be stranded in an empty state without a way forward.</span></div>
          <div className="doc-guideline"><span className="doc-guideline__icon"><DontIcon /></span><span><strong>Don't</strong> use generic "No data" as the title: explain what is missing and why, in plain language.</span></div>
          <div className="doc-guideline"><span className="doc-guideline__icon"><DoIcon /></span><span><strong>Do</strong> tailor the icon to the context: a search empty state should have a search icon, not a generic document.</span></div>
        </div>
      </section>
    </div>
  );
}
