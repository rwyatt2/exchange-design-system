import React from 'react';
import ReactMarkdown from 'react-markdown';
import './DocsPage.css';

const markdown = `
# Contributing to Exchange Design System

Thank you for your interest in contributing to the Exchange Design System! This guide will help you get started and ensure a smooth contribution process.

## Code of Conduct
This project adheres to the Contributor Covenant Code of Conduct. By participating, you are expected to uphold this code.

## Getting Started

### Prerequisites
- **Node.js** ≥ 18.x
- **npm** ≥ 9.x

### Setup
\`\`\`bash
git clone https://github.com/<your-username>/exchange-design-system.git
cd exchange-design-system
npm install
npm run dev
\`\`\`

## Component Contribution Workflow
1. **Propose it**: Open a Component Proposal issue.
2. **Get approval**: Wait for approval before writing code.
3. **Create directory & files**
4. **Register the export**
5. **Create a documentation page**
6. **Submit a pull request**

## Code Standards
- **Simplicity**: prefer clear, readable code over clever abstractions.
- **Consistency**: follow existing patterns.
- **Naming**: PascalCase for React components, kebab-case for CSS/classes.

## Pull Request Process
1. Branch from \`main\` (e.g., \`feat/component-name\`).
2. Keep PRs focused.
3. Complete the PR template checklist.
4. Ensure your changes build, follow standards, include docs, and meet accessibility requirements.
5. Request review.

## Accessibility Requirements
All components **must** meet WCAG 2.1 AA compliance including Keyboard navigation, ARIA attributes, Focus management, Color contrast, and Screen reader support.
`;

export default function Contributing() {
  return (
    <div className="docs-page">
      <div className="docs-page__header">
        <h1 className="docs-page__title">Contributing</h1>
        <p className="docs-page__description">How to contribute to the Exchange Design System.</p>
      </div>
      <div className="docs-page__content markdown-body">
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </div>
    </div>
  );
}
