import React, { useState } from 'react';
import Toast from '../../components/Toast/Toast';
import Alert from '../../components/Alert/Alert';
import { DoIcon, DontIcon, BulletIcon, ArrowIcon, ZapIcon } from '../docIcons';

export default function NotificationSystemPatternPage() {
  const [toasts, setToasts] = useState([]);

  const fire = (type, message) => {
    const id = Date.now();
    setToasts((t) => [...t, { id, type, message }]);
  };

  const dismiss = (id) => setToasts((t) => t.filter((toast) => toast.id !== id));

  return (
    <div className="doc-page">
      <div className="doc-page__header">
        <h1 className="doc-page__title">Notification System</h1>
        <p className="doc-page__subtitle">
          The notification system uses two components: <strong>Alert</strong> (persistent inline) and{' '}
          <strong>Toast</strong> (ephemeral floating): and each has a specific role.
          Choosing the right one prevents "notification fatigue" and keeps critical messages visible.
        </p>
      </div>

      {/* Comparison table */}
      <section className="doc-section">
        <h2 className="doc-section__title">Alert vs. Toast</h2>
        <table className="doc-props-table">
          <thead>
            <tr><th>Property</th><th>Alert (inline)</th><th>Toast (floating)</th></tr>
          </thead>
          <tbody>
            <tr><td>Position</td><td>Inline, within page flow</td><td>Floating overlay (top-right)</td></tr>
            <tr><td>Persistence</td><td>Stays until dismissed or resolved</td><td>Auto-dismisses (4s default)</td></tr>
            <tr><td>Interaction required</td><td>Sometimes (has a CTA)</td><td>No: purely informational</td></tr>
            <tr><td>Best for</td><td>Form validation errors, system warnings, status banners</td><td>Action confirmations, brief system events</td></tr>
            <tr><td>Severity</td><td>All severities, especially errors requiring action</td><td>Success, info, low-severity warnings</td></tr>
          </tbody>
        </table>
      </section>

      {/* Alert examples */}
      <section className="doc-section">
        <h2 className="doc-section__title">Alert: Persistent Inline</h2>
        <div className="doc-preview" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <Alert type="error"   title="Submission failed" message="Please correct the 3 errors below before resubmitting." />
          <Alert type="warning" title="Session expiring"  message="Your session will expire in 5 minutes. Save your work." />
          <Alert type="info"    title="Maintenance window" message="Scheduled maintenance on March 15 from 2–4 AM EST." />
          <Alert type="success" title="Settings saved"   message="Your preferences have been updated successfully." />
        </div>
      </section>

      {/* Toast demo */}
      <section className="doc-section">
        <h2 className="doc-section__title">Toast: Ephemeral Floating</h2>
        <div className="doc-preview">
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '20px' }}>
            <button onClick={() => fire('success', 'Data exported successfully.')} style={{ padding: '8px 14px', borderRadius: 'var(--exds-radius-md)', border: '1px solid var(--exds-color-border)', background: 'var(--exds-color-surface)', fontFamily: 'var(--exds-font-primary)', fontSize: 'var(--exds-text-sm)', cursor: 'pointer' }}>
              ✓ Success Toast
            </button>
            <button onClick={() => fire('warning', 'Rate limit approaching: 80% used.')} style={{ padding: '8px 14px', borderRadius: 'var(--exds-radius-md)', border: '1px solid var(--exds-color-border)', background: 'var(--exds-color-surface)', fontFamily: 'var(--exds-font-primary)', fontSize: 'var(--exds-text-sm)', cursor: 'pointer' }}>
              ⚠ Warning Toast
            </button>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {toasts.map((t) => (
              <Toast key={t.id} type={t.type} message={t.message} visible duration={4000} onDismiss={() => dismiss(t.id)} />
            ))}
            {toasts.length === 0 && (
              <p style={{ color: 'var(--exds-color-text-tertiary)', fontSize: 'var(--exds-text-sm)' }}>Trigger a toast above.</p>
            )}
          </div>
        </div>
      </section>

      {/* Lifecycle */}
      <section className="doc-section">
        <h2 className="doc-section__title">Notification Lifecycle</h2>
        <div className="doc-behavior" style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {[
            '1. User triggers action (e.g., Save, Delete, Submit).',
            '2. System initiates operation. Disable affected UI (spinner on button).',
            '3a. Success → Show Toast (ephemeral confirmation). Re-enable UI.',
            '3b. Non-blocking warning → Show Toast, continue flow.',
            '3c. Blocking error → Show inline Alert near the cause. Keep UI available for correction.',
            '4. If user navigates away before dismissing → Clear ephemeral toasts, persist inline alerts.',
          ].map((step) => (
            <div key={step} className="doc-behavior__item">
              <span className="doc-behavior__icon"><ArrowIcon /></span>
              <span style={{ fontSize: 'var(--exds-text-sm)', color: 'var(--exds-color-text-secondary)' }}>{step}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Do's and Don'ts */}
      <section className="doc-section">
        <h2 className="doc-section__title">Do's and Don'ts</h2>
        <div className="doc-guidelines">
          <div className="doc-guideline"><span className="doc-guideline__icon"><DoIcon /></span><span><strong>Do</strong> use Toast for success confirmations. Users don't need to act on them: just acknowledge.</span></div>
          <div className="doc-guideline"><span className="doc-guideline__icon"><DontIcon /></span><span><strong>Don't</strong> auto-dismiss error toasts: errors often require action and should persist until resolved.</span></div>
          <div className="doc-guideline"><span className="doc-guideline__icon"><DoIcon /></span><span><strong>Do</strong> place inline Alerts above the form/content area they relate to, not at the bottom.</span></div>
          <div className="doc-guideline"><span className="doc-guideline__icon"><DontIcon /></span><span><strong>Don't</strong> stack more than 3 toasts: queue them and show one at a time in high-frequency contexts.</span></div>
        </div>
      </section>
    </div>
  );
}
