import React from 'react';
import { Tooltip, Button } from '../../components';
import DosDonts from '../../components/DosDonts/DosDonts';
import { A11yIcon, KeyboardIcon, LabelIcon } from '../docIcons';
import { Printer } from 'lucide-react';

export default function TooltipPage() {
  return (
    <div className="doc-page">
      <div className="doc-page__header">
        <h1 className="doc-page__title">Tooltip</h1>
        <p className="doc-page__subtitle">
          Tooltips display informative text when users hover over, focus on, or tap an element.
        </p>
      </div>

      <section className="doc-section">
        <h2 className="doc-section__title">Usage</h2>
        <p style={{ color: 'var(--exds-color-text-secondary)', marginBottom: '16px', lineHeight: 1.6 }}>
          Use Tooltips to provide context or explain the function of interactive elements that do not
          have text labels, such as icon-only buttons.
        </p>
        <div className="doc-preview" style={{ padding: '4rem 2rem', textAlign: 'center' }}>
          <Tooltip content="Print this document">
            <Button variant="outline" size="md">
              <Printer size={16} strokeWidth={2} style={{ marginRight: '6px' }} aria-hidden="true" />
              Print
            </Button>
          </Tooltip>
        </div>
      </section>

      <section className="doc-section">
        <h2 className="doc-section__title">Positions</h2>
        <p style={{ color: 'var(--exds-color-text-secondary)', marginBottom: '16px' }}>
          Tooltips can be positioned relative to the triggering element: <code>top</code>, <code>right</code>, <code>bottom</code>, or <code>left</code>.
        </p>
        <div className="doc-preview" style={{ padding: '4rem 2rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem', justifyItems: 'center' }}>
            <Tooltip content="Top positioned tooltip" position="top">
              <Button variant="secondary" size="md">Top</Button>
            </Tooltip>
            <Tooltip content="Bottom positioned tooltip" position="bottom">
              <Button variant="secondary" size="md">Bottom</Button>
            </Tooltip>
            <Tooltip content="Left positioned tooltip" position="left">
              <Button variant="secondary" size="md">Left</Button>
            </Tooltip>
            <Tooltip content="Right positioned tooltip" position="right">
              <Button variant="secondary" size="md">Right</Button>
            </Tooltip>
          </div>
        </div>
      </section>

      <section className="doc-section">
        <h2 className="doc-section__title">Guidelines</h2>
        <DosDonts
          items={[
            {
              do: 'Use Tooltips for brief, supplementary information.',
              dont: "Don't put essential information inside a tooltip — they aren't always discovered.",
            },
            {
              do: 'Use Tooltips for icon-only buttons to explain their action.',
              dont: "Don't use Tooltips on elements that aren't interactive (use normal text instead).",
            },
            {
              do: 'Keep tooltip text concise: usually no more than a few words or a short sentence.',
              dont: "Don't place interactive elements like links or buttons inside a tooltip — use a Popover instead.",
            },
          ]}
        />
      </section>

      <section className="doc-section">
        <h2 className="doc-section__title">Accessibility</h2>
        <div className="doc-a11y">
          <div className="doc-a11y__item">
            <span className="doc-a11y__icon"><LabelIcon /></span>
            <span><strong>Role:</strong> Uses <code>role="tooltip"</code> on the tooltip panel and <code>aria-describedby</code> on the trigger to associate them for assistive technologies.</span>
          </div>
          <div className="doc-a11y__item">
            <span className="doc-a11y__icon"><KeyboardIcon /></span>
            <span><strong>Keyboard Support:</strong> When the trigger receives keyboard focus, the tooltip appears. Pressing <code>Escape</code> should dismiss it.</span>
          </div>
          <div className="doc-a11y__item">
            <span className="doc-a11y__icon"><A11yIcon /></span>
            <span><strong>Persistent Visibility:</strong> Hovering the tooltip content itself does not dismiss it, ensuring users can read longer tooltip text without it disappearing.</span>
          </div>
        </div>
      </section>
    </div>
  );
}
