import React from 'react';
import Skeleton from '../../components/Skeleton/Skeleton';
import Avatar from '../../components/Avatar/Avatar';
import { DoIcon, DontIcon, BulletIcon, ArrowIcon, ZapIcon } from '../docIcons';

export default function SkeletonPage() {
  return (
    <div className="doc-page">
      <div className="doc-page__header">
        <h1 className="doc-page__title">Skeleton</h1>
        <p className="doc-page__subtitle">
          Skeleton loaders are content-shaped placeholders shown while data is
          being fetched. They reduce perceived wait time and prevent layout shift
          compared to blank screens or spinners alone.
        </p>
      </div>

      {/* Card skeleton demo */}
      <section className="doc-section">
        <h2 className="doc-section__title">Card Skeleton</h2>
        <div className="doc-preview">
          <div style={{ maxWidth: '340px', background: 'var(--exds-color-surface)', border: '1px solid var(--exds-color-border-subtle)', borderRadius: 'var(--exds-radius-lg)', overflow: 'hidden', padding: '16px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <Skeleton variant="rect" height="180px" />
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Skeleton variant="circle" width="36px" height="36px" />
              <div style={{ flex: 1 }}>
                <Skeleton variant="text" lines={1} />
              </div>
            </div>
            <Skeleton variant="text" lines={3} />
          </div>
        </div>
      </section>

      {/* List skeleton */}
      <section className="doc-section">
        <h2 className="doc-section__title">List Skeleton</h2>
        <div className="doc-preview" style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '400px' }}>
          {[1,2,3].map((i) => (
            <div key={i} style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
              <Skeleton variant="circle" width="40px" />
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <Skeleton variant="text" lines={1} />
                <Skeleton variant="text" lines={1} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Variants reference */}
      <section className="doc-section">
        <h2 className="doc-section__title">Variants</h2>
        <div className="doc-preview" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div>
            <p className="doc-section__label">text</p>
            <Skeleton variant="text" lines={3} />
          </div>
          <div>
            <p className="doc-section__label">rect</p>
            <Skeleton variant="rect" height="80px" />
          </div>
          <div>
            <p className="doc-section__label">circle</p>
            <Skeleton variant="circle" width="48px" />
          </div>
        </div>
      </section>

      {/* Usage */}
      <section className="doc-section">
        <h2 className="doc-section__title">Usage</h2>
        <pre><code>{`{isLoading ? (
  <Skeleton variant="text" lines={3} />
) : (
  <p>{content}</p>
)}

<Skeleton variant="rect" width="100%" height="200px" />
<Skeleton variant="circle" width="48px" />`}</code></pre>
      </section>

      {/* Props */}
      <section className="doc-section">
        <h2 className="doc-section__title">Props</h2>
        <table className="doc-props-table">
          <thead><tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
          <tbody>
            <tr><td><code>variant</code></td><td><code>'text'|'rect'|'circle'</code></td><td><code>'rect'</code></td><td>Shape of the skeleton</td></tr>
            <tr><td><code>width</code></td><td>string (CSS)</td><td><code>'100%'</code></td><td>Width for rect/circle variants</td></tr>
            <tr><td><code>height</code></td><td>string (CSS)</td><td><code>'120px'</code></td><td>Height for rect/circle variants</td></tr>
            <tr><td><code>lines</code></td><td>number</td><td><code>3</code></td><td>Number of text lines to render</td></tr>
            <tr><td><code>animated</code></td><td>boolean</td><td><code>true</code></td><td>Enables the shimmer animation</td></tr>
          </tbody>
        </table>
      </section>

      {/* Do's and Don'ts */}
      <section className="doc-section">
        <h2 className="doc-section__title">Do's and Don'ts</h2>
        <div className="doc-guidelines">
          <div className="doc-guideline"><span className="doc-guideline__icon"><DoIcon /></span><span><strong>Do</strong> mirror the shape and size of the content that will replace the skeleton: it reduces layout shift.</span></div>
          <div className="doc-guideline"><span className="doc-guideline__icon"><DontIcon /></span><span><strong>Don't</strong> show skeletons for operations under 300ms: a brief flash of skeleton is more disruptive than waiting.</span></div>
          <div className="doc-guideline"><span className="doc-guideline__icon"><DoIcon /></span><span><strong>Do</strong> use <code>animated={false}</code> for users who prefer reduced motion (combine with <code>prefers-reduced-motion</code>).</span></div>
        </div>
      </section>
    </div>
  );
}
