import React, { useState } from 'react';
import { Checkbox, DosDonts } from '../../components';
import { A11yIcon, ArrowIcon, BulletIcon, DoIcon, DontIcon, KeyboardIcon, LabelIcon, LockIcon, SparkIcon, StateIcon, ZapIcon } from '../docIcons';

export default function CheckboxPage() {
  const [checked, setChecked] = useState({ a: true, b: false, c: false });
  return (
    <div className="doc-page">
      <div className="doc-page__header">
        <h1 className="doc-page__title">Checkbox</h1>
        <p className="doc-page__subtitle">
          Checkboxes for multi-select options, used in the search filter sidebar for Status, LOB, and Privacy Data filters.
        </p>
      </div>
      <section className="doc-section">
        <h2 className="doc-section__title">Default</h2>
        <div className="doc-preview" style={{ display: 'grid', gap: '12px' }}>
          <Checkbox label="Active" checked={checked.a} onChange={(v) => setChecked({...checked, a: v})} />
          <Checkbox label="Disabled" checked={checked.b} onChange={(v) => setChecked({...checked, b: v})} />
          <Checkbox label="Card" checked={checked.c} onChange={(v) => setChecked({...checked, c: v})} />
          <Checkbox label="Cannot change" checked disabled />
        </div>
        <pre className="doc-code"><code>{`<Checkbox label="Active" checked={checked} onChange={setChecked} />
<Checkbox label="Disabled" disabled />`}</code></pre>
      </section>
      <section className="doc-section">
        <h2 className="doc-section__title">Filter Sidebar Pattern</h2>
        <div className="doc-preview" style={{ maxWidth: '200px' }}>
          <p style={{ fontWeight: 600, fontSize: 'var(--exds-text-base)', marginBottom: '12px' }}>Status</p>
          <div style={{ display: 'grid', gap: '10px' }}>
            <Checkbox label="Active" checked onChange={() => {}} />
            <Checkbox label="Disabled" />
          </div>
          <p style={{ fontWeight: 600, fontSize: 'var(--exds-text-base)', margin: '20px 0 12px' }}>LOB</p>
          <div style={{ display: 'grid', gap: '10px' }}>
            <Checkbox label="Card" />
            <Checkbox label="Commercial Bank" />
            <Checkbox label="Enterprise Services" />
            <Checkbox label="Financial Services" />
          </div>
        </div>
      </section>
      <section className="doc-section">
        <h2 className="doc-section__title">Props</h2>
        <table className="doc-props-table">
          <thead><tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
          <tbody>
            <tr><td><code>label</code></td><td>string</td><td>: </td><td>Checkbox label</td></tr>
            <tr><td><code>checked</code></td><td>boolean</td><td>false</td><td>Checked state</td></tr>
            <tr><td><code>onChange</code></td><td>function</td><td>: </td><td>Change handler (receives boolean)</td></tr>
            <tr><td><code>disabled</code></td><td>boolean</td><td>false</td><td>Disabled state</td></tr>
          </tbody>
        </table>
      </section>

      {/* ── Usage Guidelines ── */}
      <section className="doc-section">
        <h2 className="doc-section__title">Usage Guidelines</h2>
        <div className="doc-guidelines">
          <div className="doc-guideline">
            <span className="doc-guideline__icon"><BulletIcon /></span>
            Use Checkbox for <strong>multi-select</strong> scenarios where the user can choose zero, one, or many options. For mutually exclusive choices, use RadioGroup instead.
          </div>
          <div className="doc-guideline">
            <span className="doc-guideline__icon"><BulletIcon /></span>
            Group checkboxes under a visible heading (e.g., "Status", "LOB") to provide context for what the options represent.
          </div>
          <div className="doc-guideline">
            <span className="doc-guideline__icon"><BulletIcon /></span>
            Use the disabled + checked state to indicate a value that has been set by the system and cannot be changed by the user.
          </div>
        </div>
      </section>

      {/* ── Do's and Don'ts ── */}
      <section className="doc-section">
        <h2 className="doc-section__title">Do's and Don'ts</h2>
        <DosDonts items={[
          {
            do: 'Use positive, descriptive labels: "Active", "Include archived items", "Show NPI data".',
            dont: 'Use negative labels like "Don\'t show inactive": double negatives are confusing.',
          },
          {
            do: 'Space checkboxes vertically with 10–12px gap for comfortable tap targets.',
            dont: 'Pack checkboxes too tightly without enough spacing: it leads to accidental taps.',
          },
          {
            do: 'Apply filter changes immediately or provide a clear "Apply" action depending on performance cost.',
            dont: 'Apply expensive filter operations on every checkbox toggle without debouncing or batching.',
          },
        ]} />
      </section>

      {/* ── Accessibility ── */}
      <section className="doc-section">
        <h2 className="doc-section__title">Accessibility</h2>
        <div className="doc-a11y">
          <div className="doc-a11y__item">
            <span className="doc-a11y__icon"><KeyboardIcon /></span>
            Checkboxes are focusable via <code>Tab</code> and toggled with <code>Space</code>. The entire label area is clickable.
          </div>
          <div className="doc-a11y__item">
            <span className="doc-a11y__icon"><LabelIcon /></span>
            Each checkbox has a unique auto-generated <code>id</code> linked to its <code>&lt;label&gt;</code> via <code>htmlFor</code>.
          </div>
          <div className="doc-a11y__item">
            <span className="doc-a11y__icon"><A11yIcon /></span>
            The custom checkbox visual uses a CSS-hidden native <code>&lt;input type="checkbox"&gt;</code>, preserving browser accessibility features.
          </div>
        </div>
      </section>

      {/* ── Behavior ── */}
      <section className="doc-section">
        <h2 className="doc-section__title">Behavior</h2>
        <div className="doc-behavior">
          <div className="doc-behavior__item">
            <span className="doc-behavior__icon"><StateIcon /></span>
            The <code>onChange</code> handler receives a <strong>boolean</strong> (the new checked state), not the event object.
          </div>
          <div className="doc-behavior__item">
            <span className="doc-behavior__icon"><SparkIcon /></span>
            The checkmark SVG uses a smooth CSS transition for the check animation, providing visual confirmation of the state change.
          </div>
          <div className="doc-behavior__item">
            <span className="doc-behavior__icon"><LockIcon /></span>
            Disabled checkboxes prevent interaction and show reduced opacity. The <code>onChange</code> callback is not fired when disabled.
          </div>
        </div>
      </section>
    </div>
  );
}
