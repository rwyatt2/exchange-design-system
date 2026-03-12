import React, { useState } from 'react';
import Pagination from '../../components/Pagination/Pagination';
import { A11yIcon, ArrowIcon, BulletIcon, DoIcon, DontIcon, ZapIcon } from '../docIcons';

export default function PaginationPage() {
  const [page, setPage] = useState(3);
  const [compactPage, setCompactPage] = useState(1);

  return (
    <div className="doc-page">
      <div className="doc-page__header">
        <h1 className="doc-page__title">Pagination</h1>
        <p className="doc-page__subtitle">
          Pagination breaks a large data set into navigable pages. Used alongside
          DataTable and list views, it gives users clear positional context and
          predictable navigation controls.
        </p>
      </div>

      {/* Full pagination */}
      <section className="doc-section">
        <h2 className="doc-section__title">Full Pagination</h2>
        <div className="doc-preview">
          <Pagination currentPage={page} totalPages={10} onPageChange={setPage} />
          <p style={{ marginTop: '12px', fontSize: 'var(--exds-text-sm)', color: 'var(--exds-color-text-tertiary)', fontFamily: 'var(--exds-font-mono)' }}>
            Current page: {page}
          </p>
        </div>
        <pre><code>{`<Pagination
  currentPage={page}
  totalPages={10}
  onPageChange={(p) => setPage(p)}
/>`}</code></pre>
      </section>

      {/* Compact */}
      <section className="doc-section">
        <h2 className="doc-section__title">Compact Mode</h2>
        <p style={{ color: 'var(--exds-color-text-secondary)', marginBottom: '16px', fontSize: 'var(--exds-text-sm)' }}>
          Use when space is limited: shows only previous/next with a page counter.
        </p>
        <div className="doc-preview">
          <Pagination currentPage={compactPage} totalPages={20} onPageChange={setCompactPage} compact />
        </div>
        <pre><code>{`<Pagination
  currentPage={page}
  totalPages={20}
  onPageChange={setPage}
  compact
/>`}</code></pre>
      </section>

      {/* Props */}
      <section className="doc-section">
        <h2 className="doc-section__title">Props</h2>
        <table className="doc-props-table">
          <thead><tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
          <tbody>
            <tr><td><code>currentPage</code></td><td>number</td><td><code>1</code></td><td>The active page (1-indexed)</td></tr>
            <tr><td><code>totalPages</code></td><td>number</td><td><code>1</code></td><td>Total number of pages</td></tr>
            <tr><td><code>onPageChange</code></td><td>function</td><td>: </td><td>Called with new page number on navigation</td></tr>
            <tr><td><code>sibling</code></td><td>number</td><td><code>1</code></td><td>Page numbers to show on each side of current</td></tr>
            <tr><td><code>compact</code></td><td>boolean</td><td><code>false</code></td><td>Show prev/next only with a page counter</td></tr>
          </tbody>
        </table>
      </section>

      {/* Do's and Don'ts */}
      <section className="doc-section">
        <h2 className="doc-section__title">Do's and Don'ts</h2>
        <div className="doc-guidelines">
          <div className="doc-guideline"><span className="doc-guideline__icon"><DoIcon /></span><span><strong>Do</strong> use Pagination with DataTable when row counts exceed 25–50 rows per view.</span></div>
          <div className="doc-guideline"><span className="doc-guideline__icon"><DontIcon /></span><span><strong>Don't</strong> use Pagination for continuous-scroll feeds: use infinite scroll instead.</span></div>
          <div className="doc-guideline"><span className="doc-guideline__icon"><DoIcon /></span><span><strong>Do</strong> use compact mode in sidebars, drawers, or other space-constrained contexts.</span></div>
          <div className="doc-guideline"><span className="doc-guideline__icon"><DontIcon /></span><span><strong>Don't</strong> show pagination for fewer than 2 pages: hide it when all results fit on one page.</span></div>
        </div>
      </section>

      {/* Accessibility */}
      <section className="doc-section">
        <h2 className="doc-section__title">Accessibility</h2>
        <div className="doc-a11y">
          <div className="doc-a11y__item"><span className="doc-a11y__icon"><A11yIcon /></span><span><code>&lt;nav&gt;</code> wrapper with <code>aria-label="Pagination"</code> landmarks the component for screen readers.</span></div>
          <div className="doc-a11y__item"><span className="doc-a11y__icon"><A11yIcon /></span><span>Active page button includes <code>aria-current="page"</code> to announce the current position.</span></div>
          <div className="doc-a11y__item"><span className="doc-a11y__icon"><A11yIcon /></span><span>Previous/Next buttons are <code>disabled</code> at bounds and communicate that state to assistive technology automatically.</span></div>
        </div>
      </section>
    </div>
  );
}
