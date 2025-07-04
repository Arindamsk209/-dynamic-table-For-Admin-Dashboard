import React from "react";

export default function ColumnConfig({ allColumns, visibleMap, toggleColumn }) {
  return (
    <div className="flex flex-wrap gap-4 p-2 bg-gray-100 dark:bg-[#1e1e1e] border-b">
      Show Columns{allColumns.map((col) => (
        <label key={col} className="flex items-center gap-2 text-sm capitalize">
          <input
            type="checkbox"
            checked={visibleMap[col]}
            onChange={() => toggleColumn(col)}
          />
          {col}
        </label>
      ))}
    </div>
  );
}
