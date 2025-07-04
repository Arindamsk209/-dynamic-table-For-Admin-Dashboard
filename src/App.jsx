import React from "react";
import AdminTable from "./components/AdminTable/AdminTable";
import { useTheme } from "./context/ThemeContext";

export default function App() {
  const { dark, setDark } = useTheme();

  return (
    <div className={`min-h-screen ${dark ? "dark bg-[#121212] text-white" : "bg-white text-black"} transition-all`}>
      <div className="p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        <button
          onClick={() => setDark(!dark)}
          className="px-4 py-2 rounded bg-orange-500 text-white hover:bg-orange-600"
        >
          Toggle {dark ? "Light" : "Dark"} Mode
        </button>
      </div>
      <AdminTable />
    </div>
  );
}
