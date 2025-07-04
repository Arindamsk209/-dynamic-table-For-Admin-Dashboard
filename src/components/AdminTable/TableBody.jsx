import React from "react";
import ExpandedRow from "./ExpandedRow";
import Sparkline from "./Sparkline";

// Column renderers
const columnRenderers = {
  name: (user) => (
    <div className="flex items-center gap-3">
      <img
        src={user.avatar}
        alt={user.name}
        className="w-8 h-8 rounded-full object-cover"
      />
      <span>{user.name}</span>
    </div>
  ),
  email: (user) => user.email,
  status: (user) => (
    <span
      className={`text-xs font-semibold px-2 py-1 rounded-full ${
        user.status === "Active"
          ? "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-200"
          : user.status === "Pending"
          ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-200"
          : "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-100"
      }`}
    >
      {user.status}
    </span>
  ),
  amount: (user) => <span>₹{user.amount.toLocaleString()}</span>,
  metrics: (user) => <Sparkline data={user.metrics} />,
};

export default function TableBody({
  data,
  visibleColumns,
  expandedRow,
  onRowClick,
}) {
  return (
    <tbody>
      {data.map((user) => (
        <React.Fragment key={user.id}>
          <tr
            onClick={() => onRowClick(user.id)}
            className="hover:bg-blue-50 dark:hover:bg-gray-700 cursor-pointer transition duration-200"
          >
            {visibleColumns.map((colKey, index) => (
              <td
                key={colKey}
                className={`px-4 py-3 border-b text-sm text-gray-800 dark:text-gray-100
                  ${index < 2 ? "sticky left-0 z-10 bg-white dark:bg-[#121212]" : "bg-white dark:bg-[#121212]"}
                `}
              >
                {columnRenderers[colKey]
                  ? columnRenderers[colKey](user)
                  : user[colKey] ?? "—"}
              </td>
            ))}
          </tr>

          {expandedRow === user.id && (
            <tr className="animate-fadeIn bg-gray-50 dark:bg-[#1c1c1c]">
              <td colSpan={visibleColumns.length} className="p-4 border-b">
                <ExpandedRow user={user} />
              </td>
            </tr>
          )}
        </React.Fragment>
      ))}
    </tbody>
  );
}
