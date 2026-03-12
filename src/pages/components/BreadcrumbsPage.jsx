import React from 'react';
import { Breadcrumbs } from '../../components/Breadcrumbs/Breadcrumbs';
import DosDonts from '../../components/DosDonts/DosDonts';
import { A11yIcon, LabelIcon } from '../docIcons';

export default function BreadcrumbsPage() {
  return (
    <div className="doc-page">
      <div className="doc-page__header">
        <h1 className="doc-page__title">Breadcrumbs</h1>
        <p className="doc-page__subtitle">
          Breadcrumbs show the hierarchical path to the current page within the application structure.
        </p>
      </div>

      <section className="doc-section">
        <h2 className="doc-section__title">Usage</h2>
        <p style={{ color: 'var(--exds-color-text-secondary)', marginBottom: '16px', lineHeight: 1.6 }}>
          Use Breadcrumbs to help users understand their current location in a deep hierarchy and
          to allow them to quickly navigate up to parent levels.
        </p>
        <div className="doc-preview">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '#' },
              { label: 'Settings', href: '#' },
              { label: 'Account Profile' },
            ]}
          />
        </div>
      </section>

      <section className="doc-section">
        <h2 className="doc-section__title">Custom Separators</h2>
        <p style={{ color: 'var(--exds-color-text-secondary)', marginBottom: '16px' }}>
          You can change the separator character depending on the visual style needed.
        </p>
        <div className="doc-preview" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div>
            <p style={{ fontSize: 'var(--exds-text-xs)', marginBottom: '8px', color: 'var(--exds-color-text-tertiary)', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600 }}>Chevron Separator (default)</p>
            <Breadcrumbs
              separator="›"
              items={[
                { label: 'Products', href: '#' },
                { label: 'Electronics', href: '#' },
                { label: 'Laptops' },
              ]}
            />
          </div>
          <div>
            <p style={{ fontSize: 'var(--exds-text-xs)', marginBottom: '8px', color: 'var(--exds-color-text-tertiary)', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600 }}>Slash Separator</p>
            <Breadcrumbs
              separator="/"
              items={[
                { label: 'Dashboard', href: '#' },
                { label: 'Reports', href: '#' },
                { label: 'Q3 Earnings' },
              ]}
            />
          </div>
        </div>
      </section>

      <section className="doc-section">
        <h2 className="doc-section__title">Guidelines</h2>
        <DosDonts
          items={[
            {
              do: 'Always include the current page as the last item in the trail without a link.',
              dont: "Don't replace primary navigation with Breadcrumbs — they are a secondary navigation aid.",
            },
            {
              do: 'Use Breadcrumbs when the hierarchy is more than two levels deep.',
              dont: "Don't use Breadcrumbs for flat, non-hierarchical processes (use a Progress indicator or Stepper instead).",
            },
            {
              do: 'Keep labels short and descriptive, ideally matching the page title.',
              dont: "Don't truncate the current page name if avoidable.",
            },
          ]}
        />
      </section>

      <section className="doc-section">
        <h2 className="doc-section__title">Accessibility</h2>
        <div className="doc-a11y">
          <div className="doc-a11y__item">
            <span className="doc-a11y__icon"><LabelIcon /></span>
            <span><strong>Landmark:</strong> Uses a <code>&lt;nav&gt;</code> element with <code>aria-label="Breadcrumb navigation"</code> so screen reader users can locate it with landmark navigation.</span>
          </div>
          <div className="doc-a11y__item">
            <span className="doc-a11y__icon"><A11yIcon /></span>
            <span><strong>Current Page:</strong> The last (active) item receives <code>aria-current="page"</code> so assistive technologies announce its state properly.</span>
          </div>
          <div className="doc-a11y__item">
            <span className="doc-a11y__icon"><A11yIcon /></span>
            <span><strong>Separators:</strong> Separator characters use <code>aria-hidden="true"</code> so they are not announced by screen readers alongside the link labels.</span>
          </div>
        </div>
      </section>
    </div>
  );
}
