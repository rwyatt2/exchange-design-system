import React, { useState } from 'react';
import { TextInput, Select, RadioGroup, Checkbox, Button, DosDonts } from '../../components';
import { ErrorIcon, KeyboardIcon, LabelIcon } from '../docIcons';

export default function FormPatternPage() {
  const [formData, setFormData] = useState({
    routeName: '',
    businessLead: '',
    lob: 'enterprise',
    direction: 'inbound',
    npi: true,
    pci: false,
  });

  const update = (field) => (val) => setFormData({ ...formData, [field]: val });

  return (
    <div className="doc-page">
      <div className="doc-page__header">
        <h1 className="doc-page__title">Form Layout</h1>
        <p className="doc-page__subtitle">
          How to compose form inputs into structured, accessible data entry forms. This pattern is used
          for route creation, asset registration, and data entry workflows.
        </p>
      </div>

      {/* ── Live Example ── */}
      <section className="doc-section">
        <h2 className="doc-section__title">Live Example</h2>
        <div className="doc-preview" style={{ maxWidth: '480px' }}>
          <div style={{ display: 'grid', gap: '20px' }}>
            <TextInput
              label="Route Name"
              placeholder="e.g. FIS.S3.AM.UATE"
              helperText="Required: alphanumeric and dots only"
              value={formData.routeName}
              onChange={(e) => update('routeName')(e.target.value)}
            />
            <TextInput
              label="Business Lead"
              placeholder="e.g. Jane Smith"
              value={formData.businessLead}
              onChange={(e) => update('businessLead')(e.target.value)}
            />
            <Select
              label="Line of Business"
              value={formData.lob}
              onChange={update('lob')}
              options={[
                { value: 'enterprise', label: 'Enterprise Services' },
                { value: 'commercial', label: 'Commercial Bank' },
                { value: 'card', label: 'Card' },
                { value: 'financial', label: 'Financial Services' },
              ]}
            />
            <RadioGroup
              label="Direction"
              name="direction"
              direction="horizontal"
              value={formData.direction}
              onChange={update('direction')}
              options={[
                { value: 'inbound', label: 'Inbound' },
                { value: 'outbound', label: 'Outbound' },
              ]}
            />
            <div>
              <p style={{
                fontSize: 'var(--exds-text-sm)',
                fontWeight: 600,
                marginBottom: '10px',
                color: 'var(--exds-color-text-secondary)',
              }}>Data Privacy</p>
              <div style={{ display: 'flex', gap: '20px' }}>
                <Checkbox label="NPI" checked={formData.npi} onChange={update('npi')} />
                <Checkbox label="PCI" checked={formData.pci} onChange={update('pci')} />
              </div>
            </div>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end', paddingTop: '8px', borderTop: '1px solid var(--exds-color-border-subtle)' }}>
              <Button variant="ghost">Cancel</Button>
              <Button>Create Route</Button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Structure ── */}
      <section className="doc-section">
        <h2 className="doc-section__title">Structure</h2>
        <pre className="doc-code"><code>{`<form style={{ display: 'grid', gap: '20px' }}>
  <TextInput label="Route Name" placeholder="..." helperText="Required" />
  <TextInput label="Business Lead" placeholder="..." />
  <Select label="Line of Business" options={lobOptions} />
  <RadioGroup label="Direction" options={dirOptions} direction="horizontal" />
  
  <div>  {/* Checkbox group */}
    <label>Data Privacy</label>
    <Checkbox label="NPI" />
    <Checkbox label="PCI" />
  </div>

  <div>  {/* Form actions */}
    <Button variant="ghost">Cancel</Button>
    <Button type="submit">Create Route</Button>
  </div>
</form>`}</code></pre>
      </section>

      {/* ── Do's and Don'ts ── */}
      <section className="doc-section">
        <h2 className="doc-section__title">Do's and Don'ts</h2>
        <DosDonts items={[
          {
            do: 'Stack form fields vertically with consistent 20px gap. Align labels and inputs on the same vertical axis.',
            dont: 'Use a multi-column form layout for short forms: it creates unnecessary eye zigzagging.',
          },
          {
            do: 'Place the primary action (Submit/Create) at the bottom-right. Place Cancel to its left.',
            dont: 'Put action buttons at the top of the form or scatter them throughout.',
          },
          {
            do: 'Use RadioGroup for 2–4 mutually exclusive options. Use Select for 5+ options.',
            dont: 'Use checkboxes for mutually exclusive choices: radio buttons enforce single-select.',
          },
        ]} />
      </section>

      {/* ── Accessibility ── */}
      <section className="doc-section">
        <h2 className="doc-section__title">Accessibility Notes</h2>
        <div className="doc-a11y">
          <div className="doc-a11y__item">
            <span className="doc-a11y__icon"><LabelIcon /></span>
            Every input must have a visible label. Use <code>helperText</code> for supplemental instructions, not as a replacement.
          </div>
          <div className="doc-a11y__item">
            <span className="doc-a11y__icon"><KeyboardIcon /></span>
            Tab order should follow the visual order: top to bottom, left to right. Native form elements handle this automatically.
          </div>
          <div className="doc-a11y__item">
            <span className="doc-a11y__icon"><ErrorIcon /></span>
            Show validation errors inline at the field level using <code>error</code> prop, not as a generic banner.
          </div>
        </div>
      </section>
    </div>
  );
}
