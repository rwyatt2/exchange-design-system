import React from 'react';
import { zIndex } from '../../tokens/tokens';
import { DoIcon, DontIcon, BulletIcon, ArrowIcon, ZapIcon } from '../docIcons';

export default function ZIndexPage() {
  const maxZ = 1700;

  return (
    <div className="doc-page">
      <div className="doc-page__header">
        <h1 className="doc-page__title">Z-Index</h1>
        <p className="doc-page__subtitle">
          A structured stacking order system that ensures overlays, dropdowns,
          modals, and toasts always render in the correct layer. Using named
          tokens prevents arbitrary z-index collisions across the codebase.
        </p>
      </div>

      {/* Visual stack diagram */}
      <section className="doc-section">
        <h2 className="doc-section__title">Layer Stack</h2>
        <div style={{ display: 'flex', flexDirection: 'column-reverse', gap: '4px' }}>
          {zIndex.filter(z => parseInt(z.value) >= 0).map((z) => {
            const pct = Math.max(4, (parseInt(z.value) / maxZ) * 100);
            return (
              <div key={z.token} style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
              }}>
                <div style={{
                  width: `${pct}%`,
                  minWidth: '40px',
                  background: `hsl(${210 + (parseInt(z.value) / maxZ) * 60}, 60%, ${55 - (parseInt(z.value) / maxZ) * 20}%)`,
                  borderRadius: 'var(--exds-radius-sm)',
                  padding: '8px 12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '8px',
                  transition: 'width 300ms ease',
                }}>
                  <code style={{ fontSize: 'var(--exds-text-xs)', color: '#fff', whiteSpace: 'nowrap' }}>
                    {z.token.replace('--exds-z-', '')}
                  </code>
                  <span style={{ fontSize: 'var(--exds-text-xs)', color: 'rgba(255,255,255,0.75)', fontFamily: 'var(--exds-font-mono)', whiteSpace: 'nowrap' }}>
                    {z.value}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
        <div style={{
          marginTop: '12px',
          fontSize: 'var(--exds-text-xs)',
          color: 'var(--exds-color-text-tertiary)',
          fontStyle: 'italic',
        }}>
          Bar width is proportional to z-index value. Ordered from lowest (bottom) to highest (top).
        </div>
      </section>

      {/* Reference table */}
      <section className="doc-section">
        <h2 className="doc-section__title">Token Reference</h2>
        <table className="doc-props-table">
          <thead>
            <tr>
              <th>Token</th>
              <th>Value</th>
              <th>Use Case</th>
            </tr>
          </thead>
          <tbody>
            {zIndex.map((z) => (
              <tr key={z.token}>
                <td><code>{z.token}</code></td>
                <td style={{ fontFamily: 'var(--exds-font-mono)', fontSize: 'var(--exds-text-xs)' }}>{z.value}</td>
                <td style={{ color: 'var(--exds-color-text-secondary)' }}>
                  {z.token.includes('hide')    && 'Hidden behind all content'}
                  {z.token.includes('base')    && 'Default stacking context'}
                  {z.token.includes('docked')  && 'Docked elements, sticky headers'}
                  {z.token.includes('dropdown')&& 'Select menus, autocomplete lists'}
                  {z.token.includes('sticky')  && 'Sticky sidebars, floating labels'}
                  {z.token.includes('banner')  && 'System-wide banners and announcements'}
                  {z.token.includes('overlay') && 'Modal backdrops, drawer overlays'}
                  {z.token.includes('modal')   && 'Modal dialogs'}
                  {z.token.includes('popover') && 'Popovers, date pickers'}
                  {z.token.includes('toast')   && 'Toast notifications'}
                  {z.token.includes('tooltip') && 'Tooltips: always on top'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Usage */}
      <section className="doc-section">
        <h2 className="doc-section__title">Usage</h2>
        <pre><code>{`/* Apply z-index via CSS custom properties */
.header {
  z-index: var(--exds-z-docked);    /* 10 */
}

.dropdown {
  z-index: var(--exds-z-dropdown);  /* 1000 */
}

.modal-overlay {
  z-index: var(--exds-z-overlay);   /* 1300 */
}

.modal {
  z-index: var(--exds-z-modal);     /* 1400 */
}

.toast {
  z-index: var(--exds-z-toast);     /* 1600 */
}

.tooltip {
  z-index: var(--exds-z-tooltip);   /* 1700: highest */
}`}</code></pre>
      </section>

      {/* Do's and Don'ts */}
      <section className="doc-section">
        <h2 className="doc-section__title">Do's and Don'ts</h2>
        <div className="doc-guidelines">
          <div className="doc-guideline">
            <span className="doc-guideline__icon"><DoIcon /></span>
            <span><strong>Do</strong> always use named tokens instead of hardcoded integers. <code>z-index: 9999</code> is a design system smell.</span>
          </div>
          <div className="doc-guideline">
            <span className="doc-guideline__icon"><DontIcon /></span>
            <span><strong>Don't</strong> place tooltips or toasts below <code>--exds-z-tooltip</code>: they must always be visible above all other layers.</span>
          </div>
          <div className="doc-guideline">
            <span className="doc-guideline__icon"><DoIcon /></span>
            <span><strong>Do</strong> pair <code>--exds-z-overlay</code> with a modal backdrop and <code>--exds-z-modal</code> with the dialog itself to preserve correct layering.</span>
          </div>
          <div className="doc-guideline">
            <span className="doc-guideline__icon"><DontIcon /></span>
            <span><strong>Don't</strong> create new stacking contexts with <code>transform</code> or <code>opacity</code> on ancestor elements of overlays: it breaks z-index inheritance.</span>
          </div>
        </div>
      </section>
    </div>
  );
}
