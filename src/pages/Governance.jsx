import React from 'react';
import ReactMarkdown from 'react-markdown';
import './DocsPage.css';

const markdown = `
# Governance

This document describes how the Exchange Design System is maintained, how decisions are made, and how contributors can participate.

## Principles
1. **Consistency over novelty**
2. **Accessibility is non-negotiable**
3. **Transparency**
4. **Incremental progress**
5. **Consumer-first**

## Roles & Responsibilities
- **Maintainer**: Reviews PRs, manages releases, approves RFCs, stewards community.
- **Design Lead**: Visual direction, token management, component review.
- **Contributor**: Submits PRs, files issues, participates in discussions.
- **Reviewer**: Trusted contributors granted review permissions.

## Decision-Making Process
- **Standard Changes**: Bug fixes, minor enhancements: follow normal PR process.
- **Significant Changes (RFC Process)**: Public API, visual language, or architecture changes require an RFC issue, 5-day discussion, and maintainer consensus.

## Component Lifecycle
\`Proposal\` → \`Draft\` → \`Beta\` → \`Stable\` → \`Deprecated\` → \`Removed\`

## Versioning Strategy
Follows Semantic Versioning 2.0.0 (Major, Minor, Patch).

## Deprecation Policy
Deprecated items are maintained for at least **one major version cycle** or **90 days**, whichever is longer, and include a console warning and migration path.
`;

export default function Governance() {
  return (
    <div className="docs-page">
      <div className="docs-page__header">
        <h1 className="docs-page__title">Governance</h1>
        <p className="docs-page__description">Decision-making, roles, and project lifecycle.</p>
      </div>
      <div className="docs-page__content markdown-body">
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </div>
    </div>
  );
}
