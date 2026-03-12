import React, { useState } from 'react';
import Toast from '../../components/Toast/Toast';
import { A11yIcon, ArrowIcon, BulletIcon, DoIcon, DontIcon, ZapIcon } from '../docIcons';

export default function ToastPage() {
  const [toasts, setToasts] = useState([]);

  const show = (type) => {
    const id = Date.now();
    const messages = {
      success: 'Changes saved successfully.',
      error:   'Connection failed. Please try again.',
      warning: 'Your session will expire in 5 minutes.',
      info:    'A new version of the app is available.',
    };
    setToasts((prev) => [...prev, { id, type, message: messages[type] }]);
  };

  const dismiss = (id) => setToasts((prev) => prev.filter((t) => t.id !== id));

  return (
    <div className="doc-page">
      <div className="doc-page__header">
        <h1 className="doc-page__title">Toast</h1>
        <p className="doc-page__subtitle">
          Toasts are ephemeral, non-blocking notifications that appear briefly to
          confirm an action or communicate a system event. Unlike inline Alerts,
          they auto-dismiss and float above the page content.
        </p>
      </div>

      {/* Interactive demo */}
      <section className="doc-section">
        <h2 className="doc-section__title">Interactive Demo</h2>
        <div className="doc-preview">
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '20px' }}>
            {['success', 'error', 'warning', 'info'].map((type) => (
              <button
                key={type}
                onClick={() => show(type)}
                style={{
                  padding: '8px 16px',
                  borderRadius: 'var(--exds-radius-md)',
                  border: '1px solid var(--exds-color-border)',
                  background: 'var(--exds-color-surface)',
                  color: 'var(--exds-color-text-primary)',
                  fontSize: 'var(--exds-text-sm)',
                  fontFamily: 'var(--exds-font-primary)',
                  cursor: 'pointer',
                  fontWeight: 500,
                }}
              >
                Show {type}
              </button>
            ))}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {toasts.map((t) => (
              <Toast
                key={t.id}
                type={t.type}
                message={t.message}
                visible
                duration={4000}
                onDismiss={() => dismiss(t.id)}
              />
            ))}
            {toasts.length === 0 && (
              <p style={{ color: 'var(--exds-color-text-tertiary)', fontSize: 'var(--exds-text-sm)' }}>
                Click a button above to trigger a toast.
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Static examples */}
      <section className="doc-section">
        <h2 className="doc-section__title">All Variants</h2>
        <div className="doc-preview" style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <Toast type="success" message="Changes saved successfully." visible />
          <Toast type="error"   message="Connection failed. Please try again." visible />
          <Toast type="warning" message="Your session will expire in 5 minutes." visible />
          <Toast type="info"    message="A new version of the app is available." visible />
        </div>
      </section>

      {/* Usage */}
      <section className="doc-section">
        <h2 className="doc-section__title">Usage</h2>
        <pre><code>{`<Toast
  type="success"
  message="Changes saved successfully."
  visible={visible}
  duration={4000}
  onDismiss={() => setVisible(false)}
/>`}</code></pre>
      </section>

      {/* Props */}
      <section className="doc-section">
        <h2 className="doc-section__title">Props</h2>
        <table className="doc-props-table">
          <thead><tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
          <tbody>
            <tr><td><code>message</code></td><td>string</td><td>: </td><td>Text content of the toast</td></tr>
            <tr><td><code>type</code></td><td><code>'success' | 'error' | 'warning' | 'info'</code></td><td><code>'info'</code></td><td>Visual variant and icon</td></tr>
            <tr><td><code>visible</code></td><td>boolean</td><td><code>true</code></td><td>Controls render: set to false to hide without unmounting</td></tr>
            <tr><td><code>duration</code></td><td>number (ms)</td><td><code>4000</code></td><td>Auto-dismiss after this duration. <code>0</code> to disable auto-dismiss.</td></tr>
            <tr><td><code>onDismiss</code></td><td>function</td><td>: </td><td>Called when toast auto-dismisses or user clicks close</td></tr>
          </tbody>
        </table>
      </section>

      {/* Do's and Don'ts */}
      <section className="doc-section">
        <h2 className="doc-section__title">Do's and Don'ts</h2>
        <div className="doc-guidelines">
          <div className="doc-guideline"><span className="doc-guideline__icon"><DoIcon /></span><span><strong>Do</strong> use Toast for confirming completed actions (saves, submits, deletions).</span></div>
          <div className="doc-guideline"><span className="doc-guideline__icon"><DontIcon /></span><span><strong>Don't</strong> use Toast for errors that require user action: use inline Alert instead.</span></div>
          <div className="doc-guideline"><span className="doc-guideline__icon"><DoIcon /></span><span><strong>Do</strong> keep toast messages brief: one sentence max. Link to detail elsewhere if needed.</span></div>
          <div className="doc-guideline"><span className="doc-guideline__icon"><DontIcon /></span><span><strong>Don't</strong> stack more than 3 toasts simultaneously: queue them or collapse duplicates.</span></div>
        </div>
      </section>

      {/* Accessibility */}
      <section className="doc-section">
        <h2 className="doc-section__title">Accessibility</h2>
        <div className="doc-a11y">
          <div className="doc-a11y__item"><span className="doc-a11y__icon"><A11yIcon /></span><span>Uses <code>role="alert"</code> and <code>aria-live="assertive"</code> so screen readers announce toast messages immediately.</span></div>
          <div className="doc-a11y__item"><span className="doc-a11y__icon"><A11yIcon /></span><span>Dismiss button has <code>aria-label="Dismiss notification"</code> for clear labeling without visible text.</span></div>
          <div className="doc-a11y__item"><span className="doc-a11y__icon"><A11yIcon /></span><span>Auto-dismiss timers should be at least 4 seconds. For error/warning toasts, consider disabling auto-dismiss.</span></div>
        </div>
      </section>
    </div>
  );
}
