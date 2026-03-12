import React, { useState } from 'react';
import { Alert, Modal, Button, DosDonts } from '../../components';
import { ArrowIcon, BulletIcon, DoIcon, DontIcon, LabelIcon, StateIcon, ZapIcon } from '../docIcons';

export default function FeedbackPatternPage() {
  const [showWarning, setShowWarning] = useState(true);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [confirmed, setConfirmed] = useState(false);

  const handleConfirm = () => {
    setConfirmOpen(false);
    setConfirmed(true);
  };

  return (
    <div className="doc-page">
      <div className="doc-page__header">
        <h1 className="doc-page__title">Feedback Flows</h1>
        <p className="doc-page__subtitle">
          How to compose Alert, Modal, and Button for confirmations, warnings, and destructive
          action flows. These patterns are used for deactivation confirmations, status notifications,
          and system messages.
        </p>
      </div>

      {/* ── Pattern 1: Inline Alert → Action ── */}
      <section className="doc-section">
        <h2 className="doc-section__title">Inline Warning + Action</h2>
        <p style={{ color: 'var(--exds-color-text-secondary)', marginBottom: '16px', fontSize: 'var(--exds-text-sm)' }}>
          Show an inline alert with context, followed by an action button. Used for non-blocking warnings.
        </p>
        <div className="doc-preview" style={{ display: 'grid', gap: '16px' }}>
          {showWarning && (
            <Alert variant="warning" title="Unsaved Changes" dismissible onDismiss={() => setShowWarning(false)}>
              You have modified the route configuration but have not saved your changes.
            </Alert>
          )}
          {!showWarning && (
            <Alert variant="info" title="Dismissed">
              The warning was dismissed. <button style={{ color: 'var(--exds-color-text-link)', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'inherit', fontSize: 'inherit', textDecoration: 'underline', padding: 0 }} onClick={() => setShowWarning(true)}>Show again</button>
            </Alert>
          )}
          <div style={{ display: 'flex', gap: '12px' }}>
            <Button variant="ghost">Discard Changes</Button>
            <Button>Save Changes</Button>
          </div>
        </div>
      </section>

      {/* ── Pattern 2: Destructive Confirmation ── */}
      <section className="doc-section">
        <h2 className="doc-section__title">Destructive Confirmation</h2>
        <p style={{ color: 'var(--exds-color-text-secondary)', marginBottom: '16px', fontSize: 'var(--exds-text-sm)' }}>
          For irreversible actions, show a confirmation modal with a danger button. The user must explicitly confirm.
        </p>
        <div className="doc-preview" style={{ display: 'grid', gap: '16px' }}>
          {confirmed && (
            <Alert variant="success" title="Route Deactivated">
              Route FIS.S3.AM.UATE has been deactivated. <button style={{ color: 'var(--exds-color-text-link)', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'inherit', fontSize: 'inherit', textDecoration: 'underline', padding: 0 }} onClick={() => setConfirmed(false)}>Reset demo</button>
            </Alert>
          )}
          {!confirmed && (
            <Alert variant="error" title="Deactivation Warning">
              Deactivating this route will stop all file transfers immediately.
            </Alert>
          )}
          <div>
            <Button variant="danger" onClick={() => setConfirmOpen(true)}>Deactivate Route</Button>
          </div>
          <Modal
            isOpen={confirmOpen}
            onClose={() => setConfirmOpen(false)}
            title="Confirm Deactivation"
            footer={
              <>
                <Button variant="ghost" onClick={() => setConfirmOpen(false)}>Cancel</Button>
                <Button variant="danger" onClick={handleConfirm}>Yes, Deactivate</Button>
              </>
            }
          >
            <p>Are you sure you want to deactivate route <strong>FIS.S3.AM.UATE</strong>?
            This action will stop all file transfers and cannot be undone.</p>
          </Modal>
        </div>
      </section>

      {/* ── Pattern 3: Success Feedback ── */}
      <section className="doc-section">
        <h2 className="doc-section__title">Success Feedback</h2>
        <p style={{ color: 'var(--exds-color-text-secondary)', marginBottom: '16px', fontSize: 'var(--exds-text-sm)' }}>
          After a successful operation, show a success alert inline to confirm the outcome.
        </p>
        <div className="doc-preview" style={{ display: 'grid', gap: '12px' }}>
          <Alert variant="success" title="Ownership Confirmed">
            Your ownership of the Lockbox API has been confirmed. You can now manage access permissions.
          </Alert>
          <Alert variant="info" title="Beta Feature" dismissible onDismiss={() => {}}>
            Some features shown here are in beta. Your feedback helps us improve.
          </Alert>
        </div>
      </section>

      {/* ── Do's and Don'ts ── */}
      <section className="doc-section">
        <h2 className="doc-section__title">Do's and Don'ts</h2>
        <DosDonts items={[
          {
            do: 'Use inline alerts for warnings and status. Reserve modals for actions requiring explicit confirmation.',
            dont: 'Show a modal for every warning: alert fatigue causes users to click through without reading.',
          },
          {
            do: 'Use danger variant buttons in confirmation modals. Label them clearly: "Yes, Deactivate" not just "OK".',
            dont: 'Use primary styling for destructive actions: it makes them look safe when they aren\'t.',
          },
          {
            do: 'Show success feedback inline after the action, replacing the danger alert.',
            dont: 'Navigate away immediately after a destructive action: users need confirmation it worked.',
          },
        ]} />
      </section>

      {/* ── Implementation Guidelines ── */}
      <section className="doc-section">
        <h2 className="doc-section__title">Implementation Notes</h2>
        <div className="doc-behavior">
          <div className="doc-behavior__item">
            <span className="doc-behavior__icon"><StateIcon /></span>
            Manage alert visibility in parent state. When dismissed, conditionally render the alert.
          </div>
          <div className="doc-behavior__item">
            <span className="doc-behavior__icon"><ZapIcon /></span>
            For destructive flows: danger trigger button → confirmation modal → success alert. Three clear steps.
          </div>
          <div className="doc-behavior__item">
            <span className="doc-behavior__icon"><LabelIcon /></span>
            Modal confirmation buttons should label the specific action ("Yes, Deactivate") rather than generic text ("OK", "Confirm").
          </div>
        </div>
      </section>
    </div>
  );
}
