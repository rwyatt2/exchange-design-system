import React from 'react';
import { Spinner } from '../../components/Spinner/Spinner';
import Skeleton from '../../components/Skeleton/Skeleton';
import ProgressBar from '../../components/ProgressBar/ProgressBar';
import { DoIcon, DontIcon, BulletIcon, ArrowIcon, ZapIcon } from '../docIcons';

export default function LoadingStatesPatternPage() {
  return (
    <div className="doc-page">
      <div className="doc-page__header">
        <h1 className="doc-page__title">Loading States</h1>
        <p className="doc-page__subtitle">
          Loading states communicate that the system is working. Using the right
          loading pattern for the right context prevents confusion, reduces
          perceived wait time, and maintains layout stability.
        </p>
      </div>

      {/* Decision tree */}
      <section className="doc-section">
        <h2 className="doc-section__title">Which Loading Pattern to Use</h2>
        <table className="doc-props-table">
          <thead>
            <tr><th>Context</th><th>Pattern</th><th>Why</th></tr>
          </thead>
          <tbody>
            <tr><td>Duration unknown, content small</td><td>Spinner</td><td>Simple, low visual weight</td></tr>
            <tr><td>Duration unknown, page/section loading</td><td>Skeleton</td><td>Prevents layout shift, shows content shape</td></tr>
            <tr><td>Duration known (upload, progress)</td><td>ProgressBar</td><td>Shows exact progress, feels more in control</td></tr>
            <tr><td>Button action in-flight</td><td>Button with inline Spinner</td><td>Keeps the button where the action was</td></tr>
            <tr><td>Table row loading</td><td>Skeleton rows</td><td>Preserves table layout</td></tr>
          </tbody>
        </table>
      </section>

      {/* Spinner */}
      <section className="doc-section">
        <h2 className="doc-section__title">1: Spinner (Indeterminate)</h2>
        <p style={{ color: 'var(--exds-color-text-secondary)', marginBottom: '16px', fontSize: 'var(--exds-text-sm)' }}>
          Use for short, unknown-duration operations (API calls, secondary data fetches).
        </p>
        <div className="doc-preview" style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
          <div style={{ textAlign: 'center' }}>
            <Spinner size="sm" />
            <p style={{ fontSize: 'var(--exds-text-xs)', color: 'var(--exds-color-text-tertiary)', marginTop: '8px' }}>sm: inline/button</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <Spinner size="md" />
            <p style={{ fontSize: 'var(--exds-text-xs)', color: 'var(--exds-color-text-tertiary)', marginTop: '8px' }}>md: card/section</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <Spinner size="lg" />
            <p style={{ fontSize: 'var(--exds-text-xs)', color: 'var(--exds-color-text-tertiary)', marginTop: '8px' }}>lg: page center</p>
          </div>
        </div>
      </section>

      {/* Skeleton */}
      <section className="doc-section">
        <h2 className="doc-section__title">2: Skeleton (Shape Placeholder)</h2>
        <p style={{ color: 'var(--exds-color-text-secondary)', marginBottom: '16px', fontSize: 'var(--exds-text-sm)' }}>
          Use when you know the shape of the content. Eliminates layout shift and gives users a sense of what's loading.
        </p>
        <div className="doc-preview" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', maxWidth: '560px' }}>
          {[1,2].map((i) => (
            <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: '10px', background: 'var(--exds-color-surface)', border: '1px solid var(--exds-color-border-subtle)', borderRadius: 'var(--exds-radius-lg)', padding: '14px' }}>
              <Skeleton variant="rect" height="100px" />
              <Skeleton variant="text" lines={2} />
            </div>
          ))}
        </div>
      </section>

      {/* Progress */}
      <section className="doc-section">
        <h2 className="doc-section__title">3: ProgressBar (Determinate)</h2>
        <p style={{ color: 'var(--exds-color-text-secondary)', marginBottom: '16px', fontSize: 'var(--exds-text-sm)' }}>
          Use when you can calculate a percentage complete: file uploads, multi-step operations.
        </p>
        <div className="doc-preview" style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '400px' }}>
          <ProgressBar value={38} label="Uploading document…" animated showValue />
          <ProgressBar value={100} label="Processing complete" variant="success" showValue />
        </div>
      </section>

      {/* Disabled state */}
      <section className="doc-section">
        <h2 className="doc-section__title">4: Disabled State (Form Loading)</h2>
        <p style={{ color: 'var(--exds-color-text-secondary)', marginBottom: '16px', fontSize: 'var(--exds-text-sm)' }}>
          When a form action is in-flight, disable all inputs and show a Spinner in the submit button.
          This locks the UI and prevents double-submission.
        </p>
        <div className="doc-preview">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxWidth: '300px' }}>
            <input disabled placeholder="Name" style={{ padding: '10px 12px', borderRadius: 'var(--exds-radius-md)', border: '1px solid var(--exds-color-border)', background: 'var(--exds-color-neutral-50)', fontFamily: 'var(--exds-font-primary)', fontSize: 'var(--exds-text-base)', opacity: 0.6, cursor: 'not-allowed', width: '100%' }} />
            <input disabled placeholder="Email" style={{ padding: '10px 12px', borderRadius: 'var(--exds-radius-md)', border: '1px solid var(--exds-color-border)', background: 'var(--exds-color-neutral-50)', fontFamily: 'var(--exds-font-primary)', fontSize: 'var(--exds-text-base)', opacity: 0.6, cursor: 'not-allowed', width: '100%' }} />
            <button disabled style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', padding: '10px 20px', background: 'var(--exds-color-primary)', border: 'none', borderRadius: 'var(--exds-radius-md)', color: '#fff', fontFamily: 'var(--exds-font-primary)', fontSize: 'var(--exds-text-sm)', fontWeight: 600, opacity: 0.8, cursor: 'not-allowed' }}>
              <Spinner size="sm" color="white" /> Saving…
            </button>
          </div>
        </div>
      </section>

      {/* Do's and Don'ts */}
      <section className="doc-section">
        <h2 className="doc-section__title">Do's and Don'ts</h2>
        <div className="doc-guidelines">
          <div className="doc-guideline"><span className="doc-guideline__icon"><DoIcon /></span><span><strong>Do</strong> use Skeleton for the initial page load of content-heavy views (dashboards, list pages).</span></div>
          <div className="doc-guideline"><span className="doc-guideline__icon"><DontIcon /></span><span><strong>Don't</strong> show Skeleton for under 300ms: a brief flash is more distracting than the original wait.</span></div>
          <div className="doc-guideline"><span className="doc-guideline__icon"><DoIcon /></span><span><strong>Do</strong> always disable interactive controls while an async operation is in-flight to prevent inconsistent state.</span></div>
          <div className="doc-guideline"><span className="doc-guideline__icon"><DontIcon /></span><span><strong>Don't</strong> mix multiple loading patterns for the same operation: pick one and stay consistent within a view.</span></div>
        </div>
      </section>
    </div>
  );
}
