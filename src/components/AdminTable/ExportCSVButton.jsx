import React from "react";

export default function ExportCSVButton({ data, visibleColumns, filename = "export.csv" }) {
  const handleExport = () => {
    if (!data || data.length === 0 || !visibleColumns || visibleColumns.length === 0) return;

    // Create CSV header from visible columns
    const header = visibleColumns.join(",");

    // Map each row to only include visible columns
    const rows = data.map(row =>
      visibleColumns.map(key => {
        const value = row[key];
        if (Array.isArray(value)) {
          // Convert array of objects (like metrics) to a string of values
          return `"${value.map(v => v?.value ?? "").join(" | ")}"`;
        }
        return `"${value ?? ""}"`;
      }).join(",")
    );

    const csvContent = [header, ...rows].join("\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", filename);
    link.style.visibility = "hidden";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button
      onClick={handleExport}
      className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition"
    >
      Export CSV
    </button>
  );
}
