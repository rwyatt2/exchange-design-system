import React, { useState } from 'react';
import { motion } from '../../tokens/tokens';
import { DoIcon, DontIcon, BulletIcon, ArrowIcon, ZapIcon } from '../docIcons';

const DURATIONS = [
  { token: '--exds-duration-fast',   value: '150ms', usage: 'Hover states, micro-interactions' },
  { token: '--exds-duration-base',   value: '250ms', usage: 'Standard transitions' },
  { token: '--exds-duration-slow',   value: '350ms', usage: 'Modals, large surface movement' },
  { token: '--exds-duration-slower', value: '500ms', usage: 'Complex choreography' },
];

const EASINGS = [
  { token: '--exds-ease-linear',  value: 'linear',                           usage: 'Progress bars, spinner rotation' },
  { token: '--exds-ease-in',      value: 'cubic-bezier(0.4, 0, 1, 1)',       usage: 'Elements leaving the screen' },
  { token: '--exds-ease-out',     value: 'cubic-bezier(0, 0, 0.2, 1)',       usage: 'Elements entering the screen' },
  { token: '--exds-ease-in-out',  value: 'cubic-bezier(0.4, 0, 0.2, 1)',    usage: 'Point-to-point movement' },
  { token: '--exds-ease-spring',  value: 'cubic-bezier(0.34, 1.56, 0.64, 1)', usage: 'Playful, bouncy elements' },
];

function EasingDemo({ easing, duration = '600ms' }) {
  const [playing, setPlaying] = useState(false);

  const trigger = () => {
    setPlaying(false);
    requestAnimationFrame(() => requestAnimationFrame(() => setPlaying(true)));
  };

  return (
    <button
      onClick={trigger}
      title="Click to play"
      style={{
        border: 'none',
        cursor: 'pointer',
        width: '100%',
        padding: '12px 16px',
        borderRadius: 'var(--exds-radius-md)',
        background: 'var(--exds-color-neutral-50)',
        position: 'relative',
        overflow: 'hidden',
        height: '48px',
        textAlign: 'left',
      }}
    >
      <div style={{
        position: 'absolute',
        top: '50%',
        left: playing ? 'calc(100% - 28px)' : '8px',
        transform: 'translateY(-50%)',
        width: '20px',
        height: '20px',
        borderRadius: 'var(--exds-radius-circle)',
        background: 'var(--exds-color-primary)',
        transition: playing ? `left ${duration} ${easing}` : 'none',
      }} />
      <span style={{
        position: 'absolute',
        right: '10px',
        top: '50%',
        transform: 'translateY(-50%)',
        fontSize: 'var(--exds-text-2xs)',
        color: 'var(--exds-color-text-tertiary)',
      }}>
        Click ▶
      </span>
    </button>
  );
}

export default function MotionPage() {
  return (
    <div className="doc-page">
      <div className="doc-page__header">
        <h1 className="doc-page__title">Motion & Animation</h1>
        <p className="doc-page__subtitle">
          Motion in Exchange is purposeful, efficient, and calm. Animations
          confirm actions, guide focus, and communicate hierarchy: never
          distract or delay. All durations and easings are tokenized so they
          can evolve system-wide.
        </p>
      </div>

      {/* Duration tokens */}
      <section className="doc-section">
        <h2 className="doc-section__title">Duration Scale</h2>
        <table className="doc-props-table">
          <thead>
            <tr>
              <th>Token</th>
              <th>Value</th>
              <th>Usage</th>
            </tr>
          </thead>
          <tbody>
            {DURATIONS.map((d) => (
              <tr key={d.token}>
                <td><code>{d.token}</code></td>
                <td style={{ fontFamily: 'var(--exds-font-mono)', fontSize: 'var(--exds-text-xs)' }}>{d.value}</td>
                <td style={{ color: 'var(--exds-color-text-secondary)' }}>{d.usage}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Easing tokens with live demos */}
      <section className="doc-section">
        <h2 className="doc-section__title">Easing Curves</h2>
        <p style={{ color: 'var(--exds-color-text-secondary)', marginBottom: '20px', fontSize: 'var(--exds-text-sm)' }}>
          Click any row to preview the easing curve in motion.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {EASINGS.map((e) => (
            <div key={e.token} style={{
              display: 'grid',
              gridTemplateColumns: '220px 1fr 200px',
              alignItems: 'center',
              gap: '16px',
              padding: '8px 0',
              borderBottom: '1px solid var(--exds-color-border-subtle)',
            }}>
              <div>
                <code style={{ fontSize: 'var(--exds-text-xs)', display: 'block', marginBottom: '4px' }}>{e.token}</code>
                <div style={{ fontSize: 'var(--exds-text-2xs)', color: 'var(--exds-color-text-tertiary)', fontFamily: 'var(--exds-font-mono)' }}>{e.value}</div>
              </div>
              <EasingDemo easing={e.value} duration="600ms" />
              <div style={{ fontSize: 'var(--exds-text-xs)', color: 'var(--exds-color-text-secondary)' }}>{e.usage}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Composed transitions */}
      <section className="doc-section">
        <h2 className="doc-section__title">Composed Transitions</h2>
        <p style={{ color: 'var(--exds-color-text-secondary)', marginBottom: '16px', fontSize: 'var(--exds-text-sm)' }}>
          These shorthand tokens combine a duration + easing for the most common cases.
        </p>
        <table className="doc-props-table">
          <thead>
            <tr>
              <th>Token</th>
              <th>Expands To</th>
              <th>Usage</th>
            </tr>
          </thead>
          <tbody>
            {motion.map((m) => (
              <tr key={m.token}>
                <td><code>{m.token}</code></td>
                <td style={{ fontFamily: 'var(--exds-font-mono)', fontSize: 'var(--exds-text-xs)', color: 'var(--exds-color-text-secondary)' }}>
                  {m.token === '--exds-transition-fast'   && 'var(--exds-duration-fast) var(--exds-ease-in-out)'}
                  {m.token === '--exds-transition-base'   && 'var(--exds-duration-base) var(--exds-ease-in-out)'}
                  {m.token === '--exds-transition-slow'   && 'var(--exds-duration-slow) var(--exds-ease-in-out)'}
                  {m.token === '--exds-transition-spring' && 'var(--exds-duration-slow) var(--exds-ease-spring)'}
                </td>
                <td style={{ color: 'var(--exds-color-text-secondary)' }}>{m.usage}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Usage */}
      <section className="doc-section">
        <h2 className="doc-section__title">Usage</h2>
        <pre><code>{`/* Hover transitions */
.button {
  transition: background var(--exds-transition-fast),
              box-shadow var(--exds-transition-fast);
}

/* Modal entrance */
.modal {
  transition: opacity var(--exds-transition-slow),
              transform var(--exds-transition-slow);
}

/* Bouncy popover */
.popover {
  transition: transform var(--exds-transition-spring);
}

/* Spinner */
@keyframes spin {
  to { transform: rotate(360deg); }
}
.spinner {
  animation: spin 1s var(--exds-ease-linear) infinite;
}`}</code></pre>
      </section>

      {/* Do's and Don'ts */}
      <section className="doc-section">
        <h2 className="doc-section__title">Do's and Don'ts</h2>
        <div className="doc-guidelines">
          <div className="doc-guideline">
            <span className="doc-guideline__icon"><DoIcon /></span>
            <span><strong>Do</strong> use <code>ease-out</code> for elements entering the screen and <code>ease-in</code> for elements leaving: this mirrors natural physics.</span>
          </div>
          <div className="doc-guideline">
            <span className="doc-guideline__icon"><DontIcon /></span>
            <span><strong>Don't</strong> use <code>ease-spring</code> on utility transitions like alerts or error states: save it for playful, engaging moments.</span>
          </div>
          <div className="doc-guideline">
            <span className="doc-guideline__icon"><DoIcon /></span>
            <span><strong>Do</strong> keep UI transitions under <code>350ms</code>. Longer animations feel sluggish in data-dense enterprise contexts.</span>
          </div>
          <div className="doc-guideline">
            <span className="doc-guideline__icon"><DontIcon /></span>
            <span><strong>Don't</strong> animate layout properties like <code>width</code>, <code>height</code>, or <code>top/left</code>: prefer <code>transform</code> and <code>opacity</code> for GPU-accelerated performance.</span>
          </div>
          <div className="doc-guideline">
            <span className="doc-guideline__icon"><DoIcon /></span>
            <span><strong>Do</strong> respect <code>prefers-reduced-motion</code>: wrap non-essential animations with a media query and disable or shorten them.</span>
          </div>
        </div>
      </section>
    </div>
  );
}
