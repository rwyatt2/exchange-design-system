import React from 'react';
import { Badge, DosDonts } from '../../components';
import { ArrowIcon, BulletIcon, ColorIcon, DoIcon, DontIcon, LabelIcon, LayoutIcon, PackageIcon, TypeIcon, WarningIcon, ZapIcon } from '../docIcons';

export default function BadgePage() {
  return (
    <div className="doc-page">
      <div className="doc-page__header">
        <h1 className="doc-page__title">Badge</h1>
        <p className="doc-page__subtitle">
          Badges label and categorize items. Used throughout search results to tag routes as
          Inbound/Outbound, data privacy levels (NPI, PCI), and status indicators.
        </p>
      </div>

      <section className="doc-section">
        <h2 className="doc-section__title">Variants</h2>
        <div className="doc-preview">
          <div className="doc-preview__row">
            <Badge>Default</Badge>
            <Badge variant="primary">Primary</Badge>
            <Badge variant="success">Success</Badge>
            <Badge variant="error">Error</Badge>
            <Badge variant="warning">Warning</Badge>
            <Badge variant="info">Info</Badge>
            <Badge variant="dark">Dark</Badge>
          </div>
        </div>
        <pre className="doc-code"><code>{`<Badge variant="primary">Inbound</Badge>
<Badge variant="info">NPI</Badge>
<Badge variant="warning">PCI</Badge>`}</code></pre>
      </section>

      <section className="doc-section">
        <h2 className="doc-section__title">Real-World Usage</h2>
        <div className="doc-preview">
          <div className="doc-preview__row">
            <Badge>Outbound</Badge>
            <Badge variant="info">NPI</Badge>
          </div>
          <div className="doc-preview__row">
            <Badge variant="primary">Inbound</Badge>
            <Badge variant="info">NPI</Badge>
            <Badge variant="warning">PCI</Badge>
          </div>
        </div>
      </section>

      <section className="doc-section">
        <h2 className="doc-section__title">Sizes</h2>
        <div className="doc-preview">
          <div className="doc-preview__row" style={{ alignItems: 'center' }}>
            <Badge size="sm">Small</Badge>
            <Badge size="md">Medium</Badge>
            <Badge size="lg">Large</Badge>
          </div>
        </div>
      </section>

      <section className="doc-section">
        <h2 className="doc-section__title">Props</h2>
        <table className="doc-props-table">
          <thead><tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
          <tbody>
            <tr><td><code>variant</code></td><td>string</td><td>'default'</td><td>default, primary, success, error, warning, info, dark</td></tr>
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
            Use badges for <strong>metadata labeling</strong>: route direction, data privacy, status. They're read-only indicators, not interactive elements.
          </div>
          <div className="doc-guideline">
            <span className="doc-guideline__icon"><BulletIcon /></span>
            Use <strong>semantic variants</strong> consistently: <code>success</code> for "Active", <code>error</code> for "Disabled", <code>warning</code> for sensitive data like PCI.
          </div>
          <div className="doc-guideline">
            <span className="doc-guideline__icon"><BulletIcon /></span>
            Use <strong>sm</strong> size when badges appear inside table rows or alongside other dense content.
          </div>
          <div className="doc-guideline">
            <span className="doc-guideline__icon"><BulletIcon /></span>
            Keep badge text to 1–2 words. Badges are labels, not descriptions.
          </div>
        </div>
      </section>

      {/* ── Do's and Don'ts ── */}
      <section className="doc-section">
        <h2 className="doc-section__title">Do's and Don'ts</h2>
        <DosDonts items={[
          {
            do: 'Use consistent variant colors for the same concept across the app (e.g., always "success" for Active status).',
            dont: 'Use different colors for the same status in different views: it confuses users.',
          },
          {
            do: 'Group related badges together with a small gap (4px) for readability.',
            dont: 'Overload a single row with more than 3–4 badges: it becomes noise.',
          },
          {
            do: 'Use badges alongside other content like labels or table cells for context.',
            dont: 'Use badges as standalone elements without surrounding context: they need a label nearby.',
          },
        ]} />
      </section>

      {/* ── Accessibility ── */}
      <section className="doc-section">
        <h2 className="doc-section__title">Accessibility</h2>
        <div className="doc-a11y">
          <div className="doc-a11y__item">
            <span className="doc-a11y__icon"><LabelIcon /></span>
            Badges render as <code>&lt;span&gt;</code> elements and are inline content. Screen readers announce them naturally within surrounding text.
          </div>
          <div className="doc-a11y__item">
            <span className="doc-a11y__icon"><ColorIcon /></span>
            All variant colors are chosen to meet WCAG AA contrast ratio (4.5:1) for the badge text against its background.
          </div>
          <div className="doc-a11y__item">
            <span className="doc-a11y__icon"><WarningIcon /></span>
            Don't rely on color alone to convey meaning: always pair badge color with descriptive text content (e.g., "Active" not just a green dot).
          </div>
        </div>
      </section>

      {/* ── Behavior ── */}
      <section className="doc-section">
        <h2 className="doc-section__title">Behavior</h2>
        <div className="doc-behavior">
          <div className="doc-behavior__item">
            <span className="doc-behavior__icon"><LayoutIcon /></span>
            Badges are inline-flex elements and flow naturally in text or alongside other inline content. They do not break lines.
          </div>
          <div className="doc-behavior__item">
            <span className="doc-behavior__icon"><TypeIcon /></span>
            Badge text is automatically set in a slightly smaller, semibold font with uppercase letter-spacing for maximum scanability.
          </div>
          <div className="doc-behavior__item">
            <span className="doc-behavior__icon"><PackageIcon /></span>
            Additional props are spread onto the root <code>&lt;span&gt;</code>, so you can pass <code>title</code>, <code>data-*</code>, or other HTML attributes.
          </div>
        </div>
      </section>
    </div>
  );
}
