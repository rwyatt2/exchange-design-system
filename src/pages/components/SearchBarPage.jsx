import React, { useState } from 'react';
import { SearchBar, DosDonts } from '../../components';
import { ArrowIcon, BulletIcon, DoIcon, DontIcon, EditIcon, KeyboardIcon, LabelIcon, LayoutIcon, SearchDocIcon, StateIcon, ZapIcon } from '../docIcons';

export default function SearchBarPage() {
  const [val, setVal] = useState('');
  return (
    <div className="doc-page">
      <div className="doc-page__header">
        <h1 className="doc-page__title">SearchBar</h1>
        <p className="doc-page__subtitle">
          A search input with icon, used as the global search in The Exchange header.
        </p>
      </div>
      <section className="doc-section">
        <h2 className="doc-section__title">Default</h2>
        <div className="doc-preview">
          <SearchBar placeholder="Search for APIs, Data, Streams and Features" value={val} onChange={setVal} />
        </div>
        <pre className="doc-code"><code>{`<SearchBar
  placeholder="Search for APIs, Data, Streams and Features"
  value={value}
  onChange={setValue}
/>`}</code></pre>
      </section>
      <section className="doc-section">
        <h2 className="doc-section__title">Sizes</h2>
        <div className="doc-preview" style={{ display: 'grid', gap: '12px' }}>
          <SearchBar placeholder="Small" size="sm" />
          <SearchBar placeholder="Medium (default)" size="md" />
          <SearchBar placeholder="Large" size="lg" />
        </div>
      </section>
      <section className="doc-section">
        <h2 className="doc-section__title">Props</h2>
        <table className="doc-props-table">
          <thead><tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
          <tbody>
            <tr><td><code>placeholder</code></td><td>string</td><td>'Search...'</td><td>Placeholder text</td></tr>
            <tr><td><code>value</code></td><td>string</td><td>: </td><td>Controlled value</td></tr>
            <tr><td><code>onChange</code></td><td>function</td><td>: </td><td>Change handler (receives value string)</td></tr>
            <tr><td><code>onSubmit</code></td><td>function</td><td>: </td><td>Submit handler (called on Enter/form submit)</td></tr>
            <tr><td><code>size</code></td><td>string</td><td>'md'</td><td>sm, md, lg</td></tr>
          </tbody>
        </table>
      </section>

      {/* ── Usage Guidelines ── */}
      <section className="doc-section">
        <h2 className="doc-section__title">Usage Guidelines</h2>
        <div className="doc-guidelines">
          <div className="doc-guideline">
            <span className="doc-guideline__icon"><BulletIcon /></span>
            Use SearchBar for <strong>global or page-level search</strong>. For filtering within a small list, use TextInput instead.
          </div>
          <div className="doc-guideline">
            <span className="doc-guideline__icon"><BulletIcon /></span>
            Write descriptive placeholder text that hints at the available content (e.g., "Search for APIs, Data, Streams and Features").
          </div>
          <div className="doc-guideline">
            <span className="doc-guideline__icon"><BulletIcon /></span>
            Use the <strong>lg</strong> size for hero search placement (e.g., homepage). Use <strong>md</strong> for header integration.
          </div>
        </div>
      </section>

      {/* ── Do's and Don'ts ── */}
      <section className="doc-section">
        <h2 className="doc-section__title">Do's and Don'ts</h2>
        <DosDonts items={[
          {
            do: 'Place the search bar in a consistent, prominent location (header or top of page).',
            dont: "Bury the search inside collapsible panels or deep navigation where users cannot find it.",
          },
          {
            do: 'Debounce onChange for live-search implementations to avoid excessive API calls.',
            dont: 'Fire a network request on every keystroke without debouncing: it creates lag and wasted calls.',
          },
        ]} />
      </section>

      {/* ── Accessibility ── */}
      <section className="doc-section">
        <h2 className="doc-section__title">Accessibility</h2>
        <div className="doc-a11y">
          <div className="doc-a11y__item">
            <span className="doc-a11y__icon"><LabelIcon /></span>
            The component wraps input in a <code>&lt;form role="search"&gt;</code>, providing a search landmark for screen readers.
          </div>
          <div className="doc-a11y__item">
            <span className="doc-a11y__icon"><KeyboardIcon /></span>
            Pressing <code>Enter</code> submits the search form, triggering <code>onSubmit</code> if provided.
          </div>
          <div className="doc-a11y__item">
            <span className="doc-a11y__icon"><SearchDocIcon /></span>
            The search icon is decorative and hidden from screen readers. The placeholder text provides context.
          </div>
        </div>
      </section>

      {/* ── Behavior ── */}
      <section className="doc-section">
        <h2 className="doc-section__title">Behavior</h2>
        <div className="doc-behavior">
          <div className="doc-behavior__item">
            <span className="doc-behavior__icon"><StateIcon /></span>
            SearchBar is a <strong>controlled component</strong>. Always pass both <code>value</code> and <code>onChange</code> to manage state.
          </div>
          <div className="doc-behavior__item">
            <span className="doc-behavior__icon"><EditIcon /></span>
            The <code>onChange</code> handler receives the raw string value (not the event object), simplifying state management.
          </div>
          <div className="doc-behavior__item">
            <span className="doc-behavior__icon"><LayoutIcon /></span>
            The input uses <code>type="search"</code>, which gives mobile keyboards a search action button and allows browsers to show a clear (×) button.
          </div>
        </div>
      </section>
    </div>
  );
}
