import React, { useState } from 'react';
import { Breadcrumbs } from '../../components/Breadcrumbs/Breadcrumbs';
import Tabs from '../../components/Tabs/Tabs';
import { DoIcon, DontIcon } from '../docIcons';

const TAB_CONTENT = {
  overview: "Summary of the selected period's performance.",
  details:  'Granular breakdown by route and asset class.',
  history:  'Historical data across previous periods.',
};

export default function NavigationPatternPage() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="doc-page">
      <div className="doc-page__header">
        <h1 className="doc-page__title">Navigation</h1>
        <p className="doc-page__subtitle">
          Navigation is composed from three layers: the global header (always visible),
          breadcrumbs (positional context), and tabs (local sub-navigation within a page).
          Each layer has a distinct role — combining them correctly prevents confusion.
        </p>
      </div>

      {/* When to use each */}
      <section className="doc-section">
        <h2 className="doc-section__title">Navigation Component Roles</h2>
        <table className="doc-props-table">
          <thead>
            <tr><th>Component</th><th>Role</th><th>Scope</th></tr>
          </thead>
          <tbody>
            <tr><td><strong>Header nav</strong></td><td>Primary site navigation</td><td>Global — visible on all pages</td></tr>
            <tr><td><strong>Sidebar nav</strong></td><td>Section-level navigation</td><td>App-level — within a product area</td></tr>
            <tr><td><strong>Breadcrumbs</strong></td><td>Positional context / back navigation</td><td>Page-level — shows where you are</td></tr>
            <tr><td><strong>Tabs</strong></td><td>Sub-navigation within a single page</td><td>Component-level — filters views or sections</td></tr>
          </tbody>
        </table>
      </section>

      {/* Breadcrumbs */}
      <section className="doc-section">
        <h2 className="doc-section__title">Breadcrumbs</h2>
        <p style={{ color: 'var(--exds-color-text-secondary)', marginBottom: '16px', fontSize: 'var(--exds-text-sm)' }}>
          Show on pages 2+ levels deep. Omit on top-level pages (e.g., Dashboard, Home).
        </p>
        <div className="doc-preview" style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <Breadcrumbs items={[
            { label: 'Home', to: '/' },
            { label: 'Components', to: '/components/button' },
            { label: 'Button' },
          ]} />
          <Breadcrumbs items={[
            { label: 'Home', to: '/' },
            { label: 'Reports', to: '#' },
            { label: 'Q1 2026', to: '#' },
            { label: 'Exchange Volume' },
          ]} />
        </div>
      </section>

      {/* Tabs */}
      <section className="doc-section">
        <h2 className="doc-section__title">Tabs</h2>
        <p style={{ color: 'var(--exds-color-text-secondary)', marginBottom: '16px', fontSize: 'var(--exds-text-sm)' }}>
          Use Tabs for sibling-level content views within a single page. Don't use Tabs for navigation that changes the URL path — use Breadcrumbs or sidebar nav for that.
        </p>
        <div className="doc-preview">
          <Tabs
            items={[
              { id: 'overview', label: 'Overview' },
              { id: 'details',  label: 'Details'  },
              { id: 'history',  label: 'History'  },
            ]}
            activeId={activeTab}
            onChange={setActiveTab}
          />
          <p style={{ padding: '16px 0 0', color: 'var(--exds-color-text-secondary)', fontSize: 'var(--exds-text-sm)' }}>
            {TAB_CONTENT[activeTab]}
          </p>
        </div>
      </section>

      {/* Nesting rules */}
      <section className="doc-section">
        <h2 className="doc-section__title">Composition Rules</h2>
        <div className="doc-guidelines">
          <div className="doc-guideline"><span className="doc-guideline__icon"><DoIcon /></span><span><strong>Do</strong> stack: Global Header → Breadcrumbs → Page Title → Tabs. This ordering is predictable and universally understood.</span></div>
          <div className="doc-guideline"><span className="doc-guideline__icon"><DontIcon /></span><span><strong>Don't</strong> nest Tabs within Tabs — it creates deep, hard-to-navigate hierarchies. Use a sidebar or accordion instead.</span></div>
          <div className="doc-guideline"><span className="doc-guideline__icon"><DoIcon /></span><span><strong>Do</strong> truncate Breadcrumbs longer than 4 items by collapsing the middle with "…" to keep them scannable.</span></div>
          <div className="doc-guideline"><span className="doc-guideline__icon"><DontIcon /></span><span><strong>Don't</strong> use Breadcrumbs on the home/dashboard page — there's nowhere to go "up" from the root.</span></div>
          <div className="doc-guideline"><span className="doc-guideline__icon"><DoIcon /></span><span><strong>Do</strong> use max 5–7 Tabs. Beyond that, consider a sidebar navigation or a Select dropdown to choose the sub-view.</span></div>
        </div>
      </section>
    </div>
  );
}
