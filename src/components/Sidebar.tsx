"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  const menuItems = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Sources", path: "/sources" },
    { name: "Discovery", path: "/discovery" },
    { name: "Compliance", path: "/compliance" },
    { name: "Reports", path: "/reports" },
  ];

  return (
    <div className="w-64 min-h-screen bg-black text-white p-6">
      <h1 className="text-2xl font-bold mb-8">
        Proteccio Discover
      </h1>

      <div className="space-y-3">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            href={item.path}
            className={`block p-3 rounded ${
              pathname === item.path
                ? "bg-white text-black"
                : "hover:bg-gray-800"
            }`}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
}