"use client";
import { api } from "@/services/api";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Low", value: 12 },
  { name: "Medium", value: 8 },
  { name: "High", value: 5 },
  { name: "Critical", value: 3 },
];

const COLORS = ["#22c55e", "#eab308", "#f97316", "#ef4444"];

export default function DashboardPage() {
  const [user, setUser] = useState<any>(null);
  const [metrics, setMetrics] = useState<any>(null);

  useEffect(() => {
    const getUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        window.location.href = "/login";
      } else {
        setUser(user);
      }
    };

    getUser();
    const fetchMetrics = async () => {
  try {
    const response = await api.get("/dashboard/metrics", {
  headers: {
    "x-api-key": "proteccio123",
  },
});
    setMetrics(response.data);
  } catch (error) {
    console.error(error);
  }
};

fetchMetrics();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    window.location.href = "/login";
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-4xl font-bold">
            Proteccio Dashboard
          </h1>

          {user && (
            <p className="text-gray-600 mt-2">
              Logged in as {user.email}
            </p>
          )}
        </div>

        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Logout
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-gray-500">Total Scans</h2>
          <p className="text-3xl font-bold mt-2">{metrics?.total_scanned_records || 0}</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-gray-500">Sensitive Records</h2>
          <p className="text-3xl font-bold mt-2">{metrics?.total_sensitive_records || 0}</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-gray-500">High Risk Datasets</h2>
          <p className="text-3xl font-bold mt-2">{metrics?.high_risk_source_count || 0}</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-gray-500">Compliance Score</h2>
          <p className="text-3xl font-bold mt-2">82%</p>
        </div>
      </div>

      <div
  className="bg-white p-6 rounded-xl shadow"
  style={{ height: 500 }}
>
  <h2 className="text-2xl font-bold mb-6">
    Risk Distribution
  </h2>

  <ResponsiveContainer width="100%" height="85%">
    <PieChart>
      <Pie
        data={data}
        dataKey="value"
        cx="50%"
        cy="50%"
        outerRadius={140}
        label
      >
        {data.map((entry, index) => (
          <Cell
            key={index}
            fill={COLORS[index % COLORS.length]}
          />
        ))}
      </Pie>

      <Tooltip />
    </PieChart>
  </ResponsiveContainer>
</div>
    </div>
  );
}