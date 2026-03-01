"use client";

import { useEffect, useState } from "react";

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
        className="bg-background text-foreground fixed right-6 bottom-6 z-40 flex items-center gap-2 rounded-full border px-4 py-3 text-sm shadow-lg transition-transform hover:scale-105"
      >
        <Search className="h-4 w-4" />
        <span className="hidden font-medium sm:inline">Search</span>
      </button>

      <SearchDialog isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}
