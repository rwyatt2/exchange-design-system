import React from 'react';
import Popover from '../../components/Popover/Popover';
import Button from '../../components/Button/Button';
import { A11yIcon, ArrowIcon, BulletIcon, DoIcon, DontIcon, ZapIcon } from '../docIcons';

export default function PopoverPage() {
  return (
    <div className="doc-page">
      <div className="doc-page__header">
        <h1 className="doc-page__title">Popover</h1>
        <p className="doc-page__subtitle">
          Popovers display interactive content in a floating panel anchored to a
          trigger element. Unlike Tooltips (read-only, hover-activated), Popovers
          are click-activated and can contain buttons, forms, or other interactive
          content.
        </p>
      </div>

      {/* Live demo */}
      <section className="doc-section">
        <h2 className="doc-section__title">Placements</h2>
        <div className="doc-preview" style={{ display: 'flex', gap: '32px', flexWrap: 'wrap', padding: '40px 32px' }}>
          {['bottom', 'top', 'right', 'left'].map((placement) => (
            <Popover
              key={placement}
              placement={placement}
              trigger={
                <button style={{
                  padding: '8px 16px',
                  background: 'var(--exds-color-primary)',
                  color: '#fff',
                  border: 'none',
                  borderRadius: 'var(--exds-radius-md)',
                  fontFamily: 'var(--exds-font-primary)',
                  fontSize: 'var(--exds-text-sm)',
                  cursor: 'pointer',
                  fontWeight: 500,
                }}>
                  {placement.charAt(0).toUpperCase() + placement.slice(1)} ▾
                </button>
              }
              content={
                <div>
                  <p style={{ fontWeight: 600, marginBottom: '4px', fontSize: 'var(--exds-text-sm)' }}>Popover title</p>
                  <p style={{ color: 'var(--exds-color-text-secondary)', fontSize: 'var(--exds-text-sm)' }}>
                    This panel appears {placement} of the trigger. Click outside or press Escape to close.
                  </p>
                </div>
              }
            />
          ))}
        </div>
      </section>

      {/* Rich content demo */}
      <section className="doc-section">
        <h2 className="doc-section__title">With Rich Content</h2>
        <div className="doc-preview" style={{ padding: '40px' }}>
          <Popover
            placement="bottom"
            trigger={
              <button style={{
                padding: '8px 16px',
                background: 'var(--exds-color-surface)',
                border: '1px solid var(--exds-color-border)',
                borderRadius: 'var(--exds-radius-md)',
                fontFamily: 'var(--exds-font-primary)',
                fontSize: 'var(--exds-text-sm)',
                cursor: 'pointer',
              }}>
                User Info ▾
              </button>
            }
            content={
              <div style={{ minWidth: '220px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'var(--exds-color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 600, flexShrink: 0 }}>JD</div>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: 'var(--exds-text-sm)' }}>Jane Doe</div>
                    <div style={{ color: 'var(--exds-color-text-tertiary)', fontSize: 'var(--exds-text-xs)' }}>jane@exchange.io</div>
                  </div>
                </div>
                <div style={{ borderTop: '1px solid var(--exds-color-border-subtle)', paddingTop: '10px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  {['View Profile', 'Account Settings', 'Sign Out'].map((item) => (
                    <button key={item} style={{ background: 'none', border: 'none', textAlign: 'left', cursor: 'pointer', padding: '6px 8px', borderRadius: 'var(--exds-radius-sm)', fontSize: 'var(--exds-text-sm)', color: 'var(--exds-color-text-primary)', fontFamily: 'var(--exds-font-primary)' }}>
                      {item}
                    </button>
                  ))}
                </div>
              </div>
            }
          />
        </div>
      </section>

      {/* Usage */}
      <section className="doc-section">
        <h2 className="doc-section__title">Usage</h2>
        <pre><code>{`<Popover
  placement="bottom"
  trigger={<button>Open</button>}
  content={
    <div>
      <p>Any content here</p>
      <button>Action</button>
    </div>
  }
/>`}</code></pre>
      </section>

      {/* Props */}
      <section className="doc-section">
        <h2 className="doc-section__title">Props</h2>
        <table className="doc-props-table">
          <thead><tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
          <tbody>
            <tr><td><code>trigger</code></td><td>ReactNode</td><td>: </td><td>Element that opens the popover on click</td></tr>
            <tr><td><code>content</code></td><td>ReactNode</td><td>: </td><td>Content rendered inside the popover panel</td></tr>
            <tr><td><code>placement</code></td><td><code>'top' | 'bottom' | 'left' | 'right'</code></td><td><code>'bottom'</code></td><td>Where the panel appears relative to the trigger</td></tr>
            <tr><td><code>open</code></td><td>boolean</td><td>: </td><td>If provided, switches to controlled mode</td></tr>
            <tr><td><code>onClose</code></td><td>function</td><td>: </td><td>Called when popover should close (controlled mode)</td></tr>
          </tbody>
        </table>
      </section>

      {/* Do's and Don'ts */}
      <section className="doc-section">
        <h2 className="doc-section__title">Do's and Don'ts</h2>
        <div className="doc-guidelines">
          <div className="doc-guideline"><span className="doc-guideline__icon"><DoIcon /></span><span><strong>Do</strong> use Popover when users need to interact with content before dismissing: menus, user cards, filters.</span></div>
          <div className="doc-guideline"><span className="doc-guideline__icon"><DontIcon /></span><span><strong>Don't</strong> use Popover for read-only contextual hints: use Tooltip for that.</span></div>
          <div className="doc-guideline"><span className="doc-guideline__icon"><DoIcon /></span><span><strong>Do</strong> keep popover content focused and minimal. If content is complex, consider a Drawer or Modal.</span></div>
          <div className="doc-guideline"><span className="doc-guideline__icon"><DontIcon /></span><span><strong>Don't</strong> nest Popovers: cascading overlays are disorienting for users and hard to keyboard-navigate.</span></div>
        </div>
      </section>

      {/* Accessibility */}
      <section className="doc-section">
        <h2 className="doc-section__title">Accessibility</h2>
        <div className="doc-a11y">
          <div className="doc-a11y__item"><span className="doc-a11y__icon"><A11yIcon /></span><span>The popover panel uses <code>role="dialog"</code> to convey it is a separate interactive region.</span></div>
          <div className="doc-a11y__item"><span className="doc-a11y__icon"><A11yIcon /></span><span>Pressing <code>Escape</code> closes the popover and returns focus to the trigger element.</span></div>
          <div className="doc-a11y__item"><span className="doc-a11y__icon"><A11yIcon /></span><span>Clicking outside the popover closes it: this is implemented via a <code>mousedown</code> document listener.</span></div>
        </div>
      </section>
    </div>
  );
}
