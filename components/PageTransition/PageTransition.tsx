"use client";

import { useNavigationTransition } from "@/hooks/useNavigationTransition";

import LoadingSpinner from "./LoadingSpinner";

interface PageTransitionProps {
  children: React.ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
  const isNavigating = useNavigationTransition();

  return (
    <>
      {isNavigating && <LoadingSpinner />}
      <div
        className={`transition-all duration-300 ease-in-out ${
          isNavigating
            ? "-translate-y-2 transform opacity-0"
            : "translate-y-0 transform opacity-100"
        }`}
      >
        {children}
      </div>
    </>
  );
}
