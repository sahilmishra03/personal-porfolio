"use client";

import React, { useState } from "react";

import Image from "next/image";
import Link from "next/link";

import SearchDialog from "../SearchDialog/SearchDialog";
import ThemeToggle from "../ui/ThemeToggle";

const NavBar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <>
      <nav className="from-background bg-background/60 border-border/40 fixed sticky inset-x-0 top-0 z-50 flex h-[80px] items-center justify-between border-b bg-gradient-to-b to-transparent [mask-image:linear-gradient(to_bottom,black_50%,transparent)] px-8 py-3 backdrop-blur-[5px] [-webkit-mask-image:linear-gradient(to_bottom,black_50%,transparent)] sm:px-[52px] md:mx-auto md:max-w-[1170px] md:justify-around md:px-0 dark:[mask-image:linear-gradient(to_bottom,black_50%,transparent)] dark:[-webkit-mask-image:linear-gradient(to_bottom,black_50%,transparent)]">
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
            <Link
              className="text-foreground/80 hover:text-foreground transition-colors"
              href="/resources"
            >
              Resources
            </Link>
            <Link
              className="text-foreground/80 hover:text-foreground transition-colors"
              href="/#projects"
            >
              Projects
            </Link>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={() => setIsSearchOpen(true)}
            className="border-input bg-muted/50 text-muted-foreground hover:bg-accent hover:text-accent-foreground focus-visible:ring-ring flex h-9 w-24 items-center justify-center rounded-md border text-sm font-medium shadow-sm transition-colors focus-visible:ring-2 focus-visible:outline-none sm:w-32"
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
