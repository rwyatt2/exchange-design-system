import React from 'react';
import { Button, DosDonts } from '../../components';
import { ArrowIcon, BulletIcon, DoIcon, DontIcon, KeyboardIcon, LabelIcon, LayoutIcon, MuteIcon, SparkIcon, StateIcon, ZapIcon } from '../docIcons';

export default function ButtonPage() {
  return (
    <div className="doc-page">
      <div className="doc-page__header">
        <h1 className="doc-page__title">Button</h1>
        <p className="doc-page__subtitle">
          Buttons trigger actions and events. Available in multiple variants and sizes to communicate
          importance hierarchy.
        </p>
      </div>

      <section className="doc-section">
        <h2 className="doc-section__title">Variants</h2>
        <div className="doc-preview">
          <div className="doc-preview__row">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="danger">Danger</Button>
            <Button variant="text">Text Link</Button>
          </div>
        </div>
        <pre className="doc-code"><code>{`<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="danger">Danger</Button>
<Button variant="text">Text Link</Button>`}</code></pre>
      </section>

      <section className="doc-section">
        <h2 className="doc-section__title">Sizes</h2>
        <div className="doc-preview">
          <div className="doc-preview__row" style={{ alignItems: 'flex-end' }}>
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
          </div>
        </div>
      </section>

      <section className="doc-section">
        <h2 className="doc-section__title">States</h2>
        <div className="doc-preview">
          <div className="doc-preview__row">
            <Button>Default</Button>
            <Button disabled>Disabled</Button>
            <Button fullWidth>Full Width</Button>
          </div>
        </div>
      </section>

      <section className="doc-section">
        <h2 className="doc-section__title">Props</h2>
        <table className="doc-props-table">
          <thead><tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
          <tbody>
            <tr><td><code>variant</code></td><td>string</td><td>'primary'</td><td>Visual style: primary, secondary, ghost, danger, text</td></tr>
            <tr><td><code>size</code></td><td>string</td><td>'md'</td><td>Size: sm, md, lg</td></tr>
            <tr><td><code>disabled</code></td><td>boolean</td><td>false</td><td>Disabled state</td></tr>
            <tr><td><code>fullWidth</code></td><td>boolean</td><td>false</td><td>Spans full container width</td></tr>
            <tr><td><code>icon</code></td><td>node</td><td>: </td><td>Leading icon element</td></tr>
            <tr><td><code>iconRight</code></td><td>node</td><td>: </td><td>Trailing icon element</td></tr>
            <tr><td><code>type</code></td><td>string</td><td>'button'</td><td>HTML button type: button, submit, reset</td></tr>
            <tr><td><code>onClick</code></td><td>function</td><td>: </td><td>Click handler</td></tr>
          </tbody>
        </table>
      </section>

      {/* ── Usage Guidelines ── */}
      <section className="doc-section">
        <h2 className="doc-section__title">Usage Guidelines</h2>
        <div className="doc-guidelines">
          <div className="doc-guideline">
            <span className="doc-guideline__icon"><BulletIcon /></span>
            Use <strong>primary</strong> for the single most important action per view (e.g., "Share", "Submit", "Save").
          </div>
          <div className="doc-guideline">
            <span className="doc-guideline__icon"><BulletIcon /></span>
            Use <strong>secondary</strong> for supporting actions that complement the primary (e.g., "Cancel", "Export").
          </div>
          <div className="doc-guideline">
            <span className="doc-guideline__icon"><BulletIcon /></span>
            Use <strong>ghost</strong> for low-emphasis actions in toolbars or as cancel buttons in modals.
          </div>
          <div className="doc-guideline">
            <span className="doc-guideline__icon"><BulletIcon /></span>
            Use <strong>danger</strong> only for destructive actions (e.g., "Delete", "Deactivate", "Remove").
          </div>
          <div className="doc-guideline">
            <span className="doc-guideline__icon"><BulletIcon /></span>
            Use <strong>text</strong> for inline link-style actions within body content or compact areas.
          </div>
        </div>
      </section>

      {/* ── Do's and Don'ts ── */}
      <section className="doc-section">
        <h2 className="doc-section__title">Do's and Don'ts</h2>
        <DosDonts items={[
          {
            do: 'Use one primary button per section to establish a clear visual hierarchy.',
            dont: 'Stack multiple primary buttons together: it dilutes importance.',
          },
          {
            do: 'Use verb-led labels that describe the action: "Save Changes", "Upload File".',
            dont: 'Use vague labels like "OK", "Click Here", or "Yes".',
          },
          {
            do: 'Use the danger variant for irreversible or destructive actions.',
            dont: "Use danger styling for non-destructive actions just because they are important.",
          },
        ]} />
      </section>

      {/* ── Accessibility ── */}
      <section className="doc-section">
        <h2 className="doc-section__title">Accessibility</h2>
        <div className="doc-a11y">
          <div className="doc-a11y__item">
            <span className="doc-a11y__icon"><KeyboardIcon /></span>
            Buttons are focusable via <code>Tab</code> and activated with <code>Enter</code> or <code>Space</code>.
          </div>
          <div className="doc-a11y__item">
            <span className="doc-a11y__icon"><MuteIcon /></span>
            Disabled buttons remain in the DOM but are not focusable. Use <code>aria-disabled</code> with an explanation if you need the button to stay in tab order.
          </div>
          <div className="doc-a11y__item">
            <span className="doc-a11y__icon"><LabelIcon /></span>
            Icon-only buttons must include an <code>aria-label</code> to describe the action for screen readers.
          </div>
        </div>
      </section>

      {/* ── Behavior ── */}
      <section className="doc-section">
        <h2 className="doc-section__title">Behavior</h2>
        <div className="doc-behavior">
          <div className="doc-behavior__item">
            <span className="doc-behavior__icon"><StateIcon /></span>
            The default <code>type</code> is <code>"button"</code> to prevent accidental form submissions. Set <code>type="submit"</code> explicitly for form submit buttons.
          </div>
          <div className="doc-behavior__item">
            <span className="doc-behavior__icon"><LayoutIcon /></span>
            <code>fullWidth</code> stretches the button to <code>width: 100%</code> of its container: useful for modal footers and mobile layouts.
          </div>
          <div className="doc-behavior__item">
            <span className="doc-behavior__icon"><SparkIcon /></span>
            All variants include a subtle transition on hover and active states. The primary variant shifts background opacity, while ghost reveals a background fill.
          </div>
        </div>
      </section>
    </div>
  );
}
