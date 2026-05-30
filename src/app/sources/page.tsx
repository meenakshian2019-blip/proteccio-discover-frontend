"use client";

import { useState } from "react";
import { api } from "@/services/api";

export default function SourcesPage() {
  const [file, setFile] = useState<File | null>(null);
  const [sourceName, setSourceName] = useState("");
  const [message, setMessage] = useState("");

  const handleUpload = async () => {
    if (!file) {
      setMessage("Please select a file");
      return;
    }

    try {
      const formData = new FormData();

      formData.append("file", file);
      formData.append(
  "data",
  JSON.stringify({
    source_name: sourceName || file.name,
  })
);

      const uploadResponse = await api.post(
        "/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log(uploadResponse.data);

      const analyzePayload = {
  source_name: sourceName || file.name,

  data: {
    email: "sample@gmail.com",
    phone: "9876543210",
    aadhaar: "123412341234",
    pan: "ABCDE1234F",
  },
};

      const analyzeResponse = await api.post(
        "/analyze",
        analyzePayload,
        {
          headers: {
            "x-api-key": "proteccio123",
          },
        }
      );
      localStorage.setItem(
  "analysisResults",
  JSON.stringify(analyzeResponse.data)
);

      console.log(analyzeResponse.data);

      setMessage("Upload and analysis completed successfully");
    } catch (error: any) {
  console.log(error);

  if (error.response) {
    console.log(error.response.data);
    setMessage(
      JSON.stringify(error.response.data)
    );
  } else {
    setMessage("Upload failed");
  }
}
  };

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow">
        <h1 className="text-3xl font-bold mb-6">
          Source Upload
        </h1>

        <div className="mb-4">
          <label className="block mb-2 font-medium">
            Source Name
          </label>

          <input
            type="text"
            placeholder="Enter source name"
            value={sourceName}
            onChange={(e) =>
              setSourceName(e.target.value)
            }
            className="w-full border p-3 rounded"
          />
        </div>

        <div className="mb-6">
          <label className="block mb-2 font-medium">
            Upload File
          </label>

          <input
            type="file"
            onChange={(e) => {
              if (e.target.files?.[0]) {
                setFile(e.target.files[0]);
              }
            }}
            className="w-full"
          />
        </div>

        <button
          onClick={handleUpload}
          className="bg-black text-white px-6 py-3 rounded"
        >
          Upload & Analyze
        </button>

        {message && (
          <div className="mt-6 p-4 bg-gray-100 rounded">
            {message}
          </div>
        )}
      </div>
    </div>
  );
}