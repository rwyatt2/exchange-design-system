import React, { useState } from 'react';
import Toggle from '../../components/Toggle/Toggle';
import Tag from '../../components/Tag/Tag';
import ProgressBar from '../../components/ProgressBar/ProgressBar';
import { DoIcon, DontIcon, BulletIcon, ArrowIcon, ZapIcon } from '../docIcons';

const SKILL_LEVELS = [
  { value: 0,   label: 'Beginner', variant: 'error' },
  { value: 33,  label: 'Intermediate', variant: 'warning' },
  { value: 66,  label: 'Advanced', variant: 'default' },
  { value: 100, label: 'Expert', variant: 'success' },
];

const INTEREST_TAGS = ['Market Structure', 'FX', 'Crypto', 'Rates', 'Commodities', 'Equities'];

export default function DataEntryPatternPage() {
  const [notifications, setNotifications] = useState({ email: true, sms: false, push: true });
  const [interests, setInterests] = useState(['FX', 'Crypto']);
  const [skill, setSkill] = useState(33);

  const toggleInterest = (tag) => {
    setInterests((prev) => prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]);
  };

  const skillDisplay = SKILL_LEVELS.reduce((acc, s) => (skill >= s.value ? s : acc));

  return (
    <div className="doc-page">
      <div className="doc-page__header">
        <h1 className="doc-page__title">Data Entry</h1>
        <p className="doc-page__subtitle">
          Data entry patterns cover more than text inputs: they include preference
          settings, multi-select tagging, and scale inputs. This page documents how
          to compose Toggle, Tag, ProgressBar, and form controls into coherent
          data entry experiences.
        </p>
      </div>

      {/* Preference panel */}
      <section className="doc-section">
        <h2 className="doc-section__title">Preference / Settings Panel</h2>
        <p style={{ color: 'var(--exds-color-text-secondary)', marginBottom: '16px', fontSize: 'var(--exds-text-sm)' }}>
          Use Toggle for binary preferences that apply immediately. Group related preferences under labeled Dividers.
        </p>
        <div className="doc-preview">
          <div style={{ maxWidth: '380px', display: 'flex', flexDirection: 'column', gap: '0' }}>
            <p style={{ fontWeight: 600, fontSize: 'var(--exds-text-xs)', color: 'var(--exds-color-text-tertiary)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '12px' }}>Notification Preferences</p>
            {[
              { key: 'email', label: 'Email alerts',      sub: 'Daily summaries and critical alerts' },
              { key: 'sms',   label: 'SMS notifications', sub: 'Urgent alerts only' },
              { key: 'push',  label: 'Push notifications', sub: 'Real-time price and trade alerts' },
            ].map(({ key, label, sub }) => (
              <div key={key} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '14px 0', borderBottom: '1px solid var(--exds-color-border-subtle)' }}>
                <div>
                  <div style={{ fontSize: 'var(--exds-text-sm)', fontWeight: 500, color: 'var(--exds-color-text-primary)' }}>{label}</div>
                  <div style={{ fontSize: 'var(--exds-text-xs)', color: 'var(--exds-color-text-tertiary)', marginTop: '2px' }}>{sub}</div>
                </div>
                <Toggle
                  id={`pref-${key}`}
                  checked={notifications[key]}
                  onChange={(v) => setNotifications((p) => ({ ...p, [key]: v }))}
                  size="sm"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Multi-select tags */}
      <section className="doc-section">
        <h2 className="doc-section__title">Multi-Select Tags</h2>
        <p style={{ color: 'var(--exds-color-text-secondary)', marginBottom: '16px', fontSize: 'var(--exds-text-sm)' }}>
          Use Tag for multi-value selection when options are predefined and the count is manageable (2–15 options). Beyond 15, use a searchable multi-select dropdown.
        </p>
        <div className="doc-preview">
          <p style={{ fontSize: 'var(--exds-text-xs)', color: 'var(--exds-color-text-tertiary)', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 600, marginBottom: '10px' }}>Areas of Interest</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {INTEREST_TAGS.map((tag) => (
              <Tag
                key={tag}
                label={tag}
                variant={interests.includes(tag) ? 'filled' : 'outline'}
                onRemove={() => toggleInterest(tag)}
              />
            ))}
          </div>
          <p style={{ marginTop: '12px', fontSize: 'var(--exds-text-xs)', color: 'var(--exds-color-text-tertiary)', fontFamily: 'var(--exds-font-mono)' }}>
            Selected: {interests.length > 0 ? interests.join(', ') : 'none'}
          </p>
        </div>
      </section>

      {/* Skill level / scale */}
      <section className="doc-section">
        <h2 className="doc-section__title">Skill Level / Scale Input</h2>
        <p style={{ color: 'var(--exds-color-text-secondary)', marginBottom: '16px', fontSize: 'var(--exds-text-sm)' }}>
          For scalar, continuous values, a native range input + ProgressBar creates an accessible and visually clear control.
        </p>
        <div className="doc-preview" style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '400px' }}>
          <ProgressBar value={skill} label={`Trading Experience: ${skillDisplay.label}`} variant={skillDisplay.variant} size="md" showValue />
          <input type="range" min={0} max={100} value={skill} onChange={(e) => setSkill(Number(e.target.value))} style={{ width: '100%' }} />
        </div>
      </section>

      {/* Input field rules */}
      <section className="doc-section">
        <h2 className="doc-section__title">Input Field Composition Rules</h2>
        <table className="doc-props-table">
          <thead><tr><th>Data type</th><th>Component</th></tr></thead>
          <tbody>
            <tr><td>Free text (one line)</td><td>TextInput</td></tr>
            <tr><td>Free text (multi-line)</td><td>TextInput with <code>multiline</code></td></tr>
            <tr><td>Binary on/off preference</td><td>Toggle</td></tr>
            <tr><td>Binary selection in a form</td><td>Checkbox</td></tr>
            <tr><td>One choice from 2–5 options</td><td>RadioGroup</td></tr>
            <tr><td>One choice from 5+ options</td><td>Select dropdown</td></tr>
            <tr><td>Multiple from a fixed small set</td><td>Tag (multi-select)</td></tr>
            <tr><td>Multiple from a large set</td><td>Searchable multi-select (combobox)</td></tr>
            <tr><td>Continuous value (scale, percentage)</td><td>Range slider + ProgressBar</td></tr>
          </tbody>
        </table>
      </section>

      {/* Do's and Don'ts */}
      <section className="doc-section">
        <h2 className="doc-section__title">Do's and Don'ts</h2>
        <div className="doc-guidelines">
          <div className="doc-guideline"><span className="doc-guideline__icon"><DoIcon /></span><span><strong>Do</strong> group related form controls under section headings or Dividers with labels to reduce cognitive load.</span></div>
          <div className="doc-guideline"><span className="doc-guideline__icon"><DontIcon /></span><span><strong>Don't</strong> mix Toggle and Checkbox for the same type of selection: they carry different mental models.</span></div>
          <div className="doc-guideline"><span className="doc-guideline__icon"><DoIcon /></span><span><strong>Do</strong> always show current selection count for multi-select Tag groups: "3 selected" vs. nothing gives users confidence.</span></div>
          <div className="doc-guideline"><span className="doc-guideline__icon"><DontIcon /></span><span><strong>Don't</strong> use more than 3 data entry component types on a single form: it increases learning cost.</span></div>
        </div>
      </section>
    </div>
  );
}
