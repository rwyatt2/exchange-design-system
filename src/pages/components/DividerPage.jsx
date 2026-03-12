import React from 'react';
import Divider from '../../components/Divider/Divider';
import { DoIcon, DontIcon, BulletIcon, ArrowIcon, ZapIcon } from '../docIcons';

export default function DividerPage() {
  return (
    <div className="doc-page">
      <div className="doc-page__header">
        <h1 className="doc-page__title">Divider</h1>
        <p className="doc-page__subtitle">
          A thin visual separator that organizes content into distinct sections.
          Dividers are intentional and tokenized: they use border color tokens
          and support horizontal, vertical, labeled, and dashed variants.
        </p>
      </div>

      {/* Horizontal */}
      <section className="doc-section">
        <h2 className="doc-section__title">Horizontal</h2>
        <div className="doc-preview" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <p style={{ fontSize: 'var(--exds-text-sm)', color: 'var(--exds-color-text-secondary)' }}>Section A content</p>
          <Divider />
          <p style={{ fontSize: 'var(--exds-text-sm)', color: 'var(--exds-color-text-secondary)' }}>Section B content</p>
          <Divider variant="dashed" />
          <p style={{ fontSize: 'var(--exds-text-sm)', color: 'var(--exds-color-text-secondary)' }}>Section C content (dashed)</p>
        </div>
      </section>

      {/* Labeled */}
      <section className="doc-section">
        <h2 className="doc-section__title">Labeled</h2>
        <div className="doc-preview" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <Divider label="OR" />
          <Divider label="Advanced Settings" variant="dashed" />
        </div>
      </section>

      {/* Vertical */}
      <section className="doc-section">
        <h2 className="doc-section__title">Vertical</h2>
        <div className="doc-preview" style={{ display: 'flex', alignItems: 'center', gap: '0', height: '40px' }}>
          <span style={{ fontSize: 'var(--exds-text-sm)', color: 'var(--exds-color-text-secondary)', padding: '0 var(--exds-space-3)' }}>Home</span>
          <Divider orientation="vertical" />
          <span style={{ fontSize: 'var(--exds-text-sm)', color: 'var(--exds-color-text-secondary)', padding: '0 var(--exds-space-3)' }}>Reports</span>
          <Divider orientation="vertical" />
          <span style={{ fontSize: 'var(--exds-text-sm)', color: 'var(--exds-color-text-secondary)', padding: '0 var(--exds-space-3)' }}>Settings</span>
        </div>
      </section>

      {/* Usage */}
      <section className="doc-section">
        <h2 className="doc-section__title">Usage</h2>
        <pre><code>{`<Divider />
<Divider variant="dashed" />
<Divider label="OR" />
<Divider label="Section" variant="dashed" />
<Divider orientation="vertical" />`}</code></pre>
      </section>

      {/* Props */}
      <section className="doc-section">
        <h2 className="doc-section__title">Props</h2>
        <table className="doc-props-table">
          <thead><tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
          <tbody>
            <tr><td><code>orientation</code></td><td><code>'horizontal'|'vertical'</code></td><td><code>'horizontal'</code></td><td>Direction of the separator line</td></tr>
            <tr><td><code>label</code></td><td>string</td><td>: </td><td>Optional text label centered in the divider</td></tr>
            <tr><td><code>variant</code></td><td><code>'solid'|'dashed'</code></td><td><code>'solid'</code></td><td>Line style</td></tr>
          </tbody>
        </table>
      </section>

      {/* Do's and Don'ts */}
      <section className="doc-section">
        <h2 className="doc-section__title">Do's and Don'ts</h2>
        <div className="doc-guidelines">
          <div className="doc-guideline"><span className="doc-guideline__icon"><DoIcon /></span><span><strong>Do</strong> use labeled dividers to separate semantically different form sections (e.g., "Personal Info" vs. "Account Settings").</span></div>
          <div className="doc-guideline"><span className="doc-guideline__icon"><DontIcon /></span><span><strong>Don't</strong> use dividers to separate every single list item: use row spacing instead. Dividers are for sections, not rows.</span></div>
          <div className="doc-guideline"><span className="doc-guideline__icon"><DoIcon /></span><span><strong>Do</strong> use vertical dividers in navbar-style horizontal menus to visually group navigation items.</span></div>
        </div>
      </section>
    </div>
  );
}
