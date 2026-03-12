import React from 'react';
import { TextInput, DosDonts } from '../../components';
import { ArrowIcon, BulletIcon, DoIcon, DontIcon, ErrorIcon, KeyboardIcon, LabelIcon, PackageIcon, StateIcon, ZapIcon } from '../docIcons';

export default function TextInputPage() {
  return (
    <div className="doc-page">
      <div className="doc-page__header">
        <h1 className="doc-page__title">TextInput</h1>
        <p className="doc-page__subtitle">
          Text inputs for forms and data entry, with labels, helper text, and validation states.
        </p>
      </div>
      <section className="doc-section">
        <h2 className="doc-section__title">Variants</h2>
        <div className="doc-preview" style={{ display: 'grid', gap: '16px', maxWidth: '400px' }}>
          <TextInput label="Business Lead" placeholder="Enter name" helperText="Required field" />
          <TextInput label="Dataset ID" defaultValue="432333" readOnly />
          <TextInput label="Route Name" defaultValue="FIS.S3.AM" error="This field is required" />
          <TextInput label="Notes" placeholder="Disabled field" disabled />
        </div>
        <pre className="doc-code"><code>{`<TextInput label="Business Lead" placeholder="Enter name" helperText="Required field" />
<TextInput label="Dataset ID" defaultValue="432333" readOnly />
<TextInput label="Route Name" error="This field is required" />`}</code></pre>
      </section>
      <section className="doc-section">
        <h2 className="doc-section__title">Props</h2>
        <table className="doc-props-table">
          <thead><tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
          <tbody>
            <tr><td><code>label</code></td><td>string</td><td>: </td><td>Input label</td></tr>
            <tr><td><code>helperText</code></td><td>string</td><td>: </td><td>Helper text below input</td></tr>
            <tr><td><code>error</code></td><td>string</td><td>: </td><td>Error message (overrides helperText)</td></tr>
            <tr><td><code>size</code></td><td>string</td><td>'md'</td><td>sm, md, lg</td></tr>
            <tr><td><code>disabled</code></td><td>boolean</td><td>false</td><td>Disabled state</td></tr>
            <tr><td><code>readOnly</code></td><td>boolean</td><td>false</td><td>Read-only state</td></tr>
          </tbody>
        </table>
      </section>

      {/* ── Usage Guidelines ── */}
      <section className="doc-section">
        <h2 className="doc-section__title">Usage Guidelines</h2>
        <div className="doc-guidelines">
          <div className="doc-guideline">
            <span className="doc-guideline__icon"><BulletIcon /></span>
            Always provide a visible <code>label</code>: it is the primary way users and screen readers identify the field.
          </div>
          <div className="doc-guideline">
            <span className="doc-guideline__icon"><BulletIcon /></span>
            Use <code>helperText</code> for supplemental instructions ("Required field", "Max 50 characters") rather than putting instructions in the placeholder.
          </div>
          <div className="doc-guideline">
            <span className="doc-guideline__icon"><BulletIcon /></span>
            Use <code>readOnly</code> for values the user can see but not change (e.g., auto-generated IDs). Use <code>disabled</code> when the field is temporarily unavailable.
          </div>
          <div className="doc-guideline">
            <span className="doc-guideline__icon"><BulletIcon /></span>
            Validate on blur or submit: avoid real-time validation on every keystroke as it can be disorienting.
          </div>
        </div>
      </section>

      {/* ── Do's and Don'ts ── */}
      <section className="doc-section">
        <h2 className="doc-section__title">Do's and Don'ts</h2>
        <DosDonts items={[
          {
            do: 'Use placeholder text as an example of expected format (e.g., "jane.doe@company.com").',
            dont: 'Use placeholder as a replacement for the label: it disappears once the user starts typing.',
          },
          {
            do: 'Show the error message below the field with a red border for clear visual feedback.',
            dont: "Show validation as a generic toast/alert far from the field: users cannot find which input is wrong.",
          },
          {
            do: 'Set appropriate width for the field to match expected content length (e.g., narrow for ZIP codes).',
            dont: 'Use a full-width input for short values like dates or IDs: it wastes space and looks odd.',
          },
        ]} />
      </section>

      {/* ── Accessibility ── */}
      <section className="doc-section">
        <h2 className="doc-section__title">Accessibility</h2>
        <div className="doc-a11y">
          <div className="doc-a11y__item">
            <span className="doc-a11y__icon"><LabelIcon /></span>
            The <code>label</code> is linked to the input via a generated <code>htmlFor</code>/<code>id</code> pair. Clicking the label focuses the input.
          </div>
          <div className="doc-a11y__item">
            <span className="doc-a11y__icon"><ErrorIcon /></span>
            When <code>error</code> is set, the helper text turns red and the input border changes, providing both color and text cues.
          </div>
          <div className="doc-a11y__item">
            <span className="doc-a11y__icon"><KeyboardIcon /></span>
            Tab navigates between inputs. Disabled and read-only inputs behave per native HTML: disabled is skipped, read-only is focusable.
          </div>
        </div>
      </section>

      {/* ── Behavior ── */}
      <section className="doc-section">
        <h2 className="doc-section__title">Behavior</h2>
        <div className="doc-behavior">
          <div className="doc-behavior__item">
            <span className="doc-behavior__icon"><StateIcon /></span>
            TextInput supports both <strong>controlled</strong> (<code>value</code> + <code>onChange</code>) and <strong>uncontrolled</strong> (<code>defaultValue</code>) modes.
          </div>
          <div className="doc-behavior__item">
            <span className="doc-behavior__icon"><ErrorIcon /></span>
            When <code>error</code> is provided, it replaces <code>helperText</code> content and applies the error visual treatment (red border + red text).
          </div>
          <div className="doc-behavior__item">
            <span className="doc-behavior__icon"><PackageIcon /></span>
            Additional HTML attributes (e.g., <code>maxLength</code>, <code>pattern</code>, <code>autoFocus</code>) are spread onto the native <code>&lt;input&gt;</code> element.
          </div>
        </div>
      </section>
    </div>
  );
}
