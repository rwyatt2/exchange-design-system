import React, { useState } from 'react';
import { Tabs, DosDonts } from '../../components';
import { ArrowIcon, BulletIcon, DoIcon, DontIcon, KeyboardIcon, LabelIcon, LayoutIcon, SearchDocIcon, SparkIcon, StateIcon, ZapIcon } from '../docIcons';

export default function TabsPage() {
  const [activeTab, setActiveTab] = useState('apis');
  const [activePill, setActivePill] = useState('all');
  return (
    <div className="doc-page">
      <div className="doc-page__header">
        <h1 className="doc-page__title">Tabs</h1>
        <p className="doc-page__subtitle">
          Tabbed navigation for switching between content sections, used for the main
          "APIs / Data / Streams / Features / File Transfers" navigation.
        </p>
      </div>
      <section className="doc-section">
        <h2 className="doc-section__title">Underline (Default)</h2>
        <div className="doc-preview">
          <Tabs
            items={[
              { id: 'apis', label: 'APIs' },
              { id: 'data', label: 'Data' },
              { id: 'streams', label: 'Streams' },
              { id: 'features', label: 'Features' },
              { id: 'transfers', label: 'File Transfers' },
            ]}
            activeId={activeTab}
            onChange={setActiveTab}
          />
          <div style={{ padding: '20px 0', color: 'var(--exds-color-text-secondary)' }}>
            Content for <strong>{activeTab}</strong> tab
          </div>
        </div>
        <pre className="doc-code"><code>{`<Tabs
  items={[
    { id: 'apis', label: 'APIs' },
    { id: 'data', label: 'Data' },
    { id: 'streams', label: 'Streams' },
  ]}
  activeId={activeTab}
  onChange={setActiveTab}
/>`}</code></pre>
      </section>
      <section className="doc-section">
        <h2 className="doc-section__title">Pill Variant</h2>
        <div className="doc-preview">
          <Tabs
            variant="pill"
            items={[
              { id: 'all', label: 'All' },
              { id: 'apis', label: 'APIs' },
              { id: 'streams', label: 'Streams' },
              { id: 'file-transfers', label: 'File Transfers' },
            ]}
            activeId={activePill}
            onChange={setActivePill}
          />
        </div>
      </section>
      <section className="doc-section">
        <h2 className="doc-section__title">Props</h2>
        <table className="doc-props-table">
          <thead><tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
          <tbody>
            <tr><td><code>items</code></td><td>array</td><td>: </td><td>Array of {'{ id, label, icon? }'}</td></tr>
            <tr><td><code>activeId</code></td><td>string</td><td>: </td><td>Currently active tab id</td></tr>
            <tr><td><code>onChange</code></td><td>function</td><td>: </td><td>Change handler (receives id)</td></tr>
            <tr><td><code>variant</code></td><td>string</td><td>'default'</td><td>'default' (underline) or 'pill'</td></tr>
          </tbody>
        </table>
      </section>

      {/* ── Usage Guidelines ── */}
      <section className="doc-section">
        <h2 className="doc-section__title">Usage Guidelines</h2>
        <div className="doc-guidelines">
          <div className="doc-guideline">
            <span className="doc-guideline__icon"><BulletIcon /></span>
            Use <strong>underline tabs</strong> for primary page-level navigation (e.g., APIs / Data / Streams). They're the dominant navigation pattern in The Exchange.
          </div>
          <div className="doc-guideline">
            <span className="doc-guideline__icon"><BulletIcon /></span>
            Use <strong>pill tabs</strong> for secondary filtering or toggling within a section (e.g., "All / APIs / Streams").
          </div>
          <div className="doc-guideline">
            <span className="doc-guideline__icon"><BulletIcon /></span>
            Limit tabs to <strong>3–7 items</strong>. More than 7 becomes hard to scan and may overflow on smaller screens.
          </div>
          <div className="doc-guideline">
            <span className="doc-guideline__icon"><BulletIcon /></span>
            Tab labels should be short (1–2 words) and describe the content category, not an action.
          </div>
        </div>
      </section>

      {/* ── Do's and Don'ts ── */}
      <section className="doc-section">
        <h2 className="doc-section__title">Do's and Don'ts</h2>
        <DosDonts items={[
          {
            do: 'Use tabs to organize content at the same level of hierarchy. Each tab\'s content area should be peers.',
            dont: 'Nest tabs inside tabs: it creates confusing multi-level navigation. Use a different pattern for sub-sections.',
          },
          {
            do: 'Preserve tab state when the user navigates back. Users expect to return to the tab they were on.',
            dont: 'Reset tabs to the default on every page load: it forces users to re-navigate.',
          },
          {
            do: 'Keep tab labels concise: "APIs", "Data", "Streams". One or two words max.',
            dont: 'Use long labels like "View All Available APIs": it wastes horizontal space and wraps awkwardly.',
          },
        ]} />
      </section>

      {/* ── Accessibility ── */}
      <section className="doc-section">
        <h2 className="doc-section__title">Accessibility</h2>
        <div className="doc-a11y">
          <div className="doc-a11y__item">
            <span className="doc-a11y__icon"><LabelIcon /></span>
            The container has <code>role="tablist"</code> and each tab has <code>role="tab"</code> with <code>aria-selected</code> reflecting the active state.
          </div>
          <div className="doc-a11y__item">
            <span className="doc-a11y__icon"><KeyboardIcon /></span>
            Each tab is a <code>&lt;button&gt;</code> and is focusable via <code>Tab</code>. Click or <code>Enter</code>/<code>Space</code> activates the focused tab.
          </div>
          <div className="doc-a11y__item">
            <span className="doc-a11y__icon"><SearchDocIcon /></span>
            Screen readers announce the active tab and total count (e.g., "APIs, tab 1 of 5, selected").
          </div>
        </div>
      </section>

      {/* ── Behavior ── */}
      <section className="doc-section">
        <h2 className="doc-section__title">Behavior</h2>
        <div className="doc-behavior">
          <div className="doc-behavior__item">
            <span className="doc-behavior__icon"><StateIcon /></span>
            Tabs is a <strong>controlled component</strong>. The parent manages <code>activeId</code> and responds to <code>onChange</code>.
          </div>
          <div className="doc-behavior__item">
            <span className="doc-behavior__icon"><SparkIcon /></span>
            The underline variant uses a bottom border transition when switching active states. The pill variant swaps background color.
          </div>
          <div className="doc-behavior__item">
            <span className="doc-behavior__icon"><LayoutIcon /></span>
            Each tab item can include an optional <code>icon</code> that renders before the label text.
          </div>
        </div>
      </section>
    </div>
  );
}
