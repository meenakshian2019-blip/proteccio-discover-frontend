"use client";

import { useEffect, useState } from "react";

export default function DiscoveryPage() {
  const [detections, setDetections] = useState<any[]>([]);
  const [riskLevel, setRiskLevel] = useState("");
  const [riskScore, setRiskScore] = useState(0);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const stored = localStorage.getItem("analysisResults");

    if (stored) {
      const data = JSON.parse(stored);

      setDetections(
        data.discovery?.detections || []
      );

      setRiskLevel(
        data.risk_analysis?.risk_level || "Unknown"
      );

      setRiskScore(
        data.risk_analysis?.risk_score || 0
      );
    }
  }, []);

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">
        Discovery Results
      </h1>

      <div className="grid grid-cols-2 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="font-semibold">
            Risk Level
          </h2>

          <p className="text-3xl font-bold mt-2">
            {riskLevel}
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="font-semibold">
            Risk Score
          </h2>

          <p className="text-3xl font-bold mt-2">
            {riskScore}
          </p>
        </div>
      </div>
      <input
  type="text"
  placeholder="Search detections..."
  value={search}
  onChange={(e) => setSearch(e.target.value)}
  className="border p-2 rounded mb-4 w-full"
/>

      <div className="bg-white rounded-xl shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-4 text-left">
                Field
              </th>

              <th className="p-4 text-left">
                Type
              </th>

              <th className="p-4 text-left">
                Value
              </th>

              <th className="p-4 text-left">
                Confidence
              </th>
            </tr>
          </thead>

          <tbody>
            {detections
  .filter(
    (item) =>
      item.field
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      item.type
        .toLowerCase()
        .includes(search.toLowerCase())
  )
  .map(
              (item, index) => (
                <tr
                  key={index}
                  className="border-b"
                >
                  <td className="p-4">
                    {item.field}
                  </td>

                  <td className="p-4">
                    {item.type}
                  </td>

                  <td className="p-4">
                    {item.value}
                  </td>

                  <td className="p-4">
                    {item.confidence}
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}