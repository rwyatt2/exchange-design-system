import React from 'react';
import { Spinner } from '../../components';
import DosDonts from '../../components/DosDonts/DosDonts';
import { A11yIcon } from '../docIcons';

export default function SpinnerPage() {
  return (
    <div className="doc-page">
      <div className="doc-page__header">
        <h1 className="doc-page__title">Spinner</h1>
        <p className="doc-page__subtitle">
          Spinners communicate that a process is happening in the background and that the user should wait.
        </p>
      </div>

      <section className="doc-section">
        <h2 className="doc-section__title">Usage</h2>
        <p style={{ color: 'var(--exds-color-text-secondary)', marginBottom: '16px', lineHeight: 1.6 }}>
          Use Spinners for inline loading states or within buttons where the progress is indeterminate
          and not expected to take more than a few seconds. For longer, determinate progress, consider
          using a Progress Bar.
        </p>
        <div className="doc-preview" style={{ display: 'flex', gap: '2rem', alignItems: 'center', justifyContent: 'center', padding: '32px' }}>
          <Spinner size="lg" color="brand" aria-label="Loading content" />
        </div>
      </section>

      <section className="doc-section">
        <h2 className="doc-section__title">Sizes</h2>
        <p style={{ color: 'var(--exds-color-text-secondary)', marginBottom: '16px' }}>
          Spinners come in three sizes: small (<code>sm</code>), medium (<code>md</code>), and large (<code>lg</code>).
        </p>
        <div className="doc-preview" style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          <div style={{ textAlign: 'center' }}>
            <Spinner size="sm" />
            <div style={{ marginTop: '0.5rem', fontSize: 'var(--exds-text-xs)', color: 'var(--exds-color-text-tertiary)' }}>Small</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <Spinner size="md" />
            <div style={{ marginTop: '0.5rem', fontSize: 'var(--exds-text-xs)', color: 'var(--exds-color-text-tertiary)' }}>Medium</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <Spinner size="lg" />
            <div style={{ marginTop: '0.5rem', fontSize: 'var(--exds-text-xs)', color: 'var(--exds-color-text-tertiary)' }}>Large</div>
          </div>
        </div>
      </section>

      <section className="doc-section">
        <h2 className="doc-section__title">Colors</h2>
        <p style={{ color: 'var(--exds-color-text-secondary)', marginBottom: '16px' }}>
          Spinners can use semantic colors depending on their context.
        </p>
        <div className="doc-preview" style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem' }}>
          {[
            { color: 'brand',   label: 'Brand (Default)' },
            { color: 'success', label: 'Success' },
            { color: 'error',   label: 'Error' },
            { color: 'warning', label: 'Warning' },
            { color: 'neutral', label: 'Neutral' },
          ].map(({ color, label }) => (
            <div key={color} style={{ textAlign: 'center' }}>
              <Spinner color={color} />
              <div style={{ marginTop: '0.5rem', fontSize: 'var(--exds-text-xs)', color: 'var(--exds-color-text-tertiary)' }}>{label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="doc-section">
        <h2 className="doc-section__title">Guidelines</h2>
        <DosDonts
          items={[
            {
              do: 'Use a Spinner to indicate a fast, indeterminate background process.',
              dont: "Don't use a Spinner for loading a full page — use skeleton screens instead.",
            },
            {
              do: 'Provide accessible labels via <code>aria-label</code> so screen readers can announce it.',
              dont: "Don't use multiple Spinners on the same screen if they represent the same data-fetching process.",
            },
            {
              do: 'Center the Spinner within its container if loading content for a specific area.',
              dont: "Don't use a Spinner for processes lasting more than a few seconds without providing additional feedback.",
            },
            {
              do: 'Match the size of the Spinner to the surrounding text or components.',
              dont: "Don't show a Spinner without eventually showing content or an error state.",
            },
          ]}
        />
      </section>

      <section className="doc-section">
        <h2 className="doc-section__title">Accessibility</h2>
        <div className="doc-a11y">
          <div className="doc-a11y__item">
            <span className="doc-a11y__icon"><A11yIcon /></span>
            <span><strong>Role:</strong> The component uses <code>role="status"</code> to inform assistive technologies of status updates.</span>
          </div>
          <div className="doc-a11y__item">
            <span className="doc-a11y__icon"><A11yIcon /></span>
            <span><strong>Label:</strong> Ensure it has a meaningful <code>aria-label</code> (e.g., "Loading data"). If omitted, it defaults to "Loading".</span>
          </div>
          <div className="doc-a11y__item">
            <span className="doc-a11y__icon"><A11yIcon /></span>
            <span><strong>Motion:</strong> The animation may be distracting. If users turn off motion in their OS preferences, consider reducing the animation speed or halting it completely using a <code>@media (prefers-reduced-motion: reduce)</code> query.</span>
          </div>
        </div>
      </section>
    </div>
  );
}
