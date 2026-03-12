# Exchange Design System: Governance

This document describes how the Exchange Design System is maintained, how decisions are made, and how contributors can participate in its evolution.

## Table of Contents

- [Principles](#principles)
- [Roles & Responsibilities](#roles--responsibilities)
- [Decision-Making Process](#decision-making-process)
- [Component Lifecycle](#component-lifecycle)
- [Versioning Strategy](#versioning-strategy)
- [Release Process](#release-process)
- [Deprecation Policy](#deprecation-policy)
- [Escalation & Conflict Resolution](#escalation--conflict-resolution)

---

## Principles

1. **Consistency over novelty**: prioritize a unified system over individual expression.
2. **Accessibility is non-negotiable**: WCAG 2.1 AA is the minimum bar.
3. **Transparency**: decisions, rationale, and trade-offs are documented publicly.
4. **Incremental progress**: ship small, stable improvements over big-bang rewrites.
5. **Consumer-first**: design for the developers and designers who use the system daily.

---

## Roles & Responsibilities

### Maintainer

| Responsibility | Description |
| -------------- | ----------- |
| Code review    | Reviews and merges pull requests |
| Release management | Publishes releases and updates the changelog |
| Architecture decisions | Approves RFCs and sets technical direction |
| Community stewardship | Enforces the Code of Conduct |

Maintainers have write access to the repository and final say on merges.

### Design Lead

| Responsibility | Description |
| -------------- | ----------- |
| Visual direction | Ensures components align with the design language |
| Token management | Owns the color, typography, and spacing token definitions |
| Component review | Approves the visual and UX aspects of new components |
| Pattern guidance | Defines usage patterns, do's, and don'ts |

### Contributor

Anyone who submits a pull request, files an issue, or participates in discussions. Contributors are expected to:

- Follow the [Contributing Guide](./CONTRIBUTING.md)
- Adhere to the [Code of Conduct](./CODE_OF_CONDUCT.md)
- Engage constructively in code reviews

### Reviewer

Trusted contributors granted review permissions. Reviewers can approve PRs but cannot merge without a maintainer's sign-off.

---

## Decision-Making Process

### Standard Changes

Bug fixes, minor enhancements, and documentation updates follow the normal [PR process](./CONTRIBUTING.md#pull-request-process). A single maintainer approval is sufficient.

### Significant Changes (RFC Process)

Changes that affect the public API, visual language, or system architecture require a lightweight RFC:

1. **Open an issue** using the appropriate template, with the `rfc` label.
2. **Discussion period**: minimum 5 business days for community feedback.
3. **Decision**: maintainers reach consensus. If consensus cannot be reached, the senior maintainer makes the final call.
4. **Documentation**: the RFC issue is updated with the final decision and rationale.

#### What Qualifies as Significant?

- New components entering the system
- Breaking changes to existing component APIs (prop renames, removals)
- Design token renames or removals
- Changes to the component lifecycle stages
- Architectural changes (new dependencies, build system changes)

### Emergency Fixes

Critical bugs (broken builds, security vulnerabilities, data loss risks) can bypass the RFC process. A post-incident issue must be filed within 48 hours documenting the fix and any follow-up actions.

---

## Component Lifecycle

Every component in the system progresses through defined stages:

```
Proposal → Draft → Beta → Stable → Deprecated → Removed
```

| Stage          | Description | Expectations |
| -------------- | ----------- | ------------ |
| **Proposal**   | An idea for a new component, submitted as a Component Proposal issue | No code required; focus on use cases and API surface |
| **Draft**      | Active development; the component exists in code but is not ready for production | API may change without notice; marked with a "Draft" badge |
| **Beta**       | Feature-complete and usable, but seeking broader feedback | API changes require a minor version bump; marked with a "Beta" badge |
| **Stable**     | Production-ready; fully documented and accessible | API changes follow SemVer strictly |
| **Deprecated** | Scheduled for removal; a replacement or migration path is documented | Maintained for the deprecation window (see below) |
| **Removed**    | No longer in the codebase | Announced in a major version release |

### Promotion Criteria

To advance from one stage to the next, a component must meet:

- **Draft → Beta**: Implementation complete, basic documentation, passes accessibility audit.
- **Beta → Stable**: Full documentation with examples, do's/don'ts, edge cases covered, at least 2 weeks in Beta without API changes.
- **Stable → Deprecated**: A replacement is available or the component is no longer needed, with a documented migration path.

---

## Versioning Strategy

This project follows [Semantic Versioning 2.0.0](https://semver.org/):

| Version Bump | When |
| ------------ | ---- |
| **Major** (`X.0.0`) | Breaking changes to component APIs, token removals/renames, or removal of deprecated components |
| **Minor** (`x.Y.0`) | New components, new features/props on existing components, new tokens |
| **Patch** (`x.y.Z`) | Bug fixes, documentation updates, internal refactors with no API changes |

### What Counts as Breaking?

- Removing or renaming a component
- Removing or renaming a prop
- Changing default prop values that alter visual output
- Removing or renaming a design token CSS variable
- Changing the HTML structure in a way that breaks existing CSS selectors

---

## Release Process

1. **Determine version bump** based on changes since last release.
2. **Update `CHANGELOG.md`** with all changes grouped by type.
3. **Update `package.json` version**.
4. **Create a release commit**: `chore(release): vX.Y.Z`.
5. **Tag the release**: `git tag vX.Y.Z`.
6. **Push to `main`** and create a GitHub Release with release notes.

### Release Cadence

- **Patch releases**: as needed, typically weekly if fixes accumulate.
- **Minor releases**: bi-weekly or monthly, batching new features.
- **Major releases**: quarterly at most; coordinated with consuming teams.

---

## Deprecation Policy

When a component, prop, or token is deprecated:

1. **Announce**: add a deprecation notice in the CHANGELOG and component documentation.
2. **Mark in code**: add a console warning (dev mode only) when the deprecated API is used.
3. **Provide migration path**: document the replacement and how to migrate.
4. **Deprecation window**: deprecated items are maintained for at least **one major version cycle** or **90 days**, whichever is longer.
5. **Remove**: removal happens in the next major version after the deprecation window expires.

### Deprecation Notice Format

```
⚠️ DEPRECATED: `ComponentName` is deprecated as of v1.x and will be removed in v2.0.
Use `NewComponentName` instead. See migration guide: [link]
```

---

## Escalation & Conflict Resolution

1. **Start with discussion**: use issue comments or PR reviews to work through disagreements.
2. **Request mediation**: if the parties cannot agree, tag a maintainer not involved in the dispute.
3. **Maintainer decision**: the mediating maintainer makes a final decision, documented in the issue.
4. **Code of Conduct violations**: follow the enforcement process in the [Code of Conduct](./CODE_OF_CONDUCT.md).

All decisions, including the rationale, are recorded in the relevant issue or PR for future reference.

---

## Amendments

This governance document can be updated via the standard PR and review process. Changes to governance require approval from at least two maintainers.
