import React, { useState } from 'react';
import Tag from '../../components/Tag/Tag';
import { DoIcon, DontIcon, BulletIcon, ArrowIcon, ZapIcon } from '../docIcons';

const CATEGORIES = ['Design', 'Engineering', 'Research', 'Strategy', 'Brand', 'Data'];

export default function TagPage() {
  const [selected, setSelected] = useState(['Design', 'Engineering']);

  const toggle = (cat) => {
    setSelected((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
  };

  return (
    <div className="doc-page">
      <div className="doc-page__header">
        <h1 className="doc-page__title">Tag</h1>
        <p className="doc-page__subtitle">
          Tags (chips) represent attributes, filters, or taxonomy labels
          that can be toggled, removed, or read-only displayed.
          Distinct from Badges, which communicate status: Tags communicate
          categorization and selection.
        </p>
      </div>

      {/* Filter demo */}
      <section className="doc-section">
        <h2 className="doc-section__title">Filter Tags (Removable)</h2>
        <div className="doc-preview">
          <p style={{ fontSize: 'var(--exds-text-xs)', color: 'var(--exds-color-text-tertiary)', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600 }}>Active filters</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {selected.map((cat) => (
              <Tag key={cat} label={cat} onRemove={() => toggle(cat)} />
            ))}
            {selected.length === 0 && (
              <span style={{ color: 'var(--exds-color-text-tertiary)', fontSize: 'var(--exds-text-sm)' }}>No active filters</span>
            )}
          </div>
          <div style={{ marginTop: '16px', display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {CATEGORIES.filter((c) => !selected.includes(c)).map((cat) => (
              <Tag key={cat} label={cat} variant="outline" onRemove={() => toggle(cat)} />
            ))}
          </div>
        </div>
      </section>

      {/* Variants */}
      <section className="doc-section">
        <h2 className="doc-section__title">Variants</h2>
        <div className="doc-preview doc-preview__row" style={{ gap: '8px' }}>
          <Tag label="Filled (default)" variant="filled" />
          <Tag label="Outline" variant="outline" />
          <Tag label="Custom color" variant="filled" color="#5b21b6" />
          <Tag label="Removable" onRemove={() => {}} />
        </div>
      </section>

      {/* Sizes */}
      <section className="doc-section">
        <h2 className="doc-section__title">Sizes</h2>
        <div className="doc-preview" style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
          <Tag label="Small" size="sm" />
          <Tag label="Medium" size="md" />
          <Tag label="Large" size="lg" />
        </div>
      </section>

      {/* Usage */}
      <section className="doc-section">
        <h2 className="doc-section__title">Usage</h2>
        <pre><code>{`<Tag label="Engineering" />
<Tag label="Design" variant="outline" />
<Tag label="Research" onRemove={() => removeTag('Research')} />
<Tag label="Custom" color="#7c3aed" />`}</code></pre>
      </section>

      {/* Props */}
      <section className="doc-section">
        <h2 className="doc-section__title">Props</h2>
        <table className="doc-props-table">
          <thead><tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
          <tbody>
            <tr><td><code>label</code></td><td>string</td><td>: </td><td>Tag text content</td></tr>
            <tr><td><code>onRemove</code></td><td>function</td><td>: </td><td>If provided, renders a remove (×) button</td></tr>
            <tr><td><code>color</code></td><td>string (hex/css)</td><td>: </td><td>Custom color overrides the default primary blue</td></tr>
            <tr><td><code>size</code></td><td><code>'sm' | 'md' | 'lg'</code></td><td><code>'md'</code></td><td>Tag size</td></tr>
            <tr><td><code>variant</code></td><td><code>'filled' | 'outline'</code></td><td><code>'filled'</code></td><td>Visual style</td></tr>
          </tbody>
        </table>
      </section>

      {/* Do's and Don'ts */}
      <section className="doc-section">
        <h2 className="doc-section__title">Do's and Don'ts</h2>
        <div className="doc-guidelines">
          <div className="doc-guideline"><span className="doc-guideline__icon"><DoIcon /></span><span><strong>Do</strong> use Tags for multi-value filter chips, category labels, and selected items in multi-select inputs.</span></div>
          <div className="doc-guideline"><span className="doc-guideline__icon"><DontIcon /></span><span><strong>Don't</strong> use Tags for status information: use Badge for success/error/warning states.</span></div>
          <div className="doc-guideline"><span className="doc-guideline__icon"><DoIcon /></span><span><strong>Do</strong> use outline variant for "available to select" tags alongside filled tags for "currently selected".</span></div>
          <div className="doc-guideline"><span className="doc-guideline__icon"><DontIcon /></span><span><strong>Don't</strong> put long strings in Tags: keep labels concise (1–3 words). Use truncation at component level if needed.</span></div>
        </div>
      </section>
    </div>
  );
}
