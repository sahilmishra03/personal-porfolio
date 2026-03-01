"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import SearchDialog from "../SearchDialog/SearchDialog";
import ThemeToggle from "../ui/ThemeToggle";

const NavBar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Prevent background scrolling when the mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* RESTORED EXACT ORIGINAL DESKTOP CLASSES */}
      {/* We only conditionally remove the mask-image on mobile WHEN the menu is open to prevent text clashing */}
      <nav 
        className={`from-background bg-background/60 border-border/40 fixed sticky inset-x-0 top-0 z-50 flex h-[80px] items-center justify-between border-b bg-gradient-to-b to-transparent px-8 py-3 backdrop-blur-[5px] sm:px-[52px] md:mx-auto md:max-w-[1170px] md:justify-around md:px-0 transition-colors ${
          isMobileMenuOpen 
            ? "bg-background [mask-image:none] [-webkit-mask-image:none] dark:[mask-image:none] dark:[-webkit-mask-image:none]" 
            : "[mask-image:linear-gradient(to_bottom,black_50%,transparent)] [-webkit-mask-image:linear-gradient(to_bottom,black_50%,transparent)] dark:[mask-image:linear-gradient(to_bottom,black_50%,transparent)] dark:[-webkit-mask-image:linear-gradient(to_bottom,black_50%,transparent)]"
        }`}
      >
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
          
          {/* Desktop links - Original code preserved, just hidden on mobile */}
          <div className="hidden md:flex items-center gap-4 text-base font-medium">
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

          {/* Hamburger Icon - Hidden on desktop */}
          <button
            type="button"
            className="flex items-center justify-center p-2 text-foreground/80 transition-colors hover:text-foreground md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h18M3 6h18M3 18h18" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Full-Screen Menu Overlay - Rendered as a sibling to nav so it doesn't get clipped */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-[80px] z-40 flex flex-col items-center justify-start bg-background pt-20 md:hidden">
          <Link
            className="text-foreground/80 hover:text-foreground mb-8 text-2xl font-semibold transition-colors"
            href="/resources"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Resources
          </Link>
          <Link
            className="text-foreground/80 hover:text-foreground mb-8 text-2xl font-semibold transition-colors"
            href="/#projects"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Projects
          </Link>
        </div>
      )}

      {/* Search Dialog */}
      <SearchDialog isOpen={isSearchOpen} setIsOpen={setIsSearchOpen} />
    </>
  );
};

export default NavBar;