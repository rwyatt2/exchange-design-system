import React from 'react';
import { Link } from 'react-router-dom';
import {
  ClipboardList, Search, MessageSquare, Hourglass,
  Map, Bell, Inbox, PenLine, Sparkles,
} from 'lucide-react';

const PATTERN_ICONS = {
  '/patterns/form-layout':    <ClipboardList  size={28} strokeWidth={1.5} />,
  '/patterns/search-results': <Search         size={28} strokeWidth={1.5} />,
  '/patterns/feedback-flows': <MessageSquare  size={28} strokeWidth={1.5} />,
  '/patterns/loading-states': <Hourglass      size={28} strokeWidth={1.5} />,
  '/patterns/navigation':     <Map            size={28} strokeWidth={1.5} />,
  '/patterns/notifications':  <Bell           size={28} strokeWidth={1.5} />,
  '/patterns/empty-states':   <Inbox          size={28} strokeWidth={1.5} />,
  '/patterns/data-entry':     <PenLine        size={28} strokeWidth={1.5} />,
};

export default function PatternsOverview() {
  const patterns = [
    {
      title: 'Form Layout',
      description: 'Compose TextInput, Select, RadioGroup, Checkbox, and Button into structured data entry forms.',
      to: '/patterns/form-layout',
    },
    {
      title: 'Search Results',
      description: 'Combine SearchBar, Tabs, Checkbox filters, DataTable, and Badge into a full search experience.',
      to: '/patterns/search-results',
    },
    {
      title: 'Feedback Flows',
      description: 'Use Alert, Modal, and Button together for confirmations, warnings, and destructive action flows.',
      to: '/patterns/feedback-flows',
    },
    {
      title: 'Loading States',
      description: 'Choose the right loading pattern: Spinner, Skeleton, or ProgressBar: for each context.',
      to: '/patterns/loading-states',
    },
    {
      title: 'Navigation',
      description: 'Compose global header, Breadcrumbs, and Tabs into predictable multi-level navigation.',
      to: '/patterns/navigation',
    },
    {
      title: 'Notification System',
      description: 'Decide when to use inline Alert vs. ephemeral Toast and how they work together.',
      to: '/patterns/notifications',
    },
    {
      title: 'Empty States',
      description: 'Handle no-results, no-content, access-restricted, and load-error states with EmptyState.',
      to: '/patterns/empty-states',
    },
    {
      title: 'Data Entry',
      description: 'Compose Toggle, Tag, range inputs, and form controls into coherent data entry experiences.',
      to: '/patterns/data-entry',
    },
  ];

  return (
    <div className="doc-page">
      <div className="doc-page__header">
        <h1 className="doc-page__title">Patterns</h1>
        <p className="doc-page__subtitle">
          Patterns show how to compose individual components into complete, real-world UI
          solutions. Each pattern includes a live example, implementation guidance, and
          {" do's and don'ts."}
        </p>
      </div>

      <section className="doc-section">
        <h2 className="doc-section__title">Available Patterns</h2>
        <div className="doc-grid doc-grid--3">
          {patterns.map((p) => (
            <Link
              key={p.to}
              to={p.to}
              className="doc-preview"
              style={{ textDecoration: 'none', display: 'block' }}
            >
              <div style={{ marginBottom: '12px', color: 'var(--exds-color-primary)' }}>
                {PATTERN_ICONS[p.to]}
              </div>
              <h3 style={{
                fontSize: 'var(--exds-text-md)',
                fontWeight: 600,
                marginBottom: '8px',
                color: 'var(--exds-color-text-primary)',
              }}>{p.title}</h3>
              <p style={{
                fontSize: 'var(--exds-text-sm)',
                color: 'var(--exds-color-text-tertiary)',
                lineHeight: 'var(--exds-leading-relaxed)',
              }}>{p.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="doc-section">
        <h2 className="doc-section__title">When to Use Patterns</h2>
        <div className="doc-guidelines">
          <div className="doc-guideline">
            <span className="doc-guideline__icon"><Sparkles size={14} strokeWidth={2} /></span>
            Use patterns when building a <strong>page or view</strong> that combines multiple components. They show proven compositions that maintain consistency.
          </div>
          <div className="doc-guideline">
            <span className="doc-guideline__icon"><Sparkles size={14} strokeWidth={2} /></span>
            Patterns are <strong>guidelines, not rigid templates</strong>. Adapt spacing, ordering, and content to fit your specific use case.
          </div>
          <div className="doc-guideline">
            <span className="doc-guideline__icon"><Sparkles size={14} strokeWidth={2} /></span>
            Before creating a new layout, check if an existing pattern covers your need. Reusing patterns ensures a consistent user experience.
          </div>
        </div>
      </section>
    </div>
  );
}
