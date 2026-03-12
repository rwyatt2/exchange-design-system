import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './Pagination.css';

export default function Pagination({
  currentPage = 1,
  totalPages = 1,
  onPageChange,
  sibling = 1,
  compact = false,
}) {
  const clamp = (n) => Math.max(1, Math.min(n, totalPages));

  const getPages = () => {
    const pages = [];
    const left  = Math.max(2, currentPage - sibling);
    const right = Math.min(totalPages - 1, currentPage + sibling);

    pages.push(1);
    if (left > 2) pages.push('...');
    for (let i = left; i <= right; i++) pages.push(i);
    if (right < totalPages - 1) pages.push('...');
    if (totalPages > 1) pages.push(totalPages);
    return pages;
  };

  const go = (page) => {
    const p = clamp(page);
    if (p !== currentPage && onPageChange) onPageChange(p);
  };

  const pages = getPages();

  return (
    <nav className="exds-pagination" aria-label="Pagination">
      <button
        className="exds-pagination__btn"
        onClick={() => go(currentPage - 1)}
        disabled={currentPage <= 1}
        aria-label="Previous page"
      >
        <ChevronLeft size={14} strokeWidth={2} aria-hidden="true" />
        {!compact && <span>Previous</span>}
      </button>

      {!compact && pages.map((page, i) =>
        page === '...' ? (
          <span key={`ellipsis-${i}`} className="exds-pagination__ellipsis">…</span>
        ) : (
          <button
            key={page}
            className={`exds-pagination__page ${page === currentPage ? 'exds-pagination__page--active' : ''}`}
            onClick={() => go(page)}
            aria-label={`Page ${page}`}
            aria-current={page === currentPage ? 'page' : undefined}
          >
            {page}
          </button>
        )
      )}

      {compact && (
        <span className="exds-pagination__label">
          {currentPage} / {totalPages}
        </span>
      )}

      <button
        className="exds-pagination__btn"
        onClick={() => go(currentPage + 1)}
        disabled={currentPage >= totalPages}
        aria-label="Next page"
      >
        {!compact && <span>Next</span>}
        <ChevronRight size={14} strokeWidth={2} aria-hidden="true" />
      </button>
    </nav>
  );
}
