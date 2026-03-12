import React, { useState } from 'react';
import { Select, DosDonts } from '../../components';
import { ArrowIcon, BulletIcon, DoIcon, DontIcon, ErrorIcon, KeyboardIcon, LabelIcon, MobileIcon, StateIcon, ZapIcon } from '../docIcons';

export default function SelectPage() {
  const [val, setVal] = useState('relevance');
  return (
    <div className="doc-page">
      <div className="doc-page__header">
        <h1 className="doc-page__title">Select</h1>
        <p className="doc-page__subtitle">
          Drop-down select for choosing from a list of options, used for sort controls and form fields.
        </p>
      </div>
      <section className="doc-section">
        <h2 className="doc-section__title">Default</h2>
        <div className="doc-preview" style={{ maxWidth: '300px' }}>
          <Select
            label="Sort By"
            value={val}
            onChange={setVal}
            options={[
              { value: 'relevance', label: 'Relevance' },
              { value: 'name', label: 'Name' },
              { value: 'date', label: 'Date Updated' },
            ]}
          />
        </div>
        <pre className="doc-code"><code>{`<Select
  label="Sort By"
  value={value}
  onChange={setValue}
  options={[
    { value: 'relevance', label: 'Relevance' },
    { value: 'name', label: 'Name' },
  ]}
/>`}</code></pre>
      </section>
      <section className="doc-section">
        <h2 className="doc-section__title">Props</h2>
        <table className="doc-props-table">
          <thead><tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
          <tbody>
            <tr><td><code>label</code></td><td>string</td><td>: </td><td>Label above select</td></tr>
            <tr><td><code>options</code></td><td>array</td><td>: </td><td>Array of {'{ value, label }'}</td></tr>
            <tr><td><code>value</code></td><td>string</td><td>: </td><td>Selected value</td></tr>
            <tr><td><code>onChange</code></td><td>function</td><td>: </td><td>Change handler (receives value string)</td></tr>
            <tr><td><code>placeholder</code></td><td>string</td><td>: </td><td>Placeholder option (disabled, shown when no value)</td></tr>
            <tr><td><code>disabled</code></td><td>boolean</td><td>false</td><td>Disabled state</td></tr>
            <tr><td><code>error</code></td><td>string</td><td>: </td><td>Error state styling</td></tr>
          </tbody>
        </table>
      </section>

      {/* ── Usage Guidelines ── */}
      <section className="doc-section">
        <h2 className="doc-section__title">Usage Guidelines</h2>
        <div className="doc-guidelines">
          <div className="doc-guideline">
            <span className="doc-guideline__icon"><BulletIcon /></span>
            Use Select for <strong>5–15 options</strong>. For 2–4 options, consider RadioGroup instead. For 15+ options, consider a searchable autocomplete.
          </div>
          <div className="doc-guideline">
            <span className="doc-guideline__icon"><BulletIcon /></span>
            Use <code>placeholder</code> to show a prompt like "Select an option…" when no value has been chosen yet.
          </div>
          <div className="doc-guideline">
            <span className="doc-guideline__icon"><BulletIcon /></span>
            Always provide a <code>label</code> for form contexts. Labels can be omitted only for inline sort controls where surrounding context is clear.
          </div>
        </div>
      </section>

      {/* ── Do's and Don'ts ── */}
      <section className="doc-section">
        <h2 className="doc-section__title">Do's and Don'ts</h2>
        <DosDonts items={[
          {
            do: 'Use clear, concise option labels. Order options logically (alphabetical, frequency, or natural order).',
            dont: 'Use truncated or cryptic labels. If the text is too long for the select width, widen the container instead.',
          },
          {
            do: 'Pre-select a sensible default when one exists (e.g., "Relevance" for sort order).',
            dont: 'Force users to select from a list when a default already covers the most common case.',
          },
        ]} />
      </section>

      {/* ── Accessibility ── */}
      <section className="doc-section">
        <h2 className="doc-section__title">Accessibility</h2>
        <div className="doc-a11y">
          <div className="doc-a11y__item">
            <span className="doc-a11y__icon"><KeyboardIcon /></span>
            Uses the native <code>&lt;select&gt;</code> element, which is fully keyboard-accessible out of the box: arrow keys navigate options, <code>Enter</code> selects.
          </div>
          <div className="doc-a11y__item">
            <span className="doc-a11y__icon"><LabelIcon /></span>
            The <code>label</code> renders as a visible <code>&lt;label&gt;</code> element. Clicking it focuses the select.
          </div>
          <div className="doc-a11y__item">
            <span className="doc-a11y__icon"><MobileIcon /></span>
            On mobile devices, native <code>&lt;select&gt;</code> triggers the OS picker UI, which is more usable than custom dropdowns.
          </div>
        </div>
      </section>

      {/* ── Behavior ── */}
      <section className="doc-section">
        <h2 className="doc-section__title">Behavior</h2>
        <div className="doc-behavior">
          <div className="doc-behavior__item">
            <span className="doc-behavior__icon"><StateIcon /></span>
            Select is a <strong>controlled component</strong>: always pass <code>value</code> and <code>onChange</code>. The <code>onChange</code> handler receives the raw value string.
          </div>
          <div className="doc-behavior__item">
            <span className="doc-behavior__icon">🎯</span>
            A custom chevron SVG overlays the native dropdown arrow for consistent styling. It rotates to indicate open/closed state (browser-dependent).
          </div>
          <div className="doc-behavior__item">
            <span className="doc-behavior__icon"><ErrorIcon /></span>
            Setting <code>error</code> applies a red border treatment matching TextInput's error state for visual consistency across forms.
          </div>
        </div>
      </section>
    </div>
  );
}
