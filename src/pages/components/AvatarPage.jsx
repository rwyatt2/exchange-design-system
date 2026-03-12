import React from 'react';
import Avatar from '../../components/Avatar/Avatar';
import Divider from '../../components/Divider/Divider';
import { DoIcon, DontIcon, BulletIcon, ArrowIcon, ZapIcon } from '../docIcons';

const TEAM = [
  { name: 'Jane Doe',    role: 'Lead Designer' },
  { name: 'Ryan Wyatt',  role: 'Engineering' },
  { name: 'Alex Kim',    role: 'Product' },
  { name: 'Sam Torres',  role: 'Research' },
  { name: 'Morgan Chen', role: 'Brand' },
];

export default function AvatarPage() {
  return (
    <div className="doc-page">
      <div className="doc-page__header">
        <h1 className="doc-page__title">Avatar</h1>
        <p className="doc-page__subtitle">
          Avatars represent a user's identity visually. They fall back gracefully
          from photo → initials → icon, and auto-generate a consistent color from
          the user's name so every user has a unique but predictable appearance.
        </p>
      </div>

      {/* Team list demo */}
      <section className="doc-section">
        <h2 className="doc-section__title">Team List Example</h2>
        <div className="doc-preview" style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxWidth: '320px' }}>
          {TEAM.map(({ name, role }) => (
            <div key={name} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <Avatar name={name} size="md" />
              <div>
                <div style={{ fontSize: 'var(--exds-text-sm)', fontWeight: 600, color: 'var(--exds-color-text-primary)' }}>{name}</div>
                <div style={{ fontSize: 'var(--exds-text-xs)', color: 'var(--exds-color-text-tertiary)' }}>{role}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Avatar group */}
      <section className="doc-section">
        <h2 className="doc-section__title">Avatar Group</h2>
        <div className="doc-preview">
          <div style={{ display: 'flex' }}>
            {TEAM.slice(0, 4).map(({ name }, i) => (
              <div key={name} style={{ marginLeft: i === 0 ? 0 : '-10px', zIndex: 4 - i, position: 'relative' }}>
                <Avatar name={name} size="md" />
              </div>
            ))}
            <div style={{ marginLeft: '-10px', position: 'relative' }}>
              <span style={{
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                width: '40px', height: '40px', borderRadius: '50%',
                background: 'var(--exds-color-neutral-200)',
                color: 'var(--exds-color-text-secondary)',
                fontSize: 'var(--exds-text-xs)', fontWeight: 600,
                border: '2px solid #fff',
              }}>+3</span>
            </div>
          </div>
        </div>
      </section>

      {/* Sizes */}
      <section className="doc-section">
        <h2 className="doc-section__title">Sizes</h2>
        <div className="doc-preview" style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          {['xs','sm','md','lg','xl'].map((sz) => (
            <div key={sz} style={{ textAlign: 'center' }}>
              <Avatar name="Jane Doe" size={sz} />
              <div style={{ fontSize: 'var(--exds-text-2xs)', color: 'var(--exds-color-text-tertiary)', marginTop: '6px', fontFamily: 'var(--exds-font-mono)' }}>{sz}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Variants */}
      <section className="doc-section">
        <h2 className="doc-section__title">Variants</h2>
        <div className="doc-preview" style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{ textAlign: 'center' }}>
            <Avatar name="Jane Doe" size="lg" variant="initials" />
            <div style={{ fontSize: 'var(--exds-text-xs)', marginTop: '8px', color: 'var(--exds-color-text-tertiary)' }}>Initials</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <Avatar size="lg" variant="icon" />
            <div style={{ fontSize: 'var(--exds-text-xs)', marginTop: '8px', color: 'var(--exds-color-text-tertiary)' }}>Icon fallback</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <Avatar src="https://i.pravatar.cc/68?img=1" name="Alex Kim" size="lg" variant="image" />
            <div style={{ fontSize: 'var(--exds-text-xs)', marginTop: '8px', color: 'var(--exds-color-text-tertiary)' }}>Image</div>
          </div>
        </div>
      </section>

      {/* Usage */}
      <section className="doc-section">
        <h2 className="doc-section__title">Usage</h2>
        <pre><code>{`<Avatar name="Jane Doe" size="md" />
<Avatar src={user.photoUrl} name={user.name} size="lg" />
<Avatar size="sm" /> {/* Icon fallback */}`}</code></pre>
      </section>

      {/* Props */}
      <section className="doc-section">
        <h2 className="doc-section__title">Props</h2>
        <table className="doc-props-table">
          <thead><tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
          <tbody>
            <tr><td><code>name</code></td><td>string</td><td>: </td><td>User's full name. Generates initials and a consistent color.</td></tr>
            <tr><td><code>src</code></td><td>string</td><td>: </td><td>Image URL. If provided and valid, displays the image.</td></tr>
            <tr><td><code>size</code></td><td><code>'xs'|'sm'|'md'|'lg'|'xl'</code></td><td><code>'md'</code></td><td>Avatar diameter</td></tr>
            <tr><td><code>variant</code></td><td><code>'image'|'initials'|'icon'</code></td><td>auto</td><td>Override auto-detection of the display variant</td></tr>
          </tbody>
        </table>
      </section>

      {/* Do's and Don'ts */}
      <section className="doc-section">
        <h2 className="doc-section__title">Do's and Don'ts</h2>
        <div className="doc-guidelines">
          <div className="doc-guideline"><span className="doc-guideline__icon"><DoIcon /></span><span><strong>Do</strong> always pass <code>name</code> even when using an image: it provides the alt text and initials fallback.</span></div>
          <div className="doc-guideline"><span className="doc-guideline__icon"><DontIcon /></span><span><strong>Don't</strong> use <code>xl</code> avatars inside dense data tables: use <code>xs</code> or <code>sm</code> instead.</span></div>
          <div className="doc-guideline"><span className="doc-guideline__icon"><DoIcon /></span><span><strong>Do</strong> stack avatars with a negative left margin and a white border for avatar group patterns.</span></div>
        </div>
      </section>
    </div>
  );
}
