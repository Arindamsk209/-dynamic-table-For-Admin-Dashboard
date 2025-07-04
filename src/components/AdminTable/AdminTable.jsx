import React, { useState, useMemo } from "react";
import mockData from "../../data/mockData.json";
import TableHead from "./TableHead";
import TableBody from "./TableBody";
import Pagination from "./Pagination";
import Filters from "./Filters";
import ColumnConfig from "./ColumnConfig";
import ThemeToggle from "./ThemeToggle";
import ExportCSVButton from "./ExportCSVButton";


export default function AdminTable() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [amountRange, setAmountRange] = useState([0, 10000]);
  const [page, setPage] = useState(1);
  const [expandedRow, setExpandedRow] = useState(null);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });

  const allColumns = ["name", "email", "status", "amount", "metrics"];
  const [visibleMap, setVisibleMap] = useState(
    Object.fromEntries(allColumns.map((key) => [key, true]))
  );
  const visibleColumns = allColumns.filter((key) => visibleMap[key]);

  const toggleColumn = (key) =>
    setVisibleMap((prev) => ({ ...prev, [key]: !prev[key] }));

  const sortedData = useMemo(() => {
    let sorted = [...mockData];
    if (sortConfig.key) {
      sorted.sort((a, b) => {
        const aVal = a[sortConfig.key];
        const bVal = b[sortConfig.key];
        if (aVal < bVal) return sortConfig.direction === "asc" ? -1 : 1;
        if (aVal > bVal) return sortConfig.direction === "asc" ? 1 : -1;
        return 0;
      });
    }
    return sorted;
  }, [mockData, sortConfig]);

  const filtered = useMemo(() => {
    return sortedData.filter((u) => {
      return (
        u.name.toLowerCase().includes(search.toLowerCase()) &&
        (statusFilter === "All" || u.status === statusFilter) &&
        u.amount >= amountRange[0] &&
        u.amount <= amountRange[1]
      );
    });
  }, [search, statusFilter, amountRange, sortedData]);

  const rowsPerPage = 9;
  const paginated = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    return filtered.slice(start, start + rowsPerPage);
  }, [filtered, page]);

  const handleSort = (key) => {
    setSortConfig((prev) => ({
      key,
      direction: prev.key === key && prev.direction === "asc" ? "desc" : "asc",
    }));
  };

  const handleRowClick = (id) => {
    setExpandedRow((prev) => (prev === id ? null : id));
  };

  return (
    <div className="p-6 rounded-xl shadow-xl bg-white dark:bg-zinc-900">
     <div className="flex justify-between items-center mb-4">
  <Filters
    search={search}
    setSearch={setSearch}
    statusFilter={statusFilter}
    setStatusFilter={setStatusFilter}
    amountRange={amountRange}
    setAmountRange={setAmountRange}
  />
  <ExportCSVButton data={filtered} visibleColumns={visibleColumns} />

</div>


      <div className="overflow-auto rounded-lg border border-gray-200 dark:border-zinc-700 mt-4">
        <table className="min-w-full bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-100">
          <thead>
            <tr>
              <td colSpan={visibleColumns.length} className="px-4 py-2">
                <ColumnConfig
                  allColumns={allColumns}
                  visibleMap={visibleMap}
                  toggleColumn={toggleColumn}
                />
              </td>
            </tr>
          </thead>
          <TableHead
            visibleColumns={visibleColumns}
            sortConfig={sortConfig}
            onSort={handleSort}
          />
          <TableBody
            data={paginated}
            visibleColumns={visibleColumns}
            expandedRow={expandedRow}
            onRowClick={handleRowClick}
          />
        </table>
      </div>

      <Pagination
        currentPage={page}
        totalPages={Math.ceil(filtered.length / rowsPerPage)}
        setPage={setPage}
      />
    </div>
  );
}
