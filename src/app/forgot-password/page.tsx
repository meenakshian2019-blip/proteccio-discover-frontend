"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleReset = async () => {
    const { error } = await supabase.auth.resetPasswordForEmail(
      email,
      {
        redirectTo:
          window.location.origin +
          "/reset-password",
      }
    );

    if (error) {
      setMessage(error.message);
    } else {
      setMessage(
        "Password reset email sent successfully."
      );
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow w-96">
        <h1 className="text-2xl font-bold mb-4">
          Forgot Password
        </h1>

        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
          className="border p-2 w-full mb-4 rounded"
        />

        <button
          onClick={handleReset}
          className="bg-black text-white px-4 py-2 rounded w-full"
        >
          Send Reset Link
        </button>

        <p className="mt-4">
          {message}
        </p>
      </div>
    </div>
  );
}