# Contributing to Exchange Design System

Thank you for your interest in contributing to the Exchange Design System! This guide will help you get started and ensure a smooth contribution process.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [How to Contribute](#how-to-contribute)
- [Component Contribution Workflow](#component-contribution-workflow)
- [Design Token Contributions](#design-token-contributions)
- [Code Standards](#code-standards)
- [Commit Conventions](#commit-conventions)
- [Pull Request Process](#pull-request-process)
- [Accessibility Requirements](#accessibility-requirements)
- [Documentation Requirements](#documentation-requirements)
- [Getting Help](#getting-help)

---

## Code of Conduct

This project adheres to the [Contributor Covenant Code of Conduct](./CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code. Please report unacceptable behavior as outlined in that document.

---

## Getting Started

### Prerequisites

- **Node.js** ≥ 18.x
- **npm** ≥ 9.x
- A modern browser (Chrome, Firefox, Safari, or Edge)

### Setup

```bash
# 1. Fork and clone the repository
git clone https://github.com/<your-username>/exchange-design-system.git
cd exchange-design-system

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev

# 4. Open in your browser
# Navigate to http://localhost:5173
```

### Useful Commands

| Command           | Description                        |
| ----------------- | ---------------------------------- |
| `npm run dev`     | Start the Vite development server  |
| `npm run build`   | Create a production build          |
| `npm run preview` | Preview the production build       |

---

## Project Structure

```
exchange-design-system/
├── public/                  # Static assets
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Alert/
│   │   ├── Badge/
│   │   ├── Button/
│   │   ├── Card/
│   │   ├── Checkbox/
│   │   ├── DataTable/
│   │   ├── Modal/
│   │   ├── RadioGroup/
│   │   ├── SearchBar/
│   │   ├── Select/
│   │   ├── Tabs/
│   │   ├── TextInput/
│   │   └── index.js         # Barrel export file
│   ├── layouts/             # Page layout components
│   ├── pages/               # Documentation pages
│   │   ├── components/      # Per-component doc pages
│   │   └── tokens/          # Design token doc pages
│   ├── tokens/              # Design token definitions
│   │   ├── colors.css
│   │   ├── typography.css
│   │   ├── spacing.css
│   │   └── tokens.js
│   ├── App.jsx              # Root app with routing
│   ├── App.css              # Global styles
│   └── main.jsx             # Entry point
├── CHANGELOG.md
├── CODE_OF_CONDUCT.md
├── CONTRIBUTING.md           # ← You are here
├── GOVERNANCE.md
├── LICENSE
└── package.json
```

---

## How to Contribute

### Types of Contributions

| Type                  | Description                                             |
| --------------------- | ------------------------------------------------------- |
| 🐛 **Bug fix**        | Fix broken behavior in an existing component            |
| ✨ **New component**   | Propose and implement a new design system component     |
| 🔧 **Enhancement**    | Improve an existing component's API, styling, or a11y   |
| 🎨 **Token update**   | Add or modify design tokens (colors, spacing, type)     |
| 📖 **Documentation**  | Improve or add documentation pages                      |
| ♿ **Accessibility**   | Improve ARIA attributes, keyboard nav, or screen reader support |

### Before You Start

1. **Check existing issues**: your idea may already be tracked.
2. **Open an issue first** for new components or significant changes. Use the appropriate [issue template](./.github/ISSUE_TEMPLATE/).
3. **Discuss breaking changes**: any API change to an existing component requires an RFC-style discussion (see [Governance](./GOVERNANCE.md)).

---

## Component Contribution Workflow

### Adding a New Component

1. **Propose it**: Open a [Component Proposal](./.github/ISSUE_TEMPLATE/component_proposal.md) issue.
2. **Get approval**: Wait for a maintainer to approve the proposal before writing code.
3. **Create the component directory:**

```
src/components/YourComponent/
├── YourComponent.jsx    # Component implementation
├── YourComponent.css    # Component styles
└── index.js             # Named export
```

4. **Register the export** in `src/components/index.js`:

```js
export { YourComponent } from './YourComponent';
```

5. **Create a documentation page** at `src/pages/components/YourComponentPage.jsx`.
6. **Add the route** in `src/App.jsx`.
7. **Submit a pull request** following the [PR process](#pull-request-process).

### Modifying an Existing Component

1. Open an issue describing the change and its motivation.
2. Update the component implementation and styles.
3. Update the corresponding documentation page to reflect changes.
4. Verify there are no visual regressions in other components.

---

## Design Token Contributions

Design tokens live in `src/tokens/` and define the system's visual foundation.

### Adding or Modifying Tokens

1. **CSS custom properties** are defined in the appropriate file:
   - `colors.css`: color palette and semantic colors
   - `typography.css`: font families, sizes, weights, line heights
   - `spacing.css`: spacing scale and layout values
2. **JavaScript exports** must mirror CSS values in `tokens.js`.
3. **Naming convention**: use `--eds-{category}-{property}-{variant}` format:
   ```css
   --eds-color-primary-500: #6366f1;
   --eds-spacing-lg: 1.5rem;
   --eds-font-size-body: 1rem;
   ```
4. **Update documentation**: ensure the corresponding token documentation page reflects the change.

> ⚠️ **Breaking token changes** (renames or removals) require a deprecation notice in the [CHANGELOG](./CHANGELOG.md) and must follow the [deprecation policy](./GOVERNANCE.md#deprecation-policy).

---

## Code Standards

### General Principles

- **Simplicity**: prefer clear, readable code over clever abstractions.
- **Consistency**: follow existing patterns in the codebase.
- **Composability**: components should be self-contained and reusable.

### Naming Conventions

| Entity           | Convention        | Example              |
| ---------------- | ----------------- | -------------------- |
| Component files  | PascalCase        | `Button.jsx`         |
| CSS files        | PascalCase        | `Button.css`         |
| CSS classes      | kebab-case        | `.eds-button--primary` |
| CSS variables    | `--eds-` prefix   | `--eds-color-primary` |
| Props            | camelCase         | `isDisabled`         |
| Event handlers   | `on` prefix       | `onClick`            |

### CSS Conventions

- Use CSS custom properties (design tokens) for all color, spacing, and typography values.
- Scope component styles with an `.eds-` prefix to prevent collisions.
- Avoid inline styles; use CSS files co-located with the component.
- Support light and dark themes via token overrides where applicable.

### File Organization

- One component per directory.
- Co-locate styles with the component.
- Use barrel exports (`index.js`) for clean imports.
- Pages go in `src/pages/` mirroring the component structure.

---

## Commit Conventions

This project follows [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>(<scope>): <description>

[optional body]

[optional footer(s)]
```

### Types

| Type       | When to use                                          |
| ---------- | ---------------------------------------------------- |
| `feat`     | A new feature or component                           |
| `fix`      | A bug fix                                            |
| `docs`     | Documentation-only changes                           |
| `style`    | Code style changes (formatting, whitespace)          |
| `refactor` | Code changes that neither fix a bug nor add a feature |
| `perf`     | Performance improvements                             |
| `test`     | Adding or correcting tests                           |
| `chore`    | Build process, tooling, or dependency updates        |

### Scopes

Use the component or area name: `button`, `tokens`, `docs`, `ci`, etc.

### Examples

```
feat(modal): add close-on-overlay-click prop
fix(select): prevent dropdown clipping in narrow containers
docs(badge): add accessibility usage guidelines
chore(deps): upgrade vite to 6.1
```

---

## Pull Request Process

1. **Branch from `main`** using the convention:
   ```
   feat/component-name
   fix/issue-description
   docs/page-name
   ```

2. **Keep PRs focused**: one component or feature per PR.

3. **Complete the PR template checklist** (auto-populated from `.github/PULL_REQUEST_TEMPLATE.md`).

4. **Ensure your changes:**
   - [ ] Build successfully (`npm run build`)
   - [ ] Follow the code standards above
   - [ ] Include updated documentation
   - [ ] Meet accessibility requirements
   - [ ] Have no visual regressions

5. **Request review** from at least one maintainer.

6. **Address review feedback** with fixup commits; the maintainer will squash on merge.

7. **Merging**: maintainers will merge once all checks pass and review is approved.

---

## Accessibility Requirements

All components **must** meet [WCAG 2.1 AA](https://www.w3.org/WAI/WCAG21/quickref/) compliance:

- **Keyboard navigation**: all interactive elements must be reachable and operable via keyboard.
- **ARIA attributes**: use proper `role`, `aria-label`, `aria-expanded`, etc.
- **Focus management**: visible focus indicators on all interactive elements.
- **Color contrast**: minimum 4.5:1 for normal text, 3:1 for large text.
- **Screen reader support**: test with VoiceOver (macOS) or NVDA (Windows).
- **Motion**: respect `prefers-reduced-motion` for all animations.

---

## Documentation Requirements

Every component and token update **must** include documentation:

1. **Component documentation page** (`src/pages/components/`) must include:
   - Component description and use cases
   - Live interactive examples
   - Props/API table
   - Do's and Don'ts
   - Accessibility notes

2. **Token documentation** (`src/pages/tokens/`) must include:
   - Visual swatch/preview of the token
   - Token name and CSS variable
   - Usage guidelines

3. **CHANGELOG entry**: all user-facing changes must be logged.

---

## Getting Help

- **Questions?** Open a [Discussion](https://github.com/rwyatt2/exchange-design-system/discussions) or reach out to a maintainer.
- **Found a bug?** File an issue using the [Bug Report template](./.github/ISSUE_TEMPLATE/bug_report.md).
- **Have an idea?** Submit a [Feature Request](./.github/ISSUE_TEMPLATE/feature_request.md) or [Component Proposal](./.github/ISSUE_TEMPLATE/component_proposal.md).

We appreciate every contribution: thank you for helping make Exchange Design System better! 🎉
