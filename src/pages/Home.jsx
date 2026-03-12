import React from 'react';
import { Link } from 'react-router-dom';
import { Rocket, Palette, LayoutGrid } from 'lucide-react';

export default function Home() {
  return (
    <div className="doc-page">
      <div className="doc-page__header">
        <h1 className="doc-page__title">Exchange Design System</h1>
        <p className="doc-page__subtitle">
          A comprehensive design system reverse-engineered from The Exchange: an enterprise data
          exchange platform enabling teams to discover, share, and manage APIs, data streams,
          and file transfers across the organization.
        </p>
      </div>

      {/* Case Study Intro */}
      <section className="doc-section">
        <h2 className="doc-section__title">Case Study Overview</h2>
        <div style={{ display: 'grid', gap: '24px' }}>
          <div className="doc-preview">
            <h3 style={{ marginBottom: '8px', fontSize: 'var(--exds-text-lg)', fontWeight: 600 }}>The Challenge</h3>
            <p style={{ color: 'var(--exds-color-text-secondary)', lineHeight: 1.7 }}>
              The Exchange platform grew organically across multiple teams, leading to inconsistent UI patterns,
              duplicated components, and divergent design decisions. The platform needed a unified design language
              to ensure consistency, accelerate development, and improve the user experience across all product areas.
            </p>
          </div>

          <div className="doc-preview">
            <h3 style={{ marginBottom: '8px', fontSize: 'var(--exds-text-lg)', fontWeight: 600 }}>The Approach</h3>
            <p style={{ color: 'var(--exds-color-text-secondary)', lineHeight: 1.7 }}>
              Through a systematic audit of the existing Figma designs: analyzing 15 pages containing over 250 screens : 
              design tokens were extracted by frequency analysis of 10,000+ elements. Colors, typography, spacing,
              and component patterns were cataloged and normalized into a cohesive token system.
            </p>
          </div>

          <div className="doc-preview">
            <h3 style={{ marginBottom: '8px', fontSize: 'var(--exds-text-lg)', fontWeight: 600 }}>The Outcome</h3>
            <p style={{ color: 'var(--exds-color-text-secondary)', lineHeight: 1.7 }}>
              A complete, coded design system with 21 reusable components, a structured token architecture
              covering colors, typography, and spacing, and this interactive documentation site: enabling
              developers and designers to build consistent experiences faster.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="doc-section">
        <h2 className="doc-section__title">At a Glance</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '16px',
        }}>
          {[
            { num: '21', label: 'Components', desc: 'Reusable UI building blocks' },
            { num: '70+', label: 'Design Tokens', desc: 'Colors, type, spacing' },
            { num: '15', label: 'Figma Pages', desc: 'Analyzed for patterns' },
            { num: '10K+', label: 'Elements', desc: 'Frequency analyzed' },
          ].map((stat) => (
            <div key={stat.label} className="doc-preview" style={{ textAlign: 'center', padding: '24px 16px' }}>
              <div style={{
                fontSize: 'var(--exds-text-4xl)',
                fontWeight: 700,
                color: 'var(--exds-color-primary)',
                lineHeight: 1
              }}>{stat.num}</div>
              <div style={{
                fontSize: 'var(--exds-text-md)',
                fontWeight: 600,
                marginTop: '8px',
                color: 'var(--exds-color-text-primary)'
              }}>{stat.label}</div>
              <div style={{
                fontSize: 'var(--exds-text-sm)',
                color: 'var(--exds-color-text-tertiary)',
                marginTop: '4px'
              }}>{stat.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Quick Links */}
      <section className="doc-section">
        <h2 className="doc-section__title">Explore</h2>
        <div className="doc-grid doc-grid--3">
          <Link to="/getting-started" className="doc-preview" style={{ textDecoration: 'none', display: 'block' }}>
            <div style={{ marginBottom: '10px', color: 'var(--exds-color-primary)' }}>
              <Rocket size={28} strokeWidth={1.5} />
            </div>
            <h3 style={{ fontSize: 'var(--exds-text-md)', fontWeight: 600, marginBottom: '4px' }}>Getting Started</h3>
            <p style={{ fontSize: 'var(--exds-text-sm)', color: 'var(--exds-color-text-tertiary)' }}>
              Learn how to install and use the design system
            </p>
          </Link>
          <Link to="/tokens/colors" className="doc-preview" style={{ textDecoration: 'none', display: 'block' }}>
            <div style={{ marginBottom: '10px', color: 'var(--exds-color-primary)' }}>
              <Palette size={28} strokeWidth={1.5} />
            </div>
            <h3 style={{ fontSize: 'var(--exds-text-md)', fontWeight: 600, marginBottom: '4px' }}>Design Tokens</h3>
            <p style={{ fontSize: 'var(--exds-text-sm)', color: 'var(--exds-color-text-tertiary)' }}>
              Colors, typography, and spacing primitives
            </p>
          </Link>
          <Link to="/components/button" className="doc-preview" style={{ textDecoration: 'none', display: 'block' }}>
            <div style={{ marginBottom: '10px', color: 'var(--exds-color-primary)' }}>
              <LayoutGrid size={28} strokeWidth={1.5} />
            </div>
            <h3 style={{ fontSize: 'var(--exds-text-md)', fontWeight: 600, marginBottom: '4px' }}>Components</h3>
            <p style={{ fontSize: 'var(--exds-text-sm)', color: 'var(--exds-color-text-tertiary)' }}>
              21 production-ready UI components
            </p>
          </Link>
        </div>
      </section>

      {/* Design Principles */}
      <section className="doc-section">
        <h2 className="doc-section__title">Design Principles</h2>
        <div style={{ display: 'grid', gap: '16px' }}>
          {[
            { title: 'Data-First', desc: 'Interfaces prioritize scannable data presentation with clear hierarchy, using tables, cards, and lists to surface information efficiently.' },
            { title: 'Enterprise Clarity', desc: 'Clean, professional aesthetics with high contrast text, generous whitespace, and structured layouts that reduce cognitive load for complex workflows.' },
            { title: 'Consistent Navigation', desc: 'Persistent global header, tabbed navigation, and sidebar filters create predictable wayfinding across all product areas.' },
            { title: 'Accessible by Default', desc: 'High-contrast color pairs, proper semantic markup, and keyboard-navigable components ensure accessibility without additional effort.' },
          ].map((principle) => (
            <div key={principle.title} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
              <div style={{
                width: '4px', minHeight: '100%', background: 'var(--exds-color-primary)',
                borderRadius: '2px', flexShrink: 0
              }} />
              <div>
                <h3 style={{ fontSize: 'var(--exds-text-md)', fontWeight: 600, marginBottom: '4px' }}>{principle.title}</h3>
                <p style={{ fontSize: 'var(--exds-text-base)', color: 'var(--exds-color-text-secondary)', lineHeight: 1.6 }}>
                  {principle.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
