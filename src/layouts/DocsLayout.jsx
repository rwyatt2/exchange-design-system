import React, { useState } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { Menu } from 'lucide-react';
import './DocsLayout.css';


const navSections = [
  {
    title: 'Overview',
    items: [
      { to: '/', label: 'Home' },
      { to: '/getting-started', label: 'Getting Started' },
      { to: '/contributing', label: 'Contributing' },
      { to: '/governance', label: 'Governance' },
    ],
  },
  {
    title: 'Design Tokens',
    items: [
      { to: '/tokens/colors', label: 'Colors' },
      { to: '/tokens/typography', label: 'Typography' },
      { to: '/tokens/spacing', label: 'Spacing & Layout' },
      { to: '/tokens/elevation', label: 'Elevation' },
      { to: '/tokens/radii', label: 'Border Radii' },
      { to: '/tokens/z-index', label: 'Z-Index' },
      { to: '/tokens/motion', label: 'Motion' },
      { to: '/tokens/icons', label: 'Icons' },
    ],
  },
  {
    title: 'Components',
    items: [
      { to: '/components/button', label: 'Button' },
      { to: '/components/card', label: 'Card' },
      { to: '/components/badge', label: 'Badge' },
      { to: '/components/search-bar', label: 'SearchBar' },
      { to: '/components/text-input', label: 'TextInput' },
      { to: '/components/select', label: 'Select' },
      { to: '/components/checkbox', label: 'Checkbox' },
      { to: '/components/radio-group', label: 'RadioGroup' },
      { to: '/components/tabs', label: 'Tabs' },
      { to: '/components/alert', label: 'Alert' },
      { to: '/components/modal', label: 'Modal' },
      { to: '/components/data-table', label: 'DataTable' },
      { to: '/components/spinner', label: 'Spinner' },
      { to: '/components/tooltip', label: 'Tooltip' },
      { to: '/components/breadcrumbs', label: 'Breadcrumbs' },
      { to: '/components/pagination', label: 'Pagination' },
      { to: '/components/toggle', label: 'Toggle' },
      { to: '/components/tag', label: 'Tag' },
      { to: '/components/toast', label: 'Toast' },
      { to: '/components/popover', label: 'Popover' },
      { to: '/components/progress-bar', label: 'ProgressBar' },
      { to: '/components/avatar', label: 'Avatar' },
      { to: '/components/skeleton', label: 'Skeleton' },
      { to: '/components/divider', label: 'Divider' },
      { to: '/components/empty-state', label: 'EmptyState' },
    ],
  },
  {
    title: 'Patterns',
    items: [
      { to: '/patterns', label: 'Overview' },
      { to: '/patterns/form-layout', label: 'Form Layout' },
      { to: '/patterns/search-results', label: 'Search Results' },
      { to: '/patterns/feedback-flows', label: 'Feedback Flows' },
      { to: '/patterns/loading-states', label: 'Loading States' },
      { to: '/patterns/navigation', label: 'Navigation' },
      { to: '/patterns/notifications', label: 'Notifications' },
      { to: '/patterns/empty-states', label: 'Empty States' },
      { to: '/patterns/data-entry', label: 'Data Entry' },
    ],
  },
];

export default function DocsLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const location = useLocation();

  return (
    <div className="docs">
      {/* Top Bar */}
      <header className="docs__header">
        <div className="docs__header-left">
          <button className="docs__menu-btn" onClick={() => setSidebarOpen(!sidebarOpen)} aria-label="Toggle menu">
            <Menu size={20} strokeWidth={2} aria-hidden="true" />
          </button>
          <NavLink to="/" className="docs__logo">
            <img src="/logo.svg" alt="Exchange Design System Logo" className="docs__logo-icon" width="32" height="32" />
            <span className="docs__logo-text">Exchange <span className="docs__logo-accent">Design System</span></span>
          </NavLink>
        </div>
        <div className="docs__header-right">
          <span className="docs__version">v1.0.0</span>
        </div>
      </header>

      <div className="docs__body">
        {/* Sidebar */}
        <nav className={`docs__sidebar ${sidebarOpen ? '' : 'docs__sidebar--closed'}`}>
          {navSections.map((section) => (
            <div key={section.title} className="docs__nav-section">
              <h4 className="docs__nav-title">{section.title}</h4>
              <ul className="docs__nav-list">
                {section.items.map((item) => (
                  <li key={item.to}>
                    <NavLink
                      to={item.to}
                      end={item.to === '/' || item.to === '/patterns'}
                      className={({ isActive }) =>
                        `docs__nav-link ${isActive ? 'docs__nav-link--active' : ''}`
                      }
                    >
                      {item.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

        {/* Main Content */}
        <main className="docs__main">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
