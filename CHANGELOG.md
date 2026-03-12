# Changelog

All notable changes to the **Exchange Design System** will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2026-03-12

### Added
- Initial release of the Exchange Design System documentation site
- Interactive docs site built with React + Vite, served at `http://localhost:5173`
- Getting Started guide with installation and usage instructions
- **Design Token System**: 7 token categories, all tokenized as CSS custom properties:
  - `Colors`: brand palette (8 steps), semantic (success/error/warning/info), neutral scale (12 steps), surface & text aliases
  - `Typography`: Inter + Source Sans 3 + JetBrains Mono, 12-step size scale, 5 weight tokens
  - `Spacing & Layout`: 12-step 4px-base scale, layout constants (container, sidebar, header)
  - `Elevation`: 7 shadow tokens from `shadow-sm` to `shadow-modal`
  - `Border Radii`: 7 radius tokens from `none` to `circle`
  - `Z-Index`: 11-step named stacking order from `hide` to `tooltip`
  - `Motion`: 4 duration tokens, 5 easing curves, 4 composed transition shorthands
- **15 Interactive Components**, each with live previews, props tables, do's/don'ts, accessibility notes, and behavior guidelines:
  - `Alert`: success, error, warning, info variants with dismissal
  - `Badge`: status and count variants
  - `Breadcrumbs`: accessible navigation trail
  - `Button`: primary, secondary, ghost, danger, icon variants; sm/md/lg sizes
  - `Card`: default, hover, selected, disabled states
  - `Checkbox`: checked, indeterminate, disabled states
  - `DataTable`: sortable columns, selectable rows, pagination-ready
  - `Modal`: focus-trapped dialog with overlay
  - `RadioGroup`: accessible fieldset-based group
  - `SearchBar`: controlled input with clear and submit actions
  - `Select`: custom styled dropdown with keyboard navigation
  - `Spinner`: indeterminate loading indicator, sm/md/lg
  - `Tabs`: controlled and uncontrolled tab panels
  - `TextInput`: text, email, password, number; validation states
  - `Tooltip`: hover/focus-triggered with 4 placement options
- **3 Pattern Pages**: compositional guidance for common UI flows:
  - `Form Layout`: field grouping, labeling, validation, action placement
  - `Search Results`: filter + results + empty state composition
  - `Feedback Flows`: error recovery, success confirmation, loading states
- **Governance Documentation**:
  - `CONTRIBUTING.md`: contribution workflow, component standards, PR process
  - `GOVERNANCE.md`: roles, decision-making, component lifecycle
  - `CODE_OF_CONDUCT.md`: community standards (Contributor Covenant)
  - `CHANGELOG.md`: this file
  - `LICENSE`: MIT
  - GitHub Issue Templates (bug report, feature request)
  - GitHub Pull Request Template

