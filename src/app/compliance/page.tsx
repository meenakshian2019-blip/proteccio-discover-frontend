"use client";

export default function CompliancePage() {
  const complianceData = [
    {
      framework: "GDPR",
      status: "Compliant",
    },
    {
      framework: "DPDP",
      status: "Compliant",
    },
    {
      framework: "HIPAA",
      status: "Review Required",
    },
  ];

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">
        Compliance Dashboard
      </h1>

      <div className="grid grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="font-semibold">
            Compliance Score
          </h2>

          <p className="text-4xl font-bold mt-3">
            87%
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="font-semibold">
            Violations
          </h2>

          <p className="text-4xl font-bold mt-3">
            3
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="font-semibold">
            Open Remediations
          </h2>

          <p className="text-4xl font-bold mt-3">
            5
          </p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow p-6">
        <h2 className="font-bold mb-4">
          Framework Status
        </h2>

        {complianceData.map((item, index) => (
          <div
            key={index}
            className="flex justify-between border-b py-3"
          >
            <span>{item.framework}</span>
            <span>{item.status}</span>
          </div>
        ))}
      </div>
    </div>
  );
}