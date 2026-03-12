import React from 'react';
import EmptyState from '../../components/EmptyState/EmptyState';
import { DoIcon, DontIcon, BulletIcon, ArrowIcon, ZapIcon } from '../docIcons';

const searchIcon = (
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" width="64" height="64">
    <circle cx="27" cy="27" r="16" /><path d="M40 40l13 13" strokeLinecap="round" />
  </svg>
);

const noAccessIcon = (
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" width="64" height="64">
    <circle cx="32" cy="32" r="24" />
    <path d="M14 14l36 36" strokeLinecap="round" />
  </svg>
);

const createIcon = (
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" width="64" height="64">
    <rect x="10" y="10" width="44" height="44" rx="6" />
    <path d="M32 22v20M22 32h20" strokeLinecap="round" />
  </svg>
);

const errorIcon = (
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" width="64" height="64">
    <circle cx="32" cy="32" r="24" />
    <path d="M32 20v16M32 42h.5" strokeLinecap="round" />
  </svg>
);

export default function EmptyStatePatternPage() {
  return (
    <div className="doc-page">
      <div className="doc-page__header">
        <h1 className="doc-page__title">Empty States</h1>
        <p className="doc-page__subtitle">
          Every list, table, or content area will eventually be empty. An
          empty state is not a failure: it's an opportunity to guide users.
          This pattern documents when each empty state variant applies and
          how to compose them correctly.
        </p>
      </div>

      {/* When they occur */}
      <section className="doc-section">
        <h2 className="doc-section__title">Empty State Scenarios</h2>
        <table className="doc-props-table">
          <thead><tr><th>Cause</th><th>CTA</th><th>Icon type</th></tr></thead>
          <tbody>
            <tr><td>No results match a filter or search</td><td>Clear filters / Edit search</td><td>Search or filter icon</td></tr>
            <tr><td>No content has been created yet</td><td>Create first item</td><td>Plus / document icon</td></tr>
            <tr><td>User lacks permission to view content</td><td>Request access / Contact admin</td><td>Lock / shield icon</td></tr>
            <tr><td>Error loading data</td><td>Retry</td><td>Warning / refresh icon</td></tr>
          </tbody>
        </table>
      </section>

      {/* Demos */}
      <section className="doc-section">
        <h2 className="doc-section__title">No Search Results</h2>
        <div className="doc-preview">
          <EmptyState
            icon={searchIcon}
            title="No Results Found"
            description={'Try adjusting your search terms or clearing your active filters.'}
            action={{ label: 'Clear Filters', onClick: () => {} }}
          />
        </div>
      </section>

      <section className="doc-section">
        <h2 className="doc-section__title">No Content Created Yet</h2>
        <div className="doc-preview">
          <EmptyState
            icon={createIcon}
            title="No Reports Yet"
            description="Create your first report to start tracking exchange volume and performance metrics."
            action={{ label: 'Create Report', onClick: () => {} }}
          />
        </div>
      </section>

      <section className="doc-section">
        <h2 className="doc-section__title">Access Restricted</h2>
        <div className="doc-preview">
          <EmptyState
            icon={noAccessIcon}
            title="Access Restricted"
            description="You don't have permission to view this content. Contact your administrator to request access."
            action={{ label: 'Request Access', onClick: () => {} }}
          />
        </div>
      </section>

      <section className="doc-section">
        <h2 className="doc-section__title">Load Error</h2>
        <div className="doc-preview">
          <EmptyState
            icon={errorIcon}
            title="Failed to Load Data"
            description="We couldn't retrieve this data. Check your connection and try again."
            action={{ label: 'Retry', onClick: () => {} }}
          />
        </div>
      </section>

      {/* Do's and Don'ts */}
      <section className="doc-section">
        <h2 className="doc-section__title">Do's and Don'ts</h2>
        <div className="doc-guidelines">
          <div className="doc-guideline"><span className="doc-guideline__icon"><DoIcon /></span><span><strong>Do</strong> tailor the copy to the user's context: why is it empty for them, right now?</span></div>
          <div className="doc-guideline"><span className="doc-guideline__icon"><DontIcon /></span><span><strong>Don't</strong> use "No data" as the title: it gives no context and no path forward.</span></div>
          <div className="doc-guideline"><span className="doc-guideline__icon"><DoIcon /></span><span><strong>Do</strong> hide empty state Skeleton placeholders after the load is confirmed empty: don't show both simultaneously.</span></div>
          <div className="doc-guideline"><span className="doc-guideline__icon"><DontIcon /></span><span><strong>Don't</strong> show an empty state if data is still loading: show the Skeleton or Spinner first, then switch to EmptyState if result is empty.</span></div>
        </div>
      </section>
    </div>
  );
}
