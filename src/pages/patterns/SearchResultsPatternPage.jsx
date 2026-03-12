import React, { useState } from 'react';
import { SearchBar, Tabs, Checkbox, DataTable, Badge, DosDonts } from '../../components';

const sampleData = [
  { id: 1, name: 'FIS.S3.AM.UATE.AMMSFE01', routeId: '905730', direction: 'Outbound', privacy: ['NPI'], status: 'Active' },
  { id: 2, name: 'TCHPT_TP1_accounts_weekly', routeId: '736502', direction: 'Outbound', privacy: ['PCI'], status: 'Active' },
  { id: 3, name: 'FIS.S3.UATE.TSTW.IM.U01', routeId: '905748', direction: 'Inbound', privacy: [], status: 'Active' },
  { id: 4, name: 'ACRS.COF.HBC.TEST.VENDRCAP', routeId: '905728', direction: 'Inbound', privacy: ['NPI', 'PCI'], status: 'Disabled' },
];

const columns = [
  { key: 'name', label: 'File Name', render: (val) => (
    <span style={{ color: 'var(--exds-color-text-link)', fontWeight: 500, fontSize: 'var(--exds-text-sm)' }}>{val}</span>
  )},
  { key: 'routeId', label: 'Route ID' },
  { key: 'direction', label: 'Direction', render: (val) => <Badge>{val}</Badge> },
  { key: 'privacy', label: 'Privacy', render: (val) => (
    <div style={{ display: 'flex', gap: '4px' }}>
      {val.map((p) => <Badge key={p} variant="info" size="sm">{p}</Badge>)}
      {val.length === 0 && <span style={{ color: 'var(--exds-color-text-disabled)' }}>: </span>}
    </div>
  )},
  { key: 'status', label: 'Status', render: (val) => (
    <Badge variant={val === 'Active' ? 'success' : 'default'} size="sm">{val}</Badge>
  )},
];

export default function SearchResultsPatternPage() {
  const [query, setQuery] = useState('');
  const [activeTab, setActiveTab] = useState('all');
  const [filters, setFilters] = useState({ active: true, disabled: false });

  return (
    <div className="doc-page">
      <div className="doc-page__header">
        <h1 className="doc-page__title">Search Results</h1>
        <p className="doc-page__subtitle">
          How to compose SearchBar, Tabs, filter checkboxes, DataTable, and Badge into a full
          search results experience: the primary interaction pattern in The Exchange.
        </p>
      </div>

      {/* ── Live Example ── */}
      <section className="doc-section">
        <h2 className="doc-section__title">Live Example</h2>
        <div className="doc-preview" style={{ padding: 0, overflow: 'hidden' }}>
          {/* Search + Tabs header */}
          <div style={{ padding: 'var(--exds-space-5) var(--exds-space-5) 0' }}>
            <SearchBar
              placeholder="Search for APIs, Data, Streams and Features"
              value={query}
              onChange={setQuery}
              size="lg"
            />
            <div style={{ marginTop: 'var(--exds-space-4)' }}>
              <Tabs
                items={[
                  { id: 'all', label: 'All' },
                  { id: 'apis', label: 'APIs' },
                  { id: 'data', label: 'Data' },
                  { id: 'streams', label: 'Streams' },
                  { id: 'transfers', label: 'File Transfers' },
                ]}
                activeId={activeTab}
                onChange={setActiveTab}
              />
            </div>
          </div>
          {/* Content: Sidebar + Table */}
          <div style={{ display: 'flex' }}>
            {/* Filter sidebar */}
            <div style={{
              width: '200px',
              padding: 'var(--exds-space-5)',
              borderRight: '1px solid var(--exds-color-border-subtle)',
              flexShrink: 0,
            }}>
              <p style={{
                fontSize: 'var(--exds-text-xs)',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: 'var(--exds-tracking-caps)',
                color: 'var(--exds-color-text-tertiary)',
                marginBottom: 'var(--exds-space-3)',
              }}>Status</p>
              <div style={{ display: 'grid', gap: '10px' }}>
                <Checkbox label="Active" checked={filters.active} onChange={(v) => setFilters({...filters, active: v})} />
                <Checkbox label="Disabled" checked={filters.disabled} onChange={(v) => setFilters({...filters, disabled: v})} />
              </div>
            </div>
            {/* Results table */}
            <div style={{ flex: 1, overflow: 'auto' }}>
              <DataTable columns={columns} data={sampleData} onRowClick={(row) => console.log(row)} />
            </div>
          </div>
        </div>
      </section>

      {/* ── Structure ── */}
      <section className="doc-section">
        <h2 className="doc-section__title">Structure</h2>
        <pre className="doc-code"><code>{`<div className="search-results">
  {/* Header: Search + Tabs */}
  <SearchBar placeholder="Search..." value={query} onChange={setQuery} size="lg" />
  <Tabs items={tabItems} activeId={activeTab} onChange={setActiveTab} />

  <div className="search-results__body">
    {/* Sidebar filters */}
    <aside className="search-results__filters">
      <h4>Status</h4>
      <Checkbox label="Active" checked={...} onChange={...} />
      <Checkbox label="Disabled" checked={...} onChange={...} />
    </aside>

    {/* Results table */}
    <DataTable columns={columns} data={filteredData} onRowClick={handleClick} />
  </div>
</div>`}</code></pre>
      </section>

      {/* ── Do's and Don'ts ── */}
      <section className="doc-section">
        <h2 className="doc-section__title">Do's and Don'ts</h2>
        <DosDonts items={[
          {
            do: 'Keep the search bar prominent at the top. Use the lg size for the primary search experience.',
            dont: 'Hide the search behind a button or icon: search is the primary entry point for The Exchange.',
          },
          {
            do: 'Show a meaningful empty state with actionable guidance when no results match.',
            dont: 'Show a blank table with no message when filters yield no results.',
          },
          {
            do: 'Use badges in table cells to encode metadata (direction, privacy, status) for quick scanning.',
            dont: 'Put long text descriptions in table cells: use badges and short labels for density.',
          },
        ]} />
      </section>
    </div>
  );
}
