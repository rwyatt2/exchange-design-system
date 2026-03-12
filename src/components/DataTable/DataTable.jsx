import React from 'react';
import './DataTable.css';

export default function DataTable({ columns, data, onRowClick, className = '', emptyMessage = 'No data available' }) {
  return (
    <div className={`exds-table-wrapper ${className}`}>
      <table className="exds-table">
        <thead className="exds-table__head">
          <tr>
            {columns.map((col) => (
              <th
                key={col.key}
                className="exds-table__th"
                style={{ width: col.width, textAlign: col.align || 'left' }}
              >
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="exds-table__body">
          {data.length === 0 ? (
            <tr>
              <td colSpan={columns.length} className="exds-table__empty">{emptyMessage}</td>
            </tr>
          ) : (
            data.map((row, i) => (
              <tr
                key={row.id || i}
                className={`exds-table__row ${onRowClick ? 'exds-table__row--clickable' : ''}`}
                onClick={() => onRowClick?.(row)}
              >
                {columns.map((col) => (
                  <td key={col.key} className="exds-table__td" style={{ textAlign: col.align || 'left' }}>
                    {col.render ? col.render(row[col.key], row) : row[col.key]}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
