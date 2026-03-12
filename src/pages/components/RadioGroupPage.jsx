import React, { useState } from 'react';
import { RadioGroup, DosDonts } from '../../components';
import { ArrowIcon, BulletIcon, DoIcon, DontIcon, KeyboardIcon, LabelIcon, LayoutIcon, LinkIcon, SparkIcon, StateIcon, ZapIcon } from '../docIcons';

export default function RadioGroupPage() {
  const [val, setVal] = useState('yes');
  return (
    <div className="doc-page">
      <div className="doc-page__header">
        <h1 className="doc-page__title">RadioGroup</h1>
        <p className="doc-page__subtitle">
          Radio buttons for single-select choices, used in ownership confirmation ("Yes / Need help")
          and data input forms.
        </p>
      </div>
      <section className="doc-section">
        <h2 className="doc-section__title">Default (Vertical)</h2>
        <div className="doc-preview" style={{ maxWidth: '300px' }}>
          <RadioGroup
            label="Confirm Asset"
            name="confirm"
            value={val}
            onChange={setVal}
            options={[
              { value: 'yes', label: 'Yes' },
              { value: 'help', label: 'Need help' },
            ]}
          />
        </div>
        <pre className="doc-code"><code>{`<RadioGroup
  label="Confirm Asset"
  name="confirm"
  value={value}
  onChange={setValue}
  options={[
    { value: 'yes', label: 'Yes' },
    { value: 'help', label: 'Need help' },
  ]}
/>`}</code></pre>
      </section>
      <section className="doc-section">
        <h2 className="doc-section__title">Horizontal</h2>
        <div className="doc-preview">
          <RadioGroup
            label="Direction"
            name="dir"
            direction="horizontal"
            value="inbound"
            onChange={() => {}}
            options={[
              { value: 'inbound', label: 'Inbound' },
              { value: 'outbound', label: 'Outbound' },
              { value: 'both', label: 'Both' },
            ]}
          />
        </div>
      </section>
      <section className="doc-section">
        <h2 className="doc-section__title">Props</h2>
        <table className="doc-props-table">
          <thead><tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
          <tbody>
            <tr><td><code>label</code></td><td>string</td><td>: </td><td>Fieldset legend</td></tr>
            <tr><td><code>name</code></td><td>string</td><td>: </td><td>Radio group name (must be unique per form)</td></tr>
            <tr><td><code>options</code></td><td>array</td><td>: </td><td>Array of {'{ value, label }'}</td></tr>
            <tr><td><code>value</code></td><td>string</td><td>: </td><td>Selected value</td></tr>
            <tr><td><code>onChange</code></td><td>function</td><td>: </td><td>Change handler (receives value string)</td></tr>
            <tr><td><code>direction</code></td><td>string</td><td>'vertical'</td><td>'vertical' or 'horizontal'</td></tr>
          </tbody>
        </table>
      </section>

      {/* ── Usage Guidelines ── */}
      <section className="doc-section">
        <h2 className="doc-section__title">Usage Guidelines</h2>
        <div className="doc-guidelines">
          <div className="doc-guideline">
            <span className="doc-guideline__icon"><BulletIcon /></span>
            Use RadioGroup for <strong>mutually exclusive</strong> selections: only one option can be active at a time. For multi-select, use Checkbox.
          </div>
          <div className="doc-guideline">
            <span className="doc-guideline__icon"><BulletIcon /></span>
            Use RadioGroup for <strong>2–5 options</strong>. For more than 5, consider a Select dropdown to save space.
          </div>
          <div className="doc-guideline">
            <span className="doc-guideline__icon"><BulletIcon /></span>
            Use <strong>horizontal</strong> direction for short labels (2–3 options) and <strong>vertical</strong> for longer labels or 4+ options.
          </div>
          <div className="doc-guideline">
            <span className="doc-guideline__icon"><BulletIcon /></span>
            Always pre-select a default value when one makes sense. Unlike checkboxes, radio buttons should not all start unselected.
          </div>
        </div>
      </section>

      {/* ── Do's and Don'ts ── */}
      <section className="doc-section">
        <h2 className="doc-section__title">Do's and Don'ts</h2>
        <DosDonts items={[
          {
            do: 'Provide a sensible default selection when the form loads.',
            dont: 'Leave all radio buttons unselected: once a user selects one, they can\'t deselect without a reset.',
          },
          {
            do: 'Use a visible legend (label) to describe what the group of options represents.',
            dont: 'Omit the label and rely on surrounding context: screen readers need the fieldset legend.',
          },
          {
            do: 'Use consistent option length within a group. Keep labels to 1–3 words for horizontal layout.',
            dont: 'Mix long and short labels in a horizontal group: it creates an uneven, messy layout.',
          },
        ]} />
      </section>

      {/* ── Accessibility ── */}
      <section className="doc-section">
        <h2 className="doc-section__title">Accessibility</h2>
        <div className="doc-a11y">
          <div className="doc-a11y__item">
            <span className="doc-a11y__icon"><LabelIcon /></span>
            Uses a <code>&lt;fieldset&gt;</code> with <code>&lt;legend&gt;</code>, which groups the options semantically for screen readers.
          </div>
          <div className="doc-a11y__item">
            <span className="doc-a11y__icon"><KeyboardIcon /></span>
            Arrow keys navigate between options. <code>Tab</code> moves focus in/out of the group. <code>Space</code> selects the focused option.
          </div>
          <div className="doc-a11y__item">
            <span className="doc-a11y__icon"><LinkIcon /></span>
            The <code>name</code> attribute groups radio buttons natively, ensuring only one can be selected at a time without JavaScript.
          </div>
        </div>
      </section>

      {/* ── Behavior ── */}
      <section className="doc-section">
        <h2 className="doc-section__title">Behavior</h2>
        <div className="doc-behavior">
          <div className="doc-behavior__item">
            <span className="doc-behavior__icon"><StateIcon /></span>
            The <code>onChange</code> handler receives the <strong>value string</strong> of the selected option, not the event object.
          </div>
          <div className="doc-behavior__item">
            <span className="doc-behavior__icon"><LayoutIcon /></span>
            In <code>horizontal</code> mode, options are laid out in a flex row with wrapping. In <code>vertical</code> mode, they stack.
          </div>
          <div className="doc-behavior__item">
            <span className="doc-behavior__icon"><SparkIcon /></span>
            The custom radio circle uses a CSS transition for the inner fill dot, providing smooth visual feedback on selection.
          </div>
        </div>
      </section>
    </div>
  );
}
