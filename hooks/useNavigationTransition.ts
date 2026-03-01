"use client";

import { useEffect, useState } from "react";

import { usePathname } from "next/navigation";

export function useNavigationTransition() {
  const [isNavigating, setIsNavigating] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsNavigating(true);
      setTimeout(() => {
        setIsNavigating(false);
      }, 300);
    }, 0);

    return () => clearTimeout(timer);
  }, [pathname]);

  return isNavigating;
}
