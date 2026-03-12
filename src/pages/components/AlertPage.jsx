import React from 'react';
import { Alert, DosDonts } from '../../components';
import { ArrowIcon, BulletIcon, CloseIcon, ColorIcon, DoIcon, DontIcon, LabelIcon, LayoutIcon, TypeIcon, ZapIcon } from '../docIcons';

export default function AlertPage() {
  return (
    <div className="doc-page">
      <div className="doc-page__header">
        <h1 className="doc-page__title">Alert</h1>
        <p className="doc-page__subtitle">
          Inline alerts and banners for communicating status, validation, and system messages.
        </p>
      </div>
      <section className="doc-section">
        <h2 className="doc-section__title">Variants</h2>
        <div className="doc-preview" style={{ display: 'grid', gap: '12px' }}>
          <Alert variant="info" title="Information">
            Some functionality may not be fully baked. We'd love your feedback.
          </Alert>
          <Alert variant="success" title="Success">
            Your ownership has been confirmed successfully.
          </Alert>
          <Alert variant="warning" title="Warning">
            You have not made any changes.
          </Alert>
          <Alert variant="error" title="Error">
            Request Deactivation — you are no longer an owner of this asset.
          </Alert>
        </div>
        <pre className="doc-code"><code>{`<Alert variant="warning" title="Warning">
  You have not made any changes.
</Alert>`}</code></pre>
      </section>
      <section className="doc-section">
        <h2 className="doc-section__title">Dismissible</h2>
        <div className="doc-preview">
          <Alert variant="info" title="Beta" dismissible onDismiss={() => {}}>
            This feature is in beta. Click the x to dismiss.
          </Alert>
        </div>
      </section>
      <section className="doc-section">
        <h2 className="doc-section__title">Props</h2>
        <table className="doc-props-table">
          <thead><tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
          <tbody>
            <tr><td><code>variant</code></td><td>string</td><td>'info'</td><td>info, success, warning, error</td></tr>
            <tr><td><code>title</code></td><td>string</td><td>—</td><td>Alert title (bold heading)</td></tr>
            <tr><td><code>icon</code></td><td>node</td><td>—</td><td>Custom icon (overrides default variant icon)</td></tr>
            <tr><td><code>dismissible</code></td><td>boolean</td><td>false</td><td>Show dismiss button</td></tr>
            <tr><td><code>onDismiss</code></td><td>function</td><td>—</td><td>Dismiss handler</td></tr>
          </tbody>
        </table>
      </section>

      {/* ── Usage Guidelines ── */}
      <section className="doc-section">
        <h2 className="doc-section__title">Usage Guidelines</h2>
        <div className="doc-guidelines">
          <div className="doc-guideline">
            <span className="doc-guideline__icon"><BulletIcon /></span>
            Use <strong>info</strong> for neutral informational messages, tips, and beta notices.
          </div>
          <div className="doc-guideline">
            <span className="doc-guideline__icon"><BulletIcon /></span>
            Use <strong>success</strong> to confirm a completed action: ownership confirmed, file uploaded, changes saved.
          </div>
          <div className="doc-guideline">
            <span className="doc-guideline__icon"><BulletIcon /></span>
            Use <strong>warning</strong> for non-blocking cautions: unsaved changes, deprecated features, approaching limits.
          </div>
          <div className="doc-guideline">
            <span className="doc-guideline__icon"><BulletIcon /></span>
            Use <strong>error</strong> for critical problems: failed operations, access revocations, validation errors at the form level.
          </div>
          <div className="doc-guideline">
            <span className="doc-guideline__icon"><BulletIcon /></span>
            Make alerts <strong>dismissible</strong> when the information is acknowledged-once (e.g., beta notices). Keep them persistent for ongoing states (e.g., error conditions).
          </div>
        </div>
      </section>

      {/* ── Do's and Don'ts ── */}
      <section className="doc-section">
        <h2 className="doc-section__title">Do's and Don'ts</h2>
        <DosDonts items={[
          {
            do: 'Place alerts at the top of the relevant content area, directly above the content they relate to.',
            dont: "Bury alerts at the bottom of the page or inside collapsed sections where users won't see them.",
          },
          {
            do: 'Use the title for a concise summary and the body for additional context or next steps.',
            dont: 'Write overly long alert messages. Users should understand the core message in under 3 seconds.',
          },
          {
            do: 'Match the variant to the severity. Use error only for true errors, not just important notices.',
            dont: 'Use error styling for marketing messages or non-critical announcements — it causes alert fatigue.',
          },
        ]} />
      </section>

      {/* ── Accessibility ── */}
      <section className="doc-section">
        <h2 className="doc-section__title">Accessibility</h2>
        <div className="doc-a11y">
          <div className="doc-a11y__item">
            <span className="doc-a11y__icon"><LabelIcon /></span>
            The container has <code>role="alert"</code>, which causes screen readers to announce the content immediately when it appears.
          </div>
          <div className="doc-a11y__item">
            <span className="doc-a11y__icon"><CloseIcon /></span>
            The dismiss button includes <code>aria-label="Dismiss"</code> for screen readers, since the X icon is not descriptive on its own.
          </div>
          <div className="doc-a11y__item">
            <span className="doc-a11y__icon"><ColorIcon /></span>
            Each variant uses both color and an icon to convey meaning, ensuring the alert type is clear even without color perception.
          </div>
        </div>
      </section>

      {/* ── Behavior ── */}
      <section className="doc-section">
        <h2 className="doc-section__title">Behavior</h2>
        <div className="doc-behavior">
          <div className="doc-behavior__item">
            <span className="doc-behavior__icon"><CloseIcon /></span>
            Dismissing an alert calls <code>onDismiss</code> but does <strong>not</strong> automatically remove it from the DOM. The parent must manage visibility state.
          </div>
          <div className="doc-behavior__item">
            <span className="doc-behavior__icon"><TypeIcon /></span>
            Each variant has a default icon (Info, CheckCircle, AlertTriangle, XCircle) that can be overridden by passing a custom <code>icon</code> prop.
          </div>
          <div className="doc-behavior__item">
            <span className="doc-behavior__icon"><LayoutIcon /></span>
            Alerts are full-width block elements. They stack naturally when multiple alerts are shown in sequence.
          </div>
        </div>
      </section>
    </div>
  );
}
