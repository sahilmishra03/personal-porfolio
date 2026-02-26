"use client";

import { useState, useEffect } from "react";
import { Search } from "lucide-react";
import SearchDialog from "./SearchDialog";

export default function SearchTrigger() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2 rounded-full border bg-background px-4 py-3 text-sm text-foreground shadow-lg transition-transform hover:scale-105"
      >
        <Search className="h-4 w-4" />
        <span className="hidden sm:inline font-medium">Search</span>
      </button>

      <SearchDialog isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}