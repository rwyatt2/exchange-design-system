import React from 'react';

export default function GettingStarted() {
  return (
    <div className="doc-page">
      <div className="doc-page__header">
        <h1 className="doc-page__title">Getting Started</h1>
        <p className="doc-page__subtitle">
          Learn how to install and use the Exchange Design System in your projects.
        </p>
      </div>

      <section className="doc-section">
        <h2 className="doc-section__title">Installation</h2>
        <pre><code>{`# Clone the repository
git clone https://github.com/rwyatt2/exchange-design-system.git
cd exchange-design-system

# Install dependencies
npm install

# Start the dev server
npm run dev`}</code></pre>
      </section>

      <section className="doc-section">
        <h2 className="doc-section__title">Project Structure</h2>
        <pre><code>{`src/
├── tokens/           # Design tokens (CSS custom properties)
│   ├── colors.css    # Color palette
│   ├── typography.css# Font families, sizes, weights
│   ├── elevation.css # Box shadows and z-index scale
│   ├── motion.css    # Transitions and animation timing
│   ├── radii.css     # Border radii configurations
│   ├── spacing.css   # Padding and margin scale
│   └── tokens.js     # JS exports for programmatic access
├── components/       # Reusable components
│   ├── Button/
│   ├── Card/
│   ├── Badge/
│   ├── SearchBar/
│   ├── TextInput/
│   ├── Select/
│   ├── Checkbox/
│   ├── RadioGroup/
│   ├── Tabs/
│   ├── Alert/
│   ├── Modal/
│   └── DataTable/
├── pages/            # Documentation pages
└── layouts/          # Page layouts`}</code></pre>
      </section>

      <section className="doc-section">
        <h2 className="doc-section__title">Using Design Tokens</h2>
        <p style={{ marginBottom: '16px', color: 'var(--exds-color-text-secondary)' }}>
          All design tokens are defined as CSS custom properties, prefixed with <code>--exds-</code>.
          Import the token files in your entry CSS or use them directly in any component.
        </p>
        <pre><code>{`/* Import all tokens */
@import './tokens/colors.css';
@import './tokens/typography.css';
@import './tokens/spacing.css';
@import './tokens/elevation.css';
@import './tokens/radii.css';
@import './tokens/motion.css';

/* Use tokens in your styles */
.my-component {
  color: var(--exds-color-text-primary);
  font-family: var(--exds-font-primary);
  font-size: var(--exds-text-base);
  padding: var(--exds-space-5);
  border-radius: var(--exds-radius-sm);
  border: 1px solid var(--exds-color-border);
}`}</code></pre>
      </section>

      <section className="doc-section">
        <h2 className="doc-section__title">Using Components</h2>
        <p style={{ marginBottom: '16px', color: 'var(--exds-color-text-secondary)' }}>
          Import components individually or from the barrel export:
        </p>
        <pre><code>{`// Individual import
import Button from './components/Button/Button';

// Barrel import
import { Button, Card, Badge } from './components';

// Usage
function MyPage() {
  return (
    <Card title="My Card" hoverable>
      <p>Card content goes here.</p>
      <Button variant="primary">Action</Button>
    </Card>
  );
}`}</code></pre>
      </section>

      <section className="doc-section">
        <h2 className="doc-section__title">Token Naming Convention</h2>
        <p style={{ color: 'var(--exds-color-text-secondary)', lineHeight: 1.7 }}>
          All tokens follow the pattern: <code>--exds-[category]-[property]</code>
        </p>
        <table className="doc-props-table" style={{ marginTop: '16px' }}>
          <thead>
            <tr>
              <th>Prefix</th>
              <th>Category</th>
              <th>Example</th>
            </tr>
          </thead>
          <tbody>
            <tr><td><code>--exds-color-</code></td><td>Colors</td><td><code>--exds-color-primary</code></td></tr>
            <tr><td><code>--exds-text-</code></td><td>Font sizes</td><td><code>--exds-text-base</code></td></tr>
            <tr><td><code>--exds-font-</code></td><td>Font properties</td><td><code>--exds-font-semibold</code></td></tr>
            <tr><td><code>--exds-space-</code></td><td>Spacing</td><td><code>--exds-space-5</code></td></tr>
            <tr><td><code>--exds-radius-</code></td><td>Border radii</td><td><code>--exds-radius-sm</code></td></tr>
            <tr><td><code>--exds-shadow-</code></td><td>Shadows</td><td><code>--exds-shadow-card</code></td></tr>
          </tbody>
        </table>
      </section>
    </div>
  );
}
