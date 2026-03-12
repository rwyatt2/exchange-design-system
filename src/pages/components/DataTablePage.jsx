import React from 'react';
import { DataTable, Badge, DosDonts } from '../../components';
import { ArrowIcon, BulletIcon, DoIcon, DontIcon, KeyboardIcon, LabelIcon, MouseIcon, RulerIcon, SearchDocIcon, StateIcon, ZapIcon } from '../docIcons';

const sampleData = [
  { id: 1, name: 'FIS.S3.AM.UATE.AMMSFE01.S3UNLD.D.+', routeId: '905730', direction: 'Outbound', privacy: ['NPI'], status: 'Active' },
  { id: 2, name: 'TCHPT_TP1_accounts_weekly_init.dat', routeId: '736502', direction: 'Outbound', privacy: ['PCI'], status: 'Active' },
  { id: 3, name: 'FIS.S3.UATE.TSTW.IM.IM.U01.IMGENT.ALLSEGS.D.+', routeId: '905748', direction: 'Inbound', privacy: [], status: 'Active' },
  { id: 4, name: 'ACRS.COF.HBC.TEST.VENDRCAP.TXT', routeId: '905728', direction: 'Inbound', privacy: ['NPI', 'PCI'], status: 'Disabled' },
];

const columns = [
  { key: 'name', label: 'File Name', render: (val) => (
    <span style={{ color: 'var(--exds-color-text-link)', fontWeight: 500, fontSize: 'var(--exds-text-sm)' }}>{val}</span>
  )},
  { key: 'routeId', label: 'Route ID' },
  { key: 'direction', label: 'Direction', render: (val) => <Badge>{val}</Badge> },
  { key: 'privacy', label: 'Data Privacy', render: (val) => (
    <div style={{ display: 'flex', gap: '4px' }}>
      {val.map((p) => <Badge key={p} variant="info" size="sm">{p}</Badge>)}
      {val.length === 0 && <span style={{ color: 'var(--exds-color-text-disabled)' }}>: </span>}
    </div>
  )},
  { key: 'status', label: 'Status', render: (val) => (
    <Badge variant={val === 'Active' ? 'success' : 'default'} size="sm">{val}</Badge>
  )},
];

export default function DataTablePage() {
  return (
    <div className="doc-page">
      <div className="doc-page__header">
        <h1 className="doc-page__title">DataTable</h1>
        <p className="doc-page__subtitle">
          Data tables for displaying structured information, used for route search results,
          file transfer listings, and ownership confirmation views.
        </p>
      </div>
      <section className="doc-section">
        <h2 className="doc-section__title">Default</h2>
        <div className="doc-preview" style={{ padding: 0, overflow: 'hidden' }}>
          <DataTable
            columns={columns}
            data={sampleData}
            onRowClick={(row) => console.log('Clicked:', row.name)}
          />
        </div>
        <pre className="doc-code"><code>{`const columns = [
  { key: 'name', label: 'File Name', render: (val) => <Link>{val}</Link> },
  { key: 'routeId', label: 'Route ID' },
  { key: 'direction', label: 'Direction', render: (val) => <Badge>{val}</Badge> },
  { key: 'privacy', label: 'Data Privacy', render: (val) => (
    val.map((p) => <Badge key={p} variant="info">{p}</Badge>)
  )},
];

<DataTable columns={columns} data={data} onRowClick={handleClick} />`}</code></pre>
      </section>
      <section className="doc-section">
        <h2 className="doc-section__title">Empty State</h2>
        <div className="doc-preview" style={{ padding: 0, overflow: 'hidden' }}>
          <DataTable
            columns={[{ key: 'name', label: 'Name' }, { key: 'status', label: 'Status' }]}
            data={[]}
            emptyMessage="No routes found matching your criteria."
          />
        </div>
      </section>
      <section className="doc-section">
        <h2 className="doc-section__title">Props</h2>
        <table className="doc-props-table">
          <thead><tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
          <tbody>
            <tr><td><code>columns</code></td><td>array</td><td>: </td><td>Array of {'{ key, label, render?, width?, align? }'}</td></tr>
            <tr><td><code>data</code></td><td>array</td><td>: </td><td>Array of row objects</td></tr>
            <tr><td><code>onRowClick</code></td><td>function</td><td>: </td><td>Row click handler (receives row object)</td></tr>
            <tr><td><code>emptyMessage</code></td><td>string</td><td>'No data available'</td><td>Empty state text</td></tr>
          </tbody>
        </table>
      </section>

      {/* ── Usage Guidelines ── */}
      <section className="doc-section">
        <h2 className="doc-section__title">Usage Guidelines</h2>
        <div className="doc-guidelines">
          <div className="doc-guideline">
            <span className="doc-guideline__icon"><BulletIcon /></span>
            Use DataTable for <strong>structured, multi-column data</strong>: search results, file listings, ownership records. For simpler lists, use Card grids.
          </div>
          <div className="doc-guideline">
            <span className="doc-guideline__icon"><BulletIcon /></span>
            Use <code>render</code> functions for columns that need custom formatting: links, badges, status indicators, privacy tags.
          </div>
          <div className="doc-guideline">
            <span className="doc-guideline__icon"><BulletIcon /></span>
            Always provide a meaningful <code>emptyMessage</code> that explains why there is no data and suggests a next action.
          </div>
          <div className="doc-guideline">
            <span className="doc-guideline__icon"><BulletIcon /></span>
            Use <code>onRowClick</code> for navigation to detail pages. The entire row becomes clickable with a hover cursor.
          </div>
        </div>
      </section>

      {/* ── Do's and Don'ts ── */}
      <section className="doc-section">
        <h2 className="doc-section__title">Do's and Don'ts</h2>
        <DosDonts items={[
          {
            do: 'Limit columns to 5–7 for readability. Use render functions to combine related data into one cell.',
            dont: 'Show more than 7 columns: horizontal scrolling and cramped cells make data hard to scan.',
          },
          {
            do: 'Provide a row id in each data object for stable React keys. The component falls back to array index.',
            dont: 'Rely on array index keys for dynamic data (sorting/filtering): it causes render bugs.',
          },
          {
            do: 'Set column width and alignment for numeric or narrow columns (e.g., Route ID, Status).',
            dont: 'Let all columns auto-size: the first text-heavy column will dominate the layout.',
          },
        ]} />
      </section>

      {/* ── Accessibility ── */}
      <section className="doc-section">
        <h2 className="doc-section__title">Accessibility</h2>
        <div className="doc-a11y">
          <div className="doc-a11y__item">
            <span className="doc-a11y__icon"><LabelIcon /></span>
            Uses semantic <code>&lt;table&gt;</code>, <code>&lt;thead&gt;</code>, <code>&lt;tbody&gt;</code>, <code>&lt;th&gt;</code>, and <code>&lt;td&gt;</code> elements for proper table semantics.
          </div>
          <div className="doc-a11y__item">
            <span className="doc-a11y__icon"><KeyboardIcon /></span>
            Clickable rows have a pointer cursor but are <code>&lt;tr&gt;</code> elements. For full keyboard accessibility, consider placing a link or button in the primary column.
          </div>
          <div className="doc-a11y__item">
            <span className="doc-a11y__icon"><SearchDocIcon /></span>
            Column headers (<code>&lt;th&gt;</code>) provide scope for screen readers, allowing users to understand what data each cell represents.
          </div>
        </div>
      </section>

      {/* ── Behavior ── */}
      <section className="doc-section">
        <h2 className="doc-section__title">Behavior</h2>
        <div className="doc-behavior">
          <div className="doc-behavior__item">
            <span className="doc-behavior__icon"><StateIcon /></span>
            The <code>render</code> function for each column receives two arguments: the cell value and the full row object, allowing cross-column logic.
          </div>
          <div className="doc-behavior__item">
            <span className="doc-behavior__icon"><RulerIcon /></span>
            The table wrapper provides horizontal scroll when content overflows, maintaining the table layout on narrow viewports.
          </div>
          <div className="doc-behavior__item">
            <span className="doc-behavior__icon"><MouseIcon /></span>
            When <code>onRowClick</code> is provided, rows get a hover background and pointer cursor via the <code>exds-table__row--clickable</code> class.
          </div>
        </div>
      </section>
    </div>
  );
}
