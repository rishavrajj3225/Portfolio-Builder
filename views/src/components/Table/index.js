import React, { useState } from "react";

const tableData = [
  { name: "Cupcake", calories: 305, fat: 3.7, carbs: 67, protein: 4.3 },
  { name: "Donut", calories: 452, fat: 25.0, carbs: 51, protein: 4.9 },
  { name: "Eclair", calories: 262, fat: 16.0, carbs: 24, protein: 6.0 },
  { name: "Frozen yoghurt", calories: 159, fat: 6.0, carbs: 24, protein: 4.0 },
  { name: "Gingerbread", calories: 356, fat: 16.0, carbs: 49, protein: 3.9 },
  { name: "Honeycomb", calories: 408, fat: 3.2, carbs: 87, protein: 6.5 },
  {
    name: "Ice cream sandwich",
    calories: 237,
    fat: 9.0,
    carbs: 37,
    protein: 4.3,
  },
  { name: "Jelly Bean", calories: 375, fat: 0.0, carbs: 94, protein: 0.0 },
  { name: "KitKat", calories: 518, fat: 26.0, carbs: 65, protein: 7.0 },
  { name: "Lollipop", calories: 392, fat: 0.2, carbs: 98, protein: 0.0 },
];

export default function EnhancedTable() {
  const [sortConfig, setSortConfig] = useState({
    key: "calories",
    direction: "asc",
  });
  const [selectedRows, setSelectedRows] = useState([]);
  const [page, setPage] = useState(0);
  const rowsPerPage = 5;

  const sortedData = [...tableData].sort((a, b) => {
    if (a[sortConfig.key] < b[sortConfig.key])
      return sortConfig.direction === "asc" ? -1 : 1;
    if (a[sortConfig.key] > b[sortConfig.key])
      return sortConfig.direction === "asc" ? 1 : -1;
    return 0;
  });

  const paginatedData = sortedData.slice(
    page * rowsPerPage,
    (page + 1) * rowsPerPage
  );

  const toggleSort = (key) => {
    setSortConfig({
      key,
      direction:
        sortConfig.key === key && sortConfig.direction === "asc"
          ? "desc"
          : "asc",
    });
  };

  const toggleSelectRow = (name) => {
    setSelectedRows((prev) =>
      prev.includes(name) ? prev.filter((n) => n !== name) : [...prev, name]
    );
  };

  return (
    <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-xl font-bold text-center mb-4">Nutrition Table</h2>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-2">
                <input
                  type="checkbox"
                  checked={selectedRows.length === tableData.length}
                  onChange={() =>
                    setSelectedRows(
                      selectedRows.length === tableData.length
                        ? []
                        : tableData.map((row) => row.name)
                    )
                  }
                />
              </th>
              {["name", "calories", "fat", "carbs", "protein"].map((key) => (
                <th
                  key={key}
                  className="p-2 cursor-pointer text-left"
                  onClick={() => toggleSort(key)}
                >
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                  {sortConfig.key === key
                    ? sortConfig.direction === "asc"
                      ? " ▲"
                      : " ▼"
                    : ""}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((row) => (
              <tr
                key={row.name}
                className={`border-b border-gray-300 ${
                  selectedRows.includes(row.name) ? "bg-blue-100" : ""
                }`}
              >
                <td className="p-2">
                  <input
                    type="checkbox"
                    checked={selectedRows.includes(row.name)}
                    onChange={() => toggleSelectRow(row.name)}
                  />
                </td>
                <td className="p-2">{row.name}</td>
                <td className="p-2">{row.calories}</td>
                <td className="p-2">{row.fat}</td>
                <td className="p-2">{row.carbs}</td>
                <td className="p-2">{row.protein}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-4">
        <button
          className="px-4 py-2 bg-gray-400 text-white rounded-lg disabled:opacity-50"
          onClick={() => setPage((prev) => Math.max(prev - 1, 0))}
          disabled={page === 0}
        >
          Previous
        </button>
        <span>
          Page {page + 1} of {Math.ceil(tableData.length / rowsPerPage)}
        </span>
        <button
          className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg"
          onClick={() =>
            setPage((prev) =>
              Math.min(prev + 1, Math.ceil(tableData.length / rowsPerPage) - 1)
            )
          }
          disabled={page === Math.ceil(tableData.length / rowsPerPage) - 1}
        >
          Next
        </button>
      </div>
    </div>
  );
}
