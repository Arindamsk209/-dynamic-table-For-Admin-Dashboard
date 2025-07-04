import React from "react";

const columnMeta = {
  name: "User",
  email: "Email",
  status: "Status",
  amount: "Amount",
  metrics: "Activity",
};

export default function TableHead({ visibleColumns, sortConfig, onSort }) {
  const getSortSymbol = (key) => {
    if (sortConfig.key === key) {
      return sortConfig.direction === "asc" ? "▲" : "▼";
    }
    return "⇅"; // Neutral arrow
  };

  return (
    <thead className="bg-gray-100 dark:bg-[#1e1e1e] sticky top-0 z-10">
      <tr className="text-sm text-left text-gray-700 dark:text-gray-300 uppercase tracking-wider">
        {visibleColumns.map((key, index) => (
          <th
            key={key}
            onClick={() => onSort(key)}
            className={`px-4 py-3 whitespace-nowrap select-none cursor-pointer ${
              index < 2 ? "sticky left-0 bg-gray-100 dark:bg-[#1e1e1e] z-10" : ""
            }`}
          >
            <div className="flex items-center gap-1">
              <span>{columnMeta[key]}</span>
              <span className="text-xs">{getSortSymbol(key)}</span>
            </div>
          </th>
        ))}
      </tr>
    </thead>
  );
}
