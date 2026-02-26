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
            ? "opacity-0 transform -translate-y-2"
            : "opacity-100 transform translate-y-0"
        }`}
      >
        {children}
      </div>
    </>
  );
}
