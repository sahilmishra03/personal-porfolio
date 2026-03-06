"use client";

import { useEffect, useState } from "react";

export default function VisitorCounter() {
  const [views, setViews] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    fetch("/api/visitors")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => setViews(data.views))
      .catch((err) => {
        console.error("Error fetching views:", err);
        // Set a fallback value on error
        setViews(125);
      });
  }, []);

  // Helper function to get st, nd, rd, th
  const getOrdinalSuffix = (n: number) => {
    if (n > 3 && n < 21) return "th";
    switch (n % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  };

  // Prevent hydration mismatch by not rendering until client-side loads
  if (!mounted) return null;

  return (
    <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-[#111111]/80 px-5 py-2.5 text-sm text-zinc-400 shadow-sm backdrop-blur-md">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="opacity-70"
      >
        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
      <span>
        You are the{" "}
        <strong className="font-medium text-zinc-200">
          {views.toLocaleString()}
          {getOrdinalSuffix(views)}
        </strong>{" "}
        visitor
      </span>
    </div>
  );
}