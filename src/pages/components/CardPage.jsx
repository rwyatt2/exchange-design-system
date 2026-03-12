import React from 'react';
import { Card, DosDonts } from '../../components';
import { ArrowIcon, BulletIcon, DoIcon, DontIcon, KeyboardIcon, LabelIcon, LayoutIcon, SearchDocIcon, SparkIcon, StateIcon, ZapIcon } from '../docIcons';

export default function CardPage() {
  return (
    <div className="doc-page">
      <div className="doc-page__header">
        <h1 className="doc-page__title">Card</h1>
        <p className="doc-page__subtitle">
          Cards group related content and actions, used throughout The Exchange for dashboards,
          recommendation sections, and detail panels.
        </p>
      </div>

      <section className="doc-section">
        <h2 className="doc-section__title">Default Card</h2>
        <div className="doc-preview">
          <div className="doc-grid doc-grid--2">
            <Card title="APIs" subtitle="RESTAPI" footer="Enterprise Services">
              <p>This API provides functionality for creating and granting access to a lockbox.</p>
            </Card>
            <Card title="Datasets" hoverable footer="Enterprise Services • Digital">
              <p>Contains information on outbound message deliveries via digital messaging service.</p>
            </Card>
          </div>
        </div>
        <pre className="doc-code"><code>{`<Card title="APIs" subtitle="RESTAPI" footer="Enterprise Services">
  <p>Card content here.</p>
</Card>`}</code></pre>
      </section>

      <section className="doc-section">
        <h2 className="doc-section__title">Elevated & Hoverable</h2>
        <div className="doc-preview">
          <div className="doc-grid doc-grid--3">
            <Card title="APIs" variant="elevated" hoverable>
              <p>Elevated card with hover effect.</p>
            </Card>
            <Card title="Streams" variant="elevated" hoverable>
              <p>Discover and contribute to data streams.</p>
            </Card>
            <Card title="Apps" variant="elevated" hoverable>
              <p>Find applications to contribute to.</p>
            </Card>
          </div>
        </div>
      </section>

      <section className="doc-section">
        <h2 className="doc-section__title">Props</h2>
        <table className="doc-props-table">
          <thead><tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
          <tbody>
            <tr><td><code>title</code></td><td>string</td><td>: </td><td>Card heading</td></tr>
            <tr><td><code>subtitle</code></td><td>string</td><td>: </td><td>Uppercase subtitle label</td></tr>
            <tr><td><code>icon</code></td><td>node</td><td>: </td><td>Icon in header</td></tr>
            <tr><td><code>footer</code></td><td>node</td><td>: </td><td>Footer content</td></tr>
            <tr><td><code>variant</code></td><td>string</td><td>'default'</td><td>'default' or 'elevated'</td></tr>
            <tr><td><code>hoverable</code></td><td>boolean</td><td>false</td><td>Enables hover elevation</td></tr>
            <tr><td><code>onClick</code></td><td>function</td><td>: </td><td>Makes card clickable</td></tr>
          </tbody>
        </table>
      </section>

      {/* ── Usage Guidelines ── */}
      <section className="doc-section">
        <h2 className="doc-section__title">Usage Guidelines</h2>
        <div className="doc-guidelines">
          <div className="doc-guideline">
            <span className="doc-guideline__icon"><BulletIcon /></span>
            Use cards to group related information into scannable, contained blocks: ideal for catalog listings, search results, and dashboards.
          </div>
          <div className="doc-guideline">
            <span className="doc-guideline__icon"><BulletIcon /></span>
            Use <strong>hoverable</strong> when the card links to a detail page. Pair with <code>onClick</code> so hover signals interactivity.
          </div>
          <div className="doc-guideline">
            <span className="doc-guideline__icon"><BulletIcon /></span>
            Use <strong>elevated</strong> to lift cards visually above the surface: useful for featured items or category selectors.
          </div>
          <div className="doc-guideline">
            <span className="doc-guideline__icon"><BulletIcon /></span>
            Keep card content concise. A card is an entry point, not a detail page: limit body text to 2–3 lines.
          </div>
        </div>
      </section>

      {/* ── Do's and Don'ts ── */}
      <section className="doc-section">
        <h2 className="doc-section__title">Do's and Don'ts</h2>
        <DosDonts items={[
          {
            do: 'Use consistent card anatomy within a grid: all cards in a group should have the same fields (title, subtitle, footer).',
            dont: 'Mix cards with footers and without in the same row: it creates uneven heights.',
          },
          {
            do: 'Use subtitle for metadata labels like "RESTAPI" or "Streaming". Keep to 1–2 words.',
            dont: 'Put long descriptions in the subtitle: use the body area instead.',
          },
          {
            do: 'Add hoverable + onClick together so the hover effect signals that clicking is possible.',
            dont: "Enable hoverable on cards that are not interactive: it misleads users.",
          },
        ]} />
      </section>

      {/* ── Accessibility ── */}
      <section className="doc-section">
        <h2 className="doc-section__title">Accessibility</h2>
        <div className="doc-a11y">
          <div className="doc-a11y__item">
            <span className="doc-a11y__icon"><KeyboardIcon /></span>
            When <code>onClick</code> is provided, the card renders as a <code>&lt;button&gt;</code> element, making it focusable and activatable via <code>Enter</code> or <code>Space</code>.
          </div>
          <div className="doc-a11y__item">
            <span className="doc-a11y__icon"><LabelIcon /></span>
            The <code>title</code> prop renders as an <code>&lt;h3&gt;</code>, giving screen readers a heading to navigate by within card grids.
          </div>
          <div className="doc-a11y__item">
            <span className="doc-a11y__icon"><SearchDocIcon /></span>
            Non-interactive cards render as <code>&lt;div&gt;</code> elements: they are not focusable, which is correct behavior for display-only content.
          </div>
        </div>
      </section>

      {/* ── Behavior ── */}
      <section className="doc-section">
        <h2 className="doc-section__title">Behavior</h2>
        <div className="doc-behavior">
          <div className="doc-behavior__item">
            <span className="doc-behavior__icon"><StateIcon /></span>
            The root element switches between <code>&lt;div&gt;</code> and <code>&lt;button&gt;</code> automatically based on whether <code>onClick</code> is provided.
          </div>
          <div className="doc-behavior__item">
            <span className="doc-behavior__icon"><SparkIcon /></span>
            <code>hoverable</code> applies a smooth <code>translateY(-2px)</code> lift on hover with increased shadow, providing tactile depth feedback.
          </div>
          <div className="doc-behavior__item">
            <span className="doc-behavior__icon"><LayoutIcon /></span>
            Cards fill the width of their grid cell. Use <code>doc-grid--2</code> or <code>doc-grid--3</code> layout utilities to control column count.
          </div>
        </div>
      </section>
    </div>
  );
}
