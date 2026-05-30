"use client";

export default function ReportsPage() {
    const downloadJSON = () => {
  const data =
    localStorage.getItem("analysisResults");

  const blob = new Blob(
    [data || "{}"],
    {
      type: "application/json",
    }
  );

  const url =
    URL.createObjectURL(blob);

  const a =
    document.createElement("a");

  a.href = url;
  a.download =
    "analysis-report.json";

  a.click();
};
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

        <button
  onClick={downloadJSON}
  className="bg-white p-6 rounded-xl shadow hover:shadow-lg"
>
  Export JSON Report
</button>
      </div>
    </div>
  );
}