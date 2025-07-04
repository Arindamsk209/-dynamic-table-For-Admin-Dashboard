import React from "react";

export default function Filters({
  search,
  setSearch,
  statusFilter,
  setStatusFilter,
  amountRange,
  setAmountRange,
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <input
        type="text"
        placeholder="Search by name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="px-4 py-2 border rounded-md shadow-sm focus:ring-2 focus:ring-orange-400 dark:bg-[#2c2c2c] dark:text-white"
      />
      <select
        value={statusFilter}
        onChange={(e) => setStatusFilter(e.target.value)}
        className="px-4 py-2 border rounded-md shadow-sm focus:ring-2 focus:ring-orange-400 dark:bg-[#2c2c2c] dark:text-white"
      >
        <option value="All">All Status</option>
        <option value="Active">Active</option>
        <option value="Pending">Pending</option>
        <option value="Inactive">Inactive</option>
      </select>
      <div className="flex flex-col">
        <label className="text-sm mb-1 dark:text-gray-300">Amount: ₹{amountRange[0]} - ₹{amountRange[1]}</label>
        <input
          type="range"
          min={0}
          max={10000}
          step={100}
          value={amountRange[1]}
          onChange={(e) => setAmountRange([0, parseInt(e.target.value)])}
          className="w-full"
        />
      </div>
    </div>
  );
}
