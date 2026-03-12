import React, { useState } from 'react';
import { Modal, Button, DosDonts } from '../../components';
import { ArrowIcon, BulletIcon, CloseIcon, DoIcon, DontIcon, FocusIcon, KeyboardIcon, LabelIcon, MouseIcon, RulerIcon, StateIcon, ZapIcon } from '../docIcons';

export default function ModalPage() {
  const [open, setOpen] = useState(false);
  const [openLg, setOpenLg] = useState(false);
  return (
    <div className="doc-page">
      <div className="doc-page__header">
        <h1 className="doc-page__title">Modal</h1>
        <p className="doc-page__subtitle">
          Modal dialogs for focused interactions: file uploads, confirmations, and data entry forms.
          Built on the native HTML dialog element for proper focus management and accessibility.
        </p>
      </div>
      <section className="doc-section">
        <h2 className="doc-section__title">Default</h2>
        <div className="doc-preview">
          <Button onClick={() => setOpen(true)}>Open Modal</Button>
          <Modal
            isOpen={open}
            onClose={() => setOpen(false)}
            title="Share New File"
            footer={
              <>
                <Button variant="ghost" onClick={() => setOpen(false)}>Cancel</Button>
                <Button onClick={() => setOpen(false)}>Share</Button>
              </>
            }
          >
            <p>Choose a file to share with your team. The file will be available to all members of the exchange.</p>
          </Modal>
        </div>
        <pre className="doc-code"><code>{`<Modal
  isOpen={open}
  onClose={() => setOpen(false)}
  title="Share New File"
  footer={
    <>
      <Button variant="ghost" onClick={onClose}>Cancel</Button>
      <Button onClick={onSubmit}>Share</Button>
    </>
  }
>
  <p>Modal body content.</p>
</Modal>`}</code></pre>
      </section>
      <section className="doc-section">
        <h2 className="doc-section__title">Large Modal</h2>
        <div className="doc-preview">
          <Button variant="secondary" onClick={() => setOpenLg(true)}>Open Large Modal</Button>
          <Modal
            isOpen={openLg}
            onClose={() => setOpenLg(false)}
            title="File Upload"
            size="lg"
            footer={
              <>
                <Button variant="ghost" onClick={() => setOpenLg(false)}>Cancel</Button>
                <Button onClick={() => setOpenLg(false)}>Upload</Button>
              </>
            }
          >
            <div style={{
              border: '2px dashed var(--exds-color-border)',
              borderRadius: 'var(--exds-radius-lg)',
              padding: '48px', textAlign: 'center',
              color: 'var(--exds-color-text-tertiary)',
            }}>
              <p style={{ fontSize: 'var(--exds-text-lg)' }}>Drag and drop files here</p>
              <p style={{ fontSize: 'var(--exds-text-sm)', marginTop: '8px' }}>or click to browse</p>
            </div>
          </Modal>
        </div>
      </section>
      <section className="doc-section">
        <h2 className="doc-section__title">Props</h2>
        <table className="doc-props-table">
          <thead><tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
          <tbody>
            <tr><td><code>isOpen</code></td><td>boolean</td><td>false</td><td>Controls visibility</td></tr>
            <tr><td><code>onClose</code></td><td>function</td><td>: </td><td>Close handler</td></tr>
            <tr><td><code>title</code></td><td>string</td><td>: </td><td>Modal title</td></tr>
            <tr><td><code>size</code></td><td>string</td><td>'md'</td><td>sm, md, lg</td></tr>
            <tr><td><code>footer</code></td><td>node</td><td>: </td><td>Footer content (buttons)</td></tr>
          </tbody>
        </table>
      </section>

      {/* ── Usage Guidelines ── */}
      <section className="doc-section">
        <h2 className="doc-section__title">Usage Guidelines</h2>
        <div className="doc-guidelines">
          <div className="doc-guideline">
            <span className="doc-guideline__icon"><BulletIcon /></span>
            Use modals for <strong>focused tasks</strong> that require user attention: confirmations, file uploads, and short forms.
          </div>
          <div className="doc-guideline">
            <span className="doc-guideline__icon"><BulletIcon /></span>
            Use the <strong>lg</strong> size for content-heavy tasks (file uploads, data tables). Use <strong>sm</strong> for simple confirmations.
          </div>
          <div className="doc-guideline">
            <span className="doc-guideline__icon"><BulletIcon /></span>
            Always include a <strong>clear dismiss path</strong>: a close button in the header, a Cancel button in the footer, and clicking the backdrop.
          </div>
          <div className="doc-guideline">
            <span className="doc-guideline__icon"><BulletIcon /></span>
            Place the <strong>primary action</strong> (e.g., "Share", "Upload") on the right side of the footer. The secondary/cancel action goes on the left.
          </div>
        </div>
      </section>

      {/* ── Do's and Don'ts ── */}
      <section className="doc-section">
        <h2 className="doc-section__title">Do's and Don'ts</h2>
        <DosDonts items={[
          {
            do: 'Use modals for a focused task that interrupts the main workflow temporarily.',
            dont: 'Use modals for complex multi-step workflows: use a full page instead.',
          },
          {
            do: 'Provide clear footer buttons: a primary action and a way to cancel.',
            dont: 'Use a modal without any action buttons: users need a clear path forward.',
          },
          {
            do: 'Keep modal content concise. If you need scrolling, reconsider whether a modal is the right pattern.',
            dont: 'Stack modals (opening a modal from within a modal): it\'s confusing and creates focus-trapping issues.',
          },
        ]} />
      </section>

      {/* ── Accessibility ── */}
      <section className="doc-section">
        <h2 className="doc-section__title">Accessibility</h2>
        <div className="doc-a11y">
          <div className="doc-a11y__item">
            <span className="doc-a11y__icon"><LabelIcon /></span>
            Built on the native <code>&lt;dialog&gt;</code> element, providing built-in focus trapping, backdrop, and screen reader support.
          </div>
          <div className="doc-a11y__item">
            <span className="doc-a11y__icon"><KeyboardIcon /></span>
            Pressing <code>Escape</code> closes the modal via the native <code>cancel</code> event. Focus returns to the triggering element.
          </div>
          <div className="doc-a11y__item">
            <span className="doc-a11y__icon"><FocusIcon /></span>
            Focus is trapped inside the modal when open: <code>Tab</code> cycles through focusable elements within the dialog only.
          </div>
          <div className="doc-a11y__item">
            <span className="doc-a11y__icon"><CloseIcon /></span>
            The close button includes <code>aria-label="Close"</code> since it uses an SVG icon rather than text.
          </div>
        </div>
      </section>

      {/* ── Behavior ── */}
      <section className="doc-section">
        <h2 className="doc-section__title">Behavior</h2>
        <div className="doc-behavior">
          <div className="doc-behavior__item">
            <span className="doc-behavior__icon"><StateIcon /></span>
            Modal is <strong>controlled</strong> via <code>isOpen</code>. It calls <code>showModal()</code> and <code>close()</code> on the native dialog ref.
          </div>
          <div className="doc-behavior__item">
            <span className="doc-behavior__icon"><MouseIcon /></span>
            Clicking the backdrop (outside the modal container) triggers <code>onClose</code>. This is handled by comparing the click target to the dialog element.
          </div>
          <div className="doc-behavior__item">
            <span className="doc-behavior__icon"><RulerIcon /></span>
            The modal container has <code>max-height</code> constraints and will scroll internally if content overflows, keeping the footer visible.
          </div>
        </div>
      </section>
    </div>
  );
}
