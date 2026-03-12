import React, { useState } from 'react';
import ProgressBar from '../../components/ProgressBar/ProgressBar';
import { A11yIcon, ArrowIcon, BulletIcon, DoIcon, DontIcon, ZapIcon } from '../docIcons';

export default function ProgressBarPage() {
  const [value, setValue] = useState(65);

  return (
    <div className="doc-page">
      <div className="doc-page__header">
        <h1 className="doc-page__title">Progress Bar</h1>
        <p className="doc-page__subtitle">
          Progress bars represent the completed portion of a determinate task.
          Unlike Spinner (indeterminate), ProgressBar requires a known total : 
          use it for file uploads, multi-step flows, and measurable operations.
        </p>
      </div>

      {/* Interactive */}
      <section className="doc-section">
        <h2 className="doc-section__title">Interactive</h2>
        <div className="doc-preview" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <ProgressBar value={value} label="Overall progress" showValue />
          <input
            type="range"
            min={0}
            max={100}
            value={value}
            onChange={(e) => setValue(Number(e.target.value))}
            style={{ width: '100%' }}
          />
        </div>
      </section>

      {/* Sizes */}
      <section className="doc-section">
        <h2 className="doc-section__title">Sizes</h2>
        <div className="doc-preview" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <ProgressBar value={72} label="Small" size="sm" showValue />
          <ProgressBar value={55} label="Medium (default)" size="md" showValue />
          <ProgressBar value={40} label="Large" size="lg" showValue />
        </div>
      </section>

      {/* Variants */}
      <section className="doc-section">
        <h2 className="doc-section__title">Semantic Variants</h2>
        <div className="doc-preview" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <ProgressBar value={80} label="Default (primary)" variant="default" showValue />
          <ProgressBar value={100} label="Success" variant="success" showValue />
          <ProgressBar value={45} label="Warning" variant="warning" showValue />
          <ProgressBar value={20} label="Error" variant="error" showValue />
        </div>
      </section>

      {/* Animated */}
      <section className="doc-section">
        <h2 className="doc-section__title">Animated Stripe</h2>
        <p style={{ color: 'var(--exds-color-text-secondary)', marginBottom: '16px', fontSize: 'var(--exds-text-sm)' }}>
          Use the <code>animated</code> prop when a task is in-progress and the value is actively changing.
        </p>
        <div className="doc-preview" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <ProgressBar value={60} label="Uploading files…" animated showValue />
          <ProgressBar value={30} label="Processing…" variant="warning" animated showValue />
        </div>
      </section>

      {/* Usage */}
      <section className="doc-section">
        <h2 className="doc-section__title">Usage</h2>
        <pre><code>{`<ProgressBar
  value={uploadPercent}
  label="Uploading"
  variant="default"
  size="md"
  showValue
  animated
/>`}</code></pre>
      </section>

      {/* Props */}
      <section className="doc-section">
        <h2 className="doc-section__title">Props</h2>
        <table className="doc-props-table">
          <thead><tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
          <tbody>
            <tr><td><code>value</code></td><td>number (0–100)</td><td><code>0</code></td><td>Completion percentage. Clamped to 0–100.</td></tr>
            <tr><td><code>label</code></td><td>string</td><td>: </td><td>Visible label above the bar</td></tr>
            <tr><td><code>size</code></td><td><code>'sm' | 'md' | 'lg'</code></td><td><code>'md'</code></td><td>Track height</td></tr>
            <tr><td><code>variant</code></td><td><code>'default' | 'success' | 'warning' | 'error'</code></td><td><code>'default'</code></td><td>Fill color</td></tr>
            <tr><td><code>animated</code></td><td>boolean</td><td><code>false</code></td><td>Animated diagonal stripe overlay</td></tr>
            <tr><td><code>showValue</code></td><td>boolean</td><td><code>false</code></td><td>Shows percentage value in the header</td></tr>
          </tbody>
        </table>
      </section>

      {/* Do's and Don'ts */}
      <section className="doc-section">
        <h2 className="doc-section__title">Do's and Don'ts</h2>
        <div className="doc-guidelines">
          <div className="doc-guideline"><span className="doc-guideline__icon"><DoIcon /></span><span><strong>Do</strong> use ProgressBar when you know the exact percentage complete. Use Spinner for unknown durations.</span></div>
          <div className="doc-guideline"><span className="doc-guideline__icon"><DontIcon /></span><span><strong>Don't</strong> use ProgressBar to represent a non-proportional value like risk level without clear labeling.</span></div>
          <div className="doc-guideline"><span className="doc-guideline__icon"><DoIcon /></span><span><strong>Do</strong> use <code>variant="success"</code> when value reaches 100% to visually confirm completion.</span></div>
          <div className="doc-guideline"><span className="doc-guideline__icon"><DontIcon /></span><span><strong>Don't</strong> animate a progress bar that is showing static/historical data: only animate live in-progress operations.</span></div>
        </div>
      </section>

      {/* Accessibility */}
      <section className="doc-section">
        <h2 className="doc-section__title">Accessibility</h2>
        <div className="doc-a11y">
          <div className="doc-a11y__item"><span className="doc-a11y__icon"><A11yIcon /></span><span>The track uses <code>role="progressbar"</code> with <code>aria-valuenow</code>, <code>aria-valuemin</code>, and <code>aria-valuemax</code>.</span></div>
          <div className="doc-a11y__item"><span className="doc-a11y__icon"><A11yIcon /></span><span>If no label is provided, the <code>aria-label</code> defaults to "<em>N</em>% complete" to ensure screen readers have context.</span></div>
        </div>
      </section>
    </div>
  );
}
