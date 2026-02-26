"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import ThemeToggle from "../ThemeToggle";
import SearchDialog from "../SearchDialog/SearchDialog";

const NavBar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <>
      <nav className="sticky top-0 z-50 flex items-center justify-between bg-background/60 px-8 py-3 backdrop-blur-md sm:px-[52px] md:mx-auto md:max-w-[1170px] md:justify-around md:px-0 border-b border-border/40">
        
        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="flex h-12 w-12 shrink-0 cursor-pointer items-center justify-center overflow-hidden rounded-xl bg-gray-200 transition-transform duration-200 hover:scale-95 dark:bg-gray-800"
          >
            <Image
              src="/Coding_Profile.jpg"
              alt="Profile"
              width={48}
              height={48}
              className="object-cover"
            />
          </Link>
          <div className="flex items-center gap-4 text-base font-medium">
            <Link className="text-foreground/80 transition-colors hover:text-foreground" href="/#work">
              Work
            </Link>
            <Link className="text-foreground/80 transition-colors hover:text-foreground" href="/#projects">
              Projects
            </Link>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button 
            type="button" 
            onClick={() => setIsSearchOpen(true)}
            className="flex h-9 w-24 items-center justify-center rounded-md border border-input bg-muted/50 text-sm font-medium text-muted-foreground shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:w-32"
          >
            Search
          </button>
          <ThemeToggle />
        </div>
      </nav>
      
      {/* Search Dialog */}
      <SearchDialog isOpen={isSearchOpen} setIsOpen={setIsSearchOpen} />
    </>
  );
};

export default NavBar;