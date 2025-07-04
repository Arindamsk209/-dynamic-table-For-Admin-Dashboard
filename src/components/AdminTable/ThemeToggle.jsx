import React from "react";
import { useTheme } from "../../context/ThemeContext";

export default function ThemeToggle() {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="px-4 py-1 rounded text-sm font-medium text-white bg-orange-500 hover:bg-orange-600 transition"
    >
      {darkMode ? "Light Mode" : "Dark Mode"}
    </button>
  );
}
