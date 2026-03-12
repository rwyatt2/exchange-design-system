import React, { useState } from 'react';
import Toggle from '../../components/Toggle/Toggle';
import { A11yIcon, ArrowIcon, BulletIcon, DoIcon, DontIcon, ZapIcon } from '../docIcons';

export default function TogglePage() {
  const [values, setValues] = useState({
    notifications: true,
    darkMode: false,
    autoSave: true,
    diagnostics: false,
  });

  const set = (key) => (v) => setValues((prev) => ({ ...prev, [key]: v }));

  return (
    <div className="doc-page">
      <div className="doc-page__header">
        <h1 className="doc-page__title">Toggle</h1>
        <p className="doc-page__subtitle">
          A toggle switch represents an immediate on/off state change: distinct
          from a Checkbox, which is a form selection. Use Toggle for settings,
          feature flags, and preference controls that take effect instantly.
        </p>
      </div>

      {/* Live examples */}
      <section className="doc-section">
        <h2 className="doc-section__title">Settings Panel Example</h2>
        <div className="doc-preview" style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '360px' }}>
          {[
            { key: 'notifications', label: 'Email notifications' },
            { key: 'darkMode',      label: 'Dark mode' },
            { key: 'autoSave',      label: 'Auto-save' },
            { key: 'diagnostics',   label: 'Share diagnostics' },
          ].map(({ key, label }) => (
            <div key={key} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: 'var(--exds-text-sm)', color: 'var(--exds-color-text-primary)' }}>{label}</span>
              <Toggle id={key} checked={values[key]} onChange={set(key)} />
            </div>
          ))}
        </div>
      </section>

      {/* Sizes */}
      <section className="doc-section">
        <h2 className="doc-section__title">Sizes</h2>
        <div className="doc-preview" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <Toggle id="toggle-sm" label="Small" size="sm" checked />
          <Toggle id="toggle-md" label="Medium (default)" size="md" checked />
          <Toggle id="toggle-lg" label="Large" size="lg" checked />
        </div>
      </section>

      {/* Disabled */}
      <section className="doc-section">
        <h2 className="doc-section__title">Disabled State</h2>
        <div className="doc-preview" style={{ display: 'flex', gap: '24px' }}>
          <Toggle id="toggle-dis-off" label="Disabled off" disabled />
          <Toggle id="toggle-dis-on"  label="Disabled on" disabled checked />
        </div>
      </section>

      {/* Usage */}
      <section className="doc-section">
        <h2 className="doc-section__title">Usage</h2>
        <pre><code>{`<Toggle
  id="notifications"
  label="Email notifications"
  checked={enabled}
  onChange={(val) => setEnabled(val)}
  size="md"
/>`}</code></pre>
      </section>

      {/* Props */}
      <section className="doc-section">
        <h2 className="doc-section__title">Props</h2>
        <table className="doc-props-table">
          <thead><tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
          <tbody>
            <tr><td><code>checked</code></td><td>boolean</td><td><code>false</code></td><td>Whether the toggle is on</td></tr>
            <tr><td><code>onChange</code></td><td>function</td><td>: </td><td>Called with <code>true/false</code> on change</td></tr>
            <tr><td><code>disabled</code></td><td>boolean</td><td><code>false</code></td><td>Prevents interaction</td></tr>
            <tr><td><code>label</code></td><td>string</td><td>: </td><td>Visible text label beside the track</td></tr>
            <tr><td><code>id</code></td><td>string</td><td>: </td><td>HTML id for the input: required when using with an external label</td></tr>
            <tr><td><code>size</code></td><td><code>'sm' | 'md' | 'lg'</code></td><td><code>'md'</code></td><td>Track and thumb dimensions</td></tr>
          </tbody>
        </table>
      </section>

      {/* Do's and Don'ts */}
      <section className="doc-section">
        <h2 className="doc-section__title">Do's and Don'ts</h2>
        <div className="doc-guidelines">
          <div className="doc-guideline"><span className="doc-guideline__icon"><DoIcon /></span><span><strong>Do</strong> use Toggle for settings that take effect immediately without a Save button.</span></div>
          <div className="doc-guideline"><span className="doc-guideline__icon"><DontIcon /></span><span><strong>Don't</strong> use Toggle inside forms that require submission: use Checkbox instead.</span></div>
          <div className="doc-guideline"><span className="doc-guideline__icon"><DoIcon /></span><span><strong>Do</strong> pair each Toggle with a clear label describing the setting being controlled.</span></div>
          <div className="doc-guideline"><span className="doc-guideline__icon"><DontIcon /></span><span><strong>Don't</strong> use Toggle for multi-select choices: use Checkbox groups for that.</span></div>
        </div>
      </section>

      {/* Accessibility */}
      <section className="doc-section">
        <h2 className="doc-section__title">Accessibility</h2>
        <div className="doc-a11y">
          <div className="doc-a11y__item"><span className="doc-a11y__icon"><A11yIcon /></span><span>The hidden native <code>&lt;input type="checkbox"&gt;</code> carries <code>role="switch"</code> and <code>aria-checked</code> for screen readers.</span></div>
          <div className="doc-a11y__item"><span className="doc-a11y__icon"><A11yIcon /></span><span>Focus ring is shown on <code>:focus-visible</code> only: not on mouse click: to avoid visual noise.</span></div>
          <div className="doc-a11y__item"><span className="doc-a11y__icon"><A11yIcon /></span><span>Always supply the <code>id</code> prop and an associated <code>label</code> to ensure the toggle has a programmatic name.</span></div>
        </div>
      </section>
    </div>
  );
}
