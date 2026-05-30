"use client";

export default function ReportsPage() {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">
        Reports
      </h1>

      <div className="grid grid-cols-3 gap-6">
        <button className="bg-white p-6 rounded-xl shadow hover:shadow-lg">
          Export PDF Report
        </button>

        <button className="bg-white p-6 rounded-xl shadow hover:shadow-lg">
          Export CSV Report
        </button>

        <button className="bg-white p-6 rounded-xl shadow hover:shadow-lg">
          Export JSON Report
        </button>
      </div>
    </div>
  );
}