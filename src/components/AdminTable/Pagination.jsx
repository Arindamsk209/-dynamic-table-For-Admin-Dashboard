import React from "react";

export default function Pagination({ currentPage, totalPages, setPage }) {
  return (
    <div className="flex justify-end items-center mt-4 space-x-2">
      <button
        onClick={() => setPage(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-3 py-1 bg-gray-200 text-gray-700 dark:bg-[#2c2c2c] dark:text-white rounded hover:bg-gray-300 disabled:opacity-50"
      >
        Prev
      </button>
      {Array.from({ length: totalPages }, (_, i) => (
        <button
          key={i}
          onClick={() => setPage(i + 1)}
          className={`px-3 py-1 rounded ${
            currentPage === i + 1
              ? "bg-orange-500 text-white"
              : "bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-[#2c2c2c] dark:text-white"
          }`}
        >
          {i + 1}
        </button>
      ))}
      <button
        onClick={() => setPage(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-3 py-1 bg-gray-200 text-gray-700 dark:bg-[#2c2c2c] dark:text-white rounded hover:bg-gray-300 disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
}
